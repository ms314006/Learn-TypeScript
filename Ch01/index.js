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
var FlyWithWings = /** @class */ (function () {
    function FlyWithWings() {
    }
    FlyWithWings.prototype.fly = function () {
        return 'I can fly.';
    };
    return FlyWithWings;
}());
var FlyNoWay = /** @class */ (function () {
    function FlyNoWay() {
    }
    FlyNoWay.prototype.fly = function () {
        return 'I can‘t fly.';
    };
    return FlyNoWay;
}());
var Duck = /** @class */ (function () {
    function Duck(flyBehavior) {
        this.flyBehavior = flyBehavior;
    }
    Duck.prototype.quack = function () {
        return 'I can quack.';
    };
    Duck.prototype.swim = function () {
        return 'I can swim.';
    };
    Duck.prototype.performFly = function () {
        return this.flyBehavior.fly();
    };
    return Duck;
}());
var MallardDuck = /** @class */ (function (_super) {
    __extends(MallardDuck, _super);
    function MallardDuck() {
        return _super.call(this, new FlyWithWings()) || this;
    }
    MallardDuck.prototype.display = function () {
        return 'My color is green.';
    };
    return MallardDuck;
}(Duck));
var RubberDuck = /** @class */ (function (_super) {
    __extends(RubberDuck, _super);
    function RubberDuck() {
        return _super.call(this, new FlyNoWay()) || this;
    }
    RubberDuck.prototype.display = function () {
        return 'I am a toy duck.';
    };
    return RubberDuck;
}(Duck));
var mallard = new MallardDuck();
console.log(mallard.display());
console.log(mallard.performFly());
var rubber = new RubberDuck();
console.log(rubber.display());
console.log(rubber.performFly());
