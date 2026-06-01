<?php
session_start();

if (!isset($_SESSION['admin-Loggedin']) && !isset($_SESSION['is_admin_Loggedin'])) {
    @header("location: ./login");
}

include("config.php");


?>
<div class="sidebar dark:bg-zinc-900 bg-[white] sticky w-64 h-[100vh]">
    <style>
        .sidebar {
            position: sticky;
            top: 0;
        }
    </style>
    <div class="logo px-4 py-6">
        <a href="<?php echo $site_url ?>">
            <h3 class="fw-bold text-2xl dark:text-gray-100 uppercase text-gray-600 "><?php echo Zon_Config('site_name') ?></h3>
        </a>
    </div>
    <ul class="list px-4 mt-2">
        <li class="list-style-none"><a class="text-docoration-none text-gray-500 dark:text-gray-400 py-2 block text-[13px]" href="index"><span class="bi-speedometer2 mr-2"></span> Dashboard</a></li>
        <li class="text-muted text-[10px] mt-3 mb-3 uppercase">ARCADE</li>
        <li class="list-style-none"><a class="text-docoration-none text-gray-500 dark:text-gray-400 py-2 block text-[13px]" href="games"><span class="bi-controller mr-2"></span> Games</a></li>
        <li class="list-style-none"><a class="text-docoration-none text-gray-500 dark:text-gray-400 py-2 block text-[13px]" href="categories"><span class="bi-columns-gap mr-2"></span> Categories</a></li>
        <li class="text-muted text-[10px] mt-3 mb-3 letter-space-1 uppercase">community</li>
        <li class="list-style-none"><a class="text-docoration-none text-gray-500 dark:text-gray-400 py-2 block text-[13px]" href="users"><span class="bi-person mr-2"></span> Users</a></li>
        <li class="list-style-none"><a class="text-docoration-none text-gray-500 dark:text-gray-400 py-2 block text-[13px]" href="comments"><span class="bi-person mr-2"></span> Comments</a></li>
        <li class="list-style-none"><a class="text-docoration-none text-gray-500 dark:text-gray-400 py-2 block text-[13px]" href="pages"><span class="bi-person mr-2"></span> Pages</a></li>
        <li class="text-muted text-[10px] mt-3 mb-3 uppercase">settings</li>
        <li class="list-style-none"><a class="text-docoration-none text-gray-500 dark:text-gray-400 py-2 block text-[13px]" href="tools"><span class="bi-tools mr-2"></span> Tools</a></li>
        <li class="list-style-none"><a class="text-docoration-none text-gray-500 dark:text-gray-400 py-2 block text-[13px]" href="advertisement"><span class="bi-tv mr-2"></span> Advertisement</a></li>
        <li class="list-style-none"><a class="text-docoration-none text-gray-500 dark:text-gray-400 py-2 block text-[13px]" href="settings"><span class="bi-gear mr-2"></span> Settings</a></li>
        <li class="list-style-none"><a class="text-docoration-none text-gray-500 dark:text-gray-400 py-2 block text-[13px]" href="logout"><span class="bi-gear mr-2"></span> logout</a></li>
    </ul>
</div>