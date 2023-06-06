import Header from "./components/Header";
import {
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
  useCallback,
} from "react";
import getWeatherData from "./weatherData";
import ShowWeather from "./components/ShowWeather";
import TodayData from "./components/TodayData";
import FiveDayForecast from "./components/FiveDayForecast";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [weatherData, setWeatherData] = useState<any>(undefined);
  const [location, setLocation] = useState("London");
  const [isFarenheit, setIsFarenheit] = useState(true);

  const fetchWeatherData = useCallback(async () => {
    const result = await getWeatherData("London", "imperial");
    setWeatherData(result);
  }, []);

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  const handleLocation = (e: ChangeEvent<HTMLInputElement>): void => {
    setLocation(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const degree = isFarenheit ? "imperial" : "metric";
    const result = await getWeatherData(location, degree);
    setWeatherData(result);
  };

  const toggleFarenheit = (): void => {
    setIsFarenheit((prev) => !prev);
  };

  return (
    <div className="App">
      <Header
        location={location}
        isFarenheit={isFarenheit}
        handleLocation={handleLocation}
        handleSubmit={handleSubmit}
        toggleFarenheit={toggleFarenheit}
      />
      {weatherData && (
        <>
          <ShowWeather data={weatherData} />
          <TodayData data={weatherData}/>
          <FiveDayForecast data={weatherData}/>
        </>
      )}
    </div>
  );
}

export default App;
