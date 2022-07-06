export class User {
  public name: string;
  public age: string;

  constructor(name: string, age: string) {
    this.name = name;
    this.age = age;
  }

  copy() {
    return new User(this.name, this.age)
  }
}