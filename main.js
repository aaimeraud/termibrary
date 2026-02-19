import { input } from "./input.js";

class Livre {
  static counter = 0;

  constructor(title, author, bookStatus = false) {
    this.title = title;
    this.author = author;
    this.id = ++Livre.counter;
    this.bookStatus = bookStatus;
    Library.library.push(this);
    console.log(`Vous avez ajouté "${title}" de ${author}.x`);
  }

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

  // static modifyBookStatus(livre) {
  //   this.bookStatus =
  //     livre.bookStatus === true
  //       ? (this.bookStatus = "\n Vous avez lu ce livre\n")
  //       : (this.bookStatus = "\n Vous n'avez pas lu ce livre\n");
  // }
}

class Library {
  static library = [];

  static getLibrary() {
    console.log(" ");
    console.log(`Voici votre Bibliothèque :`);
    Library.library.forEach((livre) => {
      console.log(
        `#${livre.id} "${livre.title}" de ${livre.author}. ${livre.bookStatus}`,
      );
    });
  }

  static setBook(title, author, bookStatus = false) {
    // this.title = title,
    // this.author = author,
    new Livre(title, author, bookStatus);
  }
}
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

// Library.setBook("A l'ouest rien de nouveau", "Jacobi");
Library.setBook("Le rouge et le noir", "Some Guy");
// Library.setBook("HTML/CSS pour les nuls", "Un Nul");
// Library.setBook("Le Texas", "Un Texan");

// Library.getLibrary();

Library.getLibrary();

async function main() {
  const choix = await input(
    "\nEntrez votre choix : Voulez-vous vous enregistrer ? (Oui ou Non)\n",
  );

  switch (choix.trim().toLowerCase()) {
    case "oui":
      const name = await input("Quel est votre nom ?\n");
      const userAge = await input("Quel âge avez vous ?\n");
      const favoriteBook = await input("Quel est votre livre favori ?\n");
      User.setUser(name, userAge, favoriteBook);
      console.log(`\nSalut ${name} !`);
      break;
    case "non":
      break;
    default:
      console.log("Choix invalide.\n");
  }

  console.log(`\nLa bibliothèque est ouverte !`);
  while (true) {
    console.log(`\n1. Ajouter un livre`);
    console.log(`2. Afficher la bibliothèque`);
    console.log(`3. Quitter`);
    const choix = await input("\nEntrez votre choix : ");
    switch (choix) {
      case "1":
        const bookTitle = await input(
          "\nQuel est le nom du livre souhaitez vous ajouter ?\n",
        );
        const bookAuthor = await input("\nQuel est l'auteur de ce livre ?\n");
        Library.setBook(bookTitle, bookAuthor);
        break;
      case "2":
        Library.getLibrary();
        break;
      case "3":
        console.log("\n À bientôt !");
        return;
      default:
        console.log("\n Choix invalide.");
    }
  }
}

main();

// library.push(livre_1, livre_2);

// livre_1.setTitle("Das Kapital");
// livre_1.setAuthor("Karl Marx");

// Livre.get();
