"use strict";

// incrementing timer

const counter = document.querySelector('#counter')

let seconds = -1;
let timer = setInterval(startTimer, 1000);

function startTimer() {
  seconds++;
  counter.innerText = seconds;
}

// manually increment timer with buttons

const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')

minus.addEventListener("click", () => {
if (seconds >= 0) {
    seconds--;
}
});

plus.addEventListener("click", () => {
    seconds++;
});

// like individual numbers

const heart = document.querySelector("#heart");
const likes = document.querySelector(".likes");
const commentDiv = document.querySelector("#list");

let hash = {};
heart.addEventListener("click", function () {
  let num = counter.innerHTML;
  console.log("Heat Clicked")
  if (hash[num]) hash[number]++;
  else hash[num] = 1;
  commentDiv.innerHTML += `<li>${counter.innerHTML} has ${hash[num]} like(s)!</li>`;
});

// pause the counter

// restart counter

// comment

const form = document.querySelector('#comment-form')
const userComment = document.querySelector('#comment-input')

function addComment(c) {
    commentDiv.innerHTML += `<li>${c}</li>`;
  }
  
form.addEventListener("submit", (e) => {
    e.preventDefault();
    addComment(userComment.value);
    form.reset();
});