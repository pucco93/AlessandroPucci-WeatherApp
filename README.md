# WeatherApp

This is a simple React app created to show the current weather and forecasts for the next 5 days.
The app will search for the data using openweathermap.org APIs from 2 different endpoint: 
- current
- forecast5

If the manager can't access the data due to lack of connection or something else it can search it in localStorage.
Using two button the app can refresh the current local storage data or delete the data.

The app is responsive for desktop (1440p max), tablets and smartphones, changing the UX between desktop and mobiles.

## Testing the app
To lauch the app:
1. clone the repo
2. install the dependencies with npm i
3. launch the app with npm start

To launch the tests, do step 1 and 2 of the previous list, if you haven't yet:
- launch the tests with npm run test

This app has been developed with node version: v14.15.0.

## Features
In the top bar i've put three buttons (from left to right): 
- delete the data in local storage
- refresh the data in local storage
- change the current theme (light/dark)

The app shows the data as soon as it opens using just fetch and useEffect, so the app will render a Skeleton component from Chakra UI then the data when it will become available.
It will show the current weather in London and a set of buttons (the number depends on the current) which are the next days of forecasts.
Clicking or tapping on one of this buttons will open a panel with the forecast for a range of 3 hours.

## Next features
The app could be improved developing more test cases in jest (since this was one of my first time using jest).
