document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("profile-form");
  const status = document.getElementById("status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "✅ Changes saved locally!";
    status.style.color = "green";

    // Simple animation
    status.style.opacity = 0;
    setTimeout(() => {
      status.style.opacity = 1;
    }, 100);
  });
});