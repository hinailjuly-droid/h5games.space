<?php


if (isset($_POST) && !empty($_POST) && isset($_POST['install'])) {

    $host_name              =    htmlspecialchars($_POST['host_name']);
    $db_username            =    htmlspecialchars($_POST['db_username']);
    $db_password            =    htmlspecialchars($_POST['db_password']);
    $db_name                =    htmlspecialchars($_POST['db_name']);
    $site_URL               =    htmlspecialchars(filter_var($_POST['site_url'], FILTER_VALIDATE_URL));
    $site_name              =    htmlspecialchars($_POST['site_name']);
    $site_title             =    htmlspecialchars($_POST['site_title']);
    $admin_username         =    htmlspecialchars($_POST['admin_username']);
    $admin_password         =    htmlspecialchars($_POST['admin_password']);

    $connect = true;

    $con = mysqli_connect($host_name, $db_username, $db_password, $db_name);

    if (mysqli_connect_errno()) {
        echo "Problem To Connecting Database";
        $connect = false;
    }

    if ($connect) {
        $filename = '../zontal.sql';
        // Temporary variable, used to store current query
        $templine = '';
        // Read in entire file
        $lines = file($filename);
        // Loop through each line
        foreach ($lines as $line) {
            // Skip it if it's a comment
            if (substr($line, 0, 2) == '--' || $line == '')
                continue;
            // Add this line to the current segment
            $templine .= $line;
            $query = false;
            // If it has a semicolon at the end, it's the end of the query
            if (substr(trim($line), -1, 1) == ';') {
                // Perform the query
                $query = mysqli_query($con, $templine);
                // Reset temp variable to empty
                $templine = '';
            }
        }

        $user_query = "INSERT INTO zon_users (`username`, `password`, `user_pic`, `is_admin`) values ('$admin_username', '$admin_password', 'user_pic.png', '1')";
        $config_query = "INSERT INTO zon_config (`site_name`, `site_title`) values ('$site_name', '$site_title')";

        if (mysqli_query($con, $user_query) && mysqli_query($con, $config_query)) {
$robots_txt_content = "
User-agent: Googlebot
Disallow: 
User-agent: googlebot-image
Disallow: 
User-agent: googlebot-mobile
Disallow: 
User-agent: MSNBot
Disallow: 
User-agent: Slurp
Disallow: 
User-agent: Teoma
Disallow: 
User-agent: Gigabot
Disallow: 
User-agent: Robozilla
Disallow: 
User-agent: Nutch
Disallow: 
User-agent: ia_archiver
Disallow: 
User-agent: baiduspider
Disallow: 
User-agent: naverbot
Disallow: 
User-agent: yeti
Disallow: 
User-agent: yahoo-mmcrawler
Disallow: 
User-agent: psbot
Disallow: 
User-agent: yahoo-blogs/v3.9
Disallow: 
User-agent: *
Disallow: 
Disallow: /admin
Disallow: /install
Disallow: /includes
Sitemap: {$site_URL}sitemap.xml";
$config_file_content = '
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

// MySQL Hostname
$sql_db_host = "' . $host_name . '";
// MySQL Database User
$sql_db_user = "' . $db_username . '";
// MySQL Database Password
$sql_db_pass = "' . $db_password . '";
// MySQL Database Name
$sql_db_name = "' . $db_name . '";

$con = mysqli_connect($sql_db_host, $sql_db_user, $sql_db_pass, $sql_db_name);

// Site URL
$site_url = "' . $site_URL . '"; // e.g (http://example.com)
?>';
$htaccess_content = "
ErrorDocument 404 {$site_URL}404
RewriteEngine On
RewriteRule ^{REQUEST_FILENAME} !-f
RewriteRule ^([^\.]+)$ $1.php [NC,L]
RewriteRule ^([^\.]+)$ $1.html [NC,L]
RewriteRule ^single/([0-9]+)/([a-z]+) single.php?id=$1&name=$2 [NC,L]
RewriteRule ^page/([0-9]+)/([a-z]+) page.php?id=$1&slug=$2 [NC,L]
RewriteRule ^archive/([a-z]+) archive.php?type=$1 [NC,L]
RewriteRule ^game/([a-z]+[A-Z]) category.php?name=$1 [NC,L]
RewriteRule ^search/([a-z]+[A-Z]) category.php?query=$1 [NC,L]
RewriteRule ^user/([a-z]+[A-Z]) user.php?page=$1 [NC,L]
RewriteRule ^sitemap.xml sitemap.php
";

            $file = fopen("../includes/config.php", "w");
            $robots_txt = fopen("../robots.txt", "w");
            $htaccess = fopen("../.htaccess", "w");
            fwrite($file, $config_file_content);
            fwrite($robots_txt, $robots_txt_content);
            fwrite($htaccess, $htaccess_content);
            fclose($file);

            $query = "UPDATE zon_config SET `site_name`='$site_name', `site_title`='$site_title' ";

            if (mysqli_query($con, $query)) {
                echo "<script>localStorage.clear()</script>";
                @header("location: index?page=finish");
            }

        }
    }
}
