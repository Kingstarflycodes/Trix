// Coundown Timer
let countDate = new Date('2024-11-27 00:00:00').getTime();


let x = setInterval(() => {
  let daysHolder = document.querySelector('.days');
  let hoursHolder = document.querySelector('.hours');
  let minutesHolder = document.querySelector('.minutes');
  let secondsHolder = document.querySelector('.seconds');

  let now = new Date().getTime();
  let duration = countDate - now;

  let days = Math.floor(duration / (1000 * 60 * 60 * 24));
  let hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((duration % (1000 * 60)) / 1000);

  daysHolder.textContent = `${days}`;
  hoursHolder.textContent = `${hours} `;
  minutesHolder.textContent = `${minutes}`;
  secondsHolder.textContent = `${seconds}`;

  if (duration < 0) {
    clearInterval(x);
    daysHolder.textContent = `00`;
    hoursHolder.textContent = `00`;
    minutesHolder.textContent = `00`;
    secondsHolder.textContent = `00`;
  }
}, 1000);


//copy function
function Copy() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Id copied: " + copyText.value);
} 