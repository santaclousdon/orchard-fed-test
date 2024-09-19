import '../scss/main.scss';

// Import images
const image1 = require('../images/Image-01.jpg');
const image2 = require('../images/Image-02.jpg');
const image3 = require('../images/Image-03.jpg');
const image4 = require('../images/Image-04.jpg');
const image5 = require('../images/Image-05.jpg');
const image6 = require('../images/Image-06.jpg');

document.addEventListener('DOMContentLoaded', function () {
    console.log('Images imported:', image1, image2);

    // Example: Dynamically setting images in the DOM
    const imgElement1 = document.querySelector('.image1');
    const imgElement2 = document.querySelector('.image2');
    const imgElement3 = document.querySelector('.image3');
    const imgElement4 = document.querySelector('.image4');
    const imgElement5 = document.querySelector('.image5');
    const imgElement6 = document.querySelector('.image6');

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
});