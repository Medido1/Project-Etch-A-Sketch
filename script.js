const grid =  document.getElementById("grid_container");
grid.style.width = "396px";
grid.style.height = "396px";

function buildGrid(size = 8){
  for (let i = 1; i <= size * size; i++){
    const box = document.createElement("div");
    box.style.width = (parseInt(grid.style.width) / size - 2) + "px";
    box.style.height = (parseInt(grid.style.height) / size -2) + "px";
    grid.appendChild(box);
  }
}

buildGrid();