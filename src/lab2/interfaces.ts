export interface IPaymentProcessor {
  processPayment(amount: number): boolean;
}

export interface ILogger {
  log(message: string): void;
}
