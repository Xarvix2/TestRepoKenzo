const btn = document.getElementById("btn");
const mainTitle = document.getElementById("main-title");

function handleClick(e) {
    console.log("cliquer...");
    mainTitle.textContent = "Titre modifié après clic !"; // Changer le titre ici
}

btn.addEventListener("click", handleClick); // Correction de l'addEventListener
console.log("test ...", btn);