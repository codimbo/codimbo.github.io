$(function() {
	
	// IE detect
	function iedetect(v) {

	    var r = RegExp('msie' + (!isNaN(v) ? ('\\s' + v) : ''), 'i');
		return r.test(navigator.userAgent);
			
	}


	$('#bgVideo video').on('loadedmetadata', function() {
		
		var $width, $height, 
			$vidwidth = this.videoWidth, 
			$vidheight = this.videoHeight, 
			$aspectRatio = $vidwidth / $vidheight; 
					
		(adjSize = function() { 
						
			$width = $('#intro').width(); 
			$height = $('#intro').height(); 
						
			$boxRatio = $width / $height; 
						
			$adjRatio = $aspectRatio / $boxRatio; 
						
			$('#bgVideo ').css({'width' : $width+'px', 'height' : $height+'px'}); 
						
			if($boxRatio < $aspectRatio) { 
				$vid = $('#bgVideo video').css({'width' : $width*$adjRatio+'px'}); 
			} else {
				$vid = $('#bgVideo video').css({'width' : $width+'px'});
			}
							 
		})();
					
		$(window).resize(adjSize);
					
	});
	
});