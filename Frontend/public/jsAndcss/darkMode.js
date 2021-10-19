//begin session storage
if (sessionStorage.getItem("data-theme") === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");//grag attribute
  darkMode();
}
window.onload=function(){//function so that it loads only when page is loaded with not null
  document
  .querySelector('input[type = "checkbox"]')
  .addEventListener("click", darkMode);
}


 function darkMode() {
  var checkbox = document.querySelector("input[id=tex]");//get the input with datatheme

  checkbox.addEventListener("change", function() {
    if (this.checked) {
      trans();
      document.documentElement.setAttribute("data-theme", "dark");//set the key value as dark
      sessionStorage.setItem("data-theme", "dark");
      console.log(sessionStorage.getItem("data-theme"));//log to the console what setting we are in
    } else {
      trans();
      document.documentElement.setAttribute("data-theme", "light");//set the key value as light
      sessionStorage.setItem("data-theme", "light");//set value
    }
  });
  let trans = () => {//for a transition effect.
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 1000);
  };
}
