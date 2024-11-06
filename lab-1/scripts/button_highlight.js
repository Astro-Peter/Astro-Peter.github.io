document.addEventListener("DOMContentLoaded",  function()  {
    var buttons = document.getElementsByClassName("nav");
    const url = window.location.pathname;
    const lastPart = url.split('/').pop();
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].attributes.href.nodeValue === lastPart) {
            buttons[i].classList.add("active");
        }
    }
  });
  