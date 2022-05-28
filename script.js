

$('#submitButton').click(function(){
    $('.comments').prepend(`<p>${$('#userName').val()}</p><p>${$('#comment').val()}</p><hr/>`);
});

