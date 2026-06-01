<?php
// +------------------------------------------------------------------------+
// | @author: MvnThemes
// | @name: Zontal - The Arcade Online HTML5 Game Playing Platform
// | @author_email: mvk62015@gmail.com   
// | @version: 1.0v
// +------------------------------------------------------------------------+
// | Zontal - The Arcade Online HTML5 Game Playing Platform
// | Copyright (c) 2017 Zontal. All rights reserved.
// 
?>
<?php // Header Include ?>
<?php include("includes/header.php") ?>
<?php // Body Start ?>
<body class="dark:bg-[#121317]">
    <?php include("includes/main-h.php") ?>
    <div class="flex items-center px-4 h-[80vh]">
        <?php // Form Start ?>
        <form class="login-form mx-auto my-12 w-96" action="<?php echo $site_url ?>includes/functions.php" method="post">
            <div class="logo flex items-center justify-center ">
                <?php // This logo image will appear if the theme is in dark mode  ?>
                <img class="dark:block hidden" src="<?php echo $site_url ?>static/img/logo/<?php echo Zon_Config('site_logo_dark'); ?>" alt="<?php echo Zon_Config('site_name') ?>">
                <?php // This logo image will appear if the theme is in light mode  ?>
                <img class="dark:hidden block" src="<?php echo $site_url ?>static/img/logo/<?php echo Zon_Config('site_logo_light'); ?>" alt="<?php echo Zon_Config('site_name') ?>">
            </div>
            <?php // If there is any error in login then it will appear here  ?>
            <?php if (isset($_GET) && isset($_GET['error'])) { ?>
                <div class="text-center bg-red-600 rounded-lg py-3 text-white mb-7 ">
                    <h1 class="text-lg font-normal capitalize text-white "><?php echo Secure_DATA(($_GET['error'])); ?></h1>
                </div>
            <?php } ?>
            <?php // Username / Email - Input ?>
            <div class="input-group flex flex-direction-column mb-6">
                <label class="select-none uppercase text-gray-500 text-xs mb-1 dark:text-gray-300">Username / Email</label>
                <input required name="username_email" class="border-2 transition dark:text-gray-300 dark:border-zinc-700 dark:bg-zinc-800 duration-300 border-gray-200 px-2 py-4 outline-none rounded-lg focus:border-blue-700 " type="text" value="<?php if (isset($_SESSION['Loggedin_user'])) {
                                                                                                                                                                                                                                                        echo $_SESSION['Loggedin_user'];
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                        echo '';
                                                                                                                                                                                                                                                    } ?>" placeholder="Email or Username">
            </div>
            <?php // Password - Input ?>
            <div class="input-group flex flex-direction-column">
                <label class="select-none uppercase text-gray-500 text-xs mb-1 dark:text-gray-300">Password</label>
                <input name="password" required class="border-2 transition dark:text-gray-300 duration-300 dark:border-zinc-700 dark:bg-zinc-800 border-gray-200 px-2 py-4 outline-none rounded-lg focus:border-blue-700 " type="password" placeholder="Password">
            </div>
            <?php // Submit Button ?>
            <button type="submit" name="login" class="w-full text-sm h-12 bg-blue-500 mt-4 text-white uppercase font-bold space-lg rounded-lg">Login</button>
            <?php // Other User Actions ?>
            <div class="flex justify-between mt-4">
                <a class="text-gray-500 text-xs"></a>
                <a href="<?php echo $site_url ?>register" class="text-gray-500 text-xs">Create new</a>
            </div>
        </form>
        <?php // Form End ?>
    </div>

</body>
<?php // Body End ?>
<?php // Include Footer ?>
<?php include("includes/footer.php"); ?>

</html>