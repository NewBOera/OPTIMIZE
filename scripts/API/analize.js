let $userURL = null;
const $loader = document.getElementById("loader"),
   $unlockTxt = document.getElementById("unlock-text"),
   $unlockBtn = document.getElementById("unlock-btn"),
   $pageTested2 = document.getElementById("page-tested-2"),
   inputElement = document.getElementById("user-url-title"),
   $spanWebsite = document.getElementById("user-span");

async function analizeWebsite() {
   const $inputURL = document.getElementById("user-url");
   $userURL = $inputURL.value;
   $pageTested2.textContent = $userURL;
   inputElement.textContent = $userURL;
   $spanWebsite.textContent = $userURL;
   console.log($spanWebsite);

   if (!$inputURL) return;

   if ($userURL === "") {
      notify.warning("Debes introducir la URL de tu sitio", 3000);
      return;
   }

   const isValid = validateUserWebsiteForm($inputURL);
   if (!isValid) return;

   nextPage();
   setUrl($userURL);
   const data = await getApiResults($userURL);

   if (data) {
      $unlockTxt.classList.remove("hidden");
      $loader.classList.add("hidden");
      $unlockBtn.removeAttribute("disabled");
   }
}

function validateUserWebsiteForm(inputURL) {
   console.log(inputURL.value);

   let isValid = true;
   if (!isValidUrl(inputURL.value)) {
      isValid = false;
      inputURL.classList.add("error");
      notify.warning(
         'Introduce una página válida, Iniciando por "https://www."',
         3000
      );
   }
   return isValid;
}

function isValidUrl(input) {
   return /^https:\/\//.test(input);
}

function getUrl() {
   const $url = document.getElementById("url").value;
   return $url;
}

function setUrl(url) {
   const $iframe = document.getElementById("preview");

   $iframe.src = url;
}
