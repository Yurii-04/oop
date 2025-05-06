import { ILogger } from './interfaces';

export class ConsoleLogger implements ILogger {
  log(message: string): void {
    console.info(`[LOG]: ${message}`);
  }
}

export class FileLogger implements ILogger {
  log(message: string): void {
    console.info(`[FILE LOG]: ${message}`);
  }
}
