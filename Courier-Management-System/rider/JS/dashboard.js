
document.addEventListener("DOMContentLoaded", function()
{
    const logout = document.querySelector(".logout a");

    if(logout)
    {
        logout.addEventListener("click", function(event)
        {
            let answer = confirm("Are you sure you want to logout?");

            if(answer == false)
            {
                event.preventDefault();
            }
        });
    }
});
