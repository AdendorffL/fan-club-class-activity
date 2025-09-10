const button = document.getElementById("theme-button");
const root = document.documentElement;

button.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  button.innerText = currentTheme === "light" ? "Light" : "Dark";
  root.setAttribute("data-theme", newTheme);
});
