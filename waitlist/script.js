// let voteScroller = document.querySelector('#vote');
// let voteCount = document.querySelector('.voteCount');
// let initialVoteCount = 50;
// (async function (params) {
//     let currentVal = voteScroller.nodeValue
//     voteCount.innerHTML = await initialVoteCount

// })()

let notCoin = document.querySelector('.notCoin');
let ton = document.querySelector('.ton');
let tonPlaceHolder = document.querySelector('.tonVal');
let notCoinPlaceHolder = document.querySelector('.notCoinVal');
let [notCoinVal, tonVal] = [50, 50];

tonPlaceHolder.innerHTML = tonVal;
notCoinPlaceHolder.innerHTML = notCoinVal;

notCoin.addEventListener('click', () => {
  tonVal--;
  notCoinVal++;
  tonPlaceHolder.innerHTML = tonVal;
  notCoinPlaceHolder.innerHTML = notCoinVal;
});

ton.addEventListener('click', () => {
  tonVal++;
  notCoinVal--;
  tonPlaceHolder.innerHTML = tonVal;
  notCoinPlaceHolder.innerHTML = notCoinVal;
});
