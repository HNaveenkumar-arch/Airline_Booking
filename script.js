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


document.addEventListener("DOMContentLoaded", function () {

            /* ----------------------------------------------------
               1. STICKY DESTINATION CARDS OBSERVER
            ---------------------------------------------------- */
            
            /* ----------------------------------------------------
               2. SCROLL REVEAL ANIMATION (FOOTER & OTHERS)
            ---------------------------------------------------- */
            const animatedElements = document.querySelectorAll('.scroll-anim, .scroll-reveal');

            if (animatedElements.length > 0) {
                const scrollObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('show');
                        }
                    });
                }, { threshold: 0.1 });

                animatedElements.forEach(el => scrollObserver.observe(el));
            }

            /* ----------------------------------------------------
               3. NEWSLETTER FORM VALIDATION & ALERT
            ---------------------------------------------------- */
            const form = document.getElementById('newsletterForm');
            const emailInput = document.getElementById('nlEmailInput');
            const inputGroup = document.getElementById('nlInputGroup');
            const messageBox = document.getElementById('nlMessage');

            // Check if form exists before running
            if (form && emailInput && inputGroup && messageBox) {
                // Input Focus glow effect
                emailInput.addEventListener('focus', () => inputGroup.classList.add('focused'));
                emailInput.addEventListener('blur', () => inputGroup.classList.remove('focused'));

                form.addEventListener('submit', function (e) {
                    e.preventDefault();

                    const emailValue = emailInput.value.trim();
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                    // Clear previous states
                    inputGroup.classList.remove('error-border', 'success-border');
                    messageBox.classList.remove('error-text', 'success-text', 'show');

                    if (emailValue === "") {
                        showError("Email address cannot be empty.");
                    } else if (!emailRegex.test(emailValue)) {
                        showError("Please enter a valid email address.");
                    } else {
                        showSuccess("Thank you! You have successfully subscribed.");
                        emailInput.value = ""; // Clear input after success

                        // Alert Message


                        window.location.href = '404page.html'
                    }
                });

                function showError(message) {
                    inputGroup.classList.add('error-border');
                    messageBox.textContent = message;
                    messageBox.className = "form-message error-text show";
                }

                function showSuccess(message) {
                    inputGroup.classList.add('success-border');
                    messageBox.textContent = message;
                    messageBox.className = "form-message success-text show";
                }
            }

        }); 