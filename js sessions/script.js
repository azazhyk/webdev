/**
Create a form with a couple of inputs
Add a button
When nothing is typed in button should be disabled 
When something is typed in button should be  enabled  
When you press the button a success message should 
appear that  lasts for  5 secs
*/

// let input = document.getElementById("text");
// let btn = document.getElementById("btn");

// if(input.addEventListener("input", () => {  
//   console.log("click"); 
//   btn.disabled = false;
// }));
// else btn.disabled = true;

// btn.addEventListener("click", () => {
//   alert("Success!");
// });

let random=1;
let flip = document.getElementById("flip");
let img = document.getElementById("coin");
let n = document.getElementById("number");

flip.addEventListener("click", ()=>{
  for(let i=0; i<n.value;i++){
    let random = Math.floor(Math.random() * 2);
    if(random==1){
      img.src = "/head.jpg";
      console.log("Head");
    }else{
      img.src = "/tail.jpg"
      console.log("Tail");
    }
  }
});
