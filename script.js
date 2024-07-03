let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                // Automatically wrap numbers after √ with Math.sqrt()
                let modifiedString = string.replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)');
                // Replace ^ with Math.pow()
                modifiedString = modifiedString.replace(/(\d+(\.\d+)?|\))\^(\d+(\.\d+)?|\()/g, 'Math.pow($1, $3)');
                // Evaluate the modified string
                string = eval(modifiedString);
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (e.target.innerHTML == "√") {
            string += "√";  // Just add the √ symbol
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});