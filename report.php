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
        <script src="report.js" defer></script>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <?php include 'header.php'?>


        <h1 id = "mainHeader">Report an incident</h1>


        <button class="report_button">Report</button>
        <!--must find a place for the information inputted to go to (ie a .php file)-->
        <div class="results">
            <h3>Recommended Routes:</h3>
            <form class="response"></form>
        </div>


        <?php include 'footer.php'?>

    </body>
</html>
