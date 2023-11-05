let data = JSON.parse(localStorage.getItem("video"));

function playVideo(data) {
    let play = document.getElementById("play");
    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${data.videoId}?autoplay=1&mute=1`;
    iframe.height = "100%";
    iframe.width = "100%";
    iframe.setAttribute = ("allowfullscreen", true);
    play.appendChild(iframe);
}
playVideo(data);

let sidebarOpen = true; // Start with the sidebar closed by default
const sidebar = document.getElementById("sidebar");
const play = document.getElementById("play");

// Function to open or close the sidebar and adjust the play's grid-template-columns
function toggleSidebar() {
    sidebarOpen = !sidebarOpen;

    if (sidebarOpen) {
        sidebar.style.width = "17%";
        play.style.marginLeft = "18.5%";
        play.style.gridTemplateColumns = "repeat(3, 1fr)";
    } else {
        sidebar.style.width = "0";
        play.style.marginLeft = "0";
        play.style.gridTemplateColumns = "repeat(4, 1fr)";
    }

    // Adjust play's width to occupy the full screen when the sidebar is closed
    // if (!sidebarOpen) {
    //     play.style.width = "100%";
    // } else {
    //     play.style.width = "80%";
    // }
}