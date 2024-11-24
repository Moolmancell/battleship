import interact from 'interactjs'

let mode = "horizontal";

const ships = document.querySelectorAll("div.ship");
const gridContainer = document.getElementById("gameboard-player-1");

function getGridCellFromPoint(x, y) {
    const cells = document.querySelectorAll("#gameboard-player-1 div");
    return Array.from(cells).find(cell => {
        const rect = cell.getBoundingClientRect();
        return (
            x >= rect.left &&
            x <= rect.right &&
            y >= rect.top &&
            y <= rect.bottom
        );
    });
}

function checkRotation(rotation , rect) {
    const halfCellLength = document.querySelector(".ship div").getBoundingClientRect().width / 2;
    if (rotation === "vertical") {
        return { x: (rect.left + rect.right) / 2, y: rect.top + halfCellLength};
    } else if (rotation === "horizontal"){
        return { x: rect.left + halfCellLength, y: (rect.top + rect.bottom) / 2 };
    }
}

ships.forEach(ship => {
    const position = { x: 0, y: 0 }

    let lastHighlightedCell = null; 

    interact(ship).draggable({
        inertia: true,
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'body',
                endOnly: true
            })
        ],
        listeners: {
            move(event) {
                position.x += event.dx;
                position.y += event.dy;

                event.target.style.transform =
                    `translate(${position.x}px, ${position.y}px)`;

                const rect = event.target.getBoundingClientRect();
                const gridRect = gridContainer.getBoundingClientRect();

                const isColliding = !(
                    rect.right < gridRect.left || 
                    rect.left > gridRect.right || 
                    rect.bottom < gridRect.top || 
                    rect.top > gridRect.bottom
                );

                if (isColliding) {
                    const leftPoint = checkRotation(mode, rect);
                    const cell = getGridCellFromPoint(leftPoint.x, leftPoint.y);

                    if (lastHighlightedCell && lastHighlightedCell !== cell) {
                        lastHighlightedCell.style.backgroundColor = "";
                        lastHighlightedCell.classList.remove("highlight");
                    }

                    if (cell) {
                        cell.style.backgroundColor = "blue";
                        cell.classList.add("highlight");
                        lastHighlightedCell = cell; 
                    }
                } else {
                    if (lastHighlightedCell) {
                        lastHighlightedCell.style.backgroundColor = "";
                        lastHighlightedCell.classList.remove("highlight");
                        lastHighlightedCell = null;
                    }
                }
            },
        }
    });
});

interact("#gameboard-player-1")
    .dropzone({
        accept: ".ship", 
        overlap: 0.1, 
        ondrop(event) {
            console.log("Dropped:", event.relatedTarget, "on", event.target);

            var draggableElement = event.relatedTarget;
            var dropzoneElement = event.target;
        },
        ondragenter(event) {
            console.log("Drag entered dropzone:", event.target);
            event.target.classList.add("drop-target");

            var draggableElement = event.relatedTarget;
            var dropzoneElement = event.target;

            draggableElement.classList.add("lower-opacity");
        },
        ondragleave(event) {
            console.log("Drag left dropzone:", event.target);
            event.target.classList.remove("drop-target");

            var draggableElement = event.relatedTarget;

            draggableElement.classList.remove("lower-opacity");
        }
    })
    .on("dropactivate", function (event) {
        event.target.classList.add("drop-activated");
    })
    .on("dropdeactivate", function (event) {
        event.target.classList.remove("drop-activated");
    });

gridContainer.addEventListener("mouseover", (e) => {
    const target = e.target;
    if (target && target.hasAttribute("data-x") && target.hasAttribute("data-y")) {
        //target.style.backgroundColor = "blue";
    }
});

