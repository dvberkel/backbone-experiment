$(function(){
    $(".topbar").dropdown();
    $(".nav a").click(function(){
        $(".nav li").removeClass("active");
        $(this).parents("li").addClass("active");
    });
    $(".brand").click(function(){
	$(".nav li").removeClass("active");
    });
});