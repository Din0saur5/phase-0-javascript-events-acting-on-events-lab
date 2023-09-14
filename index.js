// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";



document.addEventListener("keydown",function(event){
    console.log(event);
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (event.key === "ArrowRight") {
        moveDodgerRight();
    }

});



function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    console.log(left)
    if (left > 0 ){
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    console.log(left)
    if (left < 400 ){
        dodger.style.left = `${left + 1}px`;
    }
}

//codegrade broke i will try to change the file and see if it will refresh