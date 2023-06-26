const container = document.querySelector('.grid-container');

function createGrid(numberOfRows, numberOfColumns){
    let totalCells = numberOfRows*numberOfColumns;
    for(let i=0;i<totalCells;i++){
        let cell = document.createElement('div');
        cell.classList.add('cell')
        cell.addEventListener('mouseover',function(){
            cell.classList.add('black');
        });
        if(totalCells===4096){
            cell.classList.add('small')   
        }
        else if(totalCells===1024){
            cell.classList.add('medium')
        }
        else{
            cell.classList.add('big')
        }
        
        container.appendChild(cell);
    }
}





// createGrid(16,16)
// createGrid(32,32)
  createGrid(64,64)