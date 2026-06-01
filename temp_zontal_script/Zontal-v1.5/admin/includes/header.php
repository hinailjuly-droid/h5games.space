<!DOCTYPE html>
<html lang="en" class="dark:bg-zinc-800">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="robots" content="noindex, nofollow">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php if (!empty($page)) { ?>
        <title><?php echo $page ?></title>
    <?php } else { ?>
        <title><?php echo Zon_Config('site_name') ?></title>
    <?php } ?>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/vendor/bootstrap-icons/bootstrap-icons.css">
    <link rel="shortcut icon" href="<?php echo $site_url ?>static/img/logo/<?php echo Zon_Config('site_favicon') ?>" type="image/x-icon">
    <script src="assets/js/tailwind.js"></script>
    <script src="https://cdn.ckeditor.com/ckeditor5/37.0.1/classic/ckeditor.js"></script>
</head>