// Tailwind Configuration — Sprachex brand system (German engineering palette)
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#E5252C",          // Sprachex signal red
                "primary-dark": "#B91C1C",
                "gold": "#F5A623",             // Sprachex gold accent
                "silver": "#C7CCD4",           // metallic silver text
                "background-light": "#f6f7f8",
                "background-dark": "#0A0A0C",  // near-black engineering base
                "surface-dark": "#101014",
                "glass-border": "rgba(255, 255, 255, 0.08)",
                "glass-surface": "rgba(255, 255, 255, 0.03)",
            },
            fontFamily: {
                "display": ["Manrope", "sans-serif"],
                "mono": ["JetBrains Mono", "monospace"]
            },
            borderRadius: {
                "DEFAULT": "2px",
                "lg": "4px",
                "xl": "6px",
                "2xl": "8px",
                "full": "9999px"
            },
            boxShadow: {
                "glow": "0 0 24px rgba(229, 37, 44, 0.35)",
                "glow-gold": "0 0 24px rgba(245, 166, 35, 0.25)",
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
const openButtons = document.querySelectorAll("#openContact, #openContactAlt, #openContactCta");
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


// ============================================================
// Animations — scroll reveal, navbar solidify (no backend)
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
    // 1. Navbar solidifies on scroll
    const nav = document.querySelector('nav');
    if (nav) {
        const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // 2. Scroll-reveal: tag content blocks, then reveal with stagger
    const revealTargets = document.querySelectorAll(
        'section .glass-card, section .grid > div, section .section-index, ' +
        'section h2, section h3, section > div > p, footer .grid > div'
    );
    revealTargets.forEach(el => {
        // skip hero (has its own entrance animation)
        if (el.closest('.hero-stagger')) return;
        el.classList.add('reveal');
    });

    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                // stagger siblings that arrive in the same viewport batch
                const siblings = el.parentElement
                    ? Array.from(el.parentElement.children).filter(c => c.classList.contains('reveal'))
                    : [el];
                const idx = Math.max(0, siblings.indexOf(el));
                el.style.setProperty('--reveal-delay', (Math.min(idx, 8) * 0.09) + 's');
                el.classList.add('visible');
                io.unobserve(el);
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    } else {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
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
