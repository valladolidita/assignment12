$(document).ready(function(){
	$('h1.title').animate({fontSize: '3em'}, "slow");

});

//$('h2.title').click(function(){
//	$("#title").fadeToggle("slow");
//});

//$('h2.title').click(function(){
//	$(this).next('div').fadeToggle("slow");
//});

$('h2.title').click(function(){
	$(this).next('div').toggle();
});