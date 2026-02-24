import { db } from "./database";

class UserRepository {
  static hasUser() {
    return UserRepository.getAllUsers().length > 0;
  }
  /** Ajoute un Utilisateur
   *
   * @param {string} name nom de l'utilisateur
   *
   * @param {string} favoriteBook livre préféré de l'utilisateur
   *
   */
  static addUser(name, favoriteBook) {
    db.query("INSERT INTO user (name, favoriteBook) VALUES (?, ?)").run(
      name,
      favoriteBook,
    );
  }

  static getAllUsers() {
    return db.query("SELECT * FROM user").all();
  }
}

export default UserRepository;
