Array.from(document.querySelectorAll(".setup-item")).forEach((function(t){var e=t.querySelector(".js-action-link");e&&(e.addEventListener("click",(function(t){return t.stopPropagation()})),t.style.cursor="pointer",t.addEventListener("click",(function(t){window.getSelection().toString()||e.click()})))}));