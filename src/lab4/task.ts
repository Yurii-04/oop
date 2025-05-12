import { ITask } from './interfaces';

export default class SimpleTask implements ITask {
  private completed: boolean = false;
  private timeSpent: number = 0;

  constructor(
    public id: string,
    private readonly title: string,
  ) {}

  getTitle(): string {
    return this.title;
  }

  complete(): void {
    this.completed = true;
    console.log(`Завдання "${this.title}" виконано.`);
  }

  isCompleted(): boolean {
    return this.completed;
  }

  getDetails(): string {
    return `[${this.completed ? '✅ ' : '❌ '}] ${this.title} (${this.timeSpent} год.)`;
  }

  addTime(hours: number): void {
    this.timeSpent += hours;
  }

  getTimeSpent(): number {
    return this.timeSpent;
  }
}
