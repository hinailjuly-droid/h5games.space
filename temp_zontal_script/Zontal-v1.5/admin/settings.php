<?php $page = "Settings"; ?>
<?php require "../includes/function_general.php"; ?>
<?php include("includes/header.php") ?>

<body>
    <main class="d-flex">
        <?php
            include("includes/sidebar.php");
        ?>
        <form action="functions/configuration" method="post" enctype="multipart/form-data" class="main w-full px-12 py-6">
            <div class="games-list mt-6">
                <div class="tabs flex justify-center gap-3">
                    <button type="button" data-target="#general-tab"
                        class="bg-blue-500 shadow-lg py-2 px-3 rounded-md text-xs text-gray-100 tab-button">General</button>
                    <button type="button" data-target="#seo-tab"
                        class="py-2 px-3 rounded-lg text-xs text-gray-500 tab-button">SEO</button>
                </div>

                <div id="general-tab" class="tab">
                    <div class="flex gap-6 mt-6">
                        <div class="input-group flex flex-column">
                            <label class="text-gray-500 uppercase text-[10px] mb-2">Site name</label>
                            <input
                                class="py-[15px] text-gray-500 dark:bg-zinc-900 outline-none focus:outline focus:outline-blue-500 transition-sm  px-3 text-xs"
                                type="text" value="<?php echo Zon_Config('site_name')?>" name="site_name" placeholder="Site name">
                        </div>
                        <div class="input-group flex flex-column">
                            <label class="text-gray-500 uppercase text-[10px] mb-2">Profile tagline</label>
                            <input
                                class="py-[15px] text-gray-500 dark:bg-zinc-900 outline-none focus:outline focus:outline-blue-500 transition-sm  px-3 text-xs"
                                type="text" value="<?php echo Zon_Config('profile_tagline')?>" name="profile_tagline" placeholder="Site name">
                        </div>
                    </div>
                    <div class="flex gap-6 mt-6">
                        <div class="input-group flex flex-column">
                            <label class="text-gray-500 uppercase text-[10px] mb-2">Logo</label>
                            <input
                                class="text-gray-500 border-2 dark:border-zinc-800 dark:bg-zinc-900 text-gray-400 bg-[white] border-gray-200 outline-none focus:outline focus:outline-blue-500 transition-sm h-10 text-xs"
                                type="file" name="logo" placeholder="site logo">
                        </div>

                        <div class="input-group flex flex-column">
                            <label class="text-gray-500 uppercase text-[10px] mb-2">dark Logo</label>
                            <input
                                class="text-gray-500 border-2 dark:border-zinc-800 dark:bg-zinc-900 text-gray-400 bg-[white] border-gray-200 outline-none focus:outline focus:outline-blue-500 transition-sm h-10 text-xs"
                                type="file" name="dark_logo" placeholder="dark logo">
                        </div>

                        <div class="input-group flex flex-column">
                            <label class="text-gray-500 uppercase text-[10px] mb-2">favicon</label>
                            <input
                                class="text-gray-500 border-2 dark:border-zinc-800 dark:bg-zinc-900 dark:bg-zinc-900 text-gray-400 bg-[white] border-gray-200 outline-none focus:outline focus:outline-blue-500 transition-sm h-10 text-xs"
                                type="file" name="favicon" placeholder="favicon">
                        </div>
                    </div>

                    <div class="input-group flex flex-column mt-6">
                        <label class="text-gray-500 uppercase text-[10px] mb-2">head custom code</label>
                        <textarea
                            class="py-2 resize-none  text-gray-500 dark:bg-zinc-900 border-2 dark:border-zinc-800 text-gray-400 bg-[white] border-gray-200 outline-none focus:outline focus:outline-blue-500 transition-sm text-xs px-2"
                            name="head_code" cols="50" rows="16"><?php echo Zon_Config('head_code')?></textarea>
                    </div>
                    <div class="input-group flex flex-column mt-6">
                        <label class="text-gray-500 uppercase text-[10px] mb-2">footer content</label>
                        <textarea id="editor"
                            class="py-2 resize-none  text-gray-500 dark:bg-zinc-900 border-2 text-gray-400 bg-[white] border-gray-200 outline-none focus:outline focus:outline-blue-500 transition-sm text-xs px-2"
                            name="footer_content" cols="50"
                            rows="16"><?php echo Zon_Config('footer_content')?></textarea>
                    </div>
                </div>

                <div id="seo-tab" class="tab hidden">

                    <div class="input-group flex flex-column">
                        <label class="text-gray-500 uppercase text-[10px] mb-2">Site title</label>
                        <input
                            class="py-[15px] text-gray-500 dark:bg-zinc-900 outline-none focus:outline focus:outline-blue-500 transition-sm  px-3 text-xs"
                            type="text" value="<?php echo Zon_Config('site_title')?>" name="site_title" placeholder="Site title">
                    </div>

                    <div class="input-group flex flex-column mt-6">
                        <label class="text-gray-500 uppercase text-[10px] mb-2">Site Description</label>
                        <input
                            class="py-[15px] text-gray-500 dark:bg-zinc-900 outline-none focus:outline focus:outline-blue-500 transition-sm  px-3 text-xs"
                            type="text" value="<?php echo Zon_Config('site_desc')?>" name="site_desc" placeholder="Site Description">
                    </div>

                    <div class="input-group flex flex-column mt-6">
                        <label class="text-gray-500 uppercase text-[10px] mb-2">Site Keywords</label>
                        <textarea
                            class="py-[15px] dark:bg-zinc-900 text-gray-500 outline-none focus:outline focus:outline-blue-500 transition-sm  px-3 text-xs"
                            type="text" placeholder="Site Keywords" name="site_keywords"><?php echo Zon_Config('site_keywords')?></textarea>
                        <label class="text-gray-500 text-[10px] mb-2 mt-2">For Better Ranking in Search Engines</label>
                    </div>

                </div>
            </div>

            <button name="site_info" type="submit" class="bg-blue-600 py-2 px-4 text-white rounded-lg mt-4">Save</button>
        </form>
    </main>

    <script>
        ClassicEditor
            .create(document.querySelector('#editor'))
            .catch(error => {
                console.error(error);
            });
    </script>
    <?php include "includes/footer.php"; ?>
</body>

</html>