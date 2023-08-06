let currentIndex = 0;
let arr = document.querySelector("#")

function launchMainPage(scrollOffset) {
    
    console.log("ASS");
    document.cookie = "scrollOffset=" + scrollOffset +";";
    window.location.href = "";
    window.location.href = "main.html";
}


function launchPage(pagePath) {
    window.location.href = pagePath;
    document.cookie = "scrollOffset=" + 0;
}

function nextIndex() {

} 

function prevIndex() {

}

function updateSlider() {

}