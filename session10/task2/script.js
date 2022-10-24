
function calculateIndex(){
  let el = document.getElementById("result");
  el.className = "form-control-plaintext";
  let h = Number(height.value);
  let w = Number(weight.value);
  h = h/100;
  let result = w /(h*h);
  result = result.toFixed(1);
  el.value = result;
  el.classList.add(indexType(result));
}

function indexType (result) {
  if (result < 18.5) return "underweight";
  if (result>=18.5 && result <= 24.9) return "normal";
  if (result>=25 && result <= 29.9) return "overweight";
  if (result>=30 && result <= 34.9) return "obesity-class-1";
  if (result>=35 && result <= 39.9) return "obesity-class-2";
  if (result >= 40) return "obesity-class-3";
}