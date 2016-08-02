jQuery(function($){

if ($('body').hasClass('map')) {
    var geocoder;
    var map;
    var marker_head;
    var info_head;

    function initialize() {
        geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(34.0412612, -118.4287929);
        var mapOptions = {
            zoom: 16,
            center: latlng,
            scrollwheel: false,
						draggable: false,
            disableDefaultUI: true,
            styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#cdcdcd"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#dfdfdf"},{"lightness":17},{"weight":1.2}]}]
        }
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        marker_head = new google.maps.Marker({
            position: latlng,
            map: map
        });
        
        info_head = new google.maps.InfoWindow({
            content: "<p><strong>Platinum Data Recovery</strong><span>1.800.313.0044</span><a href='mailto:support@platinumdatarecovery.com'>support@platinumdatarecovery.com</a><a href='http://PlatinumDataRecovery.com'>http://PlatinumDataRecovery.com</a></p>"
        });
        google.maps.event.addListener(marker_head, 'click', function() {
            info_head.open(map, marker_head);
        });
       
    }
    $('a', '.map-links').on('click', function(e) {
        e.preventDefault();
        if ($(this).data('marker') == 'marker_head') {
            map.panTo(marker_head.getPosition());
            info_head.open(map, marker_head);
        }
        $('a', '.map-links').removeClass('active');
        $(this).addClass('active');
    })
    google.maps.event.addDomListener(window, 'load', initialize);
		
}
});
