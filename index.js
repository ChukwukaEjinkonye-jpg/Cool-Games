////////////////////
///// Variables
///////////////////

const twoByTwo = document.getElementById("2-2")
const fourByFour = document.getElementById("4-4")
const eightByEight = document.getElementById("8-8")


////////////////////
///// Functions 
///////////////////



function Initial(){
    
}

function IsUp(){
 
}

function IsDown(){

}

function IsLeft(){

}

function IsRight(){

}



twoByTwo.addEventListener("click" , function(){
    // console.log(document.querySelector(".grid").innerHTML)
    boardChange(2)
})

fourByFour.addEventListener("click" , function(){
    boardChange(4)
})

eightByEight.addEventListener("click" , function(){
    boardChange(8)
})