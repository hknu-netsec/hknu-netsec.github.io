$(window).on("load", function () {
    $("#mainFrame").load("https://hknu-netsec.github.io/docs/home.html");

    $(".nav").on({
        mouseenter: function () {
            $(this).css("background-color", "#E96D27");
        },
        mouseleave: function () {
            $(this).css("background-color", "#005B9E");
        }
    });

    $("#logo").on("click", function () {
        $("#mainFrame").load("https://hknu-netsec.github.io/docs/home.html");
    });
    $("#navProfessor").on("click", function () {
        $("#mainFrame").load("https://hknu-netsec.github.io/docs/professor.html");
    });
    $("#navMembers").on("click", function () {
        $("#mainFrame").load("https://hknu-netsec.github.io/docs/members.html");
    });
});