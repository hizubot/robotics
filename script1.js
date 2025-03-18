const slides = [
    {   //Slide 1
        image: "srcs/img1/img1_1.png",
        text: `This is mBot2, an educational robot!<br>
        What is a robot? Do you know other robots?`,
        shake: true
    },
    {   //Slide 2
        image: "srcs/img1/img1_2.png",
        text: `Let’s review the principal components of mBot2.<br>
        How many of them do you recognize?`,
        shake: false
    },
    {   //Slide 3
        image: "srcs/img1/img1_3.png",
        text: `To start coding, turn on your mBot2.<br>
        Remember to turn it off at the end of the class.`,
        shake: false
    },
    {   //Slide 4
        image: "srcs/img1/img1_4.png",
        text: `<div>Open <a href='https://ide.mblock.cc' target='_blank' rel='noopener noreferrer'>mBlock IDE</a>, press <strong>Ctrl+Tab</strong> to return here.<br>
        What is an IDE?</div>`,
        shake: false
    },
    {   //Slide 5
        image: "srcs/img1/img1_5.png",
        text: `This is mBlock IDE.<br>
        Let’s review the principal areas.`,
        shake: false
    },
    {   //Slide 6
        image: "srcs/img1/img1_6.png",
        text: `In the Devices area, Delete CyberPi and Add mBot2.`,
        shake: false
    },
    {   //Slide 7
        image: "srcs/img1/img1_7.png",
        text: `Click Bluetooth, select your mBot2 and Pair.<br>
        You should be in Live mode.`,
        shake: false
    },
    {   //Slide 8
        image: "srcs/img1/img1_8.png",
        text: `<div>Open Setting and activate <strong>Block Area Fixed Pattern</strong>.<br>
        Now you always see the available blocks.</div>`,
        shake: false
    },
    {   //Slide 9
        image: "srcs/img1/img1_9.png",
        text: `Create your mBlock account!<br>
        Click in Panda icon and select Google.`,
        shake: false
    },
    {   //Slide 10
        image: "srcs/img1/img1_10.png",
        text: `Select your Markham account and continue the process.<br>
        You will see your profile icon.`,
        shake: false
    },
    {   //Slide 11
        image: "srcs/img1/img1_11.png",
        text: `<div>Click <strong>play hi until done</strong> block.<br>
        What does mBot2 do?<div>`,
        shake: false
    },
    {   //Slide 12
        image: "srcs/img1/img1_12.png",
        text: `Change the name of your project and click Save.<br>
        There are more options in File menu.`,
        shake: false
    },
];

const imageCache = [];
let currentSlide = 0;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("slide-total").textContent = slides.length;
    preloadImages();
    updateSlide();
});

function preloadImages() {
    slides.forEach((slide, index) => {
        imageCache[index] = new Image();
        imageCache[index].src = slide.image;
    });
    const extraImage = new Image();
    extraImage.src = "srcs/trophy.png";
}

function updateSlide() {
    const imgElement = document.getElementById("slide-image");
    imgElement.src = slides[currentSlide].image;

    let textElement = document.getElementById("slide-text");
    textElement.innerHTML = slides[currentSlide].text;
    textElement.style.backgroundColor = "white";
    textElement.style.color = "black";

    document.getElementById("slide-number").textContent = String(currentSlide + 1).padStart(2, '0');

    imgElement.classList.remove("image-glow");
    if (slides[currentSlide].shake) {
        imgElement.classList.add("image-shake");
    } else {
        imgElement.classList.remove("image-shake");
    }
}

function endSlide() {
    const imgElement = document.getElementById("slide-image");
    imgElement.src = "srcs/trophy.png";
    imgElement.classList.add("image-glow");
    let rootStyles = getComputedStyle(document.documentElement);
    let colorBlue = rootStyles.getPropertyValue("--color-blue").trim();
    let textElement = document.getElementById("slide-text");
    textElement.innerHTML = "🎉 Congratulations! 🎉<br>You have successfully completed all the steps! 🚀";
    textElement.style.backgroundColor = colorBlue;
    textElement.style.color = "white";
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlide();
    } else {
        endSlide();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
}