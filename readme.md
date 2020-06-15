# Objective
* Minesweeper
    * Click boxes to uncover their hidden values, show all the values except for mine locations and you win the game.  Click a bomb box or you loose the game. 

# Wire Frame
![minesweeper wire frame](https://i.imgur.com/pOMw3yX.png)

# MVP
* Create HTML framework - done
* Create game play Area in js - done
* populate game play with grid function - done
* populate bombs pseudo random - done
* populate numbers around bombs - done
* increment surrounding 1-8 according to bomb position  - done
* rest of spaces will be null - done
* click listeners on (divs or whatever) is utilized - done
* clear btn/start btn switch - done
    * start button -> timer  - done
* Display total Bombs - done
## on-click:
* Check win - done
    * if all non bomb squares are cleared to null or number value on click - done
        * displayWin() - done
    * function will also need on click
        * blank div will display now w/ number/null - done
            * if null box clicked check surrounding boxes for null and if null display connecting numbers + nulls - done
            * if number display only number - done

* Check loss
    * user clicks bomb box
        * clicked bomb to black X - done
        * display all bombs - done
        * displayloss(); - done 


# Bonus Problems
* Create Grid and populate bombs based on radio selection of easy/medium/hard
    * easy 9x9 10 with 10 bombs -written to scale later
    * medium 16x16 with 40 mines
    * hard 24 x 24 with 99 mines 
* Style like OG Microsoft Minesweeper
    * create smiley face for reset and loss
    * make mobile friendly - done
    
* Create Flag functionality for potential bomb squares on left click
* re factor for space/time complexity



## Technologies Utilized 
* Javascript
* HTML
* CSS