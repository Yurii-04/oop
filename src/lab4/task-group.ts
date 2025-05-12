import { ITask } from './interfaces';

export default class TaskGroup implements ITask {
  private tasks: ITask[] = [];
  private completed: boolean = false;

  constructor(
    public readonly id: string,
    private readonly title: string,
  ) {}

  addTask(task: ITask): void {
    this.tasks.push(task);
  }

  removeTask(taskId: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  getTitle(): string {
    return this.title;
  }

  complete(): void {
    this.tasks.forEach((task) => task.complete());
    this.completed = true;
    console.log(`Група завдань "${this.title}" виконана.`);
  }

  isCompleted(): boolean {
    return this.tasks.every((task) => task.isCompleted());
  }

  getDetails(): string {
    const status = this.isCompleted() ? '✅ ' : '❌ ';
    let result = `[${status}] Група: ${this.title} (${this.getTimeSpent()} год.)\n`;

    this.tasks.forEach((task) => {
      const details = task
        .getDetails()
        .split('\n')
        .map((line) => `  ${line}`)
        .join('\n');
      result += `${details}\n`;
    });

    return result.trim();
  }

  addTime(hours: number): void {
    if (this.tasks.length > 0) {
      const hoursPerTask = hours / this.tasks.length;
      this.tasks.forEach((task) => task.addTime(hoursPerTask));
    }
  }

  getTimeSpent(): number {
    return this.tasks.reduce((total, task) => total + task.getTimeSpent(), 0);
  }

  getTasks(): ITask[] {
    return this.tasks;
  }
}
