$(window).on("load", function () {
    let navs = ["about" ,"home", "professor", "students", "publications", 'projects', "events"];

    $("#main_frame").load("docs/home.html");

    for (let i = 0; i < navs.length; i++) {
        $("#btn_" + navs[i]).on("click", function () {
            $("#main_frame").load("docs/" + navs[i] + ".html");
        });
    }
});