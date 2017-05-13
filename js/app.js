jQuery(document).ready(function($) {

    "use strict";

    function Weather(temp, city, countryCode, summary, lat, long) {
        this.temp = temp;
        this.city = city;
        this.countryCode = countryCode;
        this.summary = summary;
    }

    var weather = new Weather();

    var controller = {
        getData: function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showData);
            } else {
                $('.row-switch').prepend('<p class="text-warn">Your browser does not support GeoLocation API!</p>');
            }
            function showData(position) {     
                $.ajax({
                    url: "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&units=metric&appid=d8de442e265f955c706a6de99df5396e",
                    success: function(json) {
                        weather.temp = Math.floor(json.main.temp) + '°';
                        weather.city = json.name;
                        weather.countryCode = json.sys.country;
                        weather.summary = json.weather[0].main;
                        view.render();
                    },
                    error: function(err) {
                        throw new Error("Can't load anything!");
                    }
                });
            }
        }
    };

    var view = {
        run: function () {
            controller.getData();
        },
        render: function() {
            $('#temp>h2').text(weather.temp);
            $('#city').text(weather.city);
            $('#code').text(weather.countryCode);
            $('#summary').text(weather.summary);
        }
    };

    view.run();

});
