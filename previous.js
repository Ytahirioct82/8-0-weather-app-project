const getPreviousSearch = (userInput) => {
  const text = userInput;
  const resultArea = document.querySelector(".view-weather");

  fetch(`https://wttr.in/${text}?format=j1`)
    .then((response) => response.json())
    .then((weather) => {
      if (text) {
        while (resultArea.firstChild) {
          resultArea.removeChild(resultArea.firstChild);
        }
        const location = document.createElement("div");
        location.classList.add("locations");

        // .......CITY HEADER......
        const header2 = document.createElement("h2");
        header2.classList.add("city");
        header2.textContent = getCity(weather, "areaName");
        resultArea.prepend(header2);

        // ...........AREA..........
        addLocationLine("Area", "area", getCity(weather), location);

        // ...........REGION..........
        addLocationLine("Region", "region", getRegion(weather), location);

        // ...........COUNTRY..........
        addLocationLine("Country", "country", getCountry(weather), location);

        // ...........CURRENTLY..........
        addLocationLine("Currently", "current", `Feels Like ${getCityTemp(weather)}°F`, location);

        resultArea.append(location);

        const forecastResult = document.querySelector(".forecast");

        while (forecastResult.firstChild) {
          forecastResult.removeChild(forecastResult.firstChild);
        }
        // ...........TODAY FORECAST..........
        const today = document.createElement("h3");
        today.textContent = "Today";

        // ...........TOMORROW FORECAST..........
        const tomorrow = document.createElement("h3");
        tomorrow.textContent = "Tomorrow";

        // ...........DAY AFTER TOMORROW FORECAST..........
        const afterTomorrow = document.createElement("h3");
        afterTomorrow.textContent = "Day After Tomorrow";

        forecastResult.append(today);
        forecastResult.append(tomorrow);
        forecastResult.append(afterTomorrow);

        // ...........TODAY TEMPERATURE RESULT..........
        const todayResult = document.createElement("div");
        todayResult.classList.add("today");

        // today's average temperature
        addTempLine("Average Temperature", getTodayAverage(weather), todayResult);

        // today's max temperature
        addTempLine("Max Temperature", getTodayMax(weather), todayResult);

        // today's minimum temperature
        addTempLine("Min Temperature", getTodayMin(weather), todayResult);

        //
        //
        // ...........TOMORROW TEMPERATURE RESULT..........
        const tomorrowResult = document.createElement("div");
        tomorrowResult.classList.add("tomorrow");

        // tomorrow,s average temperature
        addTempLine("Average Temperature", getTomorrowAverage(weather), tomorrowResult);

        // tomorrow's max temperature
        addTempLine("Max Temperature", getTomorrowMax(weather), tomorrowResult);

        // tomorrow's minimum temperature
        addTempLine("Min Temperature", getTomorrowMin(weather), tomorrowResult);

        //
        //
        // ...........DAY AFTER TOMORROW TEMPERATURE RESULT..........
        const dayAfterResult = document.createElement("div");
        dayAfterResult.classList.add("dayAfter");

        // day after tomorrow average temperature
        addTempLine("Average Temperature", getDayAfterAverage(weather), dayAfterResult);

        // day after tomorrow max temperature
        addTempLine("Max Temperature", getDayAfterMax(weather), dayAfterResult);

        // day after tomorrow minimum temperature
        addTempLine("Min Temperature", getDayAfterMin(weather), dayAfterResult);

        forecastResult.append(todayResult);
        forecastResult.append(tomorrowResult);
        forecastResult.append(dayAfterResult);
      }
    });
};
