import { CapitalizeStrategy, LowerCaseStrategy, UpperCaseStrategy } from './strategies';
import { EditingState, LockedState } from './states';
import TextEditor from './text-editor';

(() => {
  const editor = new TextEditor();

  editor.enterText('Hello world');
  editor.formatText();
  editor.display();

  console.log('\n=== UpperCase ===');
  editor.formattingStrategy = new UpperCaseStrategy();
  editor.formatText();
  editor.display();

  console.log('\n=== Зміна стратегії форматування на Capitalize ===');
  editor.formattingStrategy = new CapitalizeStrategy();
  editor.formatText();
  editor.display();

  console.log('\n=== Збереження тексту ===');
  editor.save();
  editor.display();

  console.log('\n=== Спроба редагування в режимі перегляду ===');
  editor.enterText('Цей текст не повинен бути введений');

  console.log('\n=== Перехід до режиму редагування ===');
  editor.setState(new EditingState());
  editor.enterText('Новий текст після повернення до режиму редагування');
  editor.display();

  console.log('\n=== Блокування редактора ===');
  editor.setState(new LockedState());
  editor.enterText('Спроба вводу при заблокованому редакторі');
  editor.formatText();
  editor.save();

  console.log('\n=== Розблокування редактора ===');
  editor.setState(new EditingState());
  editor.enterText('Текст після розблокування редактора');
  editor.formattingStrategy = new LowerCaseStrategy();
  editor.formatText();
  editor.display();
})();
