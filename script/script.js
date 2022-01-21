

let selection = ""
let brightness = 100
const clickRandom = document.getElementById("random")
const clickColor = document.getElementById("colorPicker")
const clickBnw = document.getElementById("bnw")
const clickEraser = document.getElementById("eraser")
const clickClear = document.getElementById("clear")
const clickSlider = document.getElementById("gridSlider")
const sliderValue = document.getElementById("sliderValue")
const gridCont = document.getElementById("gridCont")

let update = () => {
    sliderValue.textContent = `${clickSlider.value} x ${clickSlider.value}`
    clearGrid()
}

clickRandom.addEventListener("click", ()=> set("random"))
clickColor.addEventListener("click", ()=> set("color"))
clickBnw.addEventListener("click", ()=> set("bnw"))
clickEraser.addEventListener("click", ()=> set("eraser"))
clickClear.addEventListener("click", ()=> clearGrid())
clickSlider.addEventListener("input", update);


function set(choice){
    selection = choice;
    console.log(selection)
}

function createGrid1(gridNum){
    gridCont.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`
    gridCont.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`

    for (c = 0; c < (gridNum ** 2); c++){
        let div = document.createElement("div");
        div.classList.add("grid")
        gridCont.appendChild(div)
    }
}

function createGrid(gridNum = 16){
    for (let i = 0; i < gridNum**2; i++){
        let div = document.createElement("div");
        div.classList.add("grid");
        div.setAttribute("style", `width: ${Math.round(500/gridNum)}px; height: ${Math.round(500/gridNum)}px`)
        gridCont.appendChild(div)
    }
}


function mouseHover(){
    let gridCont = document.querySelector(".gridCont")
    console.log(selection)
    gridCont.addEventListener("mouseover", (event)=> {changeColor(event)})
}

function clearGrid(){
    removeGrid()
    createGrid1(clickSlider.value)
}


function removeGrid() {
    let gridCont = document.getElementById("gridCont")
    while (gridCont.firstChild) {
        gridCont.removeChild(gridCont.firstChild);
    }
}


function changeColor(event){
    switch(selection){
        case "random":
            const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
            event.target.style.backgroundColor = randomColor
            break;

        case "color":
            const solidColor = document.getElementById("colorPicker").value;
            event.target.style.backgroundColor = solidColor;
            break;

        case "bnw":
            let bnwColor = `hsl(0, 0%, ${brightness}%)`
            event.target.style.backgroundColor = bnwColor;

            brightness -= 10
            if(brightness === 0){
                brightness = 100
            }
            break;

        case "eraser":
            let eraser = "#ffffff"
            event.target.style.backgroundColor = eraser;
            break;

    }
}

function random(num){
    return Math.floor(Math.random() * (num + 1))
}

createGrid1(clickSlider.value)
mouseHover()
