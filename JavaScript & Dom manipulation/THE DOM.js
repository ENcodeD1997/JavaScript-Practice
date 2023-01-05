const paragraph = document.getElementById("pp");
const  text = document.createTextNode('I\'m red!');
paragraph.style.color = 'red';
paragraph.appendChild(text);

const next = document.getElementById("ppp");
const wext = document.createTextNode("This is more of the test lets see if it pops up");
next.style.color = ('red');
next.appendChild(wext);

const box = document.createElement("div");
box.id = "box";
box.innerText = 'Hey! This is another div and I want to see if I can add line breaks\nSo here it is lets see if this works!';
box.style.background = "pink";
box.style.border = "solid blue";

document.body.appendChild(box);


const boxTwo = document.createElement("div");
boxTwo.id = "boxTwo";
boxTwo.innerText = "I am box 2!";


document.body.appendChild(boxTwo);

const button = document.createElement('button');
button.innerText = 'Button';
button.id = 'button-1';
button.style.color = "blue";

box.appendChild(button);

const boxThree = document.createElement("div");
boxThree.id = "boxThree";
boxThree.innerText = "I am here please work...";

document.body.appendChild(boxThree);

const h1 = document.createElement("h1");
h1.innerHTML = 'I\'m a div!';

document.body.append(h1);

const alexa = document.createElement("p");
alexa.innerHTML = "I am some text, a paragraph if you will!";

document.body.append(alexa);

const blueText = document.createElement("h3");
blueText.innerText = "I am a blue h3!";
blueText.style.color = 'blue';
//purposefully using single and double quotes to remind myself that its ok to use either.
// '' single quotes will need different methods of punctuation to achieve the same results as double quotes.
// this can include:  <p>'I\'m getting the hang of this.</p>
document.body.append(blueText);
// I've run into some trouble in the past concerning naming my variables I'll keep in mind what
// I have learned here today ~ be more cautious of what to name and how to name your variables!

