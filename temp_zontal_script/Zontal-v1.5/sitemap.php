<?php
header('Content-type: application/xml');
echo '<?xml version="1.0" encoding="UTF-8"?>
<urlset  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">';
require_once("includes/config.php");
$game_query = "select * from zon_games order by id desc";
$run = mysqli_query($con, $game_query);
while ($row = mysqli_fetch_assoc($run)) { 
$text = $row['game_name']; $lower = strtolower($text); $revspace = str_replace("&", "-", $lower); $revspace = str_replace(" ", "-", $revspace);?>
<url>
<loc><?php echo $site_url.'single/'.$row['id'].'/'?><?php echo $revspace ?></loc>
</url>
<?php }?>
<?php  echo '</urlset>'; ?>