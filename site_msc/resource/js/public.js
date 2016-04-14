/**
 * Created by 文平 on 2016-03-05.
 */
function Class() {
}
Class.extend = function extend(props) {
    var prototype = new this();
    var _super = this.prototype;
    for (var name in props) {
        if (typeof props[name] == "function" && typeof _super[name] == "function") {
            prototype[name] = (function (super_fn, fn) {
                return function () {
                    var tmp = this.callSuper;
                    this.callSuper = super_fn;
                    var ret = fn.apply(this, arguments);
                    this.callSuper = tmp;
                    if (!this.callSuper) {
                        delete this.callSuper;
                    }
                    return ret;
                }
            })(_super[name], props[name])
        } else {
            prototype[name] = props[name];
        }
    }
    function Class() {
    }

    Class.prototype = prototype;
    Class.prototype.constructor = Class;
    Class.extend = extend;
    Class.create = Class.prototype.create = function () {
        var instance = new this();
        if (instance.init) {
            instance.init.apply(instance, arguments);
        }
        return instance;
    }
    return Class;
}


function stopEventBubble(event) {
    var e = event || window.event;
    if (e && e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.cancelBubble = true;
    }
}
function cutTages() {
    var a, event, fn;
    a = arguments;
    event = 'click';
    if (typeof a[2] === 'function') {
        fn = a[2];
    } else {
        event = !a[2] ? 'click' : 'mouseenter';
        fn = !!a[3] && fn;
    }
    $('body').on(event, a[0], function (e) {
        e.preventDefault()
        var i = $(this).index();
        $(this).addClass('defbor').siblings().removeClass('defbor');
        a[1].addClass('hide').eq(i).removeClass('hide');
        !!fn && fn();
    })
}