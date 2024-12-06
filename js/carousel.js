document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    items[currentIndex].classList.add('active');

    function showNextItem() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }

    function showPreviousItem() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + items.length) % items.length;  
        items[currentIndex].classList.add('active');
    }

    setInterval(showNextItem, 3000);

    document.querySelector('.carousel-prev').addEventListener('click', showPreviousItem);
    document.querySelector('.carousel-next').addEventListener('click', showNextItem);
});
