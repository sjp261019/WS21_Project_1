$(document).ready(function(){
    $(".window1").on("mouseover", function(){
        $(this).animate({"height":"0px"}, 800, "easeOutBounce")
        });

    $(".window2").on("mouseleave", function(){
        $(".window1").animate({"height":"300px"}, 800, "easeOutBounce");
        });
    
    $(".window1").on("mouseover", function(){
        $(".blinds-string").animate({"top":"-150px"}, 800, "easeOutBounce");
        });

    $(".window2").on("mouseleave", function(){
        $(".blinds-string").animate({"top":"150px"}, 800, "easeOutBounce");
        });
});