const btn = document.getElementById("btn");
const mainTitle = document.getElementById("main-title");

function handleClick() {
    console.log("cliquer...");
    mainTitle.textContent = "Titre modifié après clic !"; 
}

btn.addEventListener("click", handleClick); 
console.log("test ...", btn);