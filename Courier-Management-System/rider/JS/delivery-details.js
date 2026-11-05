
document.addEventListener("DOMContentLoaded", function()
{
    showParcelInfo();
});

function showParcelInfo()
{
      let url = new URLSearchParams(window.location.search);
     let id = url.get("id");

    if(id == "CR001")
    {
        document.getElementById("parcelId").innerHTML = id;
           document.getElementById("receiverName").innerHTML = "Rahim Ahmed";
          document.getElementById("parcelType").innerHTML = "Pickup";
           document.getElementById("parcelStatus").innerHTML = "Pending";
             document.getElementById("receiverPhone").innerHTML = "013134354323";
        document.getElementById("deliveryAddress").innerHTML = "Satmatha, Bogura";
    }
    else if(id == "CR002")
    {
          document.getElementById("parcelId").innerHTML = id;
          document.getElementById("receiverName").innerHTML = "Karim Hasan";
        document.getElementById("parcelType").innerHTML = "Delivery";
          document.getElementById("parcelStatus").innerHTML = "In Progress";
          document.getElementById("receiverPhone").innerHTML = "017545645645";
        document.getElementById("deliveryAddress").innerHTML = "Thanthania, Bogura";
    }
    else if(id == "CR003")
    {
          document.getElementById("parcelId").innerHTML = id;
        document.getElementById("receiverName").innerHTML = "Nusrat Jahan";
           document.getElementById("parcelType").innerHTML = "Delivery";
           document.getElementById("parcelStatus").innerHTML = "Delivered";
        document.getElementById("receiverPhone").innerHTML = "0121435456";
          document.getElementById("deliveryAddress").innerHTML = "Jaleshwaritola, Bogura";
    }
    else
    {
          document.getElementById("parcelId").innerHTML = "Parcel Not Found";
        return false;
    }

    return true;
}
