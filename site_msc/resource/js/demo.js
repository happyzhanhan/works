/**
 * Created by wwp9 on 2016-03-29.
 */

function a() {
}
a.prototype.init = function () {
    a.name = arguments[0] || 'a';
    a.index = arguments[1] || 1;
}
a.prototype.change = function () {
    this.name = arguments[0];
    this.index = arguments[1];
}
a.prototype.say = function () {
    alert('I am ' + this.name + ',I am ' + this.index);
}


var b = new a();
var c = new a();
