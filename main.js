$(document).ready(function(){
        var imgArray = [ 'pexels-photo-min.jpg','violin.jpg','clinic.jpg', 'berlinphil.jpg', 'theImage-min.jpg'];
    function preloadimages(arr, callback){
        var newimages=[];
        for (var i=0; i<arr.length; i++){
            newimages[i]=new Image()
            newimages[i].src=arr[i]
        }
        callback();
    }
preloadimages(imgArray,function(){
    function restroy(){
         var el = $('#main');
    newone = el.clone(true);
        el.before(newone);
        $("."+el.attr("class")+":last").remove();
    }
           var currentNumber = 0;
    $('#views').hide();
    $('#view').html($('#View0').html());
    $('#btn-right').click(function(){
        if(currentNumber<imgArray.length-1){
            currentNumber++;
        $('#main').css("background-image", "url("+imgArray[currentNumber]+")");
        }
        else{
            currentNumber=0;
            $('#main').css("background-image", "url("+imgArray[currentNumber]+")")
        }
    })
      $('#btn-left').click(function(){
        if(currentNumber>0){
            currentNumber--;
        $('#main').css("background-image", "url("+imgArray[currentNumber]+")");
        }
        else{
            currentNumber=imgArray.length-1;
            $('#main').css("background-image", "url("+imgArray[currentNumber]+")")
        }
    })
     $('.button').click(function(event){
                     restroy();
         $('#view').html($("#View"+currentNumber).html());
//        $("#line").css("width", (currentNumber+1)*20+"%")
         if(currentNumber==4){
                      $(".btn-down").css("visibility", "initial");
//             $('#line').css("animation-name", "lead");
             $(".button").css("cursor", "url(logo.jpg)");
             $('.button').unbind("click");
             setTimeout(function(){ $('.button').text("");
        $('.button').addClass("minButton");
setTimeout(function(){$('.btn-down').show().addClass("minButtonBottom")
},1000)
            }
        ,500)
           
         }
         
     })
    if(currentNumber==0){
        $('').click(false);
    }
});
})
