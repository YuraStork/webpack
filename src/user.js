export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  copy() {
    return new User(this.name, this.age)
  }
}