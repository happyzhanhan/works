

//    初始化

var verifyRetrievePW = _verify.create();
//配置父节点，和表单单元【必须】
verifyRetrievePW.configDom('.form-wrap', '.form-wrap .formSection');
//配置提示信息【必须】
verifyRetrievePW.configMessageFn(retrievePWVerifyMessage);
//配置提示新式类名【必须】
verifyRetrievePW.configStatusClassFn(['succee', 'error', 'activate', 'message']);
//绑定
verifyRetrievePW.trigger();

var loginClass = Class.extend({
    init: function () {
        this.model._parent = this;
        this.view._parent = this;
        this.view.configDom();
        this.model.initN = null;
    },
    trigger: function () {
        this.view.trigger(arguments[0]);
    },
    model: {

        appInfoShow: function () {
            this._parent.view.getB1(arguments[0]) && this._parent.view.getAppInfoDom(arguments[0]).show();
        },
        appinfoHide:function(){
            this._parent.view.getB1(arguments[0]) && this._parent.view.getAppInfoDom(arguments[0]).hide();
        },
        cutOrdinaryPhone:function(){
            var project;
            project = this._parent.view.getPWDom(arguments[0]);
            project[0].show();
            project[1].hide();
        },
        cutPcApp:function(){
            var $dom;
            $dom = this._parent.view.getPcAppDom(arguments[0]);
            $dom[0][0].show();
            $dom[0][1].show();
            $dom[1][0].hide();
            $dom[1][1].hide();
        },
    },
    view: {
        cutHeight:function(){
            !this._parent.model.initN && this._parent.model.dom.wrap.addClass('login-layout2');
        },
        getAppInfoDom:function (){
            return $(arguments[0]).find('span');
        },
        getB1: function () {
            return $(arguments[0]).is('.icon-1');
        },
        getB2: function () {
            return $(arguments[0]).is('#ordinary');
        },
        getPWDom:function(){
            var $dom,$other;
            if(this.getB2(arguments[0])){
                $dom = this._parent.model.dom.formSections.filter('.password');
                $other = this._parent.model.dom.formSections.filter('.trendsPW');
            }else{
                $other = this._parent.model.dom.formSections.filter('.password');
                $dom = this._parent.model.dom.formSections.filter('.trendsPW');
            }
            return [$dom,$other];
        },
        getPcAppDom:function(){
            var $show,$hide;
            $show = [];
            $hide = [];
            if(this.getB1(arguments[0])){
                $show[0] = this._parent.model.dom.cutPcAppBtn.filter('.icon-2');
                $show[1] = this._parent.model.dom.app;
                $hide[0] = this._parent.model.dom.cutPcAppBtn.filter('.icon-1');
                $hide[1] = this._parent.model.dom.pc;
            }else{
                $hide[0] = this._parent.model.dom.cutPcAppBtn.filter('.icon-2');
                $hide[1] = this._parent.model.dom.app;
                $show[0] = this._parent.model.dom.cutPcAppBtn.filter('.icon-1');
                $show[1] = this._parent.model.dom.pc;
            }
            return [$show,$hide]
        },
        configDom: function () {
            this._parent.model.dom = {};
            this._parent.model.dom.wrap = $('.loginMain .login-layout');
            this._parent.model.dom.formSections = $('.loginMain .login-layout .login-main fieldset .formSection');
            this._parent.model.dom.cutPcAppBtn = this._parent.model.dom.wrap.find('.cut-pc-app .icon-1,.cut-pc-app .icon-2');
            this._parent.model.dom.appInfo = this._parent.model.dom.wrap.find('.cut-pc-app .icon-1,.cut-pc-app .icon-2');
            this._parent.model.dom.cutOrdinaryPhoneBtn = this._parent.model.dom.wrap.find('.cut-p-m input');
            this._parent.model.dom.pc = this._parent.model.dom.wrap.find('.pc');
            this._parent.model.dom.app = this._parent.model.dom.wrap.find('.app');
        },
        trigger: function () {
            var _this = this;
            this._parent.model.dom.cutPcAppBtn.hover(function(){
                _this._parent.model.appInfoShow(this);
            },function(){
                _this._parent.model.appinfoHide(this);
            });
            this._parent.model.dom.cutOrdinaryPhoneBtn.change(function(){
                _this._parent.model.cutOrdinaryPhone(this);
            });
            this._parent.model.dom.cutPcAppBtn.click(function(){
                _this._parent.model.cutPcApp(this);
                _this.cutHeight();
            })
            this._parent.model.dom.formSections.find('input').click(function(){
                _this.cutHeight();
            })
        }
    }
});
var loginFn = loginClass.create();
loginFn.trigger();
