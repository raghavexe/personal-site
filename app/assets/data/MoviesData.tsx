type MovieWatched = {
  name: string;
  releaseDate: string; // DD-MM-YYYY
  runtimeMinutes: number;
  myRating: number; // out of 5
  imdbLink: string;
};

const movies: MovieWatched[] = [
  {
    name: "Jujutsu Kaisen 0",
    releaseDate: "24-12-2021",
    runtimeMinutes: 105,
    myRating: 4.5,
    imdbLink: "https://www.imdb.com/title/tt14331144/",
  },
  {
    name: "Chainsaw Man: Reze Arc",
    releaseDate: "TBA",
    runtimeMinutes: 100,
    myRating: 5,
    imdbLink: "https://www.imdb.com/title/tt0000000/",
  },
  {
    name: "Get Out (Jordan Peele)",
    releaseDate: "24-02-2017",
    runtimeMinutes: 104,
    myRating: 4.5,
    imdbLink: "https://www.imdb.com/title/tt5052448/",
  },
  {
    name: "The Matrix",
    releaseDate: "31-03-1999",
    runtimeMinutes: 136,
    myRating: 5,
    imdbLink: "https://www.imdb.com/title/tt0133093/",
  },
  {
    name: "The Matrix Reloaded",
    releaseDate: "15-05-2003",
    runtimeMinutes: 138,
    myRating: 4,
    imdbLink: "https://www.imdb.com/title/tt0234215/",
  },
  {
    name: "The Matrix Revolutions",
    releaseDate: "05-11-2003",
    runtimeMinutes: 129,
    myRating: 3.5,
    imdbLink: "https://www.imdb.com/title/tt0242653/",
  },

  // ================= DC =================

  {
    name: "Suicide Squad",
    releaseDate: "05-08-2016",
    runtimeMinutes: 123,
    myRating: 3,
    imdbLink: "https://www.imdb.com/title/tt1386697/",
  },
  {
    name: "The Suicide Squad",
    releaseDate: "06-08-2021",
    runtimeMinutes: 132,
    myRating: 4.5,
    imdbLink: "https://www.imdb.com/title/tt6334354/",
  },
  {
    name: "Superman (2025)",
    releaseDate: "11-07-2025",
    runtimeMinutes: 129,
    myRating: 4.5,
    imdbLink: "https://www.imdb.com/title/tt5950044/",
  },

  // ================= Marvel (pre-Endgame, no Hulk films) =================

  {
    name: "Iron Man",
    releaseDate: "02-05-2008",
    runtimeMinutes: 126,
    myRating: 4.5,
    imdbLink: "https://www.imdb.com/title/tt0371746/",
  },
  {
    name: "Iron Man 2",
    releaseDate: "07-05-2010",
    runtimeMinutes: 124,
    myRating: 3.5,
    imdbLink: "https://www.imdb.com/title/tt1228705/",
  },
  {
    name: "Thor",
    releaseDate: "06-05-2011",
    runtimeMinutes: 115,
    myRating: 4,
    imdbLink: "https://www.imdb.com/title/tt0800369/",
  },
  {
    name: "Captain America: The First Avenger",
    releaseDate: "22-07-2011",
    runtimeMinutes: 124,
    myRating: 4,
    imdbLink: "https://www.imdb.com/title/tt0458339/",
  },
  {
    name: "The Avengers",
    releaseDate: "04-05-2012",
    runtimeMinutes: 143,
    myRating: 4.5,
    imdbLink: "https://www.imdb.com/title/tt0848228/",
  },
  {
    name: "Iron Man 3",
    releaseDate: "03-05-2013",
    runtimeMinutes: 130,
    myRating: 3.5,
    imdbLink: "https://www.imdb.com/title/tt1300854/",
  },
  {
    name: "Thor: The Dark World",
    releaseDate: "08-11-2013",
    runtimeMinutes: 112,
    myRating: 3,
    imdbLink: "https://www.imdb.com/title/tt1981115/",
  },
  {
    name: "Captain America: The Winter Soldier",
    releaseDate: "04-04-2014",
    runtimeMinutes: 136,
    myRating: 4.5,
    imdbLink: "https://www.imdb.com/title/tt1843866/",
  },
  {
    name: "Guardians of the Galaxy",
    releaseDate: "01-08-2014",
    runtimeMinutes: 121,
    myRating: 4.5,
    imdbLink: "https://www.imdb.com/title/tt2015381/",
  },
  {
    name: "Avengers: Age of Ultron",
    releaseDate: "01-05-2015",
    runtimeMinutes: 141,
    myRating: 4,
    imdbLink: "https://www.imdb.com/title/tt2395427/",
  },
  {
    name: "Ant-Man",
    releaseDate: "17-07-2015",
    runtimeMinutes: 117,
    myRating: 4,
    imdbLink: "https://www.imdb.com/title/tt0478970/",
  },
  {
    name: "Captain America: Civil War",
    releaseDate: "06-05-2016",
    runtimeMinutes: 147,
    myRating: 4.5,
    imdbLink: "https://www.imdb.com/title/tt3498820/",
  },
  {
    name: "Doctor Strange",
    releaseDate: "04-11-2016",
    runtimeMinutes: 115,
    myRating: 4,
    imdbLink: "https://www.imdb.com/title/tt1211837/",
  },
  {
    name: "Guardians of the Galaxy Vol. 2",
    releaseDate: "05-05-2017",
    runtimeMinutes: 136,
    myRating: 4,
    imdbLink: "https://www.imdb.com/title/tt3896198/",
  },
  {
    name: "Spider-Man: Homecoming",
    releaseDate: "07-07-2017",
    runtimeMinutes: 133,
    myRating: 4,
    imdbLink: "https://www.imdb.com/title/tt2250912/",
  },
  {
    name: "Thor: Ragnarok",
    releaseDate: "03-11-2017",
    runtimeMinutes: 130,
    myRating: 4.5,
    imdbLink: "https://www.imdb.com/title/tt3501632/",
  },
  {
    name: "Black Panther",
    releaseDate: "16-02-2018",
    runtimeMinutes: 134,
    myRating: 4.5,
    imdbLink: "https://www.imdb.com/title/tt1825683/",
  },
  {
    name: "Avengers: Infinity War",
    releaseDate: "27-04-2018",
    runtimeMinutes: 149,
    myRating: 5,
    imdbLink: "https://www.imdb.com/title/tt4154756/",
  },
  {
    name: "Ant-Man and the Wasp",
    releaseDate: "06-07-2018",
    runtimeMinutes: 118,
    myRating: 3.5,
    imdbLink: "https://www.imdb.com/title/tt5095030/",
  },
  {
    name: "Captain Marvel",
    releaseDate: "08-03-2019",
    runtimeMinutes: 123,
    myRating: 4,
    imdbLink: "https://www.imdb.com/title/tt4154664/",
  },
  {
    name: "Avengers: Endgame",
    releaseDate: "26-04-2019",
    runtimeMinutes: 181,
    myRating: 5,
    imdbLink: "https://www.imdb.com/title/tt4154796/",
  },
];

export default movies;
