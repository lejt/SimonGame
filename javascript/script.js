// --------------------------- constants --------------------------------
const sliderSettings = {
  0: {
      wordColor: "rgb(59, 11, 77)",
      m1Show: "block",
      m2Show: "none",
      m3Show: "none",
      background: "linear-gradient(#e66465, #192177)",
      flashSpeed: 500,
      intervalSpeed: 700,
      playerUnhighlight: 200,
      stroke1: "#17164d",
      stroke2: "#062c74",
      stroke3: "#f50808",
      stroke4: "#045e1f",
      stroke5: "#c4981f",
  },
  50: {
      wordColor: "rgb(225, 55, 55)",
      m1Show: "none",
      m2Show: "block",
      m3Show: "none",
      background: "radial-gradient(rgb(22, 1, 29), rgb(104, 15, 15))",
      flashSpeed: 300,
      intervalSpeed: 350,
      playerUnhighlight: 200,
      stroke1: "#801515",
      stroke2: "#bd1919",
      stroke3: "#b42121;",
      stroke4: "#BD0034",
      stroke5: "#FDB731",
  },
  100: {
      wordColor: "rgb(190, 167, 167)",
      m1Show: "none",
      m2Show: "none",
      m3Show: "block",
      floaterShow: "block",
      background: "linear-gradient(#000000, #121858)",
      flashSpeed: 200,
      intervalSpeed: 250,
      playerUnhighlight: 100,
      stroke1: "#203497",
      stroke2: "#6078f0",
      stroke3: "#000000;",
      stroke4: "#37a8a9",
      stroke5: "#16456a",
  },
};

const cellColors = {
  mode1: {
    1: "radial-gradient(rgb(240, 116, 85), red)",
    2: "radial-gradient(rgb(74, 111, 233), blue)",
    3: "radial-gradient(rgb(81, 226, 88), green)",
    4: "radial-gradient(rgb(212, 214, 73), yellow)",
  },
  mode2: {    
    1: "linear-gradient(135deg, rgb(1, 61, 9), rgb(58, 58, 160))",
    2: "linear-gradient(150deg, rgb(100, 3, 68), green)",
    3: "linear-gradient(155deg, rgb(17, 2, 46), yellow)",
    4: "linear-gradient(150deg, rgb(49, 2, 1), pink)",
    5: "linear-gradient(150deg, rgb(1, 34, 3), cyan)",
    6: "linear-gradient(150deg, rgb(3, 7, 70), rgb(255, 153, 0)",
  },
  mode3: {
    1: "rgb(0, 0, 0)",
  },
};

// global countDown object
const countDown = {
  start: function() {
                      let timeRemaining = startState.time;
                      startCountDown = setInterval(function() {
                        timeRemaining--;
                        gameLookup.time.innerText = timeRemaining;        
                        if (timeRemaining === 0) {
                          gameOver();
                        }
                      }, 1000);  
  },
  stop: function() {
                      clearInterval(startCountDown) },
};

// -------------------- cached elements references -----------------------
const gameLookup = {
  slider: document.getElementById("myRange"),
  mode1: {
          cells: document.querySelectorAll(".cell"),
          cell1: document.querySelector(".cell1"),
          cell2: document.querySelector(".cell2"),
          cell3: document.querySelector(".cell3"),
          cell4: document.querySelector(".cell4")
  },
  mode2: {
          modeView: document.querySelector(".mode2"),
          m2cellHolder: document.querySelectorAll(".cell-holder"),
          m2cells: document.querySelectorAll(".m2cell"),
          m2cell1: document.querySelector(".m2cell1"),
          m2cell2: document.querySelector(".m2cell2"),
          m2cell3: document.querySelector(".m2cell3"),
          m2cell4: document.querySelector(".m2cell4"),
          m2cell5: document.querySelector(".m2cell5"),
          m2cell6: document.querySelector(".m2cell6"),
  },
  mode3: {
          modeView: document.querySelector(".mode3"),
          m3cellHolder: document.querySelectorAll(".m3cell-holder"),
          m3cells: document.querySelectorAll(".m3cell"),
          m3cell1: document.querySelector(".m3cell1"),
          m3cell2: document.querySelector(".m3cell2"),
          m3cell3: document.querySelector(".m3cell3"),
          m3cell4: document.querySelector(".m3cell4"),
          m3cell5: document.querySelector(".m3cell5"),
          m3cell6: document.querySelector(".m3cell6"),
          m3cell7: document.querySelector(".m3cell7"),
          m3cell8: document.querySelector(".m3cell8"),
          // bgChange: [document.querySelector("html"), document.querySelector(".mode3Bg2"), document.querySelector(".mode3Bg3")]
  },
  html: document.querySelector("html"),
  time: document.getElementById("time"),
  level: document.getElementById("level"),
  button: document.querySelector("button"),
  gameStatus: document.querySelector(".game-status"),
  gameMsg: document.getElementById("gameMsg"),
  titleColor1: document.querySelector(".text-copy:nth-child(1)"),
  titleColor2: document.querySelector(".text-copy:nth-child(2)"),
  titleColor3: document.querySelector(".text-copy:nth-child(3)"),
  titleColor4: document.querySelector(".text-copy:nth-child(4)"),
  titleColor5: document.querySelector(".text-copy:nth-child(5)"),
  m3floaters: document.querySelectorAll(".floater"),
  m3floaterX: document.querySelectorAll(".x"),
  m3floaterY: document.querySelectorAll(".y"),
};

// ------------------ App's state (Global variables) ---------------------
let startCountDown; 

const gameState = {
  mode: gameLookup.mode1,
  cells: gameLookup.mode1.cells,
  cellLength: gameLookup.mode1.cells.length,
  flashSpeed: sliderSettings[0].flashSpeed,
  intervalSpeed: sliderSettings[0].intervalSpeed,
};

// ------------------------- SLIDER MODE CHANGE ---------------------------
// reads the state of slider upon change and varies game mode style and functions accordingly

sliderValue = "0";
gameLookup.slider.oninput = function () {   
  sliderValue = this.value;
  console.log("Slider Value: "+sliderValue);
  soundStackPlay(sliderSound);
  init();
  if (sliderValue in sliderSettings) {
    gameLookup.gameStatus.style.color = sliderSettings[sliderValue].wordColor;
    gameLookup.mode1.cells.forEach(cell => cell.style.display = sliderSettings[sliderValue].m1Show);
    gameLookup.mode2.modeView.style.display = sliderSettings[sliderValue].m2Show;     
    gameLookup.mode3.modeView.style.display = sliderSettings[sliderValue].m3Show;
    gameLookup.html.style.background = sliderSettings[sliderValue].background; 
    
    // changing title elements' colors:
    gameLookup.titleColor1.style.stroke = sliderSettings[sliderValue].stroke1;
    gameLookup.titleColor2.style.stroke = sliderSettings[sliderValue].stroke2;
    gameLookup.titleColor3.style.stroke = sliderSettings[sliderValue].stroke3;
    gameLookup.titleColor4.style.stroke = sliderSettings[sliderValue].stroke4;
    gameLookup.titleColor5.style.stroke = sliderSettings[sliderValue].stroke5;
  }

  if (sliderValue == "0") {
    gameState.mode = gameLookup.mode1;
    gameState.cells = gameState.mode.cells;
    gameState.flashSpeed = sliderSettings[sliderValue].flashSpeed;
    gameState.intervalSpeed = sliderSettings[sliderValue].intervalSpeed;
    gameState.cellLength = (gameLookup.mode1.cells).length;
  } else if (sliderValue === "50") {
    gameState.mode = gameLookup.mode2;
    gameState.cells = gameState.mode.m2cells;
    gameState.flashSpeed = sliderSettings[sliderValue].flashSpeed;
    gameState.intervalSpeed = sliderSettings[sliderValue].intervalSpeed; 
    gameState.cellLength = (gameLookup.mode2.m2cells).length;
  } else {
    gameState.mode = gameLookup.mode3;
    gameState.cells = gameState.mode.m3cells;
    gameState.flashSpeed = sliderSettings[sliderValue].flashSpeed;
    gameState.intervalSpeed = sliderSettings[sliderValue].intervalSpeed;
    gameState.cellLength = (gameLookup.mode3.m3cells).length;
  };
};

// ---------------- EVENT LISTENERS FOR ALL GAME MODES  -------------------
// event listeners embedded into functions: playerClick(), removeEvents()

// ----------------------------- FUNCTIONS --------------------------------
function init() {
  startState = {
    level: 0,
    time: 60,
  };
  sequenceStorage = {
    correctSeq: [],
    tempCheckSeq: [],
    playerSelect: null,
  };
  countDown.stop();
  gameLookup.gameMsg.style.display = "none";
  gameLookup.button.innerText = "Start Game";
  gameLookup.time.innerText = startState.time;
  gameLookup.level.innerText = startState.level;
  gameLookup.m3floaters.forEach(floater=> {floater.style.display = "none"});
  refreshColors();
  removeEvents();
  bgmArray.forEach(mode => mode.pause());
};

function refreshColors() {
  gameLookup.mode1.cells.forEach(cell=> {
    cell.style.background = cellColors.mode1[cell.id];
  })
  gameLookup.mode2.m2cells.forEach(cell=> {
    cell.style.background = cellColors.mode2[cell.id];
  })
  gameLookup.mode3.m3cells.forEach(cell=> {
    cell.style.background = cellColors.mode3[1];
  })
};

//removes click event listeners 
function removeEvents() {
  gameLookup.mode1.cells.forEach(removeListener);
  gameLookup.mode2.m2cells.forEach(removeListener);
  gameLookup.mode3.m3cells.forEach(removeListener);
  function removeListener(cell) {
    cell.removeEventListener("click", playerSelect, false);
  };
};

function randomCell() {
  let randomIndex = Math.floor(Math.random()*gameState.cellLength);
  return randomIndex;
};

function sequencer() {
  let idx = randomCell();
  cells = [];
  mode = "";

  // add new random cell to end of previous sequence and creates a copy of array for checking 
  sequenceStorage.correctSeq.push(idx);
  sequenceStorage.correctSeq.forEach(order=> sequenceStorage.tempCheckSeq.push(order));

  // displays each element of new sequence one by one by highlighting and unhighlighting them
  let i = 0;
  const pacing = setInterval(() => {
    if (i > sequenceStorage.correctSeq.length-1) {
      clearInterval(pacing);
      // player click event listener activated only AFTER whole generated sequence is displayed
      playerClick();
    } else {
      highlightUnhighlight(gameState.mode, gameState.cells[sequenceStorage.correctSeq[i]], sequenceStorage.correctSeq[i], gameState.flashSpeed);
      i++;
    }
  }, gameState.intervalSpeed);
}; 

// cell light on and light off
function highlightUnhighlight(mode, cell, idx, flashSpeed) {
    //highlight
    setTimeout(function() {
      cell.style.background = "radial-gradient(rgba(255,255,255,1), cadetblue)";
        
      //unhighlight
      setTimeout(function() {
        if ("cells" in mode) {
          cell.style.background = cellColors.mode1[idx+1];
        } else if ("m2cells" in mode) {
          cell.style.background = cellColors.mode2[idx+1];
        } else if ("m3cells" in mode) {
          cell.style.background = cellColors.mode3[1];
        }
      }, flashSpeed);

    }, flashSpeed);

  };
  
// click event listeners
function playerClick() {
  console.log("Sequence answer: "+sequenceStorage.tempCheckSeq);
  gameLookup.mode1.cells.forEach(addListener);
  gameLookup.mode2.m2cells.forEach(addListener);
  gameLookup.mode3.m3cells.forEach(addListener);
  
  function addListener(cell) {
    cell.addEventListener("click", playerSelect);
  };
};

// stores player clicked cell and lights up cell
function playerSelect(evt) {
  sequenceStorage.playerSelect = parseInt(evt.target.id);
  soundStackPlay(buttonClick);

  gameState.cells[sequenceStorage.playerSelect-1].style.background = "lightblue";
  checkCorrect(gameState.mode, gameState.cells);
};

// compares player clicked cell with correct sequence 
function checkCorrect(mode, cells) {
  if (sequenceStorage.playerSelect === sequenceStorage.tempCheckSeq[0]+1) {
    sequenceStorage.tempCheckSeq.shift();

    //light off player selected cell if correctly matched
    if ("cells" in mode) {
      unhighlightPlayerSelect(cellColors.mode1[sequenceStorage.playerSelect]);
    } else if ("m2cells" in mode) {
      unhighlightPlayerSelect(cellColors.mode2[sequenceStorage.playerSelect]);
    } else {
      unhighlightPlayerSelect(cellColors.mode3[1]);
    } 
    // when whole sequence from player clicks is correct, continue on to next sequence
    if (sequenceStorage.tempCheckSeq.length === 0) {
      //removes the event listener for cell clicks after whole sequence is correct
      removeEvents();
      gameLookup.level.innerText++;
      sequencer();
    }

  } else {
    unhighlightPlayerSelect("rgb(83, 36, 85)");
    gameOver();
  }
};

function unhighlightPlayerSelect(revertColor) {
  setTimeout(function() {
    gameState.cells[sequenceStorage.playerSelect-1].style.background = revertColor;
  },sliderSettings[sliderValue].playerUnhighlight)
};

function gameOver() {
  gameLookup.gameMsg.style.display = "block";
  gameLookup.button.innerText = "Restart";
  countDown.stop();
  gameOverSound.play();
  bgmArray.forEach(mode => mode.pause());
};

// function only for mode 3, for activating floaters on screen
function activateFloats() {
  gameLookup.m3floaters.forEach(floater => floater.style.display = sliderSettings[100].floaterShow);
  gameLookup.m3floaterX.forEach((x)=>{
    randX = (Math.floor(Math.random()*10)+1).toString();
    x.style.animation = "x "+randX+"s linear infinite alternate"
  });
  gameLookup.m3floaterY.forEach((y)=>{
    randY = (Math.floor(Math.random()*10)+1).toString();
    randSize = getRandomRange(30,100);
    y.style.width = randSize+"px";
    y.style.height = randSize+"px";
    y.style.animation = "y "+randY+"s linear infinite alternate"
  });
};
function getRandomRange(min, max) {
  return (Math.random() * (max - min) + min).toString();
}

function play() {
  init();
  countDown.start();
  sequencer();
  if (sliderValue === "0") {
    mode1BGM.play();
  } else if (sliderValue === "50") {
    mode2BGM.play();
  } else if (sliderValue === "100") {
    activateFloats();
    mode3BGM.play();
  }
};

// ------------------------- AUDIO INPUT -------------------------------
const mode1BGM = new Audio("Resources/Audio/mode1.mp3");
const mode2BGM = new Audio("Resources/Audio/mode2.mp3");
const mode3BGM = new Audio("Resources/Audio/mode3.wav");
const gameOverSound = new Audio("Resources/Audio/gameOver.mp3");
const buttonClick = new Audio("Resources/Audio/buttonClick.mp3");
const sliderSound = new Audio("Resources/Audio/slider.mp3");

// Audio Control
const bgmArray = [mode1BGM, mode2BGM, mode3BGM];
bgmArray.forEach(mode => mode.loop = true);
mode2BGM.volume = 0.25;
mode3BGM.volume = 0.5;

function soundStackPlay (audio) {
  // allows the stacking of audio regardless if previous audio has ended
  audio.currentTime = 0;
  audio.play();
}

// ------------------ ACTION -------------------
document.querySelector("button").addEventListener("click", play);


