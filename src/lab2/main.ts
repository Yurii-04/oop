import Order, { OrderItem } from './order';
import { CreditCardProcessor, CryptoProcessor, PayPalProcessor } from './payment';
import { ConsoleLogger, FileLogger } from './logger';

(() => {
  const items: OrderItem[] = [
    { name: 'das', price: 2 },
    { name: 'Mouse', price: 50 },
  ];

  const creditCardProcessor = new CreditCardProcessor();
  const consoleLogger = new ConsoleLogger();

  const order1 = new Order(items, creditCardProcessor, consoleLogger); // DI
  order1.processOrder();

  const payPalProcessor = new PayPalProcessor();
  const fileLogger = new FileLogger();
  const order2 = new Order(items, payPalProcessor, fileLogger); // DI
  order2.processOrder();

  const cryptoProcessor = new CryptoProcessor();
  const order3 = new Order(items, cryptoProcessor, consoleLogger); // DI
  order3.processOrder();
})();
