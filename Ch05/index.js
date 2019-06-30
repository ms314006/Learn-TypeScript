var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.accelerate = function (car) {
        car.addSpeed();
    };
    Controller.turn = function (car) {
        car.lightningTurn();
    };
    return Controller;
}());
// 實作加速型的 Class
var SpeedCar = /** @class */ (function () {
    function SpeedCar(name) {
        this.name = name;
    }
    SpeedCar.prototype.addSpeed = function () {
        console.log(this.name + "\u4F7F\u7528\u300C\u52A0\u901F\u300D\uFF01");
    };
    return SpeedCar;
}());
// 過彎型
var TurnCar = /** @class */ (function () {
    function TurnCar(name) {
        this.name = name;
    }
    TurnCar.prototype.lightningTurn = function () {
        console.log(this.name + "\u4F7F\u7528\u300C\u9583\u96FB\u8F49\u5F4E\u300D\uFF01");
    };
    return TurnCar;
}());
var AlmightCar = /** @class */ (function () {
    function AlmightCar(name) {
        this.name = name;
    }
    AlmightCar.prototype.addSpeed = function () {
        console.log(this.name + "\u4F7F\u7528\u300C\u52A0\u901F\u300D\uFF01");
    };
    AlmightCar.prototype.lightningTurn = function () {
        console.log(this.name + "\u4F7F\u7528\u300C\u9583\u96FB\u8F49\u5F4E\u300D\uFF01");
    };
    return AlmightCar;
}());
// 加速
var speedCar = new SpeedCar('QQ 衝鋒');
Controller.accelerate(speedCar); // 用遙控器將傳入的車子加速
// 轉彎
var turnCar = new TurnCar('QQ 眼鏡蛇');
Controller.turn(turnCar); // 用遙控器使傳入的車子過彎
// 萬能型
var almightCar = new AlmightCar('衝鋒眼鏡蛇');
Controller.accelerate(almightCar); // 用遙控器使傳入的車子加速
Controller.turn(almightCar); // 用遙控器使傳入的車子過彎
