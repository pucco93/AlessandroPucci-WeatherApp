import { SunIcon } from "@chakra-ui/icons";
import { Box, useColorModeValue } from "@chakra-ui/react";
import HourItem from "./HourItem";

export interface IMainCardProps {}

const MainCard = (props: IMainCardProps) => {
  const hours = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    12,
  ];
  const bg = useColorModeValue('white', '#525252');
  const bgSeparator = useColorModeValue('grey', 'white');

  return (
    <Box className="container" bg={bg}>
      <Box className="now" bg={bg}>
        <div className="firstRow">
          <div className="tempContainer">
            <p className="nowCurrentTemperature">23°</p>
            <div className="minmaxContainer">
              <p className="nowMaxTemperature">27°</p>
              <Box bg={bgSeparator} className="temperatureSeparator"></Box>
              <p className="nowMinTemperature">19°</p>
            </div>
          </div>
          <div className="nowWeatherIcon">
            <SunIcon />
          </div>
        </div>
        <div className="secondRow">
          <p className="nowDescription">
            Today in Lodon: thunderstorm with heavy drizzle
          </p>
          <p className="humidity">Humidity: 70%</p>
          {/* <p className="nowLabel">Now</p> */}
        </div>
      </Box>
      {/* <div className="hoursContainer">
        {hours.map((item, index) => (
          <HourItem key={index} />
        ))}
      </div> */}
      <p className="latestUpdateDate">Last update: 16:52 09/07/2022</p>
    </Box>
  );
};

export default MainCard;
