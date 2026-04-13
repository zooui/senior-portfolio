document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 2s";

  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 100);

  const filterButtons = document.querySelectorAll("[data-filter]");
  const items = document.querySelectorAll(".item[data-category]");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCategory = button.dataset.filter;

      filterButtons.forEach((currentButton) => {
        currentButton.classList.toggle("is-active", currentButton === button);
      });

      items.forEach((item) => {
        const matchesCategory =
          selectedCategory === "all" || item.dataset.category === selectedCategory;

        item.classList.toggle("is-hidden", !matchesCategory);
      });
    });
  });
});
