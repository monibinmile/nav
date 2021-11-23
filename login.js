 login(()=>
{
    const username = document.getElementById("#email").value;
    const pass= document.getElementById("#pass").value;
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(username =='')
    {
        alert("please enter user name.");
    }
    else if(pass=='')
    {
        alert("enter the password");
    }
    else if(!filter.test(email))
    {
        alert("Enter valid email id.");
    }
    else if(pass.length < 6 || pass.length > 6)
    {
        alert("Password min and max length is 6.");
    }
    else
    {
     alert('Thank You for Login ');
   document.getElementById("#email").innerHTML=
});
  