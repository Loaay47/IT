function openVideo() {
    const popup = document.getElementById("videoPopup");
    const iframe = document.getElementById("videoFrame");

    iframe.src = "https://www.youtube.com/embed/9NZ57JsXJKs?autoplay=1";
    popup.style.display = "flex";
}

function closeVideo() {
    const popup = document.getElementById("videoPopup");
    const iframe = document.getElementById("videoFrame");

    iframe.src = ""; // Reset to stop video
    popup.style.display = "none";
}
