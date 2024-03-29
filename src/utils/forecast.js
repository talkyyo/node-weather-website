const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1c4cc25b23ef4b0dde5c3857135e009f/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to connect to weather service!', undefined)
        } else {
            const currentTemp = body.currently.temperature
            const rainProb = body.currently.precipProbability
            const todaySummary = body.daily.data[0].summary
            const temperatureHigh = body.daily.data[0].temperatureHigh
            const temperatureLow = body.daily.data[0].temperatureLow
            callback(undefined, todaySummary + " It is currently " + currentTemp + " degrees out. The high today is " + temperatureHigh 
                + " with a low of " + temperatureLow + ". There is a " + rainProb + "% chance of rain.")
        }
    })
}

module.exports = forecast