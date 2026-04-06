var typing = document.querySelector(".typing");

var words = ["Web Developer", "Video Editor", "Graphic Designer"];
var wordIndex = 0;
var letterIndex = 0;

function type() {
    if(letterIndex < words[wordIndex].length){
        typing.textContent += words[wordIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    if(letterIndex > 0){
        typing.textContent = words[wordIndex].substring(0, letterIndex-1);
        letterIndex--;
        setTimeout(erase, 50);
    } else {
        wordIndex++;
        if(wordIndex >= words.length){
            wordIndex = 0;
        }
        setTimeout(type, 200);
    }
}

document.addEventListener("DOMContentLoaded", function(){
    setTimeout(type, 500);
});