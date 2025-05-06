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

  // DIP
  const order1 = new Order(items, creditCardProcessor, consoleLogger);
  order1.processOrder();

  // LSP
  const payPalProcessor = new PayPalProcessor();
  const fileLogger = new FileLogger();
  const order2 = new Order(items, payPalProcessor, fileLogger);
  order2.processOrder();

  // LSP
  const cryptoProcessor = new CryptoProcessor();
  const order3 = new Order(items, cryptoProcessor, consoleLogger);
  order3.processOrder();
})();
