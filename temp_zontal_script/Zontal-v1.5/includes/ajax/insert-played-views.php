<?php

require_once("../config.php");
require_once("../function_general.php");

    
    if (isset($_POST) && isset($_POST['view']) && isset($_POST['id'])) {
        $view = Secure_DATA($_POST['view']);
        // $view ++;
        $id = Secure_DATA($_POST['id']);

        $current = Game_Data_Two($id, 'game_played') + 1;

        // $total = +$view;

        if (mysqli_query($con, "update zon_games set game_played=$current where id=$id")) {
           echo "Success";
        }

    }
