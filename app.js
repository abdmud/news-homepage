const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const hMenu = document.querySelector(".h-menu");

function toggle() {    
    if (window.innerWidth < 701) 
    {
        navLinks.classList.add('hidden');
        hamburger.classList.remove('hidden');
        console.log("non")
    }
}

toggle();

hamburger.addEventListener("click", () => {
    hMenu.classList.remove("hidden");
    hamburger.classList.add('hidden');
})