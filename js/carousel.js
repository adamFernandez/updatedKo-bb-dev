const diff = (a,b) => {
  return Math.abs(a - b);
}


/***** SLIDES GENERATOR ***** 
*     
*      addDots: 
*             -slideNum : number of slides to generate. Default 3.
*             -encoded : It stablishes the output ? encoded version (for the code display) : regular html output (preview display)
*
*       addSlides:
*             -toElement: element to append/insert the output to.
*             -slideId: use to give id to slides and to number them
*             -current: used to get the current number of slides
*             -encoded: output ? encoded version : regular html
*/


// constants for the addDots function:

const dots = document.querySelector(".indic-dots");
const dotsCode = document.querySelector("#dots-code-crs");

// adds dots to the slide for the carousel as needed

const addDots = (slideNum = 0, encoded) => {
  let dot = "";
  for (let i = 0; i < slideNum; i++) {
    dot = encoded ? `<slide class="crs-dots-remove">&#60;li&#62;&#60;/li&#62;</span>` : `<li></li>\n`;
  }
  return (encoded ? dotsCode : dots).insertAdjacentHTML("beforeend", dot);
}

const addSlides = (toElement, slideId = 0, current = 0, encoded = false) => {
    let slide = "";
    for (let i = 0; i < slideId; i++) { // for encoded generated output: code area
      slide += encoded ? `\n     <span class="crs-code-remove">&#60;li&#62;\n       &#60;figure&#62; 
          <span class="crs-code-img">&#60;img&#32;src&#61;&#34;<span id="crs-code-src-${i}">http:&#47;&#47;via.placeholder.com&#47;800x400?text=Landscape:+2:1</span>&#34;&#32;alt&#61;&#34;<span id="crs-code-alt-${i}">Alternative&#32;text</span>&#34;&#32;class&#61;&#34;nc&#45;image&#34;&#32;&#62;</span>
            &#60;figcaption&#32;class&#61;&#34;nc&#45;description&#34;&#62;
              <span class="crs-code-title">&#60;h5&#62;
                <span id="crs-code-title-${i}">Caption&#32;title&#32;${current + i + 1}</span>
              &#60;/h5&#62;</span>
              &#60;p&#62;
                  <span id="crs-code-body-${i}">Carousel&#32;slide&#32;${current + i + 1}&#32;body&#32;text</span>
              &#60;/p&#62;
            &#60;/figcaption&#62;
       &#60;/figure&#62;
    &#60;/li&#62;</span>`  
      : // not encoded generated output: preview area
      `<li><figure>
      <img src="https://via.placeholder.com/800x400?text=Landscape:+2:1" alt="Alternative text" class="nc-image" id="crs-image-${i}">
      \t<figcaption class="nc-description">
      <h5>Caption title ${current + i + 1}</h5>
      \n\t\t<p>Carousel slide ${current + i + 1} body text</p>\n\t</figcaption>\n\t</figure>\n\t</li>\n`;      
      
      // Adding the dots
      addDots(current + i, encoded);
    }
  
  return toElement.insertAdjacentHTML("beforeend",slide);
}

/* ****  REMOVE SLIDES AND DOTS from every display area to update when necessary **** /////
 */

const removeSlides = (cardNum) => {
  for (let i = 0; i < cardNum; i++){
    displayCrs.lastElementChild.remove();
    code.lastElementChild.remove();
    dots.lastElementChild.remove();
    dotsCode.lastElementChild.remove();
  }
}

/***** CARD GENERATOR ***** Generate slide card to append to form 
*         cardId : identifier for future development and numbering the cards , 
*         ImgChecked : image checkbox is checked : unchecked => true : false
*         captionChecked: caption checkbox is checked : unchecked = true : false ) 
*/

const generateCollapseCard = (cardId, imgChecked= true, captionChecked = true) => { 
  parseInt(cardId);
  let form = ""; 
  form += `<div class="collapse-card ${cardId == 0 ? "" : "collapsed"}" id="collapse-card-${cardId}">
    <div class="collapse-header">
      <button class="btn btn-link" aria-expanded="false">
        <h5 class="h4">Slide ${cardId + 1}</h5>
      </button>
    </div>
    <div class="collapse-body">
    <form>
    <div class="input-group mb-3">`;
  imgChecked ? 
    form += 
      `<div class="form-group img-form">
        <label for="crs-src-${cardId}">Image src:</label>
        <input type="text" class="form-control" id="crs-src-${cardId}" aria-label="crs-img-src" placeholder="Slide ${cardId + 1} caption title"> 
      </div>
      <div class="form-group img-form">
        <label class="input-group-text" for="crs-alt-${cardId}">Alternative text:</label>
        <input type="text" class="form-control" id="crs-alt-${cardId}" aria-label="crs-img-alt" placeholder="Slide ${cardId + 1} image description"> 
      </div>` : "";
  captionChecked ?
    form += 
      `<div class="form-group caption-form">
      <label class="input-group-text" for="crs-title-${cardId}">Caption title:</label>
      <input type="text" class="form-control" id="crs-title-${cardId}" aria-label="crs-caption" placeholder="Slide ${cardId + 1} caption title"> 
      </div>` : "";
    form += 
      `<div class="form-group">
      <label class="input-group-text" for="crs-body-${cardId}">Slide ${cardId +1} body text:</label>
      <textarea class="form-control" id="crs-body-${cardId}" aria-label="crs-body" placeholder="Carousel slide ${cardId + 1} body text" rows="6"></textarea> 
      </div></div></form></div></div>`;

return form;
} 

/***** CARD ADDITION OR REMOVAL ***** Add or remove cards depending on dropdown selection
*       addCard (
*         cardNumber: number of cards depending on selected option dropdown. Default: selected current value.
*         current: current number of collapse cards already generated. Default: 0.
*       )
*       removeCard(
*         cardNumber: number of cards to remove
*       )
*/

const addCard = (cardNum = 1, current = 0) => {
  for (let i = 0; i < cardNum; i++){
    collapseForm.insertAdjacentHTML("beforeend",generateCollapseCard(current + i,true,true));
  }  
}

const removeCard = (cardNum) => {
  for (let i = 0; i < cardNum; i++){
      collapseForm.lastChild.remove();
  }
}

/******* TOOGLES CAROUSEL TYPE TO LANDSCAPE OR PORTRAIT ******/
const type = document.getElementById("crs-type");
let crsType = document.querySelector(".new-carousel").classList;
const crsCodeType = document.querySelector(".crs-type");

type.onchange = () => {
  type.value == 1 ? (crsType.remove("portrait-carousel"), crsType.add("landscape-carousel"), crsCodeType.innerText = "landscape", images.forEach(img => img.src = "http://via.placeholder.com/800x400?text=Landscape:+2:1") ) 
                  : (crsType.remove("landscape-carousel"), crsType.add("portrait-carousel"), crsCodeType.innerText = "portrait", images.forEach(img => img.src = "http://via.placeholder.com/500x500?text=Portrait:1:1-3:2"));
}


// **** INITIALIZING VIEWS ***** Variable declaration for selected slide number and carousel code and preview display 

const selection = document.querySelector("#crs-slide-no");
const code = document.getElementById("slides-code-crs");  
const displayCrs = document.querySelector(".nc-gallery");
const collapseForm = document.getElementById("crs-collapse-container");

// For the Preview area
addSlides(displayCrs,selection.value,0,false);
// For the Code display area
addSlides(code,selection.value,0,true);
// For the form on the Options area
addCard(selection.value);


// constants and variables for Display Remove images 

const imageCheck = document.getElementById("crs-check-img");
const image = document.getElementsByClassName("nc-image");
const images = Array.from(image);
const imageLabel = document.getElementById("label-img"); 
const formImage = document.getElementsByClassName("img-form");
const formImages = Array.from(formImage);
const codeImg = document.getElementsByClassName("crs-code-img");
const codeImgs = Array.from(codeImg);
let captionChecked = true;
let imageChecked = true;



/******** DISPLAY OR HIDE IMAGES ON CHECKBOX CLICK ********/ 

imageCheck.onclick = () => {
  imageCheck.checked 
  ?
  (
    captionCheck.checked ? captionChecked : !captionChecked, 
    imageChecked = true,
    images.forEach((img) => { img.style.display = "block"; imageLabel.innerHTML = "Remove Image"; }),
    formImages.forEach((fImg) => { fImg.style.display = "block"; }),
    codeImgs.forEach((img) => { img.style.display = "block"; })
  ) 
  :
  (
    captionCheck.checked ? captionChecked : !captionChecked,
    imageChecked = false,
    images.forEach((img) => { img.style.display = "none"; imageLabel.innerHTML = "Add Image";}),
    formImages.forEach((fImg) => { fImg.style.display = "none"; }),
    codeImgs.forEach((img) => { img.style.display = "none"; })
  )
}

// Constants for display or remove captions

const captionCheck = document.getElementById("crs-check-caption") ;
const captionLabel = document.getElementById("label-caption"); 
const caption = document.getElementsByClassName("nc-description");
const captions = Array.from(caption);
const formCaption = document.getElementsByClassName("caption-form");
const formCaptions = Array.from(formCaption);
const codeTitle = document.getElementsByClassName("crs-code-title");
const codeTitles = Array.from(codeTitle);


/******** DISPLAY OR HIDE CAPTIONS ON CHECKBOX CLICK *******
 *  and update the generated carousel, code and collapse forms
*/

captionCheck.onclick = () => {
  (captionCheck.checked) 
  ? 
  (
    imageChecked ? imageChecked : !imageChecked,
    captionChecked = true,
    captions.forEach((caption) => { caption.firstElementChild.style.display = "block"; captionLabel.innerHTML = "Remove Caption"; }),
    formCaptions.forEach((fCaption) => { fCaption.style.display = "block"; }),
    codeTitles.forEach((title) => { title.style.display = "block"; })
  )
  :
  ( 
    (imageChecked) ? imageChecked : !imageChecked,
    captionChecked = false,
    captions.forEach((caption) => { caption.firstElementChild.style.display = "none"; captionLabel.innerHTML = "Add Caption";}),
    formCaptions.forEach((fCaption) => { fCaption.style.display = "none"; }),
    codeTitles.forEach((title) => { title.style.display = "none"; })
  ) 
}



// Generate cards for the input forms of the collapse and Change the preview the code and the form panels on select changing value

let currentSelectionValue = selection.value;
selection.onchange = () => {
  let current = collapseForm.childElementCount;
  const maxValue = 8;
  let newValue = diff(current, selection.value);
  /*
  If the difference between values is <= the maximum value(maxValue)
   and the selected value(selection.value) is > the current number of slides
   then add the choosen number of cards(newValue) 
  */
  (newValue + current <= maxValue) && (selection.value > current) ? 
  (
    addCard(newValue, current),
    addSlides(code,newValue,current,true),
    addSlides(displayCrs,newValue,current,false)
  ) : 
  (
    removeCard(newValue),
    removeSlides(newValue)
  )
}


/* UPDATE THE PREVIEW AND CODE ON COLLAPSE CARDS FORM INPUT
*/

const collapse = document.querySelector("#crs-collapse-container");

collapse.oninput = (e) => {
  let idTag = e.target.id;
  let id = parseInt(idTag.substr(idTag.length -1));
  let value = e.target.value;
  // get elements for the code area display
  let captionTag = captions[id].querySelector(idTag.includes("body") ? "p" : "h5");
  let imageTag = images[id]("." + idTag.includes("src") ? "src" : "alt");
  let codeTag = document.getElementById(idTag.replace("-",`-code-`)).innerText;

  e.target !== e.currentTarget ?
   (
    idTag.includes("src") ? (
      value == "" ? imageTag = "http://via.placeholder.com/800x400" 
      : 
      (
        imageTag = value,
        codeTag.innerText = value
      )
    ) :
    idTag.includes("alt") ? (
      value == "" ? (images[id].alt = "Alternative text", codeTag.innerText = "Alternative text")
      :
      (
        images[id].alt = value,
        codeTag.innerText = value
      )) :
      idTag.includes("title") ? (
        value == "" ? (captionTag.innerText = `Caption title ${id + 1}`, codeTag.innerText = `Caption title ${id + 1}`)
        :
      (
        captionTag.innerText = value,
        codeTag = value
      )) : 
      idTag.includes("body") ? (
        value == "" ? (captionTag.innerText = `Carousel slide ${id + 1} body text`, codeTag.innerText = `Carousel slide ${id + 1} body text`)
        :
      (
        captionTag.innerText = value,
        codeTag.innerHTML = value
      )) : console.log("problem found on input connection to target")
   )  
  : e.stopPropagation();
}