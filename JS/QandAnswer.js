// getting the courses header and the courses list
const courseBtn = document.getElementById('course-button');
const courselist = document.getElementById('courses');

//adding the addEventlistener function to the course header
courseBtn.addEventListener('click', function(){
        // the browser has to check if the courses list has display none.
        if(courselist.style.display=='none'){
            //if the browser sees that the display is equal to none, it must display the course list to block when one cliks on the courses' header
            courselist.style.display='block';
        }
        else{
         courselist.style.display='none';
        }
        //when one clicks on the courses header when the list is displayed, the list must disappear
});
// what id one wants to click some else on the body and the list is still displayed
//let us get the body
const body= document.getElementById('body');
// now when let's add the addeventlistener function, this will help us make the list disappear when we click on anywhere on the browser
body.addEventListener('click', function(){
    //checking if the list is displayed on the browser
    if (courselist.style.display=='block'){
     //if the list is displayed we must remove it when we click anywhere on the browser
     courselist.style.display='none';
    }
    else{ 
        //this will make the list disappear, because when the user clicks on the menu it will display nothing
    
    }
});
