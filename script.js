const totalBox = [] 
const list = document.getElementById('Todolist');
const result = document.getElementById("result");
const today = new Date();
const dayOfWeek = today.getDay();

// Convert the day of the week to a string
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = daysOfWeek[dayOfWeek];


function add() {
    const boxes = document.querySelector('.box').value;
    const li = document.createElement('li');

    if(boxes !== "" && ! isNaN(boxes) && list.childNodes.length < 11) {
        li.innerHTML = `${dayName}  ${boxes}`;
        list.appendChild(li);

        totalBox.push(parseInt(boxes)); 
    }
    
}

function sum() {
    if(totalBox.length != 0) {
        const sum = totalBox.reduce((total, valor) => total + valor);
        result.innerText = `Total:  ${sum}`;
    } else {
        result.innerText = 'Total: 0';
    }
}

function remove() {
    if(list.childNodes.length > 0) {

        const lastItem = list.lastChild;
        totalBox.pop();
        list.removeChild(lastItem);
    }
}
