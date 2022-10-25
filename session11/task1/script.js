let el = document.getElementById("result");

function addItems() {
  let a = Number(vara.value);
  let b = Number(varb.value);
  let result = a + b;
  el.value = result;
}

function minusItems() {
  let a = Number(vara.value);
  let b = Number(varb.value);
  let result = a - b;
  el.value = result;
}
function multiplyItems() {
  let a = Number(vara.value);
  let b = Number(varb.value);
  let result = a * b;
  el.value = result;
}
function divideItems() {
  let a = Number(vara.value);
  let b = Number(varb.value);
  let result = a / b;
  el.value = result;
}