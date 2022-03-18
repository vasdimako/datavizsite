$(function() {
    let url = window.location.href;
    $('.navigation li a').each(function() {
        var $href = ($(this).attr('href')).substring(1);
        if (url.includes($href)) {
            $(this).addClass('on');
        } else {
            $(this).removeClass('on');
        }
        console.log(this.className)
    });
});