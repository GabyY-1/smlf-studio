const boutonMenu = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (boutonMenu && navigation) {
  boutonMenu.addEventListener("click", () => {
    const ouvert = boutonMenu.getAttribute("aria-expanded") === "true";
    boutonMenu.setAttribute("aria-expanded", String(!ouvert));
    boutonMenu.setAttribute("aria-label", ouvert ? "Ouvrir le menu" : "Fermer le menu");
    navigation.classList.toggle("is-open", !ouvert);
  });

  navigation.querySelectorAll("a").forEach((lien) => {
    lien.addEventListener("click", () => {
      boutonMenu.setAttribute("aria-expanded", "false");
      boutonMenu.setAttribute("aria-label", "Ouvrir le menu");
      navigation.classList.remove("is-open");
    });
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});