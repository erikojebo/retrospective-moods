$(document).ready(function () {

    $(window).on('resize', function () {

        var min = Math.min($(window).width(), $(window).height());

        $("#selectedImage").css({
            width     : min,
            height    : min
        });
    });

    $(window).trigger('resize');

    $("#selectedImage").click(function () {
        console.log("click");
	    $("#overlay").hide();
        $("#content").show();
    });

	$("ol img").click(function () {

        var imageSource = $(this).attr("src");
        
        $("#selectedImage").attr("src", imageSource);
        $("#overlay").show();
        $("#content").hide();
    });
});
