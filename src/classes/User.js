import UserRepository from "../database/UserRepository";

class User {
  constructor(name, favoriteBook) {
    this.name = name;
    this.favoriteBook = favoriteBook;
    UserRepository.addUser(this.name, this.favoriteBook);
  }

  static getUser() {
    this.users = UserRepository.getAllUsers();
    console.log(`\nVos Informations :`);

    this.users.forEach((user) => {
      console.log(
        `\nVotre nom: ${user.name} \nVotre livre préféré: ${user.favoriteBook}`,
      );
    });
  }

 
}

export default User;
