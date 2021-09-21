$(document).ready(function(){
   // More area Btn show display click hide end
  var $el = $(".sh_dr_active");
  var $ee = $(".sh_dr_active");
  $el.click(function(e){
    e.stopPropagation();
    $(this).toggleClass('active');
  });

  $(document).on('click',function(e){
    if(($(e.target) != $el) && ($ee.hasClass('active'))){
    $ee.removeClass('active');
    // console.log("yes");
  }
  });
  // More area Btn show display click hide end




  // Hambar menu area Start 
  $('.nav-button').click(function(){
	   $('body').toggleClass('nav-open');
  });
  // Hambar menu area End

  // Home area header Mobile menu start 
  $('.nav-button').click(function(){
    $('.header_menu_right > ul, .l_header_main_menu_area ul').slideToggle(500);
    return false;
  });
  // Home area header Mobile menu end 



  // video Popup start 
  $('.Video_popup').magnificPopup({
  type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
          '</div>', 

      patterns: {
        youtube: {
        index: 'youtube.com/', 

        id: 'v=',
      
        src: 'https://www.youtube.com/embed/%id%?autoplay=1'  
        }
      
      },
      
      srcAction: 'iframe_src', 
    }
     // Password show hide area End 


  });
  // Document Ready Function End 




   // video play start 
  $(".box-video").click(function(){
    $('iframe',this)[0].src += "&amp;autoplay=1";
    $(this).addClass('open');
  });
   // video play End

  

 

  // Password show hide area start 
  var inputs = document.querySelectorAll('input[type="password"]');

  if (inputs !== undefined && inputs !== null) {
                
    [].map.call(inputs, function(input) {
      
      var btn = input.nextElementSibling;   
      // If JavaScript enabled
      btn.removeAttribute('disabled');
      
      btn.addEventListener('click', function(e) {
        if (input.type == 'password') {
          input.type = 'text';
          btn.setAttribute('aria-label', 'Hide password');
          btn.classList.add('shpass_show');
        } else {
          input.type = 'password';
          btn.setAttribute('aria-label', 'Show password');
          btn.classList.remove('shpass_show');
        }     
        e.preventDefault();
      
      },false);
      
    },false);
          
  } // End if test

});


 // // custom_select_box
 //  const selected = document.querySelector('.selected');
 //  const optionContainer = document.querySelector('.option_container');

 //  const optionList = document.querySelectorAll('.option');

 //  selected.addEventListener('click', () => {
 //    optionContainer.classList.toggle('active');
 //  });

 //  optionList.forEach(o => {
 //    o.addEventListener('click', () => {
 //      selected.innerHTML = o.querySelector('label').innerHTML;
 //      optionContainer.classList.remove('active');
 //    });
 //  });


 // datetime counter
  var clock = $('.clock').FlipClock({
      clockFace: 'DailyCounter',
      countdown: true
  });

// input your custom Date below
  var date = new Date('2021-09-27 22:00:00');


  var dif = (date.getTime() / 1000) - ((new Date().getTime())/1000);

  var end = Math.max(0, dif);

  clock.setTime(end);
  clock.start();


 
