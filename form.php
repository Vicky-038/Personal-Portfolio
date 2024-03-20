<?php
// Start session
session_start();

// Database connection parameters
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'form';

// Establish database connection
$conn = mysqli_connect($host, $username, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get username and password from the form
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Secure the input values to prevent SQL injection
$name = mysqli_real_escape_string($conn, $name);
$email = mysqli_real_escape_string($conn, $email);
$message = mysqli_real_escape_string($conn, $message);


// Query to insert new user data into the database
$sql = "INSERT INTO user (name, email, message) VALUES ('$name', '$email', '$message')";
if (mysqli_query($conn, $sql)) {
    // Data inserted successfully
    echo "Data saved successfully";
} else {
    // Error occurred
    echo "Error: " . mysqli_error($conn);
}

// Close database connection
mysqli_close($conn);
?>
