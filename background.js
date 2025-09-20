// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
  const lazyImages = Array.from(document.querySelectorAll('img[data-src], img.lazyload, img[loading="lazy"]'));

  const lazyLoad = (img) => {
    if (img.dataset.src) {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    }
    img.classList.remove('lazyload');
    img.removeAttribute('loading');
  };

  const onScroll = () => {
    lazyImages.forEach(img => {
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight + 200) {
        lazyLoad(img);
      }
    });
  };

  window.addEventListener('scroll', onScroll);
  onScroll();
});
// ...existing code...