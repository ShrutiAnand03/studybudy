let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turnX = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        if(turnX){
            box.style.color = "green"
            box.innerText="X";
            turnX = false;
        }
        else{
            box.style.color = "blue"
            box.innerText="O";
            turnX=true;
        }
        box.disabled = true;

        isWinner = checkWinner()
        
        if(!isWinner){
            checkDraw();
        }
    })
})

const checkDraw = () =>{
    count = 0
    for(box of boxes){
        if(box.innerText !=""){
            count ++;
        }
    }

    if(count==9){
        showDraw();
    }
}

const checkWinner = ()=>{
    winner = false 
    for(pattern of winPatterns){
        pos1Value = boxes[pattern[0]].innerText;
        pos2Value= boxes[pattern[1]].innerText;
        pos3Value = boxes[pattern[2]].innerText;

        if(pos1Value !=="" && pos2Value !=="" && pos3Value !==""){
            if(pos1Value == pos2Value && pos2Value == pos3Value){
                showWinner(pos1Value)
                return true
            }
        }
    }
    return winner
}

const showDraw = ()=>{
    msg.innerText = "It's a Draw!"
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is player: ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const disableBoxes =() => {
    for(box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const resetGame = () =>{
    turnX = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);