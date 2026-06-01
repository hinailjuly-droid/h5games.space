<?php include("includes/header.php") ?>
<?php

$game_id = Game_Data_Two(Secure_DATA($_GET['id']), 'id');
$user_id = User_Data_Two('id');
?>

<body class="bg-dark dark:bg-zinc-900">
    <?php include("includes/main-h.php") ?>
    <?php
    $run = mysqli_query($con, "select * from zon_ads limit 1,1");
    while ($row = mysqli_fetch_assoc($run)) {
    ?>
        <?php if ($row['status'] == 0) { ?>
            <div class="advertisement flex mt-6 relative overflow-hidden justify-center ">
                <div class="banner">
                    <?= $row['code'] ?>
                </div>
            </div>
    <?php }
    } ?>
    <div class="body container-zon mt-2 px-0">
        <div class="mx-4">
            <div class="flex gap-3">
                <div class="games md-hidden">
                    <div class="grid w-80">
                        <?php
                        $run = mysqli_query($con, "select * from zon_games order by id desc limit 18");
                        while ($row = mysqli_fetch_assoc($run)) {
                        ?>
                            <a href="<?php echo $site_url ?>single/<?= $row['id'] ?>/<?php
                                                                                        $text = $row['game_name'];
                                                                                        $lower = strtolower($text);
                                                                                        $revspace = str_replace(" ", "-", $lower);
                                                                                        echo $revspace;
                                                                                        ?>" class="box block relative overflow-hidden rounded-xl overflow-hidden upward {scale-up} cursor-pointer transition duration-300 overlay">
                                <img src="<?= $row['game_image_url'] ?>" class="w-full h-full object-cover" alt="<?= $row['game_name'] ?>">
                                <h2 style="z-index: 9;" class="text-white absolute  bottom-0 left-0 px-2 py-2"><?= $row['game_name'] ?></h2>
                            </a>
                        <?php } ?>
                    </div>
                </div>
                <div class="screen w-[70%]">
                    <div class="gameplay rounded-lg overflow-hidden bg-slate-800  h-[635px]">
                        <div style="z-index: 9999;" class="close-frame hidden h-8 w-8 cursor-pointer mt-3 mr-3 rounded-full flex items-center justify-center fixed top-0 right-0 bg-gray-900 px-3 py-1 text-white text-2xl" style=" z-index: 999">
                            <span class="mb-2">&times;</span>
                        </div>
                        <iframe id="my-iframe" src="<?php Game_Data(Secure_DATA($_GET['id']), 'game_url') ?>" frameborder="0" class="w-[100%] h-[100%]"></iframe>
                    </div>

                    <section class="gameplay-footer mt-3 mb-12">
                        <div class="flex items-center justify-between">
                            <div class="left">
                                <a class="text-gray-600 text-sm dark:text-gray-500" href="<?php $name = Game_Data_Two(Secure_DATA($_GET['id']), 'game_category');
                                                                                            echo $site_url ?>game/<?php echo strtolower(Game_Data_Two(Secure_DATA($_GET['id']), 'game_category')) ?>"><?php Game_Data(Secure_DATA($_GET['id']), 'game_category') ?></a>
                                <h3 class="font-bold text-gray-700 text-xl dark:text-gray-300"><?php Game_Data(Secure_DATA($_GET['id']), 'game_name') ?></h3>
                                <div class="star flex gap-2 text-sm mt-2">
                                    <?php //if (!empty($user_id)) { 
                                    ?>
                                    <?php if (Exist_Data("zon_comments", "game_id=$game_id") == 0) { ?>
                                        <!-- <span class="bi-star-fill text-orange-600"></span> -->
                                    <?php } ?>
                                    <?php if (Exist_Data("zon_comments", "game_id=$game_id") == 1) { ?>
                                        <span class="bi-star-fill text-orange-600"></span>
                                    <?php } ?>
                                    <?php if (Exist_Data("zon_comments", "game_id=$game_id") == 2) { ?>
                                        <span class="bi-star-fill text-orange-600"></span>
                                        <span class="bi-star-fill text-orange-600"></span>
                                    <?php } ?>
                                    <?php if (Exist_Data("zon_comments", "game_id=$game_id") == 3) { ?>
                                        <span class="bi-star-fill text-orange-600"></span>
                                        <span class="bi-star-fill text-orange-600"></span>
                                        <span class="bi-star-fill text-orange-600"></span>
                                    <?php } ?>

                                    <?php if (Exist_Data("zon_comments", "game_id=$game_id") == 4) { ?>
                                        <span class="bi-star-fill text-orange-600"></span>
                                        <span class="bi-star-fill text-orange-600"></span>
                                        <span class="bi-star-fill text-orange-600"></span>
                                        <span class="bi-star-fill text-orange-600"></span>
                                    <?php } ?>

                                    <?php if (Exist_Data("zon_comments", "game_id=$game_id") > 5) { ?>
                                        <span class="bi-star-fill text-orange-600"></span>
                                        <span class="bi-star-fill text-orange-600"></span>
                                        <span class="bi-star-fill text-orange-600"></span>
                                        <span class="bi-star-fill text-orange-600"></span>
                                        <span class="bi-star-fill text-orange-600"></span>
                                    <?php } ?>
                                    <?php //} 
                                    ?>
                                </div>
                            </div>
                            <div class="right">
                                <span class="text-gray-600 text-right text-sm block pb-1 light-color"><?php Game_Data(Secure_DATA($_GET['id']), 'game_played') ?> Played</span>
                                <div class="flex gap-2 ">
                                    <a onclick="toggleFullScreen()" class="bi text-md bi-arrows-fullscreen dark:text-gray-300 dark:bg-zinc-800 block bg-gray-200 py-3 px-3 rounded-lg hover:bg-blue-500 hover:text-gray-100"></a>
                                    <?php if (isset($_SESSION['Loggedin']) && !empty($user_id)) { ?>
                                        <?php if (Exist_Data("zon_likes", "user_id=$user_id && game_id=$game_id") == 1 && !empty($user_id)) { ?>
                                            <div class="button text-center">
                                                <a id="game_like" class="fa text-md block cursor-pointer  fa-thumbs-up  bg-blue-100  py-2 px-2 rounded-full w-8 text-center bg-blue-500 text-gray-100 hover:bg-blue-500 hover:text-gray-100"></a>
                                                <span class="mt-4 dark:text-gray-100"><?php echo Exist_Data("zon_likes", "game_id=$game_id") ?></span>
                                            </div>
                                        <?php } else { ?>
                                            <div class="button text-center">
                                                <a id="game_like" class="fa text-md block cursor-pointer fa-thumbs-up bg-blue-100 py-2 px-2 rounded-full w-8 hover:bg-blue-500 hover:text-gray-100"></a>
                                                <span class="mt-4 dark:text-gray-100"><?php echo Exist_Data("zon_likes", "game_id=$game_id") ?></span>
                                            </div>
                                        <?php } ?>

                                        <?php if (Exist_Data("zon_unlikes", "user_id=$user_id && game_id=$game_id") == 1 && !empty($user_id)) { ?>
                                            <div class="button text-center">
                                                <a id="game_unlike" class="fa text-md block cursor-pointer fa-thumbs-down bg-blue-500 text-gray-100 py-2 px-2 rounded-full w-8 hover:bg-blue-500 hover:text-gray-100"></a>
                                                <span class="mt-4 dark:text-gray-100"><?php echo Exist_Data("zon_unlikes", "game_id=$game_id") ?></span>
                                            </div>
                                        <?php } else { ?>
                                            <div class="button text-center">
                                                <a id="game_unlike" class="fa text-md block cursor-pointer fa-thumbs-down bg-blue-100 py-2 px-2 rounded-full w-8 hover:bg-blue-500 hover:text-gray-100"></a>
                                                <span class="mt-4 dark:text-gray-100"><?php echo Exist_Data("zon_unlikes", "game_id=$game_id") ?></span>
                                            </div>
                                        <?php } ?>
                                    <?php } ?>
                                </div>
                            </div>
                        </div>
                        <div class="description mt-2">
                            <h6 class="mt-1 mb-1 font-bold text-gray-800 dark:text-gray-300">Description</h6>
                            <p class="text-gray-700 dark:text-zinc-400"><?php Game_Data(Secure_DATA($_GET['id']), 'game_description') ?></p>
                        </div>
                        <?php if (isset($_SESSION['Loggedin'])) { ?>
                            <form action="<?php echo $site_url ?>includes/functions.php" method="post" class="comment-form gap-2 mt-6 flex w-full">
                                <input type="hidden" id="current_url" value="" name="url">
                                <input type="hidden" value="<?php echo User_Data_Two('id') ?>" name="user_id">
                                <input type="hidden" value="<?php echo date("d M, Y") ?>" name="date">
                                <input type="hidden" value="<?php echo Game_Data_Two(Secure_DATA($_GET['id']), 'id') ?>" name="game_id">
                                <textarea required type="text" name="subject" class="w-full dark:text-gray-200 dark:border-gray-600 h-12 bg-transparent outline-none focus:border-blue-800 border-2 transition duration-600 border-gray-300 py-2 px-2 rounded-md" placeholder="Comment Here"></textarea>
                                <button class="bg-blue-500 px-4 text-gray-200 h-12 rounded-md" type="submit" name="comment">Comment</button>
                            </form>
                        <?php } ?>
                        <?php if (Exist_Data("zon_comments", "game_id=$game_id") > 0) { ?>
                            <h1 class="text-xl text-gray-900 dark:text-gray-300 font-bold mt-6">Comments (<?php echo Exist_Data("zon_comments", "game_id=$game_id"); ?>)</h1>
                        <?php } ?>
                        <div class="comments mt-6">
                            <?php

                            $query = "select * from zon_comments where game_id=$game_id order by id desc";
                            $run = mysqli_query($con, $query);
                            while ($row = mysqli_fetch_assoc($run)) {
                            ?>
                                <div class="comment-single flex gap-5 mb-8">
                                    <img src="<?php echo $site_url ?>static/img/<?php echo User_Data_By_Cond("user_pic", "id=" . $row['user_id']) ?>" class="h-12 w-12 rounded-full object-cover">
                                    <div class="comment-info">
                                        <h4 class="font-bold dark:text-gray-300"><?php echo User_Data_By_Cond("username", "id=" . $row['user_id']) ?></h4>
                                        <span class="uppercase text-xs text-gray-600 dark:text-gray-400"><?= $row['date'] ?></span>
                                        <p class="mt-2 text-gray-700 dark:text-gray-300"><?= $row['subject'] ?></p>
                                    </div>
                                </div>
                            <?php } ?>
                        </div>
                    </section>
                </div>
                <div class="games">
                    <div class="grid w-80 sm-hidden">
                        <?php
                        $run = mysqli_query($con, "select * from zon_games order by id desc limit 18,18");
                        while ($row = mysqli_fetch_assoc($run)) {
                        ?>
                            <a href="<?php echo $site_url ?>single/<?= $row['id'] ?>/<?php
                                                                                        $text = $row['game_name'];
                                                                                        $lower = strtolower($text);
                                                                                        $revspace = str_replace(" ", "-", $lower);
                                                                                        echo $revspace;
                                                                                        ?>" class="box block relative overflow-hidden rounded-xl overflow-hidden upward {scale-up} cursor-pointer transition duration-300 overlay">
                                <img src="<?= $row['game_image_url'] ?>" class="w-full h-full object-cover" alt="<?= $row['game_name'] ?>">
                                <h2 style="z-index: 9;" class="text-white absolute  bottom-0 left-0 px-2 py-2"><?= $row['game_name'] ?></h2>
                            </a>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        function toggleFullScreen() {
            var iframe = document.getElementById("my-iframe");
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.webkitRequestFullscreen) {
                /* Safari */
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) {
                /* IE11 */
                iframe.msRequestFullscreen();
            }
        }
    </script>
    <?php include("includes/footer.php") ?>

</body>

</html>