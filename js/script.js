const button = document.querySelectorAll('.mainblock__button');
const act = document.querySelectorAll('.nav-mainblock__link');
const link = document.querySelectorAll('.menu-header__link'); 
const pag = document.querySelectorAll('.pag-posts__link'); 

button.forEach(function(item){
	item.addEventListener("click", function(){
		let currentBtn = item;

		button.forEach(function(item){
			item.classList.remove('active');
		});

		currentBtn.classList.add('active');
	});
});

act.forEach(function(item){
	item.addEventListener("click", function(){
		let currentBtn = item;

		act.forEach(function(item){
			item.classList.remove('active');
		});

		currentBtn.classList.add('active');
	});
});

link.forEach(function(item){
	item.addEventListener("click", function(){
		let currentBtn = item;

		link.forEach(function(item){
			item.classList.remove('active');
		});

		currentBtn.classList.add('active');
	});
});

pag.forEach(function(item){
	item.addEventListener("click", function(){
		let currentBtn = item;

		pag.forEach(function(item){
			item.classList.remove('active');
		});

		currentBtn.classList.add('active');
	});
});
