import { input } from "../utils/input.js";
import { getAllBooks, addBook } from "../database/operations.js";

/** This class handles library functions */
class Library {
  // static library = [];

  /** Makes array from books in the DB */
  static books = getAllBooks();


  /** Prints entire library */
  static getLibrary() {
    // console.log(" ");
    // console.log(`Voici votre Bibliothèque :`);

    this.books.forEach((book) => {
      console.log(
        `#${book.id} "${book.title}" de ${book.author}. ${book.isRead}`,
      );
    });
  }

  /** Makes a new book from the 'Book' Constructor
   * 
   * @param {string} title Book Title
   * @param {string} author Book Author
   */
  static setBook(title, author) {
    new Livre(title, author);
  }
}

export default Library;
