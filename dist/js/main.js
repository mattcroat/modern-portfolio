// Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set initial state of the menu
let showMenu = false;

// Add event listener
menuBtn.addEventListener('click', toggleMenu);

// Toggle menu
function toggleMenu() {
  if (!showMenu) {
    // Hide the hamburger icon and show the menu
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');

    // Show nav items
    navItems.forEach(item => item.classList.add('show'));

    // Set menu state
    showMenu = true;
  } else {
    // Show the hamburger icon and hide the menu
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');

    // Hide nav items
    navItems.forEach(item => item.classList.remove('show'));

    // Set menu state
    showMenu = false;
  }
}
