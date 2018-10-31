# RGB Color Guessing Game

## Table of Contents

* [Instructions](#instructions)
* [Introduction](#introduction)
* [Working](#working)

## Instructions

In order to start playing this game, one must have to do the following:
1. Clone the project, where you want to locally keep the files.
2. Once cloned, start the game using the index.html file.
3. Running the game requires internet (to fetch the RGB color guide link).

## Introduction

As the name suggests, this is a color guessing game. The player will initially be presented with 3x2 matrix. All 6 squares wil have different colors. A hash-code (color code) will be displayed on the top of the squares. The player have to select which square represents the color to win.

The game have 2 modes, easy and hard. Initially, the game starts with hard mode which have 3x2 matrix (total 6 sqaures). And, in easy mode the player is presented only 3 cubes. The rules remains the same, guess the correct square which have the same color as shown above the squares. 

## Working

This game is entirely based on Javascript. For both the modes, easy or hard the colors of the squares are choosen dynamically, i.e., every time the game starts the squares have different colors. 

Sometimes the colors on the squares are very identical. To ensure the gameplay efficiently, another functionality that has been integrated to this game that is, a new color button is present in the game. Clicking that button will change the color of all the squares irrespective of the mode the player is playing into. 

In order to help the player guess the color eaily, a link to the wikipedia's RGB color index has also been provided.
