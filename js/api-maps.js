function iniciarMap(){
    var coord = {lat:0.35824860396111,lng:-78.11129525740009 };
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}