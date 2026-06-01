<?php
require_once('../config.php');

$page = $_POST['page'] ?? 1;
$limit = 30;
$row = ($page - 1) * $limit;

$name = $_POST['name'];
// Ready Query by Category Name
$query = "SELECT * from zon_games where game_category='$name' order by id desc limit $row,$limit";
$run = mysqli_query($con, $query);
$game = mysqli_fetch_all($run);


foreach ($game as $row) { ?>
    <a href="<?php echo $site_url ?>single/<?= $row[0] ?>/<?php
                                                                $text = $row[1];
                                                                $lower = strtolower($text);
                                                                $revspace = str_replace(" ", "-", $lower);
                                                                echo $revspace;
                                                                ?>" class="box block relative overflow-hidden rounded-xl overflow-hidden upward {scale-up} cursor-pointer transition duration-300 overlay">
        <img src="<?= $row[3] ?>" class="w-full h-full object-cover" alt="<?= $row[1] ?>">
        <h2 style="z-index: 9;" class="text-white absolute  bottom-0 left-0 px-2 py-2"><?= $row[1] ?></h2>
    </a>
<?php } ?>