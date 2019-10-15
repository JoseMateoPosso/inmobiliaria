var myCenter = new google.maps.LatLng(23.6881413, 90.4398652);

function initialize() {
    var mapProp = {
        center: myCenter,
        scrollwheel: false,
        zoom: 6,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
            "featureType": "landscape",
            "stylers": [{
                "color": "#fff"
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 51
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.highway",
            "stylers": [{
                "color": "#f0ede5"
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "road.arterial",
            "stylers": [{
                "color": "#fff"
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "road.local",
            "stylers": [{
                "color": "#14adf4"
            }, {
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "stylers": [{
                "saturation": -100
            }, {
                "visibility": "simplified"
            }]
        }, {
            "featureType": "administrative.province",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#ed734e"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#37BDD8"
            }, {
                "visibility": "on"
            }]
        }]
    };

    var map = new google.maps.Map(document.getElementById("gmap"), mapProp);
    var image = 'https://4.bp.blogspot.com/-r8wyL8Asb6k/WIoMqsOAotI/AAAAAAAAAKk/YDOemVcuOgIPSjh5OCQMvEYQno1vGllcACLcB/s1600/map.png';

    var marker = new google.maps.Marker({
        position: myCenter,
        icon: image
    });

    marker.setMap(map);


}

google.maps.event.addDomListener(window, 'load', initialize);