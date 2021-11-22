
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
      wordColor: "white",
      m1show: "block",
      m2show: "none",
      background: "radial-gradient(rgb(22, 1, 29), rgb(109, 37, 156))",
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
}
// ------------------ SLIDER MODE CHANGE v2.0----------------------
let sliderValue = 0;
// let clickCells = gameLookup.mode1.cells;
let cellLength = 4;

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

// ------------------ EVENT LISTENERS FOR ALL GAME MODES v2.0 ----------------------
// clickCells.forEach(findId);
gameLookup.mode1.cells.forEach(findId);
gameLookup.mode2.m2cells.forEach(findId);
// gameLookup.mode3.m3cells.forEach(findId);

function findId (cell) {
  cell.addEventListener("click",(evt) => {
    console.log(evt.target.id);
  })
};

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
// function init() {
//   let sliderValue = "0";
//   let clickCells = gameLookup.mode1.cells;
// }

function randomSequence() {
  if (sliderValue === "0") {
    cellLength = (gameLookup.mode1.cells).length;
  } else if (sliderValue === "50") {
    cellLength = (gameLookup.mode2.m2cells).length;
  } else {
    // cellLength = (gameLookup.mode3.m3cells).length
  }
  
  // think about whether random index should start at 1 or 0
  let randomIndex = Math.floor(Math.random()*cellLength);
  console.log("Random Sequence for lightup: "+randomIndex);
};

// ------------------ ACTION -------------------
// init();
// document.querySelector("button").addEventListener("click", playGame);
// randomSequence();

