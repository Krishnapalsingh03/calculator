
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentIndex = 0;
let visibleItems = [...galleryItems]; 


galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
        const currentImg = item.querySelector('img');

        currentIndex = visibleItems.indexOf(item);
        showImage(currentIndex);
        lightbox.style.display = 'flex';
    });
});

function showImage(index) {
    const imgUrl = visibleItems[index].querySelector('img').src;
    lightboxImg.src = imgUrl;
}


nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % visibleItems.length;
    showImage(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    showImage(currentIndex);
});


closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});


filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        
        visibleItems = []; 
        galleryItems.forEach(item => {
            const category = item.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                item.style.display = 'block';
                visibleItems.push(item);
            } else {
                item.style.display = 'none';
            }
        });
    });
});


lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.style.display = 'none';
});