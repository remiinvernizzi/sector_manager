/******************************************************************
** Fichier réunissant les fonctions principales de l'application **
******************************************************************/

//Vérification que le champ contient un nombre et seulement un nombre
function numVerif(inputElt){
  //Expression régulière d'une chaîne ne contenant que des chiffres
  var regexInput = /^[0-9]+/;
  //Retourne la valeur booleenne du test de l'expression régulière
  return regexInput.test(inputElt.value);
}
