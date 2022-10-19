var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/guixinchn/image/blog/favicon.png");
        document.title = 'Come back😭';
        clearTimeout(titleTime);
    } else {
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/guixinchn/image/blog/favicon.png");
        document.title = '(づ￣ 3￣)づ好好好'; titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 1500);
    }
});
