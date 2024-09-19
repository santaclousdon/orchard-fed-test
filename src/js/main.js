import '../scss/main.scss';

// Import images
const image1 = require('../images/Image-01.jpg');
const image2 = require('../images/Image-02.jpg');
const image3 = require('../images/Image-03.jpg');
const image4 = require('../images/Image-04.jpg');
const image5 = require('../images/Image-05.jpg');
const image6 = require('../images/Image-06.jpg');
const image1_2x = require('../images/Image-01_2x.jpg');
const image2_2x = require('../images/Image-02_2x.jpg');
const image3_2x = require('../images/Image-03_2x.jpg');
const image4_2x = require('../images/Image-04_2x.jpg');
const image5_2x = require('../images/Image-05_2x.jpg');
const image6_2x = require('../images/Image-06_2x.jpg');

document.addEventListener('DOMContentLoaded', function () {
    console.log('Images imported:', image1, image2);

    // Example: Dynamically setting images in the DOM
    const imgElement1 = document.querySelector('.image1');
    const imgElement2 = document.querySelector('.image2');
    const imgElement3 = document.querySelector('.image3');
    const imgElement4 = document.querySelector('.image4');
    const imgElement5 = document.querySelector('.image5');
    const imgElement6 = document.querySelector('.image6');
    const imgElement1_2x = document.querySelector('.image1_2x');
    const imgElement2_2x = document.querySelector('.image2_2x');
    const imgElement3_2x = document.querySelector('.image3_2x');
    const imgElement4_2x = document.querySelector('.image4_2x');
    const imgElement5_2x = document.querySelector('.image5_2x');
    const imgElement6_2x = document.querySelector('.image6_2x');

    if (imgElement1) {
        imgElement1.src = image1;
    }

    if (imgElement2) {
        imgElement2.src = image2;
    }

    if (imgElement3) {
        imgElement3.src = image3;
    }

    if (imgElement4) {
        imgElement4.src = image4;
    }

    if (imgElement5) {
        imgElement5.src = image5;
    }

    if (imgElement6) {
        imgElement6.src = image6;
    }

    if (imgElement1_2x) {
        imgElement1_2x.src = image1_2x;
    }

    if (imgElement2_2x) {
        imgElement2_2x.src = image2_2x;
    }

    if (imgElement3_2x) {
        imgElement3_2x.src = image3_2x;
    }

    if (imgElement4_2x) {
        imgElement4_2x.src = image4_2x;
    }

    if (imgElement5_2x) {
        imgElement5_2x.src = image5_2x;
    }

    if (imgElement6_2x) {
        imgElement6_2x.src = image6_2x;
    }

    // Modal logic
    const modals = document.querySelectorAll('.modal');
    const images = document.querySelectorAll('.thumbnail');
    const modalImages = document.querySelectorAll('.modal-content');

    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            modals[index].style.display = 'block';
            modalImages[index].src = image.querySelector('img').src;
        });
    });

    modals.forEach((modal, index) => {
        modal.querySelector('.close').addEventListener('click', ()  => {
            modal.style.display = 'none';
        });
    });
});