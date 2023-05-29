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
      question:"Which one of the following refers to querying the unstructured textual data?",
      a:"Information access",
      b:"Information update",
      c:"Information retrieval",
      d:"Information manipulation",
      correct:"c"
    },
	{
      question:"Which of the following is an essential process in which the intelligent methods are applied to extract data patterns?",
      a:"Warehousing",
      b:"Data Mining",
      c:"Text Mining",
      d:"Data Selection",
      correct:"b"
    },
	{
      question:"For what purpose, the analysis tools pre-compute the summaries of the huge amount of data?",
      a:"In order to maintain consistency",
      b:"For authentication",
      c:"For data access",
      d:"To obtain the queries response",
      correct:"d"
    },
	{
      question:"The datanode and namenode are respectiviley?",
      a:"Master and worker nodes",
      b:"Worker and Master nodes",
      c:"Both are worker nodes",
      d:"None",
      correct:"b"
    },
	{
      question:"Which one of the following statements is not correct about the data cleaning?",
      a:"It refers to the process of data cleaning",
      b:"It refers to the transformation of wrong data into correct data",
      c:"It refers to correcting inconsistent data",
      d:"All of the above",
      correct:"d"
    },
	{
      question:"The client reading the data from HDFS filesystem in Hadoop",
      a:"gets the data from the namenode",
      b:"gets the block location from the datanode",
      c:"gets only the block locations form the namenode",
      d:"gets both the data and block location from the namenode.",
      correct:"c"
    },
	{
      question:"How do you start writing an if statement in R?",
      a:"if (x > y)",
      b:"if x > y:",
      c:"if x > y then:",
      d:"None of the above",
      correct:"a"
    },
	{
      question:"How do you start writing a while loop in R",
      a:"while x < y:",
      b:"x < y while",
      c:"while x < y",
      d:"while (x < y)",
      correct:"a"
    },
	{
      question:"Identify the key data science skills among the following",
      a:"data visualization",
      b:"machine learning",
      c:"Statistics",
      d:"all of the above",
      correct:"d"
    },
	{
      question:"The ___ codec from Google provides modest compression ratios.",
      a:"Snapcheck",
      b:"Snappy",
      c:"FileCompress",
      d:"None of the mentioned",
      correct:"b"
    },
	{
      question:"Which of the following machine learning algorithm is based upon the idea of bagging?",
      a:"decision tree",
      b:"random-forest",
      c:"Classification",
      d:"regression",
      correct:"b"
    },
	{
      question:"Identify the clustering method which takes care of variance in data",
      a:"decision tree",
      b:"Gaussian mixture model",
      c:"Classification",
      d:"K means",
      correct:"b"
    },
	{
      question:"What plot(s) are used to view the linear regression?",
      a:"Box plot",
      b:"Scatterplot",
      c:"Density plot",
      d:"Scatterplot, Boxplot, Density plot",
      correct:"d"
    },
	{
      question:"In lm(response ~ terms), terms specification of the form 'first*second' is same as __________",
      a:"first:second",
      b:"first+second",
      c:"first+second+first:second",
      d:"first:second+second:first",
      correct:"c"
    },
	{
      question:"Another name of data dredging is",
      a:"Data booting",
      b:"Data bagging",
      c:"Data snooping",
      d:"Data merging",
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
