import MainCard from "./MainCard/MainCard";
import BottomSection from "./BottomSection/BottomSection";
import "./Body.css";
import NoForecastFound from "./NoForecastFound";
import { Current, Day } from "../models/index";

export interface IBodyProps {
  currentWeather: Current | null;
  days: Day[];
  selectedDay: number;
  setDay: (newDay: number) => void;
}

const Body = (props: IBodyProps) => {
  return (
    <div className="body" style={{height: props.selectedDay === 0 ? 'calc(100vh - 45px)' : 'auto'}}>
      {/* {props.currentWeather === null && props.days.length === 0 ? (
        <NoForecastFound />
      ) : (
      <> */}
      <MainCard />
      <BottomSection selectedDay={props.selectedDay} setDay={props.setDay} />
      {/*   </>
      )} */}
    </div>
  );
};

export default Body;
