let output1= document.getElementById("display1");
let output2= document.getElementById("display2");

let zero= document.getElementById("zero");
let add= document.getElementById("add"); 
let one= document.getElementById("one");
let equals= document.getElementById("equals");
let clear= document.getElementById("clear");
let del= document.getElementById("del");
let two= document.getElementById("two");
let three= document.getElementById("three")
let four= document.getElementById("four")
let five= document.getElementById("five")
let six= document.getElementById("six")
let seven= document.getElementById("seven")
let eight= document.getElementById("eight")
let nine= document.getElementById("nine")
let sub= document.getElementById("sub")
let mul= document.getElementById("mul")
let divide= document.getElementById("divide")
let mod= document.getElementById("mod")
let sqrt= document.getElementById("sqrt")
let dot= document.getElementById("dot");

let displaystring= "";
function addInput(number){
displaystring += number;
output1.value = displaystring;
cssMaintain(false);
}



zero.addEventListener("click",() =>{
 addInput(0);
});

one.addEventListener("click",()=>{
addInput(1);
});

two.addEventListener("click",()=>{
  addInput(2);
});

three.addEventListener("click",()=>{
  addInput(3);
});

four.addEventListener("click",()=>{
  addInput(4);
});

five.addEventListener("click",()=>{
  addInput(5);
});

six.addEventListener("click",()=>{
  addInput(6);
});

seven.addEventListener("click",()=>{
  addInput(7);
});

eight.addEventListener("click",()=>{
  addInput(8);
});

nine.addEventListener("click",()=>{
  addInput(9);
});

dot.addEventListener("click",()=>{
  addInput(".");
});

sub.addEventListener("click",()=>{
  addInput("-");
});

add.addEventListener("click",()=>{
  addInput("+");
});

mul.addEventListener("click",()=>{
  addInput("*");
});

divide.addEventListener("click",()=>{
  addInput("/");
});

mod.addEventListener("click",()=>{
  addInput("%");
});


sqrt.addEventListener("click",()=>{
  addInput("√");
equals.removeEventListener("click",calculation);
equals.addEventListener("click",square);
});

function square(){
  cssMaintain(true);
  //  if (displaystring === "") return;
  let displayArray= displaystring.split("");
  // console.log(displayArray)
  displayArray.shift();
  let actualNumberString= displayArray.join("");
  
  let actualNumber = Math.sqrt(parseFloat(actualNumberString));
    displaystring = String(actualNumber);
    output2.value= displaystring;
    equals.removeEventListener("click",square);
    equals.addEventListener("click",calculation);
}

equals.addEventListener("click",calculation);

function calculation(){
    if(displaystring.length>0){
    let result = eval(displaystring);
    output2.value = result;
    displaystring= result;
    cssMaintain(true);
  }
 
}

clear.addEventListener("click",()=>{
  displaystring= "";
  output1.value= displaystring;
  output2.value= displaystring;
});

del.addEventListener("click",()=>{
  let displayArray = displaystring.split("");
  displayArray.pop();
  displaystring= displayArray.join("");
  output1.value= displaystring;
});

function cssMaintain(isResult){
  if(isResult){
    output2.style.textAlign= "right";
  } else{
    output1.style.textAlign= "left"
  }
}