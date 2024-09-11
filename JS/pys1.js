//we have to get all the question-container css, we have multiple of them so we are going to use querySelectAll

let questionContainers = document.querySelectorAll('.question-container');
//now we must loop them in order to use them all, the containers
questionContainers.forEach(container=>{
    //we are now going to obtain all the classes we want in the containers, since they will be only one we are going to use a queryselector
    let showAnswerBtn = container.querySelector('.showAnswer');
    let compareBtn = container.querySelector('.compare');
    let textarea = container.querySelector('.writeAnswer');
    let nextBtn = container.querySelector('.next');
    let answer = container.querySelector('.answer');
   let backBtn = container.querySelector('.back');

    //we have obtained everything we want, now we are going to use them one by one

    //adding AddEventlistener to the show Answer button(showAnwerBtn)

    showAnswerBtn.addEventListener('click',function(){
       //now when it is clicked we will apply everything we right down in this area
       if(answer.style.display=='none'){
        //when the answer is not displayed the following action will happen
        answer.style.display='block'; //the answer will be displayed
        showAnswerBtn.textContent = 'Hide Answer'; // the show answer button will change to hide answer
        textarea.style.display='none';
        nextBtn.style.display='none';
       }
       else{
        //if the answer is displayed then the following will happen
        answer.style.display='none'; //the answer will not be displayed
        showAnswerBtn.textContent ='Show Answer'; //this will change the button back to show answer from hide answer
       }
    });

  // we are going to add the addEventlistener to the compare button
  compareBtn.addEventListener('click',function(){
      if(textarea.style.display=='none'){
        //if the nextbutton and the textarea is not displayed the following will happen when the user clicks on this button
       textarea.style.display='block'; //the text area must be displayed 
       nextBtn.style.display='block';//the next button must be displayed
       answer.style.display = 'none'; //if the answer was displayed it must no longer be displayed
       showAnswerBtn.textContent = 'Show Answer'; //when the answer will be shown the button will be hide answer, since we don't want the answer to appear then the button must not change
      }
      else{
        textarea.style.display='none'; //the answer must not be displayed
        nextBtn.style.display='none'; //the textarea must not be displayed
      }
  });

//now we go for the next button, we want the next button to display the user's answer and the correct answer
//we will first add  addEventlistener to the nextbutton

nextBtn.addEventListener('click', function(){
  let textareaBoolean=Boolean(textarea.value);
  //the boolean will act as validation, letting the user know he has no choice but to answer,if he wants to compare his answers
 
  if(textareaBoolean==true){
    //if the user has typed something to the textarea, the following action we occur once they press these button
    backBtn.style.display='inline';
    console.log(textareaBoolean); //this is just away for me to check if the value is true or not
    textarea.textContent = `${textareaBoolean}`; //this will will make the user's answer replace the textarea
    nextBtn.style.display='none'; //the next button will not be displayed
    answer.style.display='block'; //the right answer will be displayed down the user's answer, allowing the user to compare
    showAnswerBtn.textContent = 'Hide Answer'; //since the answer will be shown it would be good to display it like this
  }
  else{
    //nothing will change
  }
});

//we want to remove the to display everything to the original when someone press the back button
backBtn.addEventListener('click', function(){
    answer.style.display='none';
    nextBtn.style.display='none';
    textarea.style.display='none';
    backBtn.style.display='none';
    showAnswerBtn.textContent = `Show Answer`;
});

});
