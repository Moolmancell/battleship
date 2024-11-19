export function renderGameboard() {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error("Container not found!");
        return;
    }

    // Set grid container styles
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(10, 1fr)";
    container.style.gridTemplateRows = "repeat(10, 1fr)";
    container.style.gap = "5px"; // Optional: space between cells

    // Generate grid cells with coordinates
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            const cell = document.createElement("div");
            
            // Set data attributes for coordinates
            cell.setAttribute("data-x", x);
            cell.setAttribute("data-y", y);

            // Add content to cell (optional)
            cell.textContent = `(${x}, ${y})`;

            // Style the cell
            cell.style.border = "1px solid #ccc";
            cell.style.display = "flex";
            cell.style.alignItems = "center";
            cell.style.justifyContent = "center";

            // Append cell to the container
            container.appendChild(cell);
        }
    }
}