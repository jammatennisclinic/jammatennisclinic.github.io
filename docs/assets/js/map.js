function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        mapId: '4a27b44a60897913',
        center: {lat: 37.38040024743725, lng: -122.10431636140332},
        zoom: 13,
        disableDefaultUI: true,
        });
    
        // create for loop to load markers with their attached 
        // title
        // latitute, longitude
        // content string for info-marker
        const markerData = [
            [
                "Blach Middle School",
                37.363526678262055,
                -122.08255493731492,
                "<h1><strong>Blach Middle School</strong></h1>" +
                "<p>3 Classes from 2-5pm on Sundays at Cooper Park. <a href='classes.html'>Click Here to Learn More</a></p>",
            ],
            [
                "Cooper Park",
                37.367296537939694,
                -122.07382311535844,
                "<h1><strong>Cooper Park</strong></h1>" +
                "<p>5 Classes from 3-5pm on Saturdays and Sundays at Cooper Park. <a href='classes.html'>Click Here to Learn More</a></p>",
            ], 
            [
                "Gunn High School",
                37.40316322607594,
                -122.13408846173577,
                "<h1><strong>Gunn High School</strong></h1>" +
                "<p>5 Classes from 2-3pm on Saturdays at Gunn High. <a href='classes.html'>Click Here to Learn More</a></p>",
            ],
            [
                "Los Altos High School",
                37.388518266490514,
                -122.10853049686537,
                "<h1><strong>Los Altos High School</strong></h1>" +
                "<p>2 Classes from 3-4pm on Saturdays and Sundays at LAHS. <a href='classes.html'>Click Here to Learn More</a></p>",
            ]
        ]
        
        // for loop to create markers
        for (let i = 0; i < markerData.length; i++) {
            const currMarker = markerData[i];

            const marker = new google.maps.Marker({
                position: {lat: currMarker[1], lng: currMarker[2]},
                map: map,
                icon: {
                    url: "https://jammatennis.com/images/logo.png",
                    scaledSize: new google.maps.Size(55, 55),
                },
                animation: google.maps.Animation.DROP,
                title: currMarker[0],
              });
            
            const infoWindow = new google.maps.InfoWindow({
                content: currMarker[3],
                maxWidth: 150,
            });

            marker.addListener("click", () => {
                infoWindow.open(map, marker);
            });

            infoWindow.addListener('closeclick', ()=>{
                // Handle focus manually.
              });
        }
}

window.initMap = initMap;
