//constant declaration
let numberFaces = 6;
let numberArrows = 3;
let numerColumns = 3;
let positionBaseFace = 2;


// arrays declaration
var arrayElementsImageColor;
var arrayElementsButtonsMove;
var arrayInitialGame;
var arrayDataMaster;
var arrayFacesPosition;
var arrayInitialMoves = [];
var arrayHistoryMoves = [];


var colorsProperty = {
    red:0,
    yellow:1,
    blue:2,
    orange:3,
    purple:4,
    green:5,
    route: {
        0: "rojo.png",
        1: "amarillo.png",
        2: "azul.png",
        3: "naranja.png",
        4: "morado.png",
        5: "verde.png"
    },
    value: {
        "rojo"    : 0,
        "amarillo": 1,
        "azul"    : 2,
        "naranja" : 3,
        "morado"  : 4,
        "verde"   : 5
    }
};

var movesProperty = {
    
    moveById: {
        0: {name:"clockTurnMove",idMove:0, idMoveInverse:13, visible:true, moveAction: function(){ clockTurnMove() } },
        1: {name:"downColumn_1_Move",idMove:1, idMoveInverse:10, visible:true, moveAction: function(){ downColumn_1_Move() }  },
        2: {name:"downColumn_2_Move",idMove:2, idMoveInverse:11, visible:true, moveAction: function(){ downColumn_2_Move() }  },
        3: {name:"downColumn_3_Move",idMove:3, idMoveInverse:12, visible:true, moveAction: function(){ downColumn_3_Move() }  },
        4: {name:"rightArrow_1_Move",idMove:4, idMoveInverse:5, visible:true, moveAction: function(){ rightArrow_1_Move() }  },
        5: {name:"leftArrow_1_Move",idMove:5, idMoveInverse:4, visible:true, moveAction: function(){ leftArrow_1_Move() }  },
        6: {name:"rightArrow_2_Move",idMove:6, idMoveInverse:7, visible:true, moveAction: function(){ rightArrow_2_Move() }  },
        7: {name:"leftArrow_2_Move",idMove:7, idMoveInverse:6, visible:true, moveAction: function(){ leftArrow_2_Move() }  },
        8: {name:"rightArrow_3_Move",idMove:8, idMoveInverse:9, visible:true, moveAction: function(){ rightArrow_3_Move() }  },
        9: {name:"leftArrow_3_Move",idMove:9, idMoveInverse:8, visible:true, moveAction: function(){ leftArrow_3_Move() }  },
        10: {name:"upColumn_1_Move",idMove:10, idMoveInverse:1, visible:true, moveAction: function(){ upColumn_1_Move() }  },
        11: {name:"upColumn_2_Move",idMove:11, idMoveInverse:2, visible:true, moveAction: function(){ upColumn_2_Move() }  },
        12: {name:"upColumn_3_Move",idMove:12, idMoveInverse:3, visible:true, moveAction: function(){ upColumn_3_Move() }  },
        13: {name:"antiClockTunrMove",idMove:13, idMoveInverse:0, visible:true, moveAction: function(){ antiClockTunrMove() }  },
        14: {name:"clockTurnFaceMiddle",idMove:14, idMoveInverse:15, visible:false, moveAction: function(){ clockTurnFaceMiddle() }  },
        15: {name:"antiClockTurnFaceMiddle",idMove:15, idMoveInverse:14, visible:false, moveAction: function(){ antiClockTurnFaceMiddle() }  },
        16: {name:"clockTurnFaceBack",idMove:16, idMoveInverse:17, visible:false, moveAction: function(){ clockTurnFaceBack() }  },
        17: {name:"antiClockTurnFaceBack",idMove:17, idMoveInverse:16, visible:false, moveAction: function(){ antiClockTurnFaceBack() }  }
    },
    moveByName: {
        "clockTurnMove": {name:"clockTurnMove",idMove:0, idMoveInverse:13, visible:true},
        "downColumn_1_Move": {name:"downColumn_1_Move",idMove:1, idMoveInverse:10, visible:true },
        "downColumn_2_Move": {name:"downColumn_2_Move",idMove:2, idMoveInverse:11, visible:true },
        "downColumn_3_Move": {name:"downColumn_3_Move",idMove:3, idMoveInverse:12, visible:true },
        "rightArrow_1_Move": {name:"rightArrow_1_Move",idMove:4, idMoveInverse:5, visible:true },
        "leftArrow_1_Move": {name:"leftArrow_1_Move",idMove:5, idMoveInverse:4, visible:true },
        "rightArrow_2_Move": {name:"rightArrow_2_Move",idMove:6, idMoveInverse:7, visible:true },
        "leftArrow_2_Move": {name:"leftArrow_2_Move",idMove:7, idMoveInverse:6, visible:true },
        "rightArrow_3_Move": {name:"rightArrow_3_Move",idMove:8, idMoveInverse:9, visible:true },
        "leftArrow_3_Move": {name:"leftArrow_3_Move",idMove:9, idMoveInverse:8, visible:true },
        "upColumn_1_Move": {name:"upColumn_1_Move",idMove:10, idMoveInverse:1, visible:true },
        "upColumn_2_Move": {name:"upColumn_2_Move",idMove:11, idMoveInverse:2, visible:true },
        "upColumn_3_Move": {name:"upColumn_3_Move",idMove:12, idMoveInverse:3, visible:true },
        "antiClockTunrMove": {name:"antiClockTunrMove",idMove:13, idMoveInverse:0, visible:true },
        "clockTurnFaceMiddle": {name:"clockTurnFaceMiddle",idMove:14, idMoveInverse:15, visible:false },
        "antiClockTurnFaceMiddle": {name:"antiClockTurnFaceMiddle",idMove:15, idMoveInverse:14, visible:false },
        "clockTurnFaceBack": {name:"clockTurnFaceBack",idMove:16, idMoveInverse:17, visible:false },
        "antiClockTurnFaceBack": {name:"antiClockTurnFaceBack",idMove:17, idMoveInverse:16, visible:false }
    },
    movesNumber:18

};

var stack = -1;

initArrayElementImageColor();
initButtonsElements();
defaultInitGame();
initArrayDataMaster();
inirArrayFacesPosition();
//prepareGameInit();
console.log(arrayInitialMoves);
displayCubeImage();


var obscureMove = document.addEventListener("keyup",obscure);
function obscure(event){
   
    if(event.key == "d"){
        var num = randomGen(0,17);
        arrayHistoryMoves.push(num);
        stack = arrayHistoryMoves.length-1;
        movesProperty.moveById[num].moveAction();
        displayCubeImage();
        console.log(movesProperty.moveById[ num ].name);
        console.log(arrayHistoryMoves);
        console.log(stack);

    }
    if(event.key == "r" && stack > -1){
        var num = arrayHistoryMoves[stack];
        stack--;
        movesProperty.moveById[ movesProperty.moveById[num].idMoveInverse  ].moveAction();
        displayCubeImage();
        console.log(movesProperty.moveById[ movesProperty.moveById[num].idMoveInverse  ].name);
        console.log(arrayHistoryMoves);
        console.log(stack);
        
    }
    if(event.key == "f" && arrayHistoryMoves.length  > stack + 1){
        stack++;
        var num = arrayHistoryMoves[stack];
        movesProperty.moveById[ num ].moveAction();
        displayCubeImage();
        console.log(movesProperty.moveById[ num ].name);
        console.log(arrayHistoryMoves);
        console.log(stack);
    }
    
}









// functions of array initializacion
function initButtonsElements(){
    arrayElementsButtonsMove = new Array(movesProperty.movesNumber);
    for(var i = 0; i < movesProperty.movesNumber; i++){
        if(movesProperty.moveById[i].visible){
            arrayElementsButtonsMove[i] = document.getElementById(movesProperty.moveById[i].name);
          
        }
    }
    console.log(arrayElementsButtonsMove);
    setButtonsAddEventListner();
}
function setButtonsAddEventListner(){
    arrayElementsButtonsMove[0].addEventListener("click",clockTurnMoveB);
    arrayElementsButtonsMove[1].addEventListener("click",downColumn_1_MoveB);
    arrayElementsButtonsMove[2].addEventListener("click",downColumn_2_MoveB);
    arrayElementsButtonsMove[3].addEventListener("click",downColumn_3_MoveB);
    arrayElementsButtonsMove[4].addEventListener("click",rightArrow_1_MoveB);
    arrayElementsButtonsMove[5].addEventListener("click",leftArrow_1_MoveB);
    arrayElementsButtonsMove[6].addEventListener("click",rightArrow_2_MoveB);
    arrayElementsButtonsMove[7].addEventListener("click",leftArrow_2_MoveB);
    arrayElementsButtonsMove[8].addEventListener("click",rightArrow_3_MoveB);
    arrayElementsButtonsMove[9].addEventListener("click",leftArrow_3_MoveB);
    arrayElementsButtonsMove[10].addEventListener("click",upColumn_1_MoveB);
    arrayElementsButtonsMove[11].addEventListener("click",upColumn_2_MoveB);
    arrayElementsButtonsMove[12].addEventListener("click",upColumn_3_MoveB);
    arrayElementsButtonsMove[13].addEventListener("click",antiClockTunrMoveB);
  
  
}
function initArrayElementImageColor(){
    arrayElementsImageColor = new Array(numberFaces);
    for(var i = 0; i< numberFaces; i++){
        arrayElementsImageColor[i] = new Array(numberArrows);    
        for(var j = 0; j < numberArrows; j++){
            arrayElementsImageColor[i][j] = new Array(numerColumns);  
            for(var k = 0 ; k<numerColumns; k++){
                arrayElementsImageColor[i][j][k] = document.getElementById("cuadro_"+i+"_"+j+"_"+k);
               
            }
        }
            
    }

}
function randomInitGame(){
    var ColorLeft=[9,9,9,9,9,9];
    
    var flag;

    arrayInitialGame = new Array(numberFaces);
    for(var i = 0; i< numberFaces; i++){
        arrayInitialGame[i] = new Array(numberArrows);    
        for(var j = 0; j < numberArrows; j++){
            arrayInitialGame[i][j] = new Array(numerColumns);  
            for(var k = 0 ; k<numerColumns; k++){
                flag = true;
                while(flag){
                    var number = randomGen(0,5); 
                    if( ColorLeft[number] > 0){
                        arrayInitialGame[i][j][k] = number;
                        ColorLeft[number]--;
                        flag = false;
                    }
                }
            }
        }
    }
}
function prepareGameInit(){
    var numMoves = randomGen(10,12);
    for (var i = 0; i < numMoves; i++){
        arrayInitialMoves.push( randomGen(0, movesProperty.movesNumber - 1) ); 
        
        movesProperty.moveById[ arrayInitialMoves[i] ].moveAction();
    }
    displayCubeImage();

}
function defaultInitGame(){
    arrayInitialGame = new Array(numberFaces);
    for(var i = 0; i< numberFaces; i++){
        arrayInitialGame[i] = new Array(numberArrows);    
        for(var j = 0; j < numberArrows; j++){
            arrayInitialGame[i][j] = new Array(numerColumns);  
            for(var k = 0 ; k<numerColumns; k++){
                arrayInitialGame[i][j][k] = i;
               
            }
        }
            
    }
}
function initArrayDataMaster(){
    arrayDataMaster = new Array(numberFaces);
    for(var i = 0; i< numberFaces; i++){
        arrayDataMaster[i] = new Array(numberArrows);    
        for(var j = 0; j < numberArrows; j++){
            arrayDataMaster[i][j] = new Array(numerColumns);  
            for(var k = 0 ; k<numerColumns; k++){
                arrayDataMaster[i][j][k] = arrayInitialGame[i][j][k];
               
            }
        }
            
    }
}
function displayCubeImage(){
 
    for(var i = 0; i< numberFaces; i++){
        for(var j = 0; j < numberArrows; j++){
            for(var k = 0 ; k < numerColumns; k++){
                arrayElementsImageColor[i][j][k].src = 
                colorsProperty.route[ arrayDataMaster [ arrayFacesPosition[i] ][j][k] ];
            }
        }
    }
}
function inirArrayFacesPosition() {
    arrayFacesPosition = new Array(numberFaces);
    for(var i = 0; i < numberFaces; i++){
        arrayFacesPosition[i] = i;
    }
}







//move functions button


function clockTurnMoveB(){
    var arrayNew = copyArray3d(arrayDataMaster);
    transposedClockMatriz(arrayDataMaster, arrayFacesPosition[positionBaseFace], arrayNew);
    insertArrowIntoColumn(arrayDataMaster,arrayFacesPosition[0],2,arrayNew,arrayFacesPosition[3],0);
    insertColumnIntoArrowInverted(arrayDataMaster,arrayFacesPosition[3],0,arrayNew,arrayFacesPosition[4],0);
    insertArrowIntoColumn(arrayDataMaster,arrayFacesPosition[4],0,arrayNew,arrayFacesPosition[1],2);
    insertColumnIntoArrowInverted(arrayDataMaster,arrayFacesPosition[1],2,arrayNew,arrayFacesPosition[0],2);
    arrayDataMaster = arrayNew;
    displayCubeImage();
   
}
function downColumn_1_MoveB(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[0],0,arrayNew,arrayFacesPosition[2],0);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[2],0,arrayNew,arrayFacesPosition[4],0);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[4],0,arrayNew,arrayFacesPosition[5],0);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[5],0,arrayNew,arrayFacesPosition[0],0);
    transposedClockMatriz(arrayDataMaster,arrayFacesPosition[1],arrayNew);
    arrayDataMaster = arrayNew;
    displayCubeImage();
}
function downColumn_2_MoveB(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[0],1,arrayNew,arrayFacesPosition[2],1);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[2],1,arrayNew,arrayFacesPosition[4],1);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[4],1,arrayNew,arrayFacesPosition[5],1);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[5],1,arrayNew,arrayFacesPosition[0],1);
    arrayDataMaster = arrayNew;
    displayCubeImage();
}
function downColumn_3_MoveB(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[0],2,arrayNew,arrayFacesPosition[2],2);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[2],2,arrayNew,arrayFacesPosition[4],2);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[4],2,arrayNew,arrayFacesPosition[5],2);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[5],2,arrayNew,arrayFacesPosition[0],2);
    transposedAntiClockMatriz(arrayDataMaster,arrayFacesPosition[3],arrayNew);
    arrayDataMaster = arrayNew;
    displayCubeImage();
}
function rightArrow_1_MoveB(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertArrowIntoArrow(arrayDataMaster, arrayFacesPosition[2],0,arrayNew,arrayFacesPosition[3],0);
    insertArrowIntoArrowInverted(arrayDataMaster, arrayFacesPosition[3],0,arrayNew,arrayFacesPosition[5],2);
    insertArrowIntoArrowInverted(arrayDataMaster, arrayFacesPosition[5],2,arrayNew,arrayFacesPosition[1],0);
    insertArrowIntoArrow(arrayDataMaster, arrayFacesPosition[1],0,arrayNew,arrayFacesPosition[2],0);
    transposedAntiClockMatriz(arrayDataMaster,arrayFacesPosition[0],arrayNew);
    arrayDataMaster = arrayNew;
    displayCubeImage();
}
function leftArrow_1_MoveB(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertArrowIntoArrow(arrayDataMaster, arrayFacesPosition[2],0,arrayNew,arrayFacesPosition[1],0);
    insertArrowIntoArrowInverted(arrayDataMaster, arrayFacesPosition[1],0,arrayNew,arrayFacesPosition[5],2);
    insertArrowIntoArrowInverted(arrayDataMaster, arrayFacesPosition[5],2,arrayNew,arrayFacesPosition[3],0);
    insertArrowIntoArrow(arrayDataMaster, arrayFacesPosition[3],0,arrayNew,arrayFacesPosition[2],0);
    transposedClockMatriz(arrayDataMaster,arrayFacesPosition[0],arrayNew);
    arrayDataMaster = arrayNew;
    displayCubeImage();
}
function rightArrow_2_MoveB(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertArrowIntoArrow(arrayDataMaster, arrayFacesPosition[2],1,arrayNew,arrayFacesPosition[3],1);
    insertArrowIntoArrowInverted(arrayDataMaster, arrayFacesPosition[3],1,arrayNew,arrayFacesPosition[5],1);
    insertArrowIntoArrowInverted(arrayDataMaster, arrayFacesPosition[5],1,arrayNew,arrayFacesPosition[1],1);
    insertArrowIntoArrow(arrayDataMaster, arrayFacesPosition[1],1,arrayNew,arrayFacesPosition[2],1);
    arrayDataMaster = arrayNew;
    displayCubeImage();
}
function leftArrow_2_MoveB(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertArrowIntoArrow(arrayDataMaster, arrayFacesPosition[2],1,arrayNew,arrayFacesPosition[1],1);
    insertArrowIntoArrowInverted(arrayDataMaster, arrayFacesPosition[1],1,arrayNew,arrayFacesPosition[5],1);
    insertArrowIntoArrowInverted(arrayDataMaster, arrayFacesPosition[5],1,arrayNew,arrayFacesPosition[3],1);
    insertArrowIntoArrow(arrayDataMaster, arrayFacesPosition[3],1,arrayNew,arrayFacesPosition[2],1);
    arrayDataMaster = arrayNew;
    displayCubeImage();
}
function rightArrow_3_MoveB(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertArrowIntoArrow(arrayDataMaster, arrayFacesPosition[2],2,arrayNew,arrayFacesPosition[3],2);
    insertArrowIntoArrowInverted(arrayDataMaster, arrayFacesPosition[3],2,arrayNew,arrayFacesPosition[5],0);
    insertArrowIntoArrowInverted(arrayDataMaster, arrayFacesPosition[5],0,arrayNew,arrayFacesPosition[1],2);
    insertArrowIntoArrow(arrayDataMaster, arrayFacesPosition[1],2,arrayNew,arrayFacesPosition[2],2);
    transposedClockMatriz(arrayDataMaster,arrayFacesPosition[4],arrayNew);
    arrayDataMaster = arrayNew;
    displayCubeImage();
}
function leftArrow_3_MoveB(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertArrowIntoArrow(arrayDataMaster, arrayFacesPosition[2],2,arrayNew,arrayFacesPosition[1],2);
    insertArrowIntoArrowInverted(arrayDataMaster, arrayFacesPosition[1],2,arrayNew,arrayFacesPosition[5],0);
    insertArrowIntoArrowInverted(arrayDataMaster, arrayFacesPosition[5],0,arrayNew,arrayFacesPosition[3],2);
    insertArrowIntoArrow(arrayDataMaster, arrayFacesPosition[3],2,arrayNew,arrayFacesPosition[2],2);
    transposedAntiClockMatriz(arrayDataMaster,arrayFacesPosition[4],arrayNew);
    arrayDataMaster = arrayNew;
    displayCubeImage();
}

function upColumn_1_MoveB(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[0],0,arrayNew,arrayFacesPosition[5],0);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[5],0,arrayNew,arrayFacesPosition[4],0);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[4],0,arrayNew,arrayFacesPosition[2],0);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[2],0,arrayNew,arrayFacesPosition[0],0);
    transposedAntiClockMatriz(arrayDataMaster,arrayFacesPosition[1],arrayNew);
    arrayDataMaster = arrayNew;
    displayCubeImage();
}
function upColumn_2_MoveB(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[0],1,arrayNew,arrayFacesPosition[5],1);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[5],1,arrayNew,arrayFacesPosition[4],1);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[4],1,arrayNew,arrayFacesPosition[2],1);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[2],1,arrayNew,arrayFacesPosition[0],1);
    arrayDataMaster = arrayNew;
    displayCubeImage();
}
function upColumn_3_MoveB(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[0],2,arrayNew,arrayFacesPosition[5],2);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[5],2,arrayNew,arrayFacesPosition[4],2);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[4],2,arrayNew,arrayFacesPosition[2],2);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[2],2,arrayNew,arrayFacesPosition[0],2);
    transposedClockMatriz(arrayDataMaster,arrayFacesPosition[3],arrayNew);
    arrayDataMaster = arrayNew;
    displayCubeImage();
}
function antiClockTunrMoveB(){
    
    var arrayNew = copyArray3d(arrayDataMaster);
    transposedAntiClockMatriz(arrayDataMaster, arrayFacesPosition[positionBaseFace], arrayNew);
    insertColumnIntoArrow(arrayDataMaster,arrayFacesPosition[3],0,arrayNew,arrayFacesPosition[0],2);
    insertArrowIntoColumnInverted(arrayDataMaster,arrayFacesPosition[0],2,arrayNew,arrayFacesPosition[1],2);
    insertColumnIntoArrow(arrayDataMaster,arrayFacesPosition[1],2,arrayNew,arrayFacesPosition[4],0);
    insertArrowIntoColumnInverted(arrayDataMaster,arrayFacesPosition[4],0,arrayNew,arrayFacesPosition[3],0);
    arrayDataMaster = arrayNew;
    displayCubeImage();
}
function antiClockTurnFaceMiddleB(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertArrowIntoColumnInverted(arrayDataMaster,arrayFacesPosition[0],1,arrayNew,arrayFacesPosition[1],1);
    insertColumnIntoArrow(arrayDataMaster,arrayFacesPosition[1],1,arrayNew,arrayFacesPosition[4],1);
    insertArrowIntoColumnInverted(arrayDataMaster,arrayFacesPosition[4],1,arrayNew,arrayFacesPosition[3],1);
    insertColumnIntoArrow(arrayDataMaster,arrayFacesPosition[3],1,arrayNew,arrayFacesPosition[0],1);
    arrayDataMaster = arrayNew;
    displayCubeImage();
}
function clockTurnFaceMiddleB(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertArrowIntoColumn(arrayDataMaster,arrayFacesPosition[0],1,arrayNew,arrayFacesPosition[3],1);
    insertColumnIntoArrowInverted(arrayDataMaster,arrayFacesPosition[3],1,arrayNew,arrayFacesPosition[4],1);
    insertArrowIntoColumn(arrayDataMaster,arrayFacesPosition[4],1,arrayNew,arrayFacesPosition[1],1);
    insertColumnIntoArrowInverted(arrayDataMaster,arrayFacesPosition[1],1,arrayNew,arrayFacesPosition[0],1);
    arrayDataMaster = arrayNew;
    displayCubeImage();
}
function clockTurnFaceBackB(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertArrowIntoColumn(arrayDataMaster,arrayFacesPosition[0],0,arrayNew,arrayFacesPosition[3],2);
    insertColumnIntoArrowInverted(arrayDataMaster,arrayFacesPosition[3],2,arrayNew,arrayFacesPosition[4],2);
    insertArrowIntoColumn(arrayDataMaster,arrayFacesPosition[4],2,arrayNew,arrayFacesPosition[1],0);
    insertColumnIntoArrowInverted(arrayDataMaster,arrayFacesPosition[1],0,arrayNew,arrayFacesPosition[0],0);
    transposedAntiClockMatriz(arrayDataMaster,arrayFacesPosition[5],arrayNew);
    arrayDataMaster = arrayNew;
    displayCubeImage();
}
function antiClockTurnFaceBackB(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertArrowIntoColumnInverted(arrayDataMaster,arrayFacesPosition[0],0,arrayNew,arrayFacesPosition[1],0);
    insertColumnIntoArrow(arrayDataMaster,arrayFacesPosition[1],0,arrayNew,arrayFacesPosition[4],2);
    insertArrowIntoColumnInverted(arrayDataMaster,arrayFacesPosition[4],2,arrayNew,arrayFacesPosition[3],2);
    insertColumnIntoArrow(arrayDataMaster,arrayFacesPosition[3],2,arrayNew,arrayFacesPosition[0],0);
    transposedClockMatriz(arrayDataMaster,arrayFacesPosition[5],arrayNew);
    arrayDataMaster = arrayNew;
    displayCubeImage();
}

//move function simple

function clockTurnMove(){
    var arrayNew = copyArray3d(arrayDataMaster);
    transposedClockMatriz(arrayDataMaster, arrayFacesPosition[positionBaseFace], arrayNew);
    insertArrowIntoColumn(arrayDataMaster,arrayFacesPosition[0],2,arrayNew,arrayFacesPosition[3],0);
    insertColumnIntoArrowInverted(arrayDataMaster,arrayFacesPosition[3],0,arrayNew,arrayFacesPosition[4],0);
    insertArrowIntoColumn(arrayDataMaster,arrayFacesPosition[4],0,arrayNew,arrayFacesPosition[1],2);
    insertColumnIntoArrowInverted(arrayDataMaster,arrayFacesPosition[1],2,arrayNew,arrayFacesPosition[0],2);
    arrayDataMaster = arrayNew;
    
   
}
function downColumn_1_Move(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[0],0,arrayNew,arrayFacesPosition[2],0);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[2],0,arrayNew,arrayFacesPosition[4],0);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[4],0,arrayNew,arrayFacesPosition[5],0);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[5],0,arrayNew,arrayFacesPosition[0],0);
    transposedClockMatriz(arrayDataMaster,arrayFacesPosition[1],arrayNew);
    arrayDataMaster = arrayNew;
    
}
function downColumn_2_Move(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[0],1,arrayNew,arrayFacesPosition[2],1);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[2],1,arrayNew,arrayFacesPosition[4],1);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[4],1,arrayNew,arrayFacesPosition[5],1);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[5],1,arrayNew,arrayFacesPosition[0],1);
    arrayDataMaster = arrayNew;
    
}
function downColumn_3_Move(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[0],2,arrayNew,arrayFacesPosition[2],2);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[2],2,arrayNew,arrayFacesPosition[4],2);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[4],2,arrayNew,arrayFacesPosition[5],2);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[5],2,arrayNew,arrayFacesPosition[0],2);
    transposedAntiClockMatriz(arrayDataMaster,arrayFacesPosition[3],arrayNew);
    arrayDataMaster = arrayNew;
    
}
function rightArrow_1_Move(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertArrowIntoArrow(arrayDataMaster, arrayFacesPosition[2],0,arrayNew,arrayFacesPosition[3],0);
    insertArrowIntoArrowInverted(arrayDataMaster, arrayFacesPosition[3],0,arrayNew,arrayFacesPosition[5],2);
    insertArrowIntoArrowInverted(arrayDataMaster, arrayFacesPosition[5],2,arrayNew,arrayFacesPosition[1],0);
    insertArrowIntoArrow(arrayDataMaster, arrayFacesPosition[1],0,arrayNew,arrayFacesPosition[2],0);
    transposedAntiClockMatriz(arrayDataMaster,arrayFacesPosition[0],arrayNew);
    arrayDataMaster = arrayNew;
    
}
function leftArrow_1_Move(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertArrowIntoArrow(arrayDataMaster, arrayFacesPosition[2],0,arrayNew,arrayFacesPosition[1],0);
    insertArrowIntoArrowInverted(arrayDataMaster, arrayFacesPosition[1],0,arrayNew,arrayFacesPosition[5],2);
    insertArrowIntoArrowInverted(arrayDataMaster, arrayFacesPosition[5],2,arrayNew,arrayFacesPosition[3],0);
    insertArrowIntoArrow(arrayDataMaster, arrayFacesPosition[3],0,arrayNew,arrayFacesPosition[2],0);
    transposedClockMatriz(arrayDataMaster,arrayFacesPosition[0],arrayNew);
    arrayDataMaster = arrayNew;
    
}
function rightArrow_2_Move(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertArrowIntoArrow(arrayDataMaster, arrayFacesPosition[2],1,arrayNew,arrayFacesPosition[3],1);
    insertArrowIntoArrowInverted(arrayDataMaster, arrayFacesPosition[3],1,arrayNew,arrayFacesPosition[5],1);
    insertArrowIntoArrowInverted(arrayDataMaster, arrayFacesPosition[5],1,arrayNew,arrayFacesPosition[1],1);
    insertArrowIntoArrow(arrayDataMaster, arrayFacesPosition[1],1,arrayNew,arrayFacesPosition[2],1);
    arrayDataMaster = arrayNew;
    
}
function leftArrow_2_Move(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertArrowIntoArrow(arrayDataMaster, arrayFacesPosition[2],1,arrayNew,arrayFacesPosition[1],1);
    insertArrowIntoArrowInverted(arrayDataMaster, arrayFacesPosition[1],1,arrayNew,arrayFacesPosition[5],1);
    insertArrowIntoArrowInverted(arrayDataMaster, arrayFacesPosition[5],1,arrayNew,arrayFacesPosition[3],1);
    insertArrowIntoArrow(arrayDataMaster, arrayFacesPosition[3],1,arrayNew,arrayFacesPosition[2],1);
    arrayDataMaster = arrayNew;
    
}
function rightArrow_3_Move(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertArrowIntoArrow(arrayDataMaster, arrayFacesPosition[2],2,arrayNew,arrayFacesPosition[3],2);
    insertArrowIntoArrowInverted(arrayDataMaster, arrayFacesPosition[3],2,arrayNew,arrayFacesPosition[5],0);
    insertArrowIntoArrowInverted(arrayDataMaster, arrayFacesPosition[5],0,arrayNew,arrayFacesPosition[1],2);
    insertArrowIntoArrow(arrayDataMaster, arrayFacesPosition[1],2,arrayNew,arrayFacesPosition[2],2);
    transposedClockMatriz(arrayDataMaster,arrayFacesPosition[4],arrayNew);
    arrayDataMaster = arrayNew;
    
}
function leftArrow_3_Move(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertArrowIntoArrow(arrayDataMaster, arrayFacesPosition[2],2,arrayNew,arrayFacesPosition[1],2);
    insertArrowIntoArrowInverted(arrayDataMaster, arrayFacesPosition[1],2,arrayNew,arrayFacesPosition[5],0);
    insertArrowIntoArrowInverted(arrayDataMaster, arrayFacesPosition[5],0,arrayNew,arrayFacesPosition[3],2);
    insertArrowIntoArrow(arrayDataMaster, arrayFacesPosition[3],2,arrayNew,arrayFacesPosition[2],2);
    transposedAntiClockMatriz(arrayDataMaster,arrayFacesPosition[4],arrayNew);
    arrayDataMaster = arrayNew;
   
}

function upColumn_1_Move(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[0],0,arrayNew,arrayFacesPosition[5],0);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[5],0,arrayNew,arrayFacesPosition[4],0);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[4],0,arrayNew,arrayFacesPosition[2],0);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[2],0,arrayNew,arrayFacesPosition[0],0);
    transposedAntiClockMatriz(arrayDataMaster,arrayFacesPosition[1],arrayNew);
    arrayDataMaster = arrayNew;
    
}
function upColumn_2_Move(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[0],1,arrayNew,arrayFacesPosition[5],1);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[5],1,arrayNew,arrayFacesPosition[4],1);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[4],1,arrayNew,arrayFacesPosition[2],1);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[2],1,arrayNew,arrayFacesPosition[0],1);
    arrayDataMaster = arrayNew;
    
}
function upColumn_3_Move(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[0],2,arrayNew,arrayFacesPosition[5],2);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[5],2,arrayNew,arrayFacesPosition[4],2);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[4],2,arrayNew,arrayFacesPosition[2],2);
    insertColumnIntoColumn(arrayDataMaster, arrayFacesPosition[2],2,arrayNew,arrayFacesPosition[0],2);
    transposedClockMatriz(arrayDataMaster,arrayFacesPosition[3],arrayNew);
    arrayDataMaster = arrayNew;
    
}
function antiClockTunrMove(){
    
    var arrayNew = copyArray3d(arrayDataMaster);
    transposedAntiClockMatriz(arrayDataMaster, arrayFacesPosition[positionBaseFace], arrayNew);
    insertColumnIntoArrow(arrayDataMaster,arrayFacesPosition[3],0,arrayNew,arrayFacesPosition[0],2);
    insertArrowIntoColumnInverted(arrayDataMaster,arrayFacesPosition[0],2,arrayNew,arrayFacesPosition[1],2);
    insertColumnIntoArrow(arrayDataMaster,arrayFacesPosition[1],2,arrayNew,arrayFacesPosition[4],0);
    insertArrowIntoColumnInverted(arrayDataMaster,arrayFacesPosition[4],0,arrayNew,arrayFacesPosition[3],0);
    arrayDataMaster = arrayNew;
   
}
function antiClockTurnFaceMiddle(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertArrowIntoColumnInverted(arrayDataMaster,arrayFacesPosition[0],1,arrayNew,arrayFacesPosition[1],1);
    insertColumnIntoArrow(arrayDataMaster,arrayFacesPosition[1],1,arrayNew,arrayFacesPosition[4],1);
    insertArrowIntoColumnInverted(arrayDataMaster,arrayFacesPosition[4],1,arrayNew,arrayFacesPosition[3],1);
    insertColumnIntoArrow(arrayDataMaster,arrayFacesPosition[3],1,arrayNew,arrayFacesPosition[0],1);
    arrayDataMaster = arrayNew;
    
}
function clockTurnFaceMiddle(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertArrowIntoColumn(arrayDataMaster,arrayFacesPosition[0],1,arrayNew,arrayFacesPosition[3],1);
    insertColumnIntoArrowInverted(arrayDataMaster,arrayFacesPosition[3],1,arrayNew,arrayFacesPosition[4],1);
    insertArrowIntoColumn(arrayDataMaster,arrayFacesPosition[4],1,arrayNew,arrayFacesPosition[1],1);
    insertColumnIntoArrowInverted(arrayDataMaster,arrayFacesPosition[1],1,arrayNew,arrayFacesPosition[0],1);
    arrayDataMaster = arrayNew;
   
}
function clockTurnFaceBack(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertArrowIntoColumn(arrayDataMaster,arrayFacesPosition[0],0,arrayNew,arrayFacesPosition[3],2);
    insertColumnIntoArrowInverted(arrayDataMaster,arrayFacesPosition[3],2,arrayNew,arrayFacesPosition[4],2);
    insertArrowIntoColumn(arrayDataMaster,arrayFacesPosition[4],2,arrayNew,arrayFacesPosition[1],0);
    insertColumnIntoArrowInverted(arrayDataMaster,arrayFacesPosition[1],0,arrayNew,arrayFacesPosition[0],0);
    transposedAntiClockMatriz(arrayDataMaster,arrayFacesPosition[5],arrayNew);
    arrayDataMaster = arrayNew;
    
}
function antiClockTurnFaceBack(){
    var arrayNew = copyArray3d(arrayDataMaster);
    insertArrowIntoColumnInverted(arrayDataMaster,arrayFacesPosition[0],0,arrayNew,arrayFacesPosition[1],0);
    insertColumnIntoArrow(arrayDataMaster,arrayFacesPosition[1],0,arrayNew,arrayFacesPosition[4],2);
    insertArrowIntoColumnInverted(arrayDataMaster,arrayFacesPosition[4],2,arrayNew,arrayFacesPosition[3],2);
    insertColumnIntoArrow(arrayDataMaster,arrayFacesPosition[3],2,arrayNew,arrayFacesPosition[0],0);
    transposedClockMatriz(arrayDataMaster,arrayFacesPosition[5],arrayNew);
    arrayDataMaster = arrayNew;
    
}

//function matriz 

function transposedClockMatriz(arrayBase,face,arrayEdited){
    
    var numberArrows = arrayBase[face].length
    for(var i=0; i < numberArrows; i++){
        var numberColumns = arrayBase[face][i].length;
        for(var j=0; j < numberColumns; j++){

            arrayEdited[face][i][j] = arrayBase[face][ (numberColumns-1)-j ][i];
        }   
    }
}
function transposedAntiClockMatriz(arrayBase,face,arrayEdited){
    
    var numberArrows = arrayBase[face].length
    for(var i=0; i < numberArrows; i++){
        var numberColumns = arrayBase[face][i].length;
        for(var j=0; j < numberColumns; j++){

            arrayEdited[face][i][j] = arrayBase[face][j][(numberArrows-1)-i];
        }   
    }
}
function insertArrowIntoColumn(arrayBase,faceB,arrowB,arrayEdited,faceE,columnE){
    var numberElements = numberArrows;
    for(var i=0; i < numberElements ; i++){
        arrayEdited[faceE][i][columnE] = arrayBase[faceB][arrowB][i];
    }
}
function insertArrowIntoColumnInverted(arrayBase,faceB,arrowB,arrayEdited,faceE,columnE){
    var numberElements = numberArrows;
    for(var i=0; i < numberElements ; i++){
        arrayEdited[faceE][(numberElements-1)-i][columnE] = arrayBase[faceB][arrowB][i];
    }
}
function insertColumnIntoArrow(arrayBase,faceB,columnB,arrayEdited,faceE,arrowE){
    
    var numberElements = numerColumns;
    for(var i=0; i < numberElements ; i++){
        arrayEdited[faceE][arrowE][i] = arrayBase[faceB][i][columnB];
    }
}
function insertColumnIntoArrowInverted(arrayBase,faceB,columnB,arrayEdited,faceE,arrowE){
    
    var numberElements = numerColumns;
    for(var i=0; i < numberElements ; i++){
        arrayEdited[faceE][arrowE][(numberElements-1)-i] = arrayBase[faceB][i][columnB];
    }
}
function insertColumnIntoColumn(arrayBase,faceB,columnB,arrayEdited,faceE,columnE){
    var numberElements = numerColumns;
    for(var i=0; i < numberElements ; i++){
        arrayEdited[faceE][i][columnE] = arrayBase[faceB][i][columnB];
    }
}
function insertArrowIntoArrow(arrayBase,faceB,arrowB,arrayEdited,faceE,arrowE){
    var numberElements = numberArrows;
    for(var i=0; i < numberElements ; i++){
        arrayEdited[faceE][arrowE][i] = arrayBase[faceB][arrowB][i];
    }
}
function insertArrowIntoArrowInverted(arrayBase,faceB,arrowB,arrayEdited,faceE,arrowE){
    
    var numberElements = numberArrows;
    for(var i=0; i < numberElements ; i++){
        arrayEdited[faceE][arrowE][(numberElements-1)-i] = arrayBase[faceB][arrowB][i];
    }
}







function visionWithNextMove(){
    var backUpDataMaster = copyArray3d(arrayDataMaster);
    var backUp2;
    var backUp3;
    var bestMove = 0;
    var minTrios = 36;
    var best2 = 0;
    var best3 = 0;
    
    for(var i = 0; i < movesProperty.movesNumber - 1; i++){
        movesProperty.moveById[i].moveAction();
        backUp2 = copyArray3d(arrayDataMaster);
        for(var k = 0; k < movesProperty.movesNumber - 1; k++){
            movesProperty.moveById[k].moveAction();
            backUp3 = copyArray3d(arrayDataMaster);
            for(var j = 0; j < movesProperty.movesNumber - 1; j++){
                movesProperty.moveById[j].moveAction();
                var currentTrios = getNumberOfTrios();
                if(currentTrios <= minTrios){
                    minTrios = currentTrios;
                    bestMove = i;
                    best2 = k;
                    best3 = j;
                }
                arrayDataMaster = copyArray3d(backUp3);
                
            }
            arrayDataMaster = copyArray3d(backUp2);
            
        }
        
        arrayDataMaster = copyArray3d(backUpDataMaster);
        
    }
    console.log(movesProperty.moveById[bestMove].name);
    console.log(movesProperty.moveById[best2].name);
    console.log(movesProperty.moveById[best3].name);
    console.log(minTrios);
    console.log(getNumberOfTrios());
    movesProperty.moveById[bestMove].moveAction();
    movesProperty.moveById[best2].moveAction();
    movesProperty.moveById[best3].moveAction();
    displayCubeImage();
    
}
function getNumberOfTrios(){
    var trios = 0;
    for(var i = 0; i < numberFaces ; i++){
        for(var j = 0; j < numberArrows; j++){
            if( arrayDataMaster[i][0][j] != arrayDataMaster[i][1][j] &&  
                arrayDataMaster[i][1][j] != arrayDataMaster[i][2][j] && 
                arrayDataMaster[i][2][j] != arrayDataMaster[i][0][j]){
                trios++;
            }
            if( arrayDataMaster[i][j][0] != arrayDataMaster[i][j][1] &&  
                arrayDataMaster[i][j][1] != arrayDataMaster[i][j][2] && 
                arrayDataMaster[i][j][2] != arrayDataMaster[i][j][0]){
                trios++;
            }
        }
    } 
    return trios;
}









function copyArray3d(arrayBase){
    var newArray = new Array(arrayBase.length);
    for(var i = 0; i< numberFaces; i++){
        newArray[i] = new Array(arrayBase[i].length);    
        for(var j = 0; j < numberArrows; j++){
            newArray[i][j] = new Array(arrayBase[i][j].length);  
            for(var k = 0 ; k<numerColumns; k++){
                newArray[i][j][k] = arrayBase[i][j][k];
               
            }
        }
            
    }
    return newArray;
}

function randomGen(min,max){
    resp = Math.floor( ((max - min + 1) * Math.random() ) + min );
    return resp;
}