import { getHours, fromUnixTime } from "date-fns";

/* eslint-disable @typescript-eslint/no-explicit-any */
type HourlyCardProps = {
  hourlyCast: any;
};

const HourlyCard = ({ hourlyCast }: HourlyCardProps) => {
  const { dt, weather, main } = hourlyCast;

  return (
    <div className="my-4 flex flex-col items-center space-y-2 px-10 text-2xl">
      <p>{getHours(fromUnixTime(dt))}</p>
      <figure className="w-16">
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
          alt={weather[0].description}
        />
      </figure>
      <p>{main.temp}</p>
    </div>
  );
};

export default HourlyCard;
