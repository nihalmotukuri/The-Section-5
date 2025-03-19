const header = document.querySelector('.header');
        let lastScrollPosition = 0;

        // Show/Hide Header on Scroll
        window.addEventListener('scroll', () => {
            const currentScrollPosition = window.scrollY;
            if (currentScrollPosition > lastScrollPosition) {
                header.classList.add('hidden');
                header.classList.remove('visible');
            } else {
                header.classList.add('visible');
                header.classList.remove('hidden');
            }
            lastScrollPosition = currentScrollPosition;
        });


        document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.items');
    const totalItems = items.length;
    let currentIndex = 0;

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

    // Attach click events to buttons
    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Move backward
        updateCarousel();
    });

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems; // Move forward
        updateCarousel();
    });

    // Initialize the carousel
    updateCarousel();
});


document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.querySelector('#navbarDropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', () => {
        if (dropdownMenu.classList.contains('show')) {
            // Hide dropdown
            dropdownMenu.classList.remove('show');
        } else {
            // Show dropdown with animation
            dropdownMenu.classList.add('show');
        }
    });
});