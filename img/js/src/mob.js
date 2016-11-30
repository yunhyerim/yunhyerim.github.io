$(function(){
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
    
    
    
    
});