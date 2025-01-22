// Toggle the mobile menu visibility
export function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-icon');
    
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      icon.innerHTML = '<i class="fa-solid fa-xmark"></i>'; // Change icon to "close"
    } else {
      menu.classList.add('hidden');
      icon.innerHTML = '<i class="fa-solid fa-bars"></i>'; // Change icon to "hamburger"
    }
  }
  