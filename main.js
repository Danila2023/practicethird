'use strict';

let nubmerOfFilms;

function start() {
  nubmerOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');

  while (nubmerOfFilms == '' || nubmerOfFilms == null || isNaN(nubmerOfFilms)) {
    nubmerOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: nubmerOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};




function rememberMyfilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов', ''),
      b = prompt('На сколько оцените его', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }

  rememberMyfilms();

  

  function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Ошибка");
  }
  }
}

detectPersonalLevel();

console.log(personalMovieDB);