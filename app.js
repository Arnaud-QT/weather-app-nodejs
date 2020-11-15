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




geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})