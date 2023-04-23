let div=document.createElement("div");
div.setAttribute("class","data");
 let p1=document.createElement("p")
 let p2=document.createElement("p")
 let p3=document.createElement("p")
 let p4=document.createElement("p")
 let p5=document.createElement("p")
 let p6=document.createElement("p")
 let p7=document.createElement("p")

let date=document.createElement("input");
date.setAttribute("type","date");
date.id="dob"

let button=document.createElement("input");
button.setAttribute("type","button");
button.addEventListener("click",display);
button.classList.add("btn","btn-primary");
button.setAttribute("value","Display");
button.style.marginLeft="10px"


div.append(date,button,p1,p2,p3,p4,p5,p6,p7);
document.body.append(div);

function display(){
let date=document.getElementById("dob").value;

let birthdate=new Date(date);

let currentdate=new Date();

let milli=parseInt(currentdate.getTime())-parseInt(birthdate.getTime())
p7.innerHTML="Milliseconds : " + milli

let second=Math.floor(milli/1000);
p6.innerHTML="Seconds : " + second

let minutes=Math.floor(second/60);
p5.innerHTML="Minutes : " + minutes

let hour=Math.floor(minutes/60);
p4.innerHTML="Hour : " + hour

let day=Math.floor(hour/24);
p3.innerHTML="Day : " + day

let year=parseInt(currentdate.getFullYear())-parseInt(birthdate.getFullYear());
p1.innerHTML="Year : " + year

let month=year*12+(currentdate.getMonth()-birthdate.getMonth())
p2.innerHTML="Month : " + month
}