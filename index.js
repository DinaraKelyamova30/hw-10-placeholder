const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const move = document.querySelector('.btn');

function moveText() {
    if (input1 == "") {
        input2.value = "";
    } else if (input1 != "") {
        input1.value = input2.value;
    }
}

