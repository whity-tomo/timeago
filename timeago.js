(function(){

var update = function(){
	var now = new Date().getTime().toString().slice(0, 10);
	$(".timeago[date-time-ago]").each(function(){
	    var time = $(this).attr("date-time-ago");
	    $(this).hide().text(label(time, now)).fadeIn("slow");
	});
};

var label = function(v, now){
	var diff = now - v;
	if(diff < 60){
		return "1分以内";
	}else if( diff < 120 ){
		return "2分以内";
	}else if( diff < 180 ){
		return "3分以内";
	}else if( diff < 240 ){
		return "4分以内";
	}else if( diff < 300 ){
		return "5分以内";
	}else if( diff < 600 ){
		return "10分以内";
	}else if( diff < 3600 ){
		return "1時間以内";
	}else if( diff < 7200 ){
		return "2時間以内";
	}else if( diff < 10800 ){
		return "3時間以内";
	}else if( diff < 14400 ){
		return "4時間以内";
	}

	return diff;
};

setInterval(update, 5000);

})();