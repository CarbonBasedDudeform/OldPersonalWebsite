jQuery("div").hover(function () {
		if (!$(this).hasClass("clicked"))
		{
			if (!$(this).hasClass("content") && !$(this).hasClass("cvcontent"))
			{
				$(this).css("opacity", 0.8);
			}
		}
	}, function () {
		if (!$(this).hasClass("clicked"))
		{
			if (!$(this).hasClass("content"))
			{
				$(this).css("opacity", 1.0);
			}
		}
	});

	jQuery("#graphics").click(function () {
		window.location = "https://github.com/CarbonBasedDudeform";
	});
	
	jQuery("#work").click(function () {
		if (!$(this).hasClass("clicked"))
		{
			$(this).addClass("hidden");
			$(this).animate({opacity: "0.0", width: "0", height: "0"}, 0);
			
			if ($(this).hasClass("toplevel"))
			{	var cv = $("#cv");
				cv.removeClass("hidden");
				cv.css("height", "25%");
				var port = $("#portfolio");
				port.removeClass("hidden");
				port.css("height", "25%");
			}
		}
			
		$(this).toggleClass("clicked");
	});
	
	jQuery("#cv").hover(function (){
		if (!$(this).hasClass("clicked"))
		{
			$(this).animate({height: "26%"}, 50);
		}
	}, function (){
		if (!$(this).hasClass("clicked"))
		{
			$(this).animate({height: "25%"}, 50);
		}
	});
	
	jQuery("#cv").click(function (e) {
		var cv = $("#cv");
		var cvcont = $("#cvcontent");
		if (!$(this).hasClass("clicked"))
		{
			cv.css("padding-top", 0);
			
			if (!cvcont.hasClass("loaded")) //this is so we load the content only once, the first time a user clicks we load the content in, then we keep it there and next time the user clicks we don't need to load it again as its already loaded.
			{
				cv.animate({height: "30%"}, 500);
				cvcont.load(templateDir + "/getpost.php?cat=cv", function () { cvcont.addClass("loaded");cvcont.removeClass("hidden"); cv.animate({height: "90%"}, 500);});
			
			} else {
				cvcont.removeClass("hidden");
				cv.animate({height: "90%"}, 500);
			}
			cv.addClass("clicked");
			$("body").css("overflow", "auto");
		} else {
			cv.animate({height: "25%"}, 500);
			cvcont.addClass("hidden");
			cv.removeClass("clicked");
			if (!$("#mtbsurf").hasClass("clicked") && !$("#music").hasClass("clicked") &&
				!$("#web").hasClass("clicked") && !$("#uni").hasClass("clicked") &&
				!$("#graphics").hasClass("clicked") &&!$("#compsci").hasClass("clicked")
				&& !$("#language").hasClass("clicked") && !$("#robotics").hasClass("clicked") && !$("#artdesign").hasClass("clicked"))
				$("body").css("overflow", "hidden");
		}

		cv.css("opacity", 1.0);
	});
	
	jQuery("#cvcontent").click(function (e) {
		return false;
	});

	jQuery("#cvhideBtn").click(function (e) {
		var cv = $("#cv");
		var cvcont = $("#cvcontent");
		if (cv.hasClass("clicked"))
		{
			cv.animate({height: "25%"}, 500);
			cvcont.addClass("hidden");
			cv.removeClass("clicked");
			if (!$("#mtbsurf").hasClass("clicked") && !$("#music").hasClass("clicked") &&
				!$("#web").hasClass("clicked") && !$("#uni").hasClass("clicked") &&
				!$("#graphics").hasClass("clicked") &&!$("#compsci").hasClass("clicked")
				&& !$("#language").hasClass("clicked") && !$("#robotics").hasClass("clicked") && !$("#artdesign").hasClass("clicked"))
				$("body").css("overflow", "hidden");
		}
		
		e.stopPropagation(); //prevents the above click for cv being called when users clicks link inside that div
	});
	
	
	jQuery("#portfolio").click(function () {
		if (!$(this).hasClass("clicked"))
		{
			$(this).addClass("hidden");
			$(this).animate({opacity: "0", width: "0", height: "0"}, 0);
			
			if ($(this).hasClass("midlevel"))
			{
				var web = $("#web");
				web.removeClass("hidden");
				web.css("height", "6%");
				web.css("font-size", "2.2em");
				var graphics = $("#graphics");
				graphics.removeClass("hidden");
				graphics.css("height", "6%");
				graphics.css("font-size", "2.2em")
				var uni = $("#uni");
				uni.removeClass("hidden");
				uni.css("height", "6%");
				uni.css("font-size", "2.2em")
				var ai= $("#ai");
				ai.removeClass("hidden");
				ai.css("height", "6%");
				ai.css("font-size", "2.2em")
			}
		}
			
		$(this).toggleClass("clicked");
	});
	
	jQuery("#web").hover(function (){
		if (!$(this).hasClass("clicked"))
		{
			$(this).animate({height: "7%"}, 50);
		}
	}, function (){
		if (!$(this).hasClass("clicked"))
		{
			$(this).animate({height: "6%"}, 50);
		}
	});
	
	jQuery("#ai").hover(function (){
		if (!$(this).hasClass("clicked"))
		{
			$(this).animate({height: "7%"}, 50);
		}
	}, function (){
		if (!$(this).hasClass("clicked"))
		{
			$(this).animate({height: "6%"}, 50);
		}
	});

	jQuery("#graphics").hover(function (){
		if (!$(this).hasClass("clicked"))
		{
			$(this).animate({height: "7%"}, 50);
		}
	}, function (){
		if (!$(this).hasClass("clicked"))
		{
			$(this).animate({height: "6%"}, 50);
		}
	});
	
	jQuery("#uni").hover(function (){
		if (!$(this).hasClass("clicked"))
		{
			$(this).animate({height: "9%"}, 50);
		}
	}, function (){
		if (!$(this).hasClass("clicked"))
		{
			$(this).animate({height: "8%"}, 50);
		}
	});
	
	jQuery("#web").click(function (e) {
		var web = $("#web");
		var webcont = $("#webcontent");
		var r = new RegExp('\\bclicked\\b'); //jQuery bug or something, have to use plain ol' js
		if (!r.test(document.getElementById("web").className))
		{
			
			if (!webcont.hasClass("loaded")) //this is so we load the content only once, the first time a user clicks we load the content in, then we keep it there and next time the user clicks we don't need to load it again as its already loaded.
			{
				web.animate({height: "10%"}, 500);
				webcont.load(templateDir + "/getpost.php?cat=web", function () { webcont.addClass("loaded"); webcont.removeClass("hidden"); web.animate({height: "70%"}, 500);});
			
			} else {
				webcont.removeClass("hidden");
				web.animate({height: "70%"}, 500);
			}
			web.addClass("clicked");
			$("body").css("overflow", "auto");
		} else
		{
			web.animate({height: "6%"}, 500);
			webcont.addClass("hidden");
			web.removeClass("clicked");
			if (!$("#mtbsurf").hasClass("clicked") && !$("#music").hasClass("clicked") &&
				!$("#compsci").hasClass("clicked") && !$("#uni").hasClass("clicked") &&
				!$("#graphics").hasClass("clicked") &&!$("#cv").hasClass("clicked") && !$("#ai").hasClass("clicked")
				&& !$("#language").hasClass("clicked") && !$("#robotics").hasClass("clicked") && !$("#artdesign").hasClass("clicked"))
				$("body").css("overflow", "hidden");
		}
		
		web.css("opacity", 1.0);
	});

	jQuery("#webcontent").click(function (e) {
		e.stopPropagation();
	});

	
	jQuery("#webhideBtn").click(function (e) {
		var web = $("#web");
		var webcont = $("#webcontent");
		if (web.hasClass("clicked"))
		{
			web.animate({height: "6%"}, 500);
			webcont.addClass("hidden");
			web.removeClass("clicked");
			if (!$("#mtbsurf").hasClass("clicked") && !$("#music").hasClass("clicked") &&
				!$("#compsci").hasClass("clicked") && !$("#uni").hasClass("clicked") &&
				!$("#graphics").hasClass("clicked") &&!$("#cv").hasClass("clicked") && !$("#ai").hasClass("clicked")
				&& !$("#language").hasClass("clicked") && !$("#robotics").hasClass("clicked") && !$("#artdesign").hasClass("clicked"))
				$("body").css("overflow", "hidden");
		}
		e.stopPropagation(); //prevents the above click for cv being called when users clicks link inside that div
	});

	jQuery("#ai").click(function (e) {
		var ai = $("#ai");
		var aicont = $("#aicontent");
		var r = new RegExp('\\bclicked\\b'); //jQuery bug or something, have to use plain ol' js
		if (!r.test(document.getElementById("ai").className))
		{
			
			if (!aicont.hasClass("loaded")) //this is so we load the content only once, the first time a user clicks we load the content in, then we keep it there and next time the user clicks we don't need to load it again as its already loaded.
			{
				ai.animate({height: "10%"}, 500);
				aicont.load(templateDir + "/getpost.php?cat=mobile", function () { aicont.addClass("loaded"); aicont.removeClass("hidden"); ai.animate({height: "70%"}, 500);});
				
			} else {
				aicont.removeClass("hidden");
				ai.animate({height: "70%"}, 500);
			}
			
			ai.addClass("clicked");
			$("body").css("overflow", "auto");
		} else
		{
			ai.animate({height: "6%"}, 500);
			aicont.addClass("hidden");
			ai.removeClass("clicked");
			if (!$("#mtbsurf").hasClass("clicked") && !$("#music").hasClass("clicked") &&
				!$("#compsci").hasClass("clicked") && !$("#uni").hasClass("clicked") &&
				!$("#graphics").hasClass("clicked") &&!$("#cv").hasClass("clicked") && !$("#web").hasClass("clicked")
				&& !$("#language").hasClass("clicked") && !$("#robotics").hasClass("clicked") && !$("#artdesign").hasClass("clicked"))
				$("body").css("overflow", "hidden");
		}
		
		ai.css("opacity", 1.0);
	});

	jQuery("#aicontent").click(function (e) {
		e.stopPropagation();
	});

	
	jQuery("#aihideBtn").click(function (e) {
		var ai= $("#ai");
		var aicont = $("#aicontent");
		if (ai.hasClass("clicked"))
		{
			ai.animate({height: "6%"}, 500);
			aicont.addClass("hidden");
			ai.removeClass("clicked");
			if (!$("#mtbsurf").hasClass("clicked") && !$("#music").hasClass("clicked") &&
				!$("#compsci").hasClass("clicked") && !$("#uni").hasClass("clicked") &&
				!$("#graphics").hasClass("clicked") &&!$("#cv").hasClass("clicked") && !$("#web").hasClass("clicked")
				&& !$("#language").hasClass("clicked") && !$("#robotics").hasClass("clicked") && !$("#artdesign").hasClass("clicked"))
				$("body").css("overflow", "hidden");
		}
		e.stopPropagation(); //prevents the above click for cv being called when users clicks link inside that div
	});
	
	
	
	jQuery("#uni").click(function (e) {
		var uni = $("#uni");
		var unicont = $("#unicontent");
		var r = new RegExp('\\bclicked\\b'); //jQuery bug or something, have to use plain ol' js
		if (!r.test(document.getElementById("uni").className))
		{
			
			if (!unicont.hasClass("loaded")) //this is so we load the content only once, the first time a user clicks we load the content in, then we keep it there and next time the user clicks we don't need to load it again as its already loaded.
			{
				uni.animate({height: "10%"}, 500);
				unicont.load(templateDir + "/getpost.php?cat=university-work", function () { unicont.addClass("loaded"); unicont.removeClass("hidden");uni.animate({height: "70%"}, 500);});
				
			} else {
				unicont.removeClass("hidden");
				uni.animate({height: "70%"}, 500);
			}
			uni.addClass("clicked");
			$("body").css("overflow", "auto");
		} else {
			uni.animate({height: "7%"}, 500);
			unicont.addClass("hidden");
			uni.removeClass("clicked");
			if (!$("#mtbsurf").hasClass("clicked") && !$("#music").hasClass("clicked") &&
				!$("#web").hasClass("clicked") && !$("#compsci").hasClass("clicked") &&
				!$("#graphics").hasClass("clicked") && !$("#cv").hasClass("clicked") && !$("#ai").hasClass("clicked")
				&& !$("#language").hasClass("clicked") && !$("#robotics").hasClass("clicked") && !$("#artdesign").hasClass("clicked"))
				$("body").css("overflow", "hidden");
		}

		uni.css("opacity", 1.0);
	});

	jQuery("#unicontent").click(function () {
		return false;
	});
	
	jQuery("#unihideBtn").click(function (e) {
		var uni = $("#uni");
		var unicont = $("#unicontent");
		if (uni.hasClass("clicked"))
		{
			uni.animate({height: "7%"}, 500);
			unicont.addClass("hidden");
			uni.removeClass("clicked");
			if (!$("#mtbsurf").hasClass("clicked") && !$("#music").hasClass("clicked") &&
				!$("#web").hasClass("clicked") && !$("#compsci").hasClass("clicked") &&
				!$("#graphics").hasClass("clicked") && !$("#cv").hasClass("clicked") && !$("#ai").hasClass("clicked")
				&& !$("#language").hasClass("clicked") && !$("#robotics").hasClass("clicked") && !$("#artdesign").hasClass("clicked"))
				$("body").css("overflow", "hidden");
		}
		e.stopPropagation(); //prevents the above click for cv being called when users clicks link inside that div
	});
		
		
	jQuery("#personal").click(function () {
		if (!$(this).hasClass("clicked"))
		{
			$(this).addClass("hidden");
			$(this).animate({opacity: "0", width: "0", height: "0"}, 0);
			
			if ($(this).hasClass("toplevel"))
			{
				var nerdy = $("#nerdy");
				nerdy.removeClass("hidden");
				nerdy.css("height", "25%");
				nerdy.css("font-size", "6em");
				var notnerdy = $("#notnerdy");
				notnerdy.removeClass("hidden");
				notnerdy.css("height", "25%");
				notnerdy.css("font-size", "6em");
			}
		}
			
		$(this).toggleClass("clicked");
	});
	
	jQuery("#nerdy").click(function () {
		if (!$(this).hasClass("clicked"))
		{
			$(this).addClass("hidden");
			$(this).animate({opacity: "0", width: "0", height: "0"}, 0);
			
			if ($(this).hasClass("midlevel"))
			{
				var lang = $("#language");
				lang.removeClass("hidden");
				lang.css("height", "8.33%");
				lang.css("font-size", "3em");
				var compsci= $("#compsci");
				compsci.removeClass("hidden");
				compsci.css("height", "8.33%");
				compsci.css("font-size", "3em");
				var robo = $("#robotics");
				robo.removeClass("hidden");
				robo.css("height", "8.33%");
				robo.css("font-size", "3em");
			}
		}
			
		$(this).toggleClass("clicked");
	});

	jQuery("#notnerdy").click(function () {
		if (!$(this).hasClass("clicked"))
		{
			$(this).addClass("hidden");
			$(this).animate({opacity: "0", width: "0", height: "0"}, 0);
			
			if ($(this).hasClass("midlevel"))
			{
				var music = $("#music");
				music.removeClass("hidden");
				music.css("height", "8.33%");
				music.css("font-size", "3em");
				var mtbsurf= $("#mtbsurf");
				mtbsurf.removeClass("hidden");
				mtbsurf.css("height", "8.33%");
				mtbsurf.css("font-size", "3em");
				var art = $("#artdesign");
				art.removeClass("hidden");
				art.css("height", "8.33%");
				art.css("font-size", "3em");
			}
		}
			
		$(this).toggleClass("clicked");
	});

	jQuery("#language").hover(function (){
		if (!$(this).hasClass("clicked"))
		{
			$(this).animate({height: "9.33%"}, 50);
		}
	}, function (){
		if (!$(this).hasClass("clicked"))
		{
			$(this).animate({height: "8.33%"}, 50);
		}
	});

	jQuery("#compsci").hover(function (){
		if (!$(this).hasClass("clicked"))
		{
			$(this).animate({height: "9.33%"}, 50);
		}
	}, function (){
		if (!$(this).hasClass("clicked"))
		{
			$(this).animate({height: "8.33%"}, 50);
		}
	});

	jQuery("#robotics").hover(function (){
		if (!$(this).hasClass("clicked"))
		{
			$(this).animate({height: "9.33%"}, 50);
		}
	}, function (){
		if (!$(this).hasClass("clicked"))
		{
			$(this).animate({height: "8.33%"}, 50);
		}
	});

	jQuery("#music").hover(function (){
		if (!$(this).hasClass("clicked"))
		{
			$(this).animate({height: "9.33%"}, 50);
		}
	}, function (){
		if (!$(this).hasClass("clicked"))
		{
			$(this).animate({height: "8.33%"}, 50);
		}
	});
		
	jQuery("#mtbsurf").hover(function (){
		if (!$(this).hasClass("clicked"))
		{
			$(this).animate({height: "9.33%"}, 50);
		}
	}, function (){
		if (!$(this).hasClass("clicked"))
		{
			$(this).animate({height: "8.33%"}, 50);
		}
	});

	jQuery("#artdesign").hover(function (){
		if (!$(this).hasClass("clicked"))
		{
			$(this).animate({height: "9.33%"}, 50);
		}
	}, function (){
		if (!$(this).hasClass("clicked"))
		{
			$(this).animate({height: "8.33%"}, 50);
		}
	});

	jQuery("#compsci").click(function (e) {
		var r = new RegExp('\\bclicked\\b'); //jQuery bug or something, have to use plain ol' js
		var astro = $("#compsci");
		var astrocont = $("#compscicontent");
		if (!r.test(document.getElementById("compsci").className))
		{
			
			if (!astrocont.hasClass("loaded")) //this is so we load the content only once, the first time a user clicks we load the content in, then we keep it there and next time the user clicks we don't need to load it again as its already loaded.
			{
				astro.animate({height: "15%"}, 500);
				astrocont.load(templateDir + "/getpost.php?cat=compsci", function () { astrocont.addClass("loaded"); astrocont.removeClass("hidden");astro.animate({height: "70%"}, 500);});
				
			} else {
				astrocont.removeClass("hidden");
				astro.animate({height: "70%"}, 500);
			}
			if (!astrocont.hasClass("content")) astrocont.addClass("content");
			astro.addClass("clicked");
			$("body").css("overflow", "auto");
		} else {
			astro.animate({height: "8.33%"}, 500);
			astrocont.addClass("hidden");
			astro.removeClass("clicked");
			astrocont.removeClass("content");
			if (!$("#mtbsurf").hasClass("clicked") && !$("#music").hasClass("clicked") &&
				!$("#web").hasClass("clicked") && !$("#uni").hasClass("clicked") &&
				!$("#graphics").hasClass("clicked") &&!$("#cv").hasClass("clicked") && !$("#ai").hasClass("clicked")
				&& !$("#language").hasClass("clicked") && !$("#robotics").hasClass("clicked") && !$("#artdesign").hasClass("clicked"))
				$("body").css("overflow", "hidden");
		}

		astro.css("opacity", 1.0);
	});

	jQuery("#compscicontent").click(function () {
		return false;
	});
	
	jQuery("#compscihideBtn").click(function (e) {
		var astro = $("#astronomy");
		var astrocont = $("#astronomycontent");
		if (astro.hasClass("clicked"))
		{
			astro.animate({height: "8.33%"}, 500);
			astrocont.addClass("hidden");
			astro.removeClass("clicked");
			astrocont.removeClass("content");
			if (!$("#mtbsurf").hasClass("clicked") && !$("#music").hasClass("clicked") &&
				!$("#web").hasClass("clicked") && !$("#uni").hasClass("clicked") &&
				!$("#graphics").hasClass("clicked") &&!$("#cv").hasClass("clicked") && !$("#ai").hasClass("clicked")
				&& !$("#language").hasClass("clicked") && !$("#robotics").hasClass("clicked") && !$("#artdesign").hasClass("clicked"))
				$("body").css("overflow", "hidden");
		}
		e.stopPropagation(); //prevents the above click for cv being called when users clicks link inside that div
	});

	jQuery("#language").click(function (e) {
		var r = new RegExp('\\bclicked\\b'); //jQuery bug or something, have to use plain ol' js
		var lang = $("#language");
		var langcont = $("#langcontent");
		if (!r.test(document.getElementById("language").className))
		{
			
			if (!langcont.hasClass("loaded")) //this is so we load the content only once, the first time a user clicks we load the content in, then we keep it there and next time the user clicks we don't need to load it again as its already loaded.
			{
				lang.animate({height: "15%"}, 500);
				langcont.load(templateDir + "/getpost.php?cat=books-language", function () { langcont.addClass("loaded"); langcont.removeClass("hidden");lang.animate({height: "70%"}, 500);});
				
			} else {
				langcont.removeClass("hidden");
				lang.animate({height: "70%"}, 500);
			}
			if (!langcont.hasClass("content")) langcont.addClass("content");
			lang.addClass("clicked");
			$("body").css("overflow", "auto");
		} else {
			lang.animate({height: "8.33%"}, 500);
			langcont.addClass("hidden");
			lang.removeClass("clicked");
			langcont.removeClass("content");
			if (!$("#mtbsurf").hasClass("clicked") && !$("#music").hasClass("clicked") &&
				!$("#web").hasClass("clicked") && !$("#uni").hasClass("clicked") &&
				!$("#graphics").hasClass("clicked") &&!$("#cv").hasClass("clicked") && !$("#ai").hasClass("clicked")
				&& !$("#language").hasClass("clicked") && !$("#robotics").hasClass("clicked") && !$("#artdesign").hasClass("clicked") && !$("#compsci").hasClass("clicked"))
				$("body").css("overflow", "hidden");
		}

		lang.css("opacity", 1.0);
	});

	jQuery("#langcontent").click(function () {
		return false;
	});
	
	jQuery("#langhideBtn").click(function (e) {
		var lang= $("#language");
		var langcont = $("#langcontent");
		if (lang.hasClass("clicked"))
		{
			lang.animate({height: "8.33%"}, 500);
			langcont.addClass("hidden");
			lang.removeClass("clicked");
			langcont.removeClass("content");
			if (!$("#mtbsurf").hasClass("clicked") && !$("#music").hasClass("clicked") &&
				!$("#web").hasClass("clicked") && !$("#uni").hasClass("clicked") &&
				!$("#graphics").hasClass("clicked") &&!$("#cv").hasClass("clicked") && !$("#ai").hasClass("clicked")
				&& !$("#language").hasClass("clicked") && !$("#robotics").hasClass("clicked") && !$("#artdesign").hasClass("clicked") && !$("#compsci").hasClass("clicked"))
				$("body").css("overflow", "hidden");
		}
		e.stopPropagation(); //prevents the above click for cv being called when users clicks link inside that div
	});	

	jQuery("#robotics").click(function (e) {
		var r = new RegExp('\\bclicked\\b'); //jQuery bug or something, have to use plain ol' js
		var robo = $("#robotics");
		var robocont = $("#roboticscontent");
		if (!r.test(document.getElementById("robotics").className))
		{
			
			if (!robocont.hasClass("loaded")) //this is so we load the content only once, the first time a user clicks we load the content in, then we keep it there and next time the user clicks we don't need to load it again as its already loaded.
			{
				robo.animate({height: "15%"}, 500);
				robocont.load(templateDir + "/getpost.php?cat=technology", function () { robocont.addClass("loaded"); robocont.removeClass("hidden");robo.animate({height: "70%"}, 500);});
				
			} else {
				robocont.removeClass("hidden");
				robo.animate({height: "70%"}, 500);
			}
			if (!robocont.hasClass("content")) robocont.addClass("content");
			robo.addClass("clicked");
			$("body").css("overflow", "auto");
		} else {
			robo.animate({height: "8.33%"}, 500);
			robocont.addClass("hidden");
			robo.removeClass("clicked");
			robocont.removeClass("content");
			if (!$("#mtbsurf").hasClass("clicked") && !$("#music").hasClass("clicked") &&
				!$("#web").hasClass("clicked") && !$("#uni").hasClass("clicked") &&
				!$("#graphics").hasClass("clicked") &&!$("#cv").hasClass("clicked") && !$("#ai").hasClass("clicked")
				&& !$("#language").hasClass("clicked") && !$("#compsci").hasClass("clicked") && !$("#artdesign").hasClass("clicked"))
				$("body").css("overflow", "hidden");
		}

		robo.css("opacity", 1.0);
	});

	jQuery("#roboticscontent").click(function () {
		return false;
	});
	
	jQuery("#roboticshideBtn").click(function (e) {
		var robo = $("#robotics");
		var robocont = $("#roboticscontent");
		if (robo.hasClass("clicked"))
		{
			robo.animate({height: "8.33%"}, 500);
			robocont.addClass("hidden");
			robo.removeClass("clicked");
			robocont.removeClass("content");
			if (!$("#mtbsurf").hasClass("clicked") && !$("#music").hasClass("clicked") &&
				!$("#web").hasClass("clicked") && !$("#uni").hasClass("clicked") &&
				!$("#graphics").hasClass("clicked") &&!$("#cv").hasClass("clicked") && !$("#ai").hasClass("clicked")
				&& !$("#language").hasClass("clicked") && !$("#compsci").hasClass("clicked") && !$("#artdesign").hasClass("clicked"))
				$("body").css("overflow", "hidden");
		}
		e.stopPropagation(); //prevents the above click for cv being called when users clicks link inside that div
	});
		
	jQuery("#music").click(function (e) {
		var music = $("#music");
		var musiccont = $("#musiccontent");
		var r = new RegExp('\\bclicked\\b'); //jQuery bug or something, have to use plain ol' js
		if (!r.test(document.getElementById("music").className))
		{
			
			if (!musiccont.hasClass("loaded")) //this is so we load the content only once, the first time a user clicks we load the content in, then we keep it there and next time the user clicks we don't need to load it again as its already loaded.
			{
				music.animate({height: "15%"}, 500);
				musiccont.load(templateDir + "/getpost.php?cat=music", function () { musiccont.addClass("loaded"); musiccont.removeClass("hidden");music.animate({height: "70%"}, 500);});
				
			} else {
				musiccont.removeClass("hidden");
				music.animate({height: "70%"}, 500);
			}
			if (!musiccont.hasClass("content")) musiccont.addClass("content");
			music.addClass("clicked");
			$("body").css("overflow", "auto");
		} else {
			music.animate({height: "8.33%"}, 500);
			musiccont.addClass("hidden");
			music.removeClass("clicked");
			musiccont.removeClass("content");
			if (!$("#mtbsurf").hasClass("clicked") && !$("#compsci").hasClass("compsci") &&
				!$("#web").hasClass("clicked") && !$("#uni").hasClass("clicked") &&
				!$("#graphics").hasClass("clicked") &&!$("#cv").hasClass("clicked") && !$("#ai").hasClass("clicked")
				&& !$("#language").hasClass("clicked") && !$("#robotics").hasClass("clicked") && !$("#artdesign").hasClass("clicked"))
				$("body").css("overflow", "hidden");
		}

		music.css("opacity", 1.0);
	});

	jQuery("#musiccontent").click(function () {
		return false;
	});
	
	jQuery("#musichideBtn").click(function (e) {
		var music = $("#music");
		var musiccont = $("#musiccontent");
		if ($("#music").hasClass("clicked"))
		{
			music.animate({height: "8.33%"}, 500);
			musiccont.addClass("hidden");
			music.removeClass("clicked");
			musiccont.removeClass("content");
			if (!$("#mtbsurf").hasClass("clicked") && !$("#compsci").hasClass("clicked") &&
				!$("#web").hasClass("clicked") && !$("#uni").hasClass("clicked") &&
				!$("#graphics").hasClass("clicked") &&!$("#cv").hasClass("clicked") && !$("#ai").hasClass("clicked")
				&& !$("#language").hasClass("clicked") && !$("#robotics").hasClass("clicked") && !$("#artdesign").hasClass("clicked"))
				$("body").css("overflow", "hidden");
		}
		e.stopPropagation(); //prevents the above click for cv being called when users clicks link inside that div
	});
			
	jQuery("#mtbsurf").click(function (e) {
		var mtb = $("#mtbsurf");
		var mtbcont = $("#mtbsurfcontent");
		var r = new RegExp('\\bclicked\\b'); //jQuery bug or something, have to use plain ol' js
		if (!r.test(document.getElementById("mtbsurf").className))
		{
			
			if (!mtbcont.hasClass("loaded")) //this is so we load the content only once, the first time a user clicks we load the content in, then we keep it there and next time the user clicks we don't need to load it again as its already loaded.
			{
				mtb.animate({height: "15%"}, 1000);
				mtbcont.load(templateDir + "/getpost.php?cat=sport", function () { mtbcont.addClass("loaded"); mtbcont.removeClass("hidden");mtb.animate({height: "70%"}, 500);});
			} else {
				mtbcont.removeClass("hidden");
				mtb.animate({height: "70%"}, 500);
			}
			if (!mtbcont.hasClass("content")) mtbcont.addClass("content");
			mtb.addClass("clicked");
			$("body").css("overflow", "auto");
		} else {
			mtb.animate({height: "8.33%"}, 500);
			mtbcont.addClass("hidden");
			mtb.removeClass("clicked");
			mtbcont.removeClass("content");
			if (!$("#compsci").hasClass("clicked") && !$("#music").hasClass("clicked") &&
				!$("#web").hasClass("clicked") && !$("#uni").hasClass("clicked") &&
				!$("#graphics").hasClass("clicked") &&!$("#cv").hasClass("clicked") && !$("#ai").hasClass("clicked")
				&& !$("#language").hasClass("clicked") && !$("#robotics").hasClass("clicked") && !$("#artdesign").hasClass("clicked"))
				$("body").css("overflow", "hidden");
		}

		mtb.css("opacity", 1.0);
	});

	jQuery("#mtbsurfcontent").click(function () {
		return false;
	});
	
	jQuery("#mtbsurfhideBtn").click(function (e) {
		var mtb = $("#mtbsurf");
		var mtbcont = $("#mtbsurfcontent");
		if ($("#mtbsurf").hasClass("clicked"))
		{
			mtb.animate({height: "8.33%"}, 500);
			mtbcont.addClass("hidden");
			mtb.removeClass("clicked");
			mtbcont.removeClass("content");
			if (!$("#compsci").hasClass("clicked") && !$("#music").hasClass("clicked") &&
				!$("#web").hasClass("clicked") && !$("#uni").hasClass("clicked") &&
				!$("#graphics").hasClass("clicked") &&!$("#cv").hasClass("clicked") && !$("#ai").hasClass("clicked")
				&& !$("#language").hasClass("clicked") && !$("#robotics").hasClass("clicked") && !$("#artdesign").hasClass("clicked"))
				$("body").css("overflow", "hidden");
		}
		e.stopPropagation(); //prevents the above click for cv being called when users clicks link inside that div
	});
				
	jQuery("#artdesign").click(function (e) {
		var r = new RegExp('\\bclicked\\b'); //jQuery bug or something, have to use plain ol' js
		var art = $("#artdesign");
		var artcont = $("#artdesigncontent");
		if (!r.test(document.getElementById("artdesign").className))
		{
			
			if (!artcont.hasClass("loaded")) //this is so we load the content only once, the first time a user clicks we load the content in, then we keep it there and next time the user clicks we don't need to load it again as its already loaded.
			{
				art.animate({height: "15%"}, 500);
				artcont.load(templateDir + "/getpost.php?cat=artdesign", function () { artcont.addClass("loaded"); artcont.removeClass("hidden");art.animate({height: "70%"}, 500);});
				
			} else {
				artcont.removeClass("hidden");
				art.animate({height: "70%"}, 500);
			}
			if (!artcont.hasClass("content")) artcont.addClass("content");
			art.addClass("clicked");
			$("body").css("overflow", "auto");
		} else {
			art.animate({height: "8.33%"}, 500);
			artcont.addClass("hidden");
			art.removeClass("clicked");
			artcont.removeClass("content");
			if (!$("#mtbsurf").hasClass("clicked") && !$("#music").hasClass("clicked") &&
				!$("#web").hasClass("clicked") && !$("#uni").hasClass("clicked") &&
				!$("#graphics").hasClass("clicked") &&!$("#cv").hasClass("clicked") && !$("#ai").hasClass("clicked")
				&& !$("#language").hasClass("clicked") && !$("#robotics").hasClass("clicked") && !$("#compsci").hasClass("clicked"))
				$("body").css("overflow", "hidden");
		}

		art.css("opacity", 1.0);
	});

	jQuery("#artdesigncontent").click(function () {
		return false;
	});
	
	jQuery("#artdesignhideBtn").click(function (e) {
		var art = $("#artdesign");
		var artcont = $("#artdesigncontent");
		if (art.hasClass("clicked"))
		{
			art.animate({height: "8.33%"}, 500);
			artcont.addClass("hidden");
			art.removeClass("clicked");
			artcont.removeClass("content");
			if (!$("#mtbsurf").hasClass("clicked") && !$("#music").hasClass("clicked") &&
				!$("#web").hasClass("clicked") && !$("#uni").hasClass("clicked") &&
				!$("#graphics").hasClass("clicked") &&!$("#cv").hasClass("clicked") && !$("#ai").hasClass("clicked")
				&& !$("#language").hasClass("clicked") && !$("#robotics").hasClass("clicked") && !$("#compsci").hasClass("clicked") )
				$("body").css("overflow", "hidden");
		}
		e.stopPropagation(); //prevents the above click for cv being called when users clicks link inside that div
	});