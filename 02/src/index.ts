const person = {
  name: "John",
  age: 30,
  info() {
    return `Name: ${this.name}  Age: ${this.age}`;
  }
}
alert(person.info());