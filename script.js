const container = document.querySelector('.grid-container');
const BtnSmall = document.querySelector('.button-small')
const BtnMedium = document.querySelector('.button-medium')
const BtnLarge = document.querySelector('.button-large')
const BtnGrid = document.querySelector('.button-grid')
const BtnEraser = document.querySelector('.button-erase')
const ColourChooser = document.querySelector('#colourChoice')

let isDrawing = false;
let eraserMode =false;
let gridMode = true;


createSketchPad(1024)
ButtonsEventListeners();

const color = ColourChooser.value;



function createSketchPad(numberOfCells){
    for(let i=0;i<numberOfCells;i++){
        let cell = document.createElement('div');
        CreateCells(cell, numberOfCells);
    }
    if(gridMode){
        createGrid();
    }
    
}
function createGrid(){
    let cells = document.querySelector('.grid-container').children;
        cellArray = Array.from(cells);
        cellArray.forEach(element => {
            if(element.classList.contains('grid')){
                element.classList.remove('grid')
                gridMode = false;
            }
            else{
                gridMode = true;
                element.classList.add('grid')
            }
        });
}

function ButtonsEventListeners(){
    BtnSmall.addEventListener('click',function(){
        container.innerHTML="";
        createSketchPad(4096)
    });
    BtnMedium.addEventListener('click',function(){
        container.innerHTML="";
        createSketchPad(1024)
    });
    BtnLarge.addEventListener('click',function(){
        container.innerHTML="";
        createSketchPad(256)
    });
    BtnGrid.addEventListener('click',function(){
        gridMode = !gridMode;
        if(!gridMode){
            BtnGrid.classList.add('using');
        }
        else{
            BtnGrid.classList.remove('using');
        }
        createGrid();
    });
    BtnEraser.addEventListener('click',function(){
        eraserMode = !eraserMode;
        if(eraserMode){
            container.classList.add('eraser-cursor')
            BtnEraser.classList.add('using');
        }
        else{
            container.classList.remove('eraser-cursor')
            BtnEraser.classList.remove('using');
        }
    });
}


function cellPaint(cell) {                      //paints or erases cells
    if(eraserMode){  
        cell.style.backgroundColor = 'white';
    }
    else{
        cell.style.backgroundColor = ColourChooser.value;
    }
  }


function CreateCells(cell, numberOfCells){          //function for creating a single cell
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





