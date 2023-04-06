import "./style.css";

const addActive = (element) => element.classList.add("active");
const rmvActive = (element) => element.classList.remove("active");
const hideAll = (elms) => elms.forEach(rmvActive);

const tabs = document.querySelectorAll("[data-tab]");
const tabContents = document.querySelectorAll("[data-content]");

function selectTab(tab) {
  const tabName = tab.dataset.tab;
  const tabContent = document.querySelector(`[data-content="${tabName}"]`);

  hideAll(tabs)
  addActive(tab);
  hideAll(tabContents);
  addActive(tabContent);
}

tabs.forEach((tab) => tab.addEventListener("click", () => selectTab(tab)));
