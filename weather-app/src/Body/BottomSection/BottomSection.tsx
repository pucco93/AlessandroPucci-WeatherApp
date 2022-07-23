import { Box, useColorModeValue } from "@chakra-ui/react";
import Card from "./Card";
import Day from "./Day";
import * as Model from "../../models/index";

export interface IBottomSectionProps {
  selectedDay: Model.Day | null;
  setDay: (newDay: Model.Day) => void;
  days: Model.Day[];
  isLoading: boolean;
}

const BottomSection = (props: IBottomSectionProps) => {
  const bg = useColorModeValue("white", "#525252");

  return (
    <Box bg={bg} className="lowerSection">
      <div className="daysContainer">
        {props.days.map((day, index) => (
          <Day
            day={day}
            key={index}
            selectedDay={props.selectedDay}
            setDay={props.setDay}
            isLoading={props.isLoading}
            daysNumber={props.days?.length}
          />
        ))}
      </div>
      <div
        className="cardsContainer"
        style={{
          maxHeight: props.selectedDay !== null ? 1200 : 0,
          paddingBottom: props.selectedDay !== null ? 10 : 0,
        }}
      >
        {props.selectedDay?.forecasts.map((forecast, index) => (
          <Card forecast={forecast} key={index} />
        ))}
      </div>
    </Box>
  );
};

export default BottomSection;
