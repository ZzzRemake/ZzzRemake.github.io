var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "medias/favicon.webp");
        document.title = 'Come back😭';
        clearTimeout(titleTime);
    } else {
        $('[rel="icon"]').attr('href', "medias/favicon.webp");
        document.title = '(づ￣ 3￣)づ好好好'; titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 1000);
    }
});
