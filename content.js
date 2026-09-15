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


// Change the sprite
function setSprite(image, width) {
    cat.style.backgroundImage =
        `url("${chrome.runtime.getURL(image)}")`;

    cat.style.backgroundRepeat = "no-repeat";
    cat.style.backgroundSize = `${width}px 100px`;
}


// Currently running behavior
let currentAction = null;


// Change behavior
function play(action, image, width) {

    // Stop previous behavior
    if (currentAction) {
        currentAction.stop();
    }

    // Change sprite
    setSprite(image, width);

    // Start new behavior
    currentAction = action(cat);
}


// Start with idle
play(
    lay,
    "cat/Cat-6-laying.png",
    800
);