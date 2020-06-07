var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

function preload(){}

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  console.log(database)
  form = new Form();
  player = new Player();
  player.update();
}


function draw(){
  form.display();

}
