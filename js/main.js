$(function(){

  $('.sc-visual .title').click(function(e){
    e.preventDefault();

    $(this).parents('.slide').addClass('active').siblings().removeClass('active');
    //나의 부모에 액티브를 추가하고 나머지는(형제) 지워라



    //주요뉴스
    if( $(this).parents('.slide').hasClass('slide01')){
      
      if($('.slide01 .btn.pause').css('display') == 'none'){//실행하는 곳
        mainslide01.autoplay.stop()
      }else{
        mainslide01.autoplay.start();
      }
      
      mainslide02.autoplay.stop(); // 나의 반대 슬라이드는 항상 정지가 디폴트

    }else{ //시민참여

      if($('.slide02 .btn.pause').css('display') == 'none'){//실행하는 곳
        mainslide02.autoplay.stop()
      }else{
        mainslide02.autoplay.start();
      }

      mainslide01.autoplay.stop(); // 나의 반대 슬라이드는 항상 정지가 디폴트

    }
  })







//메인01 슬라이드
var mainslide01 = new Swiper(".slide01 .swiper", {
    loop:true,

    navigation: {
      nextEl: ".slide01 .next",
      prevEl: ".slide01 .prev",
    },

    pagination: {
        el: ".slide01 .fraction",
        type: "fraction",
      },

      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
  });
  
var mainslide02 = new Swiper(".slide02 .swiper", {
    loop:true,

    navigation: {
      nextEl: ".slide02 .next",
      prevEl: ".slide02 .prev",
    },

    pagination: {
        el: ".slide02 .fraction",
        type: "fraction",
      },

      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
  });
  mainslide02.autoplay.stop();



$('.sc-visual .slide01 .control_btn').click(function(e){
  e.preventDefault();

  if ($(this).find('.btn.pause').css('display') == 'none') {
    $(this).find('.btn.pause').show().siblings().hide();
    mainslide01.autoplay.start();
  } else {
    $(this).find('.btn.pause').hide().siblings().show();
    mainslide01.autoplay.stop();
  }
}) 

$('.sc-visual .slide02 .control_btn').click(function(e){
  e.preventDefault();

  if ($(this).find('.btn.pause').css('display') == 'none') {
    $(this).find('.btn.pause').show().siblings().hide();
    mainslide02.autoplay.start();
  } else {
    $(this).find('.btn.pause').hide().siblings().show();
    mainslide02.autoplay.stop();
  }
}) 




  $('.sc-related .btn-title').click(function(e){
    e.preventDefault();
    
    if($(this).siblings('.sub-list').css('display') == 'block'){

        $(this).removeClass('on').siblings().addClass('on');
        $('.sub-list').stop().slideUp();
        
    }else{
        $('.sub-list').stop().slideUp();
        $(this).addClass('on').siblings().removeClass('on');
        $(this).siblings().stop().slideDown();
    }
})




$('.sub-list li:first-child').keydown(function(e){
  var keycode = e.keycode || e.which;
  // 키보드 값
  if(keycode == 9 && e.shiftKey){
    $('.sub-list').stop().slideUp();
    $('.btn-title').removeClass('on');
  }



})

$('.sub-list li:last-child').keydown(function(e){
  var keycode = e.keyCode || e.which;
  if(keycode == 9 && !e.shiftKey){
    $('.sub-list').stop().slideUp();
    $('.btn-title').removeClass('on');
  }


})







////notice 슬라이드
var noticeswiper = new Swiper(".swiper.notice-slide", {
  spaceBetween: 30,
  slidesPerView: 3,
  loop: "ture",

  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".control_box .fraction",
    type: "fraction",
  },

  navigation: {
    nextEl: ".btn.next",
    prevEl: ".btn.prev",
  },
});



$('.control_btn').click(function(e){
  e.preventDefault();
 

  if ( $(this).find('.btn.pause').css('display') == 'block') {
    $('.btn.pause').removeClass('active').siblings().addClass('active');
    noticeswiper.autoplay.stop();

  } else {
    $('.btn.pause').addClass('active').siblings().removeClass('active');
    noticeswiper.autoplay.start();
  }

})









//       $('.control_btns').click(function(e){
//           e.preventDefault()

//           $('.control_btns').click(function(e){
//             e.preventDefault();
//             // $('.control_btns .pause, .control_btns .play').hide();
            
//             if($(this).hasClass('active') ){
//                 $(this).removeClass('active');
//                 $('.control_btns .pause').show();
//                 mainslide.autoplay.start(); //스와이퍼에서 제공
        
//             }else{
//               $(this).addClass('active');
//               $('.control_btns .play').show();
//               mainslide.autoplay.stop(); //스와이퍼에서 제공
//             }
//         })
    
// })





//   var swiper = new Swiper(".main08_slide", {
//     loop:true,

//     navigation: {
//       nextEl: ".control_box .next",
//       prevEl: ".control_box .prev",
//     },

//     pagination: {
//       el: ".main08 .control_box .fraction",
//       type: "fraction",
//     },
    

//     slidesPerView: 3,
//     spaceBetween: 30,
//     slidesPerGroup: 3,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     autoplay: {
//         delay: 2000,
//         disableOnInteraction: false,
//     },
//   });


  






// //관련사이트
// $(function(){
            
//   $('.button').click(function(e){
//     e.preventDefault();
    
//     if($(this).siblings().css('display') == 'block'){
//         $(this).removeClass('on').siblings().addClass('on');
//         $('.sub_list').stop().slideUp();
        
//     }else{
//         $('.sub_list').stop().slideUp();
//         $(this).addClass('on').siblings().removeClass('on');
//         $(this).siblings().stop().slideDown();
//     }
// })







//
// })





//   $(function(){
            
//     $('.site_item').click(function(e){
//         e.preventDefault();
//         순서 = $(this).index();
//         console.log(순서);
//         $(this).addClass('on').siblings().removeClass('on')

//         $('.tab-con').eq(순서).addClass('on').siblings().removeClass('on')
//         // index, eq는 세트!
        
//         // $(값).addClass('on').siblings().removeClass('on')
//     })

// })
  

// 지우지마시오
})
