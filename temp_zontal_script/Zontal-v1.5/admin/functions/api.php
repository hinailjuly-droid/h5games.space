<?php




require_once 'config.php';

echo "<pre>";

// Game Adding From Api's 

if (isset($_POST) && isset($_POST['add_games_from_api']) && isset($_POST['platform'])) {

    $platform = $_POST['platform'];

    if ($platform == "gamemonetize") {

        $category = $_POST['category'];
        $type = $_POST['type'];
        $popularity = $_POST['popularity'];
        $company = $_POST['company'];
        $amount = $_POST['amount'];

        // Initiate curl session in a variable (resource)
        $curl_handle = curl_init();

        $url = "https://gamemonetize.com/rssfeed.php?format=json&category=$category&type=$type&popularity=$popularity$company$amount";

        // Set the curl URL option
        curl_setopt($curl_handle, CURLOPT_URL, $url);

        // This option will return data as a string instead of direct output
        curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, true);

        // Execute curl & store data in a variable
        $curl_data = curl_exec($curl_handle);

        curl_close($curl_handle);

        // Decode JSON into PHP array
        $response_data = json_decode($curl_data);

        // All user data exists in 'data' object
        $game_data = $response_data;


        foreach ($game_data as $game) {

            $game_name = mysqli_real_escape_string($con, $game->title);
            $game_desc = mysqli_real_escape_string($con, $game->description);
            $game_image_url = mysqli_real_escape_string($con, $game->thumb);
            $game_frame_url = mysqli_real_escape_string($con, $game->url);
            $game_category = mysqli_real_escape_string($con, $game->category);
            $game_status = 0;
            $cate_slug = strtolower($game_category);

            $sql = "INSERT INTO `zon_games`(`game_name`, `game_description`, `game_image_url`, `game_url`, `game_published`, `game_category`) VALUES ('$game_name','$game_desc','$game_image_url','$game_frame_url', $game_status, '$game_category')";
            $cate_sql = "INSERT INTO `zon_category`(`name`, `slug`) VALUES ('$game_category', '$cate_slug')";

            $check_game_name = "select * from zon_games where game_name='$game_name'";

            if (!empty($game_image_url)) {
                if (mysqli_num_rows(mysqli_query($con, $check_game_name)) !== 0) {
                } else {
                    if (mysqli_query($con, $sql)) {

                    }
                }

                $check_category_name = "select * from zon_category where name='$game_category'";
                if (mysqli_num_rows(mysqli_query($con, $check_category_name)) !== 0) {
                } else {
                    if (mysqli_query($con, $cate_sql)) {
                        $query_run = true;
                    }
                }
            }
        }
        @header("location: ../index");
    }
}







if (isset($_POST) && isset($_POST['add_games_from_api']) && isset($_POST['platform'])) {

    $platform = $_POST['platform'];

    if ($platform == "gamedistribution") {

        $category = $_POST['categories'];
        $collection = $_POST['collection'];
        $tags = $_POST['tags'];
        $type = $_POST['type'];
        $subType = $_POST['subType'];
        $mobile = $_POST['mobile'];
        $rewarded = $_POST['rewarded'];
        $page = $_POST['page'];
        $amount = $_POST['amount'];

        // Initiate curl session in a variable (resource)
        $curl_handle = curl_init();

        $url = "https://catalog.api.gamedistribution.com/api/v2.0/rss/All/?collection=$collection&categories=$category&tags=$tags&subType=$subType&type=$type&mobile=$mobile&rewarded=$rewarded&amount=$amount&page=$page&format=json";
        // $url = "https://gamemonetize.com/rssfeed.php?format=json&category=$category&type=$type&popularity=$popularity$company$amount";

        // Set the curl URL option
        curl_setopt($curl_handle, CURLOPT_URL, $url);

        // This option will return data as a string instead of direct output
        curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, true);

        // Execute curl & store data in a variable
        $curl_data = curl_exec($curl_handle);

        curl_close($curl_handle);

        // Decode JSON into PHP array
        $response_data = json_decode($curl_data);

        // All user data exists in 'data' object
        $game_data = $response_data;


        foreach ($game_data as $game) {

            // print_r($game);

            $game_name = mysqli_real_escape_string($con, $game->Title);
            $game_desc = mysqli_real_escape_string($con, $game->Description);
            $game_image_url = mysqli_real_escape_string($con, $game->Asset[0]);
            $game_frame_url = mysqli_real_escape_string($con, $game->Url);
            $game_category = mysqli_real_escape_string($con, $game->Category[0]);
            $game_status = 0;
            $cate_slug = strtolower($game_category);

            $sql = "INSERT INTO `zon_games`(`game_name`, `game_description`, `game_image_url`, `game_url`, `game_published`, `game_category`) VALUES ('$game_name','$game_desc','$game_image_url','$game_frame_url', $game_status, '$game_category')";
            $cate_sql = "INSERT INTO `zon_category`(`name`, `slug`) VALUES ('$game_category', '$cate_slug')";

            $check_game_name = "select * from zon_games where game_name='$game_name'";

            if (!empty($game_image_url)) {
                if (mysqli_num_rows(mysqli_query($con, $check_game_name)) !== 0) {
                } else {
                    if (mysqli_query($con, $sql)) {
                    }
                }

                $check_category_name = "select * from zon_category where name='$game_category'";
                if (mysqli_num_rows(mysqli_query($con, $check_category_name)) !== 0) {
                } else {
                    if (mysqli_query($con, $cate_sql)) {
                        $query_run = true;
                    }
                }
            }
        }
        @header("location: ../index");
    }
}


if (isset($_POST) && isset($_POST['add_games_from_api']) && isset($_POST['platform'])) {

    $platform = $_POST['platform'];

    if ($platform == "gamepix") {

        $category = $_POST['category'];
        $order = $_POST['order'];
        $amount = $_POST['items'];
        $page = $_POST['page'];

        // Initiate curl session in a variable (resource)
        $curl_handle = curl_init();

        $url = "https://feeds.gamepix.com/v1/json?page=$page&pagination=$amount&category=$category";

        if (!empty($order)) {
            $url = "https://feeds.gamepix.com/v1/json?page=$page&pagination=$amount&category=$category&order=$order";
        }


        // Set the curl URL option
        curl_setopt($curl_handle, CURLOPT_URL, $url);

        // This option will return data as a string instead of direct output
        curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, true);

        // Execute curl & store data in a variable
        $curl_data = curl_exec($curl_handle);

        curl_close($curl_handle);

        // Decode JSON into PHP array
        $response_data = json_decode($curl_data);

        // All user data exists in 'data' object
        $game_data = $response_data->items;

        foreach ($game_data as $game) {

            // print_r($game);

            $game_name = mysqli_real_escape_string($con, $game->title);
            $game_desc = mysqli_real_escape_string($con, $game->description);
            $game_image_url = mysqli_real_escape_string($con, $game->image);
            $game_frame_url = mysqli_real_escape_string($con, $game->url);
            $game_category = mysqli_real_escape_string($con, $game->category);
            $game_status = 0;
            $cate_slug = strtolower($game_category);

            $sql = "INSERT INTO `zon_games`(`game_name`, `game_description`, `game_image_url`, `game_url`, `game_published`, `game_category`) VALUES ('$game_name','$game_desc','$game_image_url','$game_frame_url', $game_status, '$game_category')";
            $cate_sql = "INSERT INTO `zon_category`(`name`, `slug`) VALUES ('$game_category', '$cate_slug')";

            $check_game_name = "select * from zon_games where game_name='$game_name'";

            if (!empty($game_image_url)) {
                if (mysqli_num_rows(mysqli_query($con, $check_game_name)) !== 0) {
                } else {
                    if (mysqli_query($con, $sql)) {
                    }
                }

                $check_category_name = "select * from zon_category where name='$game_category'";
                if (mysqli_num_rows(mysqli_query($con, $check_category_name)) !== 0) {
                } else {
                    if (mysqli_query($con, $cate_sql)) {
                        $query_run = true;
                    }
                }
            }
        }
        @header("location: ../index");
    }
}


echo "<pre>";
print_r($_POST);
