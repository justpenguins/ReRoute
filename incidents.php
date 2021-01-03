<?php
include('db_connection.php');
include('sqlHelper.php');

$result = $conn->query("call read_incidents()");
clearConnection($conn);

while ($row = $result->fetch_assoc()) {
//while ($row = mysqli_fetch_array($result)) {
    echo $row['RouteNo'] . "-";
}

// $mysqli->close();
?>
