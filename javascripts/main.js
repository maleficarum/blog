var MALEFICARUM = {
	Utils : {
		loadPages: function(element) {

			var pages = {
				"jAlarms [ Multiples origenes ]": "jalarms1.html",
				"Weblogic Nodemanager":"weblogic_nodemanater.html",
				"SOA Suite":"soasuite.html",
				"Oracle DB start":"orastart.html"
			};

			var menu = "";
			
			$.each(pages, function(a,b) {
				menu += "<li><a href='" + b + "'>" + a + "</a></li>";
			});

			$(element).html(menu);
		}
	}
}
