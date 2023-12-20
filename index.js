var a = document.getElementsByClassName("drum").length;

//add sound for mouse click

for (var i=0;i<a;i++) {
    document.getElementsByClassName("drum")[i].addEventListener("click", function () {
        var b = this.innerHTML;
        switchBtn(b);
        animate(b)
    })
}

//adding sound for key presses

document.addEventListener("keydown", function (event) {
    switchBtn(event.key);
    animate(event.key);
})

//function to switch sounds between buttons

function switchBtn(key) {
    switch (key) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default:
            console.log(c)
            break;    
        }        
    }

//funtion for button pressed animation

function animate(curkey) {
    document.querySelector("."+curkey).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("."+curkey).classList.remove("pressed");
    }, 200);
}







