// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox"; 
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryContainer = document.querySelector('.gallery'); 

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
     <div class="gallery__item">
        <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}" 
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }).join('');     
} 

function onGalleryContainerClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    };

    const instance = basicLightbox.create
        (`<img src="${evt.target.dataset.source}" width="800" height="600">`,
            {
                onShow: () => {
                    window.addEventListener('keydown', onEscKeyPress);
                },
                onClose: () => {
                    window.removeEventListener('keydown', onEscKeyPress);
                },
            });      
         
    instance.show();
    console.log(evt.target.dataset.source);
} 

function onEscKeyPress(evt) {
        if (evt.code === 'Escape') {
            return;
       }
       instance.close();
    }



console.log(galleryItems);
