//const answer = [];


/*answer[0] = prompt("Як тебе звати?", " ");
answer[1] = prompt("Як твоє прізвище?", " ");
answer[2] = prompt("Який твій вік?", " ");


document.write(answer); */

const personalMovieDB = {

  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function(){
    personalMovieDB.count = +prompt("Сколько фильмов вы ужее посмотрели?", " ");

    while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
      personalMovieDB.count = +prompt("Сколько фильмов вы ужее посмотрели?", " ");
    }
  },
  rememberMyFilms: function(){
    for(let i = 0; i < 2; i++){
      const a = prompt("Один из последних просмотреных фильмов?", ""),
    
            b = prompt("На сколько оцените его?","");
          
      if(a != null && b != null && a != "" && b != "" && a.length < 50){
        personalMovieDB.movies[a] = b;
      }  else{
        i--;
      }
      
    }
  },
  
  detectedPersonalLevel: function(){
    if(personalMovieDB.count < 10){
      console.log('Просмотрено довольно мало фильмов.');
    }
    else if(personalMovieDB.count > 10 && personalMovieDB.count <30){
      console.log('Вы классический зритель!');
    }
    else if(personalMovieDB > 30){
      console.log('Вы киноман!');
    }else console.log('Произошла ошибка!');
  },

  showMyDB: function(hidden){
    if(!hidden){
      console.log(personalMovieDB);
    }
  },

  toggleVisibleDB: function() {
   if(personalMovieDB.privat){
     personalMovieDB.privat = false;
   } else {
     personalMovieDB.privat = true;
   }
  },

  writeYourGenres: function(){
    for(let i = 1; i <=3; i++){
      let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");

      if(genre == '' || genre == null){
        console.log('Вы ввели не корректно');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
      
    }

    personalMovieDB.genres.forEach((item,i) =>{
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  }

};

