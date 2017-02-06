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
    var icon_path;
    if(this.type == "barrage"){
      icon_path = 'ressource/icone/barrage_icon.png';
    }
    else{
      icon_path = 'ressource/icone/station_icon.png';
    }

    //Définition de l'image du marqueur
    var imageMarqueur = {
      //Adresse de l'icone personnalisée
      url: icon_path,
      //Taille de l'icone
      size: new google.maps.Size(48,48),
      //Origine de l'image
      origin: new google.maps.Point(0,0),
      //Ancre de l'image
      anchor: new google.maps.Point(24,45)
    };

    //Paramètres de construction du marqueur a afficher
    var optionsMarqueur = {
      position : new google.maps.LatLng(this.latitude, this.longitude),
      map: this.carte,
      title: this.titre,
      icon: imageMarqueur
    };

    //Centre la carte sur clique d'un marqueur
    google.maps.event.addDomListener(optionsMarqueur, 'click', function(){
      optionsMarqueur.map.setCenter(optionsMarqueur.position);
    });

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
