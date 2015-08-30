/*jslint browser: true*/
/*global $, jQuery, alert
*/
$(document).ready(function () {
    var count = 0;
$("#clickToAdd").click(function() {
    count += 1;
    swal({  title: "Events!",  
      text: "Please enter a task:",   
      type: "input",  
      showCancelButton: true, 
      closeOnConfirm: false,  
      animation: "slide-from-top",   
      inputPlaceholder: "Task Name: i.e., Do the dishes" }, 
    function(inputValue){  
    if (inputValue === false) 
        return false;     
    if (inputValue === "") {   
        swal.showInputError("You need to write something!");  
        return false;  
    }    
    swal("Nice!", "Task " +  count + ": " + inputValue, "success");
});
})

});
