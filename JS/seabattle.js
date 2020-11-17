let loc1 = Math.floor(Math.random() * 5);
let loc2 = loc1 + 1;
let loc3 = loc2 + 1;
let guess_num;
let hits = 0;
let total_guesses = 0;
let isSunk = false;

alert("This ship has 3 cells. Hit all of them to win!")

while (isSunk == false) {
    guess_num = prompt("Fire! (enter a number from 0-6):");
    if (guess_num < 0 || guess_num > 6 ) {
        alert("Please enter a valid cell number!");
    } else {
        total_guesses += 1;
        if (guess_num == loc1 || guess_num == loc2 || guess_num == loc3){
            hits += 1;
            alert("HIT!")
        } else {
            alert("MISS!")
        }
        if (hits == 3){
            isSunk = true;
            alert("Ship sunk!")
        }
    }
}
alert(`Your stats\nTotal guesses: ${total_guesses}\nAccuracy:${((3/total_guesses)*100).toFixed(0)}`)