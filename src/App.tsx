import Header from "./components/Header";
import { useState, ChangeEvent, FormEvent } from "react";
import getWeatherData from "./weatherData";

function App() {
  const [location, setLocation] = useState("London");
  const [isFarenheit, setIsFarenheit] = useState(true);

  const handleLocation = (e: ChangeEvent<HTMLInputElement>): void => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const degree = isFarenheit ? "imperial" : "metric";
    getWeatherData(location, degree).then((data) => console.log(data));
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
    </div>
  );
}

export default App;
