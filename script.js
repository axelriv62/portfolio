document.querySelector('.burger-menu').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.animated');

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4;

        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('fade-in');
            } else {
                element.classList.remove('fade-in');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});