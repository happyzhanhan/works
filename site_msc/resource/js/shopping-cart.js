/**
 * Created by wwp9 on 2016-04-11.
 */


/*
 * 购物车确认订单信息
 *
 * 1.选择发货地址
 * 2.弹出新增地址
 *
 * */
var _shoping_cart;
_shoping_cart = Class.extend({
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
        select_merchant:function () {
            var checked = this._parent.view.getCheckedFn(arguments[0]);
            $(arguments[0]).parents('.tbody_cart').find(':checkbox').prop('checked',checked);
            this._parent.view.checkAllFn();
            this.count();
        },
        select_good:function () {
            var checked = this._parent.view.getCheckedFn(arguments[0]);
            $(arguments[0])._parents('.tbody_cart').find(':checkbox').prop('checked',checked);
            this.checkMerchantFn();
            this._parent.view.checkAllFn();
            this.count();
        },
        select_all:function () {
            var checked = this._parent.view.getCheckedFn(arguments[0]);
            this.dom.checkbox_all.prop('checked',checked);
            this.count();
        },
        clear_select:function () {
            this.dom.checkbox_all.prop('checked',false);
            this.count();
        },
        delete_seclect:function () {
            this._parent.view.getSelectedFn().remove();
            this._parent.view.clearEmptymerchant();
            this.count();
        },
        count:function () {

        },
        modified:function () {
            var index,$numDom;
            index = $(arguments[0]).index();
            $numDom = this._parent.view.getNumDomFn(arguments[0]);
            !index?$numDom.val($numDom.val()/1+1):$numDom.val($numDom.val()/1-1);
            this._parent.view.disposeFn1($numDom);
            this.count();
        },importNum:function () {
            arguments[0].value = this._parent.view.disposeFn2(arguments[0].value);
            this._parent.view.disposeFn1($(arguments[0]));
            this.count();
        },delete_self:function () {
            this._parent.view.getSelfFn(arguments[0]).remove();
            this._parent.view.clearEmptymerchant();
            this.count();
        }
    },
    view: {
        disposeFn2:function () {
            return arguments[0].replace(/[^0-9,]*/ig,'')/1;
        },
        disposeFn1:function () {
            !arguments[0].val()/1<=1&&(arguments[0].val(1).siblings('.minus').css('visibility','hidden'));
        },
        getNumDomFn:function () {
            return $(arguments[0]).siblings('input');
        },
        getCheckedFn:function () {
            return $(arguments[0]).is(':checked');
        },
        getSelfFn:function () {
            return $(arguments[0]).parents('.tbody_cart tbody tr');
        },
        getSelectedFn:function () {
           return $('.shopping-cart .tbody_cart tbody tr:has(":checked")');
        },
        clearEmptymerchant:function () {
            $('.shopping-cart .tbody_cart').each(function () {
                !$(this).find('tbody tr').length&&$(this).remove();
            })
        },
        configDom: function () {
            this._parent.model.dom = {};
            this._parent.model.dom.checkAllFn = $('.shopping-cart h1 .operation :chechbox,.shopping-cart .close-an-account .checkbox :checkbox');
            this._parent.model.dom.checkbox_all = $('.shopping-cart :chechbox');
            this._parent.model.dom.number = $('.shopping-cart .close-an-account .opt-for em').eq(0);
            this._parent.model.dom.profit = $('.shopping-cart .close-an-account .opt-for em').eq(1);
            this._parent.model.dom.total_prices = $('.shopping-cart .close-an-account .price strong');
            this._parent.model.dom.resolution_content = $('.shopping-cart .close-an-account .resolution .resolution-content dl');
            this._parent.model.dom.economize = $('.shopping-cart .close-an-account .price span');

        },
        configData: function () {

        },

        checkMerchantFn:function () {
            var $p = $(arguments[0]).parents('.tbody_cart tbody');
            $p.find(':checkbox').length === $p.find(':checked').length ?$p.siblings('thead').find('checkbox').prop('checked',true):$p.siblings('thead').find('checkbox').prop('checked',false);
        },
        checkAllFn:function () {
            $('.shopping-cart .tbody_cart :checkbox').length === $('.shopping-cart .tbody_cart :checked').length ?this._parent.model.dom.checkAllFn.prop('checked',true):this._parent.model.dom.checkAllFn.prop('checked',false);
        },
        trigger: function () {
            var _this;
            _this = this;
            //按商家选择
            $('body').on('change', '.shopping-cart .tbody_cart thead th :chechbox', function () {
                _this._parent.model.select_merchant(this);
            })
            //商品选择操作
            $('body').on('change', '.shopping-cart .tbody_cart tbody td :chechbox', function () {
                _this._parent.model.select_good(this);
            })
            //全选操作
            $('body').on('change', '.shopping-cart h1 .operation :chechbox,.shopping-cart .close-an-account .checkbox :checkbox', function () {
                _this._parent.model.select_all(this);
            })
            //清空选中操作
            $('body').on('change', '.shopping-cart h1 .operation :chechbox,.shopping-cart .close-an-account .checkbox .clearChoose', function () {
                _this._parent.model.clear_select();
            })
            //删除选中
            $('body').on('click', '.shopping-cart h1 .operation cite:contents("删除选中的商品")', function () {
                _this._parent.model.delete_seclect();
            })
            //数量加减
            $('body').on('click', '.shopping-cart .tbody_cart .num i', function () {
                _this._parent.model.modified(this);
            })
            //数量输入
            $('body').on('change', '.shopping-cart .tbody_cart .num input', function () {
                _this._parent.model.importNum(this);
            })
            //单商品删除
            $('body').on('click', '.shopping-cart .tbody_cart table a:contents("删除")', function () {
                _this._parent.model.delete_self(this);
            })
            //拆分滚动
            $('body').on('click', '.shopping-cart .close-an-account .resolution .resolution-content i', function () {

            })
            //提交
            $('body').on('click', '.shopping-cart .close-an-account .affirm button', function () {

            })


        }
    }
})
var shoping_cart = _shoping_cart.create();
shoping_cart.trigger();
