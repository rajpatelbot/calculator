let dark = localStorage.getItem('dark');
var icon = document.getElementById('moon');
let themeLogo = document.getElementById('themeLogo');

themeLogo.addEventListener('click', () => toggle());

function enableDarkMode(){
    document.querySelector("body").classList.add("dark");
    icon.setAttribute('src', 'font awsome/sun.png');
    localStorage.setItem('dark', 'true'); 
}

function disableDarkMode(){
    document.querySelector("body").classList.remove("dark");
    icon.setAttribute('src', 'font awsome/moon.png');
    localStorage.setItem('dark', 'false');
}

if(dark === "true"){
    enableDarkMode();
}

function toggle(){
    dark = localStorage.getItem('dark');
    if(dark !== "true"){
        enableDarkMode();
    }else{
        disableDarkMode();
    }
}
