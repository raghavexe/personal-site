type Book = {
  name: string;
  author: string;
  ISBN: string;
  link: string;
  imgLink: string;
};
import DarkImperium from "../Dark-Imperium1.jpg";
import DarkImperium2 from "../Dark-Imperium2.jpg";
import DarkImperium3 from "../Dark-Imperium3.jpg";
import Fulgrim from "../Fulgrim-Book.jpg";
import Shattered from "../Shattered.jpg";
import Cyberpunk from "../Cyberpunk.jpeg";
import Deathwatch from "../Deathwatch.png";

const BooksRead: Book[] = [
  {
    name: "Fulgrim: The Perfect Son",
    author: "Jude Reid",
    ISBN: "978-1836092049",
    link: "https://www.blacklibrary.com/new-titles/warhammer-40000/ebook-fulgrim-the-perfect-son-eng-2025.html",
    imgLink: Fulgrim,
  },
  {
    name: "Dark Imperium",
    author: "Guy Haley",
    ISBN: "978-1784966645",
    link: "https://www.blacklibrary.com/warhammer-40000/novels/dark-imperium-ebook-2021.html",
    imgLink: DarkImperium,
  },
  {
    name: "Dark Imperium: Plague War",
    author: "Guy Haley",
    ISBN: "978-1784969103",
    link: "https://www.blacklibrary.com/warhammer-40000/novels/dark-imperium-plague-war-ebook-2021.html",
    imgLink: DarkImperium2,
  },
  {
    name: "Dark Imperium: Godblight",
    author: "Guy Haley",
    ISBN: "978-1800262034",
    link: "https://www.blacklibrary.com/authors/guy-haley/dark-imperium-godblight-ebook-2021.html",
    imgLink: DarkImperium3,
  },
  {
    name: "Shadow of the Tomb Raider",
    author: "S. D. Perry",
    ISBN: "978-1785659911",
    link: "https://titanbooks.com/9712-shadow-of-the-tomb-raider-path-of-the-apocalypse/",
    imgLink:
      "https://m.media-amazon.com/images/I/71xxiQxQoUL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Siege of Terra: The Shattered and the Soulless",
    author: "Graham McNeill",
    ISBN: "978-1836090199",
    link: "https://www.blacklibrary.com/new-titles/the-horus-heresy/ebook-the-shattered-and-the-soulless-eng-2025.html",
    imgLink: Shattered,
  },
  {
    name: "Cyberpunk: No_Coincidence",
    author: "Rafał Kosik",
    ISBN: "978-3-426-22812-8",
    link: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.amazon.de/Cyberpunk-2077-Coincidence-Rafal-Kosik/dp/3426228122&ved=2ahUKEwjvjquZgLKVAxXWSfEDHb5ANpkQFnoECDAQAQ&usg=AOvVaw0sjV1bYSlKx94LVKjE0D_0",
    imgLink: Cyberpunk,
  },
  {
    name: "Deathwatch",
    author: "Steve Parker",
    ISBN: "978-1789991246",
    link: "https://www.amazon.de/-/en/Deathwatch-Steve-Parker/dp/1849704465",
    imgLink: Deathwatch,
  },
];

export default BooksRead;
export type { Book };
