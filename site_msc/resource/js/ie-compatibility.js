/**
 * Created by 文平 on 2016-03-21.
 */

$(document).ready(function () {

    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    if (isIE) {
        var IE5 = IE55 = IE6 = IE7 = IE8 = false;
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = eval(parseInt(RegExp["$1"]));
        if (fIEVersion < 9) {
            alert('    浏览器版本过低，无法正常显示，为了更好的体验，请安装以下插件；\n    本插件由谷歌开发，百度提供下载，请放心安装使用。\n    安装完成后，请重启浏览器！');
            location.href = 'http://dlsw.baidu.com/sw-search-sp/soft/78/17803/GoogleChromeframeStandaloneEnterprise.4144293914.msi';
        }
    }
})
