/**
 * Created by wwp9 on 2016-04-10.
 */

/*
* 购物车确认订单信息
*
* 1.选择发货地址
* 2.弹出新增地址
*
* */
var _confirm_order_info;
_confirm_order_info = Class.extend({
    init: function () {
        this.model._parent = this;
        this.view._parent = this;
        this.model.data = {};
        this.view.configDom();
        this.view.configData();
    },
    trigger: function () {
        this.view.trigger(arguments[0]);
    },
    model: {
        selectAddr:function () {
            this._parent.view.selectAddr(arguments[0]);
            this._parent.view.getAddr($(arguments[0]));
            this._parent.view.changeAddr();
        },
        addAddress:function () {

        }
    },
    view: {
        configDom: function () {
            this._parent.model.dom = {};
            this._parent.model.dom.addr = $('.shopping-cart-confirm-order .addr li');
            this._parent.model.dom.addAddr = $('.shopping-cart-confirm-order .action-Bar a').eq(0);
            this._parent.model.dom.message = $('.shopping-cart-confirm-order .goods-info .message input');
            this._parent.model.dom.logistics = $('.shopping-cart-confirm-order .goods-info .message select');
            this._parent.model.dom.addr_info = $('.shopping-cart-confirm-order .address');
            this._parent.model.dom.addrBtn = '.shopping-cart-confirm-order .add-address button';
        },
        changeAddr:function () {
            this._parent.model.dom.addr_info.html('寄送至：'+this._parent.model.data.addr)
        },
        configData:function () {
            this.getAddr(this._parent.model.dom.addr.filter('current'));
        },
        getAddr:function () {
            var $p = arguments[0].find('.info p')
            this._parent.model.data.addr = $p.eq(1).text()+'<br>'+$p.eq(0).text()+'<br>'+$p.eq(2).text();
        },
        selectAddr:function () {
            $(arguments[0]).addClass('current').siblings().removeClass('current');
        },
        trigger: function () {
            var index,_this;
            _this = this;
            this._parent.model.dom.addr.click(function () {
                _this._parent.model.selectAddr(this);
            })
            this._parent.model.dom.addAddr.click(function (e) {
                e.preventDefault();
                index = layer.open({
                    type: 1,
                    skin: 'layui-layer-rim', //加上边框
                    title: '使用收货新地址', //加上边框
                    area: ['730px', '460px'], //宽高
                    content: $('.add-address').eq(0)
                });
            })
            //提交关闭弹窗，数据提交可以加在这里……
            $('body').on('click',this._parent.model.dom.addrBtn,function () {
                //关闭可以在数据提交完成后进行
                layer.close(index);
            })
            
        }
    }
})
var confirm_order_info = _confirm_order_info.create();
confirm_order_info.trigger();