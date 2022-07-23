import { Button, Skeleton, useColorModeValue } from "@chakra-ui/react";
import * as Model from '../../models/index';

export interface IDayProps {
  day: Model.Day;
  daysNumber: number;
  selectedDay: Model.Day | null;
  setDay: (newDay: Model.Day) => void;
  isLoading: boolean;
}

const Day = (props: IDayProps) => {
  const bg = useColorModeValue("white", "#525252");
  const color = useColorModeValue("#525252", "white");

  return (
    <Skeleton isLoaded={!props.isLoading} className="daySkeleton" style={{width: `calc((100% / ${props.daysNumber}) - 10px)`}}>
    <Button
      bg={bg}
      textColor={color}
      _hover={{ cursor: props.selectedDay === props.day ? "default" : "pointer" }}
      aria-label={String(props.day)}
      className="dayButton"
      variant={props.selectedDay === props.day ? "disabled" : "outline"}
      onClick={() => props.setDay(props.day)}
    >
      {props.day?.day}
    </Button>
    </Skeleton>
  );
};

export default Day;
