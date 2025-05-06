import Admin from './admin';
import Guest from './guest';

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
