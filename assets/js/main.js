$(document).ready(function() {

	$('i.fa.fa-microphone').click( function(e){
		e.preventDefault();
        var microphone = $('input.mensajechat').val();
        localStorage.setItem("microphone", microphone);
        $('div.cajaderechados').append('<div class="textoventana"><p>' + localStorage.getItem("microphone") + '</p>');
        $('input.mensajechat').val('');
    });

    function addTodoItem(e) {
    	if(e.type==="keydown" && e.which !== 13) return;
    		e.preventDefault();
    		var microphone = $('input.mensajechat').val();
    	$('div.cajaderechados').append('<div class="textoventana"><p>' + localStorage.getItem("microphone") + '</p>');
        $('input.mensajechat').val(''); 
  }
  $("input.mensajechat").keydown(addTodoItem);

});

