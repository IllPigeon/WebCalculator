//this function up here fixes problem with calculator keeping inputs regardless of refresh
window.onload = function() {
    document.getElementById("display").value = "";
}
const calculator = document.querySelector(".calculator")
//child elements of calculator
const keys  = calculator.querySelector(".keys")
const display = document.getElementById("display")
//prevents people from being able to type directly into textbox
display.onmousedown = function(e){
    e.preventDefault();
}

/**https://youtu.be/f0SG2j6d-Kg?t=2005 source for idea behind the type stuff, its a bit
 * weird and maybe overcomplicated things.
 * 
 **/
keys.addEventListener("click", event => {
    //if statement prevents action event on clicking gaps
    if(event.currentTarget == event.target)return;

    const key = event.target;
    const keyVal = key.textContent;
    const type = key.dataset.type;

    //checking to see if key pressed was a number
    if(type == "num"){
        if(display.value == ""){
            display.value = keyVal;
         } else {
            display.value += keyVal;
        }
    }

    if(type == "delete"){
        display.value = display.value.substring(0, display.value.length-1);
    }
    if(type == "a-clear"){
        display.value = "";
    }

    if(type == "add"){
        display.value += "+";
    }

    if(type == "dec"){
        display.value += ".";
    }

    if(type == "sub"){
        display.value += "-";
    }
    if(type == "pow"){
        display.value += "**"
    }

    if(type == "div"){
        display.value += "/"
    }
    if(type == "mul"){
        display.value += "*"
    }
    if(type == "equ"){
        if(display.value == ""){
            display.value = "";
        }
        else{
            display.value = eval(display.value);
        }
    }
    if(type == "sqrt" ){
        var num = Math.sqrt(display.value, 2);
        display.value = num.toFixed(9);
    }
    if(type == "sin"){
        display.value = Math.sin(display.value);
    }
    if(type == "cos"){
        display.value = Math.cos(display.value);
    }
    if(type == "tan"){
        display.value = Math.tan(display.value);
    }
})