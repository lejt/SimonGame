



const cells = document.querySelectorAll(".cell");

cells.forEach((cell)=>{
    cell.addEventListener('click',(evt) => {
        console.log(evt.target.id);
    });
})


// SlIDER JS
const slider = document.getElementById("myRange");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  console.log(this.value);
}

const gameLookup = {

};
