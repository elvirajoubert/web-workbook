var p1;
var p2;

p1 = prompt("Rock, Paper, Scissors");
p2 = prompt("Rock, Paper, Scissors");

function rps(p1, p2){
if (p1 === p2) {
    document.write("It's a tie!" + " " + "Let's play again");
} else if (p1 === "rock" && p2 === "paper") {

    document.write("Player 2 wins");
} else if (p1 === "scissors" && p2 === "paper") {

    document.write("Player 1 wins");
} else if (p1 === "rock" && p2 === "scissors") {

    document.write("Player 1 wins");
}
else if (p1 === "rock" && p2 === "scissors") {

    document.write("Player 1 wins");
}
else if (p1 === "paper" && p2 === "rock") {

    document.write("Player 2 wins");
}
    else if (p1 === "scissors" && p2 === "rock") {

        document.write("Player 2 wins");
    }
}


rps(p1, p2);