var map;

            DG.then(function () {
                map = DG.map('map', {
                    center: [53.33382659358545, 83.77051591873179],
                    zoom: 17,
                    zoomControl:true,
                    geoclicker:false,
                    fullscreenControl:false
                });

                DG.marker([53.33382659358545, 83.77051591873179]).addTo(map);
            });
