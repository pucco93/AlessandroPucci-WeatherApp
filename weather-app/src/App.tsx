import React, { useEffect, useState } from "react";
import "./App.css";
import { extendTheme, useColorMode } from "@chakra-ui/react";
import TopBar from "./TopBar/TopBar";
import Body from "./Body/Body";
import APIManager from "./manager/APIManager";
import { Current, Day } from "./models/index";

function App() {
  let apiManager: APIManager = new APIManager();
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
    
  };

  const getAPIData = async () => {};

  const _getData = async () => {
/*     let dataFromLocalStorage = getLocalData();
    let currentData = await getAPIData();
    if(currentData) {
      updateDays(currentData.days);
      updateForecast(currentData.forecast);
    } else {
      updateDays(dataFromLocalStorage.days);
      updateForecast(dataFromLocalStorage.forecast);
    } */
  };

  const _removeSavedData = () => {
    // remove data
  };

  useEffect(() => {
    // get weather
    /* apiManager.getForecast();
    apiManager.getCurrent(); */
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
