//const answer = [];


/*answer[0] = prompt("Як тебе звати?", " ");
answer[1] = prompt("Як твоє прізвище?", " ");
answer[2] = prompt("Який твій вік?", " ");


document.write(answer); */

const numberOfFilms = +prompt("Сколько фильмов вы ужее посмотрели?", " ");

const personalMovieDB = {

  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt("Один из последних просмотреных фильмов?", ""),

      b = prompt("На сколько оцените его?",""),
      c = prompt("Один из последних просмотреных фильмов?", ""),
      d = prompt("На сколько оцените его?","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);