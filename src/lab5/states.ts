import { IEditorState } from './interfaces';
import TextEditor from './text-editor';

export class EditingState implements IEditorState {
  enterText(editor: TextEditor, text: string): void {
    editor.text = text;
    console.log('Текст введено у режимі редагування.');
  }

  formatText(editor: TextEditor): void {
    if (editor.text) {
      editor.text = editor.formattingStrategy.format(editor.text);
      console.log('Текст відформатовано за допомогою обраної стратегії.');
    } else {
      console.log('Немає тексту для форматування.');
    }
  }

  save(editor: TextEditor): void {
    console.log('Текст збережено.');
    editor.setState(new ViewState());
  }

  display(editor: TextEditor): void {
    console.log('Поточний текст (режим редагування):');
    console.log(editor.text || '(порожньо)');
  }
}

class ViewState implements IEditorState {
  enterText(_editor: TextEditor, _text: string): void {
    console.log('Неможливо ввести текст у режимі перегляду.');
    console.log('Переключіться в режим редагування.');
  }

  formatText(_editor: TextEditor): void {
    console.log('Неможливо форматувати текст у режимі перегляду.');
    console.log('Переключіться в режим редагування.');
  }

  save(_editor: TextEditor): void {
    console.log('Немає змін для збереження в режимі перегляду.');
  }

  display(editor: TextEditor): void {
    console.log('Поточний текст (режим перегляду):');
    console.log(editor.text || '(порожньо)');
  }
}

export class LockedState implements IEditorState {
  enterText(_editor: TextEditor, _text: string): void {
    console.log('Редактор заблоковано. Неможливо ввести текст.');
  }

  formatText(_editor: TextEditor): void {
    console.log('Редактор заблоковано. Неможливо форматувати текст.');
  }

  save(_editor: TextEditor): void {
    console.log('Редактор заблоковано. Неможливо зберегти текст.');
  }

  display(editor: TextEditor): void {
    console.log('Поточний текст (редактор заблоковано):');
    console.log(editor.text || '(порожньо)');
  }
}
