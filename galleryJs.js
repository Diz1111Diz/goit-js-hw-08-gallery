"use strict";
import gallery from "./gallery-items.js";

const galleryList = document.querySelector(".js-gallery");
const modalBox = document.querySelector(".lightbox__content");
const modelFullImg = document.querySelector(".lightbox__image");
const divLightbox = document.querySelector(".lightbox");
const btnClose = document.querySelector(".lightbox__button");
// const closeOverLay = document.querySelector(".lightbox__overlay");

const renderAddItem = ({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a class="gallery__link"
    href="${original}">
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}">
  </a>
</li>`;
};

const addRenderList = link =>
  link.reduce((acc, el) => acc + renderAddItem(el), "");

galleryList.insertAdjacentHTML("beforeend", addRenderList(gallery));

galleryList.addEventListener("click", modalOpen);

function modalOpen(e) {
  e.preventDefault();
  modelFullImg.setAttribute("src", e.target.dataset.source);
  modelFullImg.setAttribute("alt", e.target.alt);
  divLightbox.classList.add("is-open");
}

btnClose.addEventListener("click", modalClose);

modalBox.addEventListener("click", e => {
  if (e.currentTarget === e.target){
    modalClose()
  }
});

document.addEventListener("keydown", e => {
  if (e.code === "Escape"){
    modalClose()
  }  
});

function modalClose(e) {
  modelFullImg.setAttribute("src", "");
  modelFullImg.setAttribute("alt", "");
  divLightbox.classList.remove("is-open");
}

