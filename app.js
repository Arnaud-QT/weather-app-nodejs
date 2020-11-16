const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

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

// geocode('Boston', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

/
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})