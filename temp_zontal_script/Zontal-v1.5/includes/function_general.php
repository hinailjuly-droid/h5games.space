<?php

require_once 'config.php';

// Getting All User Data this Function echo Data
function User_Data($column)
{
    global $con;
    $current_user = $_SESSION['Loggedin_user_id'];
    $sql = "select * from zon_users where id=$current_user";
    $run = mysqli_query($con, $sql);
    $row = mysqli_fetch_assoc($run);

    echo $row[$column];
}
// Getting All User Data this Function return Data
function User_Data_Two($column)
{
    global $con;
    if (isset($_SESSION['Loggedin_user'])) {
        $current_user = $_SESSION['Loggedin_user_id'];
        $sql = "select * from zon_users where id=$current_user";
        $row = mysqli_fetch_assoc(mysqli_query($con, $sql));

        return $row[$column];
    }
}

// Getting user Data by column name and condition
function User_Data_By_Cond($column, $cond)
{
    global $con;
    $sql = "select * from zon_users where $cond";
    $row = mysqli_fetch_assoc(mysqli_query($con, $sql));

    return $row[$column];
}



// Getting All Game Data this Function print Data
function Game_Data($id, $data)
{

    global $con;

    $query = "SELECT * from zon_games where id=$id";

    $row = mysqli_fetch_assoc(mysqli_query($con, $query));

    echo $row[$data];
}

// Getting All Game Data this Function return data
function Game_Data_Two($id, $data)
{
    global $con;

    $query = "SELECT * from zon_games where id=$id";

    $row = mysqli_fetch_assoc(mysqli_query($con, $query));

    return $row[$data];
}



// Secure Data 
function Secure_DATA($d)
{
    global $con;
    return htmlspecialchars(mysqli_real_escape_string($con, $d));
}


// Checking Data From Databse exist or not
function Exist_Data($table, $condition)
{

    global $con;

    $query = "select * from $table where $condition";

    return mysqli_num_rows(mysqli_query($con, $query));
}

// Getting Game Likes
function Game_Likes($data, $condition)
{
    global $con;

    $query = "select * from zon_likes where $condition";

    $run = mysqli_query($con, $query);

    $row = mysqli_fetch_assoc($run);

    return $row[$data];
}

// Getting All Configuraton Data of Site
function Zon_Config($data)
{
    global $con;

    $query = "select * from zon_config";

    $run = mysqli_query($con, $query);

    $row = mysqli_fetch_assoc($run);

    return $row[$data];
}

// Play Newest
function AutoPlay()
{
    global $con;
    global $site_url;

    $query = "select * from zon_games order by id desc limit 1";

    $run = mysqli_query($con, $query);

    $row = mysqli_fetch_assoc($run);

    echo $site_url . "single/" . $row['id'] . "/" . $row['game_name'];
}

// Getting Category Data
function Category_Data($data, $condition)
{
    global $con;

    $query = "select * from zon_category where $condition";

    $run = mysqli_query($con, $query);

    $row = mysqli_fetch_assoc($run);

    if (!empty($row[$data])) {
        return $row[$data];
    } else {
        return false;
    }

}

// Getting Likes Data
function Game_likes_data($data)
{
    global $con;

        $current_user =  User_Data_Two('id');
    
        $query = "select * from zon_likes where user_id=$current_user";
    
        $run = mysqli_query($con, $query);
    
        $row = mysqli_fetch_assoc($run);

        return $row[$data];
}

// Getting Total Numbers of Rows of Games
function Total_Games()
{

    global $con;

    $query = "select * from zon_games";

    return mysqli_num_rows(mysqli_query($con, $query));
}

// Getting Total Numbers of Rows By Table Name
function Total_Items ($table)
{

    global $con;

    $query = "select * from $table";

    return mysqli_num_rows(mysqli_query($con, $query));
}

// check user is in database or not
function ValidateFields($field, $var)
{
    global $con;
    $Validate = "select * from zon_users where $field='$var'";

    return mysqli_num_rows(mysqli_query($con, $Validate));
}

// Getting Page Data From Database
function page_data ($id, $data) {
    global $con;

    $query = "select * from zon_pages where id=$id";
    
    $run = mysqli_query($con, $query);

    $row = mysqli_fetch_assoc($run);

    return $row[$data];
}