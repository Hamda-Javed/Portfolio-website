document.addEventListener('DOMContentLoaded', function () {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const fadeInElements = document.querySelectorAll('.fade-in');
        const slideUpElements = document.querySelectorAll('.slide-up');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('hidden');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        fadeInElements.forEach(element => {
            element.classList.add('hidden');
            observer.observe(element);
        });

        slideUpElements.forEach(element => {
            element.classList.add('hidden');
            observer.observe(element);
        });
    });

