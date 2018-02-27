// this has changes from the Application.js to show map on show.htm.erm varible, object title, address

$(document).ready(function (){

    var myCoords = new google.maps.LatLng(latitude, longitude);

    function initialize() {
      var mapOptions = {
      center: myCoords,
      zoom: 12,
      scrollwheel: false
      };

      var map = new google.maps.Map(document.getElementById('destination-map'), mapOptions);    


      var marker = new google.maps.Marker({
        position: myCoords,
        map: map,
        title: 'address',
        animation: google.maps.Animation.DROP
      });

      



      var contentString = '<h2>' + address + '</h2>' +
      '<p>Where all your dreams come true.</p>';
   
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
   
    google.maps.event.addListener(marker, 'hover', function() {
       infowindow.open(map,marker);
    });
        
    }
    google.maps.event.addDomListener(window, 'load', initialize);
});