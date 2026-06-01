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
<?php
// Include Header 
include("includes/header.php");

// We are checking whether the page id is there in the url or not
if (isset($_GET) && isset($_GET['id'])) {
    // Getting Page Data by Page id
    $id = Secure_DATA($_GET['id']);
    $query = "select * from zon_pages where id=$id";
    $query_run = mysqli_query($con, $query);
    $data = mysqli_fetch_assoc($query_run);
}
?>
<body class="bg-dark dark:bg-[#121317]">
<?php // Include Main Header ?>
<?php include("includes/main-h.php") ?>
<?php // Page Container ?>
<div class="container-zon px-4">
<?php // Page Title ?>
    <h1 class="title text-4xl mt-6 font-bold text-zinc-800 dark:text-gray-200"> <?=$data['title']?> </h1>
    <?php // Page Main Content ?>
    <div class="page-desc text-gray-700 dark:text-gray-400 mt-3">
    <?=$data['content']?>
    </div>
</div>
<?php // End Page Container ?>
</body>