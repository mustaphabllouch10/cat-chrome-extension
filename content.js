const cat = document.createElement("div");

cat.style.position = "fixed";
cat.style.bottom = "20px";
cat.style.left = "20px";

cat.style.width = "100px";
cat.style.height = "100px";

cat.style.backgroundImage = `url("${chrome.runtime.getURL("cat/Cat-6-Walk.png")}")`;
cat.style.backgroundRepeat = "no-repeat";
cat.style.backgroundSize = "800px 100px";

cat.style.imageRendering = "pixelated";
cat.style.zIndex = "2147483647";
cat.style.pointerEvents = "none";

document.body.appendChild(cat);


// ======================
// Animation
// ======================

let frame = 0;

setInterval(() => {
    frame++;

    if (frame >= 8) {
        frame = 0;
    }

    cat.style.backgroundPosition = `-${frame * 100}px 0px`;
}, 120);


// ======================
// Movement
// ======================

let position = 20;
let direction = 1;

setInterval(() => {
    position += 2 * direction;

    const maxPosition = window.innerWidth - 120;

    if (position >= maxPosition) {
        position = maxPosition;
        direction = -1;
    }

    if (position <= 20) {
        position = 20;
        direction = 1;
    }

    cat.style.left = `${position}px`;
}, 100);