import { SunIcon } from "@chakra-ui/icons";
import { Box, useColorModeValue } from "@chakra-ui/react";

export interface IHourItemProps {}

const HourItem = (props: IHourItemProps) => {
    const bg = useColorModeValue('white', '#525252');
  return (
    <Box bg={bg} className="hourContainer">
      <p className="temperature">21°</p>
      <div className="weatherIcon">
        <SunIcon />
      </div>
      <p className="hourLabel">18:00</p>
    </Box>
  );
};

export default HourItem;