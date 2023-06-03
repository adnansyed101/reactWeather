import { BsFillCloudsFill } from "react-icons/bs";
import { ChangeEvent, FormEvent } from "react";

type HeaderProps = {
  location: string;
  isFarenheit: boolean;
  handleLocation: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent) => void;
  toggleFarenheit: () => void;
};

const Header = ({
  location,
  isFarenheit,
  handleLocation,
  handleSubmit,
  toggleFarenheit,
}: HeaderProps) => {
  return (
    <header className="bg-slate-800 py-5">
      <div className="header">
        <span className="flex items-center text-2xl text-white">
          <BsFillCloudsFill className="mr-2" />
          React Weather App
        </span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Location"
            className="rounded-l-lg border-none py-3 md:pr-40 lg:pr-20 xl:pr-56"
            value={location}
            onChange={(e) => handleLocation(e)}
          />
          <button
            className="rounded-r-lg bg-orange-600 px-3 py-3 tracking-wide text-white"
            type="submit"
          >
            Search
          </button>
        </form>
        <div
          className="rounded-lg bg-white px-8 py-2"
          onClick={toggleFarenheit}
        >
          <span className={isFarenheit ? "font-bold" : ""}>&deg;F</span> /{" "}
          <span className={isFarenheit ? "" : "font-bold"}>&deg;C</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
