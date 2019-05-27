state = [false, false];

$(".research_item")
    .css('line-height', '20px')
    .css("height", "60px")
    .css('overflow', 'hidden')
    .css('background', 'linear-gradient(transparent, #FFF) left repeat');

for (let i = 1; i < 3; i++) {
    $("#btnr" + i).on("click", function () {
        if (state[i] === false) {
            $("#pi" + i).css("height", "auto");
            $("#btnr" + i).html("Show Less");
            state[i] = true;
        } else {
            $("#pi" + i).css("height", "60px");
            $("#btnr" + i).html("Show More");
            state[i] = false;
        }
    });
}