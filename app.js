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


for(let i = 0; i < 2; i++){
  const a = prompt("Один из последних просмотреных фильмов?", ""),

        b = prompt("На сколько оцените его?","");
      
  if(a != null && b != null && a != "" && b != "" && a.length < 50){
    personalMovieDB.movies[a] = b;
  }  else{
    i--;
  }
  
}

if(personalMovieDB.count < 10){
  console.log('Просмотрено довольно мало фильмов.');
}
else if(personalMovieDB.count > 10 && personalMovieDB.count <30){
  console.log('Вы классический зритель!');
}
else if(personalMovieDB > 30){
  console.log('Вы киноман!');
}
else console.log('Произошла ошибка!');
console.log(personalMovieDB);