$(function () {
	$('.movie ul li a').find('img').on('click',function(){
		console.log('clicked')
		var a = $('.genre-list li h5').val();

		console.log(a);
	})
})