import BookRepository from "../database/bookRepository";
class Book {
  constructor(id, title, author, isRead = 0) {
    if (!title.trim() || !author.trim()) {
      throw new Error("Le titre et l'auteur sont requis !");
    }
    this.id = id;
    this.title = title;
    this.author = author;
    this.isRead = isRead;
  }
}

export default Book;
