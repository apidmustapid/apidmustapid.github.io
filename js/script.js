// event pada saat link di klik

$('.page-scroll').on('click', function(event){

	// ambil isi href

	var tujuan = $(this).attr('href');
	// tangkap elemen ybs

	var elemenTujuan = $(tujuan);

	// pindahkan scroll

	$('body').animate({
		scrollTop:elemenTujuan.offset().top
	})



});


// paralax

$(window).scroll(function){
	var wScroll = $(this).scrollTop():

	$('.jumbotron img').css({
		'transform' : 'translate(0px '+ wScroll/4 +'%)'
	});
	
}