let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);


arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    });
});


document.addEventListener('keydown', (e) => {
    let key = e.key;

    if (!isNaN(key)) { 
        handleInput(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') { 
        handleInput(key);
    } else if (key === 'Enter') { 
        handleInput('=');
    } else if (key === 'Backspace') { 
        handleInput('DEL');
    } else if (key === 'Escape') { 
        handleInput('AC');
    } else if (key === 's' || key === 'S') { 
        handleInput('√');
    } else if (key === '^') { 
        handleInput('^');
    }
});


function handleInput(inputChar) {
    if (inputChar == '=') {
        try {
            
            let modifiedString = string.replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)');
            
            modifiedString = modifiedString.replace(/(\d+(\.\d+)?|\))\^(\d+(\.\d+)?|\()/g, 'Math.pow($1, $3)');
           
            string = eval(modifiedString);
            input.value = string;
        } catch (error) {
            input.value = "Error";
            string = "";
        }
    } else if (inputChar == "AC") {
        string = "";
        input.value = string;
    } else if (inputChar == "DEL") {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else if (inputChar == "√") {
        string += "√";  
        input.value = string;
    } else {
        string += inputChar;
        input.value = string;
    }
}
