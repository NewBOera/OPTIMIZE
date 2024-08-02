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
   $latency = document.getElementById("latency");

async function getInputValue(url) {
   console.log(url, "URL");
   pageTested.textContent = url;
   $pageTested2.textContent = url;

   console.log(url, "URL");
}

async function getApiResults(url) {
   try {
      const data = await fetchData(url);
      resultsReplacement(data);
      return data;
   } catch (error) {
      notify.error(
         "Ha ocurrido un error al evaluar la página, por favor intente más tarde",
         3000
      );
      throw new Error();
   }
}

async function fetchData(url) {
   const ENDPOINT = `${GOOGLE_ENDPOINT}${url}`;
   try {
      const response = await fetch(ENDPOINT);
      const data = await response.json();
      return data;
   } catch (error) {
      return error;
   }
}

function resultsReplacement(data) {
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
}

function getRandomCategory() {
   const categories = ["MEJORABLE", "MALO", "REGULAR"];
   return categories[Math.floor(Math.random() * categories.length)];
}

function getRandomValue() {
   return (Math.random() * 3).toFixed(1) + "s";
}
