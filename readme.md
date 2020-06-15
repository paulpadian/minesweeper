# Objective
* Minesweeper
    * Click boxes to uncover their hidden values, show all the values except for mine locations and you win the game.  Click a bomb box or you loose the game. 

# Wire Frame
![minesweeper wire frame](https://i.imgur.com/pOMw3yX.png)

# MVP
* Create HTML framework
* Create game play Area in js
* populate game play with grid function
* populate bombs pseudo random
* populate numbers around bombs
* increment surrounding 1-8 according to bomb position 
* rest of spaces will be null
* click listeners on (divs or whatever) is utilized
* clear btn/start btn 
    * start button -> timer 
* Display total Bombs
## on-click:
* Check win 
    * if all non bomb squares are cleared to null or number value on click
        * displayWin()
    * function will also need on click
        * blank div will display now w/ number/null
            * if null box clicked check surrounding boxes for null and if null display connecting numbers + nulls
            * if number display only number

* Check loss
    * user clicks bomb box
        * clicked bomb to red
        * display all bombs
        * displayloss();


# Bonus Problems
* Create Grid and populate bombs based on radio selection of easy/medium/hard
    * easy 9x9 10 with 10 bombs
    * medium 16x16 with 40 mines
    * hard 24 x 24 with 99 mines
* Style like OG Microsoft Minesweeper
    * create smiley face for reset and loss
    
* Create Flag functionality for potential bomb squares on left click
* re factor for space/time complexity



## Technologies Utilized 
* Javascript
* HTML
* CSS