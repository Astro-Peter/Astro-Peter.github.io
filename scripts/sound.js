var soundID = "Thunder";

function loadSound () {
  createjs.Sound.registerSound("assets/thunder.mp3", soundID);
}

function playSound () {
  createjs.Sound.play(soundID);
}