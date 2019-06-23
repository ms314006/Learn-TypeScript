class ParentClass {
  protected genealogy: string;

  constructor() {
    this.genealogy = 'Only family read!';
  }
}

const patentInstance = new ParentClass();

patentInstance.genealogy; // 會錯誤

class SonClass extends ParentClass {
  getGenealogy(): string {
    return this.genealogy; // 不會有錯，因為在子類別可以讀取到 protected 的 property
  }
}

const sonInstance = new SonClass();

sonInstance.getGenealogy(); // 正確讀取
sonInstance.genealogy; // 仍舊會出錯
