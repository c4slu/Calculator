const display = document.getElementById("display");
const displayant = document.getElementById("display-ant");
const buttons = document.querySelectorAll("button");
const percent = document.getElementById("percent");


for (let button of buttons) {
  button.addEventListener("click", function() {
    if (button.classList.contains("number")) {
      display.value += button.value;
    } else if (button.classList.contains("operator")) {
      display.value += " " + button.value + " ";
    } else if (button.id === "equals") {
      if (display.value.indexOf("%") !== -1){
        const value = display.value;
        const target = "%";
        const index = value.indexOf(target);
        const ate = value.substring(0, index);
        const bte = value.substring(index+1, 999);
  
        display.value = (ate / bte)*100
        
      } else {
      displayant.value = (display.value)
      display.value = eval(display.value);
      }
    
    } else if (button.id === "clear") {
      display.value = "";
      displayant.value = "";
    } else if (button.id === "decimal") {
      display.value += ".";
    } else if (button.id === "clear-ult") {
      display.value = (displayant.value)
    } else if (button.id === "backspace") {
      display.value = display.value.slice(0, -1);
    } else if (button.id === "percent") {
      display.value += button.value
    }

    else display.value == " " & displayant.value == ""


  

  });
  
}
