class Car {
  descroption: string;

  color: string;

  protected brakes: string;

  constructor(color: string) {
    this.descroption = '我是車子';
    this.color = color;
    this.brakes = '商業機密的煞車方式';
  }

  public getDescription(): string {
    return `${this.descroption} - ${this.color}`;
  }

  public triggerBrakes(): string {
    if (this.brakes === '商業機密的煞車方式') {
      return '用了商業機密的煞車方式';
    }
    return '沒有機密方式，沒有煞車';
  }

  static getComment(): string {
    return '這是初代版車子';
  }
}

const redCar = new Car('紅色');

console.log(redCar.getDescription()); // 我是車子 - 紅色
console.log(redCar.triggerBrakes()); // 用機密方式煞車帥一波

class CarII extends Car {
  public getDescription(): string {
    return `${super.getDescription()} 第二代強化版`;
  }

  public triggerBrakes(): string {
    console.log(this.brakes);
    return `${super.triggerBrakes()} 的無敵改良版`;
  }

  static getComment(): string {
    return '這是第二版車子';
  }
}

const greenCar = new CarII('綠色');

console.log(greenCar.getDescription()); // 我是車子 - 綠色 第二代強化版
console.log(greenCar.triggerBrakes()); // 用了商業機密的煞車方式 的無敵改良版

console.log(Car.getComment()); // 這是初代版車子
console.log(CarII.getComment()); // 這是第二版車子
