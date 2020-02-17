$(document).ready(function(){
  // accessing key from json file
  var myKey = JSON.parse(apiKey);
  var keyString = myKey[0].key;
  console.log(keyString);
                         
$.ajax({
  url : `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&api_key=${keyString}`,
  type :'GET',
  data:'json',
  success:function(data){
    console.log(data);
    var i;
    for (i = 0; i < data.photos.length; i++) {

    document.getElementById('result').innerHTML +=
      '<div class="col col-sm-6 col-md-3 col-lg-3">' +
      '<img class="img-thumbnail w-50" src="' + data.photos[i].img_src + '"></img>' +
      '<p>ID: ' + data.photos[i].id + '</p>' +
      '<p>Date: ' + data.photos[i].earth_date + '</p>' +
      '<p>Camera: ' + data.photos[i].camera.full_name + '</p>' +
      '<p>Camera: ' + data.photos[i].camera.rover_id + '</p>' +
      '<p>'
      '</div>'
    }
  },
   
  error:function(){
  console.log('error');
  }

  });//ajax
 });//document ready

// <script async defer
// src="https://maps.googleapis.com/maps/api/js?key=" + myKey&callback=initMap">
// </script>
