interface User {
  id: number;
  name: string;
  email: string;
}

function greetUser(user: User): string {
  return `Ciao! ${user.name}! your email is ${user.email}.`;
}

const user: User = {
  id: 1,
  name: 'yuriko',
  email: 'test@gmail.com',
};

console.log(greetUser(user));
