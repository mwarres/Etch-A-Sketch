function generateGrid() {
    const container = document.querySelector(".container");
    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        for (let j = 0; j < 16; j++) {
            const div = document.createElement("div");
            div.addEventListener("mouseover", event => {
                div.classList.add("color");
            })
            div.textContent = "sketch!";
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}

generateGrid();
