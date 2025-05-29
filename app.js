let boxes = document.querySelectorAll(".box");
const resetButton = document.querySelector("#reset");
let newgamebtn = document.querySelector("#new_btn");
let msgText = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
let turn0 = true;

const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetgame = () => {
    turn0 = true;
    enablebox();
    msgText.classList.add("hide");
    boxes.forEach(box => {
        box.textContent = "";
    })
}
boxes.forEach(box => {
    box.addEventListener("click", () => { 
        if(box.textContent === "") {
            if(turn0) {
                box.textContent = "X";
                turn0 = false;
            } else {
                box.textContent = "O";
                turn0 = true;
            }
        }
        win();
    })
})
const disablebox = () => {
    boxes.forEach(box => {
        box.disabled = true;
    })
}
const enablebox = () => {
    boxes.forEach(box => {
        box.disabled = false;
        innerText = "";
    })
}
const showwinner = (winner) => {
    msg.innerText = `congratulations, winner is ${winner}`;
    msgText.classList.remove("hide");
    disablebox();
}
const win = () =>{
    for(pattern of winpatterns){
        let postval1 = boxes[pattern[0]].textContent;
        let postval2 = boxes[pattern[1]].textContent;
        let postval3 = boxes[pattern[2]].textContent;

        if(postval1 != "" && postval1 == postval2 && postval1 == postval3){
            if(postval1===postval2 && postval2===postval3){
                console.log("Winner",postval1);
                showwinner(postval1);
            }
        }
    }
}
newgamebtn.addEventListener("click", () => {
    resetgame();
})
resetButton.addEventListener("click", () => {
    resetgame();
})