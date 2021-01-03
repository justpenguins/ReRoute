// setInterval(userOnBus, 1000); //check the changes every second

readIncident();

function readIncident(){
    $.ajax({
        url: 'incidents.php',
        method: 'GET',
        success: function(data) {
            console.log(data);

            //ALL Routes
            let dataArray = data.split("-");
            dataArray.pop();

            console.log(dataArray);

            //THEN
            for (let route of dataArray){
                let routeNo = route.split(":")[0];
                let numberOfIncidents = 19;

                let style = "<div class='routes'>"
                    // + "<div><h3>Bus Route: </h3><span class='busRoute'>" + busRoute + "</span></div>"
                    // + "<div><h3>Bus Number: </h3><span class='busNo'>" + busNo + "</span></div>";
                    + "Bus Route: " + routeNo + " has <span class='incidents'>" + numberOfIncidents + " </span>incidents"
                    + "</div>"
                $('.incidentsReport').append(style);
            }
        },
        error: function(data){

        }
    });
}
