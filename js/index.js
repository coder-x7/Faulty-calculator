/*
let random= Math.random();  // generates random number
console.log(random);  // to look for the random number

let a = prompt("enter 1st number");
let b = prompt("enter the operator");
let c = prompt("enter second number");

let obj = {
    "+" : "-",
    "-" : "*",
    "*" : "+",
    "/" : "%"
}

if (random>0.2) {
    
    alert(`the result is ${eval(`${a} ${b} ${c}`)}` )

} else {
    
    b = obj[b]
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
}
*/

                           //code for UI

function calculate() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("operator").value;
    let c = document.getElementById("num2").value;

    let random = Math.random(); // Random number

    let obj = {
        "+" : "-",
        "-" : "*",
        "*" : "+",
        "/" : "%"
    }

    if (random > 0.2) {
        document.getElementById("result").innerText = 
            `The result is ${eval(`${a} ${b} ${c}`)}`;
    } else {
        b = obj[b]; 
        document.getElementById("result").innerText = 
            `The result is ${eval(`${a} ${b} ${c}`)} (Faulty!)`;
    }
}

                          //JQuerry version

/*
$(document).ready(function() {
    $("#calcBtn").click(function() {
        let a = $("#num1").val();
        let b = $("#operator").val();
        let c = $("#num2").val();

        let random = Math.random(); 

        let obj = {
            "+" : "-",
            "-" : "*",
            "*" : "+",
            "/" : "%"
        };

        if (random > 0.2) {
            $("#result").text(`The result is ${eval(`${a} ${b} ${c}`)}`);
        } else {
            b = obj[b]; 
            $("#result").text(`The result is ${eval(`${a} ${b} ${c}`)} (Faulty!)`);
        }
    });
});
*/