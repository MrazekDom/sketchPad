const container = document.querySelector('.grid-container');
let isDrawing = false;

function createGrid(numberOfCells){
    for(let i=0;i<numberOfCells;i++){
        let cell = document.createElement('div');
        cell.classList.add('cell')
        HandleCells(cell, numberOfCells);
    }
}

function cellPaint(cell) {
    cell.classList.add('black');
  }


function HandleCells(cell, numberOfCells){
    cell.addEventListener('mousedown', function() {
        isDrawing = true;
        cellPaint(cell);
    });
    cell.addEventListener('mousemove', function() {
        if (isDrawing) {
            cellPaint(cell);
        }
    });
    cell.addEventListener('mouseup', function() {
        isDrawing = false;
    });

    if(numberOfCells===4096){
        cell.classList.add('small')   
    }
    else if(numberOfCells===1024){
        cell.classList.add('medium')
    }
    else{
        cell.classList.add('big')
    }
    
    container.appendChild(cell);
}


// createGrid(16,16)
createGrid(1024)
//   createGrid(4096)


