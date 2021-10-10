document.querySelector("#search-form").addEventListener("submit", (event) => {
  event.preventDefault();

  // target the category selection
  const text = event.target.search.value;
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
        header2.textContent = getCity(weather);
        resultArea.prepend(header2);

        // ...........AREA..........
        const areaHeader = document.createElement("h4");
        areaHeader.textContent = `Area: `;
        areaHeader.classList.add("description");
        const areaParagraph = document.createElement("p");
        areaParagraph.classList.add("area");
        areaParagraph.textContent = getCity(weather);

        // ...........REGION..........
        const regionHeader = document.createElement("h4");
        regionHeader.textContent = `Region: `;
        regionHeader.classList.add("description");
        const regionParagraph = document.createElement("p");
        regionParagraph.classList.add("region");
        regionParagraph.textContent = getRegion(weather);

        // ...........COUNTRY..........
        const countryHeader = document.createElement("h4");
        countryHeader.textContent = `Country: `;
        countryHeader.classList.add("description");
        const countryParagraph = document.createElement("p");
        countryParagraph.classList.add("country");
        countryParagraph.textContent = getCountry(weather);

        // ...........CURRENTLY..........
        const currentHeader = document.createElement("h4");
        currentHeader.textContent = `Currently: `;
        currentHeader.classList.add("description");
        const currentParagraph = document.createElement("p");
        currentParagraph.classList.add("current");
        currentParagraph.textContent = `Feels Like ${getCityTemp(weather)}°F`;

        location.append(areaHeader);
        location.append(areaParagraph);

        location.append(regionHeader);
        location.append(regionParagraph);

        location.append(countryHeader);
        location.append(countryParagraph);

        location.append(currentHeader);
        location.append(currentParagraph);

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
        const todayAverageH = document.createElement("h4");
        todayAverageH.textContent = "Average Temperature:";
        todayResult.append(todayAverageH);
        const todayAverageP = document.createElement("p");
        todayAverageP.textContent = `${getTodayAverage(weather)}°F`;
        todayResult.append(todayAverageP);

        // today's max temperature
        const todayMaxH = document.createElement("h4");
        todayMaxH.textContent = "Max Temperature:";
        todayResult.append(todayMaxH);
        const todayMaxP = document.createElement("p");
        todayMaxP.textContent = `${getTodayMax(weather)}°F`;
        todayResult.append(todayMaxP);

        // today's minimum temperature
        const todayMinH = document.createElement("h4");
        todayMinH.textContent = "Min Temperature:";
        todayResult.append(todayMinH);
        const todayMinP = document.createElement("p");
        todayMinP.textContent = `${getTodayMin(weather)}°F`;
        todayResult.append(todayMinP);
        //

        //

        // ...........TOMORROW TEMPERATURE RESULT..........
        const tomorrowResult = document.createElement("div");
        tomorrowResult.classList.add("tomorrow");

        // tomorrow,s average temperature
        const tomorrowAverageH = document.createElement("h4");
        tomorrowAverageH.textContent = "Average Temperature:";
        tomorrowResult.append(tomorrowAverageH);
        const tomorrowAverageP = document.createElement("p");
        tomorrowAverageP.textContent = `${getTomorrowAverage(weather)}°F`;
        tomorrowResult.append(tomorrowAverageP);

        // tomorrow's max temperature
        const tomorrowMaxH = document.createElement("h4");
        tomorrowMaxH.textContent = "Max Temperature:";
        tomorrowResult.append(tomorrowMaxH);
        const tomorrowMaxP = document.createElement("p");
        tomorrowMaxP.textContent = `${getTomorrowMax(weather)}°F`;
        tomorrowResult.append(tomorrowMaxP);

        // tomorrow's minimum temperature
        const tomorrowMinH = document.createElement("h4");
        tomorrowMinH.textContent = "Min Temperature:";
        tomorrowResult.append(tomorrowMinH);
        const tomorrowMinP = document.createElement("p");
        tomorrowMinP.textContent = `${getTomorrowMin(weather)}°F`;
        tomorrowResult.append(tomorrowMinP);

        //
        //
        // ...........DAY AFTER TOMORROW TEMPERATURE RESULT..........
        const dayAfterResult = document.createElement("div");
        dayAfterResult.classList.add("dayAfter");

        // day after tomorrow average temperature
        const dayAfterAverageH = document.createElement("h4");
        dayAfterAverageH.textContent = "Average Temperature:";
        dayAfterResult.append(dayAfterAverageH);
        const dayAfterAverageP = document.createElement("p");
        dayAfterAverageP.textContent = `${getDayAfterAverage(weather)}°F`;
        dayAfterResult.append(dayAfterAverageP);

        // day after tomorrow max temperature
        const dayAfterMaxH = document.createElement("h4");
        dayAfterMaxH.textContent = "Max Temperature:";
        dayAfterResult.append(dayAfterMaxH);
        const dayAfterMaxP = document.createElement("p");
        dayAfterMaxP.textContent = `${getDayAfterMax(weather)}°F`;
        dayAfterResult.append(dayAfterMaxP);

        // day after tomorrow minimum temperature
        const dayAfterMinH = document.createElement("h4");
        dayAfterMinH.textContent = "Min Temperature:";
        dayAfterResult.append(dayAfterMinH);
        const dayAfterMinP = document.createElement("p");
        dayAfterMinP.textContent = `${getDayAfterMin(weather)}°F`;
        dayAfterResult.append(dayAfterMinP);

        forecastResult.append(todayResult);
        forecastResult.append(tomorrowResult);
        forecastResult.append(dayAfterResult);
      }
    })
    .catch();

  event.target.reset();
});
