/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

//Global Constants

const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback
const patternLength = 6; 
const noOfButtons = 9;


// Global Variables

var pattern = []; //Keeps track of the secret pattern
var progress = 0; //how far along the player is in guessing the pattern
var gamePlaying = false;  //keeps track of whether the game is currently active true: Start false: lose or win or STOP
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0 
var guessCounter = 0;
var clueHoldTime = 1000;
var noOfMistakes = 0;
var refresh = false;
var seconds = 15;
var timerId;


function startGame(){
  
  //RESET hearts to red 
  var hearts = document.getElementsByClassName("fa-heart")
  for(var i = 0; i < hearts. length; i++){
    hearts[i]. style.color = "red";
  }
  createPattern();
  //initialize game variables
  noOfMistakes = 0;
  progress = 0;
  gamePlaying = true;
  // Swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  clueHoldTime = 1000;
    
}


function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  refresh = true;
}

// Lighting or Clearing a button
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}
// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 150,
  6: 230,
  7: 500,
  8: 80, 
  9: 700
  
}

//Plays a tone for the amount of time specified 
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

//Tone will keep playing until you call stopTone
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)


//Playing a single clue
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

//Playing a clue sequence
function playClueSequence(){
  
  //SPEED UP Clue Playback
  clueHoldTime -= (clueHoldTime) / pattern.length * 2.5;
  
  if(clueHoldTime <= 200){
    clueHoldTime = 200; 
  }
  
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")  //for each clue we are scheduling the playSingleClue function to run in the future
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue, using delay to keep a running total of how long in the future to play the next clue 
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  seconds = 15;
  refresh = false;
  clearInterval(timerId);
  timerId = setInterval(timer, 1000); 
  
}

//Win/Loss notifications
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("You've defeated me, You Win.");
}

//Handling Guesses
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
        refresh = true;
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  }else{
      //Guess was incorrect
    //GAME OVER: LOSE!
    noOfMistakes ++; 
    document.getElementById("heart" + noOfMistakes).style.color="gray";
    
    if(noOfMistakes === 3){
      loseGame();
      refresh = true;
    }
    else{
      alert("OOPS! Wrong block, try again :( ");
    }


  }
  
}
  
function createPattern() {
  for(let i=0; i<patternLength; i++) {
    pattern.push(Math.floor(Math.random() * noOfButtons + 1));
  }
  return pattern;
}    

function timer() {
  document.getElementById("timer").innerHTML = seconds + " seconds";
  seconds -= 1;
  if (seconds < -1 || refresh){
    if(!refresh){ 
      loseGame();
    }
    resetTimer();
    clearInterval(timerId); //Stops timer
  }
  
}

function resetTimer(){
  seconds = 15;
  document.getElementById("timer").innerHTML =  seconds + " seconds";
}

