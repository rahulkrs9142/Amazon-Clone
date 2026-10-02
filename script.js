/**
 * AMAZON CLONE - DAY 3
 * Interactive Delivery Location Selector & Modal State
 */

// ============================================================================
// USER & LOCATION STATE
// ============================================================================
let userState = JSON.parse(localStorage.getItem("amazon_clone_user")) || {
  name: "Rahul Kumar",
  city: "New Delhi",
  pincode: "110001",
  isLoggedIn: true
};

document.addEventListener("DOMContentLoaded", () => {
  initLocationModule();
  initExistingControls();
});

function initLocationModule() {
  updateUserUI();

  // Location Selector Click in Navbar
  const navAddress = document.getElementById("nav-address-btn");
  if (navAddress) {
    navAddress.addEventListener("click", () => openModal("location-modal"));
  }

  // Location Form Apply
  const locationForm = document.getElementById("location-form");
  if (locationForm) {
    locationForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const pincode = document.getElementById("input-pincode").value.trim();
      const city = document.getElementById("input-city").value.trim();
      if (pincode && city) {
        userState.pincode = pincode;
        userState.city = city;
        localStorage.setItem("amazon_clone_user", JSON.stringify(userState));
        updateUserUI();
        closeModal("location-modal");
        showToast(`📍 Delivery location updated to ${city} (${pincode})`);
      }
    });
  }

  // Metro City Quick Chips
  document.querySelectorAll(".chip-btn").forEach((chip) => {
    chip.addEventListener("click", () => {
      const city = chip.getAttribute("data-city");
      const pin = chip.getAttribute("data-pin");
      const cityInput = document.getElementById("input-city");
      const pinInput = document.getElementById("input-pincode");
      if (cityInput) cityInput.value = city;
      if (pinInput) pinInput.value = pin;
    });
  });

  // Modal Close buttons
  document.querySelectorAll(".modal-close-trigger").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const modal = e.target.closest(".modal-wrapper");
      if (modal) modal.classList.remove("active");
    });
  });

  // Modal Backdrop click to close
  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      const modal = e.target.closest(".modal-wrapper");
      if (modal) modal.classList.remove("active");
    });
  });
}

function updateUserUI() {
  const userNameDisplay = document.getElementById("user-greeting-name");
  const userLocDisplay = document.getElementById("user-location-text");

  if (userNameDisplay) {
    userNameDisplay.textContent = userState.name ? userState.name.split(" ")[0] : "Rahul";
  }
  if (userLocDisplay) {
    userLocDisplay.textContent = `${userState.city} ${userState.pincode}`;
  }
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add("active");
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("active");
}

// ============================================================================
// TOAST NOTIFICATION SYSTEM
// ============================================================================
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("toast-remove");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3200);
}

// ============================================================================
// BASE CONTROLS (Search, Cart, Back to top)
// ============================================================================
function initExistingControls() {
  const searchBtn = document.querySelector(".search-icon-btn") || document.querySelector(".search-icon");
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      const input = document.querySelector(".search-input").value.trim();
      if (input === "") {
        showToast("⚠️ Please enter a product name to search");
      } else {
        showToast(`🔍 You searched for: "${input}"`);
      }
    });
  }

  const cart = document.querySelector(".nav-cart");
  if (cart) {
    cart.addEventListener("click", () => {
      showToast("🛒 Your Amazon Cart is ready");
    });
  }

  const backTop = document.querySelector(".foot-panel1");
  if (backTop) {
    backTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      const title = box.querySelector("h2, h3");
      if (title) {
        showToast(`📦 ${title.innerText} category opened`);
      }
    });
  });
}