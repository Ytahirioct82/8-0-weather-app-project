const addTempLine = (label, temp, parentEl) => {
  const node = document.createElement("h4");
  node.textContent = `${label}:`;
  parentEl.append(node);
  const paragraphEl = document.createElement("p");
  paragraphEl.textContent = `${temp}℉`;
  parentEl.append(paragraphEl);
};

const addLocationLine = (label, addClass, result, target) => {
  const node = document.createElement("h4");
  node.textContent = `${label}: `;
  node.classList.add("description");
  const ParagraphEl = document.createElement("p");
  ParagraphEl.classList.add(`${addClass}`);
  ParagraphEl.textContent = result;
  target.append(node);
  target.append(ParagraphEl);
};

const addPreviousSection = (name, temp) => {
  const previousResult = document.querySelector("ul");
  const list = document.createElement("li");
  list.textContent = name;
  const anchor = document.createElement("a");
  anchor.setAttribute("href", `#`);
  anchor.append(list);
  previousResult.append(anchor);
  const tempResult = document.querySelector(".previous-temp");
  const preTemp = document.createElement("p");
  preTemp.classList.add("pre-p");
  preTemp.textContent = `${temp}°F`;
  tempResult.append(preTemp);
  anchor.addEventListener("click", (event) => {
    event.preventDefault();
    getPreviousSearch(name);
  });
};
