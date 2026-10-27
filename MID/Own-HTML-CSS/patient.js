function collect_data()
{
    let Page=document.getElementById("PatientAge").value;
    console.log(Page);

    let validname=validName();
    let email=ValidEmail();
    return false;
}

function validName()
{
   let Pname=document.getElementById("PatientName").value;
   let error=document.getElementById("NameError");

   if(Pname=="")
   {
    error.innerHTML="Enter Your name please";
   }

   else if(Pname.length<6)
   {
    error.innerHTML="Name must be atlest 6 charecters";
   }

   else{
    error.innerHTML="patinet Name is "  + Pname;
   }
   return false;
}

function ValidEmail(){
    let Pemail=document.getElementById("PatientEmail").value;
  let errormail=document.getElementById("EmailError");

  if(Pemail=="")
  {
    errormail.innerHTML="enter your Email Please";
  }

  else if (Pemail.includes(".") || Pemail.includes ("@") || Pemail.includes ("com")  ) 
  {
        errormail.innerHTML="Please enter your valid email";
  }
  else{
    errormail.innerHTML="your email is "+Pemail;
  }

  return false;
}