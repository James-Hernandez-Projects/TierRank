if (sessionStorage.getItem("data-theme") === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  darkMode();
}

document
  .querySelector('input[type = "checkbox"]')
  .addEventListener("click", darkMode);

function darkMode() {
  var checkbox = document.querySelector("input[id=tex]");

  checkbox.addEventListener("change", function() {
    if (this.checked) {
      trans();
      document.documentElement.setAttribute("data-theme", "dark");
      sessionStorage.setItem("data-theme", "dark");
      console.log(sessionStorage.getItem("data-theme"));
    } else {
      trans();
      document.documentElement.setAttribute("data-theme", "light");
      sessionStorage.setItem("data-theme", "light");
    }
  });
  let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 1000);
  };
}
