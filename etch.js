function generateGrid() {
    const container = document.querySelector(".container");
    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        for (let j = 0; j < 16; j++) {
            const div = document.createElement("div");
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}

generateGrid();
