console.log("Connected To JS Server");

mapboxgl.accessToken = 'pk.eyJ1IjoiYXl1c2hqIiwiYSI6ImNrcWJ6YWhtdjByZjYydm92cG9nNDBycmUifQ.S5iEw5ITt5jguaWCZTuv-w';

  navigator.geolocation.getCurrentPosition(successLocation , errorLocation , {
      enableHighAccuracy: true
  })

  function successLocation(position){
    console.log(position)
    setupMap([position.coords.longitude , position.coords.latitude])
  }

  function errorLocation(){
    setupMap([-2.24, 53.48])
  }

  function setupMap(center){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center ,
        zoom: 15
      });

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      });
      
      map.addControl(directions, 'top-left');
  }
