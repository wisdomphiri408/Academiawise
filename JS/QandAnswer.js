//We must get the  courses list and the humberger menu
const humberger = document.getElementById('humberger-image');
const courses = document.getElementById('courses');

//adding the AddEvenlistener on the humberberger menu
humberger.addEventListener('click', function(){
    // the browser must check if the display is none of the course list
   if(courses.style.display=='none'){
    // if the display is none, when we click on the humberger image the course list must be displayed
    courses.style.display='block';
   }
   else{
    courses.style.display='none';
   }
});
//now we want if the user clicks on the main, the courses list must display nothing.
//we must first get the id for the main
const main = document.getElementById('main');
//we have to add an addEventlistener to the main section
main.addEventListener('click', function(){
    //the browser has to check if the courses list is displayed or not
    if(courses.style.display=='block'){
        // if the courses list is displayed, it must be removed when the user clicks on the main section
        courses.style.display='none';
    }
    else{
        //when the user clicks on it when it is already not displaying the list nothing must happen to the list
    }
});
