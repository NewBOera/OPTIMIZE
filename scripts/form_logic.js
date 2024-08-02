function validateLink(idForm) {
   const isValidEmail = validateForm(susbcribeForm);
   if (isValidEmail) {
      openTab(event, "analize-section");
   }

   if (!isValidEmail) return;
}
