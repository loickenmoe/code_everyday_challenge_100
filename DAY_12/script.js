let open = document.querySelectorAll(".fa-chevron-down");
let close = document.querySelectorAll(".fa-xmark");
let button = document.querySelectorAll("button");
let hidden = document.querySelectorAll(".hidden");
let box = document.querySelectorAll(".box")

function openCard(active) {
    if(open[active].style.display == 'flex'){
        open[active].style.display = 'none' ;
        close[active].style.display = 'flex' ;
        hidden[active].style.display = 'flex';
        box[active].style.backgroundColor = "#fff";
        button[active].style.backgroundColor = "#fff";

    }else{
        open[active].style.display = 'flex' ;
        close[active].style.display = 'none' ;
        hidden[active].style.display = 'none';
        box[active].style.backgroundColor = "#e0dcd6";
        button[active].style.backgroundColor = "#e0dcd6";
    }
}
