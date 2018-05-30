$(window).on("load", function () {
    $("#mainFrame").load("https://hknu-netsec.github.io/docs/members.html");

    $("#navProfessor").on("click", function () {
        $("#mainFrame").load("https://hknu-netsec.gihut.io/docs/professor.html")
    })
});