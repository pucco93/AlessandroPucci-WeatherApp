import { Button, useColorModeValue } from "@chakra-ui/react";

export interface IDayProps {
  day: number;
  selectedDay: number;
  setDay: (newDay: number) => void;
}

const Day = (props: IDayProps) => {
  const bg = useColorModeValue("white", "#525252");
  // const bgHover = useColorModeValue("#ffffff", "#525252");
  const color = useColorModeValue("#525252", "white");

  return (
    <Button
      bg={bg}
      textColor={color}
      _hover={{ cursor: props.selectedDay === props.day ? "default" : "pointer" }}
      aria-label={String(props.day)}
      className="dayButton"
      variant={props.selectedDay === props.day ? "disabled" : "outline"}
      onClick={() => props.setDay(props.day)}
    >
      {props.day}
    </Button>
  );
};

export default Day;
