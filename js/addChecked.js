$(document).ready(function() {
    // Add event listener for checkbox change event
    $('#menuToggle').change(function() {
        // Check if checkbox is checked
        if ($(this).is(':checked')) {
            // Add 'checked' class to parent element
            $(this).parent().addClass('checked');
        } else {
            // Remove 'checked' class from parent element
            $(this).parent().removeClass('checked');
        }
    });

    $('nav a[href^="#"]').on('click', function() {
        // Remove 'checked' class from parent element
        $('#menuToggle').prop('checked', false); // Uncheck the checkbox
        $('#menuToggle').parent().removeClass('checked');
    });
});
