// Jquery code 

$( document ).ready( function(){

  $('#turqButton').on( 'click', function(){
    $('body').css({
      'background-color':'#4db7aa',
      'color':'#ffffff'
    });
  } );

	$('#greyButton').on( 'click', function(){
		$('body').css({
			'background-color':'#80867c',
			'color':'#000000'
		});
	} );

  $('#orangeButton').on( 'click', function(){
		$('body').css({
			'background-color':'#d96f16',
			'color':'#ffffff'
		});
	} );

  $('#yellowButton').on( 'click', function(){
		$('body').css({
			'background-color':'#fed111',
			'color':'#ffffff'
		});
	} );

  $('#pinkButton').on( 'click', function(){
		$('body').css({
			'background-color':'#DD90A2',
			'color':'#000000'
		});
	} );

} );
