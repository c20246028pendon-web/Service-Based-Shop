

    // D1 - E3: GSAP Animations & ScrollTrigger Setup
    function initGSAPAnimations() {
      const mm = gsap.matchMedia();

      // E3: Accessibility guard checking for reduced motion preference
      mm.add("(prefers-reduced-motion: no-preference)", () => {

        // E2: Top Scroll Progress Bar Scrubbed with ease "none"
        gsap.to("#scroll-progress", {
          scaleX: 1,
          ease: "none", // E2 requirement: linear scroll progress scrub ease
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.2
          }
        });

        // D1: GSAP Timeline Page-Load Intro (<3s Total Length)
        // D2 Eases Choice Rationale: 
        // - power3.out: Delivers smooth, luxury high-friction deceleration for typography.
        // - back.out(1.4): Adds a energetic micro-spring pop to the hero badge.
        // - power2.out: Clean linear-curved feel for nav dropdown and action triggers.
        introTl = gsap.timeline({
          defaults: { duration: 0.7, ease: "power3.out" }
        });

        introTl
          // Step 1: Nav Header Fade-In
          .from(".intro-nav", {
            y: -25,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out"
          })
          // Step 2: Hero Badge Entrance (with position parameter overlap)
          .from(".hero-badge", {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "back.out(1.4)"
          }, "-=0.2")
          // Step 3: Hero Title & Description Stagger
          .from(".hero-text", {
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 0.7,
            ease: "power3.out"
          }, "-=0.2")
          // Step 4: Hero CTA Actions & Stats Counter Strip Stagger
          .from(".hero-stagger", {
            opacity: 0,
            y: 20,
            stagger: 0.12,
            duration: 0.6,
            ease: "power2.out"
          }, "<+0.2");

        // E1: ScrollTrigger Reveal Loop using gsap.utils.toArray('.reveal')
        const revealElements = gsap.utils.toArray('.reveal');
        revealElements.forEach((element) => {
          gsap.fromTo(element, 
            { 
              opacity: 0, 
              y: 35 
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out", // Smooth entry on scroll
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse" // E1: explicit toggleActions
              }
            }
          );
        });

      });
    }

    // D3: Click Interaction - Replay Intro Button Event Handler
    document.getElementById('replay-intro-btn').addEventListener('click', () => {
      if (introTl) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        introTl.restart();
      }
    });

    // Form Submission Interaction Handler
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      formStatus.classList.remove('hidden');
      contactForm.reset();
      
      // Auto-hide feedback banner after 6 seconds
      setTimeout(() => {
        formStatus.classList.add('hidden');
      }, 6000);
    });

    // Initialize GSAP Animations on Window Load
    window.addEventListener('load', () => {
      initGSAPAnimations();
    });
 