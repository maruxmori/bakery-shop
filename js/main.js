//Navbar
let toggleButton = document.getElementById('button-menu');
let showModal = document.getElementById('modal');

toggleButton.addEventListener('click',() => {
  showModal.classList.toggle('show');
  toggleButton.classList.toggle('close');
});
