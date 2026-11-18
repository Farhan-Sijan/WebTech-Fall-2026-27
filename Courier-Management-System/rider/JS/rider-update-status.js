
document.addEventListener("DOMContentLoaded", function()
{
    const form = document.querySelector("form");

    if(form)
    {
        form.addEventListener("submit", function(event)
        {
            event.preventDefault();

            if(collect_data() == true)
            {
                alert("All fields are valid! Status update form submitted.");
            }
        });
    }
});


function collect_data()
{
    let validTracking = validateTrackingId();
    let validStatus = validateStatus();
    let validOtp = validateOtp();
    let validProof = validateProof();

    return validTracking && validStatus && validOtp && validProof;
}


function validateTrackingId()
{
    let tracking = document.getElementById("trackingId").value.trim();
    let Error = document.getElementById("TrackingError");

    if(tracking == "")
    {
        Error.innerHTML = "Please Enter Tracking ID";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateStatus()
{
    let status = document.getElementById("newStatus").value;
    let Error = document.getElementById("StatusError");

    if(status == "")
    {
        Error.innerHTML = "Please Select New Status";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateOtp()
{
    let otp = document.getElementById("otp").value.trim();
    let Error = document.getElementById("OtpError");

    if(otp == "")
    {
        Error.innerHTML = "Please Enter Delivery OTP";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}


function validateProof()
{
    let proof = document.getElementById("proof");
    let Error = document.getElementById("ProofError");

    if(proof.files.length == 0)
    {
        Error.innerHTML = "Please Select Proof Photo or Signature";
        return false;
    }
    else
    {
        Error.innerHTML = "";
        return true;
    }
}
