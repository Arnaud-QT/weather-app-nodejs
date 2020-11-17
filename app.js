const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const city = process.argv[2]

geocode(city, (error, data) => {
  if(city === undefined){
    console.log('Enter a city.')
  } else {
    if (error) {
      return console.log(error)
    }
  
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error)
      }
      
      console.log(data.location)
      console.log(forecastData)
    })
  }

})



