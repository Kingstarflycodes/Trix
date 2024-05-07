const dropdowns = document.querySelectorAll('.dropbtn');
const header = document.querySelector('.header-paddings');

dropdowns.forEach(dropdown => {
  const content = dropdown.querySelector('.dropdown-content');

  dropdown.addEventListener('mouseenter', () => {
    content.classList.remove('hidden');
    content.classList.add('block');
  });
  
  dropdown.addEventListener('mouseleave', (e) => {
    if (
      e.relatedTarget &&
      !e.relatedTarget.closest('.header-paddings') &&
      !e.relatedTarget.closest('.dropdown-content')
    ) {
      content.classList.remove('block');
      content.classList.add('hidden');
    }
  });
});