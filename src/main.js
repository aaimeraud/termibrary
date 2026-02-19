import User from "./classes/User";
import Library from "./classes/Library";
import UserRepository from "./database/UserRepository";
import { db } from "./database/database";
import { input } from "./utils/input";

process.on("exit", () => db.close());

async function login() {
  let user = null;
  const name = await input("Quel est votre nom ?\n");
  const favoriteBook = await input("Quel est votre livre favori ?\n");
  user = new User(name, favoriteBook);
  console.log(`\nSalut ${name} !`);
}

async function addBook() {
  const bookTitle = await input(
    "\nQuel est le nom du livre souhaitez vous ajouter ?\n",
  );
  const bookAuthor = await input("\nQuel est l'auteur de ce livre ?\n");
  Library.createBook(bookTitle, bookAuthor);
}

function prompt() {
  console.log(`\n1. Voir vos Informations`);
  console.log(`2. Ajouter un livre`);
  console.log(`3. Afficher la bibliothèque`);
  console.log(`4. Quitter`);
}

async function modifyBooks(params) {
  
}

async function main() {
  if (UserRepository.hasUser()) {
    const existingUser = UserRepository.getAllUsers()[0];
    console.log(`\nSalut ${existingUser.name} !`);
  } else {
    const choix = await input(
      "\nVoulez-vous vous enregistrer ? (Oui ou Non)\n",
    );
    switch (choix.trim().toLowerCase()) {
      case "oui":
        await login();
        break;
      case "non":
        break;
      default:
        console.log("Choix invalide.\n");
    }
  }
  console.log(`\nLa bibliothèque est ouverte !`);
  while (true) {
    prompt();
    const choix = await input("\nEntrez votre choix : ");
    switch (choix) {
      case "1":
        User.getUser();
        break;
      case "2":
        await addBook();
        break;
      case "3":
        Library.getLibrary();
        break;
      case "4":
        console.log("\n À bientôt !");
        return;
      default:
        console.log("\n Choix invalide.");
    }
  }
}
main();

// TESTS

// Library.setBook("Moon Wars", "Georges Thomas", 0);
// Library.setBook("Moon ", "Georges", 1);
// Library.setBook(" Wars", "Thomas", 1);
// Library.getLibrary();
