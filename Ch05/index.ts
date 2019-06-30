class Controller {
  static accelerate(car: ISpeed) {
    car.addSpeed();
  }

  static turn(car: ITurn) {
    car.lightningTurn();
  }
}


// 加速型的介面
interface ISpeed {
  addSpeed(): void;
}

// 過彎型的介面
interface ITurn {
  lightningTurn(): void;
}

// 實作加速型的 Class
class SpeedCar implements ISpeed {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  addSpeed(): void {
    console.log(`${this.name}使用「加速」！`);
  }
}

// 過彎型
class TurnCar implements ITurn {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  lightningTurn(): void {
    console.log(`${this.name}使用「閃電轉彎」！`);
  }
}

class AlmightCar implements ISpeed, ITurn {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  addSpeed(): void {
    console.log(`${this.name}使用「加速」！`);
  }

  lightningTurn(): void {
    console.log(`${this.name}使用「閃電轉彎」！`);
  }
}

// 加速
const speedCar = new SpeedCar('QQ 衝鋒');
Controller.accelerate(speedCar); // 用遙控器將傳入的車子加速

// 轉彎
const turnCar = new TurnCar('QQ 眼鏡蛇');
Controller.turn(turnCar); // 用遙控器使傳入的車子過彎

// 萬能型
const almightCar = new AlmightCar('衝鋒眼鏡蛇');
Controller.accelerate(almightCar); // 用遙控器使傳入的車子加速
Controller.turn(almightCar); // 用遙控器使傳入的車子過彎
