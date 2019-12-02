<?php 

require_once 'functions.php';
require_once 'db_connection.php';
startup();

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'GET') {
    $query = "SELECT * FROM `cart`";
    $result = mysqli_query($conn, $query);
    if (!$result){
      print ("error" . mysqli_error($conn));
        exit();
    }
    $output = [
    ];
    while($row =  mysqli_fetch_assoc ( $result )){   
      array_push($output,$row);
    }
    $json_output = json_encode($output);
    print $json_output;


?>