function sendContactForm(IDForm) {
   const form = document.getElementById(IDForm);
   const isValidForm = validateForm(form);

   if (isValidForm) {
      notify.success("Form sent successfully", 3000);
   }
}

function sendSubscriptionForm(IDForm) {
   const form = document.getElementById(IDForm);
   const isValidForm = validateForm(form);

   if (isValidForm) {
      notify.success("Successfully subscribed", 3000);
   }
}

function analizePage() {
   const pageUrl = getUrl();
}

function getUrl() {
   const $url = document.getElementById("url");
   return $url;
}
