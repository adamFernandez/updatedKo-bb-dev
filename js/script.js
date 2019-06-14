$(document).ready(function() {
  $(".preview-pane").html("<button class=\"btn btn-primary\">Button Text</button>");
  $("#tag-link, .code-input-value").hide();
  $("#btn-text").text("Button Text");
  $(".code-link").empty();
});

//Display component card upon select
$("#component-select").change(function() {
  $("#component-builder").show();
  $(".component-content").each(function() {
    $(this).hide();
  });
  $("#" + $(this).val()).show();
});

//Generates button text from input
$(".btn-input").keyup(function() {
  if (!$(".tag-input").hasClass("active")) {
    if ($(this).val() == "") {
      $("#btn-text").text("Button Text");
    } else {
      $("#btn-text").text($(this).val());
    }   
  }
  else {
    $("#btn-text").empty();
  }
  disablePreview();
}).keyup();

//Sets button style
$(".btn-style").click(function() {
  $(".code-class-style").text("btn btn-"+$.trim($(this).text().toLowerCase()));
});

//Sets button width 
$(".btn-std-width").click(function() {
  $(".code-class-width").empty();
});
$(".btn-block").click(function() {
  $(".code-class-width").text(" btn-block");
});

//Sets tags
$(".tag-type").click(function() {
  var taglessText = ($(this).text()).replace(/\<|\>/g,"");
  var trimmedText = $.trim(taglessText);
  $(".code-tag").text(trimmedText);
});

// Toggles link input display on anchor tag select
$(".tag-type").click(function() {
  if ($(this).hasClass("tag-a")) {
    $("#tag-link").show();
    $(".code-type-pre").text("href=\"");
    $(".code-type").text("");
    if ($(".link-text").val() == "") {
      $(".code-link").text("#");    
    } else {
      $(".code-link").text($(".link-text").val());
    }
  } else {
    $("#tag-link").hide();
    $(".code-type-pre").text("type=\"");
    $(".code-link").empty();
    $(".code-type").text("button");
  }
});

// Generates link text from input
$(".link-text").keyup(function() {
  if (!$(this).val() == "") {
    $(".code-link").text($(this).val());
  } else {
    $(".code-link").text("#");
  }
}).keyup();

// Generates input value text
$(".btn-input").keyup(function () {
  if ($(".btn-input").val() == "") {
    $(".code-input-value-text").text("Button Value");
  } else { 
    $(".code-input-value-text").text($(this).val());
  } 
  text = $("#print-code").text();
  $(".preview-pane").html(text);
  disablePreview();
}).keyup();

// On option select
$(".btn:not(.btn-icon)").click(function() {
  if ($(this).hasClass("tag-input") || ($(".tag-input").hasClass("active") && !$(this).hasClass("tag-type"))) {
    $(".option-title.btn-text").text("Button Value");
    $(".code-input-value").show();
    $(".code-close-tag").hide();
    $("#btn-text").empty().hide();  
    // Sets input value attribute 
    if ($(".btn-input").val() == "") {
      $(".code-input-value-text").text("Button Value");
    } else {
      $(".code-input-value-text").text($(".btn-input").val());
    }
  } else {
    $(".option-title.btn-text").text("Button Text");
    $(".code-input-value").hide();
    $(".code-input-value-text").empty();
    $(".code-close-tag").show();
    $("#btn-text").show();
    // Sets button text    
    if ($(".btn-input").val() == "") {
      $("#btn-text").text("Button Text");
    } else {
      $("#btn-text").text($(".btn-input").val());  
    }
  }
  text = $("#print-code").text();
  $(".preview-pane").html(text);
  disablePreview();
}); 

//disable preview button
function disablePreview() {
  $(".preview-pane").children().click(function (e) {
    e.preventDefault();
  });
};
