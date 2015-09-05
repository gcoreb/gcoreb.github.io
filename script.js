/*jslint browser: true*/
/*global $, jQuery, alert
*/
$(document).ready(function () {
    var count = 0;
    

                      
$("#clickToAdd").click(function() {
    
function alertIt() {
    swal(
      {  
      title: "Events!",  
      text: "Please enter a task:",   
      type: "input",  
      showCancelButton: true, 
      closeOnConfirm: false,  
      animation: "slide-from-top",   
      inputPlaceholder: "Task Name: i.e., Do the dishes" 
      }, 
      function(inputValue) {  
      if (inputValue === false) 
         return false;     
            if (inputValue === "") {   
                swal.showInputError("You need to write something!");  
                return false;  
                }    
          count += 1;
        swal("Nice!", "Task " +  count + ": " + inputValue, "success");

    $('.list').append("<div class='item'>" + "Task " + count + ": " + inputValue + "</div>");   
    
        }
    ); 
    
}; //end of alertIt function
   alertIt();
    
}) //end of click event
$('.list').sortable();
var countTwo = 0;
$(document).on('click', '.item', function(){
    $(this).remove('.item');
});
    
$('.list').click(function() {

   swal({   title: "Finish this task?",   text: "Warning: this task cannot be recovered",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, I'm done!",   closeOnConfirm: false }, function(isConfirm){   
       if(isConfirm){
            countTwo +=1;
        swal("Deleted!", "Yay! You've now accomplished " + countTwo + " task(s)!", "success"); 
        }
        else{
        return;
        }
    });
})

//Index.html JS
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});





});


