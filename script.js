window.onload = () => {
  const navBar = document.getElementsByTagName("nav")[0];
  const navButton = document.querySelector("nav button");
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 360) {
      navBar.style = "background-color: white; transition: background-color 1s";
      navButton.style =
        "background-color: #1a8917; transition: background-color 1s";
    } else if (window.scrollY <= 350) {
      navBar.style =
        "background-color: #ffc017; transition: background-color 1s";
      navButton.style =
        "background-color: #191919; transition: background-color 1s";
    }
  });
};
