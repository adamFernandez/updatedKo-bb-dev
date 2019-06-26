$(document).ready(function() {
  $("#tag-link, #code-btn-value, #code-btn-link, #btn-value").hide();
});

// display component card upon select
$("#component-select").change(function() {
  $("#component-builder").show();
  $(".component-content").each(function() {
    $(this).hide();
  });
  $("#" + $(this).val()).show();
  preview("btn");
});

/*
 * button
 */

// sets button style
$(".btn-style").click(function() {
  $("#code-btn-class-style").text("btn btn-"+$.trim($(this).text().toLowerCase()));
  preview("btn");
});

// sets button width 
$(".btn-width").click(function() {
  $(this).hasClass("btn-block") ?  $("#code-btn-class-width").text(" btn-block") : $("#code-btn-class-width").text("");
  preview("btn");
});

// sets tags
$(".tag-type").click(function() {
  var taglessText = ($(this).text()).replace(/\<|\>/g,"");
  var trimmedText = $.trim(taglessText);
  $(".code-btn-tag").text(trimmedText);
});

// generates button text from input
$("#btn-text").keyup(function() {
  (!$(this).val() == "") ? (
    $(".code-btn-text").text($(this).val()),
    ($(".tag-input").hasClass("active") ? $("#code-btn-text").text("") : null ) 
  ) : ($(".tag-input").hasClass("active") ? $(".code-btn-text").text("Button Value") : $(".code-btn-text").text("Button Text"))
  preview("btn")
}).keyup();

// generates link text from input
updateText("btn", "#btn-link", "#code-btn-link-text", "#");

// toggles field display on tag select
$(".tag-type").click(function() {
  $(this).hasClass("tag-a") ? displayA()
  : $(this).hasClass("tag-input") ? displayInput()
  : displayButton();
  preview("btn");
});
function displayButton() {
  $("#tag-link, #code-btn-link, #code-btn-value").hide();
  $("#code-btn-type, #code-btn-text, #code-close-tag").show();    
  (!$("#btn-text").val() == "") ? $(".code-btn-text").text($("#btn-text").val()) : $(".code-btn-text").text("Button Text");
}
function displayA() {
  $("#tag-link, #code-btn-link, #code-btn-text, #code-close-tag").show();
  $("#code-btn-type, #code-btn-value").hide();
  (!$("#btn-text").val() == "") ? $(".code-btn-text").text($("#btn-text").val()) : $(".code-btn-text").text("Button Text");

}
function displayInput() {
  $("#tag-link, #code-btn-link, #code-btn-text, #code-close-tag").hide();
  $("#code-btn-type, #code-btn-value").show();
  (!$("#btn-text").val() == "") ? $(".code-btn-text").text($("#btn-text").val()) : $(".code-btn-text").text("Button Value");
  $("#code-btn-text").text("");
}

// copy code onto clipboard
$(".copy-btn").click(function() {
  $(".component-title").select();
  document.execCommand("copy");
  alert ("Copied" + $(".preview-pane").html());
});

/*
 * transcript
 */ 
updateText("ts", "#ts-title", "#code-ts-title", "Transcript title");
updateText("ts", "#ts-id", ".code-ts-id", "modname-unitno-transcript");
updateText("ts", "#ts-link", "#code-ts-link", "#");
updateText("ts", "#ts-body", "#code-ts-body", "Transcript body...");

function updateText(component, input, outputText, defaultText) {
  $(input).keyup(function() {
    (!$(this).val() == "") ? $(outputText).text($(this).val()) : $(outputText).text(defaultText);
    text = $("#" + component + "-print-code").text();
    $("#" + component + "-preview-pane").html(text);
  }).keyup();
}

// toggle view close transcript button 
$(".view-close-transcript").click(function() {
  $(this).text($(this).text() == 'View transcript' ? 'Close transcript' : 'View transcript');
});

/*
 * embed
 */

// change responsive ratio on size select
$("#em-player-size").change(function() {
  $("#code-em-player-size").text($(this).val());
  if (!$("#em-embed").val() == "") preview("em");
});

// generate embed code
updateText("em", "#em-embed", "#code-em-embed", "<iframe></iframe>");
$("#em-embed").keyup(function() {
  preview("em");
});

/*
 * general functions
 */

// generate preview
function preview(component) {
  text = $("#" + component + "-print-code").text();
  if (component == "em") {
    text = text.replace('" width',
      '&amp;flashvars[infoScreen.plugin]=false&amp;flashvars[titleLabel.plugin]=false&amp;flashvars[related.plugin]=false&amp;flashvars[closedCaptions.displayCaptions]=false&amp;flashvars[closedCaptions.layout]=below&amp;flashvars[IframeCustomPluginCss1]=https:\/\/git.iddkingsonline.com\/kaltura\/kaltura.css" width');  
    $("#em-print-code").text(text);
  }
  $("#" + component + "-preview-pane").html(text);
  if (component == "btn") disablePreview();
}

//disable preview button
function disablePreview() {
  $(".preview-pane").children().click(function (e) {
    e.preventDefault();
  });
};