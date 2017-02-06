/**********************************************
** Fichier de gestion de la carte de la zone **
**********************************************/

//Initialisation du tableau des marqueurs
marqueursTabs = [];

function initMap()
{
  //Paramètres de construction de la carte
  var optionsMap = {
    zoom: 12,
    center: new google.maps.LatLng(42.698141, 2.733111),
    //ou center: {lat: 42.698141, lng: 2.733111}
    disableDoubleClickZoom: true,
    fullScreenControl: false,
    keyboardShortcuts: false,
    mapTypeControl: false,
    panControl: false,
    scaleControl: true,
    scrollwheel: false,
    streetViewControl: false,
    zoomControl: false,
    clickableIcons: false
  };

  var carte = new google.maps.Map(document.getElementById("corps_page"), optionsMap);

  //Récupération de la liste des marqueurs à afficher dans le fichier marqueur.json
  ajaxGet("http://127.0.0.1/edsa-sector_manager/json/marqueur.json", function(reponse){
    listeMarqueurs = JSON.parse(reponse);
    //Variable
    var i = 0;
    //Parcours de la liste des marqueurs
    listeMarqueurs.forEach(function(marqueurElt){
      var marqueur = Object.create(Marqueur);
      marqueur.init(marqueurElt,carte);
      marqueur.afficher();
      marqueursTabs.push(marqueur);
    });
  });
}

console.log(marqueursTabs);

//Chargement de la carte
google.maps.event.addDomListener(window, 'load', initMap);
