const cells = document.querySelectorAll(".cell");
const mode2 = document.querySelector(".mode2");


const gameInfo = {
  gameStatus: document.querySelector(".game-status"),
  html: document.querySelector("html"),
  levels: document.getElementById(".levels"),
  cells: document.querySelectorAll(".cell"),
  gameMsg: document.getElementById(".gameMsg"),
}

// testing clicking cells ----------------
const individualCells = {
  cell1: document.querySelector(".cell1"),
  cell2: document.querySelector(".cell2"),
  cell3: document.querySelector(".cell3"),
  cell4: document.querySelector(".cell4"),
};

cells.forEach((cell)=>{
    cell.addEventListener('click',(evt) => {
        console.log(evt.target.id);
    });
})
// ---------------------------------------


// event listener
document.querySelector("button").addEventListener("")


// SlIDER JS ----------------------------
const slider = document.getElementById("myRange");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  console.log(this.value);

  if (this.value == 50) {

    
    cells.forEach(cell => {
      cell.style.display = "none";
    });
    mode2.style.display = "block";
    gameInfo.gameStatus.style.color = "red";
    gameInfo.html.style.background = "radial-gradient(rgb(22, 1, 29), rgb(104, 15, 15))";

  } else {

    
    cells.forEach(cell => {
      cell.style.display = "block";
    });
    mode2.style.display = "none";
    gameInfo.gameStatus.style.color = "white";
    gameInfo.html.style.background = "radial-gradient(rgb(22, 1, 29), rgb(109, 37, 156))";
  }
}
//------------------------------------------
const gameLookup = {
  
};






// function randomSequence() {
//   let randomIndex = Math.floor(Math.random()*cells.length);
//   console.log("Random Sequence for lightup: "+randomIndex);
// }

// randomSequence();