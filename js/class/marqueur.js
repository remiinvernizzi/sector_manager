/*************************************************
** Fichier de gestion des marqueurs de la carte **
*************************************************/

//Classe Marqueur
var Marqueur = {
  //Initialisation du marqueur
  init : function(input,carte){
    //Elements du marqueur
    this.titre = input.titre; //Titre du point
    this.id = input.id; //ID du point
    this.type = input.type;  //Type du point
    this.latitude = input.latitude; //Latitude du point
    this.longitude = input.longitude; //Longitude du point
    this.carte = carte; //Définition de la carte concernée
  },

  //Affichage d'un marqueur
  afficher : function(){
    //Paramètres de construction du marqueur a afficher
    var optionsMarqueur = {
      position : new google.maps.LatLng(this.latitude, this.longitude),
      map: this.carte,
      title: this.titre
    };
    //Affichage du marqueur
    return new google.maps.Marker(optionsMarqueur);
  },

  //Modification d'un marqueur
  modifier : function(){

  },

  //Suppression d'un marqueur
  supprimer : function(){

  }
};
