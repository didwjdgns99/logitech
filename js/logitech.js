$(document).ready(function(){
    
    



    // // $('.firstSwiper').on('mouseenter', function(e){
    // //   console.log('stop autoplay');
    // //   firstSwiper.autoplay.stop();
    // //   // firstSwiper 변수 호출해서 스와이퍼 멈추는 옵션 추가함
    // // })
    // // $('.firstSwiper').on('mouseleave', function(e){
    // //   console.log('start autoplay');
    // //   firstSwiper.autoplay.start();
    // //   // firstSwiper 변수 호출해서 스와이퍼 다시 재생 옵션 추가함
    // // })

    // let ww = $(window).width();

    // if(ww >= 1301){
    //   var firstSwiper = new Swiper(".firstSwiper", {
    //     //firstSwiper 변수안에 스와이퍼 담아줌
    //     slidesPerView: 3,
    //     spaceBetween: 10,
    //     loop:true,
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: false,
    //     },
    //     berakpoints:{
    //       1300:{
    //         slidesPerView: 3,
            
    //       }
    //     }
    //   });
    // }else{
      
    // }


    
    // if(ww>=375){
    //   var swiper = new Swiper(".secondSwiper", {
    //     loop:true,
    //      autoplay:{
    //        delay:2000,
    //        disableOnInteraction: false,
    //     },
    //     breakpoints:{
    //       1500: {
    //           slidesPerView: 4,
    //           spaceBetween: 30,
    //       },
    //       1150:{
    //           slidesPerView: 3,
    //           spaceBetween: 30,
    //       },
    //       901:{
    //         slidesPerView: 2,
    //         spaceBetween: 30,
    //     },
    //     375:{
    //       slidesPerView: 1,
    //       spaceBetween: 30,
    //   },
         
    //     }
        
    //   });
    // }else{
      
    // }
    
    
    var swiper = new Swiper(".thirdSwiper", {
      
      // spaceBetween: 30,
      direction: "vertical",
      loop:true,
      allowTouchMove: false,
      autoplay:{
        delay:2000,
        speed:1000,
        disableOnInteraction: false,
        
      },
      
     
    });


    
  

 
    

  

    

  $(window).scroll(function(){
    const height = $(window).scrollTop();
    if(height >= 50){
      $('.head-area').addClass('active')
    }else if(height < 100){
      $('.head-area').removeClass('active')
    }

  });

  $('.sec2-txt a').mouseenter(function(){
    let changeImage = $(this).attr('data-image');
    $('.sec2-img').css({
      
      backgroundImage : `url( ${changeImage} )`

    });
  });

  $('.sec2-txt').mouseleave(function(){
    $('.sec2-img').addClass('active')
  });



  $('.sec2-txt a').mouseenter(function(){
    $(this).addClass('active')
  });
  $('.sec2-txt a').mouseleave(function(){
    $(this).removeClass('active')
  });

  $('#list1').mouseenter(function(){
    $('.sub-menu-list').addClass('active')

    $('.sub-menu1').addClass('active')
    $('.sub-menu1').siblings('.sub-menu2').removeClass('active')
    $('.sub-menu1').siblings('.sub-menu3').removeClass('active')
    $('.head-area').addClass('active')
  });

  
  

  $('.sub-menu').mouseleave(function(){
    $(this).removeClass('active')
    // $('.sub-menu-list').removeClass('active')
    $('.head-area').removeClass('active')
    $('.sub-menu-list').removeClass('active')

  });


  $('#list2').mouseenter(function(){
    $('.sub-menu2').addClass('active')
    $('.sub-menu2').siblings('.sub-menu1').removeClass('active')
    $('.sub-menu2').siblings('.sub-menu3').removeClass('active')
    $('.sub-menu-list').addClass('active')
    $('.head-area').addClass('active')
  });
  
  $('#list3').mouseenter(function(){
    $('.sub-menu3').addClass('active')
    $('.sub-menu3').siblings('.sub-menu2').removeClass('active')
    $('.sub-menu3').siblings('.sub-menu1').removeClass('active')
    $('.sub-menu-list').addClass('active')
    $('.head-area').addClass('active')
  });

  $('.hamburger').click(function(){
    $('.m-sub').toggleClass('active')
    $('.mobile-submenu').removeClass('active');
  });
  

 
$('.menu_title').click(function(){
  $(this).siblings('.mobile-submenu').toggleClass('active');
  $(this).parent('.menu').siblings().children('.mobile-submenu').removeClass('active');

 

});

$('.body_1').mouseenter(function(){
  $('.body_1 p').addClass('active')
  $('.body_1 img').addClass('active')
  $(this).siblings().children().removeClass('active')
  $(this).parent().siblings().children().children().removeClass('active')
});
$('.re_sec1_son').mouseleave(function(){
  $('.body_1 p').removeClass('active')
  $('..body_1 img').removeClass('active')
});

AOS.init({
  duration: 1000,
  // disable: 'tablet'
 });

  

 $('.tab_head a').click(function(){
  let callImg = $(this).attr('data-image');
  $('.tab_body').css({
    
    backgroundImage : `url( ${callImg} )`
    
  });
});



let ww = $(window).width();
    if(ww <= 750){
      AOS.init({
        duration: 1000,
        disable: true
       });
    }else{

    }

$('.m_tab_list').click(function(){
  $('.m_tab_img').toggleClass('active')
  $(this).parent().siblings().children('.m_tab_img').removeClass('active')
});    

$('.m_footer_body_title').click(function(){
  $('.m_footer_body_list').toggleClass('active')
  $(this).parent().siblings().children().removeClass('active')

});



});