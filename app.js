var score = 0;
var timer = 6;
var Hitrn = 0;


function makeBubble(){

    let buble = "";
for(let i=0; i<160; i++){
    let rn = Math.floor(Math.random()*10);
buble +=` <div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML=buble;
      
}


  function runTimer()
  {
   let clearSetFun =  setInterval(()=>{
        if(timer>0){
            timer--;
            document.querySelector("#timerValue").textContent=timer; 
        }
        else{
            clearInterval(clearSetFun);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>`;
            document.querySelector("#pbtm").innerHTML = `<h1 style="color:white">Your Score = ${score}</h1>`;
        }
        
    },1000)
  }

  function getNewHit()
  {
    Hitrn = Math.floor(Math.random()*10);
    document.querySelector("#getHit").textContent=Hitrn;
  }

  function incrseScore()
  {
    
    score = score+10;
    document.querySelector("#inScore").textContent=score; 
  }

  document.querySelector("#pbtm").addEventListener("click", function(details){
    var bubleNum = Number(details.target.textContent);
    if(bubleNum === Hitrn)
    {
      incrseScore();
      makeBubble();
      getNewHit() ;
      
    }
  });

getNewHit();
makeBubble();
runTimer();



