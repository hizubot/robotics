const slides = [
    {   //Slide 1
        image: "srcs/img2/img2_1.png",
        text: `Learn how to drive the mBot2 with precision.`,
        className: "anim-move-up"
    },
    {   //Slide 2
        video: "srcs/img2/img2_2.mp4",
        text: `What kind of movements do you know?<br>
        Can you give more examples?`,
        className: ""
    },
    {   //Slide 3
        image: "srcs/img2/img2_3.png",
        text: `To start coding, turn on your mBot2.<br>
        Remember to turn it off at the end of the class.`,
        className: ""
    },
    {   //Slide 4
        image: "srcs/img2/img2_4.png",
        text: `<div>Open <a href='https://ide.mblock.cc' target='_blank' rel='noopener noreferrer'>mBlock IDE</a>, press <strong>Ctrl+Tab</strong> to return here.<br>
        What is an IDE?</div>`,
        className: ""
    },
    {   //Slide 5
        image: "srcs/img2/img2_5.png",
        text: `This is mBlock IDE.<br>
        Let’s review the principal areas.`,
        className: ""
    },
    {   //Slide 6
        image: "srcs/img2/img2_6.png",
        text: `In the Devices area, Delete CyberPi and Add mBot2.`,
        className: ""
    },
    {   //Slide 7
        image: "srcs/img2/img2_7.png",
        text: `Click Bluetooth, select your mBot2 and Pair.<br>
        You should be in Live mode.`,
        className: ""
    },
    {   //Slide 8
        image: "srcs/img2/img2_8.png",
        text: `<div>Open Setting and activate <strong>Block Area Fixed Pattern</strong>.<br>
        Now you always see the available blocks.</div>`,
        className: ""
    },
    {   //Slide 9
        image: "srcs/img2/img2_9.png",
        text: `Create your mBlock account!<br>
        Click in Panda icon and select Google.`,
        className: ""
    },
    {   //Slide 10
        image: "srcs/img2/img2_10.png",
        text: `Select your Markham account and continue the process.<br>
        You will see your profile icon.`,
        className: ""
    },
    {   //Slide 11
        image: "srcs/img2/img2_11.png",
        text: `<div>Click <strong>play hi until done</strong> block.<br>
        What does mBot2 do?<div>`,
        className: ""
    },
    {   //Slide 12
        image: "srcs/img2/img2_12.png",
        text: `Change the name of your project and click Save.<br>
        There are more options in File menu.`,
        className: ""
    },
];

const imageCache = [];
let currentSlide = 0;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("slide-total").textContent = slides.length;
    preloadMedia();
    updateSlide();
});

function preloadMedia() {
    slides.forEach((slide, index) => {
        if (slide.image) {
            imageCache[index] = new Image();
            imageCache[index].src = slide.image;
        }
    });
    const extraImage = new Image();
    extraImage.src = "srcs/trophy.png";
}

function updateSlide() {
    const container = document.querySelector(".image-center");
    let mediaElement = document.getElementById("slide-media");
    const currentSlideData = slides[currentSlide];

    if (currentSlideData.video) {
        if (!mediaElement || mediaElement.tagName !== "VIDEO") {
            container.innerHTML = `<video id="slide-media" autoplay loop muted playsinline></video>`;
            mediaElement = document.getElementById("slide-media");
        }
        mediaElement.src = currentSlideData.video;
    } 
    else if (currentSlideData.image) {
        if (!mediaElement || mediaElement.tagName !== "IMG") {
            container.innerHTML = `<img id="slide-media" alt="Slide media">`;
            mediaElement = document.getElementById("slide-media");
        }
        mediaElement.src = currentSlideData.image;
    }

    let textElement = document.getElementById("slide-text");
    textElement.innerHTML = currentSlideData.text;
    textElement.style.backgroundColor = "white";
    textElement.style.color = "black";

    document.getElementById("slide-number").textContent = String(currentSlide + 1).padStart(2, '0');
    mediaElement.className = currentSlideData.className || "";
}

function endSlide() {
    const container = document.querySelector(".image-center");
    let mediaElement = document.getElementById("slide-media");

    if (!mediaElement || mediaElement.tagName !== "IMG") {
        container.innerHTML = `<img id="slide-media" alt="End slide image">`;
        mediaElement = document.getElementById("slide-media");
    }

    mediaElement.src = "srcs/trophy.png";
    mediaElement.className = "anim-glow-shake";

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