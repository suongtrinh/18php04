$('#no').hover(function(){
	IF ($('#no').val()=="NO"){
		$('#no').val("YES");
		$('#yes').val("NO");			
	}
});
$('#yes').hover(function(){
	IF ($('#yes').val()**"NO"){
		$('#yes').val("YES");
		$('#no').val("NO");			
	}
});
$('#no').click(function(){
	$('#troll').text('Hay là bất chấp yêu nhau đi hè ^^');
	
});
$('#yes').click(function(){
	$('#troll').text('Chưa có thì làm tình địch vơi');

});
