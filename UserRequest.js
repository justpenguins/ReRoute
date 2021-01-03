let uid = $('#user option:selected').val();
var startPoint = "";
var endPoint = "";

$('#user').change(function(){
    console.log($('#user option:selected').val());
});


//registers user
$('.submit_button').click(function(event) {
    $('.response').empty();
    startPoint = $('#startPoint').val();
    endPoint = $('#endPoint').val();
    uid = $('#user option:selected').val();

    $.ajax({
        url: 'findRoute.php',
        method: 'GET',
        data: {
            uid: uid,
            startPoint: startPoint,
            endPoint: endPoint
        },
        success: function(data) {
            console.log(data);

            //ALL Routes
            let dataArray = data.split("-");
            dataArray.pop();

            console.log(dataArray);

            //THEN
            for (let route of dataArray){
                let busRoute = route.split(":")[0];
                let busNo = route.split(":")[1];

                let style = "<div class='alternativeRoute'>"
                    + "<div><h3>Bus Route: </h3><span class='busRoute'>" + busRoute + "</span></div>"
                    + "<div><h3>Bus Number: </h3><span class='busNo'>" + busNo + "</span></div>";
                    + "</div>"
                $('.response').append(style);
            }
            //
        },
        error: function(data){

        }
    });

    // let user = {
    //     "uid": uid,
    //     "startPt": startPoint,
    //     "endPt": endPoint,
    //     "busNo": busNo
    // }

    //console.log(user);
    //record user to table
    //sends report info to database accident table
    // $.ajax({
    //     url: 'register.php',
    //     method: 'POST',
    //     data: user,
    //     success: function(data) {
    //         console.log(data);
    //     },
    //     error: function(data){
    //
    //     }
    // });
});

$('.recalculate_button').click(function(event) {
    $('.response').empty();
    startPoint = $('#startPoint').val();
    endPoint = $('#endPoint').val();
    uid = $('#user option:selected').val();

    $.ajax({
        url: 'recalculateRoute.php',
        method: 'GET',
        data: {
            uid: uid,
            startPoint: startPoint,
            endPoint: endPoint
        },
        success: function(data) {
            console.log(data);

            //ALL Routes
            let dataArray = data.split("-");
            dataArray.pop();

            console.log(dataArray);

            //THEN
            for (let route of dataArray){
                let busRoute = route.split(":")[0];
                let busNo = route.split(":")[1];

                let style = "<div class='alternativeRoute'>"
                    + "<div><h3>Bus Route: <span class='busRoute'>" + busRoute + "</span></h3></div>"
                    + "<div><h3>Bus Number: <span class='busNo'>" + busNo + "</span></h3></div>";
                    + "</div>"
                $('.response').append(style);
            }
            //
        },
        error: function(data){

        }
    });
});

$(document).on('click', '.alternativeRoute' , function() {
    let busRoute = $(this).find('.busRoute').text();
    let busNo = $(this).find('.busNo').text();

    let user = {
        "uid": uid,
        "startPt": startPoint,
        "endPt": endPoint,
        "busRoute": busRoute,
        "busNo": busNo
    }

    console.log(user);
    //make a call to update the user on the bus

    $.ajax({
        url: 'register.php',
        method: 'POST',
        data: user,
        success: function(data) {
            //TODO: continue to check for stopNo here and alert any lower stopNo users
            //by checking their starting
        },
        error: function(data){

        }
    });
});
