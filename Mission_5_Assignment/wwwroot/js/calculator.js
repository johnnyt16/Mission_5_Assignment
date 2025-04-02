// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    // Set the hourly rate
    const hourlyRate = 25.00;
    
    // Format the hourly rate for display
    $("#hourlyRate").val("$" + hourlyRate.toFixed(2));
    
    // Handle calculate button click
    $("#calculateBtn").click(function () {
        // Get the number of hours
        const hours = parseFloat($("#hours").val());
        
        // Validate input
        if (isNaN(hours) || hours <= 0) {
            $("#hours").addClass("is-invalid");
            return;
        } else {
            $("#hours").removeClass("is-invalid");
        }
        
        // Calculate the total cost
        const totalCost = hours * hourlyRate;
        
        // Display the formatted total cost
        $("#totalCost").val("$" + totalCost.toFixed(2));
    });
    
    // Clear validation when input changes
    $("#hours").on("input", function() {
        $(this).removeClass("is-invalid");
    });
});
