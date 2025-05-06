import { ILogger, IPaymentProcessor } from './interfaces';

export type OrderItem = {
  name: string;
  price: number;
};

export default class Order {
  constructor(
    private items: OrderItem[],
    private paymentProcessor: IPaymentProcessor, // DIP
    private logger: ILogger, // DIP
  ) {}

  getTotalPrice(): number {
    return this.items.reduce((acc, cur) => acc + cur.price, 0);
  }

  processOrder(): boolean {
    const total = this.getTotalPrice();
    this.logger.log(`Starting order processing for total: $${total}`);

    // LSP
    const paymentSuccess = this.paymentProcessor.processPayment(total);

    if (paymentSuccess) {
      this.logger.log('Order processed successfully');
      return true;
    } else {
      this.logger.log('Order processing failed');
      return false;
    }
  }
}
