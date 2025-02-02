// Log message when the page loads
console.log("UGC Portfolio Page Loaded!");

// Function to handle section clicks
document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll(".section");
    
    sections.forEach(section => {
        section.addEventListener("click", function () {
            console.log("Clicked on section: " + section.id);
        });
    });

    // Auto-play video when hovered
    let video = document.querySelector("#about video");
    if (video) {
        video.addEventListener("mouseenter", function () {
            video.play();
        });
        video.addEventListener("mouseleave", function () {
            video.pause();
        });
    }
});
