
// Encoding for the code area when needed
const htmlEncode = (string) => {
  return String(string).replace(/&/g, '&amp;').replace(/ /g,'&#32;').replace(/"/g,'&#34;').replace(/-/g,'&#45;').replace(/=/g,'&#61;').replace('/','&#47;').replace(/</g,'&#60;').replace(/>/g,'&#62;');
}

// Adding caption to carousel 
const addCaption = (slideNum = 1) => {
  return `\n\t\t<h5>Caption title ${slideNum}</h5>`;
}

// Adding an image to the carousel
const addImage = (imgId,src ="http://via.placeholder.com/800x400", alt = "Alternative text") => {
  return `\n\t\t<img src="${src}" alt="${alt}" class="nc-image" id="crs-image-${imgId}">`;
}

const diff = (a,b) => {
  return Math.abs(a - b);
}


// Generating carousel 
const generateCarousel = (type = 1, slideNum = 3, img = true, caption = true, encoded = false) => {
  let carousel = `<div class="new-carousel ${type == 2 ? "portrait" : "landscape"}-carousel w-100" tabindex="0" role="region" aria-label="gallery">\n    <ul class="nc-gallery">\n`; 
  for (let i = 1; i <= slideNum; i ++ ){
    carousel += `      <li>\n\t<figure>`;
      img ? (carousel += addImage(i)) : "no image added";
    carousel += `\n\t<figcaption class="nc-description">`
      caption ? (carousel += addCaption(i)) : "";
      // Body text in
    carousel += `\n\t\t<p>Carousel slide ${i} body text</p>\n\t</figcaption>\n\t\t</figure>\n\t</li>\n`;
  }
  carousel += `</ul>\n<ul class="nc-buttons" aria-label="gallery controls">
                <li>
                    <button class="nc-previous btn btn-primary" disabled="">Previous</button>
                </li>
                <li class="indic-container">
                    <ul class="indic-dots" aria-hidden="true">
                        <li class="active"></li>\n`;
                        for (let i = 1; i <= slideNum -1; i++){
                          carousel += `\n<li></li>`;
                        }
  carousel += `</ul>
                    </li>
                    <li>
                        <button class="nc-next btn btn-primary">Next</button>
                    </li>
                  </ul>
                    </div>`; 

  return encoded ? htmlEncode(carousel) : carousel;                    
}


// Generate slide card to append to form 
const generateCollapseCard = (cardId, imgChecked= true, captionChecked = true) => { 
  parseInt(cardId);
  let form = ""; 
  form += `<div class="collapse-card ${cardId == 1 ? "" : "collapsed"}" id="collapse-card-${cardId}">
    <div class="collapse-header">
      <button class="btn btn-link" aria-expanded="false">
        <h5 class="h4">Slide ${cardId}</h5>
      </button>
    </div>
    <div class="collapse-body">
    <form>
    <div class="input-group mb-3">`;
  imgChecked ? 
    form += 
      `<div class="form-group img-form">
        <label for="crs-img-src-${cardId}">Image src:</label>
        <input type="text" class="form-control" id="crs-img-src-${cardId}" aria-label="crs-img-src" placeholder="Slide ${cardId} caption title"> 
      </div>
      <div class="form-group img-form">
        <label class="input-group-text" for="crs-img-alt-${cardId}">Alternative text:</label>
        <input type="text" class="form-control" id="crs-img-alt-${cardId}" aria-label="crs-img-alt" placeholder="Slide ${cardId} image description"> 
      </div>` : "";
  captionChecked ?
    form += 
      `<div class="form-group caption-form">
      <label class="input-group-text" for="crs-title-${cardId}">Caption title:</label>
      <input type="text" class="form-control" id="crs-title-${cardId}" aria-label="crs-caption" placeholder="Slide ${cardId} caption title"> 
      </div>` : "";
    form += 
      `<div class="form-group">
      <label class="input-group-text" for="crs-body-${cardId}">Slide ${cardId} body text:</label>
      <textarea class="form-control" id="crs-body-${cardId}" aria-label="crs-body" placeholder="Carousel slide ${cardId} body text" rows="6"></textarea> 
      </div></div></form></div></div>`;

return form;
} 
// Add or remove cards depending on dropdown selection

const addCard = (cardNumber = selection.value , current = 0) => {
  for (let i = 1; i <= cardNumber; i++){
    collapseForm.insertAdjacentHTML("beforeend",generateCollapseCard(current + i,true,true));
  }  
}

const removeCard = (cardNumber) => {
  for (let i = 1; i <= cardNumber; i++){
      collapseForm.lastChild.remove();
  }
}

// Variable declaration for selected slide number and carousel code and preview display 

const selection = document.querySelector("#crs-slide-no");
const type = document.getElementById("crs-type");

let code = document.getElementById("code-crs");  
let displayCrs = document.querySelector(".preview-crs");
code.innerHTML = generateCarousel(1, selection.value,true,true,true);
displayCrs.innerHTML = generateCarousel(1, selection.value,true,true,false);
const collapseForm = document.getElementById("crs-collapse-container");
addCard(selection.value);


type.onchange = () => {
  let string = displayCrs.firstElementChild.classList;
  type.value == 1 ? 
  (
    string.remove("portrait-carousel"),
    string.add("landscape-carousel")    
  )
  :
  (
    string.remove("landscape-carousel"),
    string.add("portrait-carousel")
  ); 
}


// constants and variables for Display Remove images 

const imageCheck = document.getElementById("crs-check-img");
const image = document.getElementsByClassName("nc-image");
const images = Array.from(image);
const imageLabel = document.getElementById("label-img"); 
const formImage = document.getElementsByClassName("img-form");
const formImages = Array.from(formImage);
let captionChecked = true;
let imageChecked = true;

// display or remove images on checkbox clicked

imageCheck.onclick = () => {
  imageCheck.checked 
  ?
  (
    captionCheck.checked ? captionChecked : !captionChecked, 
    imageChecked = true,
    images.forEach((img) => { img.style.display = "block"; imageLabel.innerHTML = "Remove Image"; }),
    formImages.forEach((fImg) => { fImg.style.display = "block"; }) 
  ) 
  :
  (
    captionCheck.checked ? captionChecked : !captionChecked,
    imageChecked = false,
    images.forEach((img) => { img.style.display = "none"; imageLabel.innerHTML = "Add Image";}),
    formImages.forEach((fImg) => { fImg.style.display = "none"; }) 
  )
  // displayCrs.innerHTML = generateCarousel(selection.value,imageChecked,captionChecked,false);
  // collapseForm.innerHTML = generateCollapseForm(selection.value,imageChecked,captionChecked);
  code.innerHTML = generateCarousel(type.value, selection.value, imageChecked, captionChecked, true); 
}

// Constants for display or remove captions

const captionCheck = document.getElementById("crs-check-caption") ;
const captionLabel = document.getElementById("label-caption"); 
const caption = document.getElementsByClassName("nc-description");
const captions = Array.from(caption);
const formCaption = document.getElementsByClassName("caption-form");
const formCaptions = Array.from(formCaption);

// display or remove captions on checkbox clicked

captionCheck.onclick = () => {
  (captionCheck.checked) 
  ? 
  (
    imageChecked ? imageChecked : !imageChecked,
    captionChecked = true,
    captions.forEach((caption) => { caption.firstElementChild.style.display = "block"; captionLabel.innerHTML = "Remove Caption"; }),
    formCaptions.forEach((fCaption) => { fCaption.style.display = "block"; })
  )
  :
  ( 
    (imageChecked) ? imageChecked : !imageChecked,
    captionChecked = false,
    captions.forEach((caption) => { caption.firstElementChild.style.display = "none"; captionLabel.innerHTML = "Add Caption";}),
    formCaptions.forEach((fCaption) => { fCaption.style.display = "none"; })
  ) 
  // displayCrs.innerHTML = generateCarousel(selection.value,imageChecked,captionChecked,false);
  // collapseForm.innerHTML = generateCollapseForm(selection.value,imageChecked,captionChecked);
  code.innerHTML = generateCarousel(type.value, selection.value, imageChecked, captionChecked, true);
}

// Generate cards for the input forms of the collapse and Change the preview the code and the form panels on select changing value

let currentSelectionValue = selection.value;

selection.onchange = (imageChecked,captionChecked) => {
  displayCrs.innerHTML = generateCarousel(type.value, selection.value,imageChecked,captionChecked,false);
  code.innerHTML = generateCarousel(type.value, selection.value,imageChecked,captionChecked,true); 
  let current = collapseForm.childElementCount;
  const maxValue = 8;
  let newValue = diff(current, selection.value);
  /*
  If the difference between values is <= the maximum value(maxValue)
   and the selected value(selection.value) is > the current number of slides
   then add the choosen number of cards(newValue) 
  */
  (newValue + current <= maxValue) && (selection.value > current) ? addCard(newValue, current) : removeCard(newValue);
  
  // uncomment to check the values from the choosen number of cards and the total collapse items displayed

  //console.log(newValue, collapseForm.childElementCount) ;
}

// Fill up the form and update on Preview and Code panels

const title = document.getElementById(`crs-title-1`);
title.oninput = () => {
  captions[0].firstElementChild.innerHTML = title.value;
//code.innerHTML = generateCarousel("landscape", selection.value, imageChecked,captionChecked,true);
}


const fillUpdateForm = (fieldNum,formId,imgSrc,altText,title,body) => {  
  for (let i=0; i< fieldNum; i++) {
    (document.getElementById(`crs-img-src-${formId}`).innerHTML = imgSrc,
    document.getElementById(`crs-img-alt-${formId}`).innerHTML = altText,
    document.getElementById(`crs-title-${formId}`).innerHTML = title,
    document.getElementById(`crs-body-${formId}`).innerHTML = body )
  }
}






// //TESTING A UNIQUE FUNCTION TO DISPLAY IMAGE AND CAPTION

// const displayElementOnClick = (e,eId,eClass,eLabel) => {
//   let eCheck = document.getElementById(`${eId}`);
//   eCheck.checked = true;
//   //eCheck.nextSibling.innerHTML = `Remove ${e}`;
//   let element = document.getElementsByClassName(eClass);
//   let elements = Array.from(element);
//   let label = document.querySelector(`.${eLabel}`); 

//   eCheck.onclick = () => {
//     (eCheck.checked) 
//     ? 
//     (
//       code.innerHTML = generateCarousel(this.value,true,true,true),
//       elements.forEach((elm) => { elm.style.display = "block"; label.innerHTML = `Remove ${e}`; })
//     )       
//     : 
//     (
      
//       elements.forEach((elm) => { elm.style.display = "none"; label.innerHTML = `Add ${e}`; }),
//       code.innerHTML = generateCarousel(this.value,false,true,true)
//     )
//   } 
// }

// displayElementOnClick("image","crs-check-img","nc-image","label-img");
// displayElementOnClick("caption","crs-check-caption","nc-caption","label-caption");