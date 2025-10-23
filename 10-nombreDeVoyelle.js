/*
  Énoncé :
  Écris une fonction `nombreDeVoyelles(phrase)` qui retourne le nombre de voyelles
  (a, e, i, o, u, y) dans une chaîne, insensible à la casse.

  Signature attendue :
    function nombreDeVoyelles(phrase) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function nombreDeVoyelles(phrase) {
  
  let nombreDeVoyelles = 0;
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] == "a"){
      nombreDeVoyelles = nombreDeVoyelles + 1;
    } else if (phrase[i] == "e"){
      nombreDeVoyelles = nombreDeVoyelles + 1;
    } else if (phrase[i] == "i"){
      nombreDeVoyelles = nombreDeVoyelles + 1;

    } else if (phrase[i] == "o"){
      nombreDeVoyelles = nombreDeVoyelles + 1;
    } else if (phrase[i] == "u"){
      nombreDeVoyelles = nombreDeVoyelles + 1;
    } else if (phrase[i] == "y"){
      nombreDeVoyelles = nombreDeVoyelles + 1;
    }
}
return nombreDeVoyelles;
}
console.log(nombreDeVoyelles("Bonjour")); // Exemple d'appel
// Ne pas modifier la ligne ci-dessous
module.exports = { nombreDeVoyelles }
