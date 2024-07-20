let currentPage = 1;

function analizePage() {
   const pageUrl = getUrl();
}

function getUrl() {
   const $url = document.getElementById("url").value;
   return $url;
}

function setUrl(url) {
   const $iframe = document.getElementById("iframe");
   $iframe.src = url;
}

function nextPage() {
   switch (currentPage) {
      case 1:
         openTab(event, "home-section");
         currentPage += 1;
         break;

      case 2:
         openTab(event, "analize-section");
         currentPage += 1;

         break;

      case 3:
         openTab(event, "payment-section");

         break;
   }
   currentPage += 1;
}
