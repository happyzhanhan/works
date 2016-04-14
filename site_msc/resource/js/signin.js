/**
 * Created by wwp9 on 2016-03-29.
 */

//    初始化
var verifySigin = _verify.create();
//配置父节点，和表单单元【必须】
verifySigin.configDom('.sigin-form .form-wrap', '.sigin-form .form-wrap .formSection');
//配置提示信息【必须】
verifySigin.configMessageFn(siginVerifyMessage);
//配置提示新式类名【必须】
verifySigin.configStatusClassFn(['succee', 'error', 'activate', 'message']);
//绑定
verifySigin.trigger();


var siginClass;
siginClass = Class.extend({
    init: function () {
        this.model._parent = this;
        this.view._parent = this;
        this.view.configDom();
    },
    cutFn: function () {
        this.model.cutFn(arguments[0]);
    },
    trigger: function () {
        this.view.trigger(arguments[0]);
    },
    model: {
        cutFn: function () {
            var $dom;
            $dom = this._parent.view.getCutDom(arguments[0]);
            $dom[0].hide();
            $dom[1].show();
        }
    },
    view: {
        configDom: function () {
            var domText;
            domText = arguments[0];
            if (!domText) {
                this._parent.model.cutBtn = $('.sigin-form .form-wrap .phone .cut,.sigin-form .form-wrap .email .cut');
            } else {
                this._parent.model.cutBtn = $(domText[0]);
            }
        },
        getCutDom: function () {
            var $this, $parent, $other;
            $this = $(arguments[0]);
            $parent = $this.parent();
            $other = $parent.is('.phone') ? $parent.siblings('.email') : $parent.siblings('.phone');
            return [$parent, $other];
        },
        trigger: function () {
            var _this = this;
            this._parent.model.cutBtn.click(function () {
                _this._parent.cutFn(this);
            })
        }
    }
})
var siginFn = siginClass.create();
siginFn.trigger();
