let bigBro = document.querySelector(".big-bro");
let close = document.querySelector(".close2");
let close1 = document.querySelector(".close1");
let btn1 = document.querySelector(".btn-1");
let btn2 = document.querySelector(".btn-2");
let modal = document.querySelector(".modal");
let modalContent = document.querySelector(".modal-content");

btn2.addEventListener('click', () => {

	modal.style.display = 'flex';

})
close1.addEventListener('click', () => {

	modal.style.display = 'none';
	

})


btn1.addEventListener('click', () => {

	bigBro.style.display = 'flex';

})
close.addEventListener('click', () => {

	bigBro.style.display = 'none';

})












