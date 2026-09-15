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


// Start walking

const currentAction = walk(cat);