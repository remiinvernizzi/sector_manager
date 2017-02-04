/**********************************************
** Fichier de gestion de la carte de la zone **
**********************************************/

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
    zoomControl: false
  }

  var carte = new google.maps.Map(document.getElementById("corps_test"), optionsMap);
}

google.maps.event.addDomListener(window, 'load', initMap);
