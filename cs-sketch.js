/*
  Authors: Anoosha Ahmed, Dalisa Nguyen, Erik Truong, Bijay Shrestha

  Contact Information:
  anooshaahmed@csu.fullerton.edu,
  dalisan@csu.fullerton.edu,
  eriktruong@csu.fullerton,
  sthavjay@csu.fullerton.edu

  Description: This is a version of the TP ant x15. The ant turns left or right
  depending on the state of the grid and color that it is currently on. It then
  increments the state of the grid and changes the color. There is a trianlge with
  its nose touching the edge where the head is looking at.


  We also used this link of code to help us along with the professor's code:
  https://github.com/CodingTrain/website/blob/master/CodingChallenges/CC_089_langtonsant/P5/sketch.js
*/

let grid;
let x;
let y;
let dir;
let counter = 0; // to see what move it is on

// for the direction of the ant
let ANTUP = 0;
let ANTRIGHT = 1;
let ANTDOWN = 2;
let ANTLEFT = 3;
var g_canvas = { cell_size:10, wid:41, hgt:41 }; // JS Global var, w canvas size info.
var g_frame_cnt = 0; // Setup a P5 display-frame counter, to do anim
var g_frame_mod = 50; // Update ever 'mod' frames.
var g_stop = 0; // Go by default.


function setup() {
  let sz = g_canvas.cell_size;
  let width = sz * g_canvas.wid;  // Our 'canvas' uses cells of given size, not 1x1 pixels.
  let height = sz * g_canvas.hgt;
  createCanvas( width, height );  // Make a P5 canvas.
  draw_grid( 10, 50, 'white', 'yellow' );
  grid = make2DArray(width, height);
  x = width / 2;
  y = height / 2;
  dir = ANTUP;
}



var g_bot = { dir:ANTUP, x:20, y:20, color:'white'}; // Dir is 0..3, w 0 up.
var g_box = { t:1, hgt:40, l:1, wid:40}; // Box in which bot can move.

// This moves the bot using the state of the grid/color
function move_bot() {
    let state = grid[g_bot.x][g_bot.y];
    // To show on the console the number of moves and what color and grid state
    console.log("Move number = " + counter);
    console.log(" Before grid[g_bot.x][g_bot.y] = " + grid[g_bot.x][g_bot.y]);
    console.log(" Before state = " + state);
    console.log(" Before color = " + g_bot.color);
    //Checks the state of the grid in order to increment the next color and move
    switch(state) {
      case 0: { //Black
        g_bot.color = 'Red'
        grid[g_bot.x][g_bot.y] = 1;
        draw_bot();
        turnLeft();
        break;
      }
      case 1: { //Red
       g_bot.color = 'Yellow'
       grid[g_bot.x][g_bot.y] = 2;
       draw_bot();
       turnRight();
       break;
      }
      case 2: { // Yellow
        g_bot.color = 'Blue'
        grid[g_bot.x][g_bot.y] = 3;
        draw_bot();
        turnLeft();
        break;
      }
      case 3: { // Blue
       g_bot.color = 'Green'
       grid[g_bot.x][g_bot.y] = 4;
       draw_bot();
       turnRight();
       break;
      }
      case 4: { // Green
       g_bot.color = 'Black'
       grid[g_bot.x][g_bot.y] = 0;
       draw_bot();
       turnLeft();

       break;
      }
    }
    // Show on console what the color and grid states change to.
    console.log(" After grid[g_bot.x][g_bot.y] = " + grid[g_bot.x][g_bot.y]);
    console.log(" After state = " + state);
    console.log(" After color = " + g_bot.color);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    counter++;

}

function draw_bot(){
  let sz = g_canvas.cell_size;
  let sz2 = sz / 2;
  let x = 1+ g_bot.x*sz; // Set x one pixel inside the sz-by-sz cell.
  let y = 1+ g_bot.y*sz;
  let big = sz -2; // Stay inside cell walls.
  // Fill with the bot's current color
  fill(g_bot.color);

  let acolors = get( x + sz2, y + sz2 ); // Get cell interior pixel color [RGBA] array.
  let pix = acolors[ 0 ] + acolors[ 1 ] + acolors[ 2 ];
  // Paint the cell.
  rect( x, y, big, big );

  switch(g_bot.dir){
      case 0: { // Triangle head is North
        fill('White');
        noStroke();
        beginShape();
        vertex(x+4,y);    //Top vertex 1
        vertex(x+2,y+6); //Left vertex 2
        vertex(x+6,y+6); // Right vertex 3
        endShape();
        break;
      }
      case 1: { //Triangle head is East
        fill('White');
        noStroke();
        beginShape();
        vertex(x+8,y+4); //Top vertex 1
        vertex(x+2,y+2); //Left vertex 2
        vertex(x+2,y+6); // Right vertex 3
        endShape();
        break;
      }
      case 2: { //Triangle head is South
        fill('White');
        noStroke();
        beginShape();
        vertex(x+4,y+8); //Top vertex 1
        vertex(x+2,y+2); //Left vertex 2
        vertex(x+6,y+2); // Right vertex 3
        endShape();
        break;
      }
      case 3:{  //Triangle head is West
        fill('White');
        noStroke();
        beginShape();
        vertex(x,y+4);  //Top vertex 1
        vertex(x+6,y+2); //Left vertex 2
        vertex(x+6,y+6); // Right vertex 3
        endShape();
        break;
      }
  }
}

//Ant direction set to right
function turnRight() {
  g_bot.dir++;
  if(g_bot.dir > ANTLEFT) {
    g_bot.dir = ANTUP;
  }
  moveForward();
}

//Ant direction set to left
function turnLeft() {
  g_bot.dir--;
  if (g_bot.dir < ANTUP) {
    g_bot.dir = ANTLEFT;
  }
  moveForward();
}

//Ant moves forward in the direction it is facing
function moveForward() {
  if (g_bot.dir == ANTUP) {
    g_bot.y--;
  } else if (g_bot.dir == ANTRIGHT) {
    g_bot.x++;
  } else if (g_bot.dir == ANTDOWN) {
    g_bot.y++;
  } else if (g_bot.dir == ANTLEFT) {
    g_bot.x--;
  }

  if (x > width - 1) {
    x = 0;
  } else if (x < 0) {
    x = width - 1;
  }
  if (y > height - 1) {
    y = 0;
  } else if (y < 0) {
    y = height - 1;
  }
}

function draw()  // P5 Frame Re-draw Fcn, Called for Every Frame.
{
    ++g_frame_cnt;
    if (0 == g_frame_cnt % g_frame_mod)
    {
        if (!g_stop) draw_update();
    }
}

function draw_update()  // Update our display.
{
    //console.log( "g_frame_cnt = " + g_frame_cnt );
    move_bot();
}

// creates grid for ant to move on
function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = 0;
    }
  }
  return arr;
}

function keyPressed( )
{
    g_stop = ! g_stop;
}

function mousePressed( )
{
    let x = mouseX;
    let y = mouseY;
    //console.log( "mouse x,y = " + x + "," + y );
    let sz = g_canvas.cell_size;
    let gridx = round( (x-0.5) / sz );
    let gridy = round( (y-0.5) / sz );
    //console.log( "grid x,y = " + gridx + "," + gridy );
    //console.log( "box wid,hgt = " + g_box.wid + "," + g_box.hgt );
    g_bot.x = gridx + g_box.wid; // Ensure its positive.
    //console.log( "bot x = " + g_bot.x );
    g_bot.x %= g_box.wid; // Wrap to fit box.
    g_bot.y = gridy + g_box.hgt;
    //console.log( "bot y = " + g_bot.y );
    g_bot.y %= g_box.hgt;
    //console.log( "bot x,y = " + g_bot.x + "," + g_bot.y );
    draw_bot();
}
