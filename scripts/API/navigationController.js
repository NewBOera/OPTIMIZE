let currentPage = 1;

function nextPage() {
   switch (currentPage) {
      case 1:
         openTab(event, "analize-section");
         currentPage += 1;
         break;

      case 2:
         openTab(event, "form-section");

         currentPage += 1;
         break;

      case 3:
         openTab(event, "payment-section");

         currentPage += 1;
         break;

      default:
         currentPage = 1;
   }
}
