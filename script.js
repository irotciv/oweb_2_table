const table = document.getElementById("table");
const color = document.getElementById("color-input");
let number = 1;

for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 6; j++) {
        const cell = document.createElement("td");
        const innerText = String(number++);
        cell.innerText = innerText;
        cell.id = innerText;
        cell.addEventListener("dblclick", function () {
            doubleClick(cell);
        });
        row.appendChild(cell);
    }
    table.appendChild(row);
}

const defaultCell = document.getElementById("6");

defaultCell.addEventListener("mouseover", function () {
    defaultCell.style.backgroundColor = "#" + (Math.floor(Math.random() * 16777215).toString(16));
});

defaultCell.addEventListener("click", function () {
    defaultCell.style.backgroundColor = color.value;
});

function doubleClick (cell) {
    const columns = document.querySelectorAll("td");
    const column = (cell.id) % 6 === 0 ? 6 : (cell.id) % 6;
    const row = (cell.id - column) / 6;
    for (let i = 0; i < 6; i = i + 1) {
        for (let j = 0; j < 6; j = j + 1) {
            if (i >= row && j >= column - 1)
                document.getElementById(String(i * 6 + j + 1)).style.backgroundColor = color.value;
            else
                document.getElementById(String(i * 6 + j + 1)).style.backgroundColor = '';
        }
    }
}