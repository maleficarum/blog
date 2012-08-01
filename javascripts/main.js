var MALEFICARUM = {
	Utils : {
		loadPages: function(element) {

			var pages = {
				"jAlarms [ Multiples origenes ]": "jalarms1.html"
			};

			var menu = "";
			
			$.each(pages, function(a,b) {
				menu += "<li><a href='" + b + "'>" + a + "</a></li>";
			});

			$(element).html(menu);
		}
	}
}
