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

// TODO: create a limit click for 1 cycle game and refresh button
let playerSection = document.querySelectorAll(".player-area ul li");
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
        let gameResultArea = document.querySelector("#result");
        gameResultArea.classList.add(
            "d-flex",
            "align-items-center",
            "justify-content-center",
            "rotate"
        );

        let gameResult = document.querySelector(".hasil");
        gameResult.innerHTML = result;
        gameResult.classList.add("game-result");
        if (result == "com win" || result == "player 1 win") {
            gameResult.classList.add("game-result-win");
        } else {
            gameResult.classList.add("game-result-draw");
        }

        gameResult.style.cssText = "text-transform: uppercase;";
        gameResult.classList.replace("vs", "game-result");
    });
});
