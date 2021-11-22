const first=document.querySelector("#f.name");
const middlename=document.querySelector("#m.name");
const lastname=document.querySelector("#l.name");
const email=document.querySelector("#email");
const password=document.querySelector("#pass");
const confirmpass=document.querySelector("#conf-pass");
const button=document.querySelector("#btn");
addButton.addEventListner("click", (e)=>{
    e.preventDefault();
    const first=first.value.trim();
    const middle=middlename.value.trim();
    const lastname=lastname.value.trim();
    const email=email.value.trim();
    const pass=password.value.trim();
    const confirm=confirmpass.value.trim();
    const btn=button.value.trim();


})
validateSign(()=> {
    const first=document.getElementById("f.name").value;
    const middle=document.getElementById("m.name").value;
    const last=document.getElementById("l.name").value;
    const pass=document.getElementById("pass").value;
    const confpass=document.getElementById("conf-pass").value;
    if(firstname===''|| middlename===''|| lastname===''||email===''|| confirmpassword===''){
        document.getElementById("f.name").innerHTML="plese fill the required field";
        document.getElementById("m.name").innerHTML="plese fill the required field";
        document.getElementById("l.name").innerHTML="plese fill the required field";
        document.getElementById("pass").innerHTML="plese fill the required field";
        document.getElementById("conf-pass").innerHTML="plese fill the required field";
    }
    else if(pass.length<8){
        document.getElementById("pass").innerHTML="please fill correct password";
    }
    else{
        alert("you have signup successfull");

    }

})