$(document).ready(function() {
    console.log($('#mov-keyword').text())
    $('#movie-input').val($('#mov-keyword').text());
    $('#movie-input').bind('keyup', function() {
        if ($('#movie-input').val().length != 0) {
            $('#movie-form').delay(500).submit();
        }
    });
});