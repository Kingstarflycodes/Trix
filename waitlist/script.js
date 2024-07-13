let notCoin = document.querySelector(".notcoin");
let ton = document.querySelector(".ton");
let voteScroller = document.querySelector("#vote");
let voteCount = document.querySelector(".voteCount");
let initialVoteCount = 50;

(async function (params) {
    let currentVal = voteScroller.nodeValue
    voteCount.innerHTML = await initialVoteCount
    
})()

notCoin.addEventListener("click", () => {
    voteCount--
});

ton.addEventListener("click", () => {
    voteCount++
});
