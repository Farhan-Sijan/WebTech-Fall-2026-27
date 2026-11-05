document.addEventListener("DOMContentLoaded", function()
{
    const form = document.querySelector("form");

    if(form)
    {
        form.addEventListener("submit", function(event)
        {
            if(collect_data() == true)
            {
                alert("Congratulations! Your Registration is Successful!");

            }
            else{
                 event.preventDefault();
            }
        });
    }
});

function collect_data()
{
    let validName=validateName();

       let validEmail=  validateEmail();

     let validPhone=validatePhone();
         let validGender= validateGender();

      let validDob =validateDob();

      let validShift=validateShift();
      
        let validPassword=validatePassword();
       let validConfirm = validateConfirmPassword();

    return validName  && validEmail  &&  validPhone &&
              validGender  &&  validDob && validShift &&
            validPassword &&  validConfirm;
}

function validateName()
{
     let name =document.getElementById("riderName").value.trim();
    let error=document.getElementById("NameError");

    if(name=="")
    {
          error.innerHTML="Please Enter your Name : ";
         return false;
    }
    else if(name.length<6)
    {
        error.innerHTML="name Must be at least 6 char ";
        return false;
    }

    else{
        error.innerHTML= "";
        return true;
    }
}

function validateEmail()
{
    let email= document.getElementById("riderEmail").value.trim();
    let error =document.getElementById("EmailError");

    let regexpression= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email== "")
    {
        error.innerHTML = "Please Enter your mail";
        return false;
    }
    else if(!regexpression.test(email))
    {
        error.innerHTML= "Please Enter The Right Email Format";
        return false;
    }
    else
    {
        error.innerHTML = "";
        return true;
    }
}

function validatePhone()
{
    let phone = document.getElementById("riderPhone").value.trim();
    let Error = document.getElementById("PhoneError");

    if(phone == "")
    {
        Error.innerHTML = "Please Enter Phone Number";
        return false;
    }
    else if(phone.length != 11 || isNaN(phone))
    {
        Error.innerHTML = "Phone Number Must be 11 Digits";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function validateGender()
{
    let genders =document.querySelectorAll('input[name="gender"]');
       let GenderError = document.getElementById("GenderError");
    let selectGender = "";

    for(let i=0;i<genders.length;i++)
    {
        if(genders[i].checked)
        {
            selectGender=genders[i].value;
            break;
        }
    }

       if(selectGender == "")
    {
        GenderError.innerHTML = "Please Select Gender";
        return false;
    }
    else
    {
        GenderError.innerHTML = "";
        return true;
    }
}
function validateDob()
{
    let dob = document.getElementById("dob").value;
    let Error = document.getElementById("DobError");

    if(dob == "")
    {
        Error.innerHTML = "Please Select Date of Birth";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}

function  validateShift()
{
     let shifts = document.querySelectorAll('input[name="shift"]');
    let ShiftError = document.getElementById("ShiftError");
    let selectedShifts = [];
for(let i = 0; i < shifts.length; i++)
    {
        if(shifts[i].checked)
        {
            selectedShifts.push(shifts[i].value);
        }
    }

    if(selectedShifts.length == 0)
    {
        ShiftError.innerHTML = "Please Select at least One Shift";
        return false;
    }
    else
    {
        ShiftError.innerHTML = "";
        return true;
    }


}

function validatePassword()
{
    let password = document.getElementById("riderPassword").value;
    let Error = document.getElementById("PasswordError");

    if(password == "")
    {
        Error.innerHTML = "Please Enter Password";
        return false;
    }
    else if(password.length < 6)
    {
        Error.innerHTML = "Password Must be at least 6 Characters";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateConfirmPassword()
{
    let password = document.getElementById("riderPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let Error = document.getElementById("ConfirmError");

    if(confirmPassword == "")
    {
        Error.innerHTML = "Please Confirm Password";
        return false;
    }
    else if(password != confirmPassword)
    {
        Error.innerHTML = "Passwords Do Not Match";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}