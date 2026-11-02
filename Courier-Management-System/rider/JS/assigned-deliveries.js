
document.addEventListener("DOMContentLoaded", function()
{
    const filter = document.getElementById("typeFilter");

    if(filter)
    {
        filter.addEventListener("change", function()
        {
            filterParcels();
        });
    }

    let buttons = document.querySelectorAll(".viewBtn");

    for(let i = 0; i < buttons.length; i++)
    {
        buttons[i].addEventListener("click", function()
        {
            let id = buttons[i].value;

            openDetails(id);
        });
    }
});


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
}


function openDetails(id)
{
    window.location.href = "delivery-details.html?id=" + id;
}
