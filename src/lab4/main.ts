import TaskManagementFacade from './task-management-facade';

(() => {
  const taskManager = new TaskManagementFacade();

  const task1Id = taskManager.createTask('Вивчити патерн Composite');
  const task2Id = taskManager.createTask('Вивчити патерн Facade');
  const task3Id = taskManager.createTask('Написати документацію');
  const task4Id = taskManager.createTask('Протестувати програму');

  taskManager.addTimeToTask(task1Id, 2);
  taskManager.addTimeToTask(task2Id, 1.5);
  taskManager.addTimeToTask(task3Id, 3);
  taskManager.addTimeToTask(task4Id, 2);

  const learningGroupId = taskManager.createTaskGroup('Вивчення патернів');
  const implementationGroupId = taskManager.createTaskGroup('Реалізація проекту');
  const projectGroupId = taskManager.createTaskGroup('Весь проект');

  taskManager.addTaskToGroup(task1Id, learningGroupId);
  taskManager.addTaskToGroup(task2Id, learningGroupId);
  taskManager.addTaskToGroup(task3Id, implementationGroupId);
  taskManager.addTaskToGroup(task4Id, implementationGroupId);

  taskManager.addTaskToGroup(learningGroupId, projectGroupId);
  taskManager.addTaskToGroup(implementationGroupId, projectGroupId);

  taskManager.completeTask(task1Id);
  taskManager.completeTask(task2Id);

  taskManager.listAllTasks();

  console.log('\nДеталі групи вивчення патернів:');
  console.log(taskManager.getTaskDetails(learningGroupId));

  console.log('\n' + taskManager.generateReport());
})();
