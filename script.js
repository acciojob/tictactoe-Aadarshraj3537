//your JS code here. If required.
let player1 = "";
let player2 = "";
let currentPlayer = "X";
let currentName = "";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = false;

document.getElementById("submit").addEventListener("click", () => {
    player1 = document.getElementById("player-1").value.trim();
    player2 = document.getElementById("player-2").value.trim();

    if (player1 === "" || player2 === "") {
        alert("Please enter names for both players.");
        return;
    }

    gameActive = true;
    currentName = player1;
    
    document.getElementById("player-form").style.display = "none";
    document.getElementById("game").style.display = "block";

    document.querySelector(".message").textContent = `${currentName}, you're up!`;
});

// Handle Cell Clicks
document.query
