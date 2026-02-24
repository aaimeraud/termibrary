<div align="center">
<h1>Termi-brary — a simple terminal book logger</h1>

<a href="./README.fr.md">Lire en Français</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="mailto:danielfortune.pro@gmail.com">Contact</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://github.com/aaimeraud/termibrary/issues/new">Issues</a>
<br />

</div>

A command-line app to log and track your personal book library, with persistent storage powered by SQLite.

## Project Context

After my **first JavaScript class** (covering OOP and JS basics), I built this project to practice **object-oriented programming** in a real-world context.

The first challenge I ran into was data persistence, the library wasn't saving between sessions. I solved this by integrating **SQLite**, which is built into [**Bun**](https://www.bun.sh), requiring no extra dependencies.

## Features

- Add books to your library (title, author, read status)
- View all books in your library with their read status
- Persistent storage via SQLite — data is retained between sessions
- Built with OOP principles (`Book`, `Library`, `User` classes)

## Requirements

- [**Bun**](https://www.bun.sh) (v1.3.\* and above)

## Getting Started

```bash
git clone https://github.com/aaimeraud/termibrary.git

cd termibrary

bun run start
```

## Project Structure

```
src/
├── main.js              # Entry point
├── classes/
│   ├── Book.js          # Book constructor
│   ├── Library.js       # Library methods (add, display)
│   └── User.js          # User class
├── database/
│   ├── database.js      # SQLite connection
│   └── operations.js    # DB queries (getAllBooks, addBook...)
└── utils/
    └── input.js         # Terminal input helper
```

## AI Usage

I am limiting my use of AI and allowing myself to use it only to :
- Ask questions when I'm stuck or if I need to ask something specific. 
- Ask if "my code follows the rules and best practices of OOP"
- Learn the things I haven't seen in class yet.
- Enhance this readme (I started writing it and then asked Copilot to "make it cleaner").