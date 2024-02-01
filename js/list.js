let select = document.querySelector('.select');
let list = document.querySelector('.select__list');
let selecttitle = document.querySelector('.select__title');

select.addEventListener("click", function(e){
	e.preventDefault();
	list.classList.toggle('active');
	selecttitle.classList.toggle('active');
	select.classList.toggle('active');
});