// LocalStorage flags
let hasLocalStorage = !!(window.localStorage);
let nerfAnnoying = false;

if (hasLocalStorage) {
    nerfAnnoying = window.localStorage.nerfAnnoying === "true"
}

// Flag: Nerf alerts, etc etc.
let dummy = (...args) => {
    console.log("Got dummy call", args);
};

if (nerfAnnoying) {
    window._alert = window.alert;
    delete window.alert;
    delete alert;
    window.alert = dummy;
    alert = dummy;
}

// Lord why.
setInterval(function() { alert("you are still here looking at this /??? ? ?GOOD."); }, 20000);

var accept_cookies = () => {
    document.querySelector("div.accept-our-cookies-69420").style.visibility = "none";
}

var watchfortnitefunnies = () => {
    // every tuesday
    open("https://www.youtube.com/user/jacksfilms");
}

var onLoad = () => {
        alert('Accept our copojie please.');
    }
    //im not a de
    // Stuff
window.onload = onLoad;