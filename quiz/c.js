// timer code
const startingMinutes=1;
let time = startingMinutes*60;
let count=0;
let timeTaken=0
const countdowm=document.getElementById("timer");
setInterval(updateCountdowm,1000);
function updateCountdowm(){
    const minutes=Math.floor(time/60)
    let seconds=time%60
    seconds=seconds<10 ? "0" +seconds:seconds
    countdowm.innerHTML='Time left : '+(minutes)+' : '+(seconds)
    if(time>0){
    time--
    count++
    }
    else{
      document.getElementById("set").style.display="none"
    }
    
}

// completed timer

// quiz data
var quizdata=[
    {
      question:"Choose the correct statement about c algorithm?",
      a:"Choose the correct statement about c algorithm",
      b:"An algorithm can endlessly run for some given input.",
      c:"An algorithm can result in zero outputs.",
      d:"An algorithm is independent of programming languages",
      correct:"d"
    },
	{
      question:"Who is the father of C language?",
      a:"Steve Jobs",
      b:"Guido van Rossum",
      c:"Dennis Ritchie",
      d:"Rasmus Lerdorf",
      correct:"c"
    },
	{
      question:"What level language is a C programming language?",
      a:"High-level language",
      b:"Low-level language",
      c:"Mid-level language",
      d:"None of the above",
      correct:"c"
    },
	{
      question:"What is #include <studio.h>?",
      a:"Pre-processor directive",
      b:"Inclusion directive",
      c:"File inclusion directive",
      d:"None of the above",
      correct:"a"
    },
	{
      question:"How many type of operators are there in C?",
      a:"5",
      b:"7",
      c:"10",
      d:"8",
      correct:"d"
    },
	{
      question:"What will be the output of the following pseudocode? Initialize integer x, y, set y = 1, x = 2, z =x ^ y <br> print z?",
      a:"1",
      b:"2",
      c:"3",
      d:"4",
      correct:"d"
    },
	{
      question:"Predict the output of the following pseudocode. <br> Integer value, n set value = 1, n = 45 <br> While (value less than equal) <br> value = value  << 1 <br> end loop <br>Print value?",
      a:"16",
      b:"32",
      c:"64",
      d:"36",
      correct:"c"
    },
	{
      question:"What will be the output of the following pseudocode? Initialize integer x, y, set y = 4 , x = 6  z = x & y print z",
      a:"30",
      b:"24",
      c:"28",
      d:"26",
      correct:"b"
    },
	{
      question:"Which of the following series will be printed by the given pseudocode <br> Integer a, b, c, set  b = 4, c = 5 <br> For (each a form 2 to 4) <br> print c <br> b = b - 1 <br> c = c + b <br> end for ",
      a:"5810",
      b:"136",
      c:"8910",
      d:"369",
      correct:"a"
    },
	{
      question:"Which of the following will be printed by the given pseudocode? Integer a, b, c, set  c = 12, b = 4 <br> A = c / b <br> C = b >> a <br> Print c",
      a:"2",
      b:"0",
      c:"6",
      d:"4",
      correct:"b"
    },
	{
      question:"What will be the output of the following C code <br> #include <stdio.h> <br> int main() <br> { <br>  char buf[12]; <br> stderr = stdin; <br> fscanf(stderr, '%s', buf); <br> printf('%s\n', buf); <br> }",
      a:"Compilation error",
      b:"Undefined behaviour",
      c:"Whatever user types",
      d:"None of the mentioned",
      correct:"c"
    },
	{
      question:"Will the following C code compile without any error <br> #include <stdio.h> <br> int main() <br> { <br> for (int k = 0; k < 10; k++); <br> return 0; <br> }",
      a:"Yes",
      b:"No",
      c:"Depends on the C standard implemented by compilers",
      d:"Error",
      correct:"c"
    },
	{
      question:"From the following sorting algorithms which algorithm needs the minimum number of swaps",
      a:"Selection sort",
      b:"Quick sort",
      c:"Merge sort",
      d:"Bubble sort",
      correct:"a"
    },
	{
      question:"Algorithms: Consider a B-tree of order 4 and is built from scratch by 10 successive insertions. What would be the maximum number of node splitting operations that take place ",
      a:"6",
      b:"3",
      c:"4",
      d:"2",
      correct:"d"
    },
	{
      question:"Which of the following is incorrect? Algorithms can be represented:",
      a:"as pseudo codes",
      b:"as syntax",
      c:"as programs",
      d:"as flowcharts",
      correct:"b"
    },
  ]
//   end of quiz data
var answer=document.querySelectorAll(".answer")
var question=document.getElementById('question')
var option_a=document.getElementById('a_value')
var option_b=document.getElementById('b_value')
var option_c=document.getElementById('c_value')
var option_d=document.getElementById('d_value')

var submitbtn=document.getElementById('submit')
var currentQuestion=0
var quizScore=0
var scoreboard=0
loadQuiz()
function loadQuiz()
{
  deselect()
  question.innerHTML=quizdata[currentQuestion].question
  option_a.innerHTML=quizdata[currentQuestion].a
  option_b.innerHTML=quizdata[currentQuestion].b
  option_c.innerHTML=quizdata[currentQuestion].c
  option_d.innerHTML=quizdata[currentQuestion].d
}
function deselect(){
  answer.forEach(answer=>answer.checked=false)
}
// next or submit button
submitbtn.addEventListener("click",()=>{
    var selectedoption
    answer.forEach(answer=>{
      if(answer.checked){
        selectedoption=answer.id
      }
    })
    
    if(selectedoption==quizdata[currentQuestion].correct){
      quizScore+=1
    }
    currentQuestion+=1
    if(currentQuestion==quizdata.length-1){
      submitbtn.innerHTML="submit"
    }
    if(currentQuestion==quizdata.length){
      timeTaken=count
      document.getElementById("set").style.display="none"
      document.getElementById("end").style.display="block"
      document.getElementById("teamed").style.display="none"
    }
    else{
    loadQuiz()
  }
  })
  // team no
  let teamno=0
  function team(){
    teamno=document.getElementById("team").value;
    document.getElementById("team").style.display="none";
    document.getElementById("teamtext").style.display="none";
    document.getElementById("teamed").style.display="none";
    document.getElementById("teambutton").style.display="none";
    // console.log(teamno)
}
let a =document.getElementById("result")
function res(){
  let value=document.getElementById("pin").value;
  if(value==123){
    
    document.getElementById("end").style.display="none"
    
    document.getElementById("score").innerHTML="score: "+quizScore;
    document.getElementById("timeteam").innerHTML="Time taken: "+timeTaken+" seconds.  &nbsp; | &nbsp; team number: "+teamno;
    
      console.log('correct')
      a.style.display="block";
      // return a=0;
    }
    
   
    





  

}
