<?php $page_title = $_GET['query']; ?>
<?php include("includes/header.php") ?>
<?php 
$query = Secure_DATA($_GET['query']);
?>

<body class="bg-dark dark:bg-zinc-900">
    <?php include("includes/main-h.php") ?>
    <div class="body container-zon mt-2 px-0">
        <h1 class="font-bold dark:text-gray-200 text-4xl mb-3 mt-12 text-center capitalize">Result Found (<?php echo Exist_Data("zon_games", "game_name like '%$query%'") ?>) From: <?php echo $query ?></h1>
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
</body>
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

        var q_n = '<?php echo $_GET['query'] ?>';
        $.post("<?php echo $site_url?>includes/ajax/sr.php", { page: page_no, name: q_n }, (data) => {
            // console.log(data);
            $("#zon_games").append(data);
            $(".zon-loader").hide();
        });

        page_no++;
    }
</script>
<?php include("includes/footer.php") ?>