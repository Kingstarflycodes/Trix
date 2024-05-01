const togglerOpen = document.querySelector('.openBtn');
const togglerClose = document.querySelector('.closeBtn');
const menu = document.querySelector('.menu');
const rootEle = document.documentElement;

togglerOpen.addEventListener('click', () => {
  menu.classList.remove('hidden');
  menu.classList.add('flex');
  togglerOpen.classList.add('hidden');
  togglerClose.classList.remove('hidden');
  rootEle.classList.add('h-screen');
  rootEle.classList.add('overflow-y-hidden');
});
togglerClose.addEventListener('click', () => {
  menu.classList.remove('flex');
  menu.classList.add('hidden');
  togglerOpen.classList.remove('hidden');
  togglerClose.classList.add('hidden');
  rootEle.classList.remove('h-screen');
  rootEle.classList.remove('overflow-y-hidden');
});
