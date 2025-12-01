const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("is-open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
    });
  });
}

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mousedown", () => {
    btn.classList.add("is-pressed");
  });

  ["mouseup", "mouseleave"].forEach((evt) => {
    btn.addEventListener(evt, () => {
      btn.classList.remove("is-pressed");
    });
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();

    const offset = 70;
    const top =
      target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  });
});

const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

if (tabButtons.length && tabPanels.length) {
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab-target");
      if (!targetId) return;

      tabButtons.forEach((b) =>
        b.classList.toggle("tab-button--active", b === btn)
      );

      tabPanels.forEach((panel) => {
        panel.classList.toggle(
          "tab-panel--active",
          panel.id === targetId
        );
      });
    });
  });
}

const form = document.getElementById("signup-form");
const formMsg = document.getElementById("form-message");

if (form && formMsg) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const sign = form.sign.value;
    const intent = form.intent.value;

    if (!name || !email || !sign || !intent) {
      formMsg.textContent = "Please fill out all fields ✨";
      formMsg.className = "form-message error";
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formMsg.textContent = "Enter a valid email address 💫";
      formMsg.className = "form-message error";
      return;
    }

    formMsg.textContent = "You’re on the Astrolove waitlist! ♡";
    formMsg.className = "form-message ok";
    form.reset();
  });
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
