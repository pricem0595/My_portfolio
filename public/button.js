$(document).ready(function() {
    $('#clickMe').on('click', function(e) {
        e.preventDefault();
        $("#mesg").css("visibility", "visible");
        
        var formData = JSON.stringify($("#contactform").serializeArray());

        $.ajax({
            type: "POST",
            data: formData,
            dataType: "json",
            contentType: 'application/json'
        });
        
    });
});