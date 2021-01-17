$(function(){  // $(document).ready shorthand
    $('.mywork').fadeIn('slow');
  });
  
  $(document).ready(function() {
      $(window).scroll( function(){
          $('.work1').each( function(i){
              var bottom_of_object = $(this).position().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              if( bottom_of_window > bottom_of_object ){ 
                  $(this).animate({'opacity':'1'},1500);         
              }
          }); 
      });
  });


  $(".carousel").click(function(){
    $("carouselExampleControls").carousel("prev");
  });

  $(".carousel").click(function(){
    $("carouselExampleControls").carousel("next");
  });


  $(".carousel").click(function(){
    $("carouselExampleControlsask").carousel("prev");
  });

  $(".carousel").click(function(){
    $("carouselExampleControlsask").carousel("next");
  });