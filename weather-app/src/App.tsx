import React, { useEffect, useState } from "react";
import "./App.css";
import { extendTheme, useBoolean, useColorMode } from "@chakra-ui/react";
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
  const [selectedDay, setDay] = useState<Day | null>(null);
  const [isLoading, {on: startLoading, off: endLoading}] = useBoolean(true);

  const _reloadWeather = () => {
    _getData();
  };

  const _setDay = (newDay: Day) => {
    setDay(newDay);
  };

  const getLocalData = () => {
    let days: Day[] = lsManager.getForecast();
    let current: Current | null = lsManager.getCurrent();
    return { days: days, current: current };
  };

  const getAPIData = async () => {
    let days: Day[] = await apiManager.getForecast();
    let current: Current | null = await apiManager.getCurrent();
    return { days: days, current: current };
  };

  const _getData = async () => {
    startLoading();
    let dataFromLocalStorage = getLocalData();
    let currentData = await getAPIData();
    if (currentData.current && currentData.days) {
      updateDays(currentData.days);
      updateCurrent(currentData.current);
      lsManager.setCurrent(currentData.current);
      lsManager.setForecast(currentData.days);
    } else {
      updateDays(dataFromLocalStorage.days);
      updateCurrent(dataFromLocalStorage.current);
    }
    endLoading();
  };

  const _removeSavedData = () => {
    lsManager.deleteCurrent();
    lsManager.deleteForecast();
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
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
