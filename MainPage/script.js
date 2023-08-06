txt = document.getElementById("debugText");

scrollToElem();

function scrollToElemOffset(yOffset) {
    window.scroll(0, yOffset);
}

function launchPage(pagePath) {
    window.location.href = pagePath;
    document.cookie = "scrollOffset=" + 0;
}


function scrollToElem() {
    if (document.cookie != "") {
        arr = document.cookie.split("=");
        window.scroll(0, arr[1]);
    }
}