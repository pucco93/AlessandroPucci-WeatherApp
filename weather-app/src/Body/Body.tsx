import MainCard from "./MainCard/MainCard";
import BottomSection from "./BottomSection/BottomSection";
import "./Body.css";
import NoForecastFound from "./NoForecastFound";
import { Current, Day } from "../models/index";
import Module from "module";

export interface IBodyProps {
  currentWeather: Current | null;
  days: Day[];
  selectedDay: Day | null;
  setDay: (newDay: Day) => void;
  isLoading: boolean;
}

const Body = (props: IBodyProps) => {
  return (
    <div
      className="body"
      style={{
        height: props.selectedDay === null ? "calc(100vh - 45px)" : "auto",
      }}
    >
      {/* {props.currentWeather === null && props.days.length === 0 ? (
        <NoForecastFound />
      ) : (
      <> */}
      <MainCard currentWeather={props.currentWeather} isLoading={props.isLoading} />
      <BottomSection
        selectedDay={props.selectedDay}
        days={props.days}
        setDay={props.setDay}
        isLoading={props.isLoading}
      />
      {/*   </>
      )} */}
    </div>
  );
};

export default Body;
