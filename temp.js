
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
    html: document.querySelector("html"),
    levels: document.getElementById(".levels"),
    gameStatus: document.querySelector(".game-status"),
    gameMsg: document.getElementById(".gameMsg")
};

const sliderSettings = {
  0: {
      wordColor: "black",
      m1show: "block",
      m2show: "none",
      // background: "radial-gradient(rgb(22, 1, 29), rgb(109, 37, 156))",
      background: "linear-gradient(#e66465, #192177)",
      clickCells: gameLookup.mode1.cells,
  },
  50: {
      wordColor: "red",
      m1show: "none",
      m2show: "block",
      background: "radial-gradient(rgb(22, 1, 29), rgb(104, 15, 15))",
      // clickCells: gameLookup.mode2.m2cells,
  },
  100: {
    // 3rd game mode settings?
  },
};

const cellColors = {
  mode1: {
    1: "radial-gradient(rgb(240, 116, 85), red)",
    2: "radial-gradient(rgb(74, 111, 233), blue)",
    3: "radial-gradient(rgb(81, 226, 88), green)",
    4: "radial-gradient(rgb(212, 214, 73),yellow)",
  },
  mode2: {    // come back to change colors if mode2 should be more colorful
    1: "linear-gradient(rgb(87, 88, 10),rgb(238, 238, 65))",
    2: "linear-gradient(150deg, rgb(8, 57, 77), green)",
    3: "linear-gradient(165deg, rgb(73, 19, 5), yellow)",
    4: "linear-gradient(150deg, rgb(61, 1, 63),rgb(247, 151, 167))",
    5: "linear-gradient(150deg, rgb(5, 83, 11), cyan)",
    6: "linear-gradient(150deg, rgb(87, 5, 5), rgb(255, 153, 0))",
    // 1: "rgb(58, 45, 45)", 
    // 2: "rgb(58, 45, 45)", 
    // 3: "rgb(58, 45, 45)", 
    // 4: "rgb(58, 45, 45)", 
    // 5: "rgb(58, 45, 45)", 
    // 6: "rgb(58, 45, 45)", 
  }
};

// ------------------ App's state (variables) ---------------------
let startState, sequenceStorage, mode, cells;


// ------------------ SLIDER MODE CHANGE v2.0----------------------
sliderValue = 0;

gameLookup.slider.oninput = function () {   
  sliderValue = this.value;
  console.log("Slider Value: "+sliderValue);
  if (sliderValue in sliderSettings) {
    gameLookup.gameStatus.style.color = sliderSettings[sliderValue].wordColor;
    gameLookup.mode2.modeView.style.display = sliderSettings[sliderValue].m2show;
    gameLookup.mode1.cells.forEach(cell => cell.style.display = sliderSettings[sliderValue].m1show);
    gameLookup.html.style.background = sliderSettings[sliderValue].background;
    // clickCells = sliderSettings[sliderValue].clickCells;
  }
};

// ------------------ SLIDER MODE CHANGE v1.0----------------------
// let sliderValue = 0;

// gameLookup.slider.oninput = function () {   
//   sliderValue = parseInt(this.value);
//   console.log("slider value: "+this.value);

//   if (parseInt(this.value) === 50) {
//     gameLookup.gameStatus.style.color = "red";
//     gameLookup.mode1.cells.forEach(cell => cell.style.display = "none");
//     gameLookup.mode2.modeView.style.display = "block";
//     gameLookup.html.style.background = "radial-gradient(rgb(22, 1, 29), rgb(104, 15, 15))";

//   } else if (this.value == 100) {
//     //show mode 3, hidden other modes
//   } else {
//     gameLookup.gameStatus.style.color = "white";
//     gameLookup.mode1.cells.forEach(cell => cell.style.display = "block");
//     gameLookup.mode2.modeView.style.display = "none";
//     gameLookup.html.style.background = "radial-gradient(rgb(22, 1, 29), rgb(109, 37, 156))";
//   }
// }

// ------------------ EVENT LISTENERS FOR ALL GAME MODES v3.0 ----------------------
gameLookup.mode1.cells.forEach(findId);
gameLookup.mode2.m2cells.forEach(findId);
// gameLookup.mode3.m3cells.forEach(findId);

function findId(cell) {
  cell.addEventListener("click", playerTurn);
};

// ------------------ EVENT LISTENERS FOR ALL GAME MODES v2.0 ----------------------
// gameLookup.mode1.cells.forEach(findId);
// gameLookup.mode2.m2cells.forEach(findId);
// gameLookup.mode3.m3cells.forEach(findId);

// function findId (cell) {
//   cell.addEventListener("click",(evt) => {
//     //save player clicked cell into storage
//     sequenceStorage.playerSelect = parseInt(evt.target.id);

//     if (sliderValue == "0") {
//       mode = gameLookup.mode1;
//       cells = gameLookup.mode1.cells;
//     } else if (sliderValue === "50") {
//       mode = gameLookup.mode2;
//       cells = gameLookup.mode2.m2cells;
//     } else {
//       // mode = gameLookup.mode3;
//       // cells = gameLookup.mode3.m3cells;
//     }
//     console.log("CLICKED: "+sequenceStorage.playerSelect);
//     cells[sequenceStorage.playerSelect-1].style.background = "purple";
//     checkCorrect(mode, cells);
//   })
// };

// ------------------ EVENT LISTENERS FOR ALL GAME MODES v1.0 ----------------------
// sliderValue == 0 ? cellClick = gameLookup.mode1.cells : cellClick = gameLookup.mode2.m2cell1;
// cellClick.forEach((cell)=>{
//     cell.addEventListener('click',(evt) => {
//         console.log(evt.target.id);
//     })
// });
// gameLookup.mode2.m2cells.forEach((cell)=>{
//   cell.addEventListener('click',(evt) => {
//       console.log(evt.target.id);
//   })
// });


// ------------------- FUNCTIONS ----------------------
function init() {
  // let clickCells = gameLookup.mode1.cells;

  startState = {
    level: 0,
    time: 100,
  };
  sequenceStorage = {
    correctSeq: [],
    tempCheckSeq: [],
    playerSelect: null,
  };
  refreshColors();
  sequencer();
};

function refreshColors() {
  gameLookup.mode1.cells.forEach(cell=> {
    if (cell.id in cellColors.mode1) {
      cell.style.background = cellColors.mode1[cell.id];
    }
  })
  gameLookup.mode2.m2cells.forEach(cell=> {
    if (cell.id in cellColors.mode2) {
      cell.style.background = cellColors.mode2[cell.id];
    }
  })
};

function randomCell() {
  let cellLength = "";

  if (sliderValue == "0") {
    cellLength = (gameLookup.mode1.cells).length;
  } else if (sliderValue === "50") {
    cellLength = (gameLookup.mode2.m2cells).length;
  } else {
    // cellLength = (gameLookup.mode3.m3cells).length
  }

  let randomIndex = Math.floor(Math.random()*cellLength);
  return randomIndex;
};

function sequencer() {

  let idx = randomCell();
  //initial game mode
  cells = [];
  mode = "";

  // add new sequence to end of previous sequence
  sequenceStorage.correctSeq.push(idx);
  sequenceStorage.correctSeq.forEach(order=> sequenceStorage.tempCheckSeq.push(order));
    
  //dont know why slider value has to be == instead of === 
  if (sliderValue == "0") {
    mode = gameLookup.mode1;
    cells = mode.cells;
  } else if (sliderValue === "50") {
    mode = gameLookup.mode2;
    cells = mode.m2cells;
  } else {
    // mode = gameLookup.mode3;
    // cells = mode.m3cells;
  }

  //Loop through previous sequences + new pushed element
  let i = 0;
  const pacing = setInterval(() => {
    highlightUnhighlight(mode, cells[sequenceStorage.correctSeq[i]], sequenceStorage.correctSeq[i]);
    i++;
    if (i === sequenceStorage.correctSeq.length) {
      clearTimeout(pacing);
      
    }
  }, 700);

  console.log("CORRECT SEQUENCE HERE: (+1) "+sequenceStorage.correctSeq);
  playerTurn;
}

function highlightUnhighlight(mode, cell, idx) {
    //highlight
    setTimeout(function() {
      cell.style.background = "radial-gradient(rgba(255,255,255,1), cadetblue)";
        
      //unhighlight
        setTimeout(function() {
          if ("cells" in mode) {
            cell.style.background = cellColors.mode1[idx+1];
          } else if ("m2cells" in mode) {
            cell.style.background = cellColors.mode2[idx+1]
          } else {
            // cell.style.background = cellColors.mode3[idx+1]
          }
        },500);
    },500);
}

// cannot use this function properly until game button is clicked (is initialized)
function playerTurn(evt) {
  sequenceStorage.playerSelect = parseInt(evt.target.id);

  if (sliderValue == "0") {
    mode = gameLookup.mode1;
    cells = gameLookup.mode1.cells;
  } else if (sliderValue === "50") {
    mode = gameLookup.mode2;
    cells = gameLookup.mode2.m2cells;
  } else {
    // mode = gameLookup.mode3;
    // cells = gameLookup.mode3.m3cells;
  }

  cells[sequenceStorage.playerSelect-1].style.background = "purple";
  checkCorrect(mode, cells);
};

function checkCorrect(mode, cells) {
  //check if clicked cell is matching the correct sequence
  if (sequenceStorage.playerSelect === sequenceStorage.tempCheckSeq[0]+1) {
    sequenceStorage.tempCheckSeq.shift();
    // console.log('correct');

    //unhighlight player selected if correctly clicked
    if ("cells" in mode) {
      timeOutPlayerSelect(cellColors.mode1[sequenceStorage.playerSelect]);
    } else if ("m2cells" in mode) {
      timeOutPlayerSelect(cellColors.mode2[sequenceStorage.playerSelect]);
    } else {
      // timeOutPlayerSelect(cellColors.mode3[sequenceStorage.playerSelect]);
    } 

    console.log("tempCheck Seq after shift: (+1) "+sequenceStorage.tempCheckSeq)
    if (sequenceStorage.tempCheckSeq.length === 0) {
      sequencer();
    }

  } else {
    // console.log('incorrect');
    timeOutPlayerSelect("red");
    // gameOver();
  }
}

function timeOutPlayerSelect(revertColor) {
  setTimeout(function() {
    cells[sequenceStorage.playerSelect-1].style.background = revertColor;
  },200)
};

// ------------------ ACTION -------------------
document.querySelector("button").addEventListener("click", init);



//----------- TESTING HERE -------------
// randomCell();
// sequencer();
// highlightUnhighlight();

