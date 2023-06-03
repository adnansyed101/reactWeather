const getWeatherData = async (location: string, degreetype: string) => {
  try {
    const key = "9ee2353a7a9004a8d0d3701c47840223";
    const response = await fetch(`
    https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${key}&units=${degreetype}`);

    const weatherData = await response.json();

    return weatherData;
  } catch (error) {
    if (typeof error === "string") {
      throw new Error(error);
    }
  }
};

export default getWeatherData;
