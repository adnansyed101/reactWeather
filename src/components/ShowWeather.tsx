/* eslint-disable @typescript-eslint/no-explicit-any */
import HourlyCard from "./HourlyCard";

type ShowWeatherProps = {
  data: any;
};

const ShowWeather = ({ data }: ShowWeatherProps) => {
  const { city, list } = data;

  const cardElement = list
    .filter((_item: any, index: number) => index <= 10)
    .map((item: any, index: number) => {
      return <HourlyCard key={index} hourlyCast={item} />;
    });

  return (
    <div className="showWeather my-4 px-4">
      <div className=" my-4 flex flex-col items-center border-y-2 px-10">
        <h3 className="text-2xl lg:text-3xl">{city.name}</h3>
        <h4 className="text-xl lg:text-2xl">{list[0].weather[0].main}</h4>
        <h1 className="my-2 text-4xl md:text-5xl">{list[0].main.temp}&deg;</h1>
        <p className="text-sm">
          H:{list[0].main.temp_max}&deg; || L:{list[0].main.temp_max}&deg;
        </p>
      </div>
      <div className="flex overflow-x-scroll lg:ml-64">{cardElement}</div>
    </div>
  );
};

export default ShowWeather;
