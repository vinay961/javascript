// get html element
const bjp=document.getElementById("bjp");
const congress=document.getElementById("congress");
const aap=document.getElementById("aap");
const value=document.getElementById("value");
const sub=document.getElementById("submit");


bjp.addEventListener("click", () =>{
    const displayValue=Number(value.innerText);
    value.innerText=displayValue+1;
});

congress.addEventListener("click", () =>{
    const displayValue1=Number(value1.innerText);
    value1.innerText=displayValue1+1;
});

aap.addEventListener("click", () =>{
    const displayValue1=Number(value2.innerText);
    value2.innerText=displayValue1+1;
});

function action(){
    const displayValue=Number(value.innerText);
    const displayValue1=Number(value1.innerText);
    const displayValue2=Number(value2.innerText);

    if(displayValue>displayValue1 && displayValue>displayValue2){
        document.getElementById("result").innerHTML="BJP WINS";
    }

    else if(displayValue1>displayValue && displayValue1>displayValue2){
        document.getElementById("result").innerHTML="Congress WINS";
    }

    else{
        document.getElementById("result").innerHTML="AAP WINS";
    }
}

sub.addEventListener("click", action);