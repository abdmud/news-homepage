const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

function toggle() {    
    if (window.innerWidth < 701) 
    {
        navLinks.classList.add('hidden');
        hamburger.classList.remove('hidden');
        console.log("non")
    }
}

toggle();