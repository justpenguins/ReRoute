<?php
include('db_connection.php');
include('sqlHelper.php');

$start = $_GET['startPoint'];
$end = $_GET['endPoint'];
$uid = $_GET['uid'];

$result = $conn->query("call recalculateRoute(\"$start\", \"$end\", \"$uid\")");
clearConnection($conn);

// $mysqli->close();
while ($row = $result->fetch_assoc()) {
//while ($row = mysqli_fetch_array($result)) {
    echo $row['Route'] . ":" . $row['BusNo'] . "-";
}
?>
