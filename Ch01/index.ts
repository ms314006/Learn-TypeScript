interface FlyBehavior {
  fly(): string;
}

class FlyWithWings implements FlyBehavior {
  fly() {
    return 'I can fly.';
  }
}

class FlyNoWay implements FlyBehavior {
  fly() {
    return 'I can‘t fly.';
  }
}

class Duck {
  flyBehavior: FlyBehavior;
  constructor(flyBehavior: FlyBehavior) {
      this.flyBehavior = flyBehavior;
  }
  quack() {
    return 'I can quack.';
  }
  swim() {
    return 'I can swim.';
  }
  performFly() {
    return this.flyBehavior.fly();
  }
}

class MallardDuck extends Duck {
  constructor() {
    super(new FlyWithWings());
  }
  display() {
    return 'My color is green.';
  }
}

class RubberDuck extends Duck {
  constructor() {
    super(new FlyNoWay());
  }
  display() {
    return 'I am a toy duck.';
  }
}

const mallard = new MallardDuck();
console.log(mallard.display());
console.log(mallard.performFly());

const rubber = new RubberDuck();
console.log(rubber.display());
console.log(rubber.performFly());