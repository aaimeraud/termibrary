import BookRepository from "../database/bookRepository";
/** This class handles library functions */
class Library {
  /** Prints entire library */
  static getLibrary() {
    this.books = BookRepository.getAllBooks();
    console.log(`\nVoici votre Bibliothèque :`);

    this.books.forEach((book) => {
      const boolIntoString =
        book.isRead === 1
          ? "\n> [✓] Vous avez lu ce livre. \n"
          : "\n> [ ] Vous n'avez pas encore lu ce livre. \n";
      console.log(
        `\n#${book.id} "${book.title}" de ${book.author}. ${boolIntoString}`,
      );
    });
  }
  /** Makes a new book from the 'Book' Constructor
   *
   * @param {string} title Book Title
   * @param {string} author Book Author
   */
  static createBook(title, author, isRead = 0) {
    ((this.title = title), (this.author = author), (this.isRead = isRead));
    BookRepository.addBook(this.title, this.author, (this.isRead = isRead));
    console.log(`\nVous avez ajouté "${this.title}" de ${this.author}.\n`);
  }

  static updateBookTitle(id, newTitle) {
    ((this.id = id),
      (this.newTitle = newTitle),
      BookRepository.updateBookTitle(this.id));
  }

  static updateBookStatus(id) {
    this.id = id;
    const book = BookRepository.getBookbyId(this.id);
    BookRepository.updateBookTitle(this.id, 1);
    console.log(
      `\nFélicitations ! Vous avez lu le livre n°${id}, "${book.title}" !\n`,
    );
  }
}

export default Library;
