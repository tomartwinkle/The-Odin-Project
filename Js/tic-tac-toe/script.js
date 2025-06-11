const canvas=document.querySelector(".canvas");
const cells=document.querySelectorAll(".cell");
let turn=0;
let gameOver=false;

cells.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (box.textContent.trim()!=='') return;
        turn++;
        let marker="X";
        if(turn%2===0) marker="O";
            box.innerHTML=`
            <p>${marker}</p>`;
        
        const row=box.getAttribute("data-row");
        const col=box.getAttribute("data-col");
        board[row][col]=marker;
        updateScore();
    });
});

let board=[
    ['','',''],
    ['','',''],
    ['','','']
    ];
//This is the game board where each value can be empty,'X','O'
let scoreX=0;
let scoreO=0;

    
function updateScore(){
    const winner=checkWinner();//Call checkWinner to see if theres a winner after a move that will return X,O or null
    if(winner==='X'){
        scoreX++;
        console.log("Player X scores ! Total : "+scoreX);
        endGame('Player X wins !');
    }
    else if(winner==='O'){
        scoreO++;
        console.log("Player O scores ! Total : "+scoreO);
        endGame('Player O wins !');
    }
    else if(turn===9){
        endGame("Its a draw");
    }
}

function checkWinner(){
    const lines=[
        //rows
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]],
        //columns
        [[0,0],[1,0],[2,0]],
        [[0,1],[1,1],[2,1]],
        [[0,2],[1,2],[2,2]],
        //diagonals
        [[0,0],[1,1],[2,2]],
        [[0,2],[1,1],[2,0]]
    ];
    //These are all possible winning combinations

    for(let line of lines){ //loop thru each winning combination
        const [a,b,c] = line; 
        //a,b,c are coordinates of a line 
        const v1=board[a[0]][a[1]];
        const v2=board[b[0]][b[1]];
        const v3=board[c[0]][c[1]];
        //We fetch the value at those positions on the board: 'X', 'O', or ''.

        if(v1&&v1===v2&&v2===v3){
            return v1;
        }
        //check all values are not empty and all 3 are equal 
    }
    return null; //no winner
}
function endGame(message){
    gameOver=true;

    setTimeout(()=>{
        alert(message);
        resetBoard();
    },400);
}

function resetBoard(){
    turn = 0;
    gameOver=false;
    board=[
        ['','',''],
        ['','',''],
        ['','','']
    ];
    cells.forEach((cell)=>{
        cell.innerHTML='';
    });
}