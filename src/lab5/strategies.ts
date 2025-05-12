import { ITextFormattingStrategy } from './interfaces';

export class UpperCaseStrategy implements ITextFormattingStrategy {
  format(text: string): string {
    return text.toUpperCase();
  }
}

export class LowerCaseStrategy implements ITextFormattingStrategy {
  format(text: string): string {
    return text.toLowerCase();
  }
}

export class CapitalizeStrategy implements ITextFormattingStrategy {
  format(text: string): string {
    return text
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
}
