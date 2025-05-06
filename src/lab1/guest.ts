import User from './user';

export default class Guest extends User {
  private _guestId: string;
  private readonly _role = 'Guest';

  constructor(guestId: string) {
    super();
    this._guestId = guestId;
  }

  displayRole(): void {
    console.log(`${this._role} with ID: ${this._guestId}`);
  }

  get guestId(): string {
    return this._guestId;
  }

  set guestId(guestId: string) {
    this._guestId = guestId;
  }
}
