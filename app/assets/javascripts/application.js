// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function (){

    var myCoords = new google.maps.LatLng(35.590406, -82.553347);

    function initialize() {
        var mapOptions = {
        center: myCoords,
        zoom: 12,
        scrollwheel: false
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);    

        var marker = new google.maps.Marker({
            position: myCoords,
            map: map,
            title: 'BaseCamp Asheville',
            animation: google.maps.Animation.DROP
        });

        var contentString = '<h2>BaseCamp Asheville</h2>' +
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


