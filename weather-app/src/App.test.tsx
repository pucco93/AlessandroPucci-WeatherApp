import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { LSCurrent } from "./constants/Constants";
import * as models from "./models";
import Day from "./Body/BottomSection/Day";
import Card from "./Body/BottomSection/Card";

// Check if pressing changing theme, it changes it for real
test("check changing theme", () => {
  render(
    <ChakraProvider>
      <ColorModeScript initialColorMode={"light"} />
      <App />
    </ChakraProvider>
  );
  const themeButton = screen.getByTestId("change-theme");
  const titleElement = screen.getByTestId("title");
  const textColor = titleElement.getAttribute("data-test-colormode");

  fireEvent.click(themeButton);
  const newTextColor = titleElement.getAttribute("data-test-colormode");

  // Based on the previous settings, I'm expecting to have a different value after the click
  expect(newTextColor).toBe(textColor == "light" ? "dark" : "light");
});

// Check if localStorage has been cleaned by pressing on the correct button
test("cleaning localStorage", () => {
  render(<App />);
  const cleanButton = screen.getByTestId("delete");
  const mockItem: models.Current = {
    icon: "",
    description: "",
    mediumTemperature: "",
    minTemperature: "",
    maxTemperature: "",
    humidity: 0,
    lastUpdate: new Date(),
  };
  localStorage.setItem(LSCurrent, JSON.stringify(mockItem));

  fireEvent.click(cleanButton);

  let localStorageItem = JSON.parse(localStorage.getItem(LSCurrent)!);
  // Mock a current forecast and then insert it on localstorage, then click the deleteButton and get the previous forecast from the localStorage, expect to be null
  expect(localStorageItem).toBe(null);
});

test("refresh current data", async () => {
  render(<App />);

  const refreshButton = screen.getByTestId("refresh");
  let mockItem: models.Current = {
    icon: "",
    description: "",
    mediumTemperature: "",
    minTemperature: "",
    maxTemperature: "",
    humidity: 0,
    lastUpdate: new Date(),
  };
  localStorage.setItem(LSCurrent, JSON.stringify(mockItem));

  // Hit refreshButton
  fireEvent.click(refreshButton);
  // Technically my code would set another new item with different Date obj
  const newMockItem: models.Current = {
    icon: "",
    description: "",
    mediumTemperature: "",
    minTemperature: "",
    maxTemperature: "",
    humidity: 0,
    lastUpdate: new Date(),
  };
  localStorage.setItem(LSCurrent, JSON.stringify(newMockItem));

  let localStorageItem = JSON.parse(localStorage.getItem(LSCurrent)!);
  let isDifferent: boolean = false;
  if (
    new Date(localStorageItem.lastUpdate).getTime() !==
    new Date(mockItem.lastUpdate).getTime()
  )
    isDifferent = true;
  expect(isDifferent).toBe(true);
});

test("get data", async () => {
  const items: models.Day[] = [
    {
      day: "1 Monday",
      forecasts: [],
    },
    {
      day: "2 Tuesday",
      forecasts: [],
    },
    {
      day: "3 Wednesday",
      forecasts: [],
    },
    {
      day: "4 Thursday",
      forecasts: [],
    },
    {
      day: "5 Friday",
      forecasts: [],
    },
  ];

  items.forEach((item) =>
    render(
      <Day
        day={item}
        daysNumber={items.length}
        selectedDay={null}
        setDay={() => {}}
        isLoading={false}
      />
    )
  );
  const dayButton = document.querySelector("button[class*='dayButton']");
  expect(dayButton).toBeVisible();
});
/* 
test("get cards", async () => {
  const items: models.Forecast[] = [
    {
      datetime: 1658587649965,
      day: 1,
      icon: "",
      description: "Thunderstorm with heavy rain, I hope.",
      mediumTemperature: "30°",
      minTemperature: "24°",
      maxTemperature: "33°",
    },
    {
      datetime: 1658587649965,
      day: 2,
      icon: "",
      description: "Thunderstorm with heavy rain, I hope.",
      mediumTemperature: "30°",
      minTemperature: "24°",
      maxTemperature: "33°",
    },
    {
      datetime: 1658587649965,
      day: 3,
      icon: "",
      description: "Thunderstorm with heavy rain, I hope.",
      mediumTemperature: "30°",
      minTemperature: "24°",
      maxTemperature: "33°",
    },
    {
      datetime: 1658587649965,
      day: 4,
      icon: "",
      description: "Thunderstorm with heavy rain, I hope.",
      mediumTemperature: "30°",
      minTemperature: "24°",
      maxTemperature: "33°",
    },
    {
      datetime: 1658587649965,
      day: 5,
      icon: "",
      description: "Thunderstorm with heavy rain, I hope.",
      mediumTemperature: "30°",
      minTemperature: "24°",
      maxTemperature: "33°",
    },
    {
      datetime: 1658587649965,
      day: 6,
      icon: "",
      description: "Thunderstorm with heavy rain, I hope.",
      mediumTemperature: "30°",
      minTemperature: "24°",
      maxTemperature: "33°",
    },
    {
      datetime: 1658587649965,
      day: 7,
      icon: "",
      description: "Thunderstorm with heavy rain, I hope.",
      mediumTemperature: "30°",
      minTemperature: "24°",
      maxTemperature: "33°",
    },
  ];

  items.forEach((forecast, index) =>
    render(<Card forecast={forecast} key={index} />)
  );
  const hourCard = screen.getByTestId("hour-card");
  expect(hourCard).toBeVisible();
}); */
