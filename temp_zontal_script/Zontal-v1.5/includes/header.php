<?php include("config.php") ?>
<?php include("function_general.php") ?>
<?php session_start() ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Meta Tags  -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<?php if (isset($_GET) && isset($_GET['id']) && !empty($_GET['id']) && isset($_GET['name'])) { ?>
    <meta name="description" content="<?php Game_Data(Secure_DATA($_GET['id']), 'game_description') ?>">
    <meta property="og:title" content="<?php Game_Data(Secure_DATA($_GET['id']), 'game_name') ?>" />
    <meta property="og:description" content="<?php Game_Data(Secure_DATA($_GET['id']), 'game_description') ?>" />
    <meta property="og:image" content="<?php Game_Data(Secure_DATA($_GET['id']), 'game_image_url') ?>" />
    <meta property="og:type" content="website" />
    <meta property="og:image:width" content="630" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="<?php echo Zon_Config('site_name') ?>" />
    <meta name="twitter:creator" content="<?php echo Zon_Config('site_name') ?>" />
<?php $text = Game_Data_Two(Secure_DATA($_GET['id']), 'game_name'); $lower = strtolower($text); $revspace = str_replace(" ", "-", $lower); ?>
    <meta property="og:url" content="<?php echo $site_url ?>single/<?php Game_Data(Secure_DATA($_GET['id']), 'id') ?>/<?php echo $revspace; ?>" />
<?php } elseif(isset($_GET['id'])) { ?>
    <meta name="description" content="<?php echo  page_data($_GET['id'], 'desc') ?>">
<?php } else { ?>
    <meta name="description" content="<?php echo  Zon_Config('site_desc') ?>">
    <meta name="keywords" content="<?php echo Zon_Config('site_keywords') ?>">
<?php }?>
    <!-- Favicon  -->
    <link rel="apple-touch-icon" href="<?php echo $site_url ?>static/img/logo/<?php echo Zon_Config('site_favicon') ?>">
    <link rel="icon" href="<?php echo $site_url ?>static/img/logo/<?php echo Zon_Config('site_favicon') ?>">
    <link rel="shortcut icon" href="<?php echo $site_url ?>static/img/logo/<?php echo Zon_Config('site_favicon') ?>" type="image/x-icon">
    <!-- Icon  -->
    <link rel="stylesheet" href="<?php echo $site_url ?>static/vendor/fontawesome/css/all.css">
    <link rel="stylesheet" href="<?php echo $site_url ?>static/vendor/bootstrap-icons/bootstrap-icons.css">
    <!-- Title  -->
<?php if (isset($_GET) && isset($_GET['id']) && !empty($_GET['id']) && isset($_GET['name'])) { ?>
    <title><?php Game_Data(Secure_DATA($_GET['id']), 'game_name') ?></title>
<?php } elseif(isset($_GET['id'])) { ?>
    <title><?php echo  page_data($_GET['id'], 'title') ?></title>
<?php } else { ?>
    <title><?php echo Zon_Config('site_title') ?></title>
<?php }?>
    <!-- Tailwind Css Framework of Css -->
    <script src="<?php echo $site_url ?>static/js/tailwind.js"></script>
<?php echo Zon_Config('head_code')?>
    <style>.liked{background-color:#00f!important;color:#000!important}.action-button{color:var(--act-button-text-color)!important;background-color:var(--act-button-bg-color)!important}.container-zon{max-width:1550px;margin:auto}:root{--zontal-bg-color:#fff;--act-button-text-color:#000;--cate-bg-color:#dcdcdc93;--act-button-bg-color:#dcdcdc;--zontal-header-bg-color:#fff;--cate-text-color:#555;--search-bg-color:#dcdcdc93;--header-links-color:#777;--mc-color:#333;--text-zontal-color:#000}.dark-mode{--zontal-bg-color:#111;--act-button-text-color:#fff;--act-button-bg-color:#222!important;--cate-bg-color:#222;--cate-text-color:#dcdcdc;--zontal-header-bg-color:#111;--search-bg-color:#00000049;--header-links-color:#dcdcdc;--mc-color:#dcdcdc;--text-zontal-color:#dcdcdc}.text-zontal{color:var(--text-zontal-color)!important}.header a,.light-color,.link-color a{color:var(--header-links-color)!important}.cat-box{background-color:var(--cate-bg-color)!important;color:var(--cate-text-color)!important}.menu{color:var(--menu-color);display:none!important}.mode-changer{color:var(--mc-color)}.search-bg{background-color:var(--search-bg-color)!important}.header{background-color:var(--zontal-header-bg-color)!important}.cat-box:hover{background-color:#008cff!important;color:#fff!important}.bg-dark{background:var(--zontal-bg-color)}.slider{overflow:scroll hidden;height:fit-content;width:100%;scroll-behavior:smooth}.slider .slide{width:calc(21rem * 6)}.slider::-webkit-scrollbar{display:none}._-50{transform:translateY(-50%)}.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));grid-gap:20px;grid-auto-rows:minmax(120px,auto);grid-auto-flow:dense}.box.large{grid-column-end:span 2;grid-row-end:span 2}.box{background-color: #222;border-radius:5px;height:100%!important}.overlay:hover::before,.upward:hover h2{opacity:1}.overlay::before{content:'';position:absolute;left:0;bottom:0;height:100%;transition:.2s;width:100%;background-image:linear-gradient(to top,#000,transparent);opacity:0;z-index:1}.scale-up:hover{transform:scale(1.1)}.upward h2{opacity:0}.banner{height:90px;width:1200px;transform:scale(.8)}.controller{position:absolute;display:flex;top:50%;justify-content:space-between;z-index:10;width:100%;padding:0 10px}.c-button{background-color:rgb(0,0,0,.5);transition:.4s}.c-button:hover{background-color:#000}.sticky{position:sticky;top:0;z-index:99}.dark-mode .mode-light,.mode-dark{display:none}.active-like-button{--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity))!important}.dark-mode .mode-dark{display:block}@media only screen and (max-width:1100px){.categories,.header-main,.search-bar{display:none!important}.gameplay{height:400px!important}.profile{margin:0!important}.menu{display:block!important}.mobile-header{display:flex!important}}.blur-overlay{background:rgba(255,255,255,.401);z-index:99;backdrop-filter:blur(10px);overflow:hidden}.offcanvas-menu{position:fixed;left:0;top:0;width:300px;background-color:var(--offcanvas-menu-bg-color);height:100%;z-index:999;box-sizing:border-box;padding:10px}@media screen and (max-width:700px){.flex-md-column{ flex-direction: column !important;}.offcanvas-menu{width:100%}.resp{flex-direction:column}}.flex-column,.flex-direction-column{flex-direction:column}.offcanvas{transform:translateX(-200%);z-index:999;transition:.2s}.offcanvas.active{transform:translateX(0)}@media screen and (max-width:1400px){.md-hidden{display:none}}@media screen and (max-width:1100px){.sm-hidden{display:none!important}.screen{width:100%!important}.md-flex-column{flex-direction:column}}.dark-color{color:var(--mc-color)!important}.screen-full{position:absolute;top:0;left:0;z-index:99;height:100%;width:100%}.screen.active-screen{height:100%;width:100%;position:fixed;top:0;left:0;z-index:999}.screen.active-screen iframe{position:absolute;width:100%;height:100%}.active-search .search-bar-component{display:flex!important}.active-search .no-search-component,.search-bar-component{display:none!important}.active-dropdown{height:fit-content!important}.dropdown-content{height:0;overflow:hidden}.whitespace-nowrap{ white-space: nowrap; word-wrap: nowrap; } </style>
</head>