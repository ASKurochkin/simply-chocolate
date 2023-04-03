const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

// add this script
(() => {
  const images = document.querySelectorAll('.gallery-link');
  images.forEach(el => {
   let img = el.querySelector('img');
    el.href = img.src   ;
  });
})();
