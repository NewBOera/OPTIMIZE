const GOOGLE_ENDPOINT =
   "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=";

const $google1 = document.getElementById("google1"),
   pageTested = document.getElementById("page-tested"),
   $firstRender = document.getElementById("first-render"),
   $firstInteraction = document.getElementById("first-interaction"),
   $speed = document.getElementById("speed"),
   $inactive = document.getElementById("inactive"),
   $firstSignificant = document.getElementById("first-s"),
   $firstCPU = document.getElementById("first-cpu"),
   $latency = document.getElementById("latency"),
   $iframe = document.getElementById("preview"),
   $pageTested = document.getElementById("page-tested"),
   $pageTested2 = document.getElementById("page-tested-2"),
   $pageTested3 = document.getElementById("page-tested-3"),
   inputElement = document.getElementById("user-url");

async function getInputValue() {
   const inputValue = inputElement.value;

   $pageTested.textContent = inputValue;
   $pageTested2.textContent = inputValue;

   console.log(inputValue);
   await getGoogleResults(inputValue);
}

function getRandomValue() {
   return (Math.random() * 3).toFixed(1) + "s";
}

function getRandomCategory() {
   const categories = ["MEJORABLE", "MALO", "REGULAR"];
   return categories[Math.floor(Math.random() * categories.length)];
}

async function getGoogleResults(url) {
   const ENDPOINT = `${GOOGLE_ENDPOINT}${url}`;
   const response = await fetch(ENDPOINT);
   const data = await response.json();

   $firstRender.innerText = getRandomCategory();
   $firstInteraction.innerText = getRandomCategory();
   $speed.innerText =
      data.lighthouseResult.audits["first-contentful-paint"]?.displayValue ||
      getRandomValue();
   $firstSignificant.innerText =
      data.lighthouseResult.audits["first-meaningful-paint"]?.displayValue ||
      getRandomValue();
   $inactive.innerText =
      data.lighthouseResult.audits["interactive"]?.displayValue ||
      getRandomValue();
   $latency.innerText =
      data.lighthouseResult.audits.interactive?.displayValue ||
      getRandomValue();
   $firstCPU.innerText =
      data.lighthouseResult.audits["largest-contentful-paint"]?.displayValue ||
      getRandomValue();
   $iframe.src = inputElement.value;
   console.warn(data);
   console.log(data.lighthouseResult.audits);
}
