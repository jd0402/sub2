$(function(){
    var swiper = new Swiper('.swiper-container', {
         autoplay: {
           delay: 2500,//슬라이드 넘어가는 시간
           disableOnInteraction: false,
         },

         observer:true,
        observeParents:true,
        
         loop: true,//슬라이드 무한반복
         navigation: {//화살표 버튼
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
         },
           pagination: {//블릿 버튼
           el: '.swiper-pagination',
           clickable: true,
         },
       });
   });

   $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100                                                          ) {
        $('.top-link').fadeIn();
    } else {
        $('.top-link').fadeOut();
    }
});



// tap
$(document).ready(function(){

	$('.tab .tabs a').on('click',function(){ // 탭메뉴에 있는 링크를 클릭했을때
		var idx = $(this).parent().index(); // 현재 클릭한 링크의 부모가 몇번째 인지 idx 변수에 넣는다.

		$(this).parent().siblings().removeClass('on'); // 현재 클릭한 링크의 부모를 제외 한 나머지 li에 on클래스를 제거하고
		$(this).parent().addClass('on'); // 현재 클릭한 링크의 부모 li에 on클래스 넣는다.

		$(this).parent().parent().siblings('.tab_con').removeClass('on');
		// 현재 클릭한 부모 li의 부모 ul을 제외한 나머지 클래스 .tab_con에 클래스 on을 지워준다.

		$(this).parent().parent().siblings('.tab_con').eq(idx).addClass('on');
		// 현재 클릭한 부모 li의 부모 ul을 제외한 나머지 클래스 .tab_con을 선택하고 그중 eq번째에 클래스 on을 넣는다.

	});
	
});