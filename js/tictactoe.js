"use strict";
/*******************************************************
 *     tictactoe.js - 50p.
 *
 *     When you fought Dr. DOM today, to me it looked like two super heroes playing
 *     TIC TAC TOE! At times, it was hard to tell, who would have won which fight...
 *
 *     To solve my misfortune, please write a little program, that takes a (hard-coded)
 *     two-dimensional Array (BATTLEFIELD) and checks if one of the two opponents has
 *     won the battle, and if so, how (vertical, horizontal, main-diagonal, anti-diagonal).
 *
 *     Since you have already had a couple of encounters of different severities, I simply
 *     can't translate all your battles to TIC TAC TOE matches of the same size.
 *     For that reason, your little program should be written in a way, that it can
 *     scale with the size of the battlefield (3x3, 4x4, ..., nxn).
 *
 *     Idris Algül - 2026-03-15
 *******************************************************/

const X = "Savior (X)";
const O = "Dr. DOM (O)";

//Some of your epic battles:
const BATTLEFIELD =
    [
        [O, X, O],
        [X, X, X],
        [O, O, X],
    ];
// const BATTLEFIELD =
//     [
//         [null, X, X],
//         [X, O, null],
//         [O, O, O],
//     ];
// const BATTLEFIELD =
//     [
//         [O, O, X],
//         [X, O, X],
//         [O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X],
//         [X, O, X],
//         [O, X, O],
//     ];
//
// const BATTLEFIELD =
//     [
//         [O, X, X, X],
//         [X, O, X, O],
//         [O, X, O, X],
//         [X, O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X, X, null],
//         [X, O, X, O, O],
//         [O, X, O, null,  X],
//         [X, null, X, O, O],
//         [X, null, O, X, O],
//     ];

//TODO: Check if the battle is over, and if so, announce the winner!

let length = BATTLEFIELD.length;        // Feldgröße herausfinden

// Check Horizontal
for (let i = 0; i < length; i++) {      //jede Zeile durchgehen
    let first = BATTLEFIELD[i][0];              // ganz link in dieser Zeile merken

    for (let j = 0; j < length; j++) { // alle felder in der zeile durchgehen nach rechts
        if (BATTLEFIELD[i][j] !== first) {     // jedes feld vergleichen
            first = null;                      // wenn anderes zeichen gefunden dann gewinner löschen
        }
    }

    if (first !== null) {                       // Wenn die Zeilen gleich sind hat diese Reihe gewonnen
        console.log(first + " has won horizontal!");
    }
}

// Check Vertical
for (let j = 0; j < length; j++) {
    let first = BATTLEFIELD[0][j];

    for (let i = 0; i < length; i++) {
        if (BATTLEFIELD[i][j] !== first) {
            first = null;
        }
    }

    if (first !== null) {
        console.log(first + " has won vertical!");
    }
}

//Check Main Diagonal
let winnerMain = BATTLEFIELD[0][0];

for (let i = 0; i < length; i++) {
    if (BATTLEFIELD[i][i] !== winnerMain) {
        winnerMain = null;
    }
}

if (winnerMain !== null) {
    console.log(winnerMain + " has won main diagonal!");
}

//Check Anti Diagonal
let winnerAnti = BATTLEFIELD[0][length - 1];

for (let i = 0; i < length; i++) {
    if (BATTLEFIELD[i][length - 1 - i] !== winnerAnti) {
        winnerAnti = null; 
    }
}

if (winnerAnti !== null) {
    console.log(winnerAnti + " has won anti diagonal!");
}