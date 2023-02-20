const grid =  document.getElementById("grid_container");
grid.style.width = "504px";
grid.style.height = "504px";

let color = "";

const grid_btn = document.getElementById("grid_btn");
const colors = document.getElementById("colors");
colors.addEventListener("click", (e)=>{
  color = e.target.id;
})

function createGrid(){
  clearGrid();
  const size = parseInt(prompt("choose a grid size 1-50"));
  if (size === 666){
    alert(`The devil is not available at the moment
    please try again later`);
    return;
  }
  if (size > 50 || size < 0){
    alert("Please choose a size between 1-50!!");
    return;
  }
  else if (isNaN(size)){
    alert("Please enter a valid number")
    return;
  }
  
  buildGrid(size);
}


function buildGrid(size = 4){
  for (let i = 1; i <= size * size; i++){
    const box = document.createElement("div");
    box.style.width = ((parseInt(grid.style.width) -4) / size) + "px";
    box.style.height = ((parseInt(grid.style.height) -4) /size ) + "px";
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
      this.style.backgroundColor = `hsl(${Math.random() * 360},100%, 50%)`;
      break;
    default: 
      this.style.backgroundColor = "black";
  }
  
}

function clearGrid(){
  grid.innerHTML = "";
}

grid_btn.addEventListener("click", createGrid);

