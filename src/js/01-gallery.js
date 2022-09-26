// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const gallery = document.querySelector('.gallery');

function GalleryMarkupCreate(picturesList) {
  return picturesList
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description} "title="${description}"/>
</a>`;
    })
    .join('');
}

gallery.insertAdjacentHTML('afterbegin', GalleryMarkupCreate(galleryItems));
const lightbox = new SimpleLightbox('.gallery__item', { captionDelay: '250' });
