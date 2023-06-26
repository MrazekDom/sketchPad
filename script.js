const container = document.querySelector('.grid-container');
const BtnSmall = document.querySelector('.button-small')
const BtnMedium = document.querySelector('.button-medium')
const BtnLarge = document.querySelector('.button-large')
const BtnGrid = document.querySelector('.button-grid')
const BtnEraser = document.querySelector('.button-erase')



ButtonsEventListeners();

let isDrawing = false;
let eraserMode =false;

function createGrid(numberOfCells){
    for(let i=0;i<numberOfCells;i++){
        let cell = document.createElement('div');
        CreateCells(cell, numberOfCells);
    }
}


function ButtonsEventListeners(){
    BtnSmall.addEventListener('click',function(){
        container.innerHTML="";
        createGrid(4096)
    });
    BtnMedium.addEventListener('click',function(){
        container.innerHTML="";
        createGrid(1024)
    });
    BtnLarge.addEventListener('click',function(){
        container.innerHTML="";
        createGrid(256)
    });
    BtnGrid.addEventListener('click',function(){
        let cells = document.querySelector('.grid-container').children;
        cellArray = Array.from(cells);
        cellArray.forEach(element => {
            if(element.classList.contains('grid')){
                element.classList.remove('grid')
            }
            else{
                element.classList.add('grid')
            }
        });
    });
    BtnEraser.addEventListener('click',function(){
        eraserMode = !eraserMode;
        
    });
}


function cellPaint(cell) {
    if(eraserMode){
        cell.classList.add('white');
        
    }
    else{
        cell.classList.remove('white');
        cell.classList.add('black'); 
    }
  }


function CreateCells(cell, numberOfCells){
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

createGrid(1024)



