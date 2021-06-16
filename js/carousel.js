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

const addSlides = (toElement, slideId, current, img, caption, encoded) => {
    let slide = "";
    for (let i = 0; i < slideId; i++) { // for encoded generated output: code area
      slide += encoded ? `\n     <span class="crs-code-remove">&#60;li&#62;\n       &#60;figure&#62; 
          <span class="crs-code-img">&#60;img&#32;src&#61;&#34;<span id="crs-code-src-${i}">http:&#47;&#47;via.placeholder.com&#47;800x400</span>&#34;&#32;alt&#61;&#34;<span id="crs-code-alt-${i}">Alternative&#32;text</span>&#34;&#32;class&#61;&#34;nc&#45;image&#34;&#32;&#62;</span>
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
      <img src="https://via.placeholder.com/800x400?text=Landscape:+2:1" alt="Alternative text" class="nc-image" id="crs-image-${i + current}" style="display: ${img ? `block` : `none`};">
      \t<figcaption class="nc-description">
      <h5  ${caption ? `style="display: block;"` : `style="display: none;"` }>Caption title ${current + i + 1}</h5>
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

const addCard = (toElement, cardId = 0, current = 0, imgChecked = true, captionChecked = true) => { 
  let form = "";
  for (let i = 0; i < cardId; i++){
    form += `<div class="collapse-card ${i == 0 ? "" : "collapsed"}" id="collapse-card-${i + current}">
    <div class="collapse-header">
      <button class="btn btn-link" aria-expanded="false">
        <h5 class="h4">Slide ${i + current + 1}</h5>
      </button>
    </div>
    <div class="collapse-body">
    <form>
    <div class="input-group mb-3">`;
    form += imgChecked ?
        `<div class="form-group img-form">
          <label for="crs-src-${i}">Image src:</label>
          <input type="text" class="form-control" id="crs-src-${i}" aria-label="crs-img-src" placeholder="Slide ${i + 1} caption title"> 
        </div>
        <div class="form-group img-form">
          <label class="input-group-text" for="crs-alt-${i}">Alternative text:</label>
          <input type="text" class="form-control" id="crs-alt-${i}" aria-label="crs-img-alt" placeholder="Slide ${i + 1} image description"> 
        </div>` : "";
      form += captionChecked ? 
        `<div class="form-group caption-form">
        <label class="input-group-text" for="crs-title-${i}">Caption title:</label>
        <input type="text" class="form-control" id="crs-title-${i}" aria-label="crs-caption" placeholder="Slide ${i + 1} caption title"> 
        </div>` : "";
      form += 
        `<div class="form-group">
        <label class="input-group-text" for="crs-body-${i}">Slide ${i +1} body text:</label>
        <textarea class="form-control" id="crs-body-${i}" aria-label="crs-body" placeholder="Carousel slide ${i + 1} body text" rows="6"></textarea> 
        </div></div></form></div></div>`; 
  }  
  console.log(toElement);
  return toElement.insertAdjacentHTML("beforeend",form);
} 

/***** REMOVE CARD ***** Remove cards depending on dropdown selection
*       removeCard(
*         el: from element
*         cardNumber: number of cards to remove
*       )
*/

const removeCard = (el, cardNum) => {
  for (let i = 0; i < cardNum; i++){
      el.lastChild.remove();
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
addSlides(displayCrs,selection.value,0,true,true,false);
// For the Code display area
addSlides(code,selection.value,0,true,true,true);
// For the form on the Options area
addCard(collapseForm,selection.value,0,true,true);



// Constants and variables for state of image and caption checkboxes 
const imageCheck = document.getElementById("crs-check-img");
let captionChecked,
    imageChecked;
    imageChecked = true;
    captionChecked = true;


/******** DISPLAY OR HIDE IMAGES ON CHECKBOX CLICK ********/ 

imageCheck.onclick = () => {
  // constants and variables for Display Remove images on every section
  const image = document.getElementsByClassName("nc-image");
  const images = Array.from(image);
  const imageLabel = document.getElementById("label-img"); 
  const formImage = document.getElementsByClassName("img-form");
  const formImages = Array.from(formImage);
  const codeImg = document.getElementsByClassName("crs-code-img");
  const codeImgs = Array.from(codeImg);

  //checked if caption check box is checked and assign result to variable
  captionCheck.checked ? captionChecked : !captionChecked;

  imageCheck.checked 
  ?
  (    
    imageChecked = true,
    images.forEach((img) => { img.style.display = "block"; imageLabel.innerHTML = "Remove Image"; }),
    formImages.forEach((fImg) => { fImg.style.display = "block"; }),
    codeImgs.forEach((img) => { img.style.display = "block"; })
  ) 
  :
  (
    imageChecked = false,
    images.forEach((img) => { img.style.display = "none"; imageLabel.innerHTML = "Add Image";}),
    formImages.forEach((fImg) => { fImg.style.display = "none"; }),
    codeImgs.forEach((img) => { img.style.display = "none"; })
  );
}



const captionCheck = document.getElementById("crs-check-caption") ;


/******** DISPLAY OR HIDE CAPTIONS ON CHECKBOX CLICK *******
 *  and update the generated carousel, code and collapse forms
*/

captionCheck.onclick = () => {
  // Constants for display or remove captions on every section
  const captionLabel = document.getElementById("label-caption"); 
  const caption = document.getElementsByClassName("nc-description");
  const captions = Array.from(caption);
  const formCaption = document.getElementsByClassName("caption-form");
  const formCaptions = Array.from(formCaption);
  const codeTitle = document.getElementsByClassName("crs-code-title");
  const codeTitles = Array.from(codeTitle);

  //check if image checkbox checked and assign result to variable imageChecked
  imageCheck.checked ? imageChecked : !imageChecked;

  captionCheck.checked 
  ? 
  (
    captionChecked = true,
    captions.forEach((caption) => { caption.firstElementChild.style.display = "block"; captionLabel.innerHTML = "Remove Caption"; }),
    formCaptions.forEach((fCaption) => { fCaption.style.display = "block"; }),
    codeTitles.forEach((title) => { title.style.display = "block"; })
  )
  :
  (     
    captionChecked = false,
    captions.forEach((caption) => { caption.firstElementChild.style.display = "none"; captionLabel.innerHTML = "Add Caption";}),
    formCaptions.forEach((fCaption) => { fCaption.style.display = "none"; }),
    codeTitles.forEach((title) => { title.style.display = "none"; })
  ) 
}

// Generate cards for the input forms of the collapse and Change the preview the code and the form panels on select changing value


selection.onchange = () => {
  const current = collapseForm.childElementCount;
  const maxValue = 8;
  let newValue = diff(current, selection.value);

  //check if selection <= maximum (8) && if selection.value > current
  (newValue + current <= maxValue) && (selection.value > current) ? 
  (
    addCard(collapseForm,newValue, current,imageChecked,captionChecked),
    addSlides(code,newValue,current,imageChecked,captionChecked,true),
    addSlides(displayCrs,newValue,current,imageChecked,captionChecked,false)
  ) : 
  (
    removeCard(collapseForm,newValue),
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
  // get elements for the preview and the code area display
  let captionTag = captions[id].querySelector(idTag.includes("body") ? "p" : "h5");
  let codeTag = document.getElementById(idTag.replace("-",`-code-`));
  e.target !== e.currentTarget ?
   (
    idTag.includes("src") ? (
      value == "" ? (images[id].src = "http://via.placeholder.com/800x400?text=Landscape:+2:1", codeTag.innerText = "http://via.placeholder.com/800x400")
      : 
      (
        images[id].src = value,
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
        codeTag.innerText = value
      )) : 
      idTag.includes("body") ? (
        value == "" ? (captionTag.innerText = `Carousel slide ${id + 1} body text`, codeTag.innerText = `Carousel slide ${id + 1} body text`)
        :
      (
        captionTag.innerText = value,
        codeTag.innerText = value
      )) : console.log("problem found on input connection to target")
   )  
  : e.stopPropagation();
}
