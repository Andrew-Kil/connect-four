# rules

player:

- player 1 starts first

board:

- 7 columns
- 6 rows

- multi-dimensional array
  - 0 for empty spaces
  - 1 for player 1
  - 2 for player 2

win-condition:

- 4 in a row
  - vertically, horizontally, diagonally
  
tie-condition:
- 42 turns have been played with no 4 in a row win conditions

## to-do

logic:
- add diagonal win conditions
  - atm it only accounts for downwards diagonals (left to right); need to add upwards diagonals (left to right)
- refactor diagonal win conditions
- update win conditions to consider tie

ui:
- replace O with empty 
- replace 1 with red token
- replace 2 with yellow token
- replace column buttons with ability to click anywhere on the column to drop the token
