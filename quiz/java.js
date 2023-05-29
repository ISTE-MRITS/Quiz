// timer code
const startingMinutes=10;
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
    question:"1. What is the correct syntax for java main method?",
    a:"public static void main()",
    b:"public static void main(String[] args)",
    c:"public static void main(string[] args)",
    d:"Public static void main (String[] args)",
    correct:"b"
  },
    {
      question:"2. How many operands are there in a terinary operator? ",
      a:"1",
      b:"3",
      c:"2",
      d:"0",
      correct:"b"
    },
    {
      question:"3. Which of the following is used to run java program?",
      a:"compiler",
      b:"Interpreter",
      c:"Compiler & Interpreter",
      d:"Binary converter",
      correct:"c"
    },
    {
      question:"4. What is the extension of java?",
      a:".java",
      b:".ja",
      c:".Java",
      d:".js",
      correct:"a"
    },
    {
      question:"5. Which of the following is a feature of java programming?",
      a:"Abstraction",
      b:"Inheritence",
      c:"Pointers",
      d:"Both a & b",
      correct:"d"
    },
    {
      question:"6. If a=11,b=22 <br>c = a + b + a++ + b++ + ++a + ++b;<br> What are the values of a, b and c ?",
      a:"a=15, b=27, c=109",
      b:"a=14, b=23, c=105",
      c:"a=13, b=24, c=103",
      d:"a=13, b=24, c=108",
      correct:"c"
    },
    {
      question:"7. Initialize Integer x, y, z <br>Set y = 1, x = 2 <br>z = x & y<br>Print z",
      a:"1",
      b:"0",
      c:"3",
      d:"error",
      correct:"b"
    },
    {
      question:"8. Which of the following is a valid identifier ?",
      a:"Abc@123",
      b:"__Abc",
      c:"$ab#12",
      d:"All of the above",
      correct:"b"
    },
    {
      question:"9. Output of the code: <br> class one{<br>public static void main(String[] args){<br>System.out.println(10&12);}}",
      a:"8",
      b:"true",
      c:"false",
      d:"error",
      correct:"a"
    },
    {
      question:"10. Output of following code : <br> public class Test{<br>public static void main(String []args){<br>int i = 0;<br>for(i = 0; i < 10; i++){ break;}<br>System.out.println(i);	}}",
      a:"0",
      b:"1",
      c:"9",
      d:"10",
      correct:"b"
    },

    {
      question:"11. How do you determine the number of elements in an array? <br> int buses[]=new int[5];",
      a:"buses.lenght()",
      b:"buses.range()",
      c:"buses.size()",
      d:"buses.length",
      correct:"d"
    },
    {
      question:'12. What does this code output?<br> String[] nums = new String[] { "1", "9", "10" };<br>Arrays.sort(nums);<br>System.out.println(Arrays.toString(nums));',
      a:"[1, 9, 10]",
      b:"[1, 10, 9]",
      c:"[10, 1, 9]",
      d:"None of the above",
      correct:"b"
    },
    {
      question:"13. class Test {<br>int i;} <br>class Main {<br>public static void main(String args[]) { <br>Test t; <br>System.out.println(t.i); }",
      a:"0",
      b:"garbage value",
      c:"Compiler error",
      d:"Runtime error",
      correct:"c"
    },
    {
      question:"14. Java uses threads to enable the entire environment to be ______.",
      a:"Symmetric",
      b:"Asymmetric",
      c:"Synchronous",
      d:"Asynchronous",
      correct:"d"
    },
    {
      question:"15. In Java, when we implement an interface method, it must be declared as:",
      a:"private",
      b:"protected",
      c:"public",
      d:"friend",
      correct:"c"
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
