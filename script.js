window.addEventListener('load', () => {
    const loader = document.getElementById('loading');
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.fade-first-row').forEach(el => {
    observer.observe(el);
});

document.querySelectorAll('.fade-second-row').forEach(el => {
    observer.observe(el);
});