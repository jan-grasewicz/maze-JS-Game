'use strict'

//game
let player1Node
let player2Node

function play(whichMaze=maze002){
  removeKeyboardScrolling()
  window.addEventListener("keydown", handleUserInput);
  generateBoard(whichMaze);
  let startNode = document.querySelector('.start');
  let endNode = document.querySelector('.end');
  spawnEntity('treasure', endNode);
  spawnEntity('player1', startNode);
  spawnEntity('player2', startNode);
  player1Node = document.querySelector('.player1');
  player2Node = document.querySelector('.player2');
}

play()
//sandbox

