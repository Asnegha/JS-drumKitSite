let l = document.querySelectorAll(".drum").length;
for(let i = 0; i < l; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", click_sound);
}


document.addEventListener("keydown", press_sound);

function click_sound() {
    let text = this.textContent;
    buttonanimate(text);
    aud_play(text);

}

function press_sound(evt) {
    let press_text = evt.key;
    buttonanimate(press_text);
    aud_play(press_text);
}


function aud_play(key){
    
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
        break;
        case "j":
            let crash = new Audio("sounds/crash.mp3")
            crash.play();
        break;
        case "k":
            let snare = new Audio("sounds/snare.mp3")
            snare.play();
        break;
        case "l":
            let kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
        break;
       
        default:
            console.log(text);
            break;
       }
}

function buttonanimate(currentkey) {
    let animate = document.querySelector("." + currentkey);
    animate.classList.add("pressed");
    setTimeout(function() {animate.classList.remove("pressed")},100 );
}

