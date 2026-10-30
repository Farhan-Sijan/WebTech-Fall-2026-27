
document.addEventListener("DOMContentLoaded", function()
{
    const button = document.getElementById("searchBtn");

    if(button)
    {
        button.addEventListener("click", function()
        {
            collect_data();
        });
    }

    const resetButton = document.getElementById("resetBtn");

    if(resetButton)
    {
        resetButton.addEventListener("click", function()
        {
            resetSearch();
        });
    }

    const filter = document.getElementById("typeFilter");

if(filter)
{
    filter.addEventListener("change", function()
    {
        filterParcels();
    });
}
});


function collect_data()
{
    let validcheck = trackId();
  
    

    if(validcheck == true)
    {
        return searchParcel();
    }
    else
    {
        return false;
    }
}

function trackId()
{
    let track = document.getElementById("searchParcel").value.trim();

    let errorid = document.getElementById("searchError");

    if(track == "")
    {
        errorid.innerHTML = "Please Enter the Tracking ID";
        return false;
    }
    else
    {
        errorid.innerHTML = "";
        return true;
    }
}

function searchParcel()
{
    let track = document.getElementById("searchParcel").value.trim().toUpperCase();

    let rows = document.querySelectorAll(".parcel-table tr");

    let found = false;

    for(let i = 1; i < rows.length; i++)
    {
        let tableId = rows[i].getElementsByTagName("td")[0].innerHTML.trim().toUpperCase();

        if(track == tableId)
        {
             rows[i].style.display = "table-row";
            found = true;
        }
        else
        {
            rows[i].style.display = "none";
        }
    }

    let errorid = document.getElementById("searchError");

    if(found == false)
    {
        errorid.innerHTML = "Parcel Not Found";
        return false;
    }
    else
    {
        errorid.innerHTML = "";
        return true;
    }
}


function resetSearch()
{
    document.getElementById("searchParcel").value = "";

    document.getElementById("searchError").innerHTML = "";

    let rows = document.querySelectorAll(".parcel-table tr");

    for(let i = 1; i < rows.length; i++)
    {
        rows[i].style.display = "table-row";
    }
}

function filterParcels()
{
    let type = document.getElementById("typeFilter").value;

    let rows = document.querySelectorAll(".parcel-table tr");

    for(let i = 1; i < rows.length; i++)
    {
        let parcelType = rows[i].getElementsByTagName("td")[2].innerHTML;

        if(type == "All" || type == parcelType)
        {
            rows[i].style.display = "table-row";
        }
        else
        {
            rows[i].style.display = "none";
        }
    }

    document.getElementById("searchParcel").value = "";
    document.getElementById("searchError").innerHTML = "";
}
