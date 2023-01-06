const body = document.body
const div = document.createElement("div");
const heading = document.createElement("h1");
const headingThree = document.createElement("h3");
headingThree.innerText = "I am blue";
heading.innerText = "I'm red!";
heading.style.color = "red";
headingThree.style.color = "blue";
body.append(headingThree);
body.append(heading);

const divTwo = document.createElement("div");
const headingBlack = document.createElement("h1")
const paragraphBlack = document.createElement("p");
headingBlack.innerText = " I'm a div!";
const divThree = document.createElement("div");
paragraphBlack.innerText = " ME TOO!!";
body.appendChild(divThree);


divThree.append(headingBlack);
divThree.append(paragraphBlack);