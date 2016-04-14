/**
 * Created by 文平 on 2016-03-06.
 */
/***
 * 验证状态改变
 * 实例后：verify
 *
 * 接口：
 * @succee：成功
 * @error：报错
 * @activate：焦点提示
 * @info：普通提示
 *
 *
 * 使用：
 *
 *      用户改变为成功提示：
 *      verify.succee('user','0');
 *      第一个参数为表单单元：
 *          @'user','setPW','verifyPW','email','phone','CAPTCHA','note','mail','referrer';
 *          @'user'对应用户
 *      第二个参数对应信息序号， 详情情在variable.js中添加。
 *
 *      清除状态：
 *      verify.clearFn('0');
 *      清除当前状态。
 *      如果带参数，只清空本参数对应项，如没参数，全部清空。
 *
 *
 * */
var _verify;
_verify = Class.extend({
    //初始化+控制
    init: function () {
        this.model._parent = this;
        this.model.StatusClass = {};
        this.view._parent = this;
    },
    configDom: function () {
        this.view.configDom(arguments[0], arguments[1]);
    },
    configMessageFn: function () {
        this.model.configMessageFn(arguments[0]);
    },
    configStatusClassFn: function () {
        this.model.configStatusClassFn(arguments[0]);
    },
    trigger: function () {
        this.view.trigger();
    },
    succee: function () {
        this.model.succeeFn(arguments[0], arguments[1]);
    },
    error: function () {
        this.model.errorFn(arguments[0], arguments[1]);
    },
    activate: function () {
        this.model.activateFn(arguments[0], arguments[1]);
    },
    message: function () {
        this.model.messageFn(arguments[0], arguments[1]);
    },
    clear: function () {
        this.model.clearFn(arguments[0]);
    },
    //模型
    model: {
        configStatusClassFn: function () {
            var $className = arguments[0];
            this.StatusClass = {
                succee: $className[0] || 'succee',
                error: $className[1] || 'error',
                activate: $className[2] || 'activate',
                message: $className[3] || 'message'
            }
        },
        configMessageFn: function () {
            !(this.message = arguments[0] || null) && alert('没有配置提示信息！');
        },
        trimFn: function () {
            return $.trimFn(arguments[0]);
        },
        disposeMessageFn: function () {
            var status, project, dom, ordinalNum;
            status = arguments[0];
            dom = arguments[1];
            ordinalNum = arguments[2];
            dom = this._parent.view.getDomAndUser(dom);
            project = this._parent.view.getDetailDoms(dom[0]);
            var message = this.message[dom[1]][status][ordinalNum] || '';
            // for (var statusKey in this.StatusClass ) {
            //     project[0].removeClass(this.StatusClass[statusKey]);
            // }
            project[0].addClass(this.StatusClass[status]);
            project[1].text(message);
            //project[2].text('');icon切换
        },
        succeeFn: function () {
            this.disposeMessageFn('succee', arguments[0], arguments[1]);
        },
        errorFn: function () {
            this.disposeMessageFn('error', arguments[0], arguments[1]);
        },
        activateFn: function () {
            this.disposeMessageFn('activate', arguments[0], arguments[1]);
        },
        messageFn: function () {
            this.disposeMessageFn('message', arguments[0], arguments[1]);
        },
        clearFn: function () {
            if (!!arguments[0]) {
                var project;
                project = this._parent.view.getDetailDoms(arguments[0]);
                project[0].removeClass(this.StatusClass.succee).removeClass(this.StatusClass.error).removeClass(this.StatusClass.activate).removeClass(this.StatusClass.message);
                project[1].text('');
                project[2].text(project[2].data('icon'))
            } else {
                var _this = this;
                this.formSections.each(function (i) {
                    var project;
                    project = _this._parent.view.getDetailDoms(arguments[0]);
                    project[0].removeClass(_this.StatusClass.succee).removeClass(_this.StatusClass.error).removeClass(_this.StatusClass.activate).removeClass(_this.StatusClass.message);
                    project[1].text('');
                    project[2].text(project[2].data('icon'))
                })
            }
        }
    },
    //视图
    view: {
        configDom: function () {
            this._parent.model.parentDom = $(arguments[0]);
            this._parent.model.formSections = $(arguments[1]);
        },
        getDetailDoms: function () {
            var $this, $parent;
            $this = $(arguments[0]);
            $parent = $this.is('.formSection') ? $this : $this.parents('.formSection');
            return [$parent, $parent.find('.message'), $parent.find('.input-text i')];
        },
        getDomAndUser: function () {
            var dom, user;
            dom = arguments[0];
            if (typeof dom === 'string') {
                user = dom;
                dom = this.getDom(dom);
            } else {
                user = $(dom).attr('id') || $(dom).attr('name');
            }
            return [dom, user];
        },
        getDom: function () {
            return (this._parent.model.parentDom.find('.' + arguments[0]) || this._parent.model.parentDom.find('#' + arguments[0]))[0];
        },
        trigger: function () {
            var _this = this;
            this._parent.model.formSections.find(':text,:password').focus(function () {
                //this.value = '';//如得到焦点时清空输入放开此行
                _this._parent.activate(this, '0');
            })
            this._parent.model.formSections.find(':text,:password').blur(function () {
                //!this.value && (this.value = $(this).data('value'));//如失去焦点时空内容输入默认内容放开此行
                if ($(this).parents('.formSection').is('.activate')) {
                    _this._parent.clear(this);
                }
            })
        }
    }
})
