today = new Date();
dateString = today.toDateString();

$(document).ready(function() {
  preview("an");
  // default audio preview on load
  // set card to show 1 card by default
  maxCards = 1;
  initialCards(maxCards);
  // set carousel to show 3 slides by default
  maxSlides = 3;
  initialCarouselSlides(maxSlides);
  // set collapse to show 3 cards by default
  maxCollapseCards = 3;
  initialCollapseCards(maxCollapseCards);
  preview("dl");
  // set list to show 3 items by default
  maxListItems = 3;
  initialListItems(maxListItems);
  // preview infobox
  preview("ib");
  preview("quo");
  //preview("tab");
  initialTable(3,3);
  // transcript preview
  preview("ts");
  preview("va");
  // default video preview on load
  $("#vd-preview-pane").html('<div class="embed-responsive embed-responsive-400by285"><iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2368101/sp/236810100/embedIframeJs/uiconf_id/42876062/partner_id/2368101?iframeembed=true&playerId=kaltura_player&entry_id=0_m83muzm5&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_fejlyov0&amp;flashvars[infoScreen.plugin]=false&amp;flashvars[titleLabel.plugin]=false&amp;flashvars[related.plugin]=false&amp;flashvars[closedCaptions.displayCaptions]=false&amp;flashvars[closedCaptions.layout]=below&amp;flashvars[transcript.plugin]=false&amp;flashvars[IframeCustomPluginCss1]=https://git.iddkingsonline.com/kaltura/kaltura.css" width="400" height="285" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" frameborder="0" title="Kaltura Player"></iframe></div>');
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
 * academic note                  *
 **********************************/

// toggle academic note author code
toggleCheckboxText("#an-check-author", "#an-toggle-author");
$(document).on("click", "#an-check-author", function(event) {
  $("#an-check-author").toggleClass("unchecked").toggleClass("checked");
  $(".an-author").toggle();
  $("#code-an-author").html( $(this).hasClass("checked") ? '<span class="code-an-author-open"></span><span id="code-an-author-img-src"></span><span class="code-an-author-2"></span><span id="code-an-author-img-alt"></span><span class="code-an-author-3"></span><span id="code-an-author-name"></span><span class="code-an-author-close"></span>' : "");
  $(".code-an-author-open").text('<div class="card-author">\n        <img src="');
  $("#code-an-author-img-src").text( $("#an-author-img-src").val() !== "" ? $("#an-author-img-src").val() : "https://via.placeholder.com/150");
  $(".code-an-author-2").text('"');
  $("#code-an-author-img-alt").text( $("#an-author-img-alt").val() !== "" ? ' alt ="' + $("#an-author-img-alt").val() + '"' : "");
  $(".code-an-author-3").text('>\n        <h5 class="card-title">');
  $("#code-an-author-name").text( $("#an-author-name").val() !== "" ? $("#an-author-name").val() : "Author name");
  $(".code-an-author-close").text('</h5>\n      </div>\n      ');
  preview("an");
});

// updates text on input change
updateText("an", "#an-author-img-src", "#code-an-author-img-src", "https://keats.kcl.ac.uk/pluginfile.php/1234567/mod_folder_content/1/23/name.jpg");
updateAltText("an", "#an-author-img-alt", "#code-an-author-img-alt");
updateText("an", "#an-author-name", "#code-an-author-name", "Author name");
updateText("an", "#an-body", "#code-an-body", "Pudding pie bonbon muffin carrot cake fruitcake macaroon...");

/**********************************
 * audio                          *
 **********************************/

// toggle view answer author code
toggleCheckboxText("#au-check-img", "#au-toggle-img");
$(document).on("click", "#au-check-img", function(event) {
  $("#au-check-img").toggleClass("unchecked").toggleClass("checked");
  $(".au-img").toggle();
  $("#code-au-img-container").html( $(this).hasClass("checked") ? '<span class="code-au-img-open"></span><span id="code-au-img-img-src"></span><span class="code-au-img-2"></span><span id="code-au-img-img-alt"></span><span class="code-au-img-close"></span>' : "");
  $(".code-au-img-open").text('<div class="card-author">\n        <img class="audio-image"  src="');
  $("#code-au-img-img-src").text( $("#au-img-src").val() !== "" ? $("#au-img-src").val() : "https://via.placeholder.com/150");
  $(".code-au-img-2").text('"');
  $("#code-au-img-img-alt").text( $("#au-img-alt").val() !== "" ? ' alt="' + $("#au-img-alt").val() + '"' : '');
  $(".code-au-img-close").text('">\n    </div>\n    ');
  preview("au");
});

// generate embed code
$("#au-embed").keyup(function() {
  embedText = $("#au-embed").val();
  variables =
  '&amp;flashvars[infoScreen.plugin]=false&amp;flashvars[titleLabel.plugin]=false&amp;flashvars[related.plugin]=false&amp;flashvars[closedCaptions.displayCaptions]=false&amp;flashvars[transcript.plugin]=false&amp;flashvars[IframeCustomPluginCss1]=https:\/\/kit-free.fontawesome.com\/releases\/latest\/css\/free.min.css&amp;flashvars[IframeCustomPluginCss2]=https:\/\/git.iddkingsonline.com\/designsystem\/css\/audio.css&amp;flashvars[loadingSpinner.imageUrl]=https://git.iddkingsonline.com/assets/blank.png';
  // add variables
  (!embedText == "")
  ? ( embedText = embedText.replace('\" width', variables + '\" width'),
    $("#code-au-embed").text(embedText))
  : $("#code-au-embed").text('<iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2368101/sp/236810100/embedIframeJs/uiconf_id/42876062/partner_id/2368101?iframeembed=true&playerId=kaltura_player&entry_id=1_ps7tz9uc&flashvars[streamerType]=auto&flashvars[localizationCode]=en&flashvars[leadWithHTML5]=true&flashvars[sideBarContainer.plugin]=true&flashvars[sideBarContainer.position]=left&flashvars[sideBarContainer.clickToClose]=true&flashvars[chapters.plugin]=true&flashvars[chapters.layout]=vertical&flashvars[chapters.thumbnailRotator]=false&flashvars[streamSelector.plugin]=true&flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&flashvars[dualScreen.plugin]=true&flashvars[hotspots.plugin]=1&flashvars[Kaltura.addCrossoriginToIframe]=true&&wid=1_8oznd0m2&flashvars[infoScreen.plugin]=false&flashvars[titleLabel.plugin]=false&flashvars[related.plugin]=false&flashvars[closedCaptions.displayCaptions]=false&flashvars[transcript.plugin]=false&flashvars[IframeCustomPluginCss1]=https://kit-free.fontawesome.com/releases/latest/css/free.min.css&flashvars[IframeCustomPluginCss2]=https://git.iddkingsonline.com/designsystem/css/audio.css&flashvars[loadingSpinner.imageUrl]=https://git.iddkingsonline.com/assets/blank.png" width="400" height="285" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation" frameborder="0" title="Kaltura Player"></iframe>');
  preview("au");
}).keyup();

// updates text on input change
updateText("au", "#au-img-src", "#code-au-img-src", "https://via.placeholder.com/300");
updateAltText("au", "#au-img-alt", "#code-au-img-img-alt");
updateText("au", "#au-speaker", "#code-au-speaker", "Professor Place Holder");
updateText("au", "#au-title", "#code-au-title", "Audio title");

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
    ? ( cdLayout(),
      showCardImgs(4),
      $(".cd-img-form").show(),
      $("#cd-layout-form, .cd-img-check").hide(),
      $(".code-cd-type, .code-cd-body-class").text("float-box"),
      $("#code-cd-img-container-open").html("div"),
      $("#code-cd-img-container-middle").html("&gt;\n&lt;img&gt;"),
      $("#code-cd-img-container-close").html("&lt;&#47;div&gt;\n&lt;&#47;div&gt;") )
    : ( $("#cd-layout-form, .cd-img-check").show(),
      $(".code-cd-type, .code-cd-body-class").text("card") );
  preview("cd");  
});

// on select change, show only the required no of cards to edit, update code and preview
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
    <span id="code-cd-${i}-img-open">&lt;<span id="code-cd-img-container-open">img</span>&#32;src&#61;&#34;</span><span id="code-cd-${i}-img-src">https:\/\/via.placeholder.com\/300</span><span id="code-cd-${i}-img-middle">&#34;</span><span id="code-cd-${i}-img-alt"></span>&gt;<span id="code-cd-img-container-close"></span></span></span>
    <span class="code-open-tag">&lt;div&#32;class&#61;&#34;<span class="code-cd-body-class">card</span>&#45;body&#34;&gt;</span><span id="code-cd-${i}-title">
      <span class="code-open-tag">&lt;h4&#32;class&#61;&#34;card-text&#34;&gt;</span><span id="code-cd-${i}-title-text">Card #${i} title</span><span>&lt;&#47;h4&gt;</span></span>
      <span class="code-open-tag">&lt;p&#32;class&#61;&#34;card-text&#34;&gt;</span><span id="code-cd-${i}-text">Card #${i} text</span><span class="code-close-tag">&lt;&#47;p&gt;</span>
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
            <input type="text" class="form-control" id="cd-${i}-img-src" placeholder="https://via.placeholder.com/300">
          </div>
          <div class="form-group cd-img-form cd-${i}-img-form" id="cd-${i}-img-alt-form">
            <label for="cd-${i}-header">Img alt text</label>
            <input type="text" class="form-control" id="cd-${i}-img-alt" placeholder="Description of image">
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
        ? $("#code-cd-" + i + "-img").html('\n    <span class="code-cd-img-open"></span></span><span class="code-cd-img-src"></span><span id="code-cd-' + i + '-img-src"></span><span class="code-cd-img-alt"></span><span id="code-cd-' + i + '-img-alt"></span><span class="code-cd-img-close"></span>')
        : $("#code-cd-" + i + "-img").text("");
      $(".code-cd-img-open").text('<img');
      $(".code-cd-img-src").text(' src="');
      $("#code-cd-" + i + "-img-src").text($("#cd-" + i + "-img-src").val() !== "" ? $("#cd-" + i + "-img-src").val() : "https:\/\/via.placeholder.com\/300");
      $(".code-cd-img-alt").text('"');
      $("#code-cd-" + i + "-img-alt").text($("#cd-" + i + "-img-alt").val() !== "" ? ' alt="' + $("#cd-" + i + "-img-alt").val() + '"' : "");
      $(".code-cd-img-close").text('>');
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
    updateText("cd", "#cd-" + i + "-img-src", "#code-cd-" + i + "-img-src", "https://via.placeholder.com/300");
    updateAltText("cd", "#cd-" + i + "-img-alt", "#code-cd-" + i + "-img-alt");
    updateText("cd", "#cd-" + i + "-title", "#code-cd-" + i + "-title-text", "Card #" + i + " title");
    updateText("cd", "#cd-" + i + "-text", "#code-cd-" + i + "-text", "Card #" + i + " text");
  }
}

function showCardImgs(cardCardLimit) {
  for (let i = 1; i <= cardCardLimit; i++) {
    $("#code-cd-" + i + "-img").html('\n    <span class="code-cd-img-open"></span><span class="code-cd-img-src"></span><span id="code-cd-' + i + '-img-src"></span><span class="code-cd-img-alt"></span><span id="code-cd-' + i + '-img-alt"></span><span class="code-cd-img-close"></span>');
    $(".code-cd-img-open").text('<img');
    $(".code-cd-img-src").text(' src="');
    $("#code-cd-" + i + "-img-src").text($("#cd-" + i + "-img-src").val() !== ""
    ? $("#cd-" + i + "-img-src").val() : "https:\/\/via.placeholder.com\/300");
    $(".code-cd-img-alt").text('"');
    $("#code-cd-" + i + "-img-alt").text($("#cd-" + i + "-img-alt").val() !== ""
      ? ' alt="' + $("#cd-" + i + "-img-alt").val() + '"'
      : "");
    $(".code-cd-img-close").text('>');
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
    <span class="code-open-tag">&lt;img&#32;src&#61;&#34;<span id="code-crsl-slide-${i}-img-src">https:&#47;&#47;via.placeholder.com&#47;800x400</span>&#34;<span id="code-crsl-slide-${i}-img-alt"></span>&gt;</span></span>
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
  $("#crsl-slide-" + i + "-img-src").val() !== "" ? $("#code-crsl-slide-" + i + "-img-src").text($("#crsl-slide-" + i + "-img-src").val()) : $("#code-crsl-slide-" + i + "-img-src").text("https://via.placeholder.com/800x400");
  $(".code-crsl-slide-img-middle").text('"');
  $("#code-crsl-slide-" + i + "-img-alt").text( $("#crsl-slide-" + i + "-img-alt").val() !== ""
    ? ' alt="' + $("#crsl-slide-" + i + "-img-alt").val() + '"'
    : "" );
    //$("#crsl-slide-" + i + "-img-alt").val() !== "" ? $("#code-crsl-slide-" + i + "-img-alt").text($("#crsl-slide-" + i + "-img-alt").val()) : $("#code-crsl-slide-" + i + "-img-alt").text("");
  $(".code-crsl-slide-img-close").text('>');
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
  $(".code-crsl-slide-title-open").text('<h3>');
  $("#crsl-slide-" + i + "-title-text").val() !== "" ? $("#code-crsl-slide-" + i + "-title-text").text($("#crsl-slide-" + i + "-title-text").val()) : $("#code-crsl-slide-" + i + "-title-text").text("Carousel slide #" + i + " title");
  $(".code-crsl-slide-title-close").text('</h3>');
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
    updateText("crsl", "#crsl-slide-" + i + "-img-src", "#code-crsl-slide-" + i + "-img-src", "https://via.placeholder.com/800x400");
    updateAltText("crsl", "#crsl-slide-" + i + "-img-alt", "#code-crsl-slide-" + i + "-img-alt");
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
      <span class="code-open-tag">&lt;button&#32;class&#61;&#34;btn&#32;btn&#45;link&#34;&#32;aria&#45;expanded&#61;&#34;false&#34;&gt;</span>
        <span class="code-open-tag">&lt;h5&#32;class&#61;&#34;h4&#34;&gt;</span><span id="code-col-collapse-${i}-heading">Collapse card #${i} heading</span><span class="code-close-tag">&lt;&#47;h5&gt;</span>
      <span class="code-close-tag">&lt;&#47;button&gt;</span>
    <span class="code-close-tag">&lt;&#47;div&gt;</span>
    <span class="code-open-tag">&lt;div&#32;class&#61;&#34;collapse&#45;body&#34;&gt;</span>
    <span class="code-open-tag">&lt;p&gt;</span>
      <span id="code-col-collapse-${i}-body">Collapse card #${i} body</span>
      <span class="code-close-tag">&lt;&#47;p&gt;</span>
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
 * download                       *
 **********************************/

updateText("dl", "#dl-link", "#code-dl-link",
"http://keats.kcl.ac.uk/pluginfile.php/12345/course/section/file.pdf");
updateText("dl", "#dl-type", "#code-dl-type", "PDF");
updateText("dl", "#dl-size", "#code-dl-size", "86KB");


/**********************************
 * geshi                          *
 **********************************/

// sets geshi code language
$("#geshi-lang").change(function() {
  $("#code-geshi-lang").text($(this).val());
});

// generate geshi code body
$("#geshi-body").keyup(function() {
  codeBody = $("#geshi-body").val();
  updateCodeBody();
  preview("geshi");
}).keyup();

function updateCodeBody() {
  (!codeBody == "")
  // replace < and > with character entities
  ? ( codeBody = codeBody.replace(/</gi, "&lt;"),
    codeBody = codeBody.replace(/>/gi, "&gt;"),
    $("#code-geshi-body").text(codeBody))
  : $("#code-geshi-body").text("&lt;h1&gt;Hello world&lt;/h1&gt;\n");
}

// toggle geshi code line nos
$(document).on("click", "#geshi-check-line-nos", function(event) {
  $(this).toggleClass("unchecked").toggleClass("checked");
  $("#code-geshi-line-nos").text( $(this).hasClass("checked") ? ' linenumbers="yes"' : "");
  $("#geshi-toggle-line-nos").text( $(this).hasClass("checked") ? "Remove" : "Add");
});

/**********************************
 * infobox                        *
 **********************************/

/*
 strips a string (a name id), from everything but the first word before the choosen character
  and capitalize it if 3rd parameter false(default). If true, it reverses its functionality.
*/
 function cleanString(string, fromChar, reverse = false) { 
  let str = string.search(fromChar);
  if(reverse){
    str ++;
    let clean = string.substr(str,string.length-1);
    if (clean == "instructional") {
      return "Note";
    } 
    return clean[0].toUpperCase() + clean.slice(1);    
    
  } else if (!reverse){
      let clean = string.substr(0,str);
      if(clean == "reading") {
        return "Read";
      }
      return clean[0].toUpperCase() + clean.slice(1);
  }
}

// change infobox type
$("#ib-type").change(function() {
  $("#code-ib-type").text($(this).val());
  $("#code-ib-alert-class, #code-ib-alert-aria-label, #code-ib-caption").empty();
  $("#code-ib-body").show(),
  $("#ib-body-form").show(),
  $("#code-ib-title-text").text("Info box title");
  $(this).val() == "alert-instructional" || $(this).val() == "alert-caution"
    ? (
      $("#code-ib-alert-class").text("alert "),
      $("#code-ib-alert-aria-label").text(' aria-label="alert"'),
      $(this).val() == "alert-instructional"
        ? (
          $("#code-ib-title-open, #code-ib-title-text, #code-ib-title-close").empty(),
          $("#ib-title-form").hide(),
          $("#code-ib-body-open").html("&lt;p&gt;&lt;span role&#61;&#34;text&#34;&gt;&lt;span class&#61;&#34;sr-only&#34;&gt;" + cleanString($(this).val(), "-",true) + ": &lt;/span&gt;"),
          $("#code-ib-body-text").text((!$("#ib-df-title").val() == "") ? $("#ib-df-title").val() : "Info box body text" ),
          $("#code-ib-body-close").text("</span></p>")
        )
        : (
          $("#ib-title-form").show(),
          $("#code-ib-body-open").text("<p>"),          
          $("#code-ib-body-close").text("</p>"),
          $("#code-ib-title-open").html("\n    &lt;h5&gt;&lt;span role&#61;&#34;text&#34;&gt;&lt;span class&#61;&#34;sr-only&#34;&gt;" + cleanString($(this).val(), "-",true) + ": &lt;/span&gt;"),
          $("#code-ib-title-close").text("</span></h5>")
        )
      )
    : (
      $("#code-ib-alert-class, #code-ib-alert-aria-label").empty(),
      $(this).val() == "key-concept-box"
        ? (
          $("#ib-title-form").hide(),
          $("#code-ib-title-open, #code-ib-title-text, #code-ib-title-close").empty(),
          $("#code-ib-body-open").html("&lt;p&gt;&lt;span role&#61;&#34;text&#34;&gt;&lt;span class&#61;&#34;sr-only&#34;&gt;Important: &lt;/span&gt;"),
          $("#code-ib-body-close").text("</span></p>")
        )
        : (
          $("#ib-title-form").show(),
          $("#code-ib-title-open").html("\n    &lt;h5&gt;&lt;span role&#61;&#34;text&#34;&gt;&lt;span class&#61;&#34;sr-only&#34;&gt;" + cleanString($(this).val(), "-") + ": &lt;/span&gt;"),
          $("#code-ib-title-close").text("</span></h5>"),
          $(this).val() == "editing-help-box"
            ? (
              $("#code-ib-title-text").text((!$("#ib-df-title").val() == "") ? $("#ib-df-title").val() : "Info box title"),
              $("#code-ib-body-open").html("&lt;p&gt;"),              
              $("#code-ib-body-close").text("</p>"),
              $("#code-ib-caption").text('\n    <p class="caption">Note: This help message is not displayed to students.</p>'))
            : $(this).val() == "definition-box"
              ? $("#code-ib-title-text").text((!$("#ib-df-title").val() == "") ? $("#ib-df-title").val() : "Info box title")
              : $(this).val() == "learning-outcome-box"
                ? (
                  // $("#ib-body-form").show(),
                  // $("#code-ib-body").show(),
                  $("#code-ib-title-open").html("\n    &lt;h5&gt;"),                  
                  $("#code-ib-title-close").text("</h5>")        
                )
                : $(this).val() ==  "reading-box"
                  ? (                    
                    $("#code-ib-body").show(),
                    $("#code-ib-body-open").html("&lt;p&gt;"), 
                    $("#code-ib-body-close").html("&lt;/p&gt;")
                  )
                  : console.log("foo")
            ));
  preview("ib");
});

// update infobox text
updateText("ib", "#ib-text", "#code-ib-body-text", "Info box body text");
updateText("ib", "#ib-df-title", "#code-ib-title-text", "Info box title");



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
updateText("quo", "#quo-att", "#code-quo-att", "Attribution (2019)");

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
        if ($("#tab-check-column-header").hasClass("checked")) {
          tabColHeader = createTableColHeader(c+1);
          $("#code-tab-headers").append(tabColHeader);
        }
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
        if ($("#tab-check-row-header").hasClass("checked")) {
          tabRowHeader = createTableRowHeader(r + 1);
          $("#code-tab-row-" + (r + 1) + "-header").append(tabRowHeader);
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

// change vertical text alignment
$("#vertical-align").change(function() {
  $("#code-tab-vertical-align").text( $(this).val() == "middle" ? " vertical-align-middle" : "" );
  preview("tab");
});

// toggle table column headers
toggleCheckboxText("#tab-check-column-header", "#tab-toggle-column-header");
$(document).on("click", "#tab-check-column-header", function(event) {
  $(this).toggleClass("unchecked").toggleClass("checked");
  maxTabCols = $("#tab-col-no").val();
  $(this).hasClass("checked")
    ? ($("#code-tab-thead-open-tag").text('\n    <thead>\n      <tr>'),
       $("#code-tab-thead-close-tag").text('\n      </tr>\n    </thead>'))
    : $("#code-tab-thead-open-tag, #code-tab-thead-close-tag, #code-tab-row-0-header, #code-tab-headers").empty();
  if ($(this).hasClass("checked")) {
    for (let c = 1; c <= maxTabCols; c++) {
      tabColHeader = createTableColHeader(c);
      $("#code-tab-headers").append(tabColHeader);
    }
    if ($("#tab-check-row-header").hasClass("checked")) {
      tabRowHeader = createTableRowHeader(0);
      $("#code-tab-row-0-header").append(tabRowHeader);
    }
  }
  preview("tab");
});

// toggle table row headers
toggleCheckboxText("#tab-check-row-header", "#tab-toggle-row-header");
$(document).on("click", "#tab-check-row-header", function(event) {
  $(this).toggleClass("unchecked").toggleClass("checked");
  maxTabRows = $("#tab-row-no").val();
  if ($(this).hasClass("checked") && $("#tab-check-column-header").hasClass("checked")) {
    for (let r = 0; r <= maxTabRows; r++) {
      tabRowHeader = createTableRowHeader(r);
      $("#code-tab-row-" + r + "-header").append(tabRowHeader);
    }
  } else if ($(this).hasClass("checked") && $("#tab-check-column-header").hasClass("unchecked")) {
    for (let r = 1; r <= maxTabRows; r++) {
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
    <span class="code-open-tag">&lt;div&#32;class&#61;&#34;col&#45;auto&#32;text&#45;center&#32;flex&#45;column&#32;d&#45;sm&#45;flex&#34;&gt;</span>
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
              <span class="code-open-tag">&lt;img&#32;src&#61;&#34;<span id="code-tl-card-${i}-img-src">https:\/\/via.placeholder.com\/200x300</span>&#34;<span id="code-tl-card-${i}-img-alt"></span>&gt;</span>
            <span class="code-close-tag">&lt;&#47;div&gt;</span></span>
            <span class="code-open-tag">&lt;div&#32;class&#61;&#34;col&#45;md&#34;&gt;</span>
              <span class="code-open-tag">&lt;h5&#32;class&#61;&#34;card&#45;title&#34;&gt;</span><span id="code-tl-card-${i}-title">${ !title == "" ? title : "Card #" + i + " title"}</span><span class="code-close-tag">&lt;&#47;h5&gt;</span>
              <span class="code-open-tag">&lt;p&#32;class&#61;&#34;card&#45;text&#34;&gt;</span><span id="code-tl-card-${i}-text">${ !text == "" ? text : "Chocolate sesame snaps bonbon sesame snaps macaroon powder lemon drops dessert. Jelly beans halvah jelly-o icing marshmallow tart soufflé."}</span><span class="code-close-tag">&lt;&#47;p&gt;</span>
            <span class="code-close-tag">&lt;&#47;div&gt;</span>
          <span class="code-close-tag">&lt;&#47;div&gt;</span>
          <span id="code-tl-card-${i}-img-ref"><span class="code-open-tag">&lt;p&#32;class&#61;&#34;img&#45;reference&#34;&gt;</span><span id="code-tl-card-${i}-img-reference">Image: via.placeholder.com</span><span class="code-close-tag">&lt;&#47;p&gt;</span></span>
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
            <textarea class="form-control" id="tl-card-${i}-img-ref" placeholder="via.placeholder.com" rows="2" required></textarea>
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
    toggleCheckboxText("#tl-" + i + "-check-img", "#tl-" + i + "-toggle-img");
    $(document).on("click", "#tl-" + i + "-check-img", function(event) {
      $("#tl-" + i + "-check-img").toggleClass("unchecked").toggleClass("checked");
      $("#tl-" + i + "-check-img").hasClass("checked")
        ? ( $("#code-tl-card-" + i + "-img").html('<span class="code-tl-card-img-open"></span><span id="code-tl-card-' + i + '-img-src"></span><span class="code-tl-card-img-center"></span><span id="code-tl-card-' + i + '-img-alt"></span><span class="code-tl-card-img-close"></span>'),
            $("#code-tl-card-" + i + "-img-ref").html('<span class="code-tl-card-img-ref-open"></span><span id="code-tl-card-' + i + '-img-ref-text"></span><span class="code-tl-card-img-ref-close"></span>') )
        : ( $("#code-tl-card-" + i + "-img").text(""),
            $("#code-tl-card-" + i + "-img-ref").text("") );
      $(".code-tl-card-img-open").text('<div class="col-md-3 card-image"><img src="');
      $("#code-tl-card-" + i + "-img-src").text( $("#tl-card-" + i + "-img-src").val() !== "" ? $("#tl-card-" + i + "-img-src").val() : "https://via.placeholder.com/200x300");
      $(".code-tl-card-img-center").text('"');
      $("#code-tl-card-" + i + "-img-alt").text( $("#tl-card-" + i + "-img-alt").val() !== ""
        ? ' alt="' + $("#tl-card-" + i + "-img-alt").val() + '"'
        : "");
      $(".code-tl-card-img-close").text('"></div>');
      $(".code-tl-card-img-ref-open").text('<p class="text-right img-reference">');
      $("#code-tl-card-" + i + "-img-ref-text").text( $("#tl-card-" + i + "-img-ref").val() !== "" ? $("#tl-card-" + i + "-img-ref").val() : "Image: via.placeholder.com");
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

function updateTimelineText(timelineCardLimit) {
  for (let i = 1; i <= timelineCardLimit; i++) {
    updateText("tl", "#tl-" + i + "-title", "#code-tl-card-" + i + "-title", "Card #" + i + " title");
    updateText("tl", "#tl-" + i + "-date", "#code-tl-card-" + i + "-date-text", dateString + ( i < 6 ? " 0" + (i+7) + ":00AM" : " " + (i+7) + ":00PM" ));
    updateText("tl", "#tl-" + i + "-text", "#code-tl-card-" + i + "-text", "Card #" + i + " text");
    updateText("tl", "#tl-card-" + i + "-img-src", "#code-tl-card-" + i + "-img-src", "https://via.placeholder.com/200x300");
    updateAltText("tl", "#tl-card-" + i + "-img-alt", "#code-tl-card-" + i + "-img-alt");
    updateText("tl", "#tl-card-" + i + "-img-ref", "#code-tl-card-" + i + "-img-ref-text", "Foo");
  }
}

/**********************************
 * transcript                     *
 **********************************/

$("#ts-type").change(function() {
  // if secondary style is selected, force button standard button size
  $(this).val() == "nsp"
    ? (
        $("#ts-id-container").html('<div class="input-group-prepend">\n<label class="input-group-text" for="ts-id">Unique ID*</label>\n</div><input type="text" class="form-control" id="ts-id" aria-label="ts-id" placeholder="modname-unitno-transcript-no" required>\n<div class="invalid-feedback" id="ts-id-invalid-feedback">Please enter the id link.</div>'),
        $(".code-ts-btn-tag").text("button"),
        $("#code-ts-view-btn-class").text(" btn-secondary collapsed"),
        $("#code-ts-view-btn-role, #code-ts-download-btn-class").empty(),
        $("#code-ts-id-1").text(' data-toggle="collapse" data-target="#'),
        $(".code-ts-id").text($("#ts-id").val() === "" ? "modname-unitno-transcript-no" : $("#ts-id").val()),
        $("#code-ts-id-2").text('" aria-expanded="false" aria-controls="'),
        $("#code-ts-card-collapse").text(" collapse"),
        $("#code-ts-id-3").text('"'),
        $("#code-ts-id-4").text(' id="'),
        $("#code-ts-id-5").text('"')
      )
    : (
        $("#ts-id-container").empty(),
        $(".code-ts-btn-tag").text("a"),
        $("#code-ts-view-btn-class").text(" btn-primary view-close-transcript"),
        //$("#code-ts-view-btn-role").text(' role="button"'),
        $("#code-ts-download-btn-class").text(" download-transcript"),
        $(".code-ts-id, #code-ts-id-1, #code-ts-id-2, #code-ts-id-3, #code-ts-id-4, #code-ts-id-5, #code-ts-card-collapse").empty()
     );
  preview("ts");
});

updateText("ts", "#ts-id", ".code-ts-id", "modname-unitno-transcript-no");
//updateText("ts", "#ts-body", "#code-ts-body", "foo");
//updateText("ts", "#ts-link", "#code-ts-link", "#");
updateText("ts", "#ts-body", "#code-ts-body-text", "Transcript body...");

/*
// toggle view close transcript button
$(document).on("click", ".view-close-transcript", function(event) {
  $(this).text($(this).text() == 'View transcript' ? 'Close transcript' : 'View transcript');
});
*/
/**********************************
 * video                          *
 **********************************/

// change responsive ratio on size select
$("#vd-player-size").change(function() {
  $("#code-vd-player-size").text($(this).val());
  if (!$("#vd-embed").val() == "") preview("vd");
});

// change class on media type select
$("#vd-media-type").change(function() {
  $(this).val() == "kaltura" ? $("#vd-player-size-form").show() : $("#vd-player-size-form").hide();
  $("#code-vd-player-size").text( $(this).val() == "kaltura" ? $("#vd-player-size").val() : $("#vd-media-type").val() );
  embedText = $("#vd-embed").val();
  embedTextAddVariables();
  if (!embedText == "") preview("vd");
});

// generate embed code
$("#vd-embed").keyup(function() {
  embedText = $("#vd-embed").val();
  $("#vd-media-type").val() !== "youtube"
  ? embedTextAddVariables()
  : $("#code-vd-embed").text(embedText);
  preview("vd");
}).keyup();

function embedTextAddVariables() {
  $("#vd-media-type").val() == "kaltura-playlist"
  ? variables = '&amp;flashvars[playlistAPI.containerPosition]=bottom&amp;flashvars[infoScreen.plugin]=false&amp;flashvars[titleLabel.plugin]=false&amp;flashvars[related.plugin]=false&amp;flashvars[closedCaptions.displayCaptions]=false&amp;flashvars[closedCaptions.layout]=below&amp;flashvars[transcript.plugin]=false&amp;flashvars[IframeCustomPluginCss1]=https:\/\/git.iddkingsonline.com\/designsystem\/css\/kaltura.css'
  : variables = '&amp;flashvars[infoScreen.plugin]=false&amp;flashvars[titleLabel.plugin]=false&amp;flashvars[related.plugin]=false&amp;flashvars[closedCaptions.displayCaptions]=false&amp;flashvars[closedCaptions.layout]=below&amp;flashvars[transcript.plugin]=false&amp;flashvars[IframeCustomPluginCss1]=https:\/\/git.iddkingsonline.com\/designsystem\/css\/kaltura.css';
  // add variables
  (!embedText == "")
  ? ( embedText = embedText.replace('\" width', variables + '\" width'),
    $("#code-vd-embed").text(embedText))
  : $("#code-vd-embed").text("<iframe></iframe>");
}

/**********************************
 * view hide                   *
 **********************************/

// sets type
$("#va-type").change(function() {
  $(".code-va-type").text($(this).val());
  // removes hyphen from model answer button text
  $("#code-va-type-button-text").text( $(this).val() == "generic" ? "" : ' ' + $(this).val().replace('-',' ') );
  preview("va");
});

// toggle view answer author code
toggleCheckboxText("#va-check-author", "#va-toggle-author");
$(document).on("click", "#va-check-author", function(event) {
  $("#va-check-author").toggleClass("unchecked").toggleClass("checked");
  $(".va-author").toggle();
  $("#code-va-author").html( $(this).hasClass("checked") ? '<span class="code-va-author-open"></span><span id="code-va-author-img-src"></span><span class="code-va-author-2"></span><span id="code-va-author-img-alt"></span><span class="code-va-author-3"></span><span id="code-va-author-name"></span><span class="code-va-author-close"></span>' : "");
  $(".code-va-author-open").text('<div class="card-author">\n        <img src="');
  $("#code-va-author-img-src").text( $("#va-author-img-src").val() !== "" ? $("#va-author-img-src").val() : "https://via.placeholder.com/150");
  $(".code-va-author-2").text('"');
  $("#code-va-author-img-alt").text( $("#va-author-img-alt").val() !== ""
    ? ' alt="' + $("#va-author-img-alt").val() + '"'
    : "");
  $(".code-va-author-3").text('>\n        <h5 class="card-title">');
  $("#code-va-author-name").text( $("#va-author-name").val() !== "" ? $("#va-author-name").val() : "Author name");
  $(".code-va-author-close").text('</h5>\n      </div>\n      ');
  preview("va");
});

// updates text on input change
updateText("va", "#va-author-img-src", "#code-va-author-img-src", "https://keats.kcl.ac.uk/pluginfile.php/1234567/mod_folder_content/1/23/name.jpg");
updateAltText("va", "#va-author-img-alt", "#code-va-author-img-alt");
updateText("va", "#va-author-name", "#code-va-author-name", "Author name");
updateText("va", "#va-q", "#code-va-q", "Lemon drops gingerbread topping?");
updateText("va", "#va-a", "#code-va-a", "Pudding pie bonbon muffin carrot cake fruitcake macaroon...");

/**********************************
 * test                           *
 **********************************/

$("#test-type").change(function() {
  // if secondary style is selected, force button standard button size
  $(this).val() == "nsp"
    ? (
        $("#test-id-container").html('<div class="input-group-prepend">\n<label class="input-group-text" for="test-id">Unique ID*</label>\n</div><input type="text" class="form-control" id="test-id" aria-label="test-id" placeholder="modname-unitno-transcript-no" required>\n<div class="invalid-feedback" id="test-id-invalid-feedback">Please enter the id link.</div>'),
        $(".code-test-btn-tag").text("button"),
        $("#code-test-view-btn-class").text(" btn-secondary collapsed"),
        $("#code-test-view-btn-role, #code-test-download-btn-class").empty(),
        $("#code-test-id-1").text(' data-toggle="collapse" data-target="#'),
        $(".code-test-id").text($("#test-id").val() === "" ? "modname-unitno-transcript-no" : $("#test-id").val()),
        $("#code-test-id-2").text('" aria-expanded="false" aria-controls="'),
        $("#code-test-card-collapse").text(" collapse"),
        $("#code-test-id-3").text('"'),
        $("#code-test-id-4").text(' id="'),
        $("#code-test-id-5").text('"')
      )
    : (
        $("#test-id-container").empty(),
        $(".code-test-btn-tag").text("a"),
        $("#code-test-view-btn-class").text(" btn-primary view-close-transcript"),
        $("#code-test-view-btn-role").text(' role="button"'),
        $("#code-test-download-btn-class").text(" download-transcript"),
        $(".code-test-id, #code-test-id-1, #code-test-id-2, #code-test-id-3, #code-test-id-4, #code-test-id-5, #code-test-card-collapse").empty()
     );
  preview("test");
  console.log($("#test-body").val());
});

updateText("test", "#test-id", ".code-test-id", "modname-unitno-transcript-no");
updateText("test", "#test-link", "#code-test-link", "#");
updateText("test", "#test-body", "#code-test-body", "Transcript body...");

// toggle view close transcript button
$(document).on("click", ".view-close-transcript", function(event) {
  $(this).text($(this).text() == 'View transcript' ? 'Close transcript' : 'View transcript');
});


const diff = (a,b) => {
  return Math.abs(a - b);
}


/**********************************
 * new carousel                   *
 **********************************/

// constants for the addDots function:

const dots = document.querySelector(".indic-dots");
const dotsCode = document.querySelector("#dots-code-crs");

// adds dots to the slide for the carousel
//   -slideNum : number of slides to generate. Default 3.
//   -encoded : It stablishes the output ? encoded version (for the code display) : regular html output (preview display)

const addDots = (slideNum = 0, encoded) => {
  let dot = "";
  for (let i = 0; i < slideNum; i++) {
<<<<<<< HEAD
    dot = encoded ? `<slide class="crs-dots-remove">&#60;li&#62;&#60;/li&#62;</span>` : `<li></li>\n`;
=======
    dot = encoded ? `<span class="crs-dots-remove">\n\t&#60;li&#62;&#60;/li&#62;</span>${i == slideNum -1 ? `` : `\n`}` : `<li></li>\n`;
>>>>>>> 5e3d0a8 (input field checkbox checked fixed)
  }
  return (encoded ? dotsCode : dots).insertAdjacentHTML("beforeend", dot);
}

// addSlides to the carousel:
//  -toElement: element to append the output to // -slideNum: number of slides to add // -current: current number of slides and update the id
//   -encoded: output ? encoded version : regular html

const addSlides = (toElement, slideNum, current, encoded) => {
    checkBoxesChecked(["#crs-check-caption"], ["caption"]);
     
    let slideType = document.querySelector("#crs-type");
    let imgSrc = slideType.value == 1 
      ? "https://via.placeholder.com/800x400?text=Landscape:+2:1"
      : "https://via.placeholder.com/300x300?text=1:1";
    
      slideType.value == "1" ? 
      (
        removeClass(".new-carousel",["portrait-carousel"]),
        addClass(".new-carousel",["landscape-carousel"],"new-carousel"),
        writeText([".crs-type"],"landscape")        
      ) :
        (
          removeClass(".new-carousel",["landscape-carousel"]),
          addClass(".new-carousel",["portrait-carousel"],"new-carousel"),
          writeText([".crs-type"],"portrait")        
        )
    
    let total;
    let slide = "";
    for (let i = 0; i < slideNum; i++) { // for encoded generated output: code area
      total = i + current;
      slide += encoded ? `\n     <span class="crs-code-remove">&#60;li&#62;\n       &#60;figure&#62; 
          <span class="crs-code-img">&#60;img&#32;src&#61;&#34;<span id="crs-code-src-${total}">${imgSrc}</span>&#34;&#32;alt&#61;&#34;<span id="crs-code-alt-${i}">Alternative&#32;text</span>&#34;&#32;class&#61;&#34;nc&#45;image&#34;&#62;</span>
            &#60;figcaption&#32;class&#61;&#34;nc&#45;description&#34;&#62;<span class="crs-code-title" id="crs-code-title-tag-${total}">
              &#60;h5&#62;
                <span id="crs-code-title-${total}">Caption&#32;title&#32;${total + 1}</span>
              &#60;/h5&#62;</span>
              &#60;p&#62;
                <span id="crs-code-body-${total}">Carousel&#32;slide&#32;${total + 1}&#32;body&#32;text</span>
              &#60;/p&#62;
            &#60;/figcaption&#62;
       &#60;/figure&#62;
    &#60;/li&#62;</span>`  
      : // not encoded generated output: preview area
      `<li><figure>
      <img src=${imgSrc} alt="Alternative text" class="nc-image" id="crs-img-${total}">
      \t<figcaption class="nc-description">
      <h5 id="crs-card-title-${total}" style="display: ${caption ?  "" : "none" }">Caption title ${total + 1}</h5>
      \n\t\t<p id="crs-card-body-${total}">Carousel slide ${total + 1} body text</p>\n\t</figcaption>\n\t</figure>\n\t</li>\n`;      
      
      // Adding the dots
      addDots(current + i, encoded);
    }  
  return toElement.insertAdjacentHTML("beforeend",slide);
}

 // remove slides ,dots, cards from every display area

const removeSlides = (elements = [], cardNum) => {
  for (let i = 0; i < cardNum; i++){
    elements.forEach((e) => { e.lastElementChild.remove() });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
// let current = document.querySelector(".active");
// let dotNum = document.querySelector(".indic-dots")
// document.querySelector(".nc-previous").onclick = function() {
//   current.previousElementSibling.classList.add("active");
//   current.classList.remove("active");
=======
let current = document.querySelector(".active");
=======
// let current = document.querySelector(".active");
>>>>>>> 048bbc2 (Corrected issues with image src on portrait)


// document.querySelector(".indic-dots").onclick = function(e) {
  
<<<<<<< HEAD
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");
  e.target == this.firstElementChild ? console.log(1) : console.log([e.target.parentElement.childElementCount].indexOf(e.target)) ;
  console.log(e.target.previousElementSibling,e.target.nextElementSibling)
>>>>>>> c9bfb57 (On input fields checked boxes back corrected and some other issues)
=======
//   document.querySelector(".active").classList.remove("active");
//   e.target.classList.add("active");
>>>>>>> 048bbc2 (Corrected issues with image src on portrait)
  
//   console.log([e.target.parentElement].indexOf(e.target),e.target.previousElementSibling,e.target.nextElementSibling)
  
// }
// document.querySelector(".nc-previous").onclick = function() {
//   current.previousElementSibling.classList.add("active");
//   current.classList.remove("active");
  
// }

<<<<<<< HEAD
// document.querySelector(".nc-next").onclick = function() {
//   current.classList.remove("active");
//   current.nextElementSibling.classList.add("active");  
//   console.log(current.nextElementSibling);
// }
>>>>>>> 5e3d0a8 (input field checkbox checked fixed)
=======


<<<<<<< HEAD
document.querySelector(".nc-next").onclick = function() {
  current.classList.remove("active");
  current.nextElementSibling.classList.add("active");  
  console.log(current.nextElementSibling);
}
>>>>>>> c9bfb57 (On input fields checked boxes back corrected and some other issues)
=======
// document.querySelector(".nc-next").onclick = function() {
//   current.classList.remove("active");
//   current.nextElementSibling.classList.add("active");  
//   console.log(current.nextElementSibling);
// }
>>>>>>> 048bbc2 (Corrected issues with image src on portrait)

// toggles carousel type from landscape to portrait
const type = document.getElementById("crs-type");
let crsType = document.querySelector(".new-carousel").classList;
const crsCodeType = document.querySelector(".crs-type");


type.onchange = () => {
  type.value == "1" ? 
  (
    removeClass(".new-carousel",["portrait-carousel"]),
    addClass(".new-carousel",["landscape-carousel"],"new-carousel"),
    writeText([".crs-type"],"landscape")
    //document.querySelectorAll(".nc-image").forEach((i) => { i.src = "https://via.placeholder.com/800x400?text=Landscape:+2:1"; })
  ) :
    (
      removeClass(".new-carousel",["landscape-carousel"]),
      addClass(".new-carousel",["portrait-carousel"],"new-carousel"),
      writeText([".crs-type"],"portrait")
      //document.querySelectorAll(".nc-image").forEach((i) => { i.src = "https://via.placeholder.com/500x500?text=1:1"; })
    )
}


let imageChecked = true;
let captionChecked = true;
// selection dropdown 
const selection = document.querySelector("#crs-slide-no");
// slides will generate here in code area
const code = document.getElementById("slides-code-crs");  
// slides will generate here in preview area
const displayCrs = document.querySelector(".nc-gallery");

// Initializing views:

// Preview area
addSlides(displayCrs,selection.value,0,false);
// Code display area
addSlides(code,selection.value,0,true);
// Form on the Options area
addCard("#crs-collapse-container",selection.value,0, "Slide");


// processing
const crsCaptionElements = ['.nc-description h5','.crs-caption-form','.crs-code-title'];    
processCheckBox("#crs-check-caption",crsCaptionElements);

const collapseForm = document.querySelector("#crs-collapse-container");
const captionCheckBox = document.querySelector("#crs-check-caption");
  
//Generate cards for the input forms of the collapse and change the preview the code and the form panels on select changing value
let elements = [code,displayCrs,dots,dotsCode]
selection.onchange = () => {
  let current = collapseForm.childElementCount;
  let maxValue = 8;
  let newValue = diff(current, selection.value);
  captionChecked = captionCheckBox.checked;
  //check if selection <= maximum (8) && if selection.value > current
  (newValue + current <= maxValue) && (selection.value > current) ? 
  ( 
    addCard("#crs-collapse-container", newValue, current, "Slide"),
    addSlides(code,newValue,current,true),
    addSlides(displayCrs,newValue,current,false),
    // re-activate next button
    document.querySelector(".nc-next").disabled = false
  ) : 
  (
    removeCards(["#crs-collapse-container"],newValue),
    removeSlides(elements, newValue)
  )
}
<<<<<<< HEAD

// collapse form control
const crsCollapse  = document.querySelector("#crs-collapse-container");
crsCollapse.onclick = function(e) {
  
  let crsElements = [];
  let eId = e.target.id;
  let _id = eId.slice(-1);
  console.log(eId);
=======
let cC = 0;
// collapse form control
const crsCollapse  = document.querySelector("#crs-collapse-container");
crsCollapse.onclick = function(e) {
  checkBoxesChecked(["#crs-check-caption"], ["captionC"])
  let totalForms = this.childElementCount;
  let crsElements = [];
  let eId = e.target.id;
  let _id = eId.slice(-1);
>>>>>>> 5e3d0a8 (input field checkbox checked fixed)
  if (!eId) {
    return;
  } else {
    
    // individual caption checkbox
    eId === `crs-check-caption-${_id}` ?
      (
        crsElements = [`#crs-card-title-${_id}`,`#crs-caption-form-${_id}`,`#crs-code-title-tag-${_id}`],
        processCheckBox(`#crs-check-caption-${_id}`,crsElements),
        // get if caption is checked
<<<<<<< HEAD
        document.querySelector(`#crs-check-caption-${_id}`).checked ? c-- : c++  
      ) : "";
 
  }     
  console.log(c);
    // total individual checkboxcheckedcount and check the all labels, images and caption titles checkboxes if all the individuals are checked
    let totalForms = document.querySelector("#crs-collapse-container").childElementCount;
    c == 0 ? tickCheckBoxes(["#crs-check-caption"], [true], ["All Caption Titles"]) : c == totalForms ? tickCheckBoxes(["#crs-check-caption"], [false], ["All Caption Titles"]) : "" 
=======
        captionC ? cC = totalForms : "",
        document.querySelector(`#crs-check-caption-${_id}`).checked 
        ? ( cC++, cC == totalForms ? tickCheckBoxes(["#crs-check-caption"], [true], ["All Caption Titles"]) : "") 
        : (cC--, cC < totalForms ? tickCheckBoxes(["#crs-check-caption"], [false], ["All Caption Titles"]) : "")
      ) : "";
 
  }     
    
>>>>>>> 5e3d0a8 (input field checkbox checked fixed)
}


// collapse form fields control
processCollapseForm("#crs-collapse-container","https://via.placeholder.com/800x400?text=Landscape+2:1", "Alternative text")


/**********************************
 * process                        *
 **********************************/

const addProcessCard = (toElement, cardNum, current, encoded) => {
  // checks whether the checkBoxesArray is checked or not and returns/assign a name(second array[variables]) for each of the checkbox elements.
  checkBoxesChecked(["#prcss-check-label","#prcss-check-img","#prcss-check-caption"], ["labelP","imageP","captionP"]);
  let el = document.querySelector(toElement);
  cardNum = Number(cardNum);
  let card = "";
  for (let i = 0; i < cardNum; i++) { // for encoded generated output: code area
    let total = i + current;
<<<<<<< HEAD
    card += encoded ? `<span class="prcss-listitem">&lt;div class=&quot;step&quot; role=&quot;listitem&quot;&gt; 
=======
    card += encoded ? `   <span class="prcss-listitem">&lt;div class=&quot;step&quot; role=&quot;listitem&quot;&gt; 
>>>>>>> 5e3d0a8 (input field checkbox checked fixed)
      &lt;div class=&quot;card process-card<span id="prcss-code-highlight-${total}" style="display: none"> highlight</span>&quot;&gt;<span class="prcss-code-img" id="prcss-code-img-${total}" style="display:${imageP ? "" : "none"};"> 
        &#60;img&#32;src&#61;&#34;<span id="prcss-code-src-${total}">http:&#47;&#47;via.placeholder.com&#47;300x300</span>&#34;&#32;alt&#61;&#34;<span id="prcss-code-alt-${total}">Alternative&#32;text</span>&#34;&#62;</span>
        &lt;div class=&quot;card-body&quot;&gt;<span class="prcss-code-title-tag" id="prcss-code-title-tag-${total}" style="display:${captionP ? "" : "none"};"> 
          &#60;h4 class=&quot;card-text&quot;&#62;
            <span id="prcss-code-title-${total}">Caption&#32;title&#32;${total + 1}</span>
          &#60;/h4&#62;</span>
          &lt;p class=&quot;card-text&quot;&gt;
            <span id="prcss-code-body-${total}">Process&#32;card&#32;${total + 1}&#32;body&#32;text</span>
          &lt;/p&gt; 
        &lt;/div&gt; 
      &lt;/div&gt;<span class="code-connector-container" style="">      &lt;div class=&quot;connector-container no-gutters&quot;&gt; 
          &lt;div class=&quot;process-label<span class="prcss-label-sr" id="prcss-label-sr-${total}" style="display:${labelP ? "none" : ""};"> sr-only</span>&quot;&gt;<span class="top-label-text" id="top-label-text-${total}">Leads to</span>&lt;/div&gt;
          &lt;div class=&quot;icon<span class="prcss-icon-type" id="prcss-icon-type-${total}"> arrow-down</span>&quot; aria-hidden=&quot;true&quot;&gt;&lt;/div&gt;<span class="bottom-label" id="bottom-label-${total}">
          &lt;div class=&quot;process-label<span class="prcss-label-sr"> sr-only</span>&quot;&gt;<span class="bottom-label-text" id="bottom-label-text-${total}">and is caused by</span>&lt;/div&gt;</span>
<<<<<<< HEAD
      &lt;/div&gt;\n</span>&lt;/div&gt;
    </span>`  
=======
      &lt;/div&gt;\n   &lt;/div&gt;</span></span>`  
>>>>>>> 5e3d0a8 (input field checkbox checked fixed)
    : // not encoded generated output: preview area
    `<div class="step" role="listitem">
      <div class="card process-card" id="prcss-card-${total}">
        <img id="prcss-img-${total}" src="http://via.placeholder.com/300x300?text=Arrow+down:+2:1" alt="A placeholder image" style="display: ${imageP ? "block" : "none"};">
        <div class="card-body">
          <h4 class="card-text" id="prcss-card-title-${total}" style="display:${captionP ? "block" : "none"};">Caption title ${total+ 1}</h4>
          <p class="card-text" id="prcss-card-body-${total}">Process card ${total+ 1} body text</p>
        </div>
      </div>
      <div class="connector-container no-gutters">
        <div class="process-label ${labelP ? '' : 'sr-only'} top-label" id="top-label-${total}">Leads to</div>
        <div class="icon arrow-down" id="icon-${total}" aria-hidden="true"></div>
        <div class="process-label bottom-label ${labelP ? '' : 'sr-only'}" id="bottom-label-${total}">and is caused by</div>
      </div>
    </div>`;
  }
return el.insertAdjacentHTML("beforeend",card);
}



 document.body.onload = function() {
   hideElements(".bottom-label")
 }

const prcssLabelCheck = document.querySelector("#prcss-check-label");
// All Process Arrow Labels show or hide or change onclick
prcssLabelCheck.onclick = function() {
  
  let collapseCheckboxes = document.querySelectorAll("#prcss-collapse-container input[type=checkbox]");
  let arrowType = document.querySelector("#prcss-arrows");
  
  this.checked ?
  ( // set all label checkboxes to true
    collapseCheckboxes.forEach((ch) => { 
      ch.id.includes(this.id) 
      ? ( ch.checked = true, 
          document.getElementById(ch.id.replace("check","label")).innerText = "Label") 
      : " id is not included" }),    
    replaceClass(this,'.process-label','sr-only','#prcss-label-label','All Labels'),
    // remove sr-only class from the code area
    hideElements(".prcss-label-sr"),
    // hide the bottom label unless arrow is double
    arrowType.value == "3"
      ? (showElements(".bottom-label", ""), 
        writeText([".top-label",".top-label-text"], "causes"))  
      : (hideElements(".bottom-label"), writeText([".top-label"], "Leads to")),
    // on arrow type 4 change the top label
    arrowType.value == "4"
      ? (hideElements(".bottom-label"), writeText([".top-label",".top-label-text"], "relates to"))  
      : ("")
  ) : 
  (
    // set all label checkboxes to false
    collapseCheckboxes.forEach((ch) => { 
      ch.id.includes(this.id) 
      ? (ch.checked = false, 
        document.getElementById(ch.id.replace("check","label")).innerText = "Label") 
      : " id is not included" }),

    replaceClass(this,'.process-label','sr-only','#prcss-label-label','All Labels'),
    // add sr-only class from the code area
    showElements(".prcss-label-sr", ""),
    // hide the second label for the arrows
    hideElements(".bottom-label")    
  )
}

// All Arrows and labels manipulation
processArrows(true, "prcss-arrows",".icon","");


// select element
const prcssSelect = document.querySelector("#prcss-select");

// process the changes on selection
prcssSelect.onchange = function() {
  let current = prcssCollapse.childElementCount;
  let selVal = this.value;
  let maxValue = 8;
  let newValue = diff(current, selVal);

  //check if selection <= maximum (8) && if selection.value > current
  ((newValue + current <= maxValue) && (selVal > current)) ? 
  (
    addCard("#prcss-collapse-container", newValue,current,"Process Card"),
    addProcessCard(".process-container",newValue,current,false),
    addProcessCard("#code-prcss",newValue,current,true)    
  ) : 
  (
    removeCards(["#prcss-collapse-container", ".process-container","#code-prcss"],newValue)
  )
  hideLast([".connector-container",".code-connector-container",".prcss-arrow-select",".prcss-form-checkbox-label"]);
};


// toggle ALL images and individual checkboxes show on image checkbox change
const prcssImageElements = ['.process-card img', '.prcss-img-form', '.prcss-code-img'];
processCheckBox("#prcss-check-img",prcssImageElements);
// toggle ALL captions and individual checkboxes show on caption checkbox change
const prcssCaptionElements = ['h4.card-text','.prcss-caption-form','.prcss-code-title-tag'];    
processCheckBox("#prcss-check-caption",prcssCaptionElements);

//variables counter individual checkboxes checked status c=caption, i=image, l=label
<<<<<<< HEAD
let c = 0; let i= 0; let l= 0;


=======


let iP = 0; let lP = 0; let cP = 0;
<<<<<<< HEAD
// imgP ? iP = 3 : iP = 0; 
// captionP ? cP = 3 : cP; 
// labelP ? lP = 2 : lP = 0;
// console.log(lP,iP,cP);

>>>>>>> 5e3d0a8 (input field checkbox checked fixed)
=======
>>>>>>> c9bfb57 (On input fields checked boxes back corrected and some other issues)
hideElements(".bottom-label", "");


// collapse form control
const prcssCollapse  = document.querySelector("#prcss-collapse-container");
prcssCollapse.onclick = function(e) {
<<<<<<< HEAD
  
  let prcssElements = [];
  let eId = e.target.id;
=======
  checkBoxesChecked(["#prcss-check-label", "#prcss-check-img", "#prcss-check-caption"], ["labelP", "imgP", "captionP"])
  let totalForms = this.childElementCount;
  let prcssElements = [];
  let eId = e.target.id;
  console.log(eId);
>>>>>>> 5e3d0a8 (input field checkbox checked fixed)
  let _id = eId.slice(-1);
  if (!eId) {
    return;
  } else {
    // individual arrows select 
    processArrows(false, eId,"#icon",_id),       
    
    // individual caption checkbox
    eId === `prcss-check-caption-${_id}` 
<<<<<<< HEAD
    ? (prcssElements = [`#prcss-card-title-${_id}`,`#prcss-caption-form-${_id}`,`#prcss-code-title-tag-${_id}`],
      processCheckBox(`#prcss-check-caption-${_id}`,prcssElements),
      // get if caption is checked
      document.querySelector(`#prcss-check-caption-${_id}`).checked ? c-- : c++) 
=======
    ? (
        prcssElements = [`#prcss-card-title-${_id}`,`#prcss-caption-form-${_id}`,`#prcss-code-title-tag-${_id}`],
        processCheckBox(`#prcss-check-caption-${_id}`,prcssElements),
        // get if caption is checked
        captionP ? cP = totalForms : "",
        document.querySelector(`#prcss-check-caption-${_id}`).checked 
        ? ( cP++, cP == totalForms ? tickCheckBoxes(["#prcss-check-caption"], [true], ["All Caption Titles"]) : "") 
        : (cP--, cP < totalForms ? tickCheckBoxes(["#prcss-check-caption"], [false], ["All Caption Titles"]) : "")
      ) 
>>>>>>> 5e3d0a8 (input field checkbox checked fixed)
    : ""

    // individual image checkbox
    eId === `prcss-check-img-${_id}` 
    ? (prcssElements = [`#prcss-img-${_id}`,`#prcss-img-form-${_id}`,`#prcss-code-img-${_id}`],
      processCheckBox(`#prcss-check-img-${_id}`,prcssElements),
<<<<<<< HEAD
      // get if caption is checked
      document.querySelector(`#prcss-check-img-${_id}`).checked ? i-- : i++) 
=======
      // get if image is checked
      imgP ? iP = totalForms : "",
      document.querySelector(`#prcss-check-img-${_id}`).checked 
      ? (iP++, iP == totalForms ? tickCheckBoxes(["#prcss-check-img"], [true], ["All Images"]) : "") 
      : (iP--, iP < totalForms ? tickCheckBoxes(["#prcss-check-img"], [false], ["All Images"]) : "")
      ) 
>>>>>>> 5e3d0a8 (input field checkbox checked fixed)
    : ""
      
    // individual label checkbox   
    document.querySelector(`#prcss-check-label-${_id}`).onclick = function() {
      let arrowType = document.querySelector(`#prcss-arrow-${_id}`);
<<<<<<< HEAD
      
      replaceClass(this,`#top-label-${_id}`,'sr-only',`#prcss-label-label-${_id}`,'Label');
      this.checked 
        ? (l++,
=======
      labelP ? lP = totalForms -1 : "",
      replaceClass(this,`#top-label-${_id}`,'sr-only',`#prcss-label-label-${_id}`,'Label');
      this.checked 
        ? (
          lP++,
          lP == totalForms -1 ? tickCheckBoxes(["#prcss-check-label"], [true], ["All Labels"]) : "",
>>>>>>> 5e3d0a8 (input field checkbox checked fixed)
          replaceClass(this,`#top-label-${_id}`,'sr-only',`#prcss-label-label-${_id}`,'Label'),
          // remove sr-only class from the code area
          hideElements(`#prcss-label-sr-${_id}`),
          // hide the bottom label unless arrow is double
          arrowType.value == "3"
<<<<<<< HEAD
            ? (showElements(`#bottom-label-${_id}`, "block"),
=======
            ? (showElements(`#bottom-label-${_id}`, "inline"),
>>>>>>> 5e3d0a8 (input field checkbox checked fixed)
              removeClass(`#bottom-label-${_id}`,[`sr-only`]), 
              writeText([`#top-label-${_id}`,`#top-label-text-${_id}`], "causes"))  
            : "",
          arrowType.value == "4"
            ? (writeText([`#top-label-${_id}`,`#top-label-text-${_id}`], "relates to"))  
            : ""
        ) : 
        (
<<<<<<< HEAD
          l--,
=======
          lP--,
          lP < totalForms ? tickCheckBoxes(["#prcss-check-label"], [false], ["All Labels"]) : "",
>>>>>>> 5e3d0a8 (input field checkbox checked fixed)
          replaceClass(this,`#top-label-${_id}`,'sr-only',`#prcss-label-label-${_id}`,'Label'),
          // add sr-only class from the code area
          showElements(`#prcss-label-sr-${_id}`, ""),
          // hide the second label for the arrows
          hideElements(`#bottom-label-${_id}`)    
        )       
    }

    // individual highlight checkbox 
    document.querySelector(`#prcss-check-highlight-${_id}`).onclick = function() {
      
     this.checked ?
    (
      showElements(`#prcss-code-highlight-${_id}`, ""),
      addClass(`#prcss-card-${_id}`,["highlighted"],"highlighted")
    ) : 
      (
        hideElements(`#prcss-code-highlight-${_id}`),
        removeClass(`#prcss-card-${_id}`,["highlighted"])
      )
    }
  }     
<<<<<<< HEAD
  
<<<<<<< HEAD
    // total individual checkboxcheckedcount and check the all labels, images and caption titles checkboxes if all the individuals are checked
    let totalForms = document.querySelector("#prcss-collapse-container").childElementCount;
    l == totalForms -1 ? tickCheckBoxes(["#prcss-check-label"], [true], ["All Labels"]) : l == 0 ? tickCheckBoxes(["#prcss-check-label"], [false], ["All Labels"]) : "",
    i == 0 ? tickCheckBoxes(["#prcss-check-img"], [true], ["All Images"]) : i == totalForms ? tickCheckBoxes(["#prcss-check-img"], [false], ["All Images"]) : "", 
    c == 0 ? tickCheckBoxes(["#prcss-check-caption"], [true], ["All Caption Titles"]) : c == totalForms ? tickCheckBoxes(["#prcss-check-caption"], [false], ["All Caption Titles"]) : "" 
=======
  console.log(totalForms, lP,iP,cP);
>>>>>>> 5e3d0a8 (input field checkbox checked fixed)
=======
>>>>>>> c9bfb57 (On input fields checked boxes back corrected and some other issues)
}

// initializing preview areas
addCard("#prcss-collapse-container", prcssSelect.value,0, "Process Card");
addProcessCard(".process-container",prcssSelect.value,0,false);
addProcessCard("#code-prcss",prcssSelect.value,0,true);
hideLast([".connector-container",".code-connector-container",".prcss-arrow-select",".prcss-form-checkbox-label"]);


// process card collapse input area processing
processCollapseForm("#prcss-collapse-container","https://via.placeholder.com/300x300", "Alternative text");


// arrow selection group or individual or multiple elements
function processArrows(group, eId, target, _id){
  let allLabels = document.querySelector("#prcss-check-label");
  let oneLabel = document.querySelector(`#prcss-check-label-${_id}`)
  let bottomLabel = group == false ? `#bottom-label-${_id}` : `.bottom-label`;
  let topLabel = group == false ? `#top-label-${_id}` : `.top-label`;
  let topText = group == false ? `#top-label-text-${_id}` : `.top-label-text`;
  let iconType = group == false ? `#prcss-icon-type-${_id}` : `.prcss-icon-type`;
  let eTarget = group === false ?  target + "-" + _id : target; 
  document.getElementById(eId).onchange = function () {
    if (this.value > 0) {
      switch(this.value) {
        case "1":
          group ? document.querySelectorAll("#prcss-collapse-container select").forEach((s) => { s.value = "1"; }) : "" ;          
          //switch arrow type on preview area
          switchClass(eTarget, ["arrow-up","relate"], "arrow-down");
          //hide the label for the double arrow
          hideElements(bottomLabel);
          //change label text on preview and code area
          writeText([topText,topLabel], "leads to");
          //change arrow class on code area
          writeText([iconType]," arrow-down");
          break;
        case "2":
          group ? document.querySelectorAll("#prcss-collapse-container select").forEach((s) => { s.value = "2"; }) : "";
          switchClass(eTarget, ["arrow-down","relate"], "arrow-up");
          hideElements(bottomLabel);
          writeText([topText,topLabel], "leads to");
          writeText([iconType]," arrow-up");
          break;
        case "3":
          group ? document.querySelectorAll("#prcss-collapse-container select").forEach((s) => { s.value = "3"; }) : "";
          addClass(eTarget,["arrow-up", "arrow-down"], "icon");
          removeClass(eTarget, ["relate"]);
          allLabels.checked || oneLabel.checked ? showElements(bottomLabel, "") : "";
          writeText([topLabel,topText], "causes");
          writeText([iconType]," arrow-down arrow-up");
          break;
        case "4":
          group ? document.querySelectorAll("#prcss-collapse-container select").forEach((s) => { s.value = "4"; }) : "";
          switchClass(eTarget,["arrow-up", "arrow-down"], "relate");
          hideElements(bottomLabel);
          writeText([topLabel,topText], "relates to");
          writeText([iconType]," relate");
          break;
        default:
          console.log("Error on Individual Arrow Select.")
      }
    }
  }
} 



/*************************
 * new timeline
 * ********************** */    

 const addTimelineCard = (toElement, cardNum, current, encoded) => {
  // checks whether the checkBoxesArray is checked or not and returns/assign a name(second array[variables]) for each of the checkbox elements.
  checkBoxesChecked(["#timeline-check-img","#timeline-check-caption"], ["image","caption"]);
  let el = document.querySelector(toElement);
  cardNum = Number(cardNum);
  let card = "";
  for (let i = 0; i < cardNum; i++) { // for encoded generated output: code area
    let total = i + current;
    card += encoded ? `  &lt;div class=&quot;timeline-card<span id="timeline-code-highlight-${total}" style="display: none"> highlight</span>&quot;&gt; 
    &lt;div class=&quot;card-body&quot;&gt; 
      <span class="timeline-code-date-tag" id="timeline-code-date-tag-${total}" style="display:${caption ? "" : "none"};">&#60;h3 class=&quot;date-label&quot;&#62;
        <span id="timeline-code-date-${total}">Date&#32;Label&#32;${total + 1}</span>
      &#60;/h3&#62;</span><span class="timeline-code-title-tag" id="timeline-code-title-tag-${total}" style="display:${caption ? "" : "none"};">
      &#60;h4 class=&quot;card-text&quot;&#62;
        <span id="timeline-code-title-${total}">Caption&#32;Title&#32;${total + 1}</span>
      &#60;/h4&#62;</span>
      &lt;p class=&quot;card-text&quot;&gt;
        <span id="timeline-code-body-${total}">Card&#32;${total + 1}&#32;Body&#32;text</span>
      &lt;/p&gt; 
    &lt;/div&gt;<span class="timeline-code-img" id="timeline-code-img-${total}" style="display:${image ? "" : "none"};">\n    &lt;figure class=&quot;card-image&quot;&gt;
<<<<<<< HEAD
      &#60;img&#32;src&#61;&#34;<span id="timeline-code-src-${total}">http:&#47;&#47;via.placeholder.com&#47;300x300</span>&#34;&#32;alt&#61;&#34;<span id="timeline-code-alt-${total}">An&#32;image</span>&#34;&#62;<span class="timeline-code-img-caption" id="timeline-code-img-caption-${total}" style="display:none;">
      &lt;figcaption&gt;<span id="timeline-code-caption-${total}">Image Caption ${total+1} </span>&lt;/figcaption&gt;</span>
=======
      &#60;img&#32;src&#61;&#34;<span id="timeline-code-src-${total}">http:&#47;&#47;via.placeholder.com&#47;300x300</span>&#34;&#32;alt&#61;&#34;<span id="timeline-code-alt-${total}">Alternative&#32;text</span>&#34;&#62;<span class="timeline-code-img-caption" id="timeline-code-img-caption-${total}">
      &lt;figcaption&gt;<span id="timeline-code-caption-${total}">Image Caption ${total+1}</span>&lt;/figcaption&gt;</span>
>>>>>>> 5e3d0a8 (input field checkbox checked fixed)
    &lt;/figure&gt;</span>
  &lt;/div&gt;\n`  
    : // not encoded generated output: preview area
    `<div class="timeline-card" id="timeline-card-${total}">        
        <div class="card-body">
          <h3 class="date-label" id="timeline-card-date-${total}">Date Label ${total + 1}</h3>
          <h4 class="card-title" id="timeline-card-title-${total}" style="display:${caption ? "block" : "none"};">Caption Title ${total+ 1}</h4>
          <p class="card-text" id="timeline-card-body-${total}">Card ${total+ 1} Body text</p>
        </div>
        <figure class="card-image">
          <img id="timeline-img-${total}" class="timeline-img" src="http://via.placeholder.com/600x400" alt="A placeholder image" style="display: ${image ? "block" : "none"};">
          <figcaption id="timeline-card-caption-${total}" style="display:none;">Image Caption ${total + 1 }</figcaption>
        <figure>
      </div>`;
  }
return el.insertAdjacentHTML("beforeend",card);
}

const timelineSelect = document.querySelector("#timeline-select");

addTimelineCard(".timeline-container", timelineSelect.value,0,false);
addTimelineCard("#code-timeline",timelineSelect.value,0,true);
addCard("#timeline-collapse-container", timelineSelect.value,0,"Timeline Card");

<<<<<<< HEAD
//variables counter individual checkboxes checked status c=caption, i=image, l=label
c = 0; i= 0;
=======
hideElements(".timeline-code-img-caption");

//variables counter individual checkboxes checked status c=caption, i=image, l=label
let cT = 0; let iT= 0;
>>>>>>> 5e3d0a8 (input field checkbox checked fixed)

// collapse form control
const timelineCollapse  = document.querySelector("#timeline-collapse-container");
timelineCollapse.onclick = function(e) {
<<<<<<< HEAD
  
  let timelineElements = [];
  let eId = e.target.id;
  let _id = eId.slice(-1);
  console.log(eId);
=======
  checkBoxesChecked(["#timeline-check-img", "#timeline-check-caption"], ["imgT", "captionT"])
  let totalForms = this.childElementCount;
  let timelineElements = [];
  let eId = e.target.id;
  console.log(eId);
  let _id = eId.slice(-1);
>>>>>>> 5e3d0a8 (input field checkbox checked fixed)
  if (!eId) {
    return;
  } else {
    // individual arrows select 
    processArrows(false, eId,"#icon",_id),       
    
    // individual caption checkbox
    eId === `timeline-check-caption-${_id}` ?
      (
        timelineElements = [`#timeline-card-title-${_id}`,`#timeline-caption-form-${_id}`,`#timeline-code-title-tag-${_id}`],
        processCheckBox(`#timeline-check-caption-${_id}`,timelineElements),
        // get if caption is checked
<<<<<<< HEAD
        document.querySelector(`#timeline-check-caption-${_id}`).checked ? c-- : c++  
=======
        captionT ? cT = 3 : "",
        document.querySelector(`#timeline-check-caption-${_id}`).checked 
        ? ( cT++, cT == totalForms ? tickCheckBoxes(["#timeline-check-caption"], [true], ["All Caption Titles"]) : "") 
        : (cT--, cT < totalForms ? tickCheckBoxes(["#timeline-check-caption"], [false], ["All Caption Titles"]) : "")
>>>>>>> 5e3d0a8 (input field checkbox checked fixed)
      ) : "";

    // individual image checkbox
    eId === `timeline-check-img-${_id}` ?
      (
        timelineElements = [`#timeline-img-${_id}`,`#timeline-img-form-${_id}`,`#timeline-form-checkbox-img-caption-${_id}`, `#timeline-code-img-${_id}`],
        processCheckBox(`#timeline-check-img-${_id}`,timelineElements),
        // get if image is checked
<<<<<<< HEAD
        document.querySelector(`#timeline-check-img-${_id}`).checked ? i-- : (i++, hideElements([`#timeline-card-caption-${_id}`,`#timeline-img-caption-form-${_id}`]), tickCheckBoxes([`#timeline-check-img-caption-${_id}`],[false],["Image caption"]))  
=======
        imgT ? iT = 3 : "",
        document.querySelector(`#timeline-check-img-${_id}`).checked 
        ? ( iT++, iT == totalForms ? tickCheckBoxes(["#timeline-check-img"], [true], ["All Images"]) : "") 
        : (iT--, iT < totalForms ? tickCheckBoxes(["#timeline-check-img"], [false], ["All Images"]) : "")
>>>>>>> 5e3d0a8 (input field checkbox checked fixed)
      ) : "" ;
      
    // individual image caption checkbox
    eId === `timeline-check-img-caption-${_id}` ?
      (
        timelineElements = [`#timeline-img-caption-${_id}`,`#timeline-img-caption-form-${_id}`, `#timeline-card-caption-${_id}`,`#timeline-code-img-caption-${_id}`],
        processCheckBox(`#timeline-check-img-caption-${_id}`,timelineElements)
      ) : "" ;
    
        
    // individual highlight checkbox 
    document.querySelector(`#timeline-check-highlight-${_id}`).onclick = function() {
      this.checked ?
      (
        showElements(`#timeline-code-highlight-${_id}`, ""),
        addClass(`#timeline-card-${_id}`,["highlighted"],"highlighted")
      ) : 
        (
          hideElements(`#timeline-code-highlight-${_id}`),
          removeClass(`#timeline-card-${_id}`,["highlighted"])
        )    
    }
<<<<<<< HEAD
  }     
  console.log(c,i);
    // total individual checkboxcheckedcount and check the all labels, images and caption titles checkboxes if all the individuals are checked
    let totalForms = document.querySelector("#timeline-collapse-container").childElementCount;
    i == 0 ? tickCheckBoxes(["#timeline-check-img"], [true], ["All Images"]) : i == totalForms ? tickCheckBoxes(["#timeline-check-img"], [false], ["All Images"]) : "", 
    c == 0 ? tickCheckBoxes(["#timeline-check-caption"], [true], ["All Caption Titles"]) : c == totalForms ? tickCheckBoxes(["#timeline-check-caption"], [false], ["All Caption Titles"]) : "" 
=======
  }  
   
>>>>>>> 5e3d0a8 (input field checkbox checked fixed)
}

// process the changes on selection
timelineSelect.onchange = function() {
  let current = timelineCollapse.childElementCount;
  let selVal = this.value;
  let maxValue = 8;
  let newValue = diff(current, selVal);

  //check if selection <= maximum (8) && if selection.value > current
  ((newValue + current <= maxValue) && (selVal > current)) ? 
  (
    addCard("#timeline-collapse-container", newValue,current,"Timeline Card"),
    addTimelineCard(".timeline-container",newValue,current,false),
    addTimelineCard("#code-timeline",newValue,current,true)    
  ) : 
  (
    removeCards(["#timeline-collapse-container", ".timeline-container","#code-timeline"],newValue)
  )
};

// toggle ALL images and individual checkboxes show on image checkbox change
const timelineImageElements = ['.card-image img', '.timeline-img-form','.timeline-form-checkbox-img-caption', '.timeline-code-img'];
processCheckBox("#timeline-check-img",timelineImageElements);

// toggle ALL captions and individual checkboxes show on caption checkbox change
const timelineCaptionElements = ['h4.card-title','.timeline-caption-form','.timeline-code-title-tag'];    
processCheckBox("#timeline-check-caption",timelineCaptionElements);

processCollapseForm("#timeline-collapse-container","https://via.placeholder.com/600x400", "Alternative text")

/* *************************************************
 * carousel, process and timeline general functions
 * *********************************************** */  
 
// addCard form to collapse area 
// -toSection: section the card/s will be appended //  -cardNum : number of cards // -component: component function is working on (crs,prcss, geshi, quo, etc)
// captionChecked: if true caption displays 'block' : displays 'none'

function addCard(toSection, cardNum, current, type = "Card") {
  let component = toSection.slice(1,toSection.indexOf("-"));
  let total = 0;
  let xVar = true;
  // checks whether the checkBoxesArray is checked or not and returns/assign a name(second array[variables]) for each of the checkbox elements.
  component == "crs"  ? checkBoxesChecked([`#crs-check-caption`], ["caption"]) : ""; 
  component == "prcss" ? checkBoxesChecked([`#prcss-check-label`,`#prcss-check-img`,`#prcss-check-caption`], [`label`,"image","caption"]) : "";
  component == "timeline" ? checkBoxesChecked([`#timeline-check-img`,`#timeline-check-caption`], ["image","caption"]) : ""; 
  
  let card = "";
  for (let i = 0; i < cardNum; i++){
    total = i + current;
    card += `<div class="collapse-card ${total == 0 ? "" : "collapsed"} ${component}-collapse-card" id="${component}-collapse-card-${total}">
    <div class="collapse-header">
      <button class="btn btn-link" aria-expanded="false">
        <h5 class="h4">${type} ${total + 1}</h5>
      </button>
    </div>
    <div class="collapse-body">
    <form>`;
    component == "crs" 
      ? card += `${createCheckboxes(["caption"],component,total,[caption],["Caption Title"])}
                ${createFields(["src","alt"],component,total,["Image source:", "Alternative text:"],["Image source", "Image description"], type)}
                ${createFields(["title"], component, total, ["Caption title:"],["Caption title"], type, true)}`
      : " ";
    component == "prcss" 
      ? card += `<div class="input-group mb-3 prcss-arrow-select">
                  <div class="form-group prcss-arrow-form">
                    <label class="input-group-text" for="prcss-arrow-${total}">Choose arrow type</label>
                  </div>
                  <select class="custom-select" id="prcss-arrow-${total}">
                      <option value="1" selected>Arrow Down</option>
                      <option value="2">Arrow Up</option>
                      <option value="3">Double Arrow</option>
                      <option value="4">Relation</option>
                  </select>                
                </div>
                  ${createCheckboxes(["highlight","label", "img", "caption"],component,total,[false, label, image, caption],["Highlight card", "Label", "Image", "Caption title"])}
                <div class="form-group ${component}-img-form" id="${component}-img-form-${total}" style="">
                  ${createFields(["src","alt","caption"],component,total,["Image source:", "Alternative text:", "Image caption:"],["Image source", "Image description", "Caption title"], type)}
                </div>
                ${createFields(["title"], component, total, ["Caption title:"],["Caption title"],type, true)}
                `
      : " ";
    component == "timeline" 
      ? card += `${createCheckboxes(["highlight", "caption", "img", "img-caption",],component,total,[false, caption, image, false],["Highlight card", "Caption title", "Image", "Image caption"])}
                ${createFields(["date", "title"], component, total, ["Date label:", "Caption title:"],["Date label", "Caption title"], type, true)}
                <div class="form-group ${component}-img-form" id="${component}-img-form-${total}" style="">
                ${createFields(["src","alt","caption"],component,total,["Image source:", "Alternative text:", "Image caption:"],["Image source", "Image description", "Caption title"], type)}
                </div>`
      : " "; 
    
    card += `</form></div></div>`;

  }  
    return document.querySelector(toSection).insertAdjacentHTML("beforeend",card);
  
} 

// create multiple fields
function createFields(names = [], comp, tot, labelText =[], placeholder =[],type, bodyField = false) {
  let field = `<div class="input-group mb-3">`;
  names.forEach((n,i) => { 
   field += 
   `${n == "title" ? `<div class="form-group ${comp}-caption-form" style="display:block" id="${comp}-caption-form-${tot}">` : ""}
   ${n == "caption" ? `<div class="form-group ${comp}-img-caption-form" style="display:none" id="${comp}-img-caption-form-${tot}">` : ""}
    <label for="${comp}-${n}-${tot}">${labelText[i]}</label>
    <input type="text" class="form-control" id="${comp}-${n}-${tot}" aria-label="${comp}-${n}" placeholder="${type} ${placeholder[i]} ${tot + 1}">
    ${n == "title" ? `</div>` : ""}
    ${n == "caption" ? `</div>` : ""}`      
  })
  bodyField 
  ? field += `<label class="input-group-text" for="${comp}-body-${tot}">Body text:</label>
               <textarea class="form-control" id="${comp}-body-${tot}" aria-label="${comp}-body" placeholder="${type} Body text ${tot + 1}" rows="6"></textarea>`
  : "";     
 return `${field} </div>`;
}

// create multiple Checkboxes 
function createCheckboxes(names =[], comp, tot, xVar = [], messageText = []) {
  let box = `<div class="input-group mb-3">`;
names.forEach((n,i) => { 
  box += 
  `<div class="custom-control custom-checkbox ${comp}-form-checkbox-${n}" id="${comp}-form-checkbox-${n}-${tot}">
    <input type="checkbox" class="custom-control-input" id="${comp}-check-${n}-${tot}"${xVar[i] == true? " checked" : " unchecked"}>
    <label class="custom-control-label" id="${comp}-label-${n}-${tot}" for="${comp}-check-${n}-${tot}">${messageText[i]}</label>
  </div>`;
})       
return `${box}</div>`;
}

// Remove cards depending on selection
//  -el: from element array //  -cardNum: number of cards to remove
const removeCards = (elements = [], cardNum) => {
  for (let i = 0; i < cardNum; i++){
      elements.forEach((e) => { document.querySelector(e).lastElementChild.remove(); });
      //elements.forEach((e) => { Array.from(document.querySelectorAll(e)).forEach((el) => { el.lastChild.remove(); }) });
  }
}

//Hide the last element of a group and show the rest -way: "block"(displays block) / "" (just override the "none")  
function hideLast(elements, way = "block"){
  elements.forEach((e) => { Array.from(document.querySelectorAll(e)).forEach((el,i,a) => { i < a.length -1 ? el.style.display = way : el.style.display = "none"; }) })
}

// Change different display areas' content on input

function processCollapseForm(formId, source, altText) {
  document.querySelector(formId).oninput = (e) => {
    let targetTag = e.target.id;
    let id = Number(targetTag.slice(-1));
    let codeTag = document.getElementById(targetTag.replace("-","-code-"));
    let imgTag = document.getElementById(targetTag.replace("src","img"));
    let cardTag = document.getElementById(targetTag.replace("-", "-card-"));
    let fieldName = (targetTag.substring(targetTag.indexOf("-")+1, targetTag.substring(0,targetTag.length -2).length));
    let fName = fieldName.slice(0,1).toUpperCase() + fieldName.slice(1);
    let value = document.getElementById(targetTag).value;
    // default card and code areas elements innerText values
    let message = fieldName == "caption" ? `Image ${fName} ${id + 1}` : fieldName == "title" ? `Caption ${fName} ${id + 1}` : fieldName == "body" ? `Card ${id + 1} body text` : fieldName == "date" ? `${fName} label ${id + 1}` : "";
    
    e.target !== e.currentTarget && e.target.classList.contains("form-control") ? 
      (      
        (targetTag.includes("src") && value == "") 
        ? (
            imgTag.src = source,
            codeTag.innerText = source
          ) : 
            (targetTag.includes("alt") && value == "") 
            ? (
                imgTag.alt = altText,
                codeTag.innerText = altText
              ) : 
                (targetTag.includes("caption") || targetTag.includes("title") || targetTag.includes("body") || targetTag.includes("date")) && (value == "") 
                ? (
                    cardTag.innerText = message,
                    codeTag.innerText = message
                  ) :
            (
              targetTag.includes("src") || targetTag.includes("alt") 
              ? (
                  imgTag.src = value, 
                  codeTag.innerText = value,
                  imgTag.alt = value 
                )
              :
                (
                  codeTag.innerText = value, 
                  cardTag.innerText = value 
                )             
            )
              
      ) : e.stopPropagation();
  }
}


// Toggle on checkbox checked elements in an array
// -id: checkbox id // -elements: array of elements to show or hide // -label: label id to manipulate 
// -message: label text message,  "Image caption")
function processCheckBox(selector,elements = []) {
  let el = document.querySelector(selector);
  let component = selector.slice(1,selector.indexOf("-"));
  let lastDigit = selector.slice(-1);

  !isNaN(lastDigit) ? 
  (
    el.checked ?
      elements.forEach((e) => { Array.from(document.querySelectorAll(e)).forEach((el) => { el.style.display = ""; }) })
      : elements.forEach((e) => { Array.from(document.querySelectorAll(e)).forEach((el) => { el.style.display = "none"; }) })
  ) : 
  (
    el.onchange = (e) => {
      let eId = e.target.id;
      let lastDigit = eId.slice(-1);
      el.checked ?
      ( 
        elements.forEach((e) => { Array.from(document.querySelectorAll(e)).forEach((el) => { el.style.display = ""; }) }),
        // check every individual checkbox of the same selector         
        isNaN(lastDigit) 
          ? document.querySelectorAll(`#${component}-collapse-container input[type=checkbox]`)
            .forEach((ch) => { ch.id.includes(eId) && !ch.id.includes("img-caption") ? ch.checked = true : " id is not included" })   
            : " it is a number."
      )
        : // selected checkbox is not checked
      (
        elements.forEach((e) => { Array.from(document.querySelectorAll(e)).forEach((el) => { el.style.display = "none"; }) }),
        isNaN(lastDigit) 
          ? document.querySelectorAll(`#${component}-collapse-container input[type=checkbox]`)
            .forEach((ch) => { ch.id.includes(eId)  ? (ch.checked = false, hideElements([".timeline-code-img-caption", ".timeline-img-caption-form"]) ) : " id is not included" })   
            : " it is a number"
      )
    }
  )
}

// check if elements array as checkBoxes is checked or not and returns variables with their checked values.
function checkBoxesChecked(checkBoxes = [],names = []){
let result = [];
checkBoxes.forEach((ch,i)=> { document.querySelector(ch).checked ? result.push({"name": names[i], "value" : true}) : result.push({"name":  names[i], "value" : false}); })
result.forEach((ch) => { this[`${ch.name}`] = ch.value ; return this[`${ch.name}`]; });
}


// remove or adds a class on check and change its label text
function replaceClass (id,element,_class,label, message) {
  let _label = document.querySelector(label);
  let el = document.querySelectorAll(element);
  !id.checked ?
    (
      el.forEach((e) => { e.classList.add(_class); }),
      _label.innerText = message
    ) :
    (
      el.forEach((e) => {  e.classList.remove(_class); }),
      _label.innerText = message
    )
}

// replace an oldClass with a newClas given an elementId group
function switchClass(_element, oldClass = [], newClass) {
  el = document.querySelectorAll(_element);
  el.forEach((e) => { 
    e.classList.contains(newClass) 
    ? oldClass.forEach((oC) => { e.classList.remove(oC) }) 
    : (e.classList.add(newClass), oldClass.forEach((oC) => { e.classList.remove(oC) })) })
}

// Adds a class/es to an element group if a given className is already contained.  
function addClass(_element, className = [], classContained) {
  let el = document.querySelectorAll(_element);
  el.forEach((e) => { 
    e.classList.contains(classContained) 
    ? className.forEach((cN) => { e.classList.add(cN) })
    : (e.classList.add(classContained)); });
}

// Removes a group of classes
function removeClass(_element, classNames = []){
  let el = document.querySelectorAll(_element);
  el.forEach((e) => { classNames.forEach((c) => { e.classList.remove(c); }); });
}

// hide a group of elements
function hideElements(selector) {
  document.querySelectorAll(selector).forEach((e) => { e.style.display = "none"; });
}

// shows a group of elements
function showElements(selector, way = "block") {
  let el = document.querySelectorAll(selector);
  el.length > 1 
    ? el.forEach((e) => { e.style.display = way })
    : document.querySelector(selector).style.display = way;
}

// writes messages to a group of elements
function writeText(elements = [],message){
  elements.forEach((el) => { Array.from(document.querySelectorAll(el)).forEach((e) => { e.innerText = message; }); });
}

function tickCheckBoxes(checkBoxes = [], values = [], labels = []) {
  checkBoxes.forEach((ch,i) => { document.querySelector(ch).checked = values[i]; document.querySelector(ch.replace("check", "label")).innerText = labels[i] });
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

// update img alt text from input, allows elements added to the DOM after page load to be identified
function updateAltText(component, input, outputText) {
  $(document).on('keyup', input, function (event) {
    (!$(this).val() == "") ? $(outputText).text(' alt="' + $(this).val() + '"') : $(outputText).text("");
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

copyCode("an");
copyCode("au");
copyCode("btn");
copyCode("cd");
copyCode("crsl");
copyCode("col");
copyCode("dl");
copyCode("geshi");
copyCode("ib");
copyCode("ls");
copyCode("quo");
copyCode("tab");
copyCode("tl");
copyCode("ts");
copyCode("va");
copyCode("vd");
copyCode("test");
copyCode("crs");
copyCode("prcss");
copyCode("timeline");

// on copy code button click
function copyCode(component) {
  $(document).on("click", "#copy-" + component + "-code", function(event) {
    // run component validation
    componentForms = [$("#" + component + "-form")];
    validity = "valid";
    altTextValidity = "valid";
    // for carousel, check alt text
    if (component == "crs") {
      altTextForms = [];
      $(".crs-slide-form").each(function() {
        altTextForms.push($(this));
      });
      validateForms(altTextForms);
      altTextValidity == "invalid" ? $("#crs-alt-text-alert").removeClass("d-none") : $("#crs-alt-text-alert").addClass("d-none");            
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


