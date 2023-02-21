const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=58329f831d86050adca383cfde0d511f&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to Weather Service!", undefined);
    } else if (body.error) {
      callback("Unable to find the Location!", undefined);
    } else {
      const temp = body.current.temperature;
      const feelsLike = body.current.feelslike;
      const weatherDescriptions = body.current.weather_descriptions[0];
      callback(
        undefined,
        `${weatherDescriptions} throughout the day, Its Currently ${temp} degrees out, but feels Like ${feelsLike} degrees out.`
      );
    }
  });
};

module.exports = forecast;
