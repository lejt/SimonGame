// const cells = document.querySelectorAll(".cell");
// const mode2 = document.querySelector(".mode2");


// const gameInfo = {
//   gameStatus: document.querySelector(".game-status"),
//   html: document.querySelector("html"),
//   levels: document.getElementById(".levels"),
//   cells: document.querySelectorAll(".cell"),
//   gameMsg: document.getElementById(".gameMsg"),
// }

// testing clicking cells ----------------
// const individualCells = {
//   cell1: document.querySelector(".cell1"),
//   cell2: document.querySelector(".cell2"),
//   cell3: document.querySelector(".cell3"),
//   cell4: document.querySelector(".cell4"),
// };

// cells.forEach((cell)=>{
//     cell.addEventListener('click',(evt) => {
//         console.log(evt.target.id);
//     });
// })
// ---------------------------------------



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
  sliderValue: 0,
  
}


// ------------------ SLIDER MODE CHANGE ----------------------
let sliderValue = 0;

gameLookup.slider.oninput = function () {   
  sliderValue = parseInt(this.value);
  console.log("slider value: "+this.value);

  if (parseInt(this.value) === 50) {
    gameLookup.gameStatus.style.color = "red";
    gameLookup.mode1.cells.forEach(cell => cell.style.display = "none");
    gameLookup.mode2.modeView.style.display = "block";
    gameLookup.html.style.background = "radial-gradient(rgb(22, 1, 29), rgb(104, 15, 15))";
  } else if (this.value == 100) {
    //show mode 3, hidden other modes
  } else {
    gameLookup.gameStatus.style.color = "white";
    gameLookup.mode1.cells.forEach(cell => cell.style.display = "block");
    gameLookup.mode2.modeView.style.display = "none";
    gameLookup.html.style.background = "radial-gradient(rgb(22, 1, 29), rgb(109, 37, 156))";
  }
}

// ------------------ EVENT LISTENERS FOR ALL GAME MODES ----------------------
sliderValue === 0 ? cellClick = gameLookup.mode1.cells : cellClick = gameLookup.mode2.m2cell1;
cellClick.forEach((cell)=>{
    cell.addEventListener('click',(evt) => {
        console.log(evt.target.id);
    })
});
gameLookup.mode2.m2cells.forEach((cell)=>{
  cell.addEventListener('click',(evt) => {
      console.log(evt.target.id);
  })
});



function randomSequence() {
  sliderValue === 0 ? cellLength = (gameLookup.mode1.cells).length : cellLength = (gameLookup.mode2.m2cells).length;  
  let randomIndex = Math.floor(Math.random()*cellLength);
  console.log("Random Sequence for lightup: "+randomIndex);
}

// document.querySelector("button").addEventListener("click", playGame);
// randomSequence();