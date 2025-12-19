const click=document.getElementsByClassName("toggle");
const text=document.getElementById("text");
const head=document.getElementById("head");
const img=document.getElementById("img");

function myfunction(){
  if(head.textContent=="OFF"){
    head.textContent="ON";
  
  }else if(head.textContent=="ON"){
    head.textContent="OFF";
 
  }else{
    head.textContent="OFF";
  }

}




