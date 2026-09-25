// =============================
// ELEMENTS
// =============================

const envelope = document.getElementById("envelope");
const gallery = document.getElementById("gallery");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let opened = false;

// =============================
// OPEN ENVELOPE
// =============================

envelope.addEventListener("click", () => {

    if(opened) return;

    opened = true;

    // Open envelope
    envelope.classList.add("open");

    // Show scrapbook after envelope opens
    setTimeout(() => {

        gallery.classList.add("show");

        gallery.scrollIntoView({
            behavior:"smooth"
        });

    },1200);

});
