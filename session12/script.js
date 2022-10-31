function typeEffect(element, speed) {
  var text = element.innerHTML;
  element.innerHTML = "";

  var i = 0;
  var timer = setInterval(function () {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

var speed = 75;
var h1 = document.querySelector('h1');
var p = document.querySelector('p');
var delay = h1.innerHTML.length * speed + speed;

typeEffect(h1, speed);

let st = document.getElementById("story");
let act = document.getElementById("actions");
let img = document.getElementById("image");

function createBtn(title, className, action) {
  let newbtn = document.createElement('button');
  newbtn.innerHTML = title;
  newbtn.className = className;
  newbtn.setAttribute("onClick", action);
  return newbtn;
}
function createNewAct(text) {
  let newact = document.createElement('p');
  newact.innerHTML=text;
  return newact;
}

function createNewSt(text) {
  let newst = document.createElement('p');
  newst.className = "author";
  newst.innerHTML=text;
  return newst;
}

function onStartButton() {
  document.getElementById("welkome").setAttribute("id", "main");
  let textSt = "The world has turned upside down and now you are a little black cat. You have to learn to survive in a cat`s body. You should find food and your host. Good luck!"
  st.replaceChild(createNewSt(textSt), st.firstElementChild);
  ///typeEffect(getElementById("author"), speed);

  img.src = "/img/house.jpg";

  deleteElements(act);

  let textAct = "You wake up in the bedroom and feel like you want to eat. You need to find a kitchen. Where will you go?";

  let newbtn1 = createBtn("The room opposite the bedroom", "btn btn-light", "onKitchenClick()");
  let newbtn2 = createBtn("Go up the stairs", "btn btn-light", "onUpstairsClick()");

  act.appendChild(createNewAct(textAct));
  act.appendChild(newbtn1);
  act.appendChild(newbtn2);
}

function deleteElements(element) {
  for (let i = element.childElementCount; i != 0; i--) {
    element.removeChild(element.firstElementChild);
  }
}

function onKitchenClick() {
  deleteElements(act);
  deleteElements(st);

  img.src = "/img/kitchen.jpg";
  
  let textSt = "You've reached the kitchen! ";
  let textAct="It is worth finding something to eat. Where can there be food?"
  
  let newbtn1 = createBtn("Frige", "btn btn-light", "onFrigeClick()");
  let newbtn2 = createBtn("Dining table", "btn btn-light", "onTableClick()");

  st.appendChild(createNewSt(textSt));
  act.appendChild(createNewAct(textAct));
  act.appendChild(newbtn1);
  act.appendChild(newbtn2);
}

function onFrigeClick() {
  deleteElements(act);
  deleteElements(st);

  let textSt = "Oops. The fridge is closed. You have to look for food elsewhere. Do you want to search for food on the table?";
  let newbtn = createBtn("Dining table", "btn btn-light", "onTableClick()");

  st.appendChild(createNewSt(textSt));
  act.appendChild(newbtn);
  img.src="/img/oopps.jpg";
}

function onTableClick() {
  deleteElements(act);
  deleteElements(st);
  
  let textSt = "Hooray. There is a plate of chicken on the table and someone left a cup of water. The first stage has been completed!";
  let textAct = "You returned to the hallway. Now you should find your host. Where can he be?";

  let newbtn1 = createBtn("Go to the second floor", "btn btn-light","onCorridorClick()");
  let newbtn2 = createBtn("Search on the first floor","btn btn-light","onFirstfloorClick()");

  st.appendChild(createNewSt(textSt));
  act.appendChild(createNewAct(textAct));
  act.appendChild(newbtn1);
  act.appendChild(newbtn2);

  img.src="/img/house.jpg";
}

function onUpstairsClick() {
  deleteElements(act);
  deleteElements(st);

  let textSt = "There are only bedrooms and a playroom. It clearly does not smell like food. It is worth going back and looking for a kitchen somewhere else.";
  let newbtn = createBtn("Go to anoter room on the first floor","btn btn-light","onKitchenClick()");

  st.appendChild(createNewSt(textSt));
  act.appendChild(newbtn);
  img.src="/img/corridor.jpg"
}
function onCorridorClick(){
  deleteElements(act);
  deleteElements(st);

  let textSt = "There are two bedrooms and a playroom. Where do you want to find your host?";

  let newbtn1 = createBtn("First bedroom","btn btn-light","onBedroomFirstClick()");
  let newbtn2 = createBtn("Second bedroom","btn btn-light","onBedroomSecondClick()");
  let newbtn3 = createBtn("Playroom","btn btn-light","onPlayroomClick()");

  st.appendChild(createNewSt(textSt));
  act.appendChild(newbtn1);
  act.appendChild(newbtn2);
  act.appendChild(newbtn3);

  img.src = "/img/corridor.jpg";

}
function onBedroomFirstClick(){
  deleteElements(act);
  deleteElements(st);

  let textSt = "It is quiet and peaceful here, but empty. Maybe you should look somewhere else?";
  let newbtn1 = createBtn("Second bedroom","btn btn-light","onBedroomSecondClick()");
  let newbtn2 = createBtn("Playroom","btn btn-light","onPlayroomClick()");

  st.appendChild(createNewSt(textSt));
  act.appendChild(newbtn1);
  act.appendChild(newbtn2);
  img.src = "/img/bedroom1.jpg";

}
function onBedroomSecondClick(){
  deleteElements(act);
  deleteElements(st);

  let textSt = "It looks as if someone has just been here. A bit of a mess. Maybe your host just came out of the bedroom. Where haven't you looked yet?";
  let newbtn1 = createBtn("First bedroom","btn btn-light","onBedroomFirstClick()");
  let newbtn2 = createBtn("Playroom","btn btn-light","onPlayroomClick()");

  st.appendChild(createNewSt(textSt));
  act.appendChild(newbtn1);
  act.appendChild(newbtn2);
  img.src = "/img/bedroom2.jpg";
  
}
function onPlayroomClick(){
  deleteElements(act);
  deleteElements(st);

  let textSt = "Wow! You have found your host! Now you will be taken care of and you will not have to worry.";
  let newbtn = createBtn("Start again","btn btn-dark","onStartAgain()");
  
  st.appendChild(createNewSt(textSt));
  act.appendChild(newbtn);
  img.src = "/img/playroom.jpg";
}

function onStartAgain(){
  location.reload();
}
