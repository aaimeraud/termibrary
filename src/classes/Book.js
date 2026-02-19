class Book {
  constructor(title, author, isRead = false) {
    this.id;
    this.title = title;
    this.author = author;
    this.isRead = isRead;
    addBook(this.title, this.author);
    console.log(`Vous avez ajouté "${title}" de ${author}.x`);
  }

  // if (book.isRead = 0) {

  // }

  static setTitle(newTitle) {
    this.title = newTitle;
    console.log(
      `Le titre a bien été modifié : "${this.title}" de ${this.author}`,
    );
  }

  static setAuthor(newAuthor) {
    this.author = newAuthor;
    console.log(
      `L'auteur a bien été modifié : "${this.title}" de ${this.author}`,
    );
  }
}

export default Book;
