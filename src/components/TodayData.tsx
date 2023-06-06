import { fromUnixTime, getHours, getMinutes } from "date-fns";

/* eslint-disable @typescript-eslint/no-explicit-any */
type TodayDataProps = {
  data: any;
};

const TodayData = ({ data }: TodayDataProps) => {
  const { city, list } = data;

  return (
    <div className="bg-slate-800 py-4 my-5">
      <div className=" container mx-auto grid grid-cols-2 grid-rows-3 items-center justify-center gap-2 px-5 py-5 lg:grid-cols-5 lg:grid-rows-2">
        <span className="border-b-2 lg:border-b-0">
          <p className="text-center text-xl text-slate-400">Sunrise</p>
          <p className="text-center text-xl text-slate-200">
            {getHours(fromUnixTime(city.sunrise))}:{getMinutes(city.sunrise)}
          </p>
        </span>
        <span className="border-b-2 lg:border-b-0">
          <p className="text-center text-xl text-slate-400">Sunset</p>
          <p className="text-center text-xl text-slate-200">
            {getHours(fromUnixTime(city.sunset))}:{getMinutes(city.sunset)}
          </p>
        </span>
        <span className="border-b-2 lg:border-b-0">
          <p className="text-center text-xl text-slate-400">Sea Level</p>
          <p className="text-center text-xl text-slate-200">
            {list[0].main.sea_level}
          </p>
        </span>
        <span className="border-b-2 lg:border-b-0">
          <p className="text-center text-xl text-slate-400">Humidity</p>
          <p className="text-center text-xl text-slate-200">
            {list[0].main.humidity}&deg;
          </p>
        </span>
        <span className="border-b-2 lg:border-b-0">
          <p className="text-center text-xl text-slate-400">Wind Speed</p>
          <p className="text-center text-xl text-slate-200">
            {list[0].wind.speed} kmph
          </p>
        </span>
        <span className="border-b-2 lg:border-b-0">
          <p className="text-center text-xl text-slate-400">Feels Like</p>
          <p className="text-center text-xl text-slate-200">
            {list[0].main.feels_like}&deg;
          </p>
        </span>
        <span className="border-b-2 lg:border-b-0">
          <p className="text-center text-xl text-slate-400">Wind Gust</p>
          <p className="text-center text-xl text-slate-200">
            {list[0].wind.gust}
          </p>
        </span>
        <span className="border-b-2 lg:border-b-0">
          <p className="text-center text-xl text-slate-400">Pressure</p>
          <p className="text-center text-xl text-slate-200">
            {list[0].main.pressure} hPa
          </p>
        </span>
        <span className="border-b-2 lg:border-b-0">
          <p className="text-center text-xl text-slate-400">Ground Level</p>
          <p className="text-center text-xl text-slate-200">
            {list[0].main.grnd_level}
          </p>
        </span>
        <span className="border-b-2 lg:border-b-0">
          <p className="text-center text-xl text-slate-400">Wind Degree</p>
          <p className="text-center text-xl text-slate-200">
            {list[0].wind.deg}&deg;
          </p>
        </span>
      </div>
    </div>
  );
};

export default TodayData;
