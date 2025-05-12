import TextEditor from './text-editor';

export interface ITextFormattingStrategy {
  format(text: string): string;
}

export interface IEditorState {
  enterText(editor: TextEditor, text: string): void;
  formatText(editor: TextEditor): void;
  save(editor: TextEditor): void;
  display(editor: TextEditor): void;
}
