// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox"; 
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

// galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
    <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}" 
      alt="${description}"
    />
  </a>`;
    }).join('');
}

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
});

console.log(galleryItems);

