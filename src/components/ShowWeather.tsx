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

  console.log(data);

  return (
    <div className="my-4 px-4">
      <div className="showWeather">
        <div className=" my-4 flex flex-col items-center px-10 lg:w-2/4">
          <h3 className="text-2xl lg:text-3xl">{city.name}</h3>
          <h4 className="text-xl lg:text-2xl">{list[0].weather[0].main}</h4>
          <h1 className="my-2 text-4xl md:text-5xl">
            {list[0].main.temp}&deg;
          </h1>
          <p className="text-sm">
            H:{list[0].main.temp_max}&deg; || L:{list[0].main.temp_max}&deg;
          </p>
        </div>
        <div className="flex overflow-x-scroll border-t-2 lg:ml-64">
          {cardElement}
        </div>
      </div>
      <div className="text-center mt-6">Today: {list[0].weather[0].description}</div>
    </div>
  );
};

export default ShowWeather;
