/**
 * Created by wwp9 on 2016-03-28.
 */
var member_message;
member_message = Class.extend({
    init: function () {
        this.model._parent = this;
        this.view._parent = this;
        this.model.dom = {};
        this.view.configDom();
    },
    trigger: function () {
        this.view.trigger(arguments[0]);
    },
    model: {

    },
    view: {
        configDom:function () {
            this._parent.model.dom.tage = '.infoTages a'
            this._parent.model.dom.tage_content = $('.infoContent');
        },
        trigger: function () {
            var _this = this;
            cutTages(this._parent.model.dom.tage,this._parent.model.dom.tage_content);
        }
    }
})
var memberMessage = member_message.create();
memberMessage.trigger();

