import { db } from "./database";
import Book from "../classes/Book";

class BookRepository {
  /** Ajoute un livre dans la db
 * 
 * @param {string} title le titre du livre
 
 * @param {string} author l'auteur du livre
 * 
 * @param {boolean} isRead default sur false, si le livre a été lu, écrire true
 * 
 */
  static addBook(title, author, isRead) {
    try {
      const book = new Book(null, title, author, isRead);
      db.query(
        "INSERT INTO books (title, author, isRead) VALUES (?, ?, ?)",
      ).run(book.title, book.author, book.isRead);
    } catch (error) {
      console.log(error.message);
    }
  }

  /** Affiche tous les livres */
  static getAllBooks() {
    return db.query("SELECT * FROM books").all();
  }

  static getBookbyId(id) {
    return db.query("SELECT * FROM books WHERE id = ?").get(id);
  }

  /**Modifie le titre du livre choisi
   *
   * @param {Number} id numéro de l'id
   *
   * @param {string} newTitle nouveau titre
   */
  static updateBookTitle(id, newTitle) {
    db.query("UPDATE books SET title = :newTitle WHERE id = :id;").run(
      id,
      newTitle,
    );
  }

  /**Modifie le de l'auteur du livre
   *
   * @param {Number} id numéro de l'id du livre
   *
   * @param {string} newAuthor nouveau nom d'auteur
   *
   */
  static updateBookAuthor(id, newAuthor) {
    db.query("UPDATE books SET author = :newAuthor WHERE id = :id;").run(
      id,
      newAuthor,
    );
  }

  static updateBookStatus(id, newIsRead) {
    db.query("UPDATE books SET isRead = :newIsRead WHERE id = :id;").run(
      id,
      newIsRead,
    );
  }
}

export default BookRepository;
