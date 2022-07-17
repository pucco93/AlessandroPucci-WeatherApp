import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, useColorModeValue, IconButton } from "@chakra-ui/react";
import Card from "./Card";
import Day from "./Day";

export interface IBottomSectionProps {
  selectedDay: number;
  setDay: (newDay: number) => void;
}

const BottomSection = (props: IBottomSectionProps) => {
  const forecastHours: string[] = ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"];
  const days: number[] = [1, 2, 3, 4, 5];
  const bg = useColorModeValue("white", "#525252");

  return (
    <Box bg={bg} className="lowerSection">
      <div className="daysContainer">
        {days.map((day, index) => (
          <Day
            day={day}
            key={index}
            selectedDay={props.selectedDay}
            setDay={props.setDay}
          />
        ))}
      </div>
      <div className="cardsContainer" style={{maxHeight: props.selectedDay !== 0 ? 1200 : 0, paddingBottom: props.selectedDay !== 0 ? 10 : 0}}>
        {forecastHours.map((hour, index) => (
          <Card hour={hour} key={index} />
        ))}
      </div>
    </Box>
  );
};

export default BottomSection;
