class User {
  constructor(name, age, favoriteBook) {
    this.name = name;
    this.age = age;
    this.favoriteBook = favoriteBook;
  }

  static setUser(name, userAge, favoriteBook) {
    new User(name, userAge, favoriteBook);
  }
}

export default User;