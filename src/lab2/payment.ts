import { IPaymentProcessor } from './interfaces';

export class CreditCardProcessor implements IPaymentProcessor {
  processPayment(amount: number): boolean {
    console.log(`Processing credit card payment of $${amount}`);
    return true;
  }
}

export class PayPalProcessor implements IPaymentProcessor {
  processPayment(amount: number): boolean {
    console.log(`Processing PayPal payment of $${amount}`);
    return true;
  }
}

export class CryptoProcessor implements IPaymentProcessor {
  processPayment(amount: number): boolean {
    console.log(`Processing crypto payment of $${amount}`);
    return true;
  }
}
