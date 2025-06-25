const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1 // triggers when 10% of element is visible
});

document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
});