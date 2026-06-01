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
<?php // include Header ?>
<?php include("includes/header.php") ?>

<?php // Getting Total Categories ?>
<?php
$run = mysqli_query($con, "select * from zon_category");
$count = mysqli_num_rows($run);
?>
<?php // Body Start ?>
<body class="bg-dark dark:bg-[#121317]">
    <?php // include Main Header ?>
    <?php include("includes/main-h.php") ?>
    <?php // Categories Container ?>
    <div class="cat-container px-4  relative mt-4">
        <button class="left ml-2 mt-1 w-10 h-10 hidden absolute left-0 rounded-full bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:hover:bg-zinc-700 hover:bg-gray-300 dark:text-white bi-chevron-left"></button>
        <?php // Categories Loop ?>
        <div class="cat-item-container scroll-hidden w-full overflow-x-scroll flex gap-4">
            <?php
            $run = mysqli_query($con, "select * from zon_category");
            while ($row = mysqli_fetch_assoc($run)) {
            ?>
                <a href="<?php echo $site_url ?>game/<?= $row['slug'] ?>" class="py-3 px-4 transition whitespace-nowrap dark:text-gray-300 dark:bg-[#1b1d22] duration-300 mb-2 hover:bg-blue-600 hover:text-gray-100 text-gray-600 text-sm rounded-md bg-gray-200"><?= $row['name'] ?></a>                
            <?php } ?>
        </div>
        <?php // Categories Loop End ?>
        <button class="right h-10 mr-2 mt-0 absolute right-0 top-0 w-10 rounded-full bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:hover:bg-zinc-700 hover:bg-gray-300 dark:text-white bi-chevron-right"></button>
    </div>
    <div class="body container-zon mt-3 px-0">
        <div class="mx-4">
        <?php // First Game Container ?>
            <div class="grid">
                <?php
                $run_d = mysqli_query($con, "select * from zon_games where game_played > 50 order by id desc  limit 1");
                while ($row = mysqli_fetch_assoc($run_d)) {
                ?>
                    <a href="single/<?= $row['id'] ?>/<?php
                                                        $text = $row['game_name'];
                                                        $lower = strtolower($text);
                                                        $revspace = str_replace(" ", "-", $lower);
                                                        echo $revspace;
                                                        ?>" class="box large block relative overflow-hidden rounded-xl upward cursor-pointer transition duration-300 overlay">
                        <div class="card-body absolute w-full h-full ">
                            <img src="<?= $row['game_image_url'] ?>" class="absolute w-full h-full object-cover" alt="<?= $row['game_name'] ?>">
                            <h2 style="z-index: 9;" class="text-white absolute  bottom-0 left-0 px-2 py-2"><?= $row['game_name'] ?></h2>
                        </div>
                    </a>
                <?php } ?>
                <?php
                $run = mysqli_query($con, "select * from zon_games order by id desc limit 1,63");
                while ($row = mysqli_fetch_assoc($run)) {
                ?>
                    <a href="single/<?= $row['id'] ?>/<?php
                                                        $text = $row['game_name'];
                                                        $lower = strtolower($text);
                                                        $revspace = str_replace(" ", "-", $lower);
                                                        echo $revspace;
                                                        ?>" class="box block relative overflow-hidden rounded-xl upward cursor-pointer transition duration-300 overlay">
                        <div class="card-body absolute w-full h-full ">
                            <img src="<?= $row['game_image_url'] ?>" class="absolute w-full h-full object-cover" alt="<?= $row['game_name'] ?>">
                            <h2 style="z-index: 9;" class="text-white absolute  bottom-0 left-0 px-2 py-2"><?= $row['game_name'] ?></h2>
                        </div>
                    </a>
                <?php } ?>
            </div>
            <?php // First Game Container End ?>

            <?php // Start Advertisement Area No. 1 ?>
            <?php
            $run = mysqli_query($con, "select * from zon_ads limit 1,1");
            while ($row = mysqli_fetch_assoc($run)) {
            ?>
                <?php if ($row['status'] == 0) { ?>
                    <div class="advertisement flex mt-6 relative overflow-hidden justify-center ">
                        <div class="banner">
                            <?= $row['code'] ?>
                        </div>
                    </div>
            <?php }
            } ?>
            <?php // End Advertisement Area No. 1 ?>

            <?php // Showing Games By Category Action  ?>
            <h2 class="heading font-bold text-2xl mb-4 text-gray-800 mt-12 dark:text-gray-200">Action Games</h2>
            <div class="grid">
                <?php
                $run = mysqli_query($con, "SELECT * from zon_games where game_category='Action' && game_played > 50 order by id desc limit 1");
                while ($row = mysqli_fetch_assoc($run)) {
                ?>
                    <a href="single/<?= $row['id'] ?>/<?php
                                                        $text = $row['game_name'];
                                                        $lower = strtolower($text);
                                                        $revspace = str_replace(" ", "-", $lower);
                                                        echo $revspace;
                                                        ?>" class="box block relative overflow-hidden large float-right rounded-xl overflow-hidden upward {scale-up} cursor-pointer transition duration-300 overlay">
                        <img src="<?= $row['game_image_url'] ?>" class="w-full h-full object-cover" alt="<?= $row['game_name'] ?>">
                        <h2 style="z-index: 9;" class="text-white absolute  bottom-0 left-0 px-2 py-2"><?= $row['game_name'] ?></h2>
                    </a>
                <?php } ?>
                <?php
                $run = mysqli_query($con, "SELECT * from zon_games where game_category='Action' order by id desc   limit 54");
                while ($row = mysqli_fetch_assoc($run)) {
                ?>
                    <a href="single/<?= $row['id'] ?>/<?php
                                                        $text = $row['game_name'];
                                                        $lower = strtolower($text);
                                                        $revspace = str_replace(" ", "-", $lower);
                                                        echo $revspace;
                                                        ?>" class="box block relative <?php if ($row['game_played'] > 10) {
                                                                                            echo "large";
                                                                                        } ?> overflow-hidden rounded-xl overflow-hidden upward {scale-up} cursor-pointer transition duration-300 overlay">
                        <img src="<?= $row['game_image_url'] ?>" class="w-full h-full object-cover" alt="<?= $row['game_name'] ?>">
                        <h2 style="z-index: 9;" class="text-white absolute  bottom-0 left-0 px-2 py-2"><?= $row['game_name'] ?></h2>
                    </a>
                <?php } ?>
            </div>
            <?php // End Action Category Games  ?>

            <?php // Start Advertisement Area No. 2 ?>
            <?php
            $run = mysqli_query($con, "select * from zon_ads limit 1,1");
            while ($row = mysqli_fetch_assoc($run)) {
            ?>
                <?php if ($row['status'] == 0) { ?>
                    <div class="advertisement flex mt-6 relative overflow-hidden justify-center ">
                        <div class="banner">
                            <?= $row['code'] ?>
                        </div>
                    </div>
            <?php }
            } ?>
            <?php // End Start Advertisement Area No. 2 ?>

            <?php // Games By Categories vise ?>
            <div class="drill flex resp gap-3">
                <div class="w-full">
                    <div class="heading flex items-center justify-between">
                        <h2 class="font-bold text-2xl mb-4 text-gray-800 mt-12 dark:text-gray-200">Action Games</h2>
                        <a class="text-gray-400 block mr-12 mt-6" href="<?php echo $site_url ?>game/action">view</a>
                    </div>
                    <?php // Showing Games By Category Action  ?>
                    <div class="grid">
                        <?php
                        $run = mysqli_query($con, "SELECT * from zon_games where game_category='Action' order by id desc   limit 18");
                        while ($row = mysqli_fetch_assoc($run)) {
                        ?>
                            <a href="single/<?= $row['id'] ?>/<?php
                                                                $text = $row['game_name'];
                                                                $lower = strtolower($text);
                                                                $revspace = str_replace(" ", "-", $lower);
                                                                echo $revspace;
                                                                ?>" class="box block relative overflow-hidden rounded-xl overflow-hidden upward {scale-up} cursor-pointer transition duration-300 overlay">
                                <img src="<?= $row['game_image_url'] ?>" class="w-full h-full object-cover" alt="<?= $row['game_name'] ?>">
                                <h2 style="z-index: 9;" class="text-white absolute  bottom-0 left-0 px-2 py-2"><?= $row['game_name'] ?></h2>
                            </a>
                        <?php } ?>
                    </div>
                    <?php // End Action Category Games  ?>
                </div>

                <?php // Showing Games By Category Shooting  ?>
                <div class="w-full">
                    <div class="heading flex items-center justify-between">
                        <h2 class="font-bold text-2xl mb-4 text-gray-800 mt-12 dark:text-gray-200">Shooting Games</h2>
                        <a class="text-gray-400 block mr-12 mt-6" href="<?php echo $site_url ?>game/Shooting">view</a>
                    </div>
                    <div class="grid">
                        <?php
                        $run = mysqli_query($con, "SELECT * from zon_games where game_category='Shooting' order by id desc   limit 18");
                        while ($row = mysqli_fetch_assoc($run)) {
                        ?>
                            <a href="single/<?= $row['id'] ?>/<?php
                                                                $text = $row['game_name'];
                                                                $lower = strtolower($text);
                                                                $revspace = str_replace(" ", "-", $lower);
                                                                echo $revspace;
                                                                ?>" class="box block relative overflow-hidden rounded-xl overflow-hidden upward {scale-up} cursor-pointer transition duration-300 overlay">
                                <img src="<?= $row['game_image_url'] ?>" class="w-full h-full object-cover" alt="<?= $row['game_name'] ?>">
                                <h2 style="z-index: 9;" class="text-white absolute  bottom-0 left-0 px-2 py-2"><?= $row['game_name'] ?></h2>
                            </a>
                        <?php } ?>
                    </div>
                </div>
                <?php // End Shooting Category Games  ?>

                <?php // Showing Games By Category Puzzles  ?>
                <div class="w-full">
                    <div class="heading flex items-center justify-between">
                        <h2 class="font-bold text-2xl mb-4 text-gray-800 mt-12 dark:text-gray-200">Puzzles Games</h2>
                        <a class="text-gray-400 block mr-12 mt-6" href="<?php echo $site_url ?>game/puzzles">view</a>
                    </div>
                    <div class="grid">
                        <?php
                        $run = mysqli_query($con, "SELECT * from zon_games where game_category='Puzzles' order by id desc   limit 18");
                        while ($row = mysqli_fetch_assoc($run)) {
                        ?>
                            <a href="single/<?= $row['id'] ?>/<?php
                                                                $text = $row['game_name'];
                                                                $lower = strtolower($text);
                                                                $revspace = str_replace(" ", "-", $lower);
                                                                echo $revspace;
                                                                ?>" class="box block relative overflow-hidden rounded-xl overflow-hidden upward {scale-up} cursor-pointer transition duration-300 overlay">
                                <img src="<?= $row['game_image_url'] ?>" class="w-full h-full object-cover" alt="<?= $row['game_name'] ?>">
                                <h2 style="z-index: 9;" class="text-white absolute  bottom-0 left-0 px-2 py-2"><?= $row['game_name'] ?></h2>
                            </a>
                        <?php } ?>
                    </div>
                </div>
                <?php // End Puzzles Category Games  ?>
                
            </div>
            <?php // End Games By Categories vise ?>
        </div>
    </div>
    </div>
    </div>
    
    <?php // Include Footer ?>
    <?php include("includes/footer.php") ?>

</body>
<?php // Body End ?>

</html>