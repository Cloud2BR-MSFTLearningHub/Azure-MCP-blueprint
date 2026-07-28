document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".md-header__button.md-logo");

  if (logo) {
    logo.href = new URL("./", document.baseURI).pathname;
  }
});