<?php

// Site Configuration Actions 

require_once '../../includes/function_general.php';


if (isset($_POST) && isset($_POST['site_info'])) {

    $site_name = Secure_DATA($_POST['site_name']);
    $profile_tagline = Secure_DATA($_POST['profile_tagline']);
    $head_code =  mysqli_real_escape_string($con, $_POST['head_code']);
    $footer_content = mysqli_real_escape_string($con, $_POST['footer_content']);
    $site_title = Secure_DATA($_POST['site_title']);
    $site_desc = Secure_DATA($_POST['site_desc']);
    $site_keywords = Secure_DATA($_POST['site_keywords']);

    $sql = "UPDATE zon_config set `site_name`='$site_name', `profile_tagline`='$profile_tagline', `head_code`='$head_code', `footer_content`='$footer_content', `site_title`='$site_title', `site_desc`='$site_desc', `site_keywords`='$site_keywords'";

    if (isset($_FILES['logo']) && isset($_FILES) && $_FILES['logo']['error'] == 0) {
        $logo_name = rand(111111111, 999999999) . $_FILES['logo']['name'];
        $logo_tmp_name = $_FILES['logo']['tmp_name'];

        if (move_uploaded_file($logo_tmp_name, "../../static/img/logo/" . $logo_name)) {
            $logo_name = $logo_name;
            $sql = "UPDATE zon_config set `site_name`='$site_name', `profile_tagline`='$profile_tagline', `site_logo_light`='$logo_name', `head_code`='$head_code', `footer_content`='$footer_content', `site_title`='$site_title', `site_desc`='$site_desc', `site_keywords`='$site_keywords'";
        }
    }

    if (isset($_FILES['dark_logo']) && isset($_FILES) && $_FILES['dark_logo']['error'] == 0) {
        $dark_logo_name = rand(111111111, 999999999) . $_FILES['dark_logo']['name'];
        $dark_logo_tmp_name = $_FILES['dark_logo']['tmp_name'];

        if (move_uploaded_file($dark_logo_tmp_name, "../../static/img/logo/" . $dark_logo_name)) {
            $dark_logo_name = $dark_logo_name;
            $sql = "UPDATE zon_config set `site_name`='$site_name', `profile_tagline`='$profile_tagline', `site_logo_dark`='$dark_logo_name', `head_code`='$head_code', `footer_content`='$footer_content', `site_title`='$site_title', `site_desc`='$site_desc', `site_keywords`='$site_keywords'";
        }
    }

    if (isset($_FILES['favicon']) && isset($_FILES) && $_FILES['favicon']['error'] == 0) {
        $favicon_logo_name = rand(111111111, 999999999) . $_FILES['favicon']['name'];
        $favicon_logo_tmp_name = $_FILES['favicon']['tmp_name'];

        if (move_uploaded_file($favicon_logo_tmp_name, "../../static/img/logo/" . $favicon_logo_name)) {
            $favicon_logo_name = $favicon_logo_name;
            $sql = "UPDATE zon_config set `site_name`='$site_name', `profile_tagline`='$profile_tagline', `site_favicon`='$favicon_logo_name', `head_code`='$head_code', `footer_content`='$footer_content', `site_title`='$site_title', `site_desc`='$site_desc', `site_keywords`='$site_keywords'";
        }
    }

    if (mysqli_query($con, $sql)) {
        echo "<h1>Query Updated Successfully</h1>";
        @header("location: ../settings");
    }
}
