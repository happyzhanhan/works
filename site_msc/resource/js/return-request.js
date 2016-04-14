/**
 * Created by wwp9 on 2016-04-10.
 */
//退款页面js
//ps.事件绑定在了body上
function retrun_request() {
    //左侧商家信息下拉
    $('body').on('click','.good-info dt',function () {
        var $dom = $(this).children('.merchant-info');
        if($dom.is('.hide')){
            $dom.removeClass('hide');
        }else{
            $dom.addClass('hide');
        }
    })
    //右侧退款原因下拉及选择
    $('body').on('click','.apply_reason .select .opt-for',function () {
        var $dom = $(this).siblings('ul');
        $dom.removeClass('hide');
    })
    $('body').on('click','.apply_reason .select ul li',function () {
        $(this).addClass('current').siblings().removeClass('current').parent().addClass('hide').siblings('.opt-for').text(this.innerHTML);
    })
}
retrun_request();