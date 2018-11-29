/* 
The javascipt is responsible for changing the question card each time.
The qestion is also validate by javascript without even going to any server
or without going to any other Html page.

  
Author: Randeep Singh Sibia
 */

    //variable to store score and it is increased when the answer is correct
    var score = 0;
	
	//varible to see what is the question  number
    var questionNumber = 0;

    //new array to store questions for the quiz
	var question = new Array();
	
	//new array to store answers for the quiz
    var answer = new Array();
	
	//List of questions stored in array named question starting at index 0
    question[0] = "Which programming language is not an Object Oriented Language?,A) Java,B) C#,C) JavaScript,D) C";
    question[1] = "Which is nearest star to planer earth?,A) Moon,B) Sun,C) Jupiter,D) Mars";
    question[2] ="Who was the main actor in Superman 2?,A) Johnny Rockwell,B) Matthew Bomer,C) Christopher Reeve,D) Tayfun Demir";
    question[3] = "In which city CN tower is located?, A) Toronto,B) Vancouver,C) Sydney,D) Dubai";
    question[4]= "In mathematics 3 + 7 is?,A) 10,B) 9,C) 11,D) 37";
    
    //List of answer stored in array named question starting at index 0
    answer[0] = "d";
    answer[1] = "b";
	answer[2]= "c";
	answer[3]= "Toronto";
	answer[4]= "10";
   
   
    //This function will change the question card each time when page is reloaded.
    function getQuestionCard()
	{
		//Method call to display progress bar ob screen
		showProgress();
        
		//This variable stores questions from question card each time page is loaded
        var ques = document.getElementById("eachQuestionCard");

        //This variable will split questions based on the comma(,).
        var slit = question[questionNumber].split(",");
                
        //The question is places in the legend elemnet 
        ques.innerHTML=slit[0];
                
        //each of the answers are places in their correspoding opti
        for(var i = 1 ;i < slit.length;i++)
        {
            ques = document.getElementById("guess"+i).nextSibling;
			//if(document.getElementById("guess"+i).name = "answers";
            ques.innerHTML=slit[i];
        }
                
        //Enable or disable the elements where neccary to continue the quiz
        document.getElementById("nextQuestion").disabled=true;
        document.getElementById("saveAnswer").disabled=false;
        document.getElementById("quizFieldset").style.display="inline";
        document.getElementById("score").style.display = "none";
        document.getElementById("guess5").style.value = "Please enter your answer here";
    }
   

   
    /*This function checks whether a question is wrong or right by comparing the user 
	guess of the questions with their correspoding answer.
    buttons are  anabled as well as disabled as needed
    */
    function checkAnswer()
	{
		//checks the question number
		if(questionNumber < 2)
		{
           for(var i =1;i<5;i++)
		   {
               if((document.getElementById("guess"+i).checked)) 
				   {
                    //varible to store answer
                    var storeAnswer = document.getElementById("guess"+i).value;

                        //check user guess is correct answer
                        if(storeAnswer == answer[questionNumber])
					    {
                            document.getElementById("score").innerHTML="Your Answer is Correct";
					        score=score+2;
                            bar(true);
                        }
				        else
					    {
                            document.getElementById("score").innerHTML="Your Answer is Incorrect";
                            bar(false);
                        }

                        //disable the saveAnswer button
                        document.getElementById("saveAnswer").disabled=true;
                        questionNumber++;
                        if(questionNumber<5)
						{
                            document.getElementById("nextQuestion").disabled=false;
					    }		
                        else
				        {
					        document.getElementById("checkScore").style.display="block";
                            document.getElementById("saveAnswer").style.display="none";
                            document.getElementById("nextQuestion").style.display="none";
                        }
				
                        document.getElementById("score").style.display = "block";
				        document.getElementById("quizFieldset").style.display="none";

                        //This is default case of radioButton and it is always checked
                        document.getElementById("guess1").checked = true;

                        //If checked found break out of loop
                        break;
                   }
           }
		
		
		}
		//Else part for text box answer validation
		else
		{
			for(var i =1;i<5;i++)
			{
			    document.getElementById("guess"+i).style.display = "none";
			}
			   document.getElementById("guess5").style.display = "block";
			   document.getElementById("guess5").style.height= "40px";
			   document.getElementById("guess5").style.width = "200px";
			
                //varible to store answer
                var storeAnswer = document.getElementById("guess5").value;

                ////check user answer against correct answer
                if(storeAnswer === answer[questionNumber])
				{
                    document.getElementById("score").innerHTML="Your Answer is Correct";
					score=score+2;
                    bar(true);
                }
				else
				{
                    document.getElementById("score").innerHTML="Your Answer is Incorrect";
                    bar(false);
                }

                //disable the saveAnswer button
                document.getElementById("saveAnswer").disabled=true;
                questionNumber++;
                if(questionNumber<5)
				{
                    document.getElementById("nextQuestion").disabled=false;
			    }		
                else
				{
					document.getElementById("checkScore").style.display="block";
                    document.getElementById("saveAnswer").style.display="none";
                    document.getElementById("nextQuestion").style.display="none";
                }
				
                document.getElementById("score").style.display = "block";
				document.getElementById("quizFieldset").style.display="none";
				document.getElementById("guess5").value = "Please enter your answer here";
        }
    }
	
	
	//This function displays the instructions for the user.
    function helpfunc()
	{
		document.getElementById("quizScreen").style.display="none";
        document.getElementById("helpScreen").style.display="inline";
    }
    
	
    //This function bring back control from helpScreen to the quiz app.
    function returnQuizApp()
	{
        document.getElementById("helpScreen").style.display="none";
        document.getElementById("quizScreen").style.display="inline";
    }
	   
	   
    /*This function will change the color of the progress bar.
     *If the answer is correct then the color is changed to green otherwise red.
	*/
    function bar(answerIsCorrect)
	{
        if(!answerIsCorrect)
		{
		    document.getElementById("score").style.color="red";	
            document.getElementById("question"+(questionNumber+1)).style.backgroundColor ="red";
          
        }
		else
		{
			document.getElementById("score").style.color="green";
            document.getElementById("question"+(questionNumber+1)).style.backgroundColor ="green";
        }
    }
    
	
	/*This function will display the user his/her score when he/she will complete the whole quiz.
     * This function also display user's performance based on the score.
    */	 
    function getFeedback()
	{
		//This variable stores the result
        var result = document.getElementById("score").innerHTML="Your final score is......";
        result = result + score +"/10</div><br><br>";
		
		if(score == 5)
		    result = result + "Your performance is......Excellent</br></br>";
	    else if(score == 4)
		    result = result + "Your performance is...... Good</br></br>";
	    else if(score == 3)
		    result = result + "Your performance is...... So so</br></br>";
	    else if(score == 2)
		    result = result + "Your performance is...... Bad</br></br>";
	    else if(score == 1)
		    result = result + "Your performance is......Very Bad</br></br>";
	    else if(score == 0)
		    result = result + "Your performance is......Worse</br></br>";
		
		var element = document.getElementById("score");
        element.innerHTML = result;
        document.getElementById("score").style.color="green";
        document.getElementById("restart").style.display="block";
        document.getElementById("checkScore").style.display="none";
    }	
	
        
    //To store total number of questions
	var total = 5;
	
	//To store index of question
	var indexNumber = 1;
	
	//This function displays the number of question which user is attempting
	function showProgress()
	{
        var progress = document.getElementById("questionIndex");
        progress.innerHTML = "Question " + indexNumber + "  of   " + total;
	    indexNumber++;
	} 