function payment() {
   const $userForm = document.getElementById("user-form");

   if (!validateForm($userForm)) return;

   nextPage();
}
