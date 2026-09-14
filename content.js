const cat = document.createElement("div");

cat.style.position = "fixed";
cat.style.bottom = "20px";
cat.style.right = "20px";

cat.style.width = "100px";
cat.style.height = "100px";

cat.style.backgroundImage = `url("${chrome.runtime.getURL("cat/Cat-6-Idle.png")}")`;
cat.style.backgroundRepeat = "no-repeat";
cat.style.backgroundSize = "1000px 100px";

cat.style.imageRendering = "pixelated";
cat.style.zIndex = "2147483647";
cat.style.pointerEvents = "none";

document.body.appendChild(cat);

let frame = 0;

setInterval(() => {
    frame++;

    if (frame >= 10) {
        frame = 0;
    }

    cat.style.backgroundPosition = `-${frame * 100}px 0px`;
}, 150);