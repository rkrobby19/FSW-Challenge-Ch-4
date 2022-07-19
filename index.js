// TODO: create OOP
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

// TODO: little adjusment on refresh button looping logic for counter
let playerSection = document.querySelectorAll(".player-area button");
let counter = 1;

playerSection.forEach((select) => {
    select.addEventListener("click", () => {
        if (counter % 2 !== 0) {
            const comSelection = getComSelection();
            const playerSelection = select.id;
            const result = gameRules(playerSelection, comSelection);
            alert(`yes, ${playerSelection} got clicked`);

            // * set player active
            let playerSelect = document.querySelector("#" + playerSelection);
            playerSelect.classList.add("active");

            // TODO: create looping background for chosing animation if possible
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

            // ! click counter
            counter = counter + 1;
            console.log(counter);

            // * reset button
            let reset = document.getElementById("reset");
            reset.addEventListener("click", () => {
                // * set player active

                playerSelect.classList.remove("active");

                // * set com select active

                comSelect.classList.remove("active");

                // * set game result

                gameResultArea.classList.remove(
                    "d-flex",
                    "align-items-center",
                    "justify-content-center",
                    "rotate"
                );

                gameResult.innerHTML = "vs";

                if (result == "com win" || result == "player 1 win") {
                    gameResult.classList.remove("game-result-win");
                } else {
                    gameResult.classList.remove("game-result-draw");
                }
                gameResult.style.cssText = "text-transform: uppercase;";
                gameResult.classList.replace("game-result", "vs");

                // ! counter
                counter = 1;
                console.log(counter);
            });
        }
    });
});
