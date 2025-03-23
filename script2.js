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
        text: `What makes mBot2 move?`,
        className: "anim-shake"
    },
    {   //Slide 4
        image: "srcs/img2/img2_4.png",
        text: `The mBot2 uses two encoder motors to move!<br>
        Where else do you find motors?`,
        className: ""
    },
    {   //Slide 5
        video: "srcs/img2/img2_5.mp4",
        text: `Let’s start coding!<br>
        Create a program that moves forward the mBot2.`,
        className: ""
    },
    {   //Slide 6
        image: "srcs/img2/img2_6.png",
        text: `Drag the following blocks to the workspace.<br>
        What happens when you press the Button A in mBot2?`,
        className: ""
    },
    {   //Slide 7
        image: "srcs/img2/img2_7.png",
        text: `Let’s modify the speed!<br>
        What happens when you change RPM to 30?<br>
        What does RPM mean?`,
        className: ""
    },
    {   //Slide 8
        video: "srcs/img2/img2_8.mp4",
        text: `At same time, more speed is more distance!`,
        className: ""
    },
    {   //Slide 9
        image: "srcs/img2/img2_9.png",
        text: `Let’s modify the time!<br>
        What happens when you change secs to 2?`,
        className: ""
    },
    {   //Slide 10
        video: "srcs/img2/img2_10.mp4",
        text: `At same speed, more time is more distance!`,
        className: ""
    },
    {   //Slide 11
        video: "srcs/img2/img2_11.mp4",
        text: `Can mBot2 return to the starting point?`,
        className: ""
    },
    {   //Slide 12
        image: "srcs/img2/img2_12.png",
        text: `Add a new block and change to moves backward.<br>
        Use the same speed and time.`,
        className: ""
    },
    {   //Slide 13
        image: "srcs/img2/img2_1.png",
        text: `Create a program that makes mBot2 turn right.`,
        className: "anim-rotate"
    },
    {   //Slide 14
        image: "srcs/img2/img2_14.png",
        text: `Drag the following blocks to the workspace.<br>
        What happens when you press the Button B in mBot2?`,
        className: ""
    },
    {   //Slide 15
        video: "srcs/img2/img2_15.mp4",
        text: `One robot was programmed to turn right and the other turn left.<br>
        Which mBot2 moves clockwise?`,
        className: ""
    },
    {   //Slide 16
        image: "srcs/img2/img2_16.png",
        text: `Change RPM and secs to make mBot2 turn right 90 degrees.`,
        className: ""
    },
    {   //Slide 17
        image: "srcs/img2/img2_17.png",
        text: `<div><strong>Challenge:</<strong> Move mBot2 in the following shape.</div>`,
        className: ""
    },
    {   //Slide 18
        video: "srcs/img2/img2_18.mp4",
        text: `Can mBot2 do more complex movements?`,
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