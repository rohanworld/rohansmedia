var setmenu = document.querySelector(".settingsmenu");
var dbtn = document.getElementById("darkbtn");

function settingsMenuToggle(){
    setmenu.classList.toggle("settingsmenuheight");
}
dbtn.onclick = function () {
    dbtn.classList.toggle("darkbtnon");
    document.body.classList.toggle("darktheme");

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");        
    }
    else{
        localStorage.setItem("theme", "light");
    }

}

if (localStorage.getItem("theme") == "light") {
    dbtn.classList.remove("darkbtnon");
    document.body.classList.remove("darktheme");
}
else if(localStorage.getItem("theme")=="dark"){
    dbtn.classList.add("darkbtnon");
    document.body.classList.add("darktheme");
}
else{
    localStorage.setItem("theme", "light");
}