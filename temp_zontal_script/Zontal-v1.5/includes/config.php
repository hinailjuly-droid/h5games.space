
<?php
// +------------------------------------------------------------------------+
// | @author: MvnThemes
// | @name: Zontal - The Arcade Online HTML5 Game Playing Platform
// | @author_email: mvk62015@gmail.com   
// | @version: 1.0v
// +------------------------------------------------------------------------+
// | Zontal - The Arcade Online HTML5 Game Playing Platform
// | Copyright (c) 2017 Zontal. All rights reserved.
// +------------------------------------------------------------------------+

@header("location: install/index");
die();

// MySQL Hostname
$sql_db_host = "YOUR_HOST";
// MySQL Database User
$sql_db_user = "YOUR_DATABASE_USER";
// MySQL Database Password
$sql_db_pass = "YOUR_DATABASE_PASSWORD";
// MySQL Database Name
$sql_db_name = "YOUR_DATABASE_NAME";

$con = mysqli_connect($sql_db_host, $sql_db_user, $sql_db_pass, $sql_db_name);

// Site URL
$site_url = "http://example.com/"; // e.g (http://example.com)
?>