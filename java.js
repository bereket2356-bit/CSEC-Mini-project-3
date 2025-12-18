const click=document.getElementsByClassName("toggle");
const text=document.getElementById("1");
const head=document.getElementById("head");
function myfunction(){
  if(head.textContent=="OFF"){
    head.textContent="ON";
  }else if(head.textContent=="ON"){
    head.textContent="OFF";
  }else{
    head.textContent="OFF";
  }

}




