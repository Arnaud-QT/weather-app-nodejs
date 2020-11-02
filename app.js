const request = require('request')
const geocode = require('./utils/geocode')

// const url = 'http://api.weatherstack.com/current?access_key=6de773347ae32a2293b162f0176f7bc0&query=43.651070,-79.347015'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Enable to connect to weather server')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log('Weather for ' + response.body.location.name)
//     }
// })

// const geocodeURL = ('https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXJuYXVkcXQiLCJhIjoiY2tnZTJ2aWsxMDhvMzJzdDl1cnhpeHo2NyJ9.g4vgJppphaJiwVqRVj4XFg&limit=1')

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to the server.')
//     } else if(response.body.features.length === 0) {
//         console.log('No location found.')
//     }
//     else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]

//         console.log(latitude, longitude)
//     }
// })


geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})