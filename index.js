let popup = document.getElementById("popup");
let menu = document.getElementById("menubar");
let closer = document.getElementById("closer");
menu.onclick = function(){
    popup.style.display = "block";
    menu.style.display = "none";
}

closer.onclick = function(){
    popup.style.display = "none";
    menu.style.display = "block";
}