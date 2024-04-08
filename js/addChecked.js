$(document).ready(function() {
    // Create a function to add or remove the class 'checked' to element with id 'menuToggle'
    $('#menuToggle').change(function() {
        if ($(this).is(':checked')) {
            $(this).parent().addClass('checked');
        } else {
            $(this).parent().removeClass('checked');
        }
    });

    $('nav a[href^="#"]').on('click', function() {
        $('#menuToggle').prop('checked', false);
        $('#menuToggle').parent().removeClass('checked');
    });
});
