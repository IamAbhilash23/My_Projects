for(let i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function() {
    var buttonInnerHTML=this.innerHTML;
    buttonAnimation(buttonInnerHTML);
    if(i===0)
    var audio=new Audio("./sounds/tom-1.mp3");
    else if(i===1)
    var audio=new Audio("./sounds/tom-2.mp3");
    else if(i===2)
    var audio=new Audio("./sounds/tom-3.mp3");
    else if(i===3)
    var audio=new Audio("./sounds/tom-4.mp3");
    else if(i===4)
    var audio=new Audio("./sounds/snare.mp3");
    else if(i===5)
    var audio=new Audio("./sounds/crash.mp3");
    else
    var audio=new Audio("./sounds/kick-bass.mp3");
    audio.play();
}
);
}
document.addEventListener("keypress",function(event){
    buttonAnimation(event.key);
    if(event.key==="w")
    var audio=new Audio("./sounds/tom-1.mp3");
    else if(event.key==="a")
    var audio=new Audio("./sounds/tom-2.mp3");
    else if(event.key==="s")
    var audio=new Audio("./sounds/tom-3.mp3");
    else if(event.key==="d")
    var audio=new Audio("./sounds/tom-4.mp3");
    else if(event.key==="j")
    var audio=new Audio("./sounds/snare.mp3");
    else if(event.key==="k")
    var audio=new Audio("./sounds/crash.mp3");
    else if(event.key==="l")
    var audio=new Audio("./sounds/kick-bass.mp3");
    audio.play();
})
function buttonAnimation(currentKey)
{
    var actionButton=document.querySelector("." + currentKey);
    actionButton.classList.add("pressed");
    //in order to get back from the shdow position
    setTimeout(function()
    {
        actionButton.classList.remove("pressed");   
    },10);
} 