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
<?php // Header File ?>
<?php include("includes/header.php")  ?>
<body class="dark:bg-[#121317]">
    <?php // Main Header File ?>
    <?php include("includes/main-h.php") ?>
    <div class="flex items-center px-4 h-[70vh]">
    <?php // Form Start ?>
        <form onsubmit="return verifyPassword()" id="signup_form" action="<?php echo $site_url ?>includes/functions.php" method="post" class="login-form mx-auto my-12 w-96">
            <div class="logo flex items-center justify-center ">
                <?php // This logo image will appear if the theme is in dark mode  ?>
                <img class="dark:block hidden" src="<?php echo $site_url ?>static/img/logo/<?php echo Zon_Config('site_logo_dark'); ?>" alt="<?php echo Zon_Config('site_name') ?>">
                <?php // This logo image will appear if the theme is in light mode  ?>
                <img class="dark:hidden block" src="<?php echo $site_url ?>static/img/logo/<?php echo Zon_Config('site_logo_light'); ?>" alt="<?php echo Zon_Config('site_name') ?>">
            </div>

            <?php
            // This Function is use For Secure Input Data's
            function Secure_Field($msg)
            {
                include "includes/config.php";
                $secure  = htmlspecialchars(mysqli_real_escape_string($con, $msg));
                echo $secure;
            }
            // if success to login automatically You Redirected on Login Page
            if (isset($_GET['s_msg'])) { ?>
                <script>
                    window.addEventListener('load', () => {
                        setTimeout(() => {
                            window.location.href = 'login';
                        }, 1000);
                    });
                </script>
                <?php // Showing Errors ?>
                <div class="alert text-center py-3 mb-6 font-bold rounded-lg bg-green-300 w-full"> <?php Secure_Field($_GET['s_msg']); ?></div>
            <?php session_unset();
            } ?>
            <?php // Full Name Input Field ?>
            <div class="input-group flex flex-direction-column mb-6">
                <label class="select-none dark:text-gray-300 uppercase text-gray-500 text-xs mb-1">full name</label>
                <input value="<?php if (isset($_SESSION['name'])) {
                                    echo $_SESSION['name'];
                                } ?>" required name="name" class="border-2 dark:text-gray-300 dark:border-zinc-700 dark:bg-zinc-800 transition duration-300 border-gray-200 px-2 py-3 outline-none rounded-lg focus:border-blue-700 " type="text" placeholder="First name">
            </div>
            <?php // Email Input Field ?>
            <div class="input-group flex flex-direction-column mb-6">
                <label class="select-none uppercase dark:text-gray-300 text-gray-500 text-xs mb-1">Email</label>
                <input value="<?php if (isset($_SESSION['email'])) {
                                    echo $_SESSION['email'];
                                } ?>" name="email" required class="border-2 dark:text-gray-300 dark:border-zinc-700 dark:bg-zinc-800 transition duration-300 <?php if (isset($_GET['email_msg'])) {
                                                                                                                                                                    echo  "border-red-500 focus:outline-red-500";
                                                                                                                                                                } else {
                                                                                                                                                                    echo "focus:border-blue-700 border-gray-200";
                                                                                                                                                                } ?>  px-2 py-3 outline-none rounded-lg  " type="email" placeholder="Email">
                
                <?php // Show Email Validating Error ?>
                <?php if (isset($_GET['email_msg'])) {  ?>
                    <label class="select-none text-red-800 text-xs mb-1 mt-1"> <?php Secure_Field($_GET['email_msg']); ?> </label>
                <?php } ?>

            </div>
            <?php // Username Input Field ?>
            <div class="input-group flex flex-direction-column mb-6">
                <label class="select-none uppercase dark:text-gray-300 text-gray-500 text-xs mb-1">Username</label>
                <input value="<?php if (isset($_SESSION['username'])) {
                                    echo $_SESSION['username'];
                                } ?>" name="username" required class="border-2 dark:text-gray-300 dark:border-zinc-700 dark:bg-zinc-800 transition duration-300 <?php if (isset($_GET['username_msg'])) {
                                                                                                                                                                    echo  "border-red-500 focus:outline-red-500";
                                                                                                                                                                } else {
                                                                                                                                                                    echo "focus:border-blue-700 border-gray-200";
                                                                                                                                                                } ?> px-2 py-3 outline-none rounded-lg " type="text" placeholder="Username">
                <?php // Show Username Validating Error ?>
                <?php if (isset($_GET['username_msg'])) {  ?>
                    <label class="select-none text-red-800 text-xs mb-1 mt-1"> <?php Secure_Field($_GET['username_msg']); ?> </label>
                <?php } ?>
            </div>
            <?php // Password Input Field ?>
            <div class="input-group flex flex-direction-column">
                <label class="select-none uppercase dark:text-gray-300 text-gray-500 text-xs mb-1">Password</label>
                <input id="R_password" name="password" required class="border-2 transition duration-300 dark:text-gray-300 dark:border-zinc-700 dark:bg-zinc-800 border-gray-200 px-2 py-3 outline-none rounded-lg focus:border-blue-700 " type="password" placeholder="Password">
                <label id="message" class="select-none mt-1 text-red-400 uppercase text-xs mb-1"></label>
            </div>
            <?php // Showing Your Typed Password ?>
            <div id="input-group" class="input-group hidden flex mt-4 flex-direction-column">
                <label class="select-none uppercase dark:text-gray-300 text-gray-500 text-xs mb-1">Your Password</label>
                <input id="input-tag" disabled name="password" required class="border-2 transition duration-300 dark:text-gray-300 dark:border-zinc-700 dark:bg-zinc-800 border-gray-200 px-2 py-3 outline-none rounded-lg focus:border-blue-700 " type="text" placeholder="Your Password">
            </div>
            <?php // Submit Button ?>
            <button id="sign_up_button" name="signup" type="submit" class="w-full text-sm h-12 bg-blue-500 mt-4 text-white uppercase font-bold space-lg rounded-lg">Sign up</button>
            <?php // Other User Actions ?>
            <div class="flex justify-between mt-4">
                <a href="login.html" class="text-gray-500 dark:text-gray-300 text-xs">You have account? login</a>
                <a href="#" class="text-gray-500 text-xs"></a>
            </div>
        </form>
    <?php // Form End  ?>
    </div>
    <?php // load main javascript file ?>
    <script src="<?php echo $site_url ?>static/js/main.js"></script>
</body>
<?php // include Footer ?>
<?php include("includes/footer.php"); ?>

</html>