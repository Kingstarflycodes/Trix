let userLocation = document.querySelector('.input1');
let userPhone = document.querySelector('.input2');
let userName = document.querySelector('.input3');
let form = document.querySelector('.form');
let nextBtn = document.querySelector('.next');
let claimBtn = document.querySelector('.claim');
let pText = document.querySelector('.pText');
let modal = document.querySelector('dialog');
let modalClaim = document.querySelector('.modalClaim');
let userId = document.querySelector('.userId');

function isFilled() {
  if (!userLocation.value) return;
  userLocation.classList.add('hidden');
  userPhone.classList.remove('hidden');

  if (!userPhone.value) return;
  userPhone.classList.add('hidden');
  userName.classList.remove('hidden');
  nextBtn.classList.add('hidden');
  pText.classList.remove('hidden');
  claimBtn.classList.remove('hidden');
  
  if (!userName.value) return;
}

function handleSubmit(e) {
  e.preventDefault();
  modal.showModal();
  let userNameValue = userName.value;
  userId.textContent = `${userNameValue}`;

  userLocation.value = '';
  userPhone.value = '';
  userName.value = '';
}

form.addEventListener('submit', (e) => handleSubmit(e));
nextBtn.addEventListener('click', () => isFilled());
modalClaim.addEventListener('click', () => {
  modal.close();
  setTimeout(() => {
    window.location.href = '/src/pages/home.html';
  }, 2000);
});
