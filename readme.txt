CPSC 335-02 
Project 1: Cella Ant #x15
Team Oranges: Anoosha Ahmed, Erik Truong, Dalisa Nguyen, Bijaya Shrestha
---------------------------------------------------------------------------
Intro:

This program displays a generational progress of Turk and Proop's (TP) Ant #x15. The program starts by creating a 41 by 41 square grid with all black cells. The ant is placed at the center and is set to head up north. The ant can be of 5 different colors and each color is associated with a number which represents the 5 states of each cell. Black=0 → Red=1 → Yellow=2 → Blue=3 → Green=4. The ant turns right on red/blue and turns left on black/yellow/green. In addition, an ant (a triangle) sits on each of each color and points towards the direction the ant is moving.  

Algorithm: The way we tackled this code was by creating switch statements in the move_bot() function. This algortihms changes the color of the bot to the next color (if it is black go to red) and update the state of the bot on the gird for example: grid[g_bot.x][g_bot.y] = 1. The switch statements also call the draw_bot() and either turnRight() or turnLeft() function. The functions turnRight() and turnLeft() work by incrementing/decrementing the direction of the ant and by calling the moveForward() function. 

---------------------------------------------------------------------------

Contents: The zip folder contains the following files: 

1. readme.txt. This file

2. cs-sketch.js. This file contains the algorithm we came up with. It contains several P5 user-defined linkage functions (for example: setup, draw, keyPressed, and mousePressed) as well as the function we worked on (for example: move_bot(), draw_bot(), moveForward() etc). 

3. index-js-p5: Drag and drop this into a browser to run the program. Click to set new loc for drunk-bot (via mousePressed). Hit (almost) any key to toggle bot on or off (via keyPressed).

4. p5.js. This is the P5 package.  It is loaded inside the html.

5. image1: A snapshot of the Cella Ant #x15 webpage

6. image2: A webpage + F12 Console. Shows various control mechanisms we used to debug the program (example states/color RGB)

7. assests/style.css: This is loaded inside the HTML and it is used to control the webpage syle. 

8. Big O Analysis.pdf: Contains Big O Analysis of the program 

9. assests/draw-stuff.js: This file loads a JS scripts file from a folder other than the index HTML file's folder location. It also includes the utility draw_grid function. written in P5+JS and Lloaded inside the html.

---------------------------------------------------------------------------

Installation & Running

1. Extract the .zip file into a folder.

2. Drag the index HTML file, index-js-p5-html, into a browser window. The program should start immediately.You should see a 41x41 grid (white lines on black background) with row/column headers and some of the grid cells colored.See the image1.JPG.

---------------------------------------------------------------------------

Known Bugs

o- Bot cell drawing over-writes a pixels-worth of the cell's grid lines.

o- The triangle moves in the right direction but it does not delete the previous one. The cell is redrawn everytime the triangle revisits the same cell. 

---------------------------------------------------------------------------

Warnings

o- Clicking outside the grid wraps the mouse x.y back into the grid -- maybe at a weird-looking spot.  Enjoy.

o- Testing was light.  Didn't try all key or mouse combos.

---------------------------------------------------------------------------

Testing

o- Following installation instruction, above, watched it run, and tried a few keypresses and mouse clicks.  Looks okay to ship.

o- Used the console log to make sure the states/color go in the correct direction.  

---------------------------------------------------------------------------

Credits

Some code was borrowed and modified from Stuart's book.Introducing JavaScript Game Development: Build a 2D Game from the Ground Up, by Graeme Stuart, 2018, 209 pages.

Files borrowed from the example provided by the professor. 

Idea borrowed from: https://thecodingtrain.com/CodingChallenges/089-langtonsant.html

Some code was borrowed from: https://github.com/omareq/omareq.github.io/blob/master/langtons-ant/sketch.js

Some help: https://github.com/CodingTrain/website/blob/master/CodingChallenges/CC_089_langtonsant/P5/sketch.js

And, of course, thanks to the HTML and P5.js developers.



