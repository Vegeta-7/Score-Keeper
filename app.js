// code without refactoring (big code)
// const p1Button=document.querySelector('#p1Button')
// const p2Button=document.querySelector('#p2Button')
// const p1Display=document.querySelector('#p1Display')
// const p2Display=document.querySelector('#p2Display')
// const resetButton=document.querySelector('#reset')
// const winningScoreSelect=document.querySelector('#playto')

// let p1Score=0;
// let p2Score=0;
// let winningScore=3;
// let isGameOver=false;

// p1Button.addEventListener('click',()=>{
//     if(!isGameOver){
//         p1Score++;
//         if(p1Score===winningScore){
//             isGameOver=true;
//             //without bulma
//             // p1Display.classList.add('winner')
//             // p2Display.classList.add('loser')

//             p1Display.classList.add('has-text-success')
//             p2Display.classList.add('has-text-danger')
//             p1Button.disabled=true;
//             p2Button.disabled=true;
//         }
//         p1Display.textContent=p1Score
//     }    
// })
// p2Button.addEventListener('click',()=>{
//     if(!isGameOver){
//         p2Score++;
//         if(p2Score===winningScore){
//             isGameOver=true;
//             //without bulma
//             // p2Display.classList.add('winner')
//             // p1Display.classList.add('loser')

//             p2Display.classList.add('has-text-success')
//             p1Display.classList.add('has-text-danger')
//             p1Button.disabled=true;
//             p2Button.disabled=true;
//         }
//         p2Display.textContent=p2Score
//     }  
// })
// winningScoreSelect.addEventListener('change',function(){   // change means if we select the same value nothing happens else reset the scores
//     winningScore=parseInt(this.value)  //option's value of the selectbox
//     reset();
// })
// resetButton.addEventListener('click',reset)  
// function reset(){    
//     isGameOver=false;
//     p1Score=0;
//     p2Score=0; 
//     p1Display.textContent=0
//     p2Display.textContent=0
//     // without bulma
//     // p2Display.classList.remove('winner','loser')
//     // p1Display.classList.remove('loser','winner')

//     p2Display.classList.remove('has-text-success','has-text-danger')
//     p1Display.classList.remove('has-text-success','has-text-danger')
//     p1Button.disabled=false;
//     p2Button.disabled=false;
// }



//making it smaller
const p1={
    score:0,
    button:document.querySelector('#p1Button'),
    display:document.querySelector('#p1Display')    
}
const p2={
    score:0,
    button:document.querySelector('#p2Button'),
    display:document.querySelector('#p2Display')    
}

const resetButton=document.querySelector('#reset')
const winningScoreSelect=document.querySelector('#playto')
let winningScore=3;
let isGameOver=false;

function updateScores(player,opponent){
    if(!isGameOver){
        player.score++;
        if(player.score===winningScore){
            isGameOver=true;            
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled=true;
            opponent.button.disabled=true;
        }
        player.display.textContent=player.score
    }
}

p1.button.addEventListener('click',()=>{
    updateScores(p1,p2)
})
p2.button.addEventListener('click',()=>{
    updateScores(p2,p1) 
})
winningScoreSelect.addEventListener('change',function(){   // change means if we select the same value nothing happens else reset the scores
    winningScore=parseInt(this.value)  //option's value of the selectbox
    reset();
})
resetButton.addEventListener('click',reset)  

function reset(){    
    isGameOver=false;
    for(let p of [p1,p2]){
        p.score=0
        p.display.textContent=0
        p.display.classList.remove('has-text-success','has-text-danger')
        p.button.disabled=false;
    }    
}