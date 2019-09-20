today = new Date();
dateString = today.toDateString();

$(document).ready(function() {
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
  // preview infobox
  preview("ib");
  preview("quo");
  //preview("tab");
  initialTable(3,3);
  // transcript preview
  preview("ts");
  preview("va");
});

//display component on nav select
$(".nav-link").click(function() {
  $("#component-builder").show();
  $(".component-content").each(function() {
    $(this).hide();
  });
  linkId = this.id.slice(5);
  $("#component-" + linkId).show();
});

/**********************************
 * button                         *
 **********************************/

// sets button style
$("#btn-style").change(function() {
  // if secondary style is selected, force button standard button size
  if ($(this).val() == "secondary") ($("#btn-size").val("standard"), $("#code-btn-class-size").text(""));
  $("#code-btn-class-style").text("btn btn-" + $(this).val());
  preview("btn");
});

// sets button size
$("#btn-size").change(function() {
  // if large size is selected, force button primary button style
  if ($(this).val() == "large") ($("#btn-style").val("primary"), $("#code-btn-class-style").text("btn btn-primary"));
  $("#code-btn-class-size").text($(this).val() == "standard" ? "" : " btn-lg");
  preview("btn");
});

// sets tags
$("#btn-tag").change(function() {
  $(".code-btn-tag").text($(this).val());
  // displays link input field and code
  $("#btn-link-field").toggle();
  $("#code-btn-link").html($(this).val() == "a" ? 'href="<span id="code-btn-link-text"></span>"' : "");
  $("#code-btn-link-text").text( !$("#btn-link").val() == "" ? $("#btn-link").val() : "#" );
  $("#code-btn-type").text( $(this).val() == "a" ? ' role="button" ' : 'type="button" ');
  preview("btn");
});

// generates button text from input
updateText("btn", "#btn-text", "#code-btn-text", "Button Text");

// generates link text from input
updateText("btn", "#btn-link", "#code-btn-link-text", "#");

/**********************************
 * card                           *
 **********************************/

// change card type between default card and float box
$("#cd-type").change(function(data){
  $(this).val() == "float-box"
    ? (cdLayout(),
      showCardImgs(4),
      $(".cd-img-form").show(),
      $("#cd-layout-form, .cd-img-check").hide(),
      $(".code-cd-type, .code-cd-body-class").text("float-box"))
    : ($("#cd-layout-form, .cd-img-check").show(),
    $(".code-cd-type, .code-cd-body-class").text("card"));
  preview("cd");  
});

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
    if ($("#cd-type").val() == "float-box") $(".cd-img-check").hide();
    preview("cd");
  });
});

// change card layout between vertical block and horizontal deck
$("#cd-layout").change(function(){
  cdLayout();
});

function cdLayout() {
  $("#cd-layout").val() == "deck" && $("#cd-type").val() == "default"
    ? ($("#code-cd-deck-open").text('<div class="card-deck">'),
      $("#code-cd-deck-close").text("</div>"),
      $(".code-cd-img-position").text("top"))
    : ($("#code-cd-deck-open, #code-cd-deck-close").empty(),
      $(".code-cd-img-position").text("left"),
      $("#cd-layout").val("block"));
  preview("cd");  
};

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

// create single card card code
function createCard(i) {
  return `<span id="code-cd-card-${i}"><pre>  <span class="code-open-tag">&lt;div&#32;class&#61;&#34;<span class="code-cd-type">${ $("#cd-type").val() == "float-box" ? "float-box" : "card" }</span>&#34;&gt;</span><span id="code-cd-${i}-img">
    <span id="code-cd-${i}-img-open">&lt;img&#32;class&#61;&#34;img&#45;<span class="code-cd-img-position">${ $("#cd-layout").val() == "block" ? "left" : "top" }</span>&#34;&#32;src&#61;&#34;</span><span id="code-cd-${i}-img-src">http:\/\/placekitten.com\/300\/300</span><span id="code-cd-${i}-img-middle">&#34;&#32;alt&#61;&#34;</span><span id="code-cd-${i}-img-alt">A&#32;cute&#32;kitten</span>&#34;&gt;</span></span>
    <span class="code-open-tag">&lt;div&#32;class&#61;&#34;<span class="code-cd-body-class">card</span>&#45;body&#34;&gt;</span><span id="code-cd-${i}-title">
      <span>&lt;h4&gt;</span><span id="code-cd-${i}-title-text">Card #${i} title</span><span>&lt;&#47;h4&gt;</span></span>
      <span class="code-open-tag">&lt;p&gt;</span><span id="code-cd-${i}-text">Card #${i} text</span><span class="code-close-tag">&lt;&#47;p&gt;</span>
    <span class="code-close-tag">&lt;&#47;div&gt;</span>
  <span class="code-close-tag">&lt;&#47;div&gt;</span></pre></span>`;
}

// create single card editor card, shows first card and collapses all others
function createCardEditorCard(i) {
  return `
    <div class="collapse-card cd-card ${ i == 1 ? "" : "collapsed" }" id="cd-card-${i}">
      <div class="collapse-header" id="cd-card-heading-${i}">
        <button class="btn btn-link"><h5 class="h4">Card #${i}</h5></button>
      </div>
      <div class="collapse-body" id="cd-collapse-${i}">
        <form>
          <div class="custom-control custom-checkbox cd-img-check">
            <input type="checkbox" class="custom-control-input checked" id="cd-${i}-check-img" checked>
            <label class="custom-control-label" for="cd-${i}-check-img"><span id="cd-${i}-toggle-img">Remove</span> image</label>
          </div>
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input checked" id="cd-${i}-check-title" checked>
            <label class="custom-control-label" for="cd-${i}-check-title"><span id="cd-${i}-toggle-title">Remove</span> title</label>
          </div>
          <div class="form-group cd-img-form cd-${i}-img-form" id="cd-${i}-img-src-form">
            <label for="cd-${i}-header">Img src</label>
            <input type="text" class="form-control" id="cd-${i}-img-src" placeholder="http://placekitten.com/300/300">
          </div>
          <div class="form-group cd-img-form cd-${i}-img-form" id="cd-${i}-img-alt-form">
            <label for="cd-${i}-header">Img alt text</label>
            <input type="text" class="form-control" id="cd-${i}-img-alt" placeholder="A cute kitten">
          </div>
          <div class="form-group" id="cd-${i}-title-form">
            <label for="cd-${i}-title">Title</label>
            <input type="text" class="form-control" id="cd-${i}-title" placeholder="Card #${i} title">
          </div>
          <div class="form-group">
            <label for="cd-${i}-text">Body text</label>
            <textarea class="form-control" id="cd-${i}-text" placeholder="Card #${i} text" rows="6"></textarea>
          </div>
        </form>
      </div>
    </div>
  `;
}

// generate card text from input
updateCards(4);

function updateCards(cardCardLimit) {
  for (let i = 1; i <= cardCardLimit; i++) {
    // toggle optional input fields
    toggleCheckboxText("#cd-" + i + "-check-img", "#cd-" + i + "-toggle-img");
    toggleCheckboxText("#cd-" + i + "-check-title", "#cd-" + i + "-toggle-title");
    toggleCheckbox("cd", "#cd-" + i + "-check-img", ".cd-" + i + "-img-form");
    toggleCheckbox("cd", "#cd-" + i + "-check-title", "#cd-" + i + "-title-form, #code-cd-" + i + "-title");
    // toggle img code
    $(document).on('click', "#cd-" + i + "-check-img", function (event) {
      $("#cd-" + i + "-check-img").hasClass("checked")
        ? $("#code-cd-" + i + "-img").html('\n    <span class="code-cd-img-open"></span><span class="code-cd-img-position"></span><span class="code-cd-img-src"></span><span id="code-cd-' + i + '-img-src"></span><span class="code-cd-img-alt"></span><span id="code-cd-' + i + '-img-alt"></span><span class="code-cd-img-close"></span>')
        : $("#code-cd-" + i + "-img").text("");
      $(".code-cd-img-open").text('<img class="card-img-');
      $(".code-cd-img-position").text(  $("#cd-layout").val() == "block" ? "left" : "top" );
      $(".code-cd-img-src").text('" src="');
      $("#code-cd-" + i + "-img-src").text($("#cd-" + i + "-img-src").val() !== "" ? $("#cd-" + i + "-img-src").val() : "https:\/\/placekitten.com\/300\/300");
      $(".code-cd-img-alt").text('" alt="');
      $("#code-cd-" + i + "-img-alt").text($("#cd-" + i + "-img-alt").val() !== "" ? $("#cd-" + i + "-img-alt").val() : "A cute kitten");
      $(".code-cd-img-close").text('">');
      preview("cd");
    });
    // toggle title code
    $(document).on('click', "#cd-" + i + "-check-title", function (event) {
      $("#cd-" + i + "-check-title").hasClass("checked")
        ? $("#code-cd-" + i + "-title").html('\n      <span class="code-cd-title-open"></span>\n        <span id="code-cd-' + i + '-title-text"></span>\n      <span class="code-cd-title-close"></span>')
        : $("#code-cd-" + i + "-title").text("");
      $(".code-cd-title-open").text('<h4 class="card-title">');
      $("#cd-" + i + "-title").val() !== "" ? $("#code-cd-" + i + "-title-text").text($("#cd-" + i + "-title").val()) : $("#code-cd-" + i + "-title-text").text("Card #" + i + " title");
      $(".code-cd-title-close").text('</h4>');
      preview("cd");
    });
    // update text
    updateText("cd", "#cd-" + i + "-img-src", "#code-cd-" + i + "-img-src", "https://placekitten.com/300/300");
    updateText("cd", "#cd-" + i + "-img-alt", "#code-cd-" + i + "-img-alt", "A cute kitten");
    updateText("cd", "#cd-" + i + "-title", "#code-cd-" + i + "-title-text", "Card #" + i + " title");
    updateText("cd", "#cd-" + i + "-text", "#code-cd-" + i + "-text", "Card #" + i + " text");
  }
}

function showCardImgs(cardCardLimit) {
  for (let i = 1; i <= cardCardLimit; i++) {
    $("#code-cd-" + i + "-img").html('\n    <span class="code-cd-img-open"></span><span class="code-cd-img-position"></span><span class="code-cd-img-src"></span><span id="code-cd-' + i + '-img-src"></span><span class="code-cd-img-alt"></span><span id="code-cd-' + i + '-img-alt"></span><span class="code-cd-img-close"></span>');
    $(".code-cd-img-open").text('<img class="card-img-');
    $(".code-cd-img-position").text(  $("#cd-layout").val() == "block" ? "left" : "top" );
    $(".code-cd-img-src").text('" src="');
    $("#code-cd-" + i + "-img-src").text($("#cd-" + i + "-img-src").val() !== "" ? $("#cd-" + i + "-img-src").val() : "https:\/\/placekitten.com\/300\/300");
    $(".code-cd-img-alt").text('" alt="');
    $("#code-cd-" + i + "-img-alt").text($("#cd-" + i + "-img-alt").val() !== "" ? $("#cd-" + i + "-img-alt").val() : "A cute kitten");
    $(".code-cd-img-close").text('">');
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
    <div class="collapse-card crsl-card ${ i == 1 ? "" : "collapsed" }" id="crsl-card-${i}">
      <div class="collapse-header" id="crsl-card-heading-${i}">
        <button class="btn btn-link"><h5 class="h4">Slide #${i}</h5></button>
      </div>
      <div class="collapse-body" id="collapse-${i}">
        <form class="needs-validation crsl-slide-form">
          <div class="form-group crsl-slide-img-form">
            <label for="crsl-slide-${i}-img-src">Image source</label>
            <input type="text" class="form-control" id="crsl-slide-${i}-img-src" placeholder="https://moodle.iddkingsonline.com/file.php/123/images/image.jpg">
            <small id="crsl-img-src-help" class="form-text text-muted">Select an image with 2:1 ratio (i.e 800 x 400px). The image must first be uploaded to Keats, where the generated link can be copied and pasted from.</small>
          </div>
          <div class="form-group crsl-slide-img-form">
            <label for="crsl-slide-${i}-img-alt">Alternative text*</label>
            <textarea class="form-control" id="crsl-slide-${i}-img-alt" placeholder="Description of image" rows="2" required></textarea>
            <div class="invalid-feedback crsl-img-invalid-feedback">
              Please provde alternative text for the image.
            </div>
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
  $(".code-crsl-slide-title-open").text('<h2>');
  $("#crsl-slide-" + i + "-title-text").val() !== "" ? $("#code-crsl-slide-" + i + "-title-text").text($("#crsl-slide-" + i + "-title-text").val()) : $("#code-crsl-slide-" + i + "-title-text").text("Carousel slide #" + i + " title");
  $(".code-crsl-slide-title-close").text('</h2>');
  preview("crsl");
  }
};

function updateCarouselSlides(carouselSlideLimit) {
  for (let i = 1; i <= carouselSlideLimit; i++) {
    // toggle optional image input field 
    toggleCheckbox("crsl", "#crsl-check-img", ".crsl-slide-img-form");
    toggleCheckbox("crsl", "#crsl-check-title", ".crsl-slide-title-form");
    toggleCheckboxText("#crsl-check-img", "#crsl-toggle-img");
    toggleCheckboxText("#crsl-check-title", "#crsl-toggle-title");
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
  return `<span id="code-col-card-${i}"><span class="code-open-tag">&lt;div&#32;class&#61;&#34;collapse&#45;card&#32collapsed&#34;&gt;</span>
    <span class="code-open-tag">&lt;div&#32;class&#61;&#34;collapse&#45;header&#34;&gt;</span>
      <span class="code-open-tag">&lt;button&#32;class&#61;&#34;btn&#32;btn&#45;link&#34;&gt;</span>
        <span class="code-open-tag">&lt;h5&#32;class&#61;&#34;h4&#34;&gt;</span><span id="code-col-collapse-${i}-heading">Collapse card #${i} heading</span><span class="code-close-tag">&lt;&#47;h5&gt;</span>
      <span class="code-close-tag">&lt;&#47;button&gt;</span>
    <span class="code-close-tag">&lt;&#47;div&gt;</span>
    <span class="code-open-tag">&lt;div&#32;class&#61;&#34;collapse&#45;body&#34;&gt;</span>
      <span id="code-col-collapse-${i}-body">Collapse card #${i} body</span>
    <span class="code-close-tag">&lt;&#47;div&gt;</span>
  <span class="code-close-tag">&lt;&#47;div&gt;</span></span>`;
}

// create single collapse editor card, shows first card and collapses all others
function createCollapseEditorCard(i) {
  return `
    <div class="collapse-card ${ i == 1 ? "" : "collapsed" }" id="col-card-${i}">
      <div class="collapse-header" id="col-card-heading-${i}">
        <button class="btn btn-link"><h5 class="h4">Card #${i}</h5></button>
      </div>
      <div class="collapse-body" id="collapse-${i}">
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
  `;
}

// generate card text from input
updateCollapseText(8);

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

// change css file on media type select
$("#em-media-type").change(function() {
  $("#em-player-size-form").toggle();
  $("#code-em-player-size").text( $(this).val() == "audio" ? "audio" : $("#em-player-size").val() );
  embedText = $("#em-embed").val();
  updateEmbedText();
  if (!embedText == "") preview("em");
});

// generate embed code
$("#em-embed").keyup(function() {
  embedText = $("#em-embed").val();
  updateEmbedText();
  preview("em");
}).keyup();

function updateEmbedText() {
  // update the id if provided
  embedId = $("#em-id").val();
  $("#em-media-type").val() == "audio"
  ? variables = '&amp;flashvars[infoScreen.plugin]=false&amp;flashvars[titleLabel.plugin]=false&amp;flashvars[related.plugin]=false&amp;flashvars[closedCaptions.displayCaptions]=false&amp;flashvars[IframeCustomPluginCss1]=https:\/\/git.iddkingsonline.com\/kaltura\/audio.css'
  : variables = '&amp;flashvars[infoScreen.plugin]=false&amp;flashvars[titleLabel.plugin]=false&amp;flashvars[related.plugin]=false&amp;flashvars[closedCaptions.displayCaptions]=false&amp;flashvars[closedCaptions.layout]=below&amp;flashvars[IframeCustomPluginCss1]=https:\/\/git.iddkingsonline.com\/kaltura\/kaltura.css';
  if (!embedId == "") embedText = embedText.replace('iframe id="kaltura_player', 'iframe id="'+ embedId);
  // add variables
  (!embedText == "")
  ? ( embedText = embedText.replace('\" width', variables + '\" width'),
    $("#code-em-embed").text(embedText))
  : $("#code-em-embed").text("<iframe></iframe>");
}


// update the id, do not refresh preview
$("#em-id").keyup(function() {
  embedId = $(this).val();
  embedText = $("#em-embed").val();
  if (!embedText == "") embedText = embedText.replace('iframe id="kaltura_player', 'iframe id="'+ embedId);  
  (!embedText == "") ? $("#code-em-embed").text(embedText) : $("#code-em-embed").text("<iframe></iframe>");
}).keyup();

/**********************************
 * infobox                        *
 **********************************/

// change infobox type
$("#ib-type").change(function() {
  $("#code-ib-type").text($(this).val());
  $(this).val() == "alert-instructional"
  ? ($("#code-ib-alert-class").text("alert "), $("#code-ib-alert-role").text('" role="alert'), $("#code-ib-title-open, #code-ib-title-text, #code-ib-title-close").empty())
  : ($("#code-ib-alert-class").empty(), $("#code-ib-alert-role").empty());
  $(this).val() == "definition-box"
  ? (
    $("#ib-title-form").show(),
    $("#code-ib-title-open").html("\n    &lt;h5&gt;"),
    $("#code-ib-title-text").text((!$("#ib-df-title").val() == "") ? $("#ib-df-title").val() : "Definition title" ),
    $("#code-ib-title-close").text("</h5>"))
  : $("#ib-title-form").hide();
  $(this).val() == "key-concept-box"
  ? ($("#ib-title-form").hide(), $("#code-ib-title-open, #code-ib-title-text, #code-ib-title-close").empty())
  : $("#ib-title-form").show();
  if ($(this).val() == "learning-outcome-box") (
    $("#code-ib-title-open").html("\n    &lt;h5&gt;"),
    $("#code-ib-title-text").text("Learning outcomes"),
    $("#code-ib-title-close").text("</h5>"));
  preview("ib");
});

// update infobox text
updateText("ib", "#ib-text", "#code-ib-text", "Info box body text");
updateText("ib", "#ib-df-title", "#code-ib-title-text", "Foo");

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
 * quotation                      *
 **********************************/

updateText("quo", "#quo-body", "#code-quo-body", "Quotation");
updateText("quo", "#quo-att", "#code-quo-att", "Attribution, 2019");

/**********************************
 * table                          *
 **********************************/

// on column selet change, update table code and preview
$("#tab-col-no").on('focus', function() {
  $(this).data("previous",$(this).val());
  $(this).blur();
  $("#tab-col-no").change(function(){
    newMax = Number(($(this).val()));
    oldMax = Number(($(this).data("previous")));
    maxTabRows = $("#tab-row-no").val();
    // compare old and new max list item value
    if (newMax > oldMax) {
      for (let c = oldMax; c < newMax; c++) {
        // add new headers
        tabColHeader = createTableColHeader(c+1);
        $("#code-tab-headers").append(tabColHeader);
        for (let r = 1; r <= maxTabRows; r++) {
          tabRowCol = createTableRowCol(c+1,r);
          $("#code-tab-row-"+ r + "-cols").append(tabRowCol);
        }
      }
     } else {
       for (let c = newMax; c < oldMax; c++) {
        // remove items
        $("#code-tab-col-"+(c+1)+"-header").remove();
        for (let r = 1; r <= maxTabRows; r++) {
          $("#code-tab-row-"+r+"-col-"+(c+1)).remove();
        }
      }
    }
    // reset previous value
    $(this).removeData("previous");
    preview("tab");
  });
});

// on row selet change, update table code and preview
$("#tab-row-no").on('focus', function() {
  $(this).data("previous",$(this).val());
  $(this).blur();
  $("#tab-row-no").change(function(){
    newMax = Number(($(this).val()));
    oldMax = Number(($(this).data("previous")));
    // compare old and new max list item value
    if (newMax > oldMax) {
      for (let r = oldMax; r < newMax; r++) {
        // add new items
        tabRow = createTableRow(r+1);
        $("#code-tab-rows").append(tabRow);
        maxTabCols = $("#tab-col-no").val();
        for (let c = 1; c <= maxTabCols; c++) {
          tabRowCol = createTableRowCol(c,r+1);
          $("#code-tab-row-"+ (r+1) + "-cols").append(tabRowCol);
        }
      }
    } else {
      for (let r = newMax; r < oldMax; r++) {
        // remove items
        $("#code-tab-row-"+(r+1)).remove();
      }
    }
    // reset previous value
    $(this).removeData("previous");
    preview("tab");
  });
});

// initial table size
function initialTable(maxTabCols, maxTabRows) {
  for (let c = 1; c <= maxTabCols; c++) {
    tabColHeader = createTableColHeader(c);
    $("#code-tab-headers").append(tabColHeader);
  }
  for (let r = 1; r <= maxTabRows; r++) {
    tabRow = createTableRow(r);
    $("#code-tab-rows").append(tabRow);
    for (let c = 1; c <= maxTabCols; c++) {
      tabRowCol = createTableRowCol(c,r);
      $("#code-tab-row-"+ r + "-cols").append(tabRowCol);
    }
  }
  preview("tab");
}

// create single table column header code
function createTableColHeader(i) {
  return `<span id="code-tab-col-${i}-header">\n      <span class="code-open-tag">&lt;th&#32;scope&#61;&#34;col&#34;&gt;<span id="code-tab-col-${i}-header-text">Column header</span><span class="code-close-tag">&lt;&#47;th&gt;</span></span>`;
}
// create single table row header code
function createTableRowHeader(i) {
  return `<span class="code-tab-row-header">\n      <span class="code-open-tag">&lt;th&#32;scope&#61;&#34;row&#34;&gt;<span id="code-tab-row-${i}-header-text">${i == 0 ? "#" :"Row Header"}</span><span class="code-close-tag">&lt;&#47;th&gt;</span></span>`;
}
// create single table row code
function createTableRow(i) {
  return `<span id="code-tab-row-${i}">\n    <span class="code-open-tag">&lt;tr&gt;<span id="code-tab-row-${i}-cols"><span id="code-tab-row-${i}-header"></span></span>
    <span class="code-close-tag">&lt;&#47;tr&gt;</span></span>`;
}
// create single table row column code
function createTableRowCol(i,j) {
  return `<span id="code-tab-row-${j}-col-${i}">\n      <span class="code-open-tag">&lt;td&gt;<span id="code-tab-row-${j}-col-${i}-text">Cell</span><span class="code-close-tag">&lt;&#47;td&gt;</span></span>`;
}

// change table width
$("#tab-width").change(function() {
  $("#code-tab-width").text( $(this).val() == "default" ? " default-width" : "" );
  preview("tab");
});

// toggle table row headers
toggleCheckboxText("#tab-check-row-title", "#tab-toggle-row-title");
$(document).on("click", "#tab-check-row-title", function(event) {
  $(this).toggleClass("unchecked").toggleClass("checked");
  maxTabRows = $("#tab-row-no").val();
  if ($(this).hasClass("checked")) {
    for (let r = 0; r <= maxTabRows; r++) {
      tabRowHeader = createTableRowHeader(r);
      $("#code-tab-row-" + r + "-header").append(tabRowHeader);
    }
  } else {
    $(".code-tab-row-header").remove();
  }
  preview("tab");
});

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
  date = $("#tl-" + i + "-date").val();
  title = $("#tl-" + i + "-title").val();
  text = $("#tl-" + i + "-text").val();
  return `${ i == 1 ? "" : "  "}<span id="code-tl-card-${i}"><span class="code-open-tag">&lt;div&#32;class&#61;&#34;row&#32;timeline&#45;row<span id="code-tl-card-${i}-highlighted"></span>&#34;&gt;</span>
    <span class="code-open-tag">&lt;div&#32;class&#61;&#34;col&#45;auto&#32;text&#45;center&#32;flex&#45;column&#32;d&#45;none&#32;d&#45;sm&#45;flex&#34;&gt;</span>
      <span class="code-open-tag">&lt;div&#32;class&#61;&#34;row&#32;h&#45;50&#34;&gt;</span>
        <span class="code-open-tag">&lt;div&#32;class&#61;&#34;col${ i == 1 ? "" : " border&#45;right" }&#34;&gt;</span>&#38;nbsp&#59;<span class="code-close-tag">&lt;&#47;div&gt;</span>
        <span class="code-open-tag">&lt;div&#32;class&#61;&#34;col${ i == 1 ? "" : " border&#45;left" }&#34;&gt;</span>&#38;nbsp&#59;<span class="code-close-tag">&lt;&#47;div&gt;</span>
      <span class="code-close-tag">&lt;&#47;div&gt;</span>
      <span class="code-open-tag">&lt;div&gt;</span>
        <span class="code-open-tag">&lt;span&#32;class&#61;&#34;badge&#32;timeline&#45;badge&#45;pill&#32;border${ i == 1 || i == j ? " fill" : "" }&#34;&gt;</span>&#38;nbsp&#59;<span class="code-close-tag">&lt;&#47;span&gt;</span>
      <span class="code-close-tag">&lt;&#47;div&gt;</span>
      <span class="code-open-tag">&lt;div&#32;class&#61;&#34;row&#32;h&#45;50&#34;&gt;</span>
        <span class="code-open-tag">&lt;div&#32;class&#61;&#34;col${ i == j ? "" : " border&#45;right" }&#34;&gt;</span>&#38;nbsp&#59;<span class="code-close-tag">&lt;&#47;div&gt;</span>
        <span class="code-open-tag">&lt;div&#32;class&#61;&#34;col${ i == j ? "" : " border&#45;left" }&#34;&gt;</span>&#38;nbsp&#59;<span class="code-close-tag">&lt;&#47;div&gt;</span>
      <span class="code-close-tag">&lt;&#47;div&gt;</span>
    <span class="code-close-tag">&lt;&#47;div&gt;</span>
    <span class="code-open-tag">&lt;div&#32;class&#61;&#34;col&#32;timeline&#45;content&#34;&gt;</span>
      <span class="code-open-tag">&lt;div&#32;class&#61;&#34;card&#32timeline-card&#34;&gt;</span><span id="code-tl-card-${i}-date">
        <span class="code-tl-card-date-open">&lt;span&#32;class&#61;&#34;date&#45;tab&#34;&gt;</span><span id="code-tl-card-${i}-date-text">${ !date == "" ? date : dateString + " " + (i < 6 ? (i + 7) + ":00AM" : (i - 5) + ":00PM")}</span><span class="code-tl-card-date-close">&lt;&#47;span&gt;</span></span>
        <span>&lt;div&#32;class&#61;&#34;card&#45;body&#34;&gt;</span>
          <span class="code-open-tag">&lt;div&#32;class&#61;&#34;row&#34;&gt;</span>
            <span id="code-tl-card-${i}-img"><span class="code-open-tag">&lt;div&#32;class&#61;&#34;col&#45;md&#45;3&#32;card&#45;image&#34;&gt;</span>
              <span class="code-open-tag">&lt;img&#32;src&#61;&#34;<span id="code-tl-card-${i}-img-src">https:\/\/placekitten.com\/200\/300</span>&#34;&gt;</span>
            <span class="code-close-tag">&lt;&#47;div&gt;</span></span>
            <span class="code-open-tag">&lt;div&#32;class&#61;&#34;col&#45;md&#34;&gt;</span>
              <span class="code-open-tag">&lt;h5&#32;class&#61;&#34;card&#45;title&#34;&gt;</span><span id="code-tl-card-${i}-title">${ !title == "" ? title : "Card #" + i + " title"}</span><span class="code-close-tag">&lt;&#47;h5&gt;</span>
              <span class="code-open-tag">&lt;p&#32;class&#61;&#34;card&#45;text&#34;&gt;</span><span id="code-tl-card-${i}-text">${ !text == "" ? text : "Chocolate sesame snaps bonbon sesame snaps macaroon powder lemon drops dessert. Jelly beans halvah jelly-o icing marshmallow tart soufflé."}</span><span class="code-close-tag">&lt;&#47;p&gt;</span>
            <span class="code-close-tag">&lt;&#47;div&gt;</span>
          <span class="code-close-tag">&lt;&#47;div&gt;</span>
          <span id="code-tl-card-${i}-img-ref"><span class="code-open-tag">&lt;p&#32;class&#61;&#34;img&#45;reference&#34;&gt;</span><span id="code-tl-card-${i}-img-reference">Image: placekitten.com. An extremely adorable kitten</span><span class="code-close-tag">&lt;&#47;p&gt;</span></span>
        <span class="code-close-tag">&lt;&#47;div&gt;</span>
      <span class="code-close-tag">&lt;&#47;div&gt;</span>
    <span class="code-close-tag">&lt;&#47;div&gt;</span>
  <span class="code-close-tag">&lt;&#47;div&gt;</span>${ i == j ? "" : "\n" }</span>`;
}

// create single timeline editor card, shows first card and collapses all others
function createTimelineEditorCard(i) {
  return `
    <div class="collapse-card tl-card ${ i == 1 ? "" : "collapsed" }" id="tl-card-${i}">
      <div class="collapse-header" id="tl-card-heading-${i}">
        <button class="btn btn-link"><h5 class="h4">Timeline card #${i}</h5></button>
      </div>
      <div class="collapse-body" id="tl-collapse-${i}">
        <form class="needs-validation tl-card-form">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="tl-card-${i}-color">Card color</label>
            </div>
            <select class="custom-select" id="tl-card-${i}-color">
              <option value="default" selected>Default</option>
              <option value="highlighted">Highlighted</option>
            </select>
          </div>
          <div class="custom-control custom-checkbox mb-3">
            <input type="checkbox" class="custom-control-input checked" id="tl-${i}-check-img" checked>
            <label class="custom-control-label" for="tl-${i}-check-img"><span id="tl-${i}-toggle-img">Remove</span> image</label>
          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-prepend">
                <label class="input-group-text" for="tl-card-${i}-img-src">Image source*</label>
              </div>
              <input type="text" class="form-control" id="tl-card-${i}-img-src" placeholder="https://moodle.iddkingsonline.com/file.php/123/images/image.jpg">
            </div>
            <small id="tl-img-src-help" class="form-text text-muted">The image must first be uploaded to Keats, where the generated link can be copied and pasted from.</small>
            <div class="invalid-feedback tl-img-invalid-feedback">
              Please provde a source for the image.
            </div>
            <label for="tl-card-${i}-img-alt">Alternative text*</label>
            <textarea class="form-control" id="tl-card-${i}-img-alt" placeholder="Description of image" rows="2" required></textarea>
            <div class="invalid-feedback tl-img-invalid-feedback">
              Please provde alternative text for the image.
            </div>
            <label for="tl-card-${i}-img-red">Image reference*</label>
            <textarea class="form-control" id="tl-card-${i}-img-ref" placeholder="www.placekitten.com" rows="2" required></textarea>
            <div class="invalid-feedback tl-img-invalid-feedback">
              Please provde a reference for the image.
            </div>
          </div>
          <div class="form-group tl-title" id="tl-${i}-date-form">
            <label for="tl-${i}-title">Card title</label>
            <input type="text" class="form-control" id="tl-${i}-title" placeholder="Card #${i} title">
          </div>
          <div class="form-group tl-date" id="tl-${i}-date-form">
            <label for="tl-${i}-date">Date</label>
            <input type="text" class="form-control" id="tl-${i}-date" placeholder="${dateString} ${ i < 6 ? i + 7 : i - 5 }:00 ${ i < 6 ? "AM" : "PM" }">
          </div>
          <div class="form-group">
            <label for="tl-${i}-text">Text</label>
            <textarea class="form-control" id="tl-${i}-text" placeholder="Card #${i} text" rows="6"></textarea>
          </div>
        </form>
      </div>
    </div>
  `;
}

/*
// toggle timeline card layout
$("#tl-card-layout").change(function(){
  layout = $(this).val();
  timelineToggleLayout(8);
  preview("tl");
});
function timelineToggleLayout(timelineCardLimit) {
  for (let i = 1; i <= timelineCardLimit; i++) {
  layout == 1
    ? ( $("#code-tl-card-" + i + "-content-order").html(""), $(".code-tl-card-dot-order").html(""), $("#code-tl-card-" + i + "-spacer").text(""))
    : ( $("#code-tl-card-" + i + "-content-order").html(`&#32;order&#45;${ i % 2 == 0 ? 1 : 3 }`), $(".code-tl-card-dot-order").html("&#32;order&#45;2"), $("#code-tl-card-" + i + "-spacer").html(`\n    &lt;div&#32;class&#61;&#34;col&#45;sm&#32;order&#45;${(i % 2 == 0) ? 3 : 1}&#34;&gt&lt;&#47;div&gt;`));
  }
};
*/

// toggle timeline title code
/*toggleCheckboxText("#tl-check-title", "#tl-toggle-title");
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


// toggle timeline header code
toggleCheckboxText("#tl-check-header", "#tl-toggle-header");
$(document).on("click", "#tl-check-header", function(event) {
  $("#tl-check-header").toggleClass("unchecked").toggleClass("checked");
  timelineToggleHeader(8);
});

function timelineToggleHeader(timelineCardLimit) {
  for (let i = 1; i <= timelineCardLimit; i++) {
  color = $("#tl-card-" + i + "-color").val();
  $("#tl-check-header").hasClass("checked")
    ? ( $("#code-tl-card-" + i + "-header-open").html(`<span>&lt;div&#32;class&#61;&#34;card&#45;header</span><span id="code-tl-card-${i}-header-color"></span><span>&#34;&gt;</span>`), $("#code-tl-card-" + i + "-header-close").html("\n        &lt;&#47;div&gt;\n        &lt;div&#32;class&#61;&#34;card&#45;body&#34;&gt;"))
    : ( $("#code-tl-card-" + i + "-header-open").html(`<span>&lt;div&#32;class&#61;&#34;card&#45;body</span><span id="code-tl-card-${i}-body-color"></span><span>&#34;&gt;</span>`), $("#code-tl-card-" + i + "-header-close").html(""));
  color = $("#tl-card-" + i + "-color").val();
  if (color != "default") ( $("#code-tl-card-" + i + "-header-color").text(` text-white bg-${color}`), $("#code-tl-card-" + i + "-body-color").text(` text-white bg-${color}`) );
  preview("tl");
  }
};
*/

// toggle timeline date code
toggleCheckboxText("#tl-check-date", "#tl-toggle-date");
$(document).on("click", "#tl-check-date", function(event) {
  $("#tl-check-date").toggleClass("unchecked").toggleClass("checked");
  $(".tl-date").toggle();
  timelineToggleDate(8);
  preview("tl");
});

function timelineToggleDate(timelineCardLimit) {
  for (let i = 1; i <= timelineCardLimit; i++) {
  $("#tl-check-date").hasClass("checked")
    ? $("#code-tl-card-" + i + "-date").html('\n        <span class="code-tl-card-date-open"></span>\n          <span id="code-tl-card-' + i + '-date-text"></span>\n        <span class="code-tl-card-date-close"></span>')
    : $("#code-tl-card-" + i + "-date").text("");
  $(".code-tl-card-date-open").text('<span class="date-tab">');
  $("#tl-" + i + "-date").val() !== "" ? $("#code-tl-card-" + i + "-date-text").text($("#tl-" + i + "-date").val()) : $("#code-tl-card-" + i + "-date-text").text(dateString + " " + (i < 6 ? (i + 7) + ":00AM" : (i - 5) + ":00PM"));
  $(".code-tl-card-date-close").text('</span>');
  }
};

// toggle timeline image code
timelineToggleImage(8);

function timelineToggleImage(timelineCardLimit) {
  for (let i = 1; i <= timelineCardLimit; i++) {
    toggleCheckboxText("#tl-" + i + "-check-img", "#tl-" + 1 + "-toggle-img");
    $(document).on("click", "#tl-" + i + "-check-img", function(event) {
      $("#tl-" + i + "-check-img").toggleClass("unchecked").toggleClass("checked");
      $("#tl-" + i + "-check-img").hasClass("checked")
        ? ( $("#code-tl-card-" + i + "-img").html('<span class="code-tl-card-img-open"></span><span id="code-tl-card-' + i + '-img-src"></span><span class="code-tl-card-img-center"></span><span id="code-tl-card-' + i + '-img-alt"></span><span class="code-tl-card-img-close"></span>'),
            $("#code-tl-card-" + i + "-img-ref").html('<span class="code-tl-card-img-ref-open"></span><span id="code-tl-card-' + i + '-img-ref-text"></span><span class="code-tl-card-img-ref-close"></span>') )
        : ( $("#code-tl-card-" + i + "-img").text(""),
            $("#code-tl-card-" + i + "-img-ref").text("") );
      $(".code-tl-card-img-open").text('<div class="col-md-3 card-image"><img src="');
      $("#code-tl-card-" + i + "-img-src").text( $("#tl-card-" + i + "-img-src").val() !== "" ? $("#tl-card-" + i + "-img-src").val() : "https://placekitten.com/200/300");
      $(".code-tl-card-img-center").text('" alt="');
      $("#code-tl-card-" + i + "-img-alt").text( $("#tl-card-" + i + "-img-alt").val() !== "" ? $("#tl-card-" + i + "-img-alt").val() : "An extremely adorable kitten");
      $(".code-tl-card-img-close").text('"></div>');
      $(".code-tl-card-img-ref-open").text('<p class="text-right img-reference">');
      $("#code-tl-card-" + i + "-img-ref-text").text( $("#tl-card-" + i + "-img-ref").val() !== "" ? $("#tl-card-" + i + "-img-ref").val() : "Image: placekitten.com. An extremely adorable kitten");
      $(".code-tl-card-img-ref-close").text('</p>');
     preview("tl");
    });
  }
};

// change card color
timelineChangeCardColor(8);

function timelineChangeCardColor(timelineCardLimit) {
  for (let i = 1; i <= timelineCardLimit; i++) {
    $("#tl-card-" + i + "-color").change(function(){
      color = $(this).val();
      $("#code-tl-card-" + i + "-highlighted").text( color == "highlighted" ? " highlighted" : "" );
      preview("tl");
    });
  }  
};

// generate card text from input
updateTimelineText(8);
updateTextOrHide("tl", "#tl-id", "&#32;id&#61;&#34;", "#code-tl-id", "&#34;");
//updateText("tl", "#tl-title", "#code-tl-title-text", "Title");

function updateTimelineText(timelineCardLimit) {
  for (let i = 1; i <= timelineCardLimit; i++) {
    updateText("tl", "#tl-" + i + "-title", "#code-tl-card-" + i + "-title", "Card #" + i + " title");
    updateText("tl", "#tl-" + i + "-date", "#code-tl-card-" + i + "-date-text", dateString + ( i < 6 ? " 0" + (i+7) + ":00AM" : " " + (i+7) + ":00PM" ));
    updateText("tl", "#tl-" + i + "-text", "#code-tl-card-" + i + "-text", "Card #" + i + " text");
    updateText("tl", "#tl-card-" + i + "-img-src", "#code-tl-card-" + i + "-img-src", "https://placekitten.com/200/300");
    updateText("tl", "#tl-card-" + i + "-img-alt", "#code-tl-card-" + i + "-img-alt", "An extremely adorable kitten" );
    updateText("tl", "#tl-card-" + i + "-img-ref", "#code-tl-card-" + i + "-img-ref-text", "Foo");
  }
}

/**********************************
 * transcript                     *
 **********************************/

updateText("ts", "#ts-id", ".code-ts-id", "modname-unitno-transcript");
updateText("ts", "#ts-link", "#code-ts-link", "#");
updateText("ts", "#ts-body", "#code-ts-body", "Transcript body...");

// toggle view close transcript button
$(document).on("click", ".view-close-transcript", function(event) {
  $(this).text($(this).text() == 'View transcript' ? 'Close transcript' : 'View transcript');
});

/**********************************
 * view answer                    *
 **********************************/

updateText("va", "#va-q", "#code-va-q", "Question?");
updateText("va", "#va-a", "#code-va-a", "Answer");

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

// toggles checkbox text
function toggleCheckboxText(input, textspan) {
  $(document).on('click', input, function (event) {
    $(textspan).text($(input).hasClass("checked") ? "Add" : "Remove");
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
copyCode("ib");
copyCode("ls");
copyCode("quo");
copyCode("tab");
copyCode("tl");
copyCode("ts");
copyCode("va");


// on copy code button click
function copyCode(component) {
  $(document).on("click", "#copy-" + component + "-code", function(event) {
    // run component validation
    componentForms = [$("#" + component + "-form")];
    validity = "valid";
    altTextValidity = "valid";
    // for carousel, check alt text
    if (component == "crsl" && $("#crsl-check-img").hasClass("checked")) {
      altTextForms = [];
      $(".crsl-slide-form").each(function() {
        altTextForms.push($(this));
      });
      validateForms(altTextForms);
      altTextValidity == "invalid" ? $("#crsl-alt-text-alert").removeClass("d-none") : $("#crsl-alt-text-alert").addClass("d-none");            
    }
    validateForms(componentForms);
    if (validity === "invalid") return;
    // copy code onto clipboard
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

function validateForms(forms) {
  $.each(forms, function(i, form) {
    if (form.hasClass("needs-validation")) {
      form.addClass("was-validated");
      if (!form[0].checkValidity()) {
        validity = "invalid";
        if (altTextForms && forms == altTextForms) altTextValidity = "invalid";
      }
    }
  });
}
