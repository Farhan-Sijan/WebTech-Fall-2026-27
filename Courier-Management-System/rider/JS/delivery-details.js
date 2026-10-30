document.addEventListener("DOMContentLoaded", function()
{
    showParcelId();
});

function showParcelId()
{
    let url = new URLSearchParams(window.location.search);

    let id = url.get("id");

    if(id == null)
    {
        document.getElementById("parcelId").innerHTML = "No Parcel Selected";
        return false;
    }
    else
    {
          document.getElementById("parcelId").innerHTML = id;

    showParcelInfo(id);

    return true;
    }
}


function showParcelInfo(id)
{
    let name = "";
    let type = "";
    let status = "";
    let phone = "";
let address = "";

    if(id == "CR001")
    {
        name = "Rahim Ahmed";
        type = "Pickup";
        status = "Pending";
         phone = "013134354323";
    address = "Satmatha, Bogura";
    }
    else if(id == "CR002")
    {
        name = "Karim Hasan";
        type = "Delivery";
        status = "In Progress";
         phone = "017545645645";
    address = "Thanthania, Bogura";
    }
    else if(id == "CR003")
    {
        name = "Nusrat Jahan";
        type = "Delivery";
        status = "Delivered";
         phone = "0121435456";
    address = "Jaleshwaritola, Bogura";
    }
    else
    {
        document.getElementById("receiverName").innerHTML = "Parcel Not Found";
        return false;
    }

    document.getElementById("receiverName").innerHTML = name;
    document.getElementById("parcelType").innerHTML = type;
    document.getElementById("parcelStatus").innerHTML = status;
document.getElementById("receiverPhone").innerHTML = phone;

document.getElementById("deliveryAddress").innerHTML = address;
    return true;
}
