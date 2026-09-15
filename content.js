const cat = document.createElement("div");

cat.style.position = "fixed";
cat.style.bottom = "20px";
cat.style.left = "20px";

cat.style.width = "100px";
cat.style.height = "100px";

cat.style.imageRendering = "pixelated";
cat.style.zIndex = "2147483647";
cat.style.pointerEvents = "none";

document.body.appendChild(cat);


// ======================
// Animation controller
// ======================

function setSprite(image, width) {
    cat.style.backgroundImage =
        `url("${chrome.runtime.getURL(image)}")`;

    cat.style.backgroundRepeat = "no-repeat";
    cat.style.backgroundSize = `${width}px 100px`;
}


// ======================
// Start idle
// ======================

setSprite("cat/Cat-6-Idle.png", 1000);

let currentAction = idle(cat);