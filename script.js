const container = document.querySelector('.grid-container');

function createGrid(numberOfRows, numberOfColumns){
    let totalCells = numberOfRows*numberOfColumns;
    for(let i=0;i<totalCells;i++){
        let cell = document.createElement('div',);
        if(totalCells===4096){
            cell.classList.add('cell-small')   
        }
        else if(totalCells===1024){
            cell.classList.add('cell-medium')
        }
        else{
            cell.classList.add('cell-big')
        }
        container.appendChild(cell);
    }
}

// createGrid(16,16)
// createGrid(32,32)

 createGrid(64,64)