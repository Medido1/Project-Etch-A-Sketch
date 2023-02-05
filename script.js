const grid =  document.getElementById("grid_container");
grid.style.width = "396px";
grid.style.height = "396px";

let color = "";

const grid_btn = document.getElementById("grid_btn");
const colors = document.getElementById("colors");
colors.addEventListener("click", (e)=>{
  color = e.target.id;
})

function createGrid(){
  clearGrid();
  const size = parseInt(prompt("choose a grid size 1-100"));
  if (size === 666){
    alert(`The devil is not available at the moment
    please try again later`);
    return;
  }
  if (size > 100 || size < 0){
    alert("Please choose a size between 1-100!!");
    return;
  }
  else if (isNaN(size)){
    alert("Please enter a valid number")
    return;
  }
  
  buildGrid(size);
}


function buildGrid(size = 8){
  for (let i = 1; i <= size * size; i++){
    const box = document.createElement("div");
    box.style.width = (parseInt(grid.style.width) / size - 2) + "px";
    box.style.height = (parseInt(grid.style.height) / size -2) + "px";
    grid.appendChild(box);
    box.addEventListener("mouseover", colorGrid);
  }
}

buildGrid();

function colorGrid(){
  switch(color){
    case "black":
      this.style.backgroundColor = "black";
      break;
    case "red":
      this.style.backgroundColor = "red";
      break;
    case "green":
      this.style.backgroundColor = "green";
      break;
    case "blue":
      this.style.backgroundColor = "blue";
      break;
    case "random":
      this.style.backgroundColor = `hsl(${Math.random() * 255},100%, 50%)`;
      break;
    default: 
      this.style.backgroundColor = "black";
  }
  
}

function clearGrid(){
  grid.innerHTML = "";
}

grid_btn.addEventListener("click", createGrid);

