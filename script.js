window.addEventListener('load', () => {
    const images = document.querySelectorAll('.gallery-item img');
    images.forEach(img => {
        img.style.opacity = 1;
    });
});
