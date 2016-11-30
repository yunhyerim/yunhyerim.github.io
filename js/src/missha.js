$(function() {

// resize 되었을 경우의 행동
 var winWidth = $(window).width();

 $(window).on('resize', function() {
 	var nowWidth = $(window).width();

 	if(winWidth !== nowWidth){	
	 	location.reload();
 	}

 });



// ------------------------------------------
// 브라우저 상태 확인
	var $width = $(window).width();

		if($width < 768){
			
		// mobile 에서의 작동 내용	
		 var unb = $('.header_box');
		 var menu_btn = unb.find('button');

		 menu_btn.on('click', function(e) {
		 	e.preventDefault();
		 	unb.find('.gnb').toggle();
		 });
            

   var con = $('#con');
   var con_btn = $('#con>h2>button');
   var view = con.find('ol');   
   con_btn.on('click',function(e){
       e.preventDefault();
      view.stop().slideToggle(); 
   });
       var left = $('.btnl'),
                right = $('.btnr'),
                box = $('.box>ul');
            box.find('li:last').prependTo(box);
            left.on('click',function(){
                box.stop().animate({marginLeft:0},500,function(){
                    box.css({'marginLeft':-100+'%'});
                    box.find('li:last').prependTo(box);
                });
            });
            
            right.on('click',function(){
                box.stop().animate({'marginLeft':'-200%'},500,function(){
                    box.find('li:first').appendTo(box);
                    box.css({'marginLeft':'-100%'});
                });
            });
            
            
//	       var rightClick = $('.btnr').on('click');
            
           var rightClick =  function(){
               $('.btnr').click();
            };
            
            rightClick();
            
           setInterval(rightClick, 5000);
            
 

		}else if( (768 <= $width) && ($width < 1384) ){
          	
		// mobile 에서의 작동 내용	
		 var unb = $('.header_box');
		 var menu_btn = unb.find('button');

		 menu_btn.on('click', function(e) {
		 	e.preventDefault();
		 	unb.find('.gnb').toggle();
		 });  
            
            var left = $('.btnl'),
                right = $('.btnr'),
                box = $('.box>ul');
            box.find('li:last').prependTo(box);
            left.on('click',function(){
                box.stop().animate({marginLeft:0},500,function(){
                    box.css({'marginLeft':-100+'%'});
                    box.find('li:last').prependTo(box);
                });
            });
            
            right.on('click',function(){
                box.stop().animate({'marginLeft':'-200%'},500,function(){
                    box.find('li:first').appendTo(box);
                    box.css({'marginLeft':'-100%'});
                });
            });
            
            
//	       var rightClick = $('.btnr').on('click');
                var rightClick =  function(){
               $('.btnr').click();
            };
            
            rightClick();
            
           setInterval(rightClick, 5000);
     
            
            
		}else{
			$('.cub').find('li').on('click',function(e){
                e.preventDefault();
                var list = $(this).index();
                $('.box').find('ul').stop().animate({'marginLeft': -100 * list + '%'});
                
            });
            
		};

    $('#btn button').on('click',function(){
        location = "join_2.html";
    });
    
    var slide = $('#topbtn').children('button'),
        slidebox = $('#head');
    slide.on('click',function(){
        slidebox.slideToggle();
        
        
    });;
    
    
  /*------------end-------------------------*/
});