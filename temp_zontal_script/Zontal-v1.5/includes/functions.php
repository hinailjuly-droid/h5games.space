<?php
session_start();

require_once 'config.php';
require_once 'function_general.php';

// registration Action
if (isset($_POST['signup']) && isset($_POST)) {


    $name = mysqli_real_escape_string($con, $_POST['name']);
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $username = mysqli_real_escape_string($con, $_POST['username']);
    $password = mysqli_real_escape_string($con, $_POST['password']);

    $_SESSION['email'] = $email;
    $_SESSION['name'] = $name;
    $_SESSION['username'] = $username;

    $emailValidate = "select * from zon_users where email=$email";


    if (ValidateFields('email', $email)) {
        @header("location: ../register?email_msg=Email Already Exist");
    } else if (ValidateFields('username', $username)) {
        @header("location: ../register?username_msg=Username Already Exist");
    } else {
        $user_pic = "user_pic.png";
        $query = "INSERT INTO zon_users (`name`, `email`, `username`, `password`, `user_pic`) VALUES ('$name', '$email', '$username', '$password', '$user_pic') ";
        if (mysqli_query($con, $query)) {
            @header("location: ../login");
            unset($_SESSION['email']);
            unset($_SESSION['name']);
            unset($_SESSION['username']);
        }
    }
}

// login action 
if (isset($_POST['login'])) {

    $email_username = mysqli_real_escape_string($con, $_POST['username_email']);
    $password = mysqli_real_escape_string($con, $_POST['password']);
    $user_id = mysqli_real_escape_string($con, $_POST['id']);

    $query = "select * from zon_users where email='$email_username' || username='$email_username' && password='$password'";
    $row = mysqli_fetch_assoc(mysqli_query($con, $query));
    if (mysqli_num_rows(mysqli_query($con, $query)) !== 0) {

        if ($row['status'] == 0) {     
            $_SESSION['Loggedin'] = true;
            $_SESSION['Loggedin_user'] = $email_username;

            if ($row['is_admin'] == 1) {
                $_SESSION['is_admin_Loggedin'] = true;
            }
    
            $user_data = mysqli_fetch_assoc(mysqli_query($con, "select * from zon_users where username='$email_username' || email='$email_username'"));
    
            $_SESSION['Loggedin_user_id'] = $user_data['id'];
    
            @header("Location: ../");
        } else {
            @header("Location: ../login?error=Your account is closed");
        }
    } else {
        @header("Location: ../login?error=Wrong username or email and password");
    }
}

// comment action 
if (isset($_POST) && isset($_POST['comment'])) {
    $subject = Secure_DATA($_POST['subject']);
    $date = Secure_DATA($_POST['date']);
    $game_id = Secure_DATA($_POST['game_id']);
    $user_id = Secure_DATA($_POST['user_id']);
    $url = Secure_DATA($_POST['url']);

    $query = "insert into zon_comments (user_id, game_id, subject, date) values ($user_id, $game_id, '$subject', '$date')";

    if (!empty($subject)) {
        if (mysqli_query($con, $query)) {
            @header("location: $url");
        }
    } else {
        @header("location: $url");
    }
}

// comment delete action 
if (isset($_GET['page']) && isset($_GET['id']) && $_GET['page'] == 'comments') {
    $id = $_GET['id'];
    $redirect = $_GET['redirect'];

    $query = "delete from zon_comments where id=$id";

    if (mysqli_query($con, $query)) {
        @header("location: $redirect");
    }
}


// change profile setting action 
if (isset($_POST['change_settings'])) {

    $url = Secure_DATA($_GET['url']);
    $name = Secure_DATA($_POST['name']);
    $id = Secure_DATA($_POST['id']);
    $username = Secure_DATA($_POST['username']);
    $email = Secure_DATA($_POST['email']);
    $password = Secure_DATA($_POST['new_password']);

    $user_pic = '';

    $query = "UPDATE zon_users set `name`='$name', `email`='$email', `username`='$username' where id=$id";

    if ($_FILES['avatar_img']) {
        $user_pic = rand(111111111, 999999999) . $_FILES['avatar_img']['name'];
        if (move_uploaded_file($_FILES['avatar_img']['tmp_name'], "../static/img/" . $user_pic)) {

        }
    }

    if (!empty($password)) {
        $query = "UPDATE zon_users set `name`='$name', `email`='$email', `username`='$username', `password`='$password' where id=$id";
    } else {
        if ($_FILES['avatar_img']['error'] == 0) {
            $query = "UPDATE zon_users set `name`='$name', `email`='$email', `username`='$username', `user_pic`='$user_pic' where id=$id";
        }
    }

    if ($_FILES['avatar_img']['error'] == 0 && !empty($password)) {
        $query = "UPDATE zon_users set `name`='$name', `email`='$email', `username`='$username', `password`='$password', `user_pic`='$user_pic' where id=$id";
    } 

    if (mysqli_query($con, $query)) {
        @header("location: $url");
    }
}
