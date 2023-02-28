const coord = {
    lon: -122.3321,
    lat: 47.6062,
    weather: [{
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d",
        base: "stations",
        main: {
            temp: 79.38,
            feels_like: 75.74,
            temp_min: 77.4,
            pressure: 1000,
            humidity: 78
            },
        visibility: 10000,
        wind: {
                speed: 5.66,
                deg: 200
            },
        clouds: {
            all: 75
        },
        dt: 1677006621,
        sys: {
            type: 2,
            id: 2041694,
            country: "US",
            sunrise: 1676991905,
            sunset: 1677030070
            },
        timezone: -28800,
        id: 5809844,
        name: "Seattle",
        cod: 200
        }
    ]
}

module.exports = coord;