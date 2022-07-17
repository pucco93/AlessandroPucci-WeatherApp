import { SunIcon } from "@chakra-ui/icons";
import { Box, useColorModeValue } from "@chakra-ui/react";

export interface ICardProps {
  hour: string;
}

const Card = (props: ICardProps) => {
  const bg = useColorModeValue("white", "#525252");
  const bgSeparator = useColorModeValue("grey", "white");

  let desktopView = (
    <Box bg={bg} className="cardContainer">
      <div className="day">{props.hour}</div>
      <div className="firstRow">
        <div className="temperatureContainer">
          <div className="forecastTemperature">28°</div>
          <div className="tempsContainerDesktop">
            <div className="forecastMaxTemp">29°</div>
            <Box bg={bgSeparator} className="temperatureSeparator" />
            <div className="forecastMinTemp">18°</div>
          </div>
        </div>
        <SunIcon className="forecastIcon" />
      </div>
      <div className="forecastDescription">thunderstorm with heavy drizzle</div>
    </Box>
  );

  let mobileView = (
    <Box bg={bg} className="cardContainer">
      <div className="day">{props.hour}</div>
      <SunIcon className="forecastIcon" />
      <div className="forecastDescription">thunderstorm with heavy drizzle</div>
      <div className="temperatureContainer">
        <div className="forecastTemperature">28°</div>
        {/* <div className="verticalLine"/> */}
        <div className="forecastMaxTemp">29°</div>
        <Box bg={bgSeparator} className="verticalLine" />
        <div className="forecastMinTemp">18°</div>
      </div>
    </Box>
  );

  let view = window.matchMedia("(max-width: 756px)").matches
    ? mobileView
    : desktopView;

  return <>{view}</>;
};

export default Card;
