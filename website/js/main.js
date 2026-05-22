/**
 * Mongrel Boots — main.js
 * INFO20005 Assignment 3 | Yifan Zhu | 1653579
 *
 * Features:
 *  - Mobile navigation toggle
 *  - Cart item count management
 *  - "Add to cart" quick-add (demo)
 */

'use strict';

// ── MOBILE NAV TOGGLE ─────────────────────────────
const navToggle = document.getElementById('nav-toggle');
const navMenu   = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';

    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navMenu.classList.toggle('is-open', !isOpen);

    // Update aria-label for screen readers
    navToggle.setAttribute(
      'aria-label',
      isOpen ? 'Open navigation menu' : 'Close navigation menu'
    );
  });

  // Close nav on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('is-open');
      navToggle.focus();
    }
  });
}

// ── CART COUNT ────────────────────────────────────
let cartCount = 2; // demo starting count
const cartCountEl = document.getElementById('cart-count');

function updateCartCount(delta = 1) {
  cartCount += delta;
  if (cartCountEl) {
    cartCountEl.textContent = cartCount;
    // Update aria-label on cart button for screen readers
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
      cartBtn.setAttribute('aria-label', `View cart, ${cartCount} item${cartCount !== 1 ? 's' : ''}`);
    }
  }
}

// Attach to "Quick Add" buttons (demo)
document.querySelectorAll('.product-card .btn-primary').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    updateCartCount(1);

    // Brief visual feedback
    const original = btn.textContent;
    btn.textContent = '✓ Added';
    btn.style.background = '#28a745';
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
    }, 1200);
  });
});
