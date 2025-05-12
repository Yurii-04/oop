import { ITask } from './interfaces';
import SimpleTask from './task';
import TaskGroup from './task-group';

export default class TaskManagementFacade {
  private tasks: Map<string, ITask> = new Map();
  private nextId: number = 1;

  createTask(title: string): string {
    const id = `task_${this.nextId++}`;
    const task = new SimpleTask(id, title);
    this.tasks.set(id, task);
    console.log(`Створено завдання "${title}" з id ${id}`);
    return id;
  }

  createTaskGroup(title: string): string {
    const id = `group_${this.nextId++}`;
    const group = new TaskGroup(id, title);
    this.tasks.set(id, group);
    console.log(`Створено групу завдань "${title}" з id ${id}`);
    return id;
  }

  addTaskToGroup(taskId: string, groupId: string): boolean {
    const task = this.tasks.get(taskId);
    const group = this.tasks.get(groupId);

    if (!task) {
      console.error(`Помилка: Завдання з id ${taskId} не знайдено.`);
      return false;
    }

    if (!group || !(group instanceof TaskGroup)) {
      console.error(`Помилка: Групу з id ${groupId} не знайдено або це не група.`);
      return false;
    }

    group.addTask(task);
    console.log(`Завдання ${taskId} додано до групи ${groupId}.`);
    return true;
  }

  completeTask(id: string): boolean {
    const task = this.tasks.get(id);
    if (!task) {
      console.error(`Помилка: Завдання з id ${id} не знайдено.`);
      return false;
    }

    task.complete();
    return true;
  }

  addTimeToTask(id: string, hours: number): boolean {
    const task = this.tasks.get(id);
    if (!task) {
      console.error(`Помилка: Завдання з id ${id} не знайдено.`);
      return false;
    }

    task.addTime(hours);
    console.log(`Додано ${hours} годин до завдання ${id}.`);
    return true;
  }

  getTaskDetails(id: string): string | null {
    const task = this.tasks.get(id);
    if (!task) {
      console.error(`Помилка: Завдання з id ${id} не знайдено.`);
      return null;
    }

    return task.getDetails();
  }

  listAllTasks(): void {
    if (this.tasks.size === 0) {
      console.log('Немає завдань.');
      return;
    }

    console.log('=== Список усіх завдань ===');
    this.tasks.forEach((task, id) => {
      console.log(`${id}: ${task.getTitle()} ${task.isCompleted() ? '[Виконано]' : '[В процесі]'}`);
    });
  }

  generateReport(): string {
    let report = '=== ЗВІТ ЩОДО ЗАВДАНЬ ===\n\n';
    const tasksInGroups = new Set<string>();

    this.tasks.forEach((task) => {
      if (task instanceof TaskGroup) {
        task.getTasks().forEach((childTask) => {
          tasksInGroups.add(childTask.id);
        });
      }
    });

    // tasks that are not included in any group
    const topLevelTasks = Array.from(this.tasks.values()).filter((task) => !tasksInGroups.has(task.id));

    if (topLevelTasks.length === 0) {
      report += 'Немає завдань для відображення.\n';
    } else {
      topLevelTasks.forEach((task) => {
        report += task.getDetails() + '\n\n';
      });

      const totalTime = topLevelTasks.reduce((sum, task) => sum + task.getTimeSpent(), 0);
      report += `Загальний витрачений час: ${totalTime} годин`;
    }

    return report;
  }
}
