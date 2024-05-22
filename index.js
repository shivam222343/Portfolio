let popup = document.getElementById("popup");
let menu = document.getElementById("menu");
let closer = document.getElementById("closer");
let closer1 = document.getElementById("closer1");
let box1 = document.getElementById("box1");
let detpop = document.getElementById("det-pop");
let feedpop = document.getElementById("feedpop");
let feedbackbtn1 = document.getElementById("feedback-btn");
let submitbox = document.getElementById("submitbox");

menu.onclick = function(){
    popup.style.display = "flex";
    popup.style.position ="absolute";
    menu.style.display = "none";
    closer.style.display = "flex";
    closer.style.fontSize = "50px";
}
feedbackbtn1.onclick = function(){
    feedpop.style.display = "flex";
    feedbackbtn1.style.display ="none";
}

submitbox.onclick = function(){
    feedpop.style.display = "none";
    feedbackbtn.style.display ="flex";
}

closer.onclick = function(){
    popup.style.display = "none";
    menu.style.display = "block";
    closer.style.display = "none";
}

det.onclick = function(){
    box1.style.display = "none";
    detpop.style.display = "block";
}
closer1.onclick = function(){
    detpop.style.display = "none";
    box1.style.display = "block";
}

var cursor = document.querySelector(".cursor");
var cont = document.querySelector(".cont");

cont.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x+"px";
   cursor.style.top = dets.y+"px";
})


