!function(){var e={headers:{"x-api-key":"live_qsJ1yZWvenCqePqjItNHfcjpU0JcVj9Oe2IgrYE66iWPvcgTh7pLOjTTbgsjO6Cd"}};function n(n){var t="https://api.thecatapi.com/v1/images/search?breed_ids="+"".concat(n);return fetch(t,e).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}var t=document.querySelector(".breed-select"),c=document.querySelector(".loader"),i=document.querySelector(".error"),s=document.querySelector(".cat-info");t.addEventListener("change",(function(e){c.classList.remove("hidden"),n(e.target.value).then((function(e){!function(e){var n='<div class="img-container">\n    <img class="img-cat" src="'.concat(e[0].url,'" alt="').concat(e[0].breeds[0].name,'" height="360">\n  </div>\n  <div class="description-container">\n    <h2 class="description-title">').concat(e[0].breeds[0].name,'</h2>\n    <p class="description-text">').concat(e[0].breeds[0].description,'</p>\n    <p class="description-character"><b>Temperament:</b> ').concat(e[0].breeds[0].temperament,"</p>\n  </div>");s.innerHTML=n}(e),s.classList.remove("hidden"),i.classList.add("hidden")})).catch((function(e){console.log(e),i.classList.remove("hidden"),s.innerHTML="",s.classList.add("hidden")})).finally((function(){c.classList.add("hidden")}))})),c.classList.remove("hidden"),t.classList.add("hidden"),i.classList.add("hidden"),s.classList.add("hidden"),fetch("https://api.thecatapi.com/v1/breeds",e).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){return function(e){var n=e.map((function(e){var n=e.name,t=e.id;return"<option value=".concat(t,">").concat(n,"</option>")})).join("");t.innerHTML=n}(e)})).catch((function(e){console.log(e),i.classList.remove("hidden")})).finally((function(){c.classList.add("hidden"),t.classList.remove("hidden")}))}();
//# sourceMappingURL=index.1c025d45.js.map