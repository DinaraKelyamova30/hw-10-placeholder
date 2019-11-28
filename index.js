const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const move = document.querySelector('.btn');
const place = document.querySelector('#placeholder');

// переміщення значення в інший input
function moveText() {
    if (input1.value == "") {
        input2.value;
    } else {
        input2.placeholder = input1.value;
        input1.value = "";
    }
}
move.onmousemove = function () {
    move.style.backgroundColor = 'red';
}
move.onmouseleave = function () {
    move.style.backgroundColor = 'rgb(0, 255, 98)';
}

// переміщення значення в placeholder
place.addEventListener("focusout", focus);

function focus(){
    place.placeholder = place.value;
    place.value = "";
}
