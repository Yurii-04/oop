export interface ITask {
  id: string;
  getTitle(): string;
  complete(): void;
  isCompleted(): boolean;
  getDetails(): string;
  addTime(hours: number): void;
  getTimeSpent(): number;
}
