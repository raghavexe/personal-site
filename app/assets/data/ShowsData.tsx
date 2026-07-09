type ShowWatched = {
  name: string;
  showDate: string;
  seasons: number;
  episodes: number;
  myRating: number;
  imdbLink: string;
};

const watched: ShowWatched[] = [
  {
    name: "Arcane",
    showDate: "06-11-2021",
    seasons: 1,
    episodes: 18,
    myRating: 5,
    imdbLink: "https://www.imdb.com/title/tt11126994/",
  },
  {
    name: "Mindhunter",
    showDate: "13-10-2017",
    seasons: 2,
    episodes: 19,
    myRating: 5,
    imdbLink: "https://www.imdb.com/title/tt5290382/",
  },
  {
    name: "Jujutsu Kaisen",
    showDate: "02-10-2020",
    seasons: 2,
    episodes: 47,
    myRating: 5,
    imdbLink: "https://www.imdb.com/title/tt12343534/",
  },
  {
    name: "Cyberpunk: Edgerunners",
    showDate: "13-09-2022",
    seasons: 1,
    episodes: 10,
    myRating: 5,
    imdbLink: "https://www.imdb.com/title/tt12590266/",
  },
  {
    name: "Brooklyn Nine-Nine",
    showDate: "17-09-2013",
    seasons: 8,
    episodes: 153,
    myRating: 5,
    imdbLink: "https://www.imdb.com/title/tt2467372/",
  },
  {
    name: "Hunter x Hunter",
    showDate: "02-10-2011",
    seasons: 1,
    episodes: 148,
    myRating: 5,
    imdbLink: "https://www.imdb.com/title/tt2098220/",
  },
  {
    name: "Chainsaw Man",
    showDate: "12-10-2022",
    seasons: 1,
    episodes: 12,
    myRating: 5,
    imdbLink: "https://www.imdb.com/title/tt13480436/",
  },
  {
    name: "Fargo",
    showDate: "15-04-2014",
    seasons: 5,
    episodes: 51,
    myRating: 5,
    imdbLink: "https://www.imdb.com/title/tt2802850/",
  },

  {
    name: "Loki",
    showDate: "09-06-2021",
    seasons: 2,
    episodes: 12,
    myRating: 4.5,
    imdbLink: "https://www.imdb.com/title/tt9140554/",
  },
  {
    name: "Naruto",
    showDate: "03-10-2002",
    seasons: 5,
    episodes: 220,
    myRating: 4.5,
    imdbLink: "https://www.imdb.com/title/tt0409591/",
  },
  {
    name: "Death Note",
    showDate: "04-10-2006",
    seasons: 1,
    episodes: 37,
    myRating: 5,
    imdbLink: "https://www.imdb.com/title/tt0877057/",
  },
  {
    name: "JoJo's Bizarre Adventure",
    showDate: "06-10-2012",
    seasons: 5,
    episodes: 190,
    myRating: 5,
    imdbLink: "https://www.imdb.com/title/tt2359704/",
  },
];

export default watched;
