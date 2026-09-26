let btn=document.querySelector("button");
let clear=document.getElementById("reset");
let tip=document.getElementById("p");
let P =document.getElementById("result")
btn.addEventListener("click",function(){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    if(height === "" || weight === ""){
    tip.innerText = "Please enter height and weight.";
    return;
}
    height = height / 100;
    let bmi = (weight / (height * height)).toFixed(2);;
    
    P.innerText=bmi;
    clear.after(P);
    P.style.backgroundColor = "pink";
    P.style.padding = "10px";
    P.style.width="200px"
    
    if(bmi < 18){
    tip.innerText = "Underweight";
    P.after(tip);
}
if(bmi >= 18 && bmi <= 25){
    tip.innerText = "Healthy weight";
    P.after(tip);
}

if(bmi > 25){
    tip.innerText = "Overweight";
    P.after(tip);
}

   tip.style.height="50px";
   tip.style.width="250px";
})

clear.addEventListener("click", function(){

    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    P.style.backgroundColor = "transparent";
    tip.style.backgroundColor="transparent";
    P.innerText = "";
    tip.innerText = "";

});
