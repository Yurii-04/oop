import User from './user';

export default class Admin extends User {
  private _username: string;
  private readonly _role = 'Admin';

  constructor(username: string) {
    super();
    this._username = username;
  }

  displayRole(): void {
    console.log(`${this._username} is ${this._role}`);
  }

  get username(): string {
    return this._username;
  }

  set username(username: string) {
    this._username = username;
  }
}
