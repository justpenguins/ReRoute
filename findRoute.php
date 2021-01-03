<?php
include('db_connection.php');
include('sqlHelper.php');

$uid = $_GET['uid'];
$startPoint = $_GET['startPoint'];
$endPoint = $_GET['endPoint'];

$result = $conn->query("call findRoute(\"$startPoint\", \"$endPoint\", \"$uid\")");
clearConnection($conn);


while ($row = $result->fetch_assoc()) {
//while ($row = mysqli_fetch_array($result)) {
    echo $row['Route'] . ":" . $row['BusNo'] . "-";
}

// echo $array;

// $mysqli->close();
?>
