$(function(){

	$("#tag").on('keyup', function(event){
		if (event.key===' ' || event.key==='Spacebar'){
			event.preventDefault();
			$("#uneti_tagovi").append("<span>" + $("#tag").val() + "</span>");
			$("#tag").val('');
		}

		$("p>span").off('click');
		$("p>span").on('click', function(event){
			$(this).remove();
		});

		$("p>span").on('mouseover', function(event){
			$(this).css('background-color', '#ff0').css('cursor','default');
		});

		$("p>span").on('mouseleave', function(event){
			$(this).css('background-color', '');
		});
	});

	
	$("#ponisti").on('click', function(event){
		$("#tag").val('');
		$("#uneti_tagovi").html('');
	});

	$("#generisi").on('click', function(event){

		if ($("#min").val() == '' || $("#max").val() == '') {
			$("#greska").show();
			$("#result").hide();
		}
		else {
			var min = parseInt($("#min").val());
			var max = parseInt($("#max").val());
			var range = Math.round(Math.random() * (max - min) + min);

			$("#greska").hide();
			$("#result").show();

			$("#min_range").html(min);
			$("#max_range").html(max);
			$("#range_result").html(range);
		}
	});	

});