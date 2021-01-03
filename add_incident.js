console.log($('#user option:selected').val());

$('#user').change(function(){
    console.log($('#user option:selected').val());
});

$('.report_button').click(function(event) {
    let userValue = $('#user option:selected').val();
    let stopNo = 3; //user1 = bus1, user2 = bus2, ...
    let busRoute = 49;

    // switch(userValue){
    //     case "1": stopNo = 4; break;
    //     case "2": stopNo = 2; break;
    //     case "3": stopNo = 1; break;
    // }

    let report = {
        'stopNo': stopNo,
        'busRoute': busRoute
    }

    console.log(report);

    //sends report info to database accident table
    $.ajax({
        url: 'add_incident.php',
        method: 'POST',
        data: report,
        success: function(data) {
            alert("Report sent successfully.");
            $('.submit_button').addClass("hidden");
            $('.recalculate_button').removeClass("hidden");
        },
        error: function(data){

        }
    });
});
