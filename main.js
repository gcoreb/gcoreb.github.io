$(document).ready(function(){
 window.onscroll = function () {
     console.log("here");window.scrollTo(0,0);

 };

    $('.backgrounds').hide();
     $(".scroll").click(function(event){  
         window.onscroll=function(){};
        event.preventDefault();
         var hasher = $(this.hash);
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500,function(){
            var currentTop = $(document).scrollTop();
             window.onscroll = function () {
     console.log("here2");window.scrollTo(0,currentTop);

 };
            console.log(hasher);
            if(hasher.selector=="#bio"){
                $(".btn-down").removeClass("minButtonBottom");
                $('.btn-down').hide();
                $('#view').html($('#bioView').html());
                $('.btn-down').show().addClass("minButtonBottom");
                $('#pictures').show();
                $('#downScroller').attr("href", "#pictures");
            }
            if(hasher.selector=="#pictures"){
                 $(".btn-down").removeClass("minButtonBottom");
                $('.btn-down').hide();
                $('#view').html($('#picturesView').html());
                $('.btn-down').show().addClass("minButtonBottom");
                $('#contact').show();
                $('#downScroller').attr("href", "#contact");
            }
            if(hasher.selector == "#contact"){
   $('#view').html($('#contactView').html());
                $(".btn-down").removeClass("minButtonBottom");
                $('.btn-down').hide();
            }
        });
    });
        var imgArray = [ 'pexels-photo-min.jpg','violin.jpg','clinic.jpg', 'berlinphil.jpg', 'theImage-min.jpg'];
   function preload(arrayOfImages, callback) {
    $(arrayOfImages).each(function () {
        $('<img />').attr('src',this).appendTo('body').css('display','none');
    });
    callback();
}
 
preload(imgArray,function(){
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
             $('#bio').show();
             
         }
         
     })
    if(currentNumber==0){
        $('').click(false);
    }
});
})
