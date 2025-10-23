// Énoncé : Créez une fonction nommée direBonjour qui affiche "Bonjour le monde" dans la console.

const { co } = require("co")

/*
  Énoncé :
  Créez une fonction nommée `direBonjour` qui affiche "Bonjour le monde" dans la console.

  Signature attendue :
    function direBonjour() -> void

  Remarque : cette version est un placeholder pour l'exercice. L'étudiant doit remplacer
  la fonction par son implémentation. Le placeholder lève une erreur explicite pour
  indiquer que le code n'est pas encore implémenté.
*/
function direBonjour() {
 console.log("Bonjour le monde");

 direBonjour();// Appel de la fonction pour afficher le message
}

// Ne pas modifier la ligne ci-dessous
module.exports = { direBonjour }
