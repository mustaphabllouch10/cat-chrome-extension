const animalSelect = document.getElementById("animalSelect");
const spawnButton = document.getElementById("spawnButton");

spawnButton.addEventListener("click", async () => {

    const selectedAnimal = animalSelect.value;

    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    chrome.tabs.sendMessage(tab.id, {
        type: "SPAWN_ANIMAL",
        animal: selectedAnimal
    });

});