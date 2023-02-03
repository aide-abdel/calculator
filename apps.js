const textInput = document.getElementById("inputText")
const clrText = document.getElementById("AC")

let sum = 0
let mult = 1
let var1 = null
let var2 = null
let activeOperation = ""

function calcNumber(num){
    if (activeOperation === ""){
        textInput.append(num.getElementsByTagName('div')[0].innerText)
    }else{
        textInput.innerText = num.getElementsByTagName('div')[0].innerText
        // activeOperation= ""
    }
}

clrText.addEventListener('click',()=>{
    textInput.innerText = ""
    var1 = null
    var2 = null
    activeOperation = ""
})

function additionfunc(){
    if(var1 !== null){
    var2 = parseFloat(textInput.innerText)
    var1 += var2
    var2 = null
    }
    else{
        var1 = parseFloat(textInput.innerText)
        var2 = null
    }
    textInput.innerText = var1;
    activeOperation = "addition"
}
function multiplicationfunc(){
    if(var1 !== null){
        var2 = parseFloat(textInput.innerText)
        var1 *= var2
        var2 = null
        }
        else{
            var1 = parseFloat(textInput.innerText)
            var2 = null
        }
        textInput.innerText = var1;
    activeOperation = "multiplication" 
}

function substractionfunc(){
    if(var1 !== null){
        var2 = parseFloat(textInput.innerText)
        var1 -= var2
        var2 = 0
        }
        else{
            var1 = parseFloat(textInput.innerText)
            var2 = 0
        }
        textInput.innerText = var1;
        activeOperation = "substraction" 
}

function divisionfunction(){
    if(var1 !== null){
        var2 = parseFloat(textInput.innerText)
        var1 /= var2
        var2 = 0
        }
        else{
            var1 = parseFloat(textInput.innerText)
            var2 = 0
        }
        textInput.innerText = var1;
        activeOperation = "division" 
}
function reminderfunction(){
    if(var1 !== null){
        var2 = parseFloat(textInput.innerText)
        var1 = var1 % var2
        var2 = 0
        }
        else{
            var1 = parseFloat(textInput.innerText)
            var2 = var1
            var2 = 0
        }
        textInput.innerText = var1;
        activeOperation = "modulo" 
}
function plusminusfunction(){
    var1 = parseFloat(textInput.innerText)
    textInput.innerText = -var1;
    activeOperation = "plusminus"

}

function dotfunc(){
    if(textInput.innerText !== ""){
        varText = textInput.innerText.toString()
        if(!varText.includes(".")){
            varText= varText.concat(".")
        }
        
    }else{
        varText = "0."
    }
    textInput.innerText = varText
}

function equalfunc(){

    if(activeOperation === "addition"){
        additionfunc();
        var1 = var2 = null;
    } else if(activeOperation === "multiplication"){
        multiplicationfunc();
        var1 = var2 = null;
    }else if(activeOperation === "substraction"){
        substractionfunc();
        var1 = var2 = null;
    }else if(activeOperation === "division"){
        divisionfunction();
        var1 = var2 = null;
    }
    else if(activeOperation === "modulo"){
        reminderfunction();
        var1 = var2 = null;
    } else if(activeOperation === "plusminus"){
        divisionfunction();
        var1 = var2 = null;
    }

}

