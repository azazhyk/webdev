let queue = [];
let input = 0;
let result = document.getElementById("answer").innerHTML;

function calculate(value) {
    if (input !== 0) {
        input = parseFloat(input);
        addToQueue(input);
    }
    var answer = value[0];
    var dividedByZero = 0;
    for (let i=2; i<value.length; i=i+2){
        switch (queue[i-1]){
            case '+':
                answer+=value[i];
                break;
            case '-':
                answer-=value[i];
                break;
            case '/':
                if(value[i]===0) dividedByZero = 1;
                else answer/=value[i];
                break;
            case '*':
                answer*=value[i];
                break;
        }
    }
    answer = answer.toFixed(10);
    answer = parseFloat(answer);
    if(dividedByZero ===1){
        clearAll();
        result = "ERROR";
    } else {
        result = answer;
        input = answer;
        queue = [];
    }
}

function addToQueue(input){
    queue.push(input);
}

function clearAll(){
    queue = [];
    input = 0;
    result = "0";
}

function numericButton(arg){
    if(result === "ERROR" || (result == "0" && arg != ".")){
        result = "";
    }
    if(!(arg === ".") || !input.match(/[.]/)){
        input += arg;
        result += arg;
    }
}

function operatorButton(arg){
    if(input !==0 && input !== "-"){
        input = parseFloat(input);
        addToQueue(input);
        addToQueue(arg);
        result +=arg;
        input = 0;
    }
    if(arg == "-" && isNaN(queue[0]) && input !== "-"){
        input = "-";
        result = "-";
    }
}
