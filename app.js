const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const hMenu = document.querySelector(".h-menu");
const closeIcon = document.querySelector(".icon-menu-close");
const mobileMenu = document.querySelector(".menu-items");

// Window resize after page refreshes
function toggle() {    
    if (window.innerWidth < 701) 
    {
        navLinks.classList.add('hidden');
        hamburger.classList.remove('hidden');
        
    }
}

toggle();

// hide hamburger icon after click
hamburger.addEventListener("click", () => {
    hMenu.classList.remove("hidden");
    hamburger.classList.add('hidden');
    mobileMenu.classList.remove("hidden");
})

// close mobile list
closeIcon.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    hamburger.classList.remove('hidden');
})
