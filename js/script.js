$(document).ready(function() {
  $("#tag-link, #code-btn-value, #code-btn-link, #btn-value, #btn-link-field").hide();
  createAllCollapseCards(3);
  createAllCollapseEditorCards(3);
});

// display component card upon select
$("#component-select").change(function() {
  $("#component-builder").show();
  $(".component-content").each(function() {
    $(this).hide();
  });
  $("#" + $(this).val()).show();
//  preview("btn");
});

/**********************************
 * button                         *
 **********************************/

// sets button style
$("#btn-style").change(function() {
  $("#code-btn-class-style").text("btn btn-" + $(this).val());
  preview("btn");
});

// sets button width
$("#btn-width").change(function() {
  $("#code-btn-class-width").text($(this).val());
  preview("btn");
});

// sets tags
$("#btn-tag").change(function() {
  $(".code-btn-tag").text($(this).val());
  $(this).val() == "a" ?  ($(
    "#btn-link-field, #code-btn-link").show(),
    $("#code-btn-type, #code-btn-value").hide(),
    updateBtnText()
  ) : (
    $("#btn-link-field, #code-btn-link").hide(),
    $("#code-btn-type").show(),
    (
      $(this).val() == "input" ? (
        $("#code-close-tag").hide(),
        $("#code-btn-value").show(),
        updateBtnValue()
      ) : (
        $("#code-close-tag").show(),
        $("#code-btn-value").hide(),
        updateBtnText()
      )
    )
  )
  preview("btn");
});

// generates button text from input
function updateBtnText() {
  updateText("btn", "#btn-text", "#code-btn-text", "Button Text");
}

function updateBtnValue() {
  updateText("btn", "#btn-text", "#code-btn-value-text", "Button Text");
  $("#code-btn-text").text("");
}

$("#btn-text").keyup(function() {
  if ( $(".code-btn-tag").html() === "input" ) {
   $("#code-btn-text").text("");
  } else {
    (!$(this).val() == "") ? $("#code-btn-text").text($(this).val()) : $("#code-btn-text").text("Button Text");
  }
  preview("btn");
}).keyup();

// generates link text from input
updateText("btn", "#btn-link", "#code-btn-link-text", "#");
 

/**********************************
 * transcript                     *
 **********************************/

updateText("ts", "#ts-title", "#code-ts-title", "Transcript title");
updateText("ts", "#ts-id", ".code-ts-id", "modname-unitno-transcript");
updateText("ts", "#ts-link", "#code-ts-link", "#");
updateText("ts", "#ts-body", "#code-ts-body", "Transcript body...");

// toggle view close transcript button 
$(".view-close-transcript").click(function() {
  $(this).text($(this).text() == 'View transcript' ? 'Close transcript' : 'View transcript');
});

/**********************************
 * embed                          *
 **********************************/

// change responsive ratio on size select
$("#em-player-size").change(function() {
  $("#code-em-player-size").text($(this).val());
  if (!$("#em-embed").val() == "") preview("em");
});

// generate embed code
updateText("em", "#em-embed", "#code-em-embed", "<iframe></iframe>");

/**********************************
 * collapse                       *
 **********************************/

// on selet change, show only the required no of cards to edit, update code and preview
$("#col-card-no").change(function() {
  maxCollapseCards = $(this).val();
  createAllCollapseCards(maxCollapseCards);
  createAllCollapseEditorCards(maxCollapseCards)
});

// create all collapse card code
function createAllCollapseCards(maxCollapseCards) {
  $("#code-col-cards").empty();
  for (let i = 1; i <= maxCollapseCards; i++) {
    card = createCollapseCard(i);
    $("#code-col-cards").append(card);
  }
  preview("col");
}

//create all collapse editor cards
function createAllCollapseEditorCards(maxCollapseCards) {
  $("#col-collapse").empty();
  for (let i = 1; i <= maxCollapseCards; i++) {
    card = createCollapseEditorCard(i);
    $("#col-collapse").append(card);
  }
  preview("col");
}

// create single collapse card code, shows first card and collapses all others
function createCollapseCard(i) {
  return `<span class="code-col-card"><span class="code-open-tag">&lt;div&#32;class&#61;&#34;card&#34;&gt;</span>
    <span class="code-open-tag">&lt;div&#32;class&#61;&#34;card&#45;header&#32;p&#45;0&#34;&#32;id&#61;&#34;<span class="code-col-id">modname&#45;unitno&#45;collapse&#45;no</span>&#45;heading&#45;<span class="code-col-card-no">${i}</span>&#34;&gt;</span>
      <span class="code-open-tag">&lt;button&#32;class&#61;&#34;btn&#32;btn&#45;link&#32;collapsed&#32;btn&#45;block&#32;text&#45;left&#32;px&#45;3${ i == 1 ? "" : "collapsed" }&#34;&#32;data&#45;toggle&#61;&#34;collapse&#34;&#32;data&#45;target&#61;&#34;#<span class="code-col-id">modname&#45;unitno&#45;collapse&#45;no</span>&#45;collapse&#45;${i}&#34;&#32;aria&#45;expanded&#61;&#34;false&#34;&#32;aria&#45;controls&#61;&#34;<span class="code-col-id">modname&#45;unitno&#45;collapse&#45;no</span>&#45;collapse&#45;${i}&#34;&gt;</span>
        <span class="code-open-tag">&lt;h3&#32class&#61;&#34;h5&#34;&gt;</span>
          <span id="code-col-collapse-${i}-heading">Collapse card #${i} heading</span>
        <span class="code-close-tag">&lt;&#47;h3&gt;</span>
      <span class="code-close-tag">&lt;&#47;button&gt;</span>
    <span class="code-close-tag">&lt;&#47;div&gt;</span>
    <span class="code-open-tag">&lt;div&#32;class&#61;&#34;${ i == 1 ? "collapse show" : "collapse" }&#34;&#32;id&#61;&#34;<span class="code-col-id">modname&#45;unitno&#45;collapse&#45;no</span>&#45;collapse&#45;${i}&#34;&#32;aria&#45;labelledby&#61;&#34;<span class="code-col-id">modname&#45;unitno&#45;collapse&#45;no</span>&#45;heading&#45;${i}&#34;&#32;data&#45;parent&#61;&#34;#<span class="code-col-id">modname&#45;unitno&#45;collapse&#45;no</span>&#34;&gt;</span>
      <span class="code-open-tag">&lt;div&#32;class&#61;&#34;card&#45;body&#34;&gt;</span>
        <span id="code-col-collapse-${i}-body">Collapse card #${i} body</span>
      <span class="code-close-tag">&lt;&#47;div&gt;</span>
    <span class="code-close-tag">&lt;&#47;div&gt;</span>
  <span class="code-close-tag">&lt;&#47;div&gt;</span></span>`;
}

// create single collapse editor card, shows first card and collapses all others
function createCollapseEditorCard(i) {
  return `
    <div class="card col-card" id="col-card-${i}">
      <div class="card-header p-0" id="col-card-heading-${i}">
        <button class="btn btn-link btn-block text-left px-3 ${ i == 1 ? "" : "collapsed" }" data-toggle="collapse" data-target="#collapse-${i}" aria-expanded="true" aria-controls="collapse-${i}">
          <h3 class="h5" style="margin-bottom:0 !important">Card #${i}</h3>
        </button>
      </div>
      <div id="collapse-${i}" class="${ i == 1 ? "collapse show" : "collapse" }" aria-labelledby="col-card-heading-${i}" data-parent="#col-collapse">
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="collapse-${i}-heading">Heading</label>
              <input type="text" class="form-control" id="collapse-${i}-heading" placeholder="Collapse card #${i} heading">
            </div>
            <div class="form-group">
              <label for="collapse-${i}-body">Body</label>
              <textarea class="form-control" id="collapse-${i}-body" placeholder="Collapse card #${i} body" rows="6"></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}

// generate card text from input
updateCollapseText(8);

function updateCollapseText(collapseCardLimit) {
  for (let i = 1; i <= collapseCardLimit; i++) {
    updateText2("col", "#collapse-" + i + "-heading", "#code-col-collapse-" + i + "-heading", "Collapse card #" + i + "heading");
    updateText2("col", "#collapse-" + i + "-body", "#code-col-collapse-" + i + "-body", "Collapse card #" + i + "body");
  }
}

/**********************************
 * general functions              *
 **********************************/

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

// disable preview button
function disablePreview() {
  $(".preview-pane").children().click(function (e) {
    e.preventDefault();
  });
};

// update text from input
function updateText(component, input, outputText, defaultText) {
  $(input).keyup(function() {
    (!$(this).val() == "") ? $(outputText).text($(this).val()) : $(outputText).text(defaultText);
    text = $("#" + component + "-print-code").text();
    $("#" + component + "-preview-pane").html(text);
  }).keyup();
}

// similar to updateText function but allows elements added to the DOM after page load to be identified
function updateText2(component, input, outputText, defaultText) {
  $(document).on('keyup', input, function (event) {
    (!$(this).val() == "") ? $(outputText).text($(this).val()) : $(outputText).text(defaultText);
    text = $("#" + component + "-print-code").text();
    $("#" + component + "-preview-pane").html(text);
  }).keyup();
}

// copy code onto clipboard
$(".copy-btn").click(function() {
  $(".component-title").select();
  document.execCommand("copy");
  alert ("Copied" + $(".preview-pane").html());
});
