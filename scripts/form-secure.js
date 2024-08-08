// ? Delete event default for all forms
const forms = document.querySelectorAll("form");
forms.forEach(function (form) {
   form.addEventListener("submit", function (event) {
      event.preventDefault();
   });
});

// ? You can add diferent validations for each form
function validateForm(formulario) {
   let inputs = formulario.querySelectorAll("input, textarea, checkbox");
   let isValid = true;

   inputs.forEach(function (input) {
      input.classList.remove("error");
      if (input.name === "email" && !isValidEmail(input.value)) {
         isValid = false;
         input.classList.add("error");
         notify.warning("The email address is not valid", 3000);
      } else if (input.type === "checkbox" && !input.checked) {
         isValid = false;
         notify.warning("You must accept the terms and conditions", 3000);
      } else if (
         input.name === "name" &&
         (input.value.length < 3 || input.value.length > 50)
      ) {
         isValid = false;
         input.classList.add("error");
         notify.warning("Ingrese un nombre válido", 3000);
      } else if (
         input.name === "lastname" &&
         (input.value.length < 3 || input.value.length > 90)
      ) {
         isValid = false;
         input.classList.add("error");
         notify.warning("Ingrese un apellido válido", 3000);
      } else if (input.type === "textarea" && input.value.length < 10) {
         isValid = false;
         input.classList.add("error");
         notify.warning("El mensaje debe tener al menos 10 caracteres", 3000);
      } else if (input.name === "phone" && !isValidPhone(input.value)) {
         isValid = false;
         input.classList.add("error");
         notify.warning("The phone number is not valid", 3000);
      }
   });

   const $inputURL = document.getElementById("user-url"),
      $userURL = $inputURL.value;

   getInputValue($userURL);
   return isValid;
}

function isValidEmail(email) {
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
   return /^\d{10}$/.test(phone);
}
