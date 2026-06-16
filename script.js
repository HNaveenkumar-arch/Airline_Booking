// Toggle logic for opening/closing menu
function toggleMobileMenu() {
    const navbar = document.getElementById('myNavbar');
    
    navbar.classList.toggle('mobile-active');
    document.body.classList.toggle('no-scroll');
    
    const icon = document.querySelector('.hamburger i');
    if (navbar.classList.contains('mobile-active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// Menu-kulla irukka links (Home, Flights etc.) click panna menu close aaganum
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.getElementById('myNavbar');
        const icon = document.querySelector('.hamburger i');
        
        // Menu open-la irundha close pannidu
        if (navbar.classList.contains('mobile-active')) {
            navbar.classList.remove('mobile-active');
            document.body.classList.remove('no-scroll');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});