
let count = 0
function createGrid(gridNum = 16){
    let gridCont = document.querySelector(".gridCont");

    gridCont.setAttribute("style", `width: ${gridNum * 30}px`)

    for (let i = 0; i < gridNum**2; i++){
        let div = document.createElement("div");
        div.classList.add("grid");
        gridCont.appendChild(div)
        count += 1
    }
}

function mouseHover(){
    let gridList = document.querySelectorAll(".grid")
    for (let i = 0; i < gridList.length; i++){
        gridList[i].addEventListener("mouseover", randomColor)
    }
}

function random(num){
    return Math.floor(Math.random() * (num + 1))
}
function randomColor(){
    let grid = document.querySelector(".grid")
    grid.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
}
createGrid()
mouseHover()