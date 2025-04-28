abstract class User {
  abstract displayRole(): void;

  login(): void {
    console.log('User logged in');
  }

  logout(): void {
    console.log('User logged out');
  }
}

class Admin extends User {
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

class Guest extends User {
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

const users = [new Admin('Bob'), new Guest('1')];
users.forEach((user) => {
  user.login();
  user.displayRole();
  user.logout();
  console.log('\n');
});

const admin = new Admin('Charlie');
console.log(admin);
admin.username = 'Charlie2';
console.log(admin.username);
