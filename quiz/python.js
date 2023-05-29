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
      question:"Who developed the Python language?",
      a:"Zim Den",
      b:"Guido van Rossum",
      c:"Niene Stom",
      d:"Wick van Rossum",
      correct:"b"
    },
  
    {
      question:"Which one of the following is the correct extension of the Python file?",
      a:".py",
      b:".python",
      c:".p",
      d:"None of these",
      correct:"a"
    },
    {
      question:"What do we use to define a block of code in Python language?",
      a:"Key",
      b:"Brackets",
      c:"Indentation",
      d:"None of these",
      correct:"c"
    },
    {
      question:"Which character is used in Python to make a single line comment?",
      a:"/",
      b:"//",
      c:"#",
      d:"!",
      correct:"c"
    },
    {
      question:"What is the method inside the class in python language?",
      a:"Object",
      b:"Function",
      c:"Attribute",
      d:"Argument",
      correct:"b"
    },
    {
      question:"The output to execute string.ascii_letters can also be obtained from:?",
      a:"character",
      b:"ascii_lowercase_string.digits",
      c:"lowercase_string.upercase",
      d:"string.ascii_lowercase+string.ascii_upercase",
      correct:"d"
    },
    {
      question:"What happens when '2' == 2 is executed?",
      a:"False",
      b:"True",
      c:"ValueError occurs",
      d:"TypeError occurs",
      correct:"a"
    },
    {
      question:"Which of the following is the correct statement?",
      a:"x dictionary z is created",
      b:"x and y are the keys of dictionary z",
      c:"0 and 1 are the values of dictionary z",
      d:"All of the above",
      correct:"d"
    },
    {
      question:"Which of the following arithmetic operators cannot be used with strings in python?",
      a:"+",
      b:"*",
      c:"-",
      d:"All of the above",
      correct:"c"
    },
    {
      question:"When a user does not use the return statement inside a function in Python, what will return the function in that case?",
      a:"0",
      b:"1",
      c:"None",
      d:"No output",
      correct:"c"
    },
    {
      question:"Which one of the following is the right way to call a function?",
      a:"call function_name()",
      b:"function function_name()",
      c:"function_name()",
      d:"None of the these",
      correct:"c"
    },
    {
      question:"Study the following program <br> str1='python language' <br> str1.find('p') <br> print(str1)?",
      a:"Print the index value of the p",
      b:"p",
      c:"python language",
      d:"AttributeError",
      correct:"c"
    },
    {
      question:"Study the following program flag = '' <br> a = 0 <br> i = 1 <br> while(a < 3): <br> j = 1 <br> if flag: <br>  i = j * i + 5 <br> else: <br> i = j * i + 1 <br> a = a + 1 <br> print(i)  What will be the output of this program ?",
      a:"12",
      b:"4",
      c:"11",
      d:"16",
      correct:"b"
    },
    {
      question:"Study the following program a = 2  while(a > -100):  a = a - 1 print(a)?",
      a:"Infinite",
      b:"102",
      c:"2",
      d:"11",
      correct:"b"
    },
    {
      question:"Which of the following statements is valid for 'if statement'?",
      a:"if f >= 12",
      b:"if (f >= 122)",
      c:"if (f => 1222)",
      d:"if f >= 12222",
      correct:"a"
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
