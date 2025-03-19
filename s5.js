document.addEventListener('scroll', () => {
    const header = document.querySelector('.header'); // Select the header
    const scrollPosition = window.scrollY; // Current scroll position

    if (scrollPosition > 300) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".navbar-toggler");
    const navbar = document.querySelector(".header");

    toggleButton.addEventListener("click", () => {
        navbar.classList.toggle("bg-black");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".navbar-toggler");
    const toggleIcon = toggleButton.querySelector(".bi");

    toggleButton.addEventListener("click", () => {
        if (toggleIcon.classList.contains("bi-list")) {
            toggleIcon.classList.remove("bi-list");
            toggleIcon.classList.add("bi-x");
            toggleIcon.style.transform = "rotate(90deg)"; // Animation to rotate
        } else {
            toggleIcon.classList.remove("bi-x");
            toggleIcon.classList.add("bi-list");
            toggleIcon.style.transform = "rotate(0deg)"; // Animation back to original
        }
    });

    toggleButton.addEventListener("transitionend", () => {
        toggleIcon.style.transition = "transform 0.1s ease"; // Smooth animation
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.carousel-item video');

    // Loop through each video and add a click event listener for fullscreen
    videos.forEach(video => {
        video.addEventListener('click', () => {
            // If the video is not already in fullscreen
            if (!document.fullscreenElement) {
                if (video.requestFullscreen) {
                    video.requestFullscreen();
                } else if (video.webkitRequestFullscreen) { // Safari
                    video.webkitRequestFullscreen();
                } else if (video.mozRequestFullScreen) { // Firefox
                    video.mozRequestFullScreen();
                } else if (video.msRequestFullscreen) { // IE/Edge
                    video.msRequestFullscreen();
                }
            } else {
                // If already in fullscreen, exit fullscreen
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) { // Safari
                    document.webkitExitFullscreen();
                } else if (document.mozCancelFullScreen) { // Firefox
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) { // IE/Edge
                    document.msExitFullscreen();
                }
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.items');
    const totalItems = items.length;
    let currentIndex = 0;
    let autoPlayInterval;

    // Helper function to update the carousel
    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.remove('main-pos', 'right-pos', 'left-pos', 'back-pos');

            if (index === currentIndex) {
                item.classList.add('main-pos');
            } else if ((index + 1) % totalItems === currentIndex) {
                item.classList.add('left-pos');
            } else if ((index - 1 + totalItems) % totalItems === currentIndex) {
                item.classList.add('right-pos');
            } else {
                item.classList.add('back-pos');
            }
        });
    }

    // Move to the previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    // Move to the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    // Autoplay functionality
    function startAutoplay() {
        stopAutoplay(); // Stop any existing interval
        autoPlayInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    }

    function stopAutoplay() {
        clearInterval(autoPlayInterval);
    }

    // Attach click events to buttons
    document.getElementById('prev').addEventListener('click', () => {
        prevSlide();
        startAutoplay(); // Restart autoplay on manual interaction
    });

    document.getElementById('next').addEventListener('click', () => {
        nextSlide();
        startAutoplay(); // Restart autoplay on manual interaction
    });

    // Initialize the carousel and autoplay
    updateCarousel();
    startAutoplay();

    // Pause autoplay on hover
    const sliderContainer = document.querySelector('.slider-cont');
    sliderContainer.addEventListener('mouseenter', stopAutoplay);
    sliderContainer.addEventListener('mouseleave', startAutoplay);
});

document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.items video');

    videos.forEach(video => {
        video.addEventListener('click', () => {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) { // For Safari
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) { // For IE/Edge
                video.msRequestFullscreen();
            }
        });
    });
});


const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    // Pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});


// Select the slider track element
const sliderTrack = document.querySelector('.slider-track');

// Add event listeners for hover
sliderTrack.addEventListener('mouseover', () => {
    sliderTrack.style.animationPlayState = 'paused'; // Pause the animation
});

sliderTrack.addEventListener('mouseout', () => {
    sliderTrack.style.animationPlayState = 'running'; // Resume the animation
});


// Select the slider track element
const sliderTrack1 = document.querySelector('.slider-track-reverse');

// Add event listeners for hover
sliderTrack1.addEventListener('mouseover', () => {
    sliderTrack1.style.animationPlayState = 'paused'; // Pause the animation
});

sliderTrack1.addEventListener('mouseout', () => {
    sliderTrack1.style.animationPlayState = 'running'; // Resume the animation
});


// Select the slider track element
const sliderTrack3 = document.querySelector('.slider-track1');

// Add event listeners for hover
sliderTrack3.addEventListener('mouseover', () => {
    sliderTrack3.style.animationPlayState = 'paused'; // Pause the animation
});

sliderTrack3.addEventListener('mouseout', () => {
    sliderTrack3.style.animationPlayState = 'running'; // Resume the animation
});


/* Demo purposes only */
$(".hover").mouseleave(
    function() {
        $(this).removeClass("hover");
    }
);

// Function to check if an element is visible in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Animate percentage text inside circles
function animatePercentageCircles() {
    const circles = document.querySelectorAll(".percentage-circle");
    circles.forEach((circle) => {
        if (isElementInViewport(circle) && !circle.classList.contains("animated")) {
            const targetPercentage = parseInt(circle.getAttribute("data-percentage"));
            let currentPercentage = 0;

            const interval = setInterval(() => {
                if (currentPercentage <= targetPercentage) {
                    circle.textContent = `${currentPercentage}%`;
                    currentPercentage++;
                } else {
                    clearInterval(interval);
                    circle.classList.add("animated");
                }
            }, 20); // Adjust speed here (lower value = faster animation)
        }
    });
}

// Autoplay the carousel
const carouselElement = document.querySelector('#videoCarousel');
const carousel = new bootstrap.Carousel(carouselElement, {
    interval: 5000, // Change slide every 5 seconds
    ride: 'carousel' // Start autoplay on load
});

// Animate progress circle outline
function animateProgressCircle() {
    const progressCircle = document.querySelector(".progress-circle");
    if (progressCircle) {
        const progress = document.querySelector(".progress");
        const percentage = document.querySelector(".percentage");

        const circleTop = progressCircle.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (circleTop < windowHeight && circleTop > 0) {
            // Calculate the scroll-based percentage but cap it at 63
            const scrollPercent = Math.min(((windowHeight - circleTop) / windowHeight) * 100, 63);
            const circlePercent = Math.floor(scrollPercent); // Ensure integer values
            const offset = 283 - (circlePercent / 100) * 283; // Adjust stroke offset

            progress.style.strokeDashoffset = offset; // Animate the stroke
            percentage.textContent = `${circlePercent}%`; // Update percentage text
        }
    }
}

// Combine scroll listeners
document.addEventListener("scroll", () => {
    animatePercentageCircles();
    animateProgressCircle();
});