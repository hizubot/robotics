function changeTitle() {
    document.getElementById("slide-title").style.display = "none";
    document.getElementById("slide-device").style.display = "flex";
}
window.onload = function() {
    setTimeout(changeTitle, 1000);
};
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".device:nth-child(3)").addEventListener("click", function () {
        document.getElementById("slide-device").style.display = "none";
        document.getElementById("slide-activities").style.display = "flex";
    });
});