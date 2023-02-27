const initial = boardChange(4)

function boardChange(baseNum){
    const grid = document.querySelector('.grid')

    grid.innerHTML = ""
    for (let i = 0; i < baseNum ** 2; i++){
        let newBox = document.createElement('button');
        newBox.classList.add('box'); 
        grid.append(newBox)
    }
    switch(baseNum){
        case 2:
            grid.style.gridTemplate = "repeat(2, 1fr)/repeat(2, 1fr)"
            grid.style.padding = "15px";
            grid.style.gap = "20px"

            //More code to clean out rows and columns
            break;
        case 4:
            grid.style.gap = "15px";
            grid.style.padding = "15px";
            grid.style.gridTemplate = "repeat(4, 1fr)/repeat(4, 1fr)"

            //More code to clean out rows and columns
            break;
        case 8:

            grid.style.gap = "10px";
            grid.style.padding = "10px";
            grid.style.gridTemplate = "repeat(8, 1fr)/repeat(8, 1fr)"

            //More code to clean out rows and columns
            break;
    }
}

