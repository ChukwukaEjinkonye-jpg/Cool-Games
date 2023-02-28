//const initial = boardChange(4)

// function boardChange(baseNum){
//     const grid = document.querySelector('.grid')
//     const tiles = document.querySelector('.tile')

    
//     grid.innerHTML = ""
//     for (let i = 0; i < baseNum ** 2; i++){
//         let newBox = document.createElement('button');
//         newBox.classList.add('box'); 
//         grid.append(newBox)
//     }
    
//     switch(baseNum){
//         case 2:
//             grid.style.gridTemplate = "repeat(2, 1fr)/repeat(2, 1fr)"
//             grid.style.padding = "15px";
//             grid.style.gap = "20px"

//             // tiles.style.setProperty("--initialLeft", "15px")
//             // tiles.style.setProperty("--initialBot", "485px")
//             // tiles.style.setProperty("gap", "15px")
//             // tiles.style.setProperty("--cellWidth" , "227.5px")
//             // tiles.style.setProperty("--cellHeight" , "225px")
//             // tiles.style.setProperty("line-height" , "225px")
//             // tiles.style.setProperty("line-height" , "225px")

//             //More code to clean out rows and columns
//             break;
//         case 4:
//             grid.style.gap = "15px";
//             grid.style.padding = "15px";
//             grid.style.gridTemplate = "repeat(4, 1fr)/repeat(4, 1fr)"

//             //More code to clean out rows and columns
//             break;
//         case 8:

//             grid.style.gap = "10px";
//             grid.style.padding = "10px";
//             grid.style.gridTemplate = "repeat(8, 1fr)/repeat(8, 1fr)"

//             //More code to clean out rows and columns
//             break;
//     }
// }

const twoByTwo = document.getElementById("2-2")
const fourByFour = document.getElementById("4-4")
const eightByEight = document.getElementById("8-8")

let gridSize = 4 
let gridGap = 15
let boxWidth = 107.5
let boxHeight = 106.25
let fontSize = 49



//Values  will change depending on cerntain conditions 
//8x8  gridSize: 8      gridGap: 10     boxHeight: 50px        boxWidth: 51.9px
//4x4  gridSize: 4      gridGap: 15     boxHeight: 106.25px    boxWidth: 107.5px
//2x2  gridSize: 2      gridGap: 15     boxHeight: 225px       boxWidth: 227.5px

export default class Grid{
    #boxes
    constructor(grid){
        grid.style.setProperty('--gridSize' , gridSize)
        grid.style.setProperty('--gridGap' , `${gridGap}px`)      
        grid.style.setProperty('--boxWidth', `${boxWidth}px`)
        grid.style.setProperty('--boxHeight', `${boxHeight}px`)
        grid.style.setProperty('--letterSize', `${fontSize}px`)
        this.#boxes = createBoxes(grid).map((element , index) => {
            return new Box(element , index % gridSize , Math.floor(index / gridSize)) 
        })
        console.log(this.#boxes)
    }
}

class Box{
    #element
    #x
    #y
    constructor(element, x, y){
        this.#element = element
        this.#x = x
        this.#y = y

    }
}

function createBoxes(grid){
    const boxes = []
    for(let i = 0; i < gridSize * gridSize; i++){
        let box = document.createElement("div")
        box.classList.add("box")
        boxes.push(box)
        grid.append(box)
    }
    return boxes
}