$(document).ready(function() {
  $("#tag-link, #code-btn-value, #code-btn-link, #btn-value, #btn-link-field").hide();
  // set card to show 1 card by default
  createAllCardCards(1);
  createAllCardEditorCards(1);
  // set carousel to show 3 slides by default
  maxSlides = 3;
  createAllCarouselIndicators(maxSlides);
  createAllCarouselSlides(maxSlides);
  createAllCarouselEditorCards(maxSlides);
  // set collapse to show 3 cards by default
  createAllCollapseCards(3);
  createAllCollapseEditorCards(3);
  // set list to show 3 items by default
  maxListItems = 3;
  createAllListItems(maxListItems);
  createAllListItemEditorCards(maxListItems);
  // default embed preview on load
  $("#em-preview-pane").html('<div class="embed-responsive embed-responsive-400by285"><iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2368101/sp/236810100/embedIframeJs/uiconf_id/42876062/partner_id/2368101?iframeembed=true&playerId=kaltura_player&entry_id=0_m83muzm5&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_fejlyov0&amp;flashvars[infoScreen.plugin]=false&amp;flashvars[titleLabel.plugin]=false&amp;flashvars[related.plugin]=false&amp;flashvars[closedCaptions.displayCaptions]=false&amp;flashvars[closedCaptions.layout]=below&amp;flashvars[IframeCustomPluginCss1]=https://git.iddkingsonline.com/kaltura/kaltura.css" width="400" height="285" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" frameborder="0" title="Kaltura Player"></iframe></div>');
  // transcript preview
  preview("ts");
});

// display component card upon select
$("#component-select").change(function() {
  $("#component-builder").show();
  $(".component-content").each(function() {
    $(this).hide();
  });
  $("#" + $(this).val()).show();
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

// add variables and generate embed code
$("#em-embed").keyup(function() {
  embedId = $("#em-id").val();
  embedText = $(this).val();
  // update the id if provided
  if (!embedId == "") embedText = embedText.replace('iframe id="kaltura_player', 'iframe id="'+ embedId);
  embedText = embedText.replace('" width',
     '&amp;flashvars[infoScreen.plugin]=false&amp;flashvars[titleLabel.plugin]=false&amp;flashvars[related.plugin]=false&amp;flashvars[closedCaptions.displayCaptions]=false&amp;flashvars[closedCaptions.layout]=below&amp;flashvars[IframeCustomPluginCss1]=https:\/\/git.iddkingsonline.com\/kaltura\/kaltura.css" width');  
  (!embedText == "") ? $("#code-em-embed").text(embedText) : $("#code-em-embed").text("<iframe></iframe>");
  preview("em");
}).keyup();

// update the id, do not refresh preview
$("#em-id").keyup(function() {
  embedId = $(this).val();
  embedText = $("#em-embed").val();
  if (!embedText == "") embedText = embedText.replace('iframe id="kaltura_player', 'iframe id="'+ embedId);  
  (!embedText == "") ? $("#code-em-embed").text(embedText) : $("#code-em-embed").text("<iframe></iframe>");
}).keyup();


/**********************************
 * list                           *
 **********************************/

// on selet change, show only the required no of cards to edit, update code and preview
$("#ls-item-no").change(function(data){
  maxListItems = $(this).val();
  createAllListItems(maxListItems);
  createAllListItemEditorCards(maxListItems)
});
$("#ls-type").change(function(data){
  type = $(this).val();
  $(".code-ls-tag").text(type);
  preview("ls");
});

// create all list item code
function createAllListItems(maxListItems) {
  $("#code-ls-items").empty();
  for (let i = 1; i <= maxListItems; i++) {
    listItem = createListItem(i);
    $("#code-ls-items").append(listItem);
  }
  preview("ls");
}

//create all card editor cards
function createAllListItemEditorCards(maxListItems) {
  $("#ls-items").empty();
  for (let i = 1; i <= maxListItems; i++) {
    card = createListItemEditorCard(i);
    $("#ls-items").append(card);
  }
  preview("ls");
}
// create single list item code, shows first card and collapses all others
function createListItem(i) {
  return `${ i == 1 ? "" : "  "}<span class="code-ls-item"><span class="code-open-tag">&lt;li&gt;</span>
    <span id="code-ls-item-${i}-text">List item #${i} text</span>
  <span class="code-close-tag">&lt;&#47;li&gt;</span></span>${ i == maxListItems ? "" : "\n"}`;
}

// create single card editor card, shows first card and collapses all others
function createListItemEditorCard(i) {
  return `
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text">${i}</span>
  </div>
  <input type="text" class="form-control" id="ls-item-${i}-text" aria-label="List item text">
</div>`;
}

// generate card text from input
updateListItems(8);

updateTextOrHide("ls", "#ls-custom-class", "&#32;class&#61;&#34", "#code-ls-custom-class", "&#34;" );

function updateListItems(listItemLimit) {
  for (let i = 1; i <= listItemLimit; i++) {
    updateText("ls", "#ls-item-" + i + "-text", "#code-ls-item-" + i + "-text", "List item #" + i + " text");
  }
}

/**********************************
 * card                           *
 **********************************/

// on selet change, show only the required no of cards to edit, update code and preview
//$("#cd-card-no").on('focus', function() {
//  $(this).data("previous",$(this).val());
//  $("#cd-card-no").change(function(data){
//    alert($(this).data("previous"));
//    $(this).data("previous",$(this).val());
  $("#cd-card-no").change(function(){
    maxCardCards = $(this).val();
    if (maxCardCards == 1) $("#cd-layout").val("block").change();
//    $(this).blur();
//    if ( $(this).data("previous") > maxCardCards ) alert("foo");
    createAllCardCards(maxCardCards);
    createAllCardEditorCards(maxCardCards)
  });
//});

$("#cd-layout").change(function(data){
  $(this).val() == "deck" 
    ? ($("#code-cd-deck-open").text('<div class="card-deck">'),
      $("#code-cd-deck-close").text('</div>'))
    : ($("#code-cd-deck-open").empty(), $("#code-cd-deck-close").empty());
  preview("cd");  
});

// create all card card code
function createAllCardCards(maxCardCards) {
  ($("#cd-layout").val() == "block" || maxCardCards == 1) ? $(".code-cd-deck").hide() : $(".code-cd-deck").show() ;
  $("#code-cd-cards").empty();
  for (let i = 1; i <= maxCardCards; i++) {
    card = createCardCard(i);
    $("#code-cd-cards").append(card);
  }
  preview("cd");
}

//create all card editor cards
function createAllCardEditorCards(maxCardCards) {
  $("#cd-collapse").empty();
  for (let i = 1; i <= maxCardCards; i++) {
    card = createCardEditorCard(i);
    $("#cd-collapse").append(card);
  }
  preview("cd");
}
 
// create single card card code, shows first card and collapses all others
function createCardCard(i) {
  return `<pre>  <span class="code-cd-card"><span class="code-open-tag">&lt;div&#32;class&#61;&#34;card&#32;mb&#45;3&#34;&gt;</span><span id="code-cd-${i}-header">
    <span>&lt;div&#32;class&#61;&#34;card&#45;header&#34;&gt;</span>
      <span id="code-cd-${i}-header-text">Card #${i} header</span>
    <span>&lt;&#47;div&gt;</span></span>
    <span class="code-open-tag">&lt;div&#32;class&#61;&#34;card&#45;body&#34;&gt;</span><span id="code-cd-${i}-title">
      <span>&lt;h5&#32;class&#61;&#34;card&#45;title&#34;&gt;</span>
        <span id="code-cd-${i}-title-text">Card #${i} title</span>
      <span>&lt;&#47;h5&gt;</span></span>
      <span class="code-open-tag">&lt;p&#32;class&#61;&#34;card&#45;text&#34;&gt;</span>
        <span id="code-cd-${i}-text">Card #${i} text</span>
      <span class="code-close-tag">&lt;&#47;p&gt;</span>
    <span class="code-close-tag">&lt;&#47;div&gt;</span>
  <span class="code-close-tag">&lt;&#47;div&gt;</span></span></pre>`;
}

// create single card editor card, shows first card and collapses all others
function createCardEditorCard(i) {
  return `
    <div class="card cd-card" id="cd-card-${i}">
      <div class="card-header p-0" id="cd-card-heading-${i}">
        <button class="btn btn-link btn-block text-left px-3 ${ i == 1 ? "" : "collapsed" }" data-toggle="collapse" data-target="#cd-collapse-${i}" aria-expanded="true" aria-controls="collapse-${i}">
          <h5 style="margin-bottom:0 !important">Card #${i}</h5>
        </button>
      </div>
      <div id="cd-collapse-${i}" class="${ i == 1 ? "collapse show" : "collapse" }" aria-labelledby="cd-card-heading-${i}" data-parent="#cd-collapse">
        <div class="card-body">
          <form>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input checked" id="cd-${i}-check-header" checked>
              <label class="custom-control-label" for="cd-${i}-check-header">Header</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input checked" id="cd-${i}-check-title" checked>
              <label class="custom-control-label" for="cd-${i}-check-title">Title</label>
            </div>
            <div class="form-group" id="cd-${i}-header-form">
              <label for="cd-${i}-header">Header</label>
              <input type="text" class="form-control" id="cd-${i}-header" placeholder="Card #${i} header">
            </div>
            <div class="form-group" id="cd-${i}-title-form">
              <label for="cd-${i}-title">Title</label>
              <input type="text" class="form-control" id="cd-${i}-title" placeholder="Card #${i} title">
            </div>
            <div class="form-group">
              <label for="cd-${i}-text">Text</label>
              <textarea class="form-control" id="cd-${i}-text" placeholder="Card #${i} text" rows="6"></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}

// generate card text from input
updateCards(4);

function updateCards(cardCardLimit) {
  for (let i = 1; i <= cardCardLimit; i++) {
    // toggle optional input fields
    toggleCheckbox("cd", "#cd-" + i + "-check-header", "#cd-" + i + "-header-form");
    toggleCheckbox("cd", "#cd-" + i + "-check-title", "#cd-" + i + "-title-form, #code-cd-" + i + "-title");
    // toggle header code
    $(document).on('click', "#cd-" + i + "-check-header", function (event) {
      $("#cd-" + i + "-check-header").hasClass("checked")
        ? $("#code-cd-" + i + "-header").html('\n    <span class="code-cd-header-open"></span>\n      <span id="code-cd-' + i + '-header-text"></span>\n    <span class="code-cd-header-close"></span>')
        : $("#code-cd-" + i + "-header").text("");
      $(".code-cd-header-open").text('<div class="card-header">');
      $("#cd-" + i + "-header").val() !== "" ? $("#code-cd-" + i + "-header-text").text($("#cd-" + i + "-header").val()) : $("#code-cd-" + i + "-header-text").text("Card #" + i + " header");
      $(".code-cd-header-close").text('</div>');
      preview("cd");
    });
    // toggle title code
    $(document).on('click', "#cd-" + i + "-check-title", function (event) {
      $("#cd-" + i + "-check-title").hasClass("checked")
        ? $("#code-cd-" + i + "-title").html('\n    <span class="code-cd-title-open"></span>\n      <span id="code-cd-' + i + '-title-text"></span>\n    <span class="code-cd-title-close"></span>')
        : $("#code-cd-" + i + "-title").text("");
      $(".code-cd-title-open").text('<h5 class="card-title">');
      $("#cd-" + i + "-title").val() !== "" ? $("#code-cd-" + i + "-title-text").text($("#cd-" + i + "-title").val()) : $("#code-cd-" + i + "-title-text").text("Card #" + i + " title");
      $(".code-cd-title-close").text('</h5>');
      preview("cd");
    });
    // update text
    updateText("cd", "#cd-" + i + "-header", "#code-cd-" + i + "-header-text", "Card #" + i + " header");
    updateText("cd", "#cd-" + i + "-title", "#code-cd-" + i + "-title-text", "Card #" + i + " title");
    updateText("cd", "#cd-" + i + "-text", "#code-cd-" + i + "-text", "Card #" + i + " text");
  }
}

/**********************************
 * carousel                       *
 **********************************/

// on selet change, show only the required no of cards to edit, update code and preview
$("#crsl-slide-no").change(function() {
  maxSlides = $(this).val();
  createAllCarouselIndicators(maxSlides);
  createAllCarouselSlides(maxSlides);
  createAllCarouselEditorCards(maxSlides)
});

// create all collapse card code
function createAllCarouselIndicators(maxSlides) {
  $("#code-crsl-indicators").empty();
  for (let i = 1; i <= maxSlides; i++) {
    indicator = createCarouselIndicator(i);
    $("#code-crsl-indicators").append(indicator);
  }
  preview("crsl");
}

// create all collapse card code
function createAllCarouselSlides(maxSlides) {
  $("#code-crsl-slides").empty();
  for (let i = 1; i <= maxSlides; i++) {
    slide = createCarouselSlide(i);
    $("#code-crsl-slides").append(slide);
  }
  preview("crsl");
}

//create all carousel editor slides
function createAllCarouselEditorCards(maxSlides) {
  $("#crsl-collapse").empty();
  for (let i = 1; i <= maxSlides; i++) {
    card = createCarouselEditorCard(i);
    $("#crsl-collapse").append(card);
  }
  preview("crsl");
}

// create single carousel slide indicator code
function createCarouselIndicator(i) {
  return `<span class="code-open-tag">&lt;li&#32;data&#45;target&#61;&#34;&#35;<span class="code-crsl-id">modname&#45;unitno&#45;carousel&#45;no</span>&#34;&#32;data&#45;slide&#45;to&#61;&#34;${ i - 1 }&#34;${ i == 1 ? "&#32;class&#61;&#34;active&#34;" : "" }&gt;</span><span class="code-close-tag">&lt;&#47;li&gt;</span>${ i == maxSlides ? "" : "\n    " }`;
}

// create single carousel slide code
function createCarouselSlide(i) {
  return `<span class="code-crsl-slide"><span class="code-open-tag">&lt;div&#32;class&#61;&#34;carousel&#45;item${ i == 1 ? " active" : "" }&#34;&gt;</span><span id="code-crsl-slide-${i}-img">
    <span class="code-open-tag">&lt;img&#32;src&#61;&#34;<span id="code-crsl-slide-${i}-img-src">https:&#47;&#47;placekitten.com&#47;800&#47;400</span>&#34;&#32;class&#61;&#34;w&#45;100&#34;&#32;alt&#61;&#34;<span id="code-crsl-slide-${i}-img-alt">An adorable kitten</span>&#34;&gt;</span></span>
    <span class="code-open-tag">&lt;div&#32;class&#61;&#34;carousel&#45;caption&#34;&gt;</span>
      <span class="code-open-tag">&lt;h5&gt;</span>
        <span id="code-crsl-slide-${i}-title">Carousel slide #${i} title</span>
      <span class="code-close-tag">&lt;&#47;h5&gt;</span>
      <span class="code-open-tag">&lt;p&gt;</span>
        <span id="code-crsl-slide-${i}-text">Carousel slide #${i} text</span>
      <span class="code-close-tag">&lt;&#47;p&gt;</span>
    <span class="code-close-tag">&lt;&#47;div&gt;</span>
  <span class="code-close-tag">&lt;&#47;div&gt;</span></span>`;
}

// create single collapse editor card, shows first card and collapses all others
function createCarouselEditorCard(i) {
  return `
    <div class="card crsl-card" id="crsl-card-${i}">
      <div class="card-header p-0" id="crsl-card-heading-${i}">
        <button class="btn btn-link btn-block text-left px-3 ${ i == 1 ? "" : "collapsed" }" data-toggle="collapse" data-target="#collapse-${i}" aria-expanded="true" aria-controls="collapse-${i}">
          <h5 style="margin-bottom:0 !important">Slide #${i}</h5>
        </button>
      </div>
      <div id="collapse-${i}" class="${ i == 1 ? "collapse show" : "collapse" }" aria-labelledby="col-card-heading-${i}" data-parent="#col-collapse">
        <div class="card-body">
          <form>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input checked" id="crsl-slide-${i}-check-img" checked>
              <label class="custom-control-label" for="crsl-slide-${i}-check-img">Image</label>
            </div>
            <div class="form-group crsl-slide-${i}-img-form">
              <label for="crsl-slide-${i}-img-src">Image source</label>
              <input type="text" class="form-control" id="crsl-slide-${i}-img-src" placeholder="https://moodle.iddkingsonline.com/file.php/123/images/image.jpg">
              <small id="crsl-img-src-help" class="form-text text-muted">The image must first be uploaded to Keats, where the generated link can be copied and pasted from.</small>
            </div>
            <div class="form-group crsl-slide-${i}-img-form">
              <label for="crsl-slide-${i}-img-alt">Alternative text</label>
              <textarea class="form-control" id="crsl-slide-${i}-img-alt" placeholder="Description of image" rows="2"></textarea>
            </div>
            <div class="form-group">
              <label for="crsl-slide-${i}-title">Caption title</label>
              <input type="text" class="form-control" id="crsl-slide-${i}-title" placeholder="Carousel slide #${i} title">
            </div>
            <div class="form-group">
              <label for="crsl-slide-${i}-text">Caption text</label>
              <textarea class="form-control" id="crsl-slide-${i}-text" placeholder="Carousel slide #${i} text" rows="4"></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}

// generate carousel text from input
updateCarouselSlides(8);

updateText("crsl", "#crsl-id", ".code-crsl-id", "modname-unitno-carousel-no");

function updateCarouselSlides(carouselSlideLimit) {
  for (let i = 1; i <= carouselSlideLimit; i++) {
    // toggle optional image input field 
    toggleCheckbox("crsl", "#crsl-slide-" + i + "-check-img", ".crsl-slide-" + i + "-img-form");
    // toggle image code
    $(document).on('click', "#crsl-slide-" + i + "-check-img", function (event) {
      $("#crsl-slide-" + i + "-check-img").hasClass("checked")
        ? ($("#code-crsl-slide-" + i + "-img").html('\n    <span class="code-crsl-slide-img-open"></span><span id="code-crsl-slide-' + i + '-img-src"></span><span class="code-crsl-slide-img-middle"></span><span id="code-crsl-slide-' + i + '-img-alt"></span><span class="code-crsl-slide-img-close"></span>'), $("#code-crsl-text-only").text(""))
        : ($("#code-crsl-slide-" + i + "-img").text(""), $("#code-crsl-text-only").text(" text-only"));
      $(".code-crsl-slide-img-open").text('<img src="');
      $("#crsl-slide-" + i + "-img-src").val() !== "" ? $("#code-crsl-slide-" + i + "-img-src").text($("#crsl-slide-" + i + "-img-src").val()) : $("#code-crsl-slide-" + i + "-img-src").text("https://placekitten.com/800/400");
      $(".code-crsl-slide-img-middle").text('" class="w-100" alt="');
      $("#crsl-slide-" + i + "-img-alt").val() !== "" ? $("#code-crsl-slide-" + i + "-img-alt").text($("#crsl-slide-" + i + "-img-alt").val()) : $("#code-crsl-slide-" + i + "-img-alt").text("An adorable kitten");
      $(".code-crsl-slide-img-close").text('">');
      preview("crsl");
    });
    // update carousel text
    updateText("crsl", "#crsl-slide-" + i + "-img-src", "#code-crsl-slide-" + i + "-img-src", "https://placekitten.com/800/300");
    updateText("crsl", "#crsl-slide-" + i + "-img-alt", "#code-crsl-slide-" + i + "-img-alt", "An adorable kitten");
    updateText("crsl", "#crsl-slide-" + i + "-title", "#code-crsl-slide-" + i + "-title", "Carousel slide #" + i + "title");
    updateText("crsl", "#crsl-slide-" + i + "-text", "#code-crsl-slide-" + i + "-text", "Carousel slide #" + i + "text");
  }
}

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
        <span class="code-open-tag">&lt;h5&gt;</span>
          <span id="code-col-collapse-${i}-heading">Collapse card #${i} heading</span>
        <span class="code-close-tag">&lt;&#47;h5&gt;</span>
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
          <h5 style="margin-bottom:0 !important">Card #${i}</h5>
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

updateText("col", "#col-id", ".code-col-id", "modname-unitno-collapse-no");

function updateCollapseText(collapseCardLimit) {
  for (let i = 1; i <= collapseCardLimit; i++) {
    updateText("col", "#collapse-" + i + "-heading", "#code-col-collapse-" + i + "-heading", "Collapse card #" + i + "heading");
    updateText("col", "#collapse-" + i + "-body", "#code-col-collapse-" + i + "-body", "Collapse card #" + i + "body");
  }
}

/**********************************
 * general functions              *
 **********************************/

// disable preview button
function disablePreview() {
  $(".preview-pane").children().click(function (e) {
    e.preventDefault();
  });
};

// update text from input, allows elements added to the DOM after page load to be identified
function updateText(component, input, outputText, defaultText) {
  $(document).on('keyup', input, function (event) {
    (!$(this).val() == "") ? $(outputText).text($(this).val()) : $(outputText).text(defaultText);
    preview(component);
  }).keyup();
}

// update text from input, or hide container if empty
function updateTextOrHide(component, input, open, output, close) {
  $(document).on('keyup', input, function (event) {
    (!$(this).val() == "") ?  $(output).html(open + $(this).val() + close) : $(output).empty();
    preview(component);
  }).keyup();
}

// toggles display of option field upon checkbox click
function toggleCheckbox(component, input, target) {
  $(document).on('click', input, function (event) {
    $(target).toggle(this.checked);
    $(input).toggleClass("unchecked").toggleClass("checked");
    preview(component);
  });
}

// generate preview
function preview(component) {
  text = $("#" + component + "-print-code").text();
  $("#" + component + "-preview-pane").html(text);
  // disable preview for buttons so users don't click away from the page
  if (component == "btn") disablePreview();
}

copyCode("btn");
copyCode("cd");
copyCode("crsl");
copyCode("col");
copyCode("em");
copyCode("ls");
copyCode("ts");

// copy code onto clipboard
function copyCode(component) {
  $(document).on("click", "#copy-" + component + "-code", function(event) {
    str = $("#" + component + "-preview-pane").html();
    function listener(event) {
      event.clipboardData.setData("text/html", str);
      event.clipboardData.setData("text/plain", str);
      event.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
    alert("Your code has been copied to the clipboard \uD83D\uDE00");
  })
}
