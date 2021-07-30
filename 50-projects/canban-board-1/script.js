// variables
const counter = document.getElementById("counter")
const input = document.querySelector("#input-container input")
const add = document.querySelector("#input-container button")

const listUl = document.querySelector("#list-container ul")
const item = document.querySelectorAll(".list-item")

let del = document.querySelectorAll(".list-close")
let hidden = document.querySelectorAll('li[style="displey:none;"]')
// console.log(hidden.length);


function display() {
    let todo = document.getElementsByTagName("li");
    let done = document.getElementsByClassName("checked-item")
    let screen = (done.length) + "/" + (todo.length - 1);
    counter.innerHTML = screen;
}

// delete items
for (let i = 0; i < del.length; i++) {
    del[i].onclick = function () {
        var div = this.parentElement;
        div.remove();
        display()
    }
}


// checked items
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked-item');
        display()
    }
}, false);




add.addEventListener("click", () => {
    let text = input.value;

    let addli = document.createElement("li");
    let addspan = document.createElement("span");

    addli.className = "list-item"
    addspan.className = "list-close"

    let linode = document.createTextNode(text)
    let spannode = document.createTextNode("X")

    addspan.appendChild(spannode);
    addli.appendChild(linode);
    addli.appendChild(addspan);

    if (text === '') {
        alert("You must write something!");
    } else {
        listUl.appendChild(addli)
    }
    input.value = "";


    let del = document.querySelectorAll(".list-close")
    for (let i = 0; i < del.length; i++) {
        del[i].onclick = function () {
            var div = this.parentElement;
            div.remove();
            display()
        }
    }

    display()
});