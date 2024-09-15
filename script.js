document.addEventListener('DOMContentLoaded', function() {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = 0;
    heroContent.style.transition = 'opacity 2s ease-in-out';
    setTimeout(() => {
        heroContent.style.opacity = 1;
    }, 500);
});
