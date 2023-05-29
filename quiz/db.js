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
      question:"What is a database?",
      a:"Organized collection of information that cannot be accessed, updated, and managed",
      b:"Collection of data or information without organizing",
      c:"Organized collection of data that cannot be updated",
      d:"Organized collection of data or information that can be accessed, updated, and managed",
      correct:"d"
    },
	{
      question:"The architecture of a database can be viewed as the ________?",
      a:"One level",
      b:"Two-level",
      c:"Three-level",
      d:"Four level",
      correct:"c"
    },
	{
      question:"Which one of the following commands is used to modify a column inside a table?",
      a:"Drop",
      b:"Update",
      c:"Alter",
      d:"Set",
      correct:"c"
    },
	{
      question:". ______________ is a set of one or more attributes taken collectively to uniquely identify a record?",
      a:"Primary Key",
      b:"Foreign key",
      c:"Super key",
      d:"Candidate key",
      correct:"c"
    },
	{
      question:"Which of the following is not the utility of DBMS <br> i) Backup ii) Loading iii) Process Organization iv) File organization?",
      a:"i, ii, and iv only",
      b:"i, ii and iii only",
      c:"i, iii and iv only",
      d:"All i, ii, iii, and iv",
      correct:"a"
    },
	{
      question:"What is the function of the following command Delete from r where P;",
      a:"Clears entries from relation",
      b:"Deletes relation",
      c:"Deletes particular tuple from relation",
      d:"All of the mentioned",
      correct:"c"
    },
	{
      question:"Why the following statement is erroneous <br> SELECT dept_name, ID, avg (salary) <br> FROM instructor <br> GROUP BY dept_name;",
      a:"Dept_id should not be used in group by clause",
      b:"Group by clause is not valid in this query",
      c:"Avg(salary) should not be selected",
      d:"None",
      correct:"a"
    },
	{
      question:"What does the following code snippet do <br> ALTER TABLE STUDENT ADD(ADDRESS VARCHAR2(20));",
      a:"Adds a column called ADDRESS in the table student",
      b:"Checks if a column called ADDRESS is present in the table student",
      c:"Invalid Syntax",
      d:"None",
      correct:"a"
    },
	{
      question:"What will be the output of the following code snippet <br> SELECT ROUND (TRUNCATE (MOD (2500, 20), -1), 2) FROM dual;",
      a:"Error",
      b:"00",
      c:"0",
      d:"1",
      correct:"c"
    },
	{
      question:"The SQL statement: <br> SELECT ROUND (65.726, -1) FROM DUAL;  ",
      a:"is illegal",
      b:"garbage",
      c:"726",
      d:"70",
      correct:"d"
    },
	{
      question:"Which of the following statement is correct to display all the cities with the condition, temperature, and humidity whose humidity is in the range of 60 to 75 from the 'whether' table",
      a:"SELECT * FROM weather WHERE humidity IN (60 to 75)",
      b:"SELECT * FROM weather WHERE humidity BETWEEN 60 AND 75",
      c:"SELECT * FROM weather WHERE humidity NOT IN (60 AND 75)",
      d:"SELECT * FROM weather WHERE humidity NOT BETWEEN 60 AND 75",
      correct:"b"
    },
	{
      question:"This query does which of the following operation <br> SELECT instructor.* FROM instructor, teaches WHERE instructor.ID= teaches.ID;",
      a:"All attributes of instructor and teaches are selected",
      b:"All attributes of instructor are selected on the given condition",
      c:"All attributes of teaches are selected on given condition",
      d:"Only the some attributes from instructed and teaches are selected",
      correct:"b"
    },
	{
      question:"Which of the following can replace the below query <br> SELECT name, course_id  FROM instructor, teaches  WHERE instructor_ID= teaches_ID",
      a:"Select name, course_id from instructor natural join teaches",
      b:"Select name,course_id from teaches,instructor where instructor_id=course_id",
      c:"Select name, course_id from instructor",
      d:"Select course_id from instructor join teaches",
      correct:"a"
    },
	{
      question:"Which of the following are the synonyms for Column and ROW of a table?  1. Row = [Tuple, Record]  2. Column = [Field, Attribute]  3. Row = [Tuple, Attribute]  4. Columns = [Field, Record]",
      a:"1 and 2",
      b:"3 and 4",
      c:"only 1",
      d:"only 2",
      correct:"a"
    },
	{
      question:"Evaluate the SQL statement: <br> SELECT a.emp_name, a.sal, a.dept_id, b.maxsal FROM employees a, <br> (SELECT dept_id, MAX(sal) maxsal FROM employees GROUP BY dept_id) b <br> WHERE a.dept_id = b.dept_id AND a.sal < b.maxsal; <br> Which of the following statement is correct?",
      a:"The statement gives an error at line 1.",
      b:"The statement gives an error at line 6.",
      c:"The statement produces the employee name, salary, department ID, and maximum salary earned in the employee department for all <br> departments that pay less salary than the maximum salary paid in the company",
      d:"The statement produces the employee name, salary, department ID, and maximum salary earned in the employee department for all <br> employees who earn less than the maximum salary in their department",
      correct:"d"
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
