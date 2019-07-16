today = new Date();
dateString = today.toDateString();

$(document).ready(function() {
  $("#tag-link, #code-btn-value, #code-btn-link, #btn-value, #btn-link-field").hide();
  // set card to show 1 card by default
  maxCards = 1;
  initialCards(maxCards);
  // set carousel to show 3 slides by default
  maxSlides = 3;
  initialCarouselSlides(maxSlides);
  // set collapse to show 3 cards by default
  maxCollapseCards = 3;
  initialCollapseCards(maxCollapseCards);
  // set list to show 3 items by default
  maxListItems = 3;
  initialListItems(maxListItems);
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
 * card                           *
 **********************************/

// on selet change, show only the required no of cards to edit, update code and preview
$("#cd-card-no").on('focus', function() {
  $(this).data("previous",$(this).val());
  $(this).blur();
  $("#cd-card-no").change(function(){
    newMax = Number(($(this).val()));
    oldMax = Number(($(this).data("previous")));
    // set layout to block for single card
    if (newMax == 1) $("#cd-layout").val("block").change();
    // remove card deck container for block layout
    ($("#cd-layout").val() == "block" || newMax == 1) ? $(".code-cd-deck").hide() : $(".code-cd-deck").show() ;
    // compare old and new max list item value
    if (newMax > oldMax) {
      for (let i = oldMax; i < newMax; i++) {
        // add new items
        card = createCard(i+1);
        $("#code-cd-cards").append(card);
        cdCard = createCardEditorCard(i+1);
        $("#cards").append(cdCard);
      }
    } else {
      for (let i = newMax; i < oldMax; i++) {
        // remove items
        $("#code-cd-card-"+(i+1)).remove();
        $("#cd-card-"+(i+1)).remove();
      }
    }
    // reset previous value
    $(this).removeData("previous");
    preview("cd");
  });
});

$("#cd-layout").change(function(data){
  $(this).val() == "deck" 
    ? ($("#code-cd-deck-open").text('<div class="card-deck">'),
      $("#code-cd-deck-close").text('</div>'))
    : ($("#code-cd-deck-open").empty(), $("#code-cd-deck-close").empty());
  preview("cd");  
});

// create all card editor cards and code on page load
function initialCards(maxCards) {
  for (let i = 1; i <= maxCards; i++) {
    card = createCard(i);
    $("#code-cd-cards").append(card);
    cdCard = createCardEditorCard(i);
    $("#cards").append(cdCard);
  }
  preview("cd");
}

// create single card card code, shows first card and collapses all others
function createCard(i) {
  return `<span id="code-cd-card-${i}"><pre>  <span class="code-open-tag">&lt;div&#32;class&#61;&#34;card&#32;mb&#45;3&#34;&gt;</span><span id="code-cd-${i}-header">
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
  <span class="code-close-tag">&lt;&#47;div&gt;</span></pre></span>`;
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
      <div id="cd-collapse-${i}" class="${ i == 1 ? "collapse show" : "collapse" }" aria-labelledby="cd-card-heading-${i}" data-parent="#cards">
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
$("#crsl-slide-no").on('focus', function() {
  $(this).data("previous",$(this).val());
  $(this).blur();
  $("#crsl-slide-no").change(function(){
    newMax = Number(($(this).val()));
    oldMax = Number(($(this).data("previous")));
    // compare old and new max list item value
    if (newMax > oldMax) {
      for (let i = oldMax; i < newMax; i++) {
        // add new items
        indicator = createCarouselIndicator(i+1);
        $("#code-crsl-indicators").append(indicator);
        slide = createCarouselSlide(i+1);
        $("#code-crsl-slides").append(slide);
        crslCard = createCarouselEditorCard(i+1);
        $("#carousel-slides").append(crslCard);
      }
    } else {
      for (let i = newMax; i < oldMax; i++) {
        // remove items
        $("#code-crsl-indicator-"+(i+1)).remove();
        $("#code-crsl-slide-"+(i+1)).remove();
        $("#crsl-card-"+(i+1)).remove();
      }
    }
    // reset previous value
    $(this).removeData("previous");
    preview("crsl");
  });
});

// create all carousel editor cards and code on page load
function initialCarouselSlides(maxSlides) {
  for (let i = 1; i <= maxSlides; i++) {
    indicator = createCarouselIndicator(i);
    $("#code-crsl-indicators").append(indicator);
    slide = createCarouselSlide(i);
    $("#code-crsl-slides").append(slide);
    crslCard = createCarouselEditorCard(i);
    $("#carousel-slides").append(crslCard);
  }
  preview("crsl");
}

// create single carousel slide indicator code
function createCarouselIndicator(i) {
  return `<span id="code-crsl-indicator-${i}">\n    <span class="code-open-tag">&lt;li&#32;data&#45;target&#61;&#34;&#35;<span class="code-crsl-id">modname&#45;unitno&#45;carousel&#45;no</span>&#34;&#32;data&#45;slide&#45;to&#61;&#34;${ i - 1 }&#34;${ i == 1 ? "&#32;class&#61;&#34;active&#34;" : "" }&gt;</span><span class="code-close-tag">&lt;&#47;li&gt;</span></span>`;
//  return `<span id="code-crsl-indicator-${i}"><span class="code-open-tag">&lt;li&#32;data&#45;target&#61;&#34;&#35;<span class="code-crsl-id">modname&#45;unitno&#45;carousel&#45;no</span>&#34;&#32;data&#45;slide&#45;to&#61;&#34;${ i - 1 }&#34;${ i == 1 ? "&#32;class&#61;&#34;active&#34;" : "" }&gt;</span><span class="code-close-tag">&lt;&#47;li&gt;</span>${ i == maxSlides ? "" : "\n    " }</span>`;
}

// create single carousel slide code
function createCarouselSlide(i) {
  return `<span id="code-crsl-slide-${i}"><span class="code-open-tag">&lt;div&#32;class&#61;&#34;carousel&#45;item${ i == 1 ? " active" : "" }&#34;&gt;</span><span id="code-crsl-slide-${i}-img">
    <span class="code-open-tag">&lt;img&#32;src&#61;&#34;<span id="code-crsl-slide-${i}-img-src">https:&#47;&#47;placekitten.com&#47;800&#47;400</span>&#34;&#32;class&#61;&#34;w&#45;100&#34;&#32;alt&#61;&#34;<span id="code-crsl-slide-${i}-img-alt">An adorable kitten</span>&#34;&gt;</span></span>
    <span class="code-open-tag">&lt;div&#32;class&#61;&#34;carousel&#45;caption&#34;&gt;</span><span id="code-crsl-slide-${i}-title"></span>
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
      <div id="collapse-${i}" class="${ i == 1 ? "collapse show" : "collapse" }" aria-labelledby="col-card-heading-${i}" data-parent="#carousel-slides">
        <div class="card-body">
          <form>
            <div class="form-group crsl-slide-img-form">
              <label for="crsl-slide-${i}-img-src">Image source</label>
              <input type="text" class="form-control" id="crsl-slide-${i}-img-src" placeholder="https://moodle.iddkingsonline.com/file.php/123/images/image.jpg">
              <small id="crsl-img-src-help" class="form-text text-muted">Select an image with 2:1 ratio (i.e 800 x 400px). The image must first be uploaded to Keats, where the generated link can be copied and pasted from.</small>
            </div>
            <div class="form-group crsl-slide-img-form">
              <label for="crsl-slide-${i}-img-alt">Alternative text</label>
              <textarea class="form-control" id="crsl-slide-${i}-img-alt" placeholder="Description of image" rows="2"></textarea>
            </div>
            <div class="form-group crsl-slide-title-form" style="display:none">
              <label for="crsl-slide-${i}-title">Caption title</label>
              <input type="text" class="form-control" id="crsl-slide-${i}-title-text" placeholder="Carousel slide #${i} title" maxlength="65">
            </div>
            <div class="form-group">
              <label for="crsl-slide-${i}-text">Caption text</label>
              <textarea class="form-control" id="crsl-slide-${i}-text" placeholder="Carousel slide #${i} text" rows="4" maxlength="215"></textarea>
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

// toggle carousel image code
$(document).on("click", "#crsl-check-img", function(event) {
  $("#crsl-check-img").toggleClass("unchecked").toggleClass("checked");
  $("#code-crsl-text-only").text($("#code-crsl-text-only").text() == "" ? " text-only" : "");
  carouselToggleImage(8);
});

function carouselToggleImage(carouselSlideLimit) {
  for (let i = 1; i <= carouselSlideLimit; i++) {
  $("#crsl-check-img").hasClass("checked")
    ? $("#code-crsl-slide-" + i + "-img").html('\n    <span class="code-crsl-slide-img-open"></span><span id="code-crsl-slide-' + i + '-img-src"></span><span class="code-crsl-slide-img-middle"></span><span id="code-crsl-slide-' + i + '-img-alt"></span><span class="code-crsl-slide-img-close"></span>')
    : $("#code-crsl-slide-" + i + "-img").text("");
  $(".code-crsl-slide-img-open").text('<img src="');
  $("#crsl-slide-" + i + "-img-src").val() !== "" ? $("#code-crsl-slide-" + i + "-img-src").text($("#crsl-slide-" + i + "-img-src").val()) : $("#code-crsl-slide-" + i + "-img-src").text("https://placekitten.com/800/400");
  $(".code-crsl-slide-img-middle").text('" class="w-100" alt="');
  $("#crsl-slide-" + i + "-img-alt").val() !== "" ? $("#code-crsl-slide-" + i + "-img-alt").text($("#crsl-slide-" + i + "-img-alt").val()) : $("#code-crsl-slide-" + i + "-img-alt").text("An adorable kitten");
  $(".code-crsl-slide-img-close").text('">');
  preview("crsl");
  }
};

//toggle carousel caption title code
$(document).on("click", "#crsl-check-title", function(event) {
  $("#crsl-check-title").toggleClass("unchecked").toggleClass("checked");
  carouselToggleTitle(8);
});

function carouselToggleTitle(carouselSlideLimit) {
  for (let i = 1; i <= carouselSlideLimit; i++) {
  $("#crsl-check-title").hasClass("checked")
    ? $("#code-crsl-slide-" + i + "-title").html('\n      <span class="code-crsl-slide-title-open"></span>\n        <span id="code-crsl-slide-' + i + '-title-text"></span>\n      <span class="code-crsl-slide-title-close"></span>')
    : $("#code-crsl-slide-" + i + "-title").text("");
  $(".code-crsl-slide-title-open").text('<h5>');
  $("#crsl-slide-" + i + "-title-text").val() !== "" ? $("#code-crsl-slide-" + i + "-title-text").text($("#crsl-slide-" + i + "-title-text").val()) : $("#code-crsl-slide-" + i + "-title-text").text("Carousel slide #" + i + " title");
  $(".code-crsl-slide-title-close").text('</h5>');
  preview("crsl");
  }
};

function updateCarouselSlides(carouselSlideLimit) {
  for (let i = 1; i <= carouselSlideLimit; i++) {
    // toggle optional image input field 
    toggleCheckbox("crsl", "#crsl-check-img", ".crsl-slide-img-form");
    toggleCheckbox("crsl", "#crsl-check-title", ".crsl-slide-title-form");
    // update carousel text
    updateText("crsl", "#crsl-slide-" + i + "-img-src", "#code-crsl-slide-" + i + "-img-src", "https://placekitten.com/800/300");
    updateText("crsl", "#crsl-slide-" + i + "-img-alt", "#code-crsl-slide-" + i + "-img-alt", "An adorable kitten");
    updateText("crsl", "#crsl-slide-" + i + "-title-text", "#code-crsl-slide-" + i + "-title-text", "Carousel slide #" + i + "title");
    updateText("crsl", "#crsl-slide-" + i + "-text", "#code-crsl-slide-" + i + "-text", "Carousel slide #" + i + " text");
  }
}

/**********************************
 * collapse                       *
 **********************************/

// on selet change, show only the required no of cards to edit, update code and preview
$("#col-card-no").on('focus', function() {
  $(this).data("previous",$(this).val());
  $(this).blur();
  $("#col-card-no").change(function(){
    newMax = Number(($(this).val()));
    oldMax = Number(($(this).data("previous")));
    // compare old and new max list item value
    if (newMax > oldMax) {
      for (let i = oldMax; i < newMax; i++) {
        // add new items
        collapseCard = createCollapseCard(i+1);
        $("#code-col-cards").append(collapseCard);
        colCard = createCollapseEditorCard(i+1);
        $("#collapse-cards").append(colCard);
      }
    } else {
      for (let i = newMax; i < oldMax; i++) {
        // remove items
        $("#code-col-card-"+(i+1)).remove();
        $("#col-card-"+(i+1)).remove();
      }
    }
    // reset previous value
    $(this).removeData("previous");
    preview("col");
  });
});

// create all collapse editor cards and code on page load
function initialCollapseCards(maxCollapseCards) {
  for (let i = 1; i <= maxCollapseCards; i++) {
    collapseCard = createCollapseCard(i);
    $("#code-col-cards").append(collapseCard);
    colCard = createCollapseEditorCard(i);
    $("#collapse-cards").append(colCard);
  }
  preview("col");
}

// create single collapse card code, shows first card and collapses all others
function createCollapseCard(i) {
  return `<span id="code-col-card-${i}"><span class="code-open-tag">&lt;div&#32;class&#61;&#34;card&#34;&gt;</span>
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
      <div id="collapse-${i}" class="${ i == 1 ? "collapse show" : "collapse" }" aria-labelledby="col-card-heading-${i}" data-parent="#collapse-cards">
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

// on select change, show only the required no of list items to edit, update code and preview
$("#ls-item-no").on('focus', function() {
  $(this).data("previous",$(this).val());
  $(this).blur();
  $("#ls-item-no").change(function(data){
    newMax = Number(($(this).val()));
    oldMax = Number(($(this).data("previous")));
    // compare old and new max list item value
    if (newMax > oldMax) {
      for (let i = oldMax; i < newMax; i++) {
        // add new items
        listItem = createListItem(i+1);
        $("#code-ls-items").append(listItem);
        card = createListItemEditorCard(i+1);
        $("#ls-items").append(card);
      }
    } else {
      for (let i = newMax; i < oldMax; i++) {
        // remove items
        $("#code-ls-item-"+(i+1)).remove();
        $("#ls-item-"+(i+1)+"-card").remove();
      }
    }
    // reset previous value
    $(this).removeData("previous");
    preview("ls");
  });
});

// change list type
$("#ls-type").change(function(data){
  type = $(this).val();
  $(".code-ls-tag").text(type);
  preview("ls");
});

// create all list item editor cards and code on page load
function initialListItems(maxListItems) {
  for (let i = 1; i <= maxListItems; i++) {
    listItem = createListItem(i);
    $("#code-ls-items").append(listItem);
    lsCard = createListItemEditorCard(i);
    $("#ls-items").append(lsCard);
  }
  preview("ls");
}

// create single list item code, shows first card and collapses all others
function createListItem(i) {
  return `${ i == 1 ? "" : "  "}<span class="code-ls-item" id="code-ls-item-${i}"><span class="code-open-tag">\n  &lt;li&gt;</span>
    <span id="code-ls-item-${i}-text">${ !$("#ls-item-" + i + "-text").val() == "" ? $("#ls-item-" + i + "-text").val() : "List item #" + i + " text"}</span>
  <span class="code-close-tag">&lt;&#47;li&gt;</span></span>`;
}

// create single card editor card, shows first card and collapses all others
function createListItemEditorCard(i) {
  return `
<div class="input-group mb-3" id="ls-item-${i}-card">
  <div class="input-group-prepend">
    <span class="input-group-text">${i}</span>
  </div>
  <input type="text" class="form-control" id="ls-item-${i}-text" aria-label="List item text">
</div>`;
}

/*
${ i == maxListItems ? "" : "\n"}
<div class="row">
  <div class="col-md-9">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">${i}</span>
      </div>
      <input type="text" class="form-control" id="ls-item-${i}-text" aria-label="List item text">
    </div>
  </div>
  <div class="col-md-3">
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="ls-item-${i}-check-sublist">
      <label class="custom-control-label" for="ls-item-${i}-check-sublist">Sublist</label>
    </div>
  </div>
</div>`;
*/

// generate card text from input
updateListItems(8);

updateTextOrHide("ls", "#ls-custom-class", "&#32;class&#61;&#34", "#code-ls-custom-class", "&#34;" );

function updateListItems(listItemLimit) {
  for (let i = 1; i <= listItemLimit; i++) {
//    toggleCheckbox("ls", "#ls-item-${i}-check-sublist", "#ls-item-${i}-sublist-form");
    updateText("ls", "#ls-item-" + i + "-text", "#code-ls-item-" + i + "-text", "List item #" + i + " text");
  }
}

/**********************************
 * timeline                       *
 **********************************/

$("#tl-card-no").on('focus', function() {
  $(this).data("previous",$(this).val());
  $(this).blur();
  $("#tl-card-no").change(function(){
    maxTimelineCards = Number(($(this).val()));
    j = maxTimelineCards;
    oldMax = Number(($(this).data("previous")));
    // compare old and new max list item value
    if (maxTimelineCards > oldMax) {
      // regenerates end card for timeline dot formatting
      $("#code-tl-card-"+(oldMax)).remove();
      timelineCard = createTimelineCard(oldMax);
      $("#code-tl-cards").append(timelineCard);
      for (let i = oldMax; i < j; i++) {
        // add new items
        timelineCard = createTimelineCard(i+1);
        $("#code-tl-cards").append(timelineCard);
        tlCard = createTimelineEditorCard(i+1);
        $("#tl-cards").append(tlCard);
      } 
    } else {
      // regenerates end card for timeline dot formatting
      $("#code-tl-card-"+(maxTimelineCards)).remove();
      timelineCard = createTimelineCard(maxTimelineCards);
      $("#code-tl-cards").append(timelineCard);
      for (let i = oldMax; i > j ; i--) {
        // remove items
        $("#code-tl-card-"+(i)).remove();
        $("#tl-card-"+(i)).remove();
      }
    }
    // reset previous value
    $(this).removeData("previous");
    preview("tl");
  });
});

initialTimelineCards(4);
// create all timeline editor cards and code on page load
function initialTimelineCards(maxTimelineCards) {
  j = maxTimelineCards
  for (let i = 1; i <= j; i++) {
    timelineCard = createTimelineCard(i);
    $("#code-tl-cards").append(timelineCard);
    tlCard = createTimelineEditorCard(i);
    $("#tl-cards").append(tlCard);
  }
  preview("tl");
}

// create single timeline card code, shows first card and collapses all others
function createTimelineCard(i) {
  return `<span id="code-tl-card-${i}"><span class="code-open-tag">&lt;div&#32;class&#61;&#34;row&#34;&gt;</span>
    <span class="code-open-tag">&lt;div&#32;class&#61;&#34;col&#45;auto&#32;flex&#45;column&#32;d&#45;none&#32;d&#45;sm&#45;flex&#34;&gt;</span>
      <span class="code-open-tag">&lt;div&#32;class&#61;&#34;row&#32;h&#45;50&#34;&gt;</span>
        <span class="code-open-tag">&lt;div&#32;class&#61;&#34;col${ i == 1 ? "" : " border&#45;right" }&#34;&gt;</span>&nbsp;<span class="code-close-tag">&lt;&#47;div&gt;</span>
        <span class="code-open-tag">&lt;div&#32;class&#61;&#34;col&#34;&gt;</span>&nbsp;<span class="code-close-tag">&lt;&#47;div&gt;</span>
      <span class="code-close-tag">&lt;&#47;div&gt;</span>
      <span class="code-open-tag">&lt;div&#32;class&#61;&#34;m&#45;2&#34;&gt;</span>
        <span class="code-open-tag">&lt;span&#32;class&#61;&#34;badge&#32;badge&#45;pill&#32;bg&#45;light&#32;border&#34;&gt;</span>&nbsp;<span class="code-close-tag">&lt;&#47;span&gt;</span>
      <span class="code-close-tag">&lt;&#47;div&gt;</span>
      <span class="code-open-tag">&lt;div&#32;class&#61;&#34;row&#32;h&#45;50&#34;&gt;</span>
        <span class="code-open-tag">&lt;div&#32;class&#61;&#34;col${ i == j ? "" : " border&#45;right" }&#34;&gt;</span>&nbsp;<span class="code-close-tag">&lt;&#47;div&gt;</span>
        <span class="code-open-tag">&lt;div&#32;class&#61;&#34;col&#34;&gt;</span>&nbsp;<span class="code-close-tag">&lt;&#47;div&gt;</span>
      <span class="code-close-tag">&lt;&#47;div&gt;</span>
    <span class="code-close-tag">&lt;&#47;div&gt;</span>
    <span class="code-open-tag">&lt;div&#32;class&#61;&#34;col&#32;py&#45;2&#34;&gt;</span>
     <span class="code-open-tag">&lt;div&#32;class&#61;&#34;card&#34;&gt;</span>
        <span id="code-tl-card-${i}-header-open">&lt;div&#32;class&#61;&#34;card&#45;header&#34;&gt;</span><span id="code-tl-card-${i}-date">
          <span class="code-tl-card-date-open">&lt;span&#32;class&#61;&#34;float&#45;right&#34;&gt;</span>
            <span id="code-tl-card-${i}-date-text">${!$("#tl-" + i + "-date").val() == "" ? $("#tl-" + i + "-date").val() : dateString + " " + (i < 6 ? (i + 7) + ":00AM" : (i - 5) + ":00PM")}</span>
          <span class="code-tl-card-date-close">&lt;&#47;span&gt;</span></span>
          <span class="code-open-tag">&lt;h4&#32;class&#61;&#34;card&#45;title&#34;&gt;</span>
            <span id="code-tl-card-${i}-title">${!$("#tl-" + i + "-title").val() == "" ? $("#tl-" + i + "-title").val() : "Card #" + i + " title"}</span>
          <span class="code-close-tag">&lt;&#47;h4&gt;</span><span id="code-tl-card-${i}-header-close">
        <span class="code-close-tag">&lt;&#47;div&gt;</span>
        <span class="code-open-tag">&lt;div&#32;class&#61;&#34;card&#45;body&#34;&gt;</span></span>
          <span class="code-open-tag">&lt;p&#32;class&#61;&#34;card&#45;text&#34;&gt;</span>
            <span id="code-tl-card-${i}-text">${!$("#tl-" + i + "-text").val() == "" ? $("#tl-" + i + "-text").val() : "Lorem ipsum dolor amet flexitarian butcher VHS tilde, squid 3 wolf moon shoreditch vape williamsburg mustache messenger bag prism."}</span>
          <span class="code-close-tag">&lt;&#47;p&gt;</span>
        <span class="code-close-tag">&lt;&#47;div&gt;</span>
      <span class="code-close-tag">&lt;&#47;div&gt;</span>
    <span class="code-close-tag">&lt;&#47;div&gt;</span>
  <span class="code-close-tag">&lt;&#47;div&gt;</span></span>`;
}

// create single timeline editor card, shows first card and collapses all others
function createTimelineEditorCard(i) {
  return `
    <div class="card tl-card" id="tl-card-${i}">
      <div class="card-header p-0" id="tl-card-heading-${i}">
        <button class="btn btn-link btn-block text-left px-3 ${ i == 1 ? "" : "collapsed" }" data-toggle="collapse" data-target="#tl-collapse-${i}" aria-expanded="true" aria-controls="collapse-${i}">
          <h5 style="margin-bottom:0 !important">Timeline card #${i}</h5>
        </button>
      </div>
      <div id="tl-collapse-${i}" class="${ i == 1 ? "collapse show" : "collapse" }" aria-labelledby="tl-card-heading-${i}" data-parent="#cards">
        <div class="card-body">
          <form>
            <div class="form-group" id="tl-${i}-title-form">
              <label for="tl-${i}-header">Card title</label>
              <input type="text" class="form-control" id="tl-${i}-title" placeholder="Card #${i} title">
            </div>
            <div class="form-group tl-date" id="tl-${i}-date-form">
              <label for="tl-${i}-date">Date</label>
              <input type="text" class="form-control" id="tl-${i}-date" placeholder="${dateString} ${i+7}:00">
            </div>
            <div class="form-group">
              <label for="tl-${i}-text">Text</label>
              <textarea class="form-control" id="tl-${i}-text" placeholder="Card #${i} text" rows="6"></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}

// toggle timeline title code
toggleCheckbox("tl", "#tl-check-title", "#tl-title-form");
$(document).on('click', "#tl-check-title", function (event) {
  $("#tl-check-title").hasClass("checked")
    ? $("#code-tl-title").html('\n    <span class="code-tl-title-open"></span>\n      <span id="code-tl-title-text"></span>\n    <span class="code-tl-title-close"></span>')
    : $("#code-tl-title").text("");
  $(".code-tl-title-open").text('<h2 class="text-center py-3">');
  $("#tl-title").val() !== "" ? $("#code-tl-title-text").text($("#tl-title").val()) : $("#code-tl-title-text").text("Timeline title");
  $(".code-tl-title-close").text('</h2>');
  preview("tl");
});

//toggle timeline date code
$(document).on("click", "#tl-check-date", function(event) {
  $("#tl-check-date").toggleClass("unchecked").toggleClass("checked");
  $(".tl-date").toggle();
  timelineToggleDate(8);
});
function timelineToggleDate(timelineCardLimit) {
  for (let i = 1; i <= timelineCardLimit; i++) {
  $("#tl-check-date").hasClass("checked")
    ? $("#code-tl-card-" + i + "-date").html('\n          <span class="code-tl-card-date-open"></span>\n            <span id="code-tl-card-' + i + '-date-text"></span>\n          <span class="code-tl-card-date-close"></span>')
    : $("#code-tl-card-" + i + "-date").text("");
  $(".code-tl-card-date-open").text('<span class="float-right">');
  $("#tl-" + i + "-date").val() !== "" ? $("#code-tl-card-" + i + "-date-text").text($("#tl-" + i + "-date").val()) : $("#code-tl-card-" + i + "-date-text").text(dateString + " " + (i < 6 ? (i + 7) + ":00AM" : (i - 5) + ":00PM"));
  $(".code-tl-card-date-close").text('</span>');
  preview("tl");
  }
};

//toggle timeline header code
$(document).on("click", "#tl-check-header", function(event) {
  $("#tl-check-header").toggleClass("unchecked").toggleClass("checked");
  timelineToggleHeader(8);
});
function timelineToggleHeader(timelineCardLimit) {
  for (let i = 1; i <= timelineCardLimit; i++) {
  console.log(i);
  $("#tl-check-header").hasClass("checked")
    ? ( $("#code-tl-card-" + i + "-header-open").html("&lt;div&#32;class&#61;&#34;card&#45;header&#34;&gt;"), $("#code-tl-card-" + i + "-header-close").html("\n        &lt;&#47;div&gt;\n        &lt;div&#32;class&#61;&#34;card&#45;body&#34;&gt;"))
    : ( $("#code-tl-card-" + i + "-header-open").html("&lt;div&#32;class&#61;&#34;card&#45;body&#34;&gt;"), $("#code-tl-card-" + i + "-header-close").html(""));
  preview("tl");
  }
};

// generate card text from input
updateTimelineText(8);
updateTextOrHide("tl", "#tl-id", "&#32;id&#61;&#34;", "#code-tl-id", "&#34;");
updateText("tl", "#tl-title", "#code-tl-title-text", "Title");

function updateTimelineText(timelineCardLimit) {
  for (let i = 1; i <= timelineCardLimit; i++) {
    updateText("tl", "#tl-" + i + "-title", "#code-tl-card-" + i + "-title", "Card #" + i + " title");
    updateText("tl", "#tl-" + i + "-date", "#code-tl-card-" + i + "-date-text", dateString + ( i < 6 ? " 0" + (i+7) + ":00AM" : " " + (i+7) + ":00PM" ));
    updateText("tl", "#tl-" + i + "-text", "#code-tl-card-" + i + "-text", "Card #" + i + " text");
  }
}

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
copyCode("tl");
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
