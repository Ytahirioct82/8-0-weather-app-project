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
      }
    })
    .catch();

  event.target.reset();
});
