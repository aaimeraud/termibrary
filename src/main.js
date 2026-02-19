import User from "./classes/User";
import Library from "./classes/Library";
import Book from "./classes/Book";
import { input } from "./utils/input";
import { getAllBooks } from "./database/operations";

// async function main() {
//   const choix = await input("\nVoulez-vous vous enregistrer ? (Oui ou Non)\n");

//   switch (choix.trim().toLowerCase()) {
//     case "oui":
//       const name = await input("Quel est votre nom ?\n");
//       const userAge = await input("Quel âge avez vous ?\n");
//       const favoriteBook = await input("Quel est votre livre favori ?\n");
//       User.setUser(name, userAge, favoriteBook);
//       console.log(`\nSalut ${name} !`);
//       break;
//     case "non":
//       break;
//     default:
//       console.log("Choix invalide.\n");
//   }

//   console.log(`\nLa bibliothèque est ouverte !`);
//   while (true) {
//     console.log(`\n1. Ajouter un livre`);
//     console.log(`2. Afficher la bibliothèque`);
//     console.log(`3. Quitter`);
//     const choix = await input("\nEntrez votre choix : ");
//     switch (choix) {
//       case "1":
//         const bookTitle = await input(
//           "\nQuel est le nom du livre souhaitez vous ajouter ?\n",
//         );
//         const bookAuthor = await input("\nQuel est l'auteur de ce livre ?\n");
//         Library.setBook(bookTitle, bookAuthor);
//         break;
//       case "2":
//         Library.getLibrary();
//         break;
//       case "3":
//         console.log("\n À bientôt !");
//         return;
//       default:
//         console.log("\n Choix invalide.");
//     }
//   }

//   process.on("exit", () => db.close());
// }
// main();

console.log(getAllBooks());
