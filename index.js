let getComSelection = () => {
    const randomNumber = Math.random(); // get random number for selection
    // assign the number
    if (randomNumber <= 0.33) return "batu";
    if (randomNumber > 0.33 && randomNumber <= 0.67) return "kertas";
    return "gunting";
};
let gameRules = (playerSelection, comSelection) => {
    // set the game rules
    if (playerSelection == comSelection) return "seri";
    if (playerSelection == "batu")
        return comSelection == "gunting" ? "player win" : "com win";
    if (playerSelection == "kertas")
        return comSelection == "batu" ? "player win" : "com win";
    if (playerSelection == "gunting")
        return comSelection == "kertas" ? "player win" : "com win";
};

let playerSelectionBatu = document.querySelector("#batu");
playerSelectionBatu.addEventListener("click", () => {
    alert("oke");
    const comSelection = getComSelection();
    const playerSelection = playerSelectionBatu.id;
    const result = gameRules(playerSelection, comSelection);
    // select player active
    playerSelectionBatu.classList.add("active");
    // select com active
    let comSelect = document.querySelector("#com-" + comSelection);
    comSelect.classList.add("active");
    // select result
    let gameResult = document.querySelector("#result");
    gameResult.classList.add("active");
    let textResult = document.querySelector(".hasil");
    textResult.innerHTML = result;
    textResult.classList.replace("vs", "game-result");
    // reset button
    let reset = document.querySelector("#reset");
    reset.addEventListener("click", () => {
        playerSelectionBatu.classList.remove("active");
        comSelect.classList.remove("active");
        gameResult.classList.remove("active");
        textResult.innerHTML = "vs";
        textResult.classList.replace("game-result", "vs");
    });
});
