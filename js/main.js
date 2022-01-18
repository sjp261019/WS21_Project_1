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

    $("#next1").on("click", function(){
        $(".lyrics").hide("slow");
        $(".typing").show("slow");
        $(".lyric3").delay(4500).show("slow");
        $(this).animate({"opacity":"0"}, 800, "swing");
        $(this).delay(500).hide("slow");
        $("#next2").delay(8800).show("slow");
        });
    
    $("#next2").on("click", function(){
        $(".typing").hide("slow");
        $(".lyric3").delay(700).hide("slow");
        $(this).animate({"opacity":"0"}, 800, "swing");
        $(this).delay(500).hide("slow");
        });
});