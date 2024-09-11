const btn = document.getElementById("btn");
const mainTitle = document.getElementById("main-title");

function handleClick(e) {
    console.log("cliquer...");
    mainTitle.textContent = "Titre modifié après clic !"; 
}

btn.addEventListener("click", handleClick); 
console.log("test ...", btn);