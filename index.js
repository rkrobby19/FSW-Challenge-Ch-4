let getComSelection = () => {
    const randomNumber = Math.random(); // get random number for selection
    // assign the number
    if (randomNumber <= 0.33) return "batu";
    if (randomNumber > 0.33 && randomNumber <= 0.67) return "kertas";
    return "gunting";
};
let gameRules = (playerSelection, comSelection) => {
    // set the game rules
    if (playerSelection == comSelection) return "draw";
    if (playerSelection == "batu")
        return comSelection == "gunting" ? "player 1 win" : "com win";
    if (playerSelection == "kertas")
        return comSelection == "batu" ? "player 1 win" : "com win";
    if (playerSelection == "gunting")
        return comSelection == "kertas" ? "player 1 win" : "com win";
};

// TODO create a limit click and refresh button
let playerSection = document.querySelectorAll(".player div");
playerSection.forEach((select) => {
    select.addEventListener("click", () => {
        const comSelection = getComSelection();
        const playerSelection = select.id;
        const result = gameRules(playerSelection, comSelection);
        alert(`yes, ${playerSelection} got clicked`);

        // * set player active
        let playerSelect = document.querySelector("#" + playerSelection);

        playerSelect.classList.add("active");
        // * set com select active
        let comSelect = document.querySelector("#com-" + comSelection);

        comSelect.classList.add("active");
        // * set game result
        // TODO set the text layout
        let gameResultArea = document.querySelector("#result");
        gameResultArea.classList.add(
            "game-result-active",
            "d-flex",
            "align-items-center",
            "justify-content-center"
        );

        let gameResult = document.querySelector(".hasil");
        gameResult.innerHTML = result;
        gameResult.style.cssText = "text-transform: uppercase;";
        gameResult.classList.replace("vs", "game-result");
    });
});
/*
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
*/
