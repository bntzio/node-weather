const request = require('request');
const apiKey = require('../api/');

const getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      console.log('Unable to fetch the weather...');
    }
  });
};

module.exports.getWeather = getWeather;
