/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, 
  selezionando solamente i primi 2 caratteri della prima e gli ultimi 3 
  della seconda. Converti la stringa risultante in maiuscolo e mostrala 
  con un console.log().
*/

console.log("-----------");
console.log("Domanda 1");

function myFunc(str1, str2) {
  return str1.slice(0, 2).concat(str2.slice(1, 4));
}

console.log(myFunc("ciao", "ucci").toUpperCase());

console.log("-----------");

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi 
  deve essere un valore random compreso tra 0 e 100 (incluso).
*/

console.log("-----------");
console.log("Domanda 2");

function myFunc2() {
  const myArr = [];

  // In questo for loop l'array e' vuoto percio dobbiamo dare alla i un
  // valore di < 10 non di .length. La i anche se non viene usata dentro
  // il corpo, serve per ripetere il codice 10 volte.

  for (let i = 0; i < 10; i++) {
    const numeroCasuale = Math.floor(Math.random() * 100 + 1);
    myArr.push(numeroCasuale);
  }

  return myArr;
}

console.log(myFunc2());

console.log("-----------");

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array 
  composto da soli valori numerici
*/

console.log("-----------");
console.log("Domanda 3");

const myArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numeriPari = myArr2.filter(pariDispari);

function pariDispari(num) {
  return num % 2 === 0;
}

console.log(numeriPari);

console.log("-----------");

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

console.log("-----------");
console.log("Domanda 4");

let sum = 0;
myArr2.forEach(somma);

function somma(item) {
  sum += item;
}

console.log(sum);

console.log("-----------");

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

console.log("-----------");
console.log("Domanda 5");

// REDUCE ➡️➡️ .reduce(funzione, valoreIniziale) ➡️ I due parametri di
// reduce prendono una funzione che e' required ed un valore iniziale per
// "ridurre" un Array ad un unico valore.

const sum2 = myArr2.reduce(somma2, 0);

function somma2(accumulatore, elementoCorrente) {
  return accumulatore + elementoCorrente;
}

console.log(sum2);

console.log("-----------");

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come 
  parametri, ritorni un secondo array con tutti i valori del precedente 
  incrementati di n
*/

console.log("-----------");
console.log("Domanda 6");

let myArr3 = [3, 4, 5, 6, 42, 21, 7];
let newArr;
function myFunc3(n) {
  newArr = myArr3.map(function (valore) {
    return valore + n;
  });
}

myFunc3(3);
console.log(newArr);

console.log("-----------");

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array 
  contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

console.log("-----------");
console.log("Domanda 7");

let stringhe = ["I", "need", "to", "study", "more"];

function getLengths(arr) {
  return arr.map(function (str) {
    return str.length;
  });
}

console.log(getLengths(stringhe));

console.log("-----------");

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI 
  da 1 a 99.
*/

console.log("-----------");
console.log("Domanda 8");

function numeriDispari() {
  let dispari = [];
  for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
      dispari.push(i);
    }
  }
  return dispari;
}

console.log(numeriDispari());

console.log("-----------");

/* Questo array di film verrà usato negli esercizi a seguire. 
Non modificarlo e scorri oltre per riprendere gli esercizi :) 
*/
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

console.log("-----------");
console.log("Domanda 9");

function filmPiuVecchio() {
  let vecchio = movies[0];

  movies.forEach(diffAnno);

  function diffAnno(film) {
    if (parseInt(film.Year) < parseInt(vecchio.Year)) {
      vecchio = film;
    }
  }
  return vecchio;
}

console.log(filmPiuVecchio());

console.log("-----------");

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array 
  fornito.
*/

console.log("-----------");
console.log("Domanda 10");

function numeroFilm() {
  return movies.length;
}

console.log(numeroFilm());

console.log("-----------");

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film 
  contenuti nell'array fornito.
*/

console.log("-----------");
console.log("Domanda 11");

function titoliFilm() {
  return movies.map(titoli);

  function titoli(film) {
    return film.Title;
  }
}

console.log(titoliFilm());

console.log("-----------");

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film 
  usciti nel millennio corrente.
*/

console.log("-----------");
console.log("Domanda 12");

function filmMillennioCorrente() {
  return movies.filter(corrente);
  function corrente(film) {
    return parseInt(film.Year) >= 2000;
  }
}

console.log(filmMillennioCorrente());

console.log("-----------");

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui 
  sono stati prodotti i film contenuti nell'array fornito.
*/

console.log("-----------");
console.log("Domanda 13");

function sommaAnniFilm() {
  return movies.reduce(function (acc, film) {
    return acc + parseInt(film.Year);
  }, 0);
}

console.log(sommaAnniFilm());

console.log("-----------");

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film 
  (la funzione riceve un imdbID come parametro).
*/

console.log("-----------");
console.log("Domanda 14");

const risultato = trovaFilm("tt0100054");

function trovaFilm(imdbID) {
  return movies.find(function (film) {
    return film.imdbID === imdbID;
  });
}
console.log(risultato);

console.log("-----------");

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo 
  film uscito nell'anno fornito come parametro.
*/

console.log("-----------");
console.log("Domanda 15");

function indiceFilmAnno() {
  return movies.findIndex(function (film) {
    return parseInt(film.Year) === 2005;
  });
}

console.log(indiceFilmAnno());

console.log("-----------");

let text = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

const result = text;

function myFunction(item, index) {
  text += index + ": " + " " + item;
}

console.log(result);
