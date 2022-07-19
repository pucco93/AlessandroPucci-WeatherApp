import { SunIcon } from "@chakra-ui/icons";
import { Box, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import { Forecast } from "../../models";

export interface ICardProps {
  forecast: Forecast;
}

const Card = (props: ICardProps) => {
  const bg = useColorModeValue("white", "#525252");
  const bgSeparator = useColorModeValue("grey", "white");
  let [mediaQuery] = useMediaQuery("(max-width: 768px)");
  let lowerResStyle = {
    width: "100%",
    backgroundRepeat: "no-repeat"
  };

  let hours: string =
    new Date(props.forecast.datetime).getUTCHours() < 10
      ? `0${new Date(props.forecast.datetime).getUTCHours()}`
      : `${new Date(props.forecast.datetime).getUTCHours()}`;
  let minutes: string =
    new Date(props.forecast.datetime).getUTCMinutes() < 10
      ? `0${new Date(props.forecast.datetime).getUTCMinutes()}`
      : `${new Date(props.forecast.datetime).getUTCMinutes()}`;

  let desktopView = (
    <Box bg={bg} className="cardContainer">
      <div className="day">{hours + ":" + minutes}</div>
      <div className="firstRow">
        <div className="temperatureContainer">
          <div className="forecastTemperature">
            {props.forecast.mediumTemperature}°
          </div>
          <div className="tempsContainerDesktop">
            <div className="forecastMaxTemp">
              {props.forecast.maxTemperature}°
            </div>
            <Box bg={bgSeparator} className="temperatureSeparator" />
            <div className="forecastMinTemp">
              {props.forecast.minTemperature}°
            </div>
          </div>
        </div>
        <Box
          width={100}
          height={100}
          transform={"scale(1.3)"}
          bgImage={props.forecast?.icon}
        />
      </div>
      <div className="forecastDescription">{props.forecast.description}</div>
    </Box>
  );

  let mobileView = (
    <Box bg={bg} className="cardContainer">
      <div className="day">{hours + ":" + minutes}</div>
      <Box
        width={120}
        height={120}
        style={lowerResStyle}
        bgImage={props.forecast?.icon}
        bgPos="center"
      />
      <div className="forecastDescription">{props.forecast.description}</div>
      <div className="temperatureContainer">
        <div className="forecastTemperature">
          {props.forecast.mediumTemperature}°
        </div>
        <div className="forecastMaxTemp">{props.forecast.maxTemperature}°</div>
        <Box bg={bgSeparator} className="verticalLine" />
        <div className="forecastMinTemp">{props.forecast.minTemperature}°</div>
      </div>
    </Box>
  );

  return <>{mediaQuery ? mobileView : desktopView}</>;
};

export default Card;
