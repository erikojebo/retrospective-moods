function getMaximizedImageSize () {
	return Math.min($(window).width(), $(window).height());
}

$(document).ready(function () {

    $(window).on('resize', function () {

        var min = getMaximizedImageSize();

        $("#selectedImage").css({
            width : min,
            height : min
        });
    });

    $(window).trigger('resize');

    $("#selectedImage").click(function () {
	    $("#overlay").fadeOut(300);
        $("#content").fadeIn(300);
    });

	$("ol img").click(function () {

        var imageSource = $(this).attr("src");
        
        $("#selectedImage").css({
            width: $(this).width(),
            height: $(this).height(),
            left: $(this).position().left,
            top: $(this).position().top
        });

        $("#selectedImage").attr("src", imageSource);
        $("#overlay").fadeIn(300);
        $("#content").fadeOut(300);

        var size = getMaximizedImageSize();
        var left = $(window).width() / 2.0 - size / 2.0;
        var top = $(window).height() / 2.0 - size / 2.0;


        $("#selectedImage").animate({
            top: top + 'px',
            left: left + 'px',
            width: size + "px",
            height: size + "px"
        }, 300);
    });
});
