import { db } from "./database";

// Opérations de Bibliothèque

/** Affiche tous les livres */
export function getAllBooks() {
  return db.query("SELECT * FROM books").all();
}

/** Ajoute un livre dans la db
 * 
 * @param {string} title le titre du livre
 
 * @param {string} author l'auteur du livre
 * 
 */
export function addBook(title, author) {
  db.query("INSERT INTO books (title, author, isRead) VALUES (?, ?, 0)").run(
    title,
    author,
  );
}
