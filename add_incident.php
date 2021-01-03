<?php
include('db_connection.php');
include('sqlHelper.php');

$stopNo = $_POST['stopNo'];
$busRoute = $_POST['busRoute'];
//$incident = $_POST['incident'];

$result = $conn->query("call add_incident(\"$busRoute\", \"$stopNo\")");
clearConnection($conn);

// $mysqli->close();
?>
