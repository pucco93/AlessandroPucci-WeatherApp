import { Box, useColorModeValue } from "@chakra-ui/react";
import { Current } from "../../models";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

export interface IMainCardProps {
  currentWeather: Current | null;
  isLoading: boolean;
}

const MainCard = (props: IMainCardProps) => {
  const bg = useColorModeValue("white", "#525252");
  const bgSeparator = useColorModeValue("grey", "white");
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  } as const;

  return (
    <Box className="container" bg={bg}>
      <Box className="now" bg={bg}>
        <div className="firstRow">
          <Skeleton isLoaded={!props.isLoading}>
            <div className="tempContainer">
              <p className="nowCurrentTemperature">
                {props.currentWeather?.mediumTemperature}°
              </p>
              <div className="minmaxContainer">
                <p className="nowMaxTemperature">
                  {props.currentWeather?.maxTemperature}°
                </p>
                <Box bg={bgSeparator} className="temperatureSeparator"></Box>
                <p className="nowMinTemperature">
                  {props.currentWeather?.minTemperature}°
                </p>
              </div>
            </div>
          </Skeleton>
          <Skeleton isLoaded={!props.isLoading}>
            <div className="nowWeatherIcon">
              <Box
                width={100}
                height={100}
                transform={"scale(1.3)"}
                bgImage={props.currentWeather?.icon}
              />
            </div>
          </Skeleton>
        </div>
        <Skeleton isLoaded={!props.isLoading}>
          <div className="secondRow">
            <p className="nowDescription">
              Today in Lodon: {props.currentWeather?.description}
            </p>
            <p className="humidity">
              Humidity: {props.currentWeather?.humidity}%
            </p>
          </div>
        </Skeleton>
      </Box>
      <p className="latestUpdateDate">
        Last update:{" "}
        {typeof(props.currentWeather?.lastUpdate) === "string" ? new Date(props.currentWeather?.lastUpdate)?.toLocaleDateString("en-gb", options) : props.currentWeather?.lastUpdate?.toLocaleDateString("en-gb", options)}
      </p>
    </Box>
  );
};

export default MainCard;
