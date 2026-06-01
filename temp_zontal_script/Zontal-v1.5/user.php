<?php include("includes/header.php") ?>
<?php
if (isset($_SESSION['Loggedin_user'])) {
    $user_id = User_Data_Two('id');
}
if (!isset($_SESSION['Loggedin'])) {
    @header("location: index");
}
?>

<body class="bg-dark dark:bg-zinc-900">
    <?php include("includes/main-h.php") ?>
    <div class="body container-zon mt-2 px-0">
        <div class="px-2">
            <?php
            if (isset($_GET) && isset($_GET['page']) && $_GET['page'] == 'settings') {
            ?>
                <form action="<?php echo $site_url ?>includes/functions.php?url=<?php echo $site_url ?>user/settings" method="post" enctype="multipart/form-data">

                <?php } ?>
                <div class="flex md-flex-column gap-10">
                    <?php
                    if (isset($_GET) && isset($_GET['page']) && $_GET['page'] == 'settings') {
                    ?>
                        <div class="avatar-pic flex items-center justify-center relative shadow-lg rounded-xl overflow-hidden h-72 border-2 w-80 bg-zinc-900">
                            <input name="avatar_img" id="avatar_input" type="file" class="w-full h-full opacity-0 absolute">
                            <img style="z-index: -1;" id="avatar" class="absolute w-full h-full object-cover">
                            <span id="upload_label" class="uppercase text-xl font-bold text-gray-300">upload photo</span>
                        </div>
                    <?php } ?>
                    <?php
                    if (isset($_GET) && isset($_GET['page']) && $_GET['page'] !== 'settings') {
                    ?>
                        <div class="card bg-zinc-950 shadow-lg overflow-hidden w-80 h-96 p-6 rounded-lg">
                            <div class="card-img">
                                <img class="w-full h-full rounded-lg" src="<?php echo $site_url  ?>static/img/<?php echo User_Data_Two('user_pic'); ?>">
                            </div>
                            <div class="card-body mt-4">
                                <div class="flex justify-between ">
                                    <div class="col flex flex-column text-center">
                                        <span class="dark:text-gray-300"><?php if (!empty($user_id)) {
                                                                                echo Exist_Data("zon_likes", "user_id=$user_id");
                                                                            } ?></span>
                                        <span class="text-lg font-bold dark:text-white">likes</span>
                                    </div>
                                    <div class="col flex flex-column text-center">
                                        <span class="dark:text-gray-300"><?php if (!empty($user_id)) {
                                                                                echo Exist_Data("zon_comments", "user_id=$user_id");
                                                                            } ?></span>
                                        <span class="text-lg font-bold dark:text-white">Comments</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php } ?>
                    <?php
                    if (isset($_GET) && isset($_GET['page']) && $_GET['page'] == 'likes') {
                    ?>
                        <div class="card-container w-full mt-8">
                            <h1 class="font-bold mb-6 text-lg dark:text-gray-300">Liked Games</h1>
                            <div class="grid w-full">
                                <?php
                                $query = "select * from zon_likes where user_id=$user_id";
                                $run = mysqli_query($con, $query);
                                while ($data = mysqli_fetch_assoc($run)) {
                                    $id = $data['game_id'];
                                    $sql = "select * from zon_games where id=$id";
                                    $run_sql = mysqli_query($con, $sql);
                                    while ($row = mysqli_fetch_assoc($run_sql)) {
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
                                <?php }
                                } ?>
                            </div>
                        </div>
                    <?php } else {
                        @header("loaction: $site_url");
                    } ?>

                    <?php if (isset($_GET) && isset($_GET['page']) && $_GET['page'] == 'comments') {
                    ?>
                        <div class="card-container mt-8">
                            <h1 class="font-bold mb-6 text-lg dark:text-gray-300">Comments</h1>
                            <div class="grid">
                                <?php
                                $query = "select * from zon_comments where user_id='$user_id'";
                                $run = mysqli_query($con, $query);
                                while ($row = mysqli_fetch_assoc($run)) {
                                ?>
                                    <div class="comment-single flex gap-5 mb-8">
                                        <img src="<?php echo $site_url ?>static/img/<?php echo User_Data_By_Cond("user_pic", "id=" . $row['user_id']) ?>" class="h-12 w-12 rounded-full object-cover">
                                        <div class="comment-info">
                                            <h4 class="font-bold dark:text-gray-300"><?php echo User_Data_By_Cond("username", "id=" . $row['user_id']) ?> &nbsp; &nbsp; <a href="<?php echo $site_url; ?>includes/functions.php?page=comments&id=<?= $row['id'] ?>&redirect=<?php echo $site_url ?>user/comments" class="font-normal text-xs text-red-400">Delete</a></h4>
                                            <span class="uppercase text-xs text-gray-600 dark:text-gray-400"><?= $row['date'] ?></span>
                                            <p class="mt-2 text-gray-700 dark:text-gray-300"><?= $row['subject'] ?></p>
                                        </div>
                                    </div>
                                <?php } ?>
                            </div>
                        </div>
                    <?php } ?>

                    <?php
                    if (isset($_GET) && isset($_GET['page']) && $_GET['page'] == 'settings') {
                    ?>
                        <div class="card-container w-[100%] mt-2">
                            <h1 class="font-bold mb-6 text-lg dark:text-gray-300">Profile Settings</h1>

                            <input type="hidden" name="id" value="<?php User_Data('id') ?>">

                            <div class="input-group flex w-full flex-direction-column mb-6">
                                <label class="select-none uppercase text-gray-500 text-xs mb-1 dark:text-gray-300">Full name</label>
                                <input value="<?php User_Data('name') ?>" required name="name" class="border-2 transition dark:text-gray-300 dark:border-zinc-700 dark:bg-zinc-800 duration-300 border-gray-200 px-2 py-4 outline-none rounded-lg focus:border-blue-700" type="text" placeholder="Full Name">
                            </div>

                            <div class="input-group flex w-full flex-direction-column mb-6">
                                <label class="select-none uppercase text-gray-500 text-xs mb-1 dark:text-gray-300">Username</label>
                                <input value="<?php User_Data('username') ?>" required name="username" class="border-2 transition dark:text-gray-300 dark:border-zinc-700 dark:bg-zinc-800 duration-300 border-gray-200 px-2 py-4 outline-none rounded-lg focus:border-blue-700 " type="text" placeholder="Username">
                            </div>

                            <div class="input-group flex w-full flex-direction-column mb-6">
                                <label class="select-none uppercase text-gray-500 text-xs mb-1 dark:text-gray-300">Email</label>
                                <input value="<?php User_Data('email') ?>" required name="email" class="border-2 transition dark:text-gray-300 dark:border-zinc-700 dark:bg-zinc-800 duration-300 border-gray-200 px-2 py-4 outline-none rounded-lg focus:border-blue-700 " type="text" placeholder="Email">
                            </div>

                            <div class="input-group flex w-full flex-direction-column mb-6">
                                <label class="select-none uppercase text-gray-500 text-xs mb-1 dark:text-gray-300">New Password</label>
                                <input name="new_password" class="border-2 transition dark:text-gray-300 dark:border-zinc-700 dark:bg-zinc-800 duration-300 border-gray-200 px-2 py-4 outline-none rounded-lg focus:border-blue-700 " type="password" placeholder="New Password">
                            </div>

                            <button type="submit" name="change_settings" class="w-52 text-sm h-12 bg-blue-500 mt-4 text-white uppercase font-bold space-lg rounded-lg">Save Changes</button>

                        </div>
                    <?php } ?>
                </div>
                <?php
                if (isset($_GET) && isset($_GET['page']) && $_GET['page'] == 'settings') {
                ?>
                </form>
            <?php } ?>
        </div>
    </div>
</body>



<?php include("includes/footer.php") ?>