$(document).ready(function(){
	$('.header__burger').click(function(){
		$('.header__burger, .menu-header, .header__icon').toggleClass('active');
		$('body').toggleClass('lock');
		$('.header').toggleClass('fixed');
	});
});