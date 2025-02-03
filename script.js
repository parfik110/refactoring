document.addEventListener('DOMContentLoaded', function() {
    
    const galleries = {
        tickets1: {
            images: ["images/vangog1.svg", "images/vangog2.svg"],
            dates: ["17/07 - 17/08", "20/06 - 20/07"],
            texts: [
                "Vincent Van Gogh was born in Holland in 1853. Before becoming a painter he was a teacher. Finally, on Sunday 27th July 1890, Van Gogh died in his brother's arms.",
                "Vincent Van Gogh was born in Holland in 1853. Before becoming a painter he was a teacher. Van Gogh died in his brother's arms.",
            ]
        },
        tickets2: {
            images: ["images/picture.svg", "images/picture1.svg"],
            dates: ["22/10 - 22/12", "12/09 - 16/09"],
            texts: [
                "Vincent Van Gogh was born in Holland in 1853. Before becoming a painter he was a teacher. Finally, on Sunday 27th July 1890, Van Gogh died in his brother's arms.",
                "He started painting when he was twenty-seven. In 1886 he left Holland and joined his young brother Theo.",
            ]
        },
        paintings: {
            images: ["images/galary.svg", "images/picture1.svg"]
        }
    };
    

    let currentIndex = 0, currentIndex1=0, currentIndex2=0;

    const imageElement = document.getElementById('gallery-image');
    const dateElement = document.getElementById('gallery-date');
    const textElement = document.getElementById('gallery-text');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const imageElement1 = document.getElementById('gallery-image1');
    const dateElement1 = document.getElementById('gallery-date1');
    const textElement1 = document.getElementById('gallery-text1');
    const prevButton1 = document.getElementById('prev-button1');
    const nextButton1 = document.getElementById('next-button1');
    const prevButton2 = document.getElementById('prev-button2');
    const nextButton2 = document.getElementById('next-button2');
    const imageElement2 = document.getElementById('gallery-image2');
    const buttons=document.querySelectorAll('.button');

    const elements = {
        1: {
            image: document.getElementById('gallery-image'),
            date: document.getElementById('gallery-date'),
            text: document.getElementById('gallery-text')
        },
        2: {
            image: document.getElementById('gallery-image1'),
            date: document.getElementById('gallery-date1'),
            text: document.getElementById('gallery-text1')
        },
        3: {
            image: document.getElementById('gallery-image2'),
            date: null, 
            text: null
        }
    };
    
    const indices = { 1: 0, 2: 0, 3: 0 };
    
    function updateGallery(index, number, galleryKey) {
        const el = elements[number];
        const gallery = galleries[galleryKey];
    
        if (!el || !gallery) return;
    
        el.image.src = gallery.images[index];
        if (el.date && gallery.dates) el.date.textContent = gallery.dates[index];
        if (el.text && gallery.texts) el.text.textContent = gallery.texts[index];
    
        indices[number] = index;
    }

    function updateDots(index) {
        const dots = document.querySelectorAll('.dots-container:last-child .dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function toggleButtonState(passiveButton, activeButton) {
        activeButton.classList.add('active');
        activeButton.classList.remove('passive');
        passiveButton.classList.remove('active');
        passiveButton.classList.add('passive');
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? currentIndex  : currentIndex - 1;
        updateGallery(currentIndex);
        toggleButtonState(prevButton, nextButton); 
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex === images.length - 1) ? currentIndex  : currentIndex + 1;
        updateGallery(currentIndex);
        toggleButtonState(nextButton, prevButton);  
    });
    prevButton1.addEventListener('click', function() {
        currentIndex1 = (currentIndex1 === 0) ? currentIndex1  : currentIndex1 - 1;
        updateGallery1(currentIndex1);
        toggleButtonState(prevButton1, nextButton1); 
    });

    nextButton1.addEventListener('click', function() {
        currentIndex1 = (currentIndex1 === images1.length - 1) ? currentIndex1  : currentIndex1 + 1;
        updateGallery1(currentIndex1);
        toggleButtonState(nextButton1, prevButton1);  
    });
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            window.location.reload();
        });
    });
    prevButton2.addEventListener('click', function(){
        currentIndex2=(currentIndex2 === 0) ? images2.length-1 : currentIndex2-1;
        updateGallery2(currentIndex2);  

    });
    nextButton2.addEventListener('click', function() {
        currentIndex2 = (currentIndex2 === images2.length - 1) ? 0 : currentIndex2 + 1;
        updateGallery2(currentIndex2); 
    });
});