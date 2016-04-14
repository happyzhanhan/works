/**
 * Created by 文平 on 2016-03-06.
 */
function siteNav(){
    this.dom = $('.siteNav .siteNavBdR li:has(.content)');
    this.dom.hover(overFn,outFn);
    function overFn(){
        $(this).siblings().removeClass('current').find('.content').slideUp(100).end().end().addClass('current').children('.content').slideDown(100);
    }
    function outFn(){
        $(this).removeClass('current').children('.content').slideUp(100);
    }
    this.dom.filter('.app').find('.content li').click(function(){
        $this = $(this);
        $this.addClass('activate').siblings().removeClass('activate').parent().siblings('.QRCode').children().hide().eq($this.index()).show();
    })
}
$(function(){
    siteNav();
})