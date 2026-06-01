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
<?php // Include Header ?>
<?php include("includes/header.php") ?>
<?php // Getting Category Name ?>
<?php
$name = Secure_DATA($_GET['name']);
// Ready Query by Category Name
$query = "SELECT * from zon_games where game_category='$name' order by id desc";
?>
<body class="bg-dark dark:bg-zinc-900">
    <?php // Main Header ?>
    <?php include("includes/main-h.php") ?>
    <?php // Container Start ?>
    <div class="body container-zon mt-2 px-0">
    <?php // Showing Category name ?>
        <h1 class="font-bold text-4xl dark:text-gray-200 mb-3 mt-12 text-center capitalize"><?php echo $name ?></h1>
        <?php // We are checking whether the user who has searched the category here is in the category database or not. ?>
        <?php if (Exist_Data("zon_games", "game_category='$name'") !== 0) { ?>
            <?php // Game Showing Container  ?>
            <div id="zon_games" class="grid mt-16 mx-2"></div>
            <?php // Skeleton Loading  ?>
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
          <?php  } else { ?>
            <div class="text-center w-full">
                <h1 class="text-center w-full text-xl font-bold dark:text-gray-100">Game Not Found in Category "<?php echo $name; ?>"</h1>
            </div>
        <?php } ?>
    </div>
    <?php // Container End ?>
</body>
<?php // Include Footer ?>
<script src="<?php echo $site_url ?>static/js/jquery-3.4.1.min.js"></script>
<script>
    var page_no = 1;

    LoadData();

    $(window).scroll(() => {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
            LoadData();
        }
    })

    function LoadData() {

        var c_n = '<?php echo $_GET['name'] ?>';
        $.post("<?php echo $site_url?>includes/ajax/cd.php", { page: page_no, name: c_n }, (data) => {
            // console.log(data);
            $("#zon_games").append(data);
            $(".zon-loader").hide();
        });

        page_no++;
    }
</script>
<?php include("includes/footer.php") ?>
