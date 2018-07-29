$(window).on("load", function () {
    let navs = ["home", "professor", "members", "researches"];

    $("#main_frame").load("docs/home.html");

    for (let i = 0; i < navs.length; i++) {
        $("#btn_" + navs[i]).on("click", function () {
            $("#main_frame").load("docs/" + navs[i] + ".html");
        });
    }
});