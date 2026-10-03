/**
 * AMAZON CLONE - COMPREHENSIVE INTERACTIVE JAVASCRIPT
 * State Management, Cart, Hero Carousel, Modals, Search, and Themes
 */

// ============================================================================
// PRODUCT DATA DEFINITIONS
// ============================================================================
const PRODUCTS = [
  // Lightning Deals
  {
    id: "deal-1",
    title: "SoundFlow Pro ANC True Wireless Earbuds with 40H Playtime & Low Latency",
    category: "electronics",
    price: 1499,
    originalPrice: 3999,
    discount: "63% off",
    rating: 4.6,
    reviews: 12480,
    badge: "Limited time deal",
    image: "deal_earbuds.jpg",
    isPrime: true,
    description: "Active Noise Cancellation up to 32dB, Quad-mic environmental noise cancellation for crystal clear calls, IPX5 water resistance, and fast Type-C charging.",
    features: [
      "Active Noise Cancellation & Transparency Mode",
      "Up to 40 Hours Total Playtime with Fast Charging",
      "10mm Bass Boost Titanium Drivers",
      "Low Latency Gaming Mode (45ms)"
    ]
  },
  {
    id: "deal-2",
    title: "NovaTrack AMOLED Bluetooth Calling Smartwatch with Fitness & SpO2",
    category: "electronics",
    price: 2199,
    originalPrice: 5499,
    discount: "60% off",
    rating: 4.5,
    reviews: 8920,
    badge: "Deal of the day",
    image: "deal_smartwatch.jpg",
    isPrime: true,
    description: "1.43-inch High Definition AMOLED Display with Always-On feature, AI voice assistant, 120+ sports modes, and durable zinc alloy body.",
    features: [
      "1.43-inch Ultra Crisp AMOLED Screen",
      "Bluetooth v5.3 Calling with Inbuilt Speaker & Mic",
      "24/7 Heart Rate, Blood Oxygen & Sleep Monitoring",
      "Up to 7 Days Battery Life on a single charge"
    ]
  },
  {
    id: "deal-3",
    title: "FastFoam Velocity Men's Lightweight Breathable Running Shoes",
    category: "fashion",
    price: 1899,
    originalPrice: 4299,
    discount: "56% off",
    rating: 4.7,
    reviews: 15310,
    badge: "Best Seller",
    image: "deal_shoes.jpg",
    isPrime: true,
    description: "Engineered mesh upper for maximum breathability with responsive cushion midsole that delivers energy return with every stride.",
    features: [
      "Responsive FastFoam Midsole Cushioning",
      "Breathable Engineered Mesh Fabric",
      "High-grip Anti-slip Rubber Outsole",
      "Ergonomic Arch Support & Padded Collar"
    ]
  },
  {
    id: "deal-4",
    title: "AuraEcho Smart Bluetooth Speaker with Alexa Integration & 360° Sound",
    category: "electronics",
    price: 2499,
    originalPrice: 4999,
    discount: "50% off",
    rating: 4.8,
    reviews: 24100,
    badge: "Amazon's Choice",
    image: "deal_speaker.jpg",
    isPrime: true,
    description: "Room-filling 360-degree dynamic audio with punchy bass, smart home voice controls, dual-band Wi-Fi, and multi-room music sync.",
    features: [
      "Rich 360-Degree Audio with Deep Bass Reflex",
      "Hands-free Voice Assistant Control",
      "Ambient Base LED Light with Music Sync",
      "Dual Band Wi-Fi & Bluetooth 5.2"
    ]
  },

  // Category Showcases & Catalog
  {
    id: "prod-1",
    title: "Men's & Women's Casual Cotton Apparel & Everyday Wear",
    category: "fashion",
    price: 799,
    originalPrice: 1999,
    discount: "60% off",
    rating: 4.4,
    reviews: 6240,
    badge: "Popular in Fashion",
    image: "box1_image.jpg",
    isPrime: true,
    description: "Premium combed cotton fabric that stays soft wash after wash. Versatile modern fit designed for daily comfort.",
    features: ["100% Breathable Combed Cotton", "Pre-shrunk fabric", "Tagless collar for comfort"]
  },
  {
    id: "prod-2",
    title: "Health & Personal Wellness Essentials, Vitamin Care & Sanitization",
    category: "beauty",
    price: 499,
    originalPrice: 999,
    discount: "50% off",
    rating: 4.6,
    reviews: 10450,
    badge: "Top Rated",
    image: "box2_image.jpg",
    isPrime: true,
    description: "Complete daily wellness and personal hygiene supplies certified safe and dermatologically tested for the whole family.",
    features: ["Gentle on skin", "Dermatologist approved", "Eco-friendly recyclable packaging"]
  },
  {
    id: "prod-3",
    title: "Modern Minimalist Home Furniture & Ergonomic Office Essentials",
    category: "home",
    price: 4999,
    originalPrice: 8999,
    discount: "44% off",
    rating: 4.5,
    reviews: 3120,
    badge: "Home Essential",
    image: "box3_image.jpg",
    isPrime: false,
    description: "Sleek contemporary designs crafted with durable engineered wood and heavy-duty steel frame for living room and home office.",
    features: ["Easy 15-minute assembly", "Scratch-resistant water-resistant top", "Heavy load capacity up to 100kg"]
  },
  {
    id: "prod-4",
    title: "High Performance Gadgets, Laptops & Smart Tech Accessories",
    category: "electronics",
    price: 18999,
    originalPrice: 28999,
    discount: "34% off",
    rating: 4.7,
    reviews: 14200,
    badge: "Best Seller",
    image: "box4_image.jpg",
    isPrime: true,
    description: "Next-generation computing and multimedia power with ultra-fast connectivity and sleek aerospace-grade alloy casing.",
    features: ["Fast Multi-Core Processing", "Vibrant Full HD Anti-glare Display", "All-day 10hr Battery Backup"]
  },
  {
    id: "prod-5",
    title: "Luxury Beauty Picks, Skincare Kits & Organic Cosmetics",
    category: "beauty",
    price: 899,
    originalPrice: 1799,
    discount: "50% off",
    rating: 4.6,
    reviews: 7850,
    badge: "Trending",
    image: "box5_image.jpg",
    isPrime: true,
    description: "Nourish and revitalize your skin with botanically derived serums, nourishing creams, and long-lasting cosmetic sets.",
    features: ["Paraben & Cruelty-free", "Infused with Vitamin C and Hyaluronic Acid", "Suitable for all skin types"]
  },
  {
    id: "prod-6",
    title: "Premium Pet Nutrition, Interactive Toys & Grooming Supplies",
    category: "home",
    price: 649,
    originalPrice: 1299,
    discount: "50% off",
    rating: 4.8,
    reviews: 5120,
    badge: "Amazon's Choice",
    image: "box6_image.jpg",
    isPrime: true,
    description: "Give your beloved pets healthy vet-approved nutritional treats, chew toys, and comfortable grooming care.",
    features: ["Vet recommended formula", "Non-toxic food grade materials", "Designed for dogs and cats of all breeds"]
  },
  {
    id: "prod-7",
    title: "New Arrivals in Educational Toys, STEM Kits & Fun Games",
    category: "toys",
    price: 1199,
    originalPrice: 2499,
    discount: "52% off",
    rating: 4.7,
    reviews: 9340,
    badge: "Top Toy",
    image: "box7_image.jpg",
    isPrime: true,
    description: "Boost creativity, critical problem solving, and fun family play with interactive robotics, building blocks, and games.",
    features: ["Child-safe BPA free plastics", "Encourages STEM learning", "Includes colorful instruction manual"]
  },
  {
    id: "prod-8",
    title: "Discover Fashion Trends, Designer Watches & Streetwear Styles",
    category: "fashion",
    price: 1299,
    originalPrice: 2999,
    discount: "57% off",
    rating: 4.5,
    reviews: 8430,
    badge: "New Release",
    image: "box8_image.jpg",
    isPrime: true,
    description: "Stay ahead of seasonal trends with curated urban streetwear, luxury quartz timepieces, and statement accessories.",
    features: ["Precision Japanese Movement", "Water resistant to 30 meters", "Includes luxury gift box"]
  }
];

// ============================================================================
// APPLICATION STATE
// ============================================================================
let cartState = JSON.parse(localStorage.getItem("amazon_clone_cart")) || [];
let userState = JSON.parse(localStorage.getItem("amazon_clone_user")) || {
  name: "Rahul Kumar",
  city: "New Delhi",
  pincode: "110001",
  isLoggedIn: true
};
let currentSlide = 0;
let slideInterval = null;
let activeFilter = "all";

// ============================================================================
// INITIALIZATION
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initUser();
  initTheme();
  initHeroSlider();
  initLightningDeals();
  initCatalog(PRODUCTS);
  initSearch();
  initCart();
  initModals();
  initFlashTimer();
});

// ============================================================================
// THEME MANAGEMENT (Dark / Light Mode)
// ============================================================================
function initTheme() {
  const savedTheme = localStorage.getItem("amazon_theme") || "light";
  const themeToggleBtn = document.getElementById("theme-toggle-btn");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    updateThemeIcon(true);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("amazon_theme", isDark ? "dark" : "light");
      updateThemeIcon(isDark);
      showToast(isDark ? "🌙 Dark Mode activated" : "☀️ Light Mode activated");
    });
  }
}

function updateThemeIcon(isDark) {
  const icon = document.querySelector("#theme-toggle-btn i");
  const text = document.querySelector("#theme-toggle-btn span");
  if (icon && text) {
    icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
    text.textContent = isDark ? "Light" : "Dark";
  }
}

// ============================================================================
// USER STATE & PROFILE
// ============================================================================
function initUser() {
  updateUserUI();

  // Location selector trigger
  const navAddress = document.getElementById("nav-address-btn");
  if (navAddress) {
    navAddress.addEventListener("click", () => openModal("location-modal"));
  }

  // Location form apply
  const locationForm = document.getElementById("location-form");
  if (locationForm) {
    locationForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const pincode = document.getElementById("input-pincode").value.trim();
      const city = document.getElementById("input-city").value.trim();
      if (pincode && city) {
        userState.pincode = pincode;
        userState.city = city;
        saveUserState();
        updateUserUI();
        closeModal("location-modal");
        showToast(`📍 Delivery location updated to ${city} (${pincode})`);
      }
    });
  }

  // City chips
  document.querySelectorAll(".chip-btn").forEach((chip) => {
    chip.addEventListener("click", () => {
      const city = chip.getAttribute("data-city");
      const pin = chip.getAttribute("data-pin");
      document.getElementById("input-city").value = city;
      document.getElementById("input-pincode").value = pin;
    });
  });

  // Sign In modal trigger
  const navSignIn = document.getElementById("nav-signin-btn");
  if (navSignIn) {
    navSignIn.addEventListener("click", (e) => {
      // If clicking directly on user box
      if (!e.target.closest(".account-dropdown")) {
        openModal("signin-modal");
      }
    });
  }

  // Sign in form
  const signinForm = document.getElementById("signin-form");
  if (signinForm) {
    signinForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("input-username").value.trim();
      if (name) {
        userState.name = name;
        userState.isLoggedIn = true;
        saveUserState();
        updateUserUI();
        closeModal("signin-modal");
        showToast(`👋 Welcome back, ${name}!`);
      }
    });
  }
}

function saveUserState() {
  localStorage.setItem("amazon_clone_user", JSON.stringify(userState));
}

function updateUserUI() {
  const userNameDisplay = document.getElementById("user-greeting-name");
  const userLocDisplay = document.getElementById("user-location-text");
  const sideUserGreeting = document.getElementById("side-user-greeting");

  if (userNameDisplay) {
    userNameDisplay.textContent = userState.name ? `Hello, ${userState.name.split(" ")[0]}` : "Hello, sign in";
  }
  if (userLocDisplay) {
    userLocDisplay.textContent = `${userState.city} ${userState.pincode}`;
  }
  if (sideUserGreeting) {
    sideUserGreeting.textContent = userState.name ? `Hello, ${userState.name.split(" ")[0]}` : "Hello, Sign In";
  }
}

// ============================================================================
// HERO CAROUSEL CONTROLLER
// ============================================================================
function initHeroSlider() {
  const slider = document.getElementById("hero-slider");
  const slides = document.querySelectorAll(".hero-slide");
  const prevBtn = document.getElementById("slider-prev-btn");
  const nextBtn = document.getElementById("slider-next-btn");
  const dotsContainer = document.getElementById("slider-dots");

  if (!slider || slides.length === 0) return;

  // Create dot indicators
  dotsContainer.innerHTML = "";
  slides.forEach((_, idx) => {
    const dot = document.createElement("div");
    dot.className = `slider-dot ${idx === 0 ? "active" : ""}`;
    dot.addEventListener("click", () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  function goToSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    slider.style.transform = `translateX(-${(currentSlide * 100) / slides.length}%)`;

    // update dots
    document.querySelectorAll(".slider-dot").forEach((d, idx) => {
      d.classList.toggle("active", idx === currentSlide);
    });
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  if (nextBtn) nextBtn.addEventListener("click", nextSlide);
  if (prevBtn) prevBtn.addEventListener("click", prevSlide);

  // Auto slide
  function startAutoSlide() {
    stopAutoSlide();
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoSlide() {
    if (slideInterval) clearInterval(slideInterval);
  }

  const container = document.querySelector(".hero-slider-container");
  if (container) {
    container.addEventListener("mouseenter", stopAutoSlide);
    container.addEventListener("mouseleave", startAutoSlide);
  }

  startAutoSlide();
}

// ============================================================================
// FLASH DEAL COUNTDOWN TIMER
// ============================================================================
function initFlashTimer() {
  const timerElem = document.getElementById("deal-countdown");
  if (!timerElem) return;

  // Set deal duration to 4 hours from now
  let totalSeconds = 4 * 3600 + 28 * 60 + 45;

  setInterval(() => {
    if (totalSeconds <= 0) {
      totalSeconds = 8 * 3600; // reset
    }
    totalSeconds--;

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    timerElem.textContent = `${String(hours).padStart(2, "0")}h : ${String(minutes).padStart(2, "0")}m : ${String(seconds).padStart(2, "0")}s`;
  }, 1000);
}

// ============================================================================
// LIGHTNING DEALS RENDERING
// ============================================================================
function initLightningDeals() {
  const container = document.getElementById("lightning-deals-grid");
  if (!container) return;

  const deals = PRODUCTS.filter((p) => p.id.startsWith("deal-"));
  container.innerHTML = deals.map((product) => createDealCardHTML(product)).join("");

  attachCardActionEvents(container);
}

function createDealCardHTML(item) {
  const starsHTML = getStarRatingHTML(item.rating);
  return `
    <div class="deal-card" data-id="${item.id}">
      <span class="deal-badge">${item.badge}</span>
      <div class="deal-img-wrapper" onclick="openQuickView('${item.id}')">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
      </div>
      <div class="deal-info">
        <h4 class="deal-title" title="${item.title}" onclick="openQuickView('${item.id}')" style="cursor:pointer">${item.title}</h4>
        <div class="deal-rating">
          ${starsHTML}
          <span class="review-count">(${item.reviews.toLocaleString()})</span>
        </div>
        <div class="deal-pricing">
          <span class="deal-price">₹${item.price.toLocaleString()}</span>
          <span class="deal-original-price">₹${item.originalPrice.toLocaleString()}</span>
          <span class="deal-discount-percent">-${item.discount}</span>
        </div>
        <div class="deal-delivery">
          <i class="fa-solid fa-truck-fast" style="color:var(--amazon-orange); margin-right:4px;"></i>
          <span>FREE Delivery</span> tomorrow by 2 PM
        </div>
        <div class="deal-actions">
          <button class="btn-add-cart" onclick="addToCart('${item.id}')">
            <i class="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
          <button class="btn-quick-view" onclick="openQuickView('${item.id}')" title="Quick Preview">
            <i class="fa-regular fa-eye"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

// ============================================================================
// FEATURED CATALOG & FILTER TABS
// ============================================================================
function initCatalog(productsToRender) {
  const grid = document.getElementById("products-catalog-grid");
  if (!grid) return;

  // Filter tabs setup
  document.querySelectorAll(".filter-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".filter-tab").forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      activeFilter = tab.getAttribute("data-category");
      filterAndRenderCatalog();
    });
  });

  filterAndRenderCatalog(productsToRender);
}

function filterAndRenderCatalog(customProducts) {
  const grid = document.getElementById("products-catalog-grid");
  if (!grid) return;

  const dataset = customProducts || PRODUCTS;
  let filtered = dataset;

  if (activeFilter && activeFilter !== "all") {
    filtered = dataset.filter((p) => p.category === activeFilter);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        <i class="fa-solid fa-box-open" style="font-size: 3rem; margin-bottom: 12px; color: #aaa;"></i>
        <h3>No matching products found in this category</h3>
        <p>Try searching with different keywords or switch back to "All Products".</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((product) => createCatalogCardHTML(product)).join("");
  attachCardActionEvents(grid);
}

function createCatalogCardHTML(item) {
  const starsHTML = getStarRatingHTML(item.rating);
  return `
    <div class="product-card" data-id="${item.id}">
      <span class="box-badge" style="position: absolute; top: 14px; left: 14px; z-index: 2;">${item.badge}</span>
      <div class="deal-img-wrapper" onclick="openQuickView('${item.id}')">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
      </div>
      <div class="deal-info">
        ${item.isPrime ? `<span class="prime-tag"><i class="fa-solid fa-check" style="font-size:0.7rem; margin-right:2px;"></i>prime</span>` : ""}
        <h4 class="deal-title" title="${item.title}" onclick="openQuickView('${item.id}')" style="cursor:pointer">${item.title}</h4>
        <div class="deal-rating">
          ${starsHTML}
          <span class="review-count">(${item.reviews.toLocaleString()})</span>
        </div>
        <div class="deal-pricing">
          <span class="deal-price">₹${item.price.toLocaleString()}</span>
          <span class="deal-original-price">₹${item.originalPrice.toLocaleString()}</span>
          <span class="deal-discount-percent">-${item.discount}</span>
        </div>
        <div class="deal-delivery">
          <span>FREE Delivery</span> with Prime
        </div>
        <div class="deal-actions">
          <button class="btn-add-cart" onclick="addToCart('${item.id}')">
            <i class="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
          <button class="btn-quick-view" onclick="openQuickView('${item.id}')" title="Quick Preview">
            <i class="fa-regular fa-eye"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

function getStarRatingHTML(rating) {
  let stars = "";
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars += `<i class="fa-solid fa-star"></i>`;
  }
  if (hasHalf) {
    stars += `<i class="fa-solid fa-star-half-stroke"></i>`;
  }
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars += `<i class="fa-regular fa-star"></i>`;
  }
  return stars;
}

function attachCardActionEvents(container) {
  // Any event delegation if required
}

// ============================================================================
// SEARCH & AUTOCOMPLETE FUNCTIONALITY
// ============================================================================
function initSearch() {
  const searchInput = document.querySelector(".search-input");
  const searchCategory = document.querySelector(".search-select");
  const searchBtn = document.querySelector(".search-icon-btn");
  const searchClear = document.querySelector(".search-clear-btn");
  const suggestionsBox = document.querySelector(".search-suggestions");

  if (!searchInput) return;

  // Real-time suggestions
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    searchClear.style.display = query.length > 0 ? "block" : "none";

    if (query.length < 2) {
      suggestionsBox.classList.remove("active");
      suggestionsBox.innerHTML = "";
      return;
    }

    const matches = PRODUCTS.filter(
      (p) => p.title.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)
    ).slice(0, 5);

    if (matches.length > 0) {
      suggestionsBox.innerHTML = matches
        .map(
          (m) => `
        <div class="suggestion-item" data-id="${m.id}" data-title="${m.title}">
          <i class="fa-solid fa-magnifying-glass"></i>
          <span>${m.title}</span>
        </div>
      `
        )
        .join("");
      suggestionsBox.classList.add("active");

      suggestionsBox.querySelectorAll(".suggestion-item").forEach((item) => {
        item.addEventListener("click", () => {
          searchInput.value = item.getAttribute("data-title");
          suggestionsBox.classList.remove("active");
          executeSearch();
        });
      });
    } else {
      suggestionsBox.classList.remove("active");
    }
  });

  // Clear button
  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchClear.style.display = "none";
    suggestionsBox.classList.remove("active");
    filterAndRenderCatalog(PRODUCTS);
    searchInput.focus();
  });

  // Search execution
  function executeSearch() {
    const query = searchInput.value.trim().toLowerCase();
    const category = searchCategory.value;
    suggestionsBox.classList.remove("active");

    let results = PRODUCTS;

    if (category && category !== "all") {
      results = results.filter((p) => p.category === category);
    }

    if (query) {
      results = results.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Scroll smoothly to catalog
    const catalogElem = document.getElementById("featured-catalog-section");
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    filterAndRenderCatalog(results);

    if (query) {
      showToast(`🔍 Showing ${results.length} results for "${query}"`);
    }
  }

  if (searchBtn) searchBtn.addEventListener("click", executeSearch);
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      executeSearch();
    }
  });

  // Category select change
  if (searchCategory) {
    searchCategory.addEventListener("change", () => {
      executeSearch();
    });
  }

  // Close suggestions when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-search")) {
      suggestionsBox.classList.remove("active");
    }
  });
}

// ============================================================================
// SHOPPING CART CONTROLLER
// ============================================================================
function initCart() {
  updateCartBadge();

  const cartNavBtn = document.getElementById("nav-cart-btn");
  const cartDrawerClose = document.getElementById("cart-drawer-close");
  const checkoutBtn = document.getElementById("btn-checkout-drawer");

  if (cartNavBtn) {
    cartNavBtn.addEventListener("click", openCartDrawer);
  }

  if (cartDrawerClose) {
    cartDrawerClose.addEventListener("click", closeCartDrawer);
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      closeCartDrawer();
      if (cartState.length === 0) {
        showToast("⚠️ Your shopping cart is empty!");
        return;
      }
      openModal("checkout-modal");
      populateCheckoutSummary();
    });
  }
}

function addToCart(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const existingItem = cartState.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cartState.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      qty: 1
    });
  }

  saveCart();
  updateCartBadge();
  animateCartBadge();
  showToast(`🛒 Added "${product.title.slice(0, 30)}..." to your Cart!`);
}

function removeFromCart(productId) {
  cartState = cartState.filter((item) => item.id !== productId);
  saveCart();
  updateCartBadge();
  renderCartItems();
  showToast("🗑️ Item removed from cart");
}

function updateCartQty(productId, delta) {
  const item = cartState.find((item) => item.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
    updateCartBadge();
    renderCartItems();
  }
}

function saveCart() {
  localStorage.setItem("amazon_clone_cart", JSON.stringify(cartState));
}

function updateCartBadge() {
  const badge = document.getElementById("cart-count-badge");
  const totalCount = cartState.reduce((sum, item) => sum + item.qty, 0);
  if (badge) {
    badge.textContent = totalCount;
  }
}

function animateCartBadge() {
  const badge = document.getElementById("cart-count-badge");
  if (badge) {
    badge.classList.remove("bounce");
    void badge.offsetWidth; // trigger reflow
    badge.classList.add("bounce");
  }
}

function openCartDrawer() {
  renderCartItems();
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("drawer-overlay");
  if (drawer && overlay) {
    drawer.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("drawer-overlay");
  if (drawer && overlay) {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function renderCartItems() {
  const listContainer = document.getElementById("cart-items-container");
  const subtotalElem = document.getElementById("cart-subtotal-val");
  const totalElem = document.getElementById("cart-total-val");
  const headerCount = document.getElementById("cart-header-count");
  const progressText = document.getElementById("free-shipping-msg");
  const progressFill = document.getElementById("free-shipping-fill");

  if (!listContainer) return;

  const totalItems = cartState.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cartState.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (headerCount) headerCount.textContent = `(${totalItems} ${totalItems === 1 ? "item" : "items"})`;

  // Free shipping threshold: ₹499
  const freeShipThreshold = 499;
  if (progressText && progressFill) {
    if (subtotal >= freeShipThreshold || totalItems === 0) {
      progressText.innerHTML = `🎉 <strong style="color:var(--amazon-green);">Congratulations!</strong> Your order qualifies for <strong>FREE Delivery</strong>.`;
      progressFill.style.width = "100%";
      progressFill.style.backgroundColor = "var(--amazon-green)";
    } else {
      const remaining = freeShipThreshold - subtotal;
      const percent = Math.min(100, Math.round((subtotal / freeShipThreshold) * 100));
      progressText.innerHTML = `Add <strong>₹${remaining.toLocaleString()}</strong> more to qualify for <strong>FREE Delivery</strong>.`;
      progressFill.style.width = `${percent}%`;
    }
  }

  if (cartState.length === 0) {
    listContainer.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-cart-shopping"></i>
        <h3>Your Amazon Cart is empty</h3>
        <p>Shop today's epic deals and fill your cart with savings.</p>
        <button class="btn-checkout" onclick="closeCartDrawer(); window.location.hash='#deals-section';" style="background:var(--amazon-yellow); color:#111;">
          Explore Deals
        </button>
      </div>
    `;
    if (subtotalElem) subtotalElem.textContent = "₹0";
    if (totalElem) totalElem.textContent = "₹0";
    return;
  }

  listContainer.innerHTML = cartState
    .map(
      (item) => `
    <div class="cart-item-card">
      <img src="${item.image}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-details">
        <h5 class="cart-item-title">${item.title}</h5>
        <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString()}</div>
        <div class="cart-item-actions">
          <div class="qty-control">
            <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)" title="Decrease">-</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)" title="Increase">+</button>
          </div>
          <button class="btn-remove-item" onclick="removeFromCart('${item.id}')">
            <i class="fa-solid fa-trash-can"></i> Delete
          </button>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  if (subtotalElem) subtotalElem.textContent = `₹${subtotal.toLocaleString()}`;
  if (totalElem) totalElem.textContent = `₹${subtotal.toLocaleString()}`;
}

// ============================================================================
// QUICK VIEW MODAL
// ============================================================================
function openQuickView(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const contentBox = document.getElementById("quick-view-container");
  if (!contentBox) return;

  const starsHTML = getStarRatingHTML(product.rating);

  contentBox.innerHTML = `
    <div class="quick-view-content">
      <div class="qv-img-container">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="qv-details">
        <span class="box-badge" style="width: fit-content; margin-bottom: 8px;">${product.badge}</span>
        <h3 class="qv-title">${product.title}</h3>
        <div class="qv-rating">
          ${starsHTML}
          <span>${product.rating} out of 5 (${product.reviews.toLocaleString()} global ratings)</span>
        </div>
        <div class="qv-pricing">
          <span class="qv-price">₹${product.price.toLocaleString()}</span>
          <span class="deal-original-price">M.R.P: ₹${product.originalPrice.toLocaleString()}</span>
          <span class="deal-discount-percent">(${product.discount})</span>
        </div>
        <p class="qv-desc">${product.description}</p>
        <ul class="qv-features">
          ${product.features ? product.features.map((f) => `<li>${f}</li>`).join("") : ""}
        </ul>
        <div style="font-size:0.85rem; color:var(--amazon-green); font-weight:700; margin-bottom:12px;">
          <i class="fa-solid fa-circle-check"></i> In Stock & Ready to Ship
        </div>
        <div class="qv-actions">
          <button class="btn-add-cart" onclick="addToCart('${product.id}'); closeModal('quick-view-modal');" style="padding:12px;">
            <i class="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
          <button class="btn-checkout" onclick="addToCart('${product.id}'); closeModal('quick-view-modal'); openModal('checkout-modal'); populateCheckoutSummary();" style="width:auto; padding: 12px 20px;">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  `;

  openModal("quick-view-modal");
}

// ============================================================================
// CHECKOUT SIMULATION & ORDERS
// ============================================================================
function populateCheckoutSummary() {
  const container = document.getElementById("checkout-order-summary");
  if (!container) return;

  const subtotal = cartState.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalCount = cartState.reduce((sum, item) => sum + item.qty, 0);

  container.innerHTML = `
    <div style="background:var(--bg-surface); padding:16px; border-radius:var(--radius-sm); margin-bottom:18px; border:1px solid var(--border-color);">
      <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.9rem;">
        <span>Items (${totalCount}):</span>
        <strong>₹${subtotal.toLocaleString()}</strong>
      </div>
      <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.9rem; color:var(--amazon-green);">
        <span>Delivery:</span>
        <strong>FREE</strong>
      </div>
      <div style="border-top:1px solid var(--border-color); padding-top:10px; display:flex; justify-content:space-between; font-size:1.15rem; font-weight:800; color:var(--amazon-red);">
        <span>Order Total:</span>
        <span>₹${subtotal.toLocaleString()}</span>
      </div>
    </div>
  `;

  // Pre-fill user details if available
  if (userState.name) document.getElementById("checkout-name").value = userState.name;
  if (userState.city) document.getElementById("checkout-city").value = userState.city;
  if (userState.pincode) document.getElementById("checkout-pin").value = userState.pincode;
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const checkoutModal = document.getElementById("checkout-modal");
  const modalBody = checkoutModal.querySelector(".modal-body");
  const subtotal = cartState.reduce((sum, item) => sum + item.price * item.qty, 0);
  const orderId = "AMZ-" + Math.floor(10000000 + Math.random() * 90000000);

  // Confetti celebration
  if (typeof confetti === "function") {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  // Display Order Success Screen
  modalBody.innerHTML = `
    <div class="order-success-view">
      <div class="order-success-icon">
        <i class="fa-solid fa-check"></i>
      </div>
      <h4>Thank you, your order has been placed!</h4>
      <p style="color:var(--text-secondary); font-size:0.9rem;">
        We've sent a confirmation email with all tracking details.
      </p>
      <div class="order-tracking-pill">Order ID: #${orderId}</div>
      <div style="background:var(--bg-surface); border:1px solid var(--border-color); border-radius:var(--radius-sm); padding:16px; text-align:left; margin-bottom:20px;">
        <p style="font-size:0.85rem; margin-bottom:4px;"><strong>Delivering to:</strong> ${document.getElementById("checkout-name").value}, ${document.getElementById("checkout-city").value} - ${document.getElementById("checkout-pin").value}</p>
        <p style="font-size:0.85rem; margin-bottom:4px;"><strong>Guaranteed Delivery:</strong> Tomorrow by 2:00 PM</p>
        <p style="font-size:0.85rem;"><strong>Total Paid:</strong> ₹${subtotal.toLocaleString()}</p>
      </div>
      <button class="btn-checkout" onclick="closeModal('checkout-modal'); location.reload();" style="background:var(--amazon-yellow); color:#111;">
        Continue Shopping
      </button>
    </div>
  `;

  // Clear cart
  cartState = [];
  saveCart();
  updateCartBadge();
  showToast("🎉 Order Placed Successfully!");
}

// ============================================================================
// MODAL CONTROLS & SIDEBARS
// ============================================================================
function initModals() {
  const overlay = document.getElementById("drawer-overlay");
  const sideMenu = document.getElementById("side-menu-drawer");
  const sideMenuToggle = document.getElementById("side-menu-toggle");
  const sideMenuClose = document.getElementById("side-menu-close");

  // Side menu open/close
  if (sideMenuToggle) {
    sideMenuToggle.addEventListener("click", () => {
      sideMenu.classList.add("active");
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  if (sideMenuClose) {
    sideMenuClose.addEventListener("click", () => {
      sideMenu.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  // Backdrop overlay click closes all drawers & modals
  if (overlay) {
    overlay.addEventListener("click", () => {
      closeCartDrawer();
      if (sideMenu) sideMenu.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  // Generic modal close buttons
  document.querySelectorAll(".modal-close-trigger").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const modal = e.target.closest(".modal-wrapper");
      if (modal) modal.classList.remove("active");
    });
  });

  // Modal backdrop click
  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      const modal = e.target.closest(".modal-wrapper");
      if (modal) modal.classList.remove("active");
    });
  });

  // Checkout Form listener
  const checkoutForm = document.getElementById("checkout-form");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", handleCheckoutSubmit);
  }

  // Orders trigger
  const ordersBtn = document.getElementById("nav-orders-btn");
  if (ordersBtn) {
    ordersBtn.addEventListener("click", () => openModal("orders-modal"));
  }

  // Back to top smooth scroll
  const backTopBtn = document.getElementById("back-to-top-btn");
  if (backTopBtn) {
    backTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Category Boxes Click
  document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("click", () => {
      const cat = box.getAttribute("data-category");
      if (cat) {
        const matchingTab = document.querySelector(`.filter-tab[data-category="${cat}"]`);
        if (matchingTab) {
          matchingTab.click();
          const target = document.getElementById("featured-catalog-section");
          if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
  }
}

// ============================================================================
// TOAST NOTIFICATIONS SYSTEM
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