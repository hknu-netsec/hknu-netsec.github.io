$(window).on("resize", function () {
   if ($(window).width() < 1024) {
       $("body").css("margin-left", "0");
   } else {
       $("body").css("margin-left", "calc(50% - 512px)");
   }
});