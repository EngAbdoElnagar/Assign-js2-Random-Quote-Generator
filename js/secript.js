let content = [
  `“Be yourself; everyone else is already taken.” \n
― Oscar Wilde`,
  `“I'm selfish, impatient and a little insecure. I make mistakes, \n
  I am out of control and at times hard to handle. \n
  But if you can't handle me at my worst, \n
  then you sure as hell don't deserve me at my best.” \n
― Marilyn Monroe`,
  `“Two things are infinite: the universe and human stupidity; \n
  and I'm not sure about the universe.” \n
― Albert Einstein`,
];

let chiked = "";

function getRandomNumber() {
  let randomNumber = content[Math.floor(Math.random() * content.length)];

  if (chiked === randomNumber) {
    return getRandomNumber();
  }

  chiked = randomNumber;

  document.getElementById("content").innerHTML = randomNumber;
}
