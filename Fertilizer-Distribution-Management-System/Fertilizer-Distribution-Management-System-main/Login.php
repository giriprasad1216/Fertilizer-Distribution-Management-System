<?php require_once('includes/connection.php'); ?>

<?php
    if (isset($_POST['btnLogin'])) {
        
        $userID = $_POST['txtUName'];
        $password = $_POST['txtPsw'];

        $hashed_password = sha1($password);

        $query = "SELECT Password FROM AGRICULTURAL_OFFICER WHERE OfficerID = '{$userID}' LIMIT 1";
        $result = mysqli_query($conn, $query);

        if (mysqli_num_rows($result) && mysqli_fetch_assoc($result)['Password'] == $password) {
            $msg = "Login Successfully";

            session_start();
            $_SESSION['userID'] = $userID;

            header( "Location:http://localhost/Fertilizer_Subsidy/Farmers.php" ); die;
        } else {
            $msg = "Invalid Username or Password";
        }
    }   

?>

