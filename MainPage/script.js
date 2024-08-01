function scrollToMain(elemName) {
    document.getElementById('main-section').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

function scrollToAbout(elemName) {
    document.getElementById('about-section').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

function scrollToContact(elemName) {
    document.getElementById('contact-section').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

function launchPage(pagePath) {
    window.location.href = pagePath;
}