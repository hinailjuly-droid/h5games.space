<?php

require_once("../config.php");
require_once("../function_general.php");


// echo "<pre>";
// print_r($_POST);

if (isset($_POST) && isset($_POST['game_id']) && isset($_POST['user_id'])) {

    $game_id = Secure_DATA($_POST['game_id']);
    $user_id = Secure_DATA($_POST['user_id']);

    $unlike = Secure_DATA($_POST['unlike']);

    if ($unlike == 'false') {
        if (Exist_Data("zon_likes", "user_id=$user_id && game_id=$game_id") == 0) {
            // if (mysqli_query($con, "delete from zon_likes where user_id=$user_id && game_id=$game_id")) {
            //     echo "Deleted";
            // }
            if (mysqli_query($con, "insert into zon_likes (user_id, game_id) values ($user_id, $game_id)")) {
                echo "Inserted";
            }
            if (mysqli_query($con, "delete from zon_unlikes where user_id=$user_id && game_id=$game_id")) {
                // echo "Deleted";
            }

        } else {
            if (mysqli_query($con, "delete from zon_likes where user_id=$user_id && game_id=$game_id")) {
                echo "Deleted";
            }
        }
    }

    // else {
    //     if (mysqli_query($con, "insert into zon_likes (user_id, game_id) values ($user_id, $game_id)")) {
    //         echo "Inserted";
    //     }
    // }

    // if ($unlike == 'true') {
    //     if (Exist_Data("zon_likes", "user_id=$user_id && game_id=$game_id") == 1) {
    //         if (Exist_Data("zon_likes", "user_id=$user_id && game_id=$game_id") == 1) {
    //             if (mysqli_query($con, "insert into zon_unlikes (user_id, game_id) values ($user_id, $game_id)")) {
    //                 echo "Success";
    //                 if (mysqli_query($con, "delete from zon_likes where user_id=$user_id && game_id=$game_id")) {
    //                     // echo "Deleted";
    //                 }
    //             }
    //         } else {
    //             if (Exist_Data("zon_unlikes", "user_id=$user_id && game_id=$game_id") == 0) {
    //                 if (mysqli_query($con, "insert into zon_unlikes (user_id, game_id) values ($user_id, $game_id)")) {
    //                     echo "Inserted";
    //                 }
    //             } else {
    //                 if (mysqli_query($con, "delete from zon_unlikes where user_id=$user_id && game_id=$game_id")) {
    //                     echo "Deleted";
    //                 }
    //             }
    //         }
    //     }
    // }

    if ($unlike == 'true') {
        if (Exist_Data("zon_likes", "user_id=$user_id && game_id=$game_id") == 1) {
            if (Exist_Data("zon_unlikes", "user_id=$user_id && game_id=$game_id") == 0) {
                // if (mysqli_query($con, "delete from zon_likes where user_id=$user_id && game_id=$game_id")) {
                //     echo "Deleted";
                // }
                if (mysqli_query($con, "insert into zon_unlikes (user_id, game_id) values ($user_id, $game_id)")) {
                    echo "Success";
                }

                if (mysqli_query($con, "delete from zon_likes where user_id=$user_id && game_id=$game_id")) {}


            } else {
                if (mysqli_query($con, "delete from zon_unlikes where user_id=$user_id && game_id=$game_id")) {
                    echo "Deleted";
                }
            }
        }
    }

    //     die();
    // }




}
