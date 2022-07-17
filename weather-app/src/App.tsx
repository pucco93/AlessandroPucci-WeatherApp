import React, { useEffect, useState } from "react";
import "./App.css";
import { extendTheme, useColorMode } from "@chakra-ui/react";
import TopBar from "./TopBar/TopBar";
import Body from "./Body/Body";
import APIManager from "./manager/APIManager";
import { Current, Day } from "./models/index";
import LSManager from "./manager/LocalStorageManager";

function App() {
  let apiManager: APIManager = new APIManager();
  let lsManager: LSManager = new LSManager();
  const { colorMode, toggleColorMode } = useColorMode();
  const [currentWeather, updateCurrent] = useState<Current | null>(null);
  const [days, updateDays] = useState<Day[]>([]);
  const [selectedDay, setDay] = useState<number>(0);

  const _reloadWeather = () => {
    debugger;
  };

  const _setDay = (newDay: number) => {
    setDay(newDay);
  };

  const getLocalData = () => {
    let days: Day[] = lsManager.getForecast();
    let current: Current | null = lsManager.getCurrent();
    return {days: days, current: current};
  };

  const getAPIData = async () => {
    let days: Day[] | null = await apiManager.getForecast();
    let current: Current | null = await apiManager.getCurrent();
    return {days: days, current: current};
  };

  const _getData = async () => {
    let dataFromLocalStorage = getLocalData();
    let currentData = await getAPIData();
    if(currentData) {
      updateDays(currentData.days);
      updateCurrent(currentData.current);
    } else {
      updateDays(dataFromLocalStorage.days);
      updateCurrent(dataFromLocalStorage.current);
    }
  };

  const _removeSavedData = () => {
    // remove data
  };

  useEffect(() => {
    // get weather
    _getData();
  }, []);

  return (
    <div className="App">
      <TopBar
        colorMode={colorMode}
        toggleColorMode={toggleColorMode}
        reloadWeather={_reloadWeather}
        removeLocalStorage={_removeSavedData}
      />
      <Body
        currentWeather={currentWeather}
        days={days}
        selectedDay={selectedDay}
        setDay={_setDay}
      />
    </div>
  );
}

export default App;
