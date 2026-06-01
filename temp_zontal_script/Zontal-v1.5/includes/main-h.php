<header class="sticky dark:bg-zinc-900 header-main top-0 bg-white mb-2 py-1 ">
    <div class="container-zon between items-center px-2 flex">
        <div class="flex items-center w-full">
            <div class="logo">
                <a href="<?php echo $site_url ?>">
                    <?php // This logo image will appear if the theme is in Light mode  ?>
                    <img class="dark:hidden block" mode-light width="130" src="<?php echo $site_url ?>static/img/logo/<?php echo Zon_Config('site_logo_light') ?>" alt="zontal">
                    <?php // This logo image will appear if the theme is in dark mode  ?>
                    <img class="dark:block hidden" mode-dark width="130" src="<?php echo $site_url ?>static/img/logo/<?php echo Zon_Config('site_logo_dark') ?>" alt="zontal">
                </a>
            </div>
            <ul class="flex ml-12">
                <?php // Newest  ?>
                <li><a class="block px-4 text-sm text-gray-500 dark:text-gray-100" href="<?php echo $site_url ?>archive/newest">Newest</a></li>
                <?php // if Popular Games Available Minimum 18 Then Show Most Popular Option  ?>
                <?php if (Exist_Data("zon_games", "game_played > 50") > 18) { ?>
                    <li><a class="block px-4 text-sm text-gray-500 dark:text-gray-100" href="<?php echo $site_url ?>archive/popular">Most Popular</a></li>
                <?php } ?>
                <?php // This Link Play Newest Game of the site ?>
                <li><a class="block px-4 text-sm text-gray-500 dark:text-gray-100" href="<?php AutoPlay() ?>">AutoPlay</a></li>
            </ul>
            <?php // Search Bar Form ?>
            <form action="<?php echo $site_url ?>search" class="ml-6 bg-gray-100 search-bar rounded-full flex py-3">
                <button class="fa fa-search text-white text-gray-800 px-4"></button>
                <input name="query" class="outline-none text-sm text-gray-700 text-light bg-transparent w-64" type="text" placeholder="Search Your Favourite Game">
            </form>
            <?php // Search Bar Form End ?>
        </div>
        <div class="flex items-center opnal gap-3 px-12">
            <?php // If User Not User Loggedin. This Links is Showing otherwise not  ?>
            <?php if (!isset($_SESSION['Loggedin'])) { ?>
                <a href="<?php echo $site_url ?>login" class="text-gray-600 dark:text-gray-300 whitespace-nowrap px-2">Login</a>
                <a href="<?php echo $site_url ?>register" class="text-gray-600 dark:text-gray-300 whitespace-nowrap px-2">Sign up</a>
            <?php } ?>
            <?php if (isset($_SESSION['Loggedin'])) { ?>
                <?php if ($_SESSION['Loggedin'] == true) { ?>
                    <?php // User Profile Menu  ?>
                    <div class="profile relative flex h-10 mr-20">
                        <img onclick="document.querySelector('.profile-dropdown').classList.toggle('hidden')" src="<?php echo $site_url ?>static/img/<?php User_Data('user_pic') ?>" class="h-10 cursor-pointer w-10 rounded-full mr-3 ">
                        <div onclick="document.querySelector('.profile-dropdown').classList.toggle('hidden')" class="flex flex-column">
                            <a href="#" class="text-sm dark:text-gray-100"><?php User_Data('username') ?></a>
                            <span class="text-xs text-gray-400 whitespace-nowrap"><?php echo Zon_Config("profile_tagline") ?></span>
                        </div>

                        <div class="profile-dropdown hidden py-2 rounded-lg w-52 bg-white dark:bg-zinc-800 absolute left-0 top-[50px]">
                            <ul class="w-full">
                                <?php
                                if (isset($_SESSION['is_admin_Loggedin'])) { ?>
                                    <li><a href="<?php echo $site_url ?>admin/index" class="block py-2 px-3 dark:text-gray-300 text-sm">Admin Panel</a></li>
                                    <div class="divider w-full h-0.5 border-t mt-2 mb-2 border-gray-200 dark:border-zinc-700"></div>
                                <?php } ?>
                                <li><a href="<?php echo $site_url ?>user/likes" class="block py-2 px-3 dark:text-gray-300 text-sm">Liked Games</a></li>
                                <li><a href="<?php echo $site_url ?>user/comments" class="block py-2 px-3 dark:text-gray-300 text-sm">Comments</a></li>
                                <div class="divider w-full h-0.5 border-t mt-2 mb-2 border-gray-200 dark:border-zinc-700"></div>
                                <li><a href="<?php echo $site_url ?>user/settings" class="block py-2 px-3 dark:text-gray-300 text-sm">Settings</a></li>
                                <li><a href="<?php echo $site_url ?>logout" class="block py-2 px-3 dark:text-gray-300 text-sm">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                    <?php // End User Profile Menu  ?>
                <?php } ?>
            <?php } ?>
        </div>
    </div>
</header>

<?php // Mobile Header  ?>
<div class="mobile-header sticky mb-6 hidden bg-white shadow-lg dark:bg-zinc-900 items-center flex justify-between w-full">
    <button id="open-search" class="search fa fa-search no-search-component dark:text-gray-100 px-4 text-xl"></button>
    <button id="close-search" class="search search-bar-component fa fa-close dark:text-gray-100 px-4 text-xl"></button>
    <form action="<?php echo $site_url ?>search" class="w-full flex search-bar-component">
        <input name="query" placeholder="Search" type="text" class="w-full border-2 m-2 bg-transparent text-gray-700 dark:text-gray-200 outline-none py-3 px-2">
        <button class="search fa fa-search dark:text-gray-100 px-4 text-xl"></button>
    </form>
    <a href="<?php echo $site_url ?>" class="no-search-component">
        <img class="dark:hidden block" mode-light width="130" src="<?php echo $site_url ?>static/img/logo/logo-dark.png" alt="zontal">
        <img class="dark:block hidden" mode-dark width="130" src="<?php echo $site_url ?>static/img/logo/logo.png" alt="zontal">
    </a>
    <button class="fa fa-bars px-6 dark:text-gray-100 text-xl menu no-search-component"></button>
</div>
<?php // End Mobile Header  ?>

<style>
    .scroll-hidden::-webkit-scrollbar {
        display: none;
    }
</style>

<?php // Mobile Header Menu  ?>
<div class="offcanvas fixed top-0 left-0 h-[100%]  w-full">
    <div class="backdrop-blur-2 fixed h-full w-full top-0 left-0 blur-overlay"></div>
    <div class="menu-list bg-white dark:bg-zinc-900 offcanvas-menu">
        <div class="close-offcanvas text-black dark:text-white cursor-pointer absolute font-bold px-4 py-4 select-none top-0 right-0 text-black text-lg ">
            &times;</div>
        <div class="logo flex justify-center">
            <a href="<?php echo $site_url ?>">
                <img class="dark:hidden block" mode-light width="130" src="<?php echo $site_url ?>static/img/logo/logo-dark.png" alt="zontal">
                <img class="dark:block hidden" mode-dark width="130" src="<?php echo $site_url ?>static/img/logo/logo.png" alt="zontal">
            </a>
        </div>
        <ul class="w-full h-full overflow-y-scroll scroll-hidden ">
            <li><a class="block px-4 py-2 uppercase text-xs text-gray-600 dark:text-gray-200" href="<?php echo $site_url ?>">Home</a></li>
            <li><a class="block px-4 py-2 uppercase text-xs text-gray-600 dark:text-gray-200" href="<?php echo $site_url ?>archive/newest">newest</a></li>
            <li><a class="block px-4 py-2 uppercase text-xs text-gray-600 dark:text-gray-200" href="<?php echo $site_url ?>archive/popular">most popular</a></li>
            <li><a class="block px-4 py-2 uppercase text-xs text-gray-600 dark:text-gray-200" href="<?php AutoPlay() ?>">autoplay</a></li>
            <li data-target="#dropdown-content" class="dropdown">
                <a class="block px-4 py-2 uppercase text-xs text-gray-600 dark:text-gray-200 cursor-pointer">categories &nbsp; &nbsp; <span class="fa fa-chevron-down text-xs"></span> </a>
                <ul id="dropdown-content" class="dropdown-content">
                    <?php $run = mysqli_query($con, "select * from zon_category");
                    while ($row = mysqli_fetch_assoc($run)) { ?>
                        <li><a href="<?php echo $site_url ?>game/<?= $row['slug'] ?>" class="block px-4 py-2 uppercase text-[10px] text-gray-600 dark:text-gray-200"><?= $row['name'] ?></a></li>
                    <?php } ?>
                </ul>
            </li>
            <?php if (!isset($_SESSION['Loggedin'])) { ?>
                <li><a class="block px-4 py-2 uppercase text-xs text-gray-600 dark:text-gray-200" href="<?php echo $site_url ?>login">login</a></li>
                <li><a class="block px-4 py-2 uppercase text-xs text-gray-600 dark:text-gray-200" href="<?php echo $site_url ?>register">signup</a></li>
            <?php } ?>
            <?php if (isset($_SESSION['Loggedin'])) { ?>
                <?php if ($_SESSION['Loggedin'] == true) { ?>
                    <li><a class="block px-4 py-2 uppercase text-xs text-gray-600 dark:text-gray-200" href="<?php echo $site_url ?>user/admin/index">Admin Panel</a></li>
                    <li><a class="block px-4 py-2 uppercase text-xs text-gray-600 dark:text-gray-200" href="<?php echo $site_url ?>user/likes">liked games</a></li>
                    <li><a class="block px-4 py-2 uppercase text-xs text-gray-600 dark:text-gray-200" href="<?php echo $site_url ?>user/comments">comments</a></li>
                    <li><a class="block px-4 py-2 uppercase text-xs text-gray-600 dark:text-gray-200" href="<?php echo $site_url ?>user/settings">settings</a></li>
                    <li><a class="block px-4 py-2 uppercase text-xs text-gray-600 dark:text-gray-200" href="<?php echo $site_url ?>logout">logout</a></li>
            <?php }
            } ?>
        </ul>
    </div>
</div>
<?php // End Mobile Header Menu  ?>
<style>
    .cat-item-container {
        scroll-behavior: smooth;
    }

    .scroll-c-hidden {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .scroll-c-hidden::-webkit-scrollbar {
        display: none;
    }

    #w-full-scroll {
        width: calc(100 * <?php echo $count ?>px);
    }
    .cat-container {
      max-width: 1550px;
      margin: auto;
    }
</style>