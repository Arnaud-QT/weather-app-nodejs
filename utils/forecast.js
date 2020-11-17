const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6de773347ae32a2293b162f0176f7bc0&query='+ latitude + ','+ longitude +'&units=f'
    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        }
        else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'It is currently : ' + response.body.current.temperature + " degree!")
        }
    })
}

module.exports = forecast