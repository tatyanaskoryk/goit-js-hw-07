import { galleryItems } from './gallery-items.js';
// Change code below this line

galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.nodeName === 'IMG') {
    const largeImageURL = event.target.dataset.source;

    const lightbox = basicLightbox.create(`
      <img src="${largeImageURL}" alt="${event.target.alt}" />
    `);

    lightbox.show();
  }
});
console.log(galleryItems);
