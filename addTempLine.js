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
