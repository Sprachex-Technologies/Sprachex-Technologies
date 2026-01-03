// Tailwind Configuration
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#46ec13",
                "primary-dark": "#36b80f",
                "background-light": "#f6f8f6",
                "background-dark": "#050805",
                "glass-border": "rgba(255, 255, 255, 0.08)",
                "glass-surface": "rgba(255, 255, 255, 0.03)",
            },
            fontFamily: {
                "display": ["Manrope", "sans-serif"]
            },
            borderRadius: { 
                "DEFAULT": "1rem", 
                "lg": "2rem", 
                "xl": "3rem", 
                "2xl": "4rem", 
                "full": "9999px" 
            },
            boxShadow: {
                "glow": "0 0 20px rgba(70, 236, 19, 0.3)",
                "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
            },
            animation: {
                'marquee': 'marquee 25s linear infinite',
                'marquee2': 'marquee2 25s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                marquee2: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
            }
        },
    },
};
const openBtn = document.getElementById("openContact");
const closeBtn = document.getElementById("closeContact");
const contactSection = document.getElementById("contactSection");
const contactForm = document.getElementById("contactForm");

openBtn?.addEventListener("click", () => {
    contactSection.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
});

closeBtn?.addEventListener("click", () => {
    contactSection.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
});

// contactForm?.addEventListener("submit", (e) => {
//     e.preventDefault();

//     // Simulate submit success
//     contactSection.classList.add("hidden");
//     document.body.classList.remove("overflow-hidden");

//     // Optional: reset form
//     contactForm.reset();
// });

// contactForm?.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const formData = new FormData(contactForm);

//     const name = formData.get("name") || "";
//     const company = formData.get("company") || "";
//     const email = formData.get("email") || "";
//     const service = formData.get("service") || "";
//     const message = formData.get("message") || "";

//     const recipients =
//         "contact@sprachex.com,support@sprachex.com,dev@sprachex.com";

//     const mailtoLink =
//         `mailto:${recipients}` +
//         `?subject=${encodeURIComponent("New Contact Request")}` +
//         `&body=${encodeURIComponent(
//             `Name: ${name}\n` +
//             `Company: ${company}\n` +
//             `Email: ${email}\n` +
//             `Service: ${service}\n\n` +
//             `Message:\n${message}`
//         )}`;

//     window.location.href = mailtoLink;

//     contactSection.classList.add("hidden");
//     document.body.classList.remove("overflow-hidden");
//     contactForm.reset();
// });

///const contactSection = document.getElementById("contactSection");
const openButtons = document.querySelectorAll("#openContact, #openContactAlt");
const closeButton = document.getElementById("closeContact");

openButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        contactSection.classList.remove("hidden");
    });
});

closeButton.addEventListener("click", () => {
    contactSection.classList.add("hidden");
});

// Close on background click
contactSection.addEventListener("click", (e) => {
    if (e.target === contactSection) {
        contactSection.classList.add("hidden");
    }
});


// Cookie Banner Functionality
document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookies');
    const declineBtn = document.getElementById('declineCookies');

    // Check if user has already made a choice
    if (localStorage.getItem('cookieConsent')) {
        cookieBanner.style.display = 'none';
    }

    // Accept cookies
    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieBanner.style.display = 'none';
    });

    // Decline cookies
    declineBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'declined');
        cookieBanner.style.display = 'none';
    });
});
