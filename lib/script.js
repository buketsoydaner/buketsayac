// Add your code here
var number=0;
var timer;
var a =false;

function startTimer(){
  a=true;
  time();
  console.log(a)
}
function time(){
if(a){
  timer=setInterval(function(){
    number++ ;
    document.getElementById("output").innerText= number;
  },1000)
console.log(timer)
}
else{
  
    clearInterval(timer)
    
    document.getElementById('output').innerText = number;
console.log(number)

    }
}
  function stopTimer(){
    a=false;
   time()
    }