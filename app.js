//const answer = [];


/*answer[0] = prompt("Як тебе звати?", " ");
answer[1] = prompt("Як твоє прізвище?", " ");
answer[2] = prompt("Який твій вік?", " ");


document.write(answer); */
let numberOfFilms;

function start (){

    numberOfFilms = +prompt("Сколько фильмов вы ужее посмотрели?", " ");

  while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt("Сколько фильмов вы ужее посмотрели?", " ");
  }

}
start();

const personalMovieDB = {

  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};



function rememberMyFilms(){
  for(let i = 0; i < 2; i++){
    const a = prompt("Один из последних просмотреных фильмов?", ""),
  
          b = prompt("На сколько оцените его?","");
        
    if(a != null && b != null && a != "" && b != "" && a.length < 50){
      personalMovieDB.movies[a] = b;
    }  else{
      i--;
    }
    
  }
}
rememberMyFilms();





function detectedPersonalLevel(){
  if(personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов.');
  }
  else if(personalMovieDB.count > 10 && personalMovieDB.count <30){
    console.log('Вы классический зритель!');
  }
  else if(personalMovieDB > 30){
    console.log('Вы киноман!');
  }else console.log('Произошла ошибка!');
  
}
detectedPersonalLevel();

function showMyDB(){
  if(personalMovieDB[privat] == false){
    console.log(personalMovieDB);
  }
}
showMyDB();

function writeYourGenres(){
  for(let i = 1; i <=3; i++){
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
  };
};
writeYourGenres();
console.log(personalMovieDB);