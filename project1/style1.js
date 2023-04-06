// getting html elements
const decrementbtn= document.getElementById("decrementbtn");
const incrementbtn=document.getElementById("incrementbtn");
const resetbtn=document.getElementById("resetbtn");
const displayValue=document.getElementById("displayValue");

// for decrement value

decrementbtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if(value>0){
        displayValue.innerText=value-1;
    }
    else{
        alert("Negative value not allowed");
    }
});

incrementbtn.addEventListener("click", () => {
    const value=Number(displayValue.innerText);
    if(value>=10){
        alert("More than 10 is not allowed.")
    }
    else{
        displayValue.innerText=value+1;
    }
});

resetbtn.addEventListener("click", () => {
    displayValue.innerText=0;
});