
document.addEventListener("DOMContentLoaded", function()
{
    const form = document.querySelector("form");

    if(form)
    {
        form.addEventListener("submit", function(event)
        {
           

            if(collect_data() == true)
            {
                alert("Login Form Validation Successful!");
            }

            else{
                event.preventDefault();
            }
        });
    }
});


function collect_data()
{
    let validEmail = validateEmail();
    let validPassword = validatePassword();

    return validEmail && validPassword;
}


function validateEmail()
{
    let email = document.getElementById("riderEmail").value.trim();
    let Error = document.getElementById("EmailError");

    let regexpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email == "")
    {
        Error.innerHTML = "Please Enter Your Email";
        return false;
    }
    else if(!regexpression.test(email))
    {
        Error.innerHTML = "Please Enter The Right Email Format";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validatePassword()
{
    let password = document.getElementById("riderPassword").value;
    let Error = document.getElementById("PasswordError");

    if(password == "")
    {
        Error.innerHTML = "Please Enter Your Password";
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
