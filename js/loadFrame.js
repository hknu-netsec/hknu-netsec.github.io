$(window).on("load", function () {
    $("#mainFrame").load("https://hknu-netsec.github.io/docs/members.html");

    $("#navProfessor").on("click", function () {
        $("#mainFrame").load("https://hknu-netsec.github.io/docs/professor.html");
    })
    $("#navMembers").on("click", function () {
        $("#mainFrame").load("https://hknu-netsec.github.io/docs/members.html");
    })
});