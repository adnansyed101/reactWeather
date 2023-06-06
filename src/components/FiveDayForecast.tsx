/* eslint-disable @typescript-eslint/no-explicit-any */
import { format, fromUnixTime } from "date-fns";

type FiveDayForecastProps = {
  data: any;
};

const FiveDayForecast = ({ data }: FiveDayForecastProps) => {
  const fiveDayData = () => {
    const daysArray: any = [];

    const time = new Date().getHours();

    data.list.forEach(function (single: any) {
      const texthour: string = single.dt_txt.substring(11, 13);
      const numberHour = parseInt(texthour, 10);
      const difference = Math.abs(time - numberHour);

      if (
        difference === 1 ||
        difference === 0 ||
        (time === 23 && numberHour === 21) ||
        (time === 24 && numberHour === 0) ||
        (time === 2 && numberHour === 0)
      ) {
        daysArray.push(single);
      }
    });
    return daysArray;
  };

  const fiveDayWeatherElement = fiveDayData().map(
    (item: any, index: number) => {
      return (
        <tr key={index} className="border-b-2 border-slate-300">
          <td className="px-2 text-sm lg:text-lg">
            {format(fromUnixTime(item.dt), "EEEE")}
          </td>
          <td className="px-2 text-center">
            <figure className="w-10 lg:w-16">
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
                alt={item.weather[0].description}
              />
            </figure>
          </td>
          <td className="text-center lg:text-lg">{item.main.humidity}&deg;</td>
          <td className="text-center lg:text-lg">{item.main.temp}&deg;</td>
        </tr>
      );
    }
  );

  return (
    <div className="my-5 text-slate-900">
      <table className="mx-auto w-11/12">
        <thead>
          <tr className="border-b-2 border-slate-400">
            <th className="pl-2 text-left text-sm lg:text-xl">DAY</th>
            <th className="text-sm lg:text-xl">&nbsp;</th>
            <th className="text-sm lg:text-xl">HUMIDITY</th>
            <th className="px-3 text-sm lg:text-xl">TEMPERATURE</th>
          </tr>
        </thead>
        <tbody>{fiveDayWeatherElement}</tbody>
      </table>
    </div>
  );
};

export default FiveDayForecast;
