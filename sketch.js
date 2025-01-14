let dice = [];
let numberOfDice = 10;
let savedtime = 0;
let totaltime = 20000; 


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numberOfDice; i++) {
    dice[i] = new Die(100); // argument is the size of the die
  }
  savedtime = millis();
}

function draw() {
  background("lightblue");
  text("Roll All The Same Number Before Time Runs Out!", 600, 100)
  text("Press any key to roll all of the die. Click a die to stop rolling it.", 600, 300)
  // loop over the array and place+display each die
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i]; // 'die' is a temporary variable for the current array item
    die.place(die.size*1.2*i+die.size, die.size*2); // place the die neatly in the row
      die.display();} // actually draw it on screen

      let passedtime = millis() - savedtime;
  if (passedtime > totaltime) {
    console.log("thirty seconds have passed!");
    background("red");
    text("Time Is Up!", 100, 100)
    //savedtime = millis();
}
}


function mouseClicked() {
  // loop over the array of dice...
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i];
    // if the cursor is over the current die, freeze/unfreeze that die
    if (die.isTouched(mouseX,mouseY)) {
      die.toggleFreeze();
    }
  }
}

// for computers...
function keyPressed() {
  shakeDice();
}

// for phones...
function deviceShaken() {
  shakeDice();
}

// loop over the array of dice and try to roll each one in turn
// (note that a die won't actually roll if it's frozen)
// also, output the list of values to the console
function shakeDice() {
  let list = "values: ";
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i];
    die.roll();
    list = list + die.value + " ";
  }
  console.log(list);
}