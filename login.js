const email=document.querySelector("#email");
const password=document.querySelector("#pass");

const btn=document.querySelector("#btn");
addButton.addEventListner("click", (e)=>{
    e.preventDefault();
    const username=username.value;
    const password=password.value;
    if(username==="email" && password==="pass"){
        alert("you have successfull logged in");
    }
    else{
        alert("please fill correct email & password");
    }
})
