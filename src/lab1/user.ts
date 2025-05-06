export default abstract class User {
  abstract displayRole(): void;

  login(): void {
    console.log('User logged in');
  }

  logout(): void {
    console.log('User logged out');
  }
}
