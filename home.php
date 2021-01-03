<?php
    // if ($_GET['alert']){
    //     echo "Unexpected congestion on this route.<br>";
    // }

    /*<?php echo $_GET['alert']; ?>*/
    //exit();
?>
<!DOCTYPE html>
<html>
    <head>
        <title>deCodeCongestion Main</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="UserRequest.js" defer></script>
        <script src="add_incident.js" defer></script>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <?php include 'header.php'?>;
        <img src="">

        <select id="user">
            <option value="1">user1</option>
            <option value="2">user2</option>
            <option value="3">user3</option>
        </select>

        <div class="main">
            <h1 id="mainHeader">Transfer</h1>

            <form >
                Starting point:<br><br>
                    <input type="text" name="Start" id="startPoint"><br><br>
                Destination:<br><br>
                    <input type="text" name="End" id="endPoint"><br><br>

            </form>
            <button class="submit_button">Find My Route</button>
            <button class="recalculate_button hidden">Recalculate Route</button>
            <button class="report_button">Report a Problem</button>

            <h3>Recommended Routes:</h3>
            <div class="results">
                <div class="response"></div>
            </div>
        </div>
        <!--must find a place for the information inputted to go to (ie a .php file)-->
        <?php include 'footer.php'?>
    </body>
</html>
