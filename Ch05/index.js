var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(color) {
        this.descroption = '我是車子';
        this.color = color;
        this.brakes = '商業機密的煞車方式';
    }
    Car.prototype.getDescription = function () {
        return this.descroption + " - " + this.color;
    };
    Car.prototype.triggerBrakes = function () {
        if (this.brakes === '商業機密的煞車方式') {
            return '用了商業機密的煞車方式';
        }
        return '沒有機密方式，沒有煞車';
    };
    Car.getComment = function () {
        return '這是初代版車子';
    };
    return Car;
}());
var redCar = new Car('紅色');
console.log(redCar.getDescription()); // 我是車子 - 紅色
console.log(redCar.triggerBrakes()); // 用機密方式煞車帥一波
var CarII = /** @class */ (function (_super) {
    __extends(CarII, _super);
    function CarII() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarII.prototype.getDescription = function () {
        return _super.prototype.getDescription.call(this) + " \u7B2C\u4E8C\u4EE3\u5F37\u5316\u7248";
    };
    CarII.prototype.triggerBrakes = function () {
        console.log(this.brakes);
        return _super.prototype.triggerBrakes.call(this) + " \u7684\u7121\u6575\u6539\u826F\u7248";
    };
    CarII.getComment = function () {
        return '這是第二版車子';
    };
    return CarII;
}(Car));
var greenCar = new CarII('綠色');
console.log(greenCar.getDescription()); // 我是車子 - 綠色 第二代強化版
console.log(greenCar.triggerBrakes()); // 用了商業機密的煞車方式 的無敵改良版
console.log(Car.getComment()); // 這是初代版車子
console.log(CarII.getComment()); // 這是第二版車子
