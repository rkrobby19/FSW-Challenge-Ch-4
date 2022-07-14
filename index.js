let getComSelection = () => {
    const randomNumber = Math.random(); // get random number for selection
    // assign the number
    if (randomNumber <= 0.33) return "batu";
    if (randomNumber > 0.33 && randomNumber <= 0.67) return "kertas";
    return "gunting";
};
let gameResult = (playerSelection, getComSelection) => {
    // set the game rules
    if (playerSelection == getComSelection) return "seri";
    if (playerSelection == "batu")
        return getComSelection == "gunting" ? "player win" : "com win";
    if (playerSelection == "kertas")
        return getComSelection == "batu" ? "player win" : "com win";
    if (playerSelection == "gunting")
        return getComSelection == "kertas" ? "player win" : "com win";
};
