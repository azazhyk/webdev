const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  yourname = document.getElementById('yourname'),
  yourfocus = document.getElementById('focus');

const showAmPm = true;

function showTime() {
   let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  const amPm = hour >= 12 ? 'PM' : 'AM';

  hour = hour % 12 || 12;

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span></span> ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBgGreet() {

  let today = new Date(),
    hour = today.getHours();

  if(hour<12){
    document.body.style.backgroundImage = "url('../img/morning.png')";
    greeting.textContent = 'Good Morning';
  } else if (hour <18){
    document.body.style.backgroundImage = "url('../img/afternoon.png')";
    greeting.textContent = 'Good Afternoon';
  } else{
    document.body.style.backgroundImage = "url('../img/night.png')";
    greeting.textContent = 'Good Evening';
  }
}

function getName(){
  if(localStorage.getItem('yourname')===null){
    yourname.textContent = '[Enter Name]';
  } else {
    yourname.textContent = localStorage.getItem('yourname');
  }
}

function setName(e){
  if(e.type === 'keypress'){
    if(e.which == 13 || e.keyCode == 13){
      localStorage.setItem('yourname', e.target.innerText);
      yourname.blur();
    }
  } else {
    localStorage.setItem('yourname', e.target.innerText);
  }
}

function getFocus(){
  if(localStorage.getItem('yourfocus')===null){
    yourfocus.textContent = '[Enter Focus]';
  } else {
    yourfocus.textContent = localStorage.getItem('yourfocus');
  }
}

function setFocus(e){
  if(e.type === 'keypress'){
    if(e.which == 13 || e.keyCode == 13){
      localStorage.setItem('yourfocus', e.target.innerText);
      yourfocus.blur();
    }
  } else {
    localStorage.setItem('yourfocus', e.target.innerText);
  }
}

yourname.addEventListener('keypress', setName);
yourname.addEventListener('blur', setName);

yourfocus.addEventListener('keypress', setFocus);
yourfocus.addEventListener('blur', setFocus);


showTime();
setBgGreet();
getName();
getFocus();