const width = 1600;
const height = 1000;
const targetFrameRate = 20;
const fontsize = 50;
const message = "Tina";

// set the gap between letters and the left and top margin so that you can accurately set the parameters
const gap = 40;
const margin = 20;
const displacementAmount = 100;

const COLORS = {
  background: "#F5F3F5"
};

const colors = [
  "#6A5D93",
  "#F2B453",
  "#C74C63",
  "#E5803F",
  "#F5F3F5"
];
// const hoverFill = "#ed225d";
// const normalFill = "#FFFFFF";

let currentFill = colors[0];
let currentColorIndex = 0;
let font;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  // font = loadFont("assets/Roboto-Light.ttf"); // Lighter, OK performance
  // font = loadFont("assets/Adamas-Regular.otf"); // Heavier, Worse performance
  font = loadFont("assets/London.ttf"); //
}

function setup() {
  cnv = createCanvas(width, height);
  cnv.mouseMoved(onMouseOver);
  // cnv.mouseOut(onMouseOut);

  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);

  frameRate(targetFrameRate);
}

function onMouseOver() {
  // cvn.background = COLORS.stem;
  currentFill = colors[currentColorIndex++];
  if (currentColorIndex >= colors.length) currentColorIndex = 0;
}

function onMouseOut() {
  currentFill = colors[currentColorIndex++];
  if (currentColorIndex >= colors.length) currentColorIndex = 0;
}

function draw() {
  translate(margin * 4, margin * 4);
  // drawLetters();
  drawMessage(message);
}

function drawMessage(msg) {
  // frameRate(targetFrameRate - 10);
  fill(currentFill);

  // loop as long as there is space on the canvas
  for (y = 0; y < height - gap - margin; y += gap) {
    for (x = 0; x < width - gap - margin; x += gap * msg.length) {
      // draw the message to the screen so that you start to view content
      // variable for content is for (let i = 0; i < msg.length; i++) {
        text(
          msg,//msg[i],
          x + random(displacementAmount),
          y + random(displacementAmount)
        );
      // }
    }
  }
}

function drawMessageInGroups(msg) {
  // frameRate(targetFrameRate - 10);
  fill(currentFill);

  // for loop as long as there is space on the canvas to fill screen
  for (y = 0; y < height - gap - margin; y += gap + displacementAmount) {
    for (x = 0; x < width - gap - margin; x += gap + displacementAmount) {
      // draw the message to the screen 
      for (let i = 0; i < msg.length; i++) {
        text(
          msg[i],
          x + random(displacementAmount),
          y + random(displacementAmount)
        );
      }
    }
  }
}

function drawLetters() {
  // set the counter to start at the character you want
  // in this case 35, which is the # symbol
  let counter = 35;
  fill(currentFill);

  // Loop as long as there is space on the canvas
  for (y = 0; y < height - gap - margin; y += gap) {
    for (x = 0; x < width - gap - margin; x += gap) {
      // Use the counter to retrieve individual letters by their Unicode number
      let letter = char(counter);

      // // add different color to the vowels and other characters
      // if (
      //   letter == "A" ||
      //   letter == "E" ||
      //   letter == "I" ||
      //   letter == "O" ||
      //   letter == "U"
      // ) {
      //   fill("#ed225d");
      // } else {
      //   fill(255);
      // }

      // draw the letter to the screen
      text(
        letter,
        x + random(displacementAmount),
        y + random(displacementAmount)
      );

      // increment the counter
      counter++;
    }
  }
}
