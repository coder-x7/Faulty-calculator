function success(work, persistence){

  if (!work && !persistence){
    return "Achieved!";

  } else {
    return "Keep trying...";
  }
}

console.log(success(true, true)); 

                             // New function

 let user = {
  username: "siddique",
  profession: "coding"
 }

 function handleObject(abc){
        console.log(`welcome ${abc.username} to the ${abc.profession} journey`)
 }

 handleObject({                       //method 1
  username: "siddique",
  profession: "coding"
 })

handleObject(user)                    //method 2


                         //FUNCTION WITH ARRAY
 

let myArr = [200,100,500,600,400]

function returnSecondValue(getValue){
        return getValue[3] + getValue[3]
}
console.log(returnSecondValue(myArr))