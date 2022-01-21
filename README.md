# odin-Etch-a-Sketch

1x1 = 1 500x500
2x2 = 4 250x250
3x3 = 9 
4x4 = 16
5x5 = 20
6x6 = 36
7x7 = 49
8x8 = 56
9x9 =81
10x10 = 100



.gridCont{
display: flex;
height: auto;
border: 2px solid black;
max-width: 500px;
max-height: 500px;
}

function createGrid(gridNum = 16){
for (let i = 0; i < gridNum**2; i++){
let div = document.createElement("div");
div.classList.add("grid");
div.setAttribute("style", `width: ${Math.round(500/gridNum)}px; height: ${Math.round(500/gridNum)}px`)
gridCont.appendChild(div)
}
}
