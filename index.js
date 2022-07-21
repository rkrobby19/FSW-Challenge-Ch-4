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
        if (player.choice == com.choice) return "draw";
        if (player.choice == "batu")
            return com.choice == "gunting" ? "player 1 win" : "com win";
        if (player.choice == "kertas")
            return com.choice == "batu" ? "player 1 win" : "com win";
        if (player.choice == "gunting")
            return com.choice == "kertas" ? "player 1 win" : "com win";
    }

    setActive(player, com) {
        let p = document.getElementById(player.choice);
        let c = document.getElementById("com-" + com.choice);
        p.classList.add("active");
        c.classList.add("active");
    }
    setRefresh(player, com) {
        let p = document.getElementById(player.choice);
        let c = document.getElementById("com-" + com.choice);
        p.classList.remove("active");
        c.classList.remove("active");
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
            console.log(playerSelect);
            alert(`${playerSelect} got clicked`);
            // * com choice
            let comSelect = com.getCompChoice();
            // let comChoose = com.getPlayerChoice(comSelect);
            console.log(comSelect);
            // * enter the game play
            let result = play.gameResult(player1, com);
            play.setActive(player1, com);
            console.log(result);
            // ! counter check for limiting click
            console.log(counter);
            counter++;
        } else {
            // ! for alert and limiting click
            alert("please refresh");
            console.log(counter);
            // play.setRefresh(player1, com);
            //counter--;
        }
    });
});
