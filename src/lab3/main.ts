interface IPrototype {
  clone(): IPrototype;
}

type Specs = {
  cpu: string;
  ram: string;
  storage: string;
};

export class Product implements IPrototype {
  constructor(
    private name: string,
    private price: number,
    private specs: Specs,
  ) {}

  clone(): Product {
    return new Product(this.name, this.price, { ...this.specs });
  }

  setPrice(price: number): void {
    this.price = price;
  }

  setSpecs(specs: Specs): void {
    this.specs = { ...specs };
  }

  getDetails(): string {
    return `Product: ${this.name}\nPrice: $${this.price}\nSpecs: CPU: ${this.specs.cpu}, RAM: ${this.specs.ram}, Storage: ${this.specs.storage}`;
  }
}

(() => {
  const originalLaptop = new Product('Laptop Pro', 1000, {
    cpu: 'Intel i5',
    ram: '8GB',
    storage: '256GB SSD',
  });

  console.log('Original Product:');
  console.log(originalLaptop.getDetails());
  console.log('------------------------');

  const budgetLaptop = originalLaptop.clone();
  budgetLaptop.setPrice(800);
  budgetLaptop.setSpecs({ cpu: 'Intel i3', ram: '4GB', storage: '128GB SSD' });

  console.log('Cloned and Modified Product (Budget Laptop):');
  console.log(budgetLaptop.getDetails());
  console.log('------------------------');

  const premiumLaptop = originalLaptop.clone();
  premiumLaptop.setPrice(1500);

  console.log('Cloned and Modified Product (Premium Laptop):');
  console.log(premiumLaptop.getDetails());
  console.log('------------------------');

  console.log('Original Product (unchanged):');
  console.log(originalLaptop.getDetails());
})();
