$notificationButton = $('button').attr('id','notify');
$('#notifications').append($notificationButton);

$('#notify').click(function(){
        console.log("Start function");
        randomId = 'rewrwe21';
        $randomElement = $('<div>').attr('id',randomId).text('test notification').show();
        $('#messages').append($randomElement);
        $randomElement.fadeIn('slow').fadeOut('slow');
        $randomElement.remove();
});
