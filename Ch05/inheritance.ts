class ColorClass {
  color: string;

  constructor(color: string) {
    this.color = color;
  }
}

class VersionClass extends ColorClass {
  version: number

  constructor(color: string, version: number) {
    // 在這裡執行的 super 等同於父類別的 constructor
    super(color);
    this.version = version;
  }
}

const newVersion = new VersionClass('紅色的', 2);
