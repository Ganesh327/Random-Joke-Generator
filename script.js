const apiurl="https://official-joke-api.appspot.com/random_joke";
let res=document.getElementById("joke");
let button=document.getElementById("bnt");
let button1=document.getElementById("bnt1");
let res1=document.getElementById("joke1");
let data="";

async function getdata(){
    let result=await fetch(apiurl);
    let data=result.json();
    return data;
}
button.addEventListener("click",async ()=>{
     data=await getdata();
       res.innerText=`${data.setup}`;

})
button1.addEventListener("click", ()=>{
    res1.innerHTML=`${data.punchline}`;
    button.addEventListener("click",async ()=>{
     res1.innerHTML="To know the PunchLine plz click the below button...";

})
})