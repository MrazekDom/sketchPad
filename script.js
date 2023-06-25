const container = document.querySelector('.grid-container');

function createGrid(numberOfCells){
    for(let i=0;i<numberOfCells;i++){
        let cell = document.createElement('div',);
        cell.classList.add('cell')
        container.appendChild(cell);
    }
}

createGrid(256)