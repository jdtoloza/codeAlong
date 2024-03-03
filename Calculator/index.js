const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value) /* takes an expression and evaluates it */
    }
    catch(error){
        display.value ="Error, please clear and start over";
    }
    
}