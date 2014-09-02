
//alert("passou")

$(document).ready(function () { 
			
 
	/*efeito fadeInUp nos artigos*/ 	//$('.news-item').addClass("animated fadeInUp");
	/*efeito lazyload*/ 				$("img.lazy").lazyload({ /*placeholder: "/images/blank.gif",*/  effect: "fadeIn"  });

 });	//document.ready	
 
// animação entre págians ===================================================================
	$(function() {
		$(".links").click(function(e) {
			$(".main-container-inner").removeClass("animated fadeInUp");
			$(".main-container-inner").addClass("animated fadeInUpBig");
			$('body').prepend("<div class='carregando'><h2 class='thin fade animated'><span class='icon-spin2 animate-spin thin'></span> Carregando... </h2> </div>");
			});
		});
 


 

	/* lazyload
		$(function(){
			var $container = $('.container-news');
		        $container.imagesLoaded( function(){
		            $container.masonry({
		                itemSelector : '.news-item'
		            });
		                alert("passou.");
		    });	   
		});
	*/

 
