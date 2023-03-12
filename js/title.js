// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      
        document.title = ' o(≧口≦)o  看过来看过来！';
        clearTimeout(titleTime);
    }
    else {
       
        document.title = '(ฅ>ω<*ฅ) 嘿嘿～' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
