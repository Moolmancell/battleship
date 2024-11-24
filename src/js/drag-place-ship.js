import interact from 'interactjs'

let mode = "horizontal";

const ships = document.querySelectorAll("div.ship");
const gridContainer = document.getElementById("gameboard-player-1");

ships.forEach(ship => {
    const position = { x: 0, y: 0 }

    interact(ship).draggable({
      inertia: true,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'body',
            endOnly: true
        })
      ],
        listeners: {
        start (event) {
            console.log(event.type, event.target)
        },
        move (event) {
            position.x += event.dx
            position.y += event.dy
    
            event.target.style.transform =
            `translate(${position.x}px, ${position.y}px)`
            
        },
        }
    })
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

