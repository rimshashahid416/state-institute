// ============================================================
// State Institute Of Professional Studies — custom.js
// ============================================================

// Gallery slider
var swiper = new Swiper('.mySwiper', {
    spaceBetween: 30,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

// Swap the mobile nav icon between menu / close so the toggle state is obvious
document.addEventListener('DOMContentLoaded', function () {
    var toggler = document.querySelector('.navbar-toggler');
    var navPanel = document.getElementById('navbarScroll');
    var icon = document.querySelector('.nav-toggle-icon');

    if (toggler && navPanel && icon) {
        navPanel.addEventListener('show.bs.collapse', function () {
            icon.classList.remove('ri-menu-3-line');
            icon.classList.add('ri-close-line');
        });
        navPanel.addEventListener('hide.bs.collapse', function () {
            icon.classList.remove('ri-close-line');
            icon.classList.add('ri-menu-3-line');
        });

        // Close the mobile menu automatically after a nav link is tapped
        navPanel.querySelectorAll('.nav-link').forEach(function (link) {
            link.addEventListener('click', function () {
                if (navPanel.classList.contains('show') && window.bootstrap) {
                    bootstrap.Collapse.getOrCreateInstance(navPanel).hide();
                }
            });
        });
    }

    // Footer year
    var yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});