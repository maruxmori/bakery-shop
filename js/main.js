//Navbar
let buttonNav = document.getElementById('button-menu');
let mostrarModal = document.getElementById('modal');

buttonNav.addEventListener('click',() => {
  mostrarModal.classList.toggle('show');
  buttonNav.classList.toggle('close');
});
