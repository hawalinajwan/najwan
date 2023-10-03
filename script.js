
const gallery = document.getElementById('gallery');
const images = gallery.querySelectorAll('img');

images.forEach((img) => {
img.addEventListener('mousemove', handleMove);
img.addEventListener('mouseout', handleMouseOut);
img.addEventListener('mousedown', handleMouseDown);
img.addEventListener('mouseup', handleMouseUp);
});

function handleMove(e) {
const image = e.currentTarget;
const width = image.clientWidth;
const height = image.clientHeight;
const xVal = e.layerX;
const yVal = e.layerY;
const yRotation = 20 * ((xVal - width / 2) / width);
const xRotation = -20 * ((yVal - height / 2) / height);
const transformString =
    'perspective(500px) scale(1.1) rotateX(' +
    xRotation +
    'deg) rotateY(' +
    yRotation +
    'deg)';
image.style.transform = transformString;
}

function handleMouseOut(e) {
const image = e.currentTarget;
image.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
}

function handleMouseDown(e) {
const image = e.currentTarget;
image.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)';
}

function handleMouseUp(e) {
const image = e.currentTarget;
image.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)';
}




console.log('zetaw')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));




document.addEventListener("DOMContentLoaded", function () {
    const scrollDownButton = document.querySelector(".about-me-button");
    const aboutSection = document.getElementById("about");

    scrollDownButton.addEventListener("click", function (e) {
        e.preventDefault();
        aboutSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const cloud = document.getElementById("cloud");
    const clouds2 = document.getElementById("cloud2");
    const aboutSection = document.getElementById("about");

    function showCloud() {
        cloud.style.left = "170%";
    }

    function hideCloud() {
        cloud.style.left = "0";
    }


    function showClouds2() {
        clouds2.style.right = "-80%";
    }

    function hideClouds2() {
        clouds2.style.right = "0";
    }
   
  

    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                showCloud();
                showClouds2(); 
            } else {
                hideCloud();
                hideClouds2();
            }
        });
    });

    aboutObserver.observe(aboutSection);
});

