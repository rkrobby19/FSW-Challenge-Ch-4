// * create object
class player {
    constructor() {
        this.choice = null;
    }
    getPlayerChoice(choice) {
        this.choice = choice;
    }
}
class comp extends player {
    constructor() {
        super();
    }
    getCompChoice() {
        let choices = ["batu", "kertas", "gunting"];
        let select = choices[Math.floor(Math.random() * choices.length)];
        return (this.choice = select);
    }
}
class game {
    constructor(player, com) {
        // ? what is this mean
        this.player = player;
        this.com = com;
        this.result = null;
        // ? why null
        this.p = player.choice;
        this.c = com.choice;

        // * DOM selector
        this.playerSelection = document.querySelectorAll(".player-area button");
        this.comSection = document.querySelectorAll(".com-area button");
        this.textBox = document.querySelector("#result");
        this.textArea = document.querySelector(".hasil");
    }

    gameResult(player, com) {
        if (player.choice == com.choice) return (this.result = "draw");
        if (player.choice == "batu")
            return com.choice == "gunting"
                ? (this.result = "player 1 win")
                : (this.result = "com win");
        if (player.choice == "kertas")
            return com.choice == "batu"
                ? (this.result = "player 1 win")
                : (this.result = "com win");
        if (player.choice == "gunting")
            return com.choice == "kertas"
                ? (this.result = "player 1 win")
                : (this.result = "com win");
    }

    setActive(player, com) {
        let p = document.getElementById(player.choice);
        let c = document.getElementById("com-" + com.choice);
        p.classList.add("active");
        c.classList.add("active");
        this.textBox.classList.add("rotate");
        this.textArea.innerHTML = this.result;
        if (this.result == "draw") {
            this.textArea.classList.replace("vs", "game-result");
            this.textBox.classList.add("game-result-draw");
        } else {
            this.textArea.classList.replace("vs", "game-result");
            this.textBox.classList.add("game-result-win");
        }
    }
    setRefresh(player, com) {
        let p = document.getElementById(player.choice);
        let c = document.getElementById("com-" + com.choice);
        p.classList.remove("active");
        c.classList.remove("active");
        this.textBox.classList.remove("rotate");
        this.textArea.innerHTML = "vs";
        if (this.result == "draw") {
            this.textArea.classList.replace("game-result", "vs");
            this.textBox.classList.remove("game-result-draw");
        } else {
            this.textArea.classList.replace("game-result", "vs");
            this.textBox.classList.remove("game-result-win");
        }
    }
}

// * initiate player
let player1 = new player();
let com = new comp();
let play = new game(player1, com);

// * get the player selection
let counter = 0;
let playerSelect = document.querySelectorAll(".player-area button");
playerSelect.forEach((select) => {
    select.addEventListener("click", () => {
        if (counter == 0) {
            // * player choice
            let playerSelect = select.id;
            player1.getPlayerChoice(playerSelect);
            console.log(`Player 1 : ${playerSelect}`);
            alert(`you click ${playerSelect}`);
            // * com choice
            let comSelect = com.getCompChoice();
            console.log(`Com : ${comSelect}`);
            // * enter the game play
            let result = play.gameResult(player1, com);
            console.log(`Result : ${result}`);
            play.setActive(player1, com);
            // ! counter check for limiting click
            counter++;
        } else {
            // ! for alert limit click
            alert("Please click the refresh button !");
        }
    });
});

// * refresh button
let refresh = document.getElementById("refresh");
refresh.addEventListener("click", () => {
    play.setRefresh(player1, com);
    counter = 0;
});
