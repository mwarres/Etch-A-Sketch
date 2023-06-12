function generateGrid(dimension) {
    if (dimension > 100 || dimension < 1) dimension = 16; // make default 16
    const container = document.querySelector(".container");
    for (let i = 0; i < dimension; i++) {
        const row = document.createElement("div");
        for (let j = 0; j < dimension; j++) {
            const div = document.createElement("div");
            div.addEventListener("mouseover", event => {
                div.classList.add("color");
            })
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}

function newGrid() {
    // Clear away old grid.
    const container = document.querySelector(".container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Prompt user to select new grid size, create new grid.
    let newDimension = prompt("Please enter the desired width of your new" +
     " Etch-A-Sketch Grid. It should be a number 1 -100", "16");
    generateGrid(newDimension);
}

generateGrid(16);
const button = document.getElementById("newSketch");
button.addEventListener("click", newGrid);
