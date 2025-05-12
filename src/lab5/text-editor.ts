import { IEditorState, ITextFormattingStrategy } from './interfaces';
import { EditingState } from './states';
import { LowerCaseStrategy } from './strategies';

export default class TextEditor {
  private _text: string = '';
  private _state: IEditorState = new EditingState();
  private _formattingStrategy: ITextFormattingStrategy = new LowerCaseStrategy();

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get formattingStrategy(): ITextFormattingStrategy {
    return this._formattingStrategy;
  }

  set formattingStrategy(strategy: ITextFormattingStrategy) {
    this._formattingStrategy = strategy;
  }

  setState(state: IEditorState): void {
    this._state = state;
    const stateName = this._state.constructor.name;
    console.log(`Стан редактора змінено на: ${stateName}`);
  }

  enterText(text: string): void {
    this._state.enterText(this, text);
  }

  formatText(): void {
    this._state.formatText(this);
  }

  save(): void {
    this._state.save(this);
  }

  display(): void {
    this._state.display(this);
  }
}
