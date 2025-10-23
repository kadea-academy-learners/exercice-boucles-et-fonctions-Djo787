/*
  Énoncé :
  Crée une fonction `max(a, b)` qui retourne :
    - le plus grand des deux nombres
    - la chaîne "Les deux nombres sont égaux" si les deux sont identiques
    - null si un argument n'est pas un nombre valide

  Signature attendue :
    function max(a, b) -> number | string | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function max(a, b) {
    // Vérifier si a et b sont des nombres valides
  if (typeof a !== 'number' || typeof b !== 'number' || !Number.isFinite(a) || !Number.isFinite(b)) {
    return null; // Entrée invalide
  }

  // Vérifier s'ils sont égaux
  if (a === b) {
    return "Les deux nombres sont égaux";
  }

  // Retourner le plus grand des deux
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(max(10, 10)); 

  // Ne pas modifier la ligne ci-dessous
module.exports = { max }
