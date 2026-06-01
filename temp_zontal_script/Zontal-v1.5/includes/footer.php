<script src="<?php echo $site_url ?>static/js/main.js"></script>
<footer class="mt-12">
    <?php // Footer Content 
    ?>
    <div class="container-zon px-4 text-zinc-800 dark:text-gray-400 dark:font-light font-medium text-sm py-2">
        <?php echo Zon_Config('footer_content') ?>
    </div>
    <div class="dark:bg-zinc-900 bg-gray-200 py-3 px-4">
        <div class="container-zon">
            <div class="flex justify-between flex-md-column items-center">
                <p class="text-gray-500 text-xs">© All Copyrights Reserved By <?php echo Zon_Config('site_name') ?>. Made By <a href="https://www.codester.com/MvnThemes/" class="text-blue-600">Mvnthemes</a></p>
                <?php // Pages Links 
                ?>
                <ul class="flex">
                    <?php // Pages Loop 
                    ?>
                    <?php $sql = "select * from zon_pages";
                    $run = mysqli_query($con, $sql);
                    while ($row = mysqli_fetch_assoc($run)) { ?>
                        <?php $text = $row['title'];
                        $lower = strtolower($text);
                        $revspace = str_replace(" ", "-", $lower); ?>
                        <li><a class="block px-3 text-xs text-gray-400" href="page/<?= $row['id'] ?>/<?php echo $revspace; ?>"><?= $row['title'] ?></a></li>
                    <?php } ?>
                    <?php // Pages Loop End 
                    ?>
                </ul>
                <?php // End Pages Links 
                ?>
            </div>
        </div>
    </div>
</footer>
<script>
var button_1=document.querySelector(".cat-container .left"),button_2=document.querySelector(".cat-container .right"),cat_container=document.querySelector(".cat-item-container");null!==button_1&&button_1.addEventListener("click",()=>{cat_container.scrollLeft-=300,cat_container.scrollLeft&&button_2.classList.remove("hidden"),0==cat_container.scrollLeft&&button_1.classList.add("hidden")}),null!==button_2&&button_2.addEventListener("click",()=>{cat_container.scrollLeft+=300;let e=cat_container.scrollWidth-cat_container.clientWidth;cat_container.scrollLeft>e&&button_2.classList.add("hidden"),cat_container.scrollLeft>20&&button_1.classList.remove("hidden")});var dropdownButton=document.querySelectorAll(".dropdown");if(null!==dropdownButton){dropdownButton.forEach(t=>{t.addEventListener("click",e)});function e(){var e=this.getAttribute("data-target");document.querySelector(e).classList.toggle("active-dropdown")}}var open_Search=document.getElementById("open-search"),close_Search=document.getElementById("close-search");null!==open_Search&&open_Search.addEventListener("click",()=>{document.querySelector(".mobile-header").classList.toggle("active-search")}),null!==close_Search&&close_Search.addEventListener("click",()=>{document.querySelector(".mobile-header").classList.remove("active-search")});
const slider=document.querySelectorAll("#Slider"),ScrollLeft=e=>{slider.forEach(l=>{l.scrollLeft-=e})},ScrollRight=e=>{slider.forEach(l=>{l.scrollLeft-=e})},ModeChnager=document.querySelector(".mode-changer"),MenuButton=document.querySelector(".menu"),offcanvas=document.querySelector(".offcanvas"),offcanvasClose=document.querySelector(".close-offcanvas");null!==ModeChnager&&ModeChnager.addEventListener("click",e=>{}),null!==MenuButton&&MenuButton.addEventListener("click",()=>{offcanvas.classList.toggle("active")}),null!==offcanvasClose&&offcanvasClose.addEventListener("click",()=>{offcanvas.classList.toggle("active")});const SCREEN=document.getElementById("screen"),FULL_SCREEN_BUTTON=document.getElementById("full-screen");null!==FULL_SCREEN_BUTTON&&FULL_SCREEN_BUTTON.addEventListener("click",()=>{document.querySelector(".screen").classList.add("active-screen"),document.querySelector(".close-frame").classList.remove("hidden")});var closeFrame=document.querySelector(".close-frame");null!==closeFrame&&document.querySelector(".close-frame").addEventListener("click",()=>{document.querySelector(".screen").classList.remove("active-screen")});var AvatarImgSrc=document.getElementById("avatar_input");null!==AvatarImgSrc&&AvatarImgSrc.addEventListener("change",()=>{var e=URL.createObjectURL(AvatarImgSrc.files[0]);document.getElementById("avatar").src=e,document.getElementById("upload_label").classList.add("hidden"),document.getElementById("avatar").style.zIndex="1",AvatarImgSrc.style.zIndex="2"}),null!==document.getElementById("current_url")&&(document.getElementById("current_url").value=document.URL);
</script>
<script src="<?php echo $site_url ?>static/js/jquery-3.4.1.min.js"></script>
<script>
    $("#game_like").on("click", () => {

        var user_id = <?php User_Data('id') ?>;
        var game_id = <?php if(isset($_GET['id'])) return Game_Data(Secure_DATA($_GET['id']), 'id'); ?>;
        $.ajax({
            type: "POST",
            url: "<?php echo $site_url ?>includes/ajax/insert-likes.php",
            data: "user_id=" + user_id + "&game_id=" + game_id + "&unlike=false",
            success: function(data) {
                if (data == "Inserted") {
                    $("#game_like").addClass("text-gray-100");
                    $("#game_like").addClass("bg-blue-500");

                    $("#game_unlike").removeClass("text-gray-100");
                    $("#game_unlike").removeClass("bg-blue-500");


                }
                if (data == "Deleted") {
                    $("#game_like").removeClass("text-gray-100");
                    $("#game_like").removeClass("bg-blue-500");
                }

            }
        });


    });

    $("#game_unlike").on("click", () => {

        var user_id = <?php User_Data('id') ?>;
        var game_id = <?php if(isset($_GET['id'])) return Game_Data(Secure_DATA($_GET['id']), 'id')   ?>;


        $.ajax({
            type: "POST",
            url: "<?php echo $site_url ?>includes/ajax/insert-likes.php",
            data: "user_id=" + user_id + "&game_id=" + game_id + "&unlike=true",
            success: function(data) {
                if (data == "Success") {
                    // $("#game_like").addClass("liked");
                    $("#game_unlike").addClass("text-gray-100");
                    $("#game_unlike").addClass("bg-blue-500");

                    $("#game_like").removeClass("text-gray-100");
                    $("#game_like").removeClass("bg-blue-500");
                    // }
                }
                if (data == "Deleted") {
                    $("#game_unlike").removeClass("text-gray-100");
                    $("#game_unlike").removeClass("bg-blue-500");
                }
            }
        });


    });

    var view = 1;
    var id = <?php if(isset($_GET['id'])) return Game_Data(Secure_DATA($_GET['id']), 'id'); ?>;

    $.ajax({
        type: "POST",
        url: "<?php echo $site_url ?>includes/ajax/insert-played-views.php",
        data: "view=" + view + "&id=" + id,
        success: function(data) {}
    });
</script>
