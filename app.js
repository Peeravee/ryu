//Calculate Robot Position function

function onProcess() {
  //Declare variables 
  let x = 0;
  let y = 0;
  let inputValue = [];

  let right = false;
  let left = false;

  // Input 
  inputVal = document.getElementById("inputValue").value;


  // Calculate the number of w, r, and l in the input value.
  for (let i = 0; i < inputVal.length; i++) {
    if (inputVal[i] == "w") {
      if (right == true) {
        x++;
      } else if (left == true) {
        x--;
      } else if (right == false && left == false) {
        y++;
      }
    } else if (inputVal[i] == "r") {
      right = !right;
    } else if (inputVal[i] == "l") {
      left = !left;
    }
  }
  

  //Return Result
  document.getElementById("x-axis").innerHTML = x;
  document.getElementById("y-axis").innerHTML = y;

}

//Check Enter Key 
let inputVal = document.getElementById("inputValue");
inputVal.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("onProcess").click();
  }
});
