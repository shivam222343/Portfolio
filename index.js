let popup = document.getElementById("popup");
let menu = document.getElementById("menubar");
let closer = document.getElementById("closer");
let closer1 = document.getElementById("closer1");
let box1 = document.getElementById("box1");
let detpop = document.getElementById("det-pop");
menu.onclick = function(){
    popup.style.display = "block";
    menu.style.display = "none";
}

closer.onclick = function(){
    popup.style.display = "none";
    menu.style.display = "block";
}

det.onclick = function(){
    box1.style.display = "none";
    detpop.style.display = "block";
}
closer1.onclick = function(){
    detpop.style.display = "none";
    box1.style.display = "block";
}
