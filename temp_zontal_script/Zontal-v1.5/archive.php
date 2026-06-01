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
<?php // Include Header 
?>
<?php include("includes/header.php") ?>

<?php
// Here we want to get which page the user wants to see
// Example: Most Popular, Newest
$type = Secure_DATA($_GET['type']);
?>

<body class="bg-dark dark:bg-zinc-900">
    <?php // Include Main Header 
    ?>
    <?php include("includes/main-h.php") ?>
    <?php // Container Start 
    ?>
    <div class="body container-zon mt-2 px-0">
        <?php // Whatever page the user has requested, he will see the name of the page here. 
        ?>
        <h1 class="font-bold text-4xl mb-3 dark:text-gray-200 mt-12 text-center capitalize"><?php echo $type ?></h1>
        <?php // Game Showing Container 
        ?>
        <div id="zon_games" class="grid mt-16 mx-2"></div>
        <div class="zon-loader grid mt-16 mx-2">
            <a class="box block relative dark:bg-zinc-800 bg-gray-200  overflow-hidden rounded-xl overflow-hidden upward transition duration-300"></a>
            <a class="box block relative dark:bg-zinc-800 bg-gray-200  overflow-hidden rounded-xl overflow-hidden upward transition duration-300"></a>
            <a class="box block relative dark:bg-zinc-800 bg-gray-200  overflow-hidden rounded-xl overflow-hidden upward transition duration-300"></a>
            <a class="box block relative dark:bg-zinc-800 bg-gray-200  overflow-hidden rounded-xl overflow-hidden upward transition duration-300"></a>
            <a class="box block relative dark:bg-zinc-800 bg-gray-200  overflow-hidden rounded-xl overflow-hidden upward transition duration-300"></a>
            <a class="box block relative dark:bg-zinc-800 bg-gray-200  overflow-hidden rounded-xl overflow-hidden upward transition duration-300"></a>
            <a class="box block relative dark:bg-zinc-800 bg-gray-200  overflow-hidden rounded-xl overflow-hidden upward transition duration-300"></a>
            <a class="box block relative dark:bg-zinc-800 bg-gray-200  overflow-hidden rounded-xl overflow-hidden upward transition duration-300"></a>
            <a class="box block relative dark:bg-zinc-800 bg-gray-200  overflow-hidden rounded-xl overflow-hidden upward transition duration-300"></a>
            <a class="box block relative dark:bg-zinc-800 bg-gray-200  overflow-hidden rounded-xl overflow-hidden upward transition duration-300"></a>
            <a class="box block relative dark:bg-zinc-800 bg-gray-200  overflow-hidden rounded-xl overflow-hidden upward transition duration-300"></a>
            <a class="box block relative dark:bg-zinc-800 bg-gray-200  overflow-hidden rounded-xl overflow-hidden upward transition duration-300"></a>
            <a class="box block relative dark:bg-zinc-800 bg-gray-200  overflow-hidden rounded-xl overflow-hidden upward transition duration-300"></a>
            <a class="box block relative dark:bg-zinc-800 bg-gray-200  overflow-hidden rounded-xl overflow-hidden upward transition duration-300"></a>
            <a class="box block relative dark:bg-zinc-800 bg-gray-200  overflow-hidden rounded-xl overflow-hidden upward transition duration-300"></a>
            <a class="box block relative dark:bg-zinc-800 bg-gray-200  overflow-hidden rounded-xl overflow-hidden upward transition duration-300"></a>
            <a class="box block relative dark:bg-zinc-800 bg-gray-200  overflow-hidden rounded-xl overflow-hidden upward transition duration-300"></a>
            <a class="box block relative dark:bg-zinc-800 bg-gray-200  overflow-hidden rounded-xl overflow-hidden upward transition duration-300"></a>
        </div>
    </div>
    </div>
    <?php // Container end 
    ?>
</body>
<script src="<?php echo $site_url ?>static/js/jquery-3.4.1.min.js"></script>
<?php // Pagination Code
?>
<script>
    var page_no = 1;

    LoadData();

    $(window).scroll(() => {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
            LoadData();
        }
    })

    function LoadData() {

        var t_n = '<?php echo $_GET['type'] ?>';
        $.post("<?php echo $site_url ?>includes/ajax/arc.php", {
            page: page_no,
            type: t_n
        }, (data) => {
            // console.log(data);
            $("#zon_games").append(data);
            $(".zon-loader").hide();
        });

        page_no++;
    }
</script>
<?php // include Footer 
?>
<?php include("includes/footer.php") ?>