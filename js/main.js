/**
 * ============================================================
 *  Portfolio – Main JavaScript
 *  A premium single-page portfolio for a Ramadan Mohamed.
 *  Pure vanilla JS – no frameworks, no dependencies.
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ---- Global reduced-motion flag ---- */
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  /* ---- Boot every module ---- */
  initPreloader();
  initNavigation();
  initTypingEffect(prefersReducedMotion);
  initParticles(prefersReducedMotion);
  initScrollReveal(prefersReducedMotion);
  initCounters();
  initProjectTilt(prefersReducedMotion);
  initProjectModals();
  initThemeToggle();
  initContactFormMailto();
  initMouseSpotlight(prefersReducedMotion);
});

/* ==========================================================
   1.  PRELOADER
   ========================================================== */

function initPreloader() {
  const preloader = document.querySelector('.preloader');
  if (!preloader) return;

  window.addEventListener('load', () => {
    // Small delay so the animation is visible even on fast connections
    setTimeout(() => {
      preloader.classList.add('loaded');

      // After the CSS transition finishes, remove from flow entirely
      preloader.addEventListener('transitionend', () => {
        preloader.style.display = 'none';
      }, { once: true });
    }, 1500);
  });
}

/* ==========================================================
   2.  NAVIGATION
       – Sticky nav on scroll
       – Smooth-scroll anchor links
       – Mobile hamburger menu
       – Active section highlighting via IntersectionObserver
   ========================================================== */

function initNavigation() {
  const nav = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.mobile-menu');
  const navLinks = document.querySelectorAll('.navbar__link, .mobile-menu__link');
  const allAnchorLinks = document.querySelectorAll('a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  /* ---- Sticky Nav ---- */
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  /* ---- Smooth Scroll ---- */
  allAnchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || targetId.length <= 1) return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const navHeight = nav ? nav.offsetHeight : 0;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({ top: targetPosition, behavior: 'smooth' });

      // Close mobile menu after clicking a link
      closeMobileMenu();
    });
  });

  /* ---- Mobile Menu ---- */
  function openMobileMenu() {
    if (!hamburger || !navMenu) return;
    hamburger.classList.add('active');
    navMenu.classList.add('active');
    const overlay = document.querySelector('.nav-overlay');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // scroll lock
  }

  function closeMobileMenu() {
    if (!hamburger || !navMenu) return;
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    const overlay = document.querySelector('.nav-overlay');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = ''; // release scroll lock
  }

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('active');
      isOpen ? closeMobileMenu() : openMobileMenu();
    });

    // Close on click outside or overlay click
    const overlay = document.querySelector('.nav-overlay');
    if (overlay) {
      overlay.addEventListener('click', closeMobileMenu);
    }
  }

  /* ---- Active Section Highlighting ---- */
  if (sections.length && navLinks.length) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // triggers roughly in top third
      threshold: 0,
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const isMatch = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('active', isMatch);
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
  }
}

/* ==========================================================
   3.  TYPING EFFECT
   ========================================================== */

function initTypingEffect(prefersReducedMotion) {
  const el = document.querySelector('.hero__typing-text');
  if (!el) return;

  const strings = [
    'Flutter Developer',
    'Mobile App Developer',
    'Clean Architecture Enthusiast',
  ];

  // Reduced-motion: just show the first string, no animation
  if (prefersReducedMotion) {
    el.textContent = strings[0];
    return;
  }

  let stringIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const TYPING_SPEED = 80;   // ms per character typed
  const DELETING_SPEED = 40; // ms per character deleted
  const PAUSE_AFTER_TYPE = 2000;
  const PAUSE_AFTER_DELETE = 500;

  function tick() {
    const current = strings[stringIndex];

    if (!isDeleting) {
      // Typing forward
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === current.length) {
        // Finished typing – pause then start deleting
        isDeleting = true;
        setTimeout(tick, PAUSE_AFTER_TYPE);
        return;
      }
      setTimeout(tick, TYPING_SPEED);
    } else {
      // Deleting
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        stringIndex = (stringIndex + 1) % strings.length;
        setTimeout(tick, PAUSE_AFTER_DELETE);
        return;
      }
      setTimeout(tick, DELETING_SPEED);
    }
  }

  tick();
}

/* ==========================================================
   4.  PARTICLES  (Canvas in hero section)
   ========================================================== */

function initParticles(prefersReducedMotion) {
  const canvas = document.querySelector('canvas#particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  // Accent palette – matches typical Flutter-themed dark portfolios
  const COLORS = [
    'rgba(100, 255, 218, ',   // teal accent
    'rgba(130, 170, 255, ',   // soft blue
    'rgba(199, 146, 234, ',   // purple
    'rgba(255, 203, 107, ',   // amber
  ];

  const CONNECTION_DISTANCE = 120;
  let particles = [];
  let animationId = null;

  /* ---- Sizing ---- */
  function resize() {
    canvas.width = canvas.parentElement ? canvas.parentElement.offsetWidth : window.innerWidth;
    canvas.height = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;
  }

  /* ---- Particle factory ---- */
  function createParticles() {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 20 : 50;

    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1, // 1-3
        opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        vx: (Math.random() - 0.5) * 0.4, // very gentle drift
        vy: (Math.random() - 0.5) * 0.4,
      });
    }
  }

  /* ---- Draw helpers ---- */
  function drawParticle(p) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color + p.opacity + ')';
    ctx.fill();
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DISTANCE) {
          const lineOpacity = 0.05 + 0.05 * (1 - dist / CONNECTION_DISTANCE);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(100, 255, 218, ${lineOpacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  /* ---- Animation loop ---- */
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      drawParticle(p);
    });

    drawConnections();
    animationId = requestAnimationFrame(animate);
  }

  /* ---- Init ---- */
  resize();
  createParticles();

  if (prefersReducedMotion) {
    // Draw a single static frame – no animation loop
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(drawParticle);
    drawConnections();
  } else {
    animate();
  }

  window.addEventListener('resize', () => {
    resize();
    createParticles();

    if (prefersReducedMotion) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(drawParticle);
      drawConnections();
    }
  });
}

/* ==========================================================
   5.  SCROLL REVEAL  (IntersectionObserver)
   ========================================================== */

function initScrollReveal(prefersReducedMotion) {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  // Reduced-motion: instantly show everything
  if (prefersReducedMotion) {
    revealElements.forEach(el => el.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el = entry.target;

        // If this element has staggered children
        if (el.hasAttribute('data-reveal-stagger')) {
          const children = el.children;
          Array.from(children).forEach((child, i) => {
            setTimeout(() => {
              child.classList.add('active');
            }, i * 100);
          });
        }

        el.classList.add('active');
        observer.unobserve(el); // only once
      });
    },
    { threshold: 0.15, rootMargin: '-50px' }
  );

  revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================
   6.  ANIMATED COUNTERS
   ========================================================== */

function initCounters() {
  const counters = document.querySelectorAll('.counter-item__number');
  if (!counters.length) return;

  // easeOutQuad easing function
  function easeOutQuad(t) {
    return t * (2 - t);
  }

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000; // ms
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);
      const currentValue = Math.floor(easedProgress * target);

      el.textContent = currentValue + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix; // ensure exact final value
      }
    }

    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target); // animate only once
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(counter => observer.observe(counter));
}

/* ==========================================================
   7.  PROJECT CARD TILT  (3D hover effect)
   ========================================================== */

function initProjectTilt(prefersReducedMotion) {
  if (prefersReducedMotion) return;

  // Desktop-only: check pointer capability or viewport width
  const isDesktop =
    window.matchMedia('(pointer: fine)').matches || window.innerWidth > 1024;
  if (!isDesktop) return;

  const cards = document.querySelectorAll('.project-card');
  if (!cards.length) return;

  const MAX_TILT = 5; // degrees

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // -1 to 1 range from center
      const percentX = (e.clientX - centerX) / (rect.width / 2);
      const percentY = (e.clientY - centerY) / (rect.height / 2);

      const rotateY = percentX * MAX_TILT;     // horizontal → Y-axis
      const rotateX = -percentY * MAX_TILT;    // vertical   → X-axis (inverted)

      // Subtle shadow shift
      const shadowX = percentX * 10;
      const shadowY = percentY * 10;

      card.style.transform =
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.boxShadow =
        `${shadowX}px ${shadowY}px 30px rgba(0,0,0,0.15)`;
      card.style.transition = 'none'; // immediate follow
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
      card.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
    });
  });
}

/* ==========================================================
   8.  PROJECT MODALS
   ========================================================== */

function initProjectModals() {
  /* ---- Project Data ---- */
  const projects = [
    {
      id: 'sohba',
      title: 'صحبة',
      category: 'Islamic Lifestyle',
      description:
        'A comprehensive Islamic companion app for daily worship tracking, community accountability, and spiritual growth.',
      longDescription:
        'صحبة is a full-featured Islamic lifestyle app designed to help Muslims maintain consistent worship habits through social accountability. The app combines prayer tracking, Quran reading, Azkar, Qibla direction, prayer times, and community features into one polished experience.',
      features: [
        'Prayer tracking with streaks & badges',
        'Social accountability groups',
        'Smart reminders & notifications',
        'Prayer garden gamification',
        'Quran & Azkar reader',
        'Qibla compass & prayer times',
        'Group chat & leaderboards',
        'Admin metrics dashboard',
        'Full Arabic localization & RTL',
        'Offline-first with sync queues',
      ],
      techStack: [
        'Flutter', 'Dart', 'BLoC/Cubit', 'Firebase',
        'GoRouter', 'Hive', 'SharedPreferences', 'Clean Architecture',
      ],
      links: { playStore: 'https://play.google.com/store/apps/details?id=com.ramadandev.sohba' },
      isFlagship: true,
    },
    {
      id: 'albedayah',
      title: 'البداية',
      category: 'Education',
      description:
        'An interactive Arabic learning app for children with letter tracing, speech recognition, and engaging educational UX.',
      longDescription:
        'البداية is an innovative educational app designed to teach Arabic to young learners through interactive tracing exercises, speech recognition for pronunciation feedback, and gamified learning paths. The app features a child-friendly RTL interface with colorful animations.',
      features: [
        'Interactive letter tracing',
        'Speech recognition feedback',
        'Gamified learning paths',
        'Child-friendly RTL UI',
        'Progress tracking',
        'Offline content access',
      ],
      techStack: [
        'Flutter', 'Dart', 'Provider', 'Firebase',
        'Speech-to-Text', 'Custom Painter',
      ],
      links: { playStore: 'https://play.google.com/store/apps/details?id=com.ramadan.arabic_learning_app' },
    },
    {
      id: 'payminder',
      title: 'PayMinder',
      category: 'Finance & Utility',
      description:
        'A smart payment reminder and financial tracking app with offline-first architecture and intelligent notifications.',
      longDescription:
        'PayMinder helps users never miss a payment deadline. Built with offline-first architecture, it provides smart reminders, payment categorization, and financial overview dashboards that work without internet connectivity.',
      features: [
        'Smart payment reminders',
        'Offline-first data storage',
        'Payment categorization',
        'Financial overview dashboard',
        'Recurring payment tracking',
        'Local notifications',
      ],
      techStack: [
        'Flutter', 'Dart', 'BLoC/Cubit', 'Hive',
        'Local Notifications', 'Clean Architecture',
      ],
      links: { playStore: 'https://play.google.com/store/apps/details?id=com.ramadan.payminder' },
    },
    {
      id: 'jobtracker',
      title: 'Job Tracker',
      category: 'Productivity & AI',
      description:
        'An AI-powered job application tracker with smart organization, status tracking, and productivity analytics.',
      longDescription:
        'Job Tracker streamlines the job hunting process with AI-powered features for organizing applications, tracking statuses, and providing productivity insights to help users land their dream job faster.',
      features: [
        'AI-powered organization',
        'Application status tracking',
        'Productivity analytics',
        'Smart categorization',
        'Interview scheduling',
        'Notes & reminders',
      ],
      techStack: [
        'Flutter', 'Dart', 'Riverpod', 'Firebase',
        'REST APIs', 'Clean Architecture',
      ],
      links: { playStore: 'https://play.google.com/store/apps/details?id=com.ramadanmohamed.jobtracker' },
    },
    {
      id: 'social-media',
      title: 'Social Media App',
      category: 'Social',
      description:
        'A feature-rich social media application with real-time feeds, messaging, and community features.',
      longDescription: 'A custom social networking application showcasing complex feed generation, real-time chats, user profiles, image uploading, and instant push notifications.',
      features: ['Real-time activity feeds', 'Direct and group messaging', 'Image & media uploads', 'Push notifications', 'User profile customization', 'Security rules validation'],
      techStack: ['Flutter', 'Firebase', 'BLoC', 'Cloud Firestore', 'Cloud Storage'],
      links: { github: 'https://github.com/RamadanMohamed11/Social-Media' },
    },
    {
      id: 'attendance',
      title: 'Student Attendance System',
      category: 'Management',
      description:
        'A comprehensive student attendance management system with reporting and analytics.',
      longDescription: 'Developed for educational institutes to automate attendance tracking. Built with offline support, automated Excel report generation, and role-based access control for instructors and admins.',
      features: ['Student roster management', 'QR code / Manual attendance', 'Excel/PDF report exports', 'Analytical attendance dashboards', 'Offline sync capabilities'],
      techStack: ['Flutter', 'Firebase', 'Provider', 'Excel API', 'PDF Generator'],
      links: { github: '#' },
    },
    {
      id: 'dashboard',
      title: 'Responsive Dashboard',
      category: 'UI/UX',
      description:
        'A responsive and adaptive design dashboard showcasing advanced Flutter layout techniques.',
      longDescription: 'An enterprise-grade administrative dashboard designed to look stunning on mobile, tablet, and desktop screens. Implements complex layout builders and custom navigation patterns.',
      features: ['Multi-viewport adaptive layout', 'Interactive charting & analytics', 'Dark/Light mode synchronization', 'Custom sidebar navigation', 'Localization support'],
      techStack: ['Flutter', 'Dart', 'Responsive Design', 'fl_chart', 'GoRouter'],
      links: { github: '#' },
    },
    {
      id: 'portfolio-flutter',
      title: 'Portfolio (Flutter)',
      category: 'Personal',
      description:
        'A portfolio application built with Dart & Flutter demonstrating cross-platform capabilities.',
      longDescription: 'A companion mobile application for this portfolio, allowing users to browse my achievements, projects, and contact info directly on their iOS or Android devices.',
      features: ['Dynamic project listing', 'Interactive CV viewer', 'Direct contact integration', 'Smooth page animations'],
      techStack: ['Flutter', 'Dart', 'GitHub Pages API'],
      links: { github: 'https://github.com/RamadanMohamed11/MyPortfolio' },
    },
    {
      id: 'slogan-app',
      title: 'Slogan App',
      category: 'Creative',
      description:
        'A creative slogan generator and display app with beautiful typography.',
      longDescription: 'A fun and creative application that generates business slogans based on keywords. Features beautiful custom typography, sharing options, and a favorites list.',
      features: ['Keyword-based slogan generation', 'Favorites management', 'Slogan card sharing as image', 'Animated card transitions'],
      techStack: ['Flutter', 'Dart', 'Custom Painter', 'Share Plus'],
      links: { github: 'https://github.com/RamadanMohamed11/Slogan-App' },
    },
  ];

  /* ---- DOM references ---- */
  const overlay = document.querySelector('.modal-overlay');
  const modal = overlay ? overlay.querySelector('.modal') : null;
  const detailButtons = document.querySelectorAll('.btn-details[data-project-id], .project-card--small');

  if (!overlay || !modal || !detailButtons.length) return;

  let previouslyFocusedElement = null;

  /* ---- Build modal inner HTML from project data ---- */
  function buildModalHTML(project) {
    // Description
    const description = project.longDescription || project.description;

    // Features list (only if available)
    let featuresHTML = '';
    if (project.features && project.features.length) {
      const items = project.features.map(f => `<li>${f}</li>`).join('');
      featuresHTML = `
        <div style="margin-top: var(--sp-4);">
          <h4 style="font-family: var(--ff-heading); font-size: var(--fs-md); font-weight: var(--fw-semibold); color: var(--clr-text-heading); margin-bottom: var(--sp-2);">Key Features</h4>
          <ul style="margin-left: 20px; list-style-type: disc; color: var(--clr-text-secondary); line-height: var(--lh-relaxed);">${items}</ul>
        </div>`;
    }

    // Tech stack chips
    let techHTML = '';
    if (project.techStack && project.techStack.length) {
      const chips = project.techStack
        .map(t => `<span class="tech-chip">${t}</span>`)
        .join('');
      techHTML = `
        <div style="margin-top: var(--sp-4);">
          <h4 style="font-family: var(--ff-heading); font-size: var(--fs-md); font-weight: var(--fw-semibold); color: var(--clr-text-heading); margin-bottom: var(--sp-2);">Tech Stack</h4>
          <div style="display: flex; flex-wrap: wrap; gap: var(--sp-2);">${chips}</div>
        </div>`;
    }

    // Action buttons
    let actionsHTML = '';
    if (project.links.github) {
      actionsHTML += `
        <a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <i class="fa-brands fa-github"></i> GitHub
        </a>`;
    }
    if (project.links.playStore) {
      actionsHTML += `
        <a href="${project.links.playStore}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
          <i class="fa-brands fa-google-play"></i> Play Store
        </a>`;
    }

    return `
      <div class="modal__header">
        <h3 class="modal__title" id="modal-title">${project.title}</h3>
        <button class="modal__close" id="modal-close" aria-label="Close modal">&times;</button>
      </div>
      <div class="modal__body" id="modal-body">
        <span class="chip chip--gradient" style="margin-bottom: var(--sp-3);">${project.category}</span>
        <p style="color: var(--clr-text-secondary); line-height: var(--lh-relaxed);">${description}</p>
        ${featuresHTML}
        ${techHTML}
      </div>
      <div class="modal__footer" id="modal-footer" style="display: flex; gap: var(--sp-3); justify-content: flex-end; margin-top: var(--sp-4);">
        ${actionsHTML}
      </div>
    `;
  }

  /* ---- Open / Close helpers ---- */
  function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    previouslyFocusedElement = document.activeElement;

    modal.innerHTML = buildModalHTML(project);
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus close button
    const closeBtn = modal.querySelector('#modal-close');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';

    // Return focus to the triggering element
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
      previouslyFocusedElement = null;
    }
  }

  /* ---- Event: open modal via detail buttons & small cards ---- */
  detailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // If clicking a real link inside a card, don't trigger modal
      if (e.target.closest('a') && !e.target.closest('.btn-details')) {
        return;
      }
      e.preventDefault();
      const id = btn.getAttribute('data-project-id');
      openModal(id);
    });
  });

  /* ---- Event: close on X button (delegated) ---- */
  overlay.addEventListener('click', (e) => {
    if (e.target.id === 'modal-close' || e.target.classList.contains('modal__close')) {
      closeModal();
      return;
    }
    // Close on overlay background click (but not modal content)
    if (e.target === overlay) {
      closeModal();
    }
  });

  /* ---- Event: close on Escape ---- */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeModal();
    }
  });

  /* ---- Focus Trap ---- */
  overlay.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    if (!overlay.classList.contains('active')) return;

    const focusable = modal.querySelectorAll(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      // Shift+Tab: wrap from first → last
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      // Tab: wrap from last → first
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

/* ==========================================================
   9.  THEME TOGGLE  (dark ↔ light)
   ========================================================== */

function initThemeToggle() {
  const toggleBtn = document.querySelector('.theme-toggle');
  if (!toggleBtn) return;

  const STORAGE_KEY = 'portfolio-theme';

  const MOON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

  const SUN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    // Show the *opposite* icon (moon when dark → click to go light; sun when light → click to go dark)
    toggleBtn.innerHTML = theme === 'dark' ? MOON_SVG : SUN_SVG;
    toggleBtn.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
    );
  }

  // On load: check localStorage, default to dark
  const savedTheme = localStorage.getItem(STORAGE_KEY) || 'dark';
  applyTheme(savedTheme);

  // Toggle handler
  toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });
}

/* ==========================================================
   10.  CONTACT FORM → MAILTO
   ========================================================== */

function initContactFormMailto() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = (form.querySelector('[name="name"]') || form.querySelector('#contact-name') || {}).value || '';
    const email = (form.querySelector('[name="email"]') || form.querySelector('#contact-email') || {}).value || '';
    const message = (form.querySelector('[name="message"]') || form.querySelector('#contact-message') || {}).value || '';

    if (!name.trim() || !email.trim() || !message.trim()) {
      showFormFeedback(form, 'Please fill in all fields.', 'error');
      return;
    }

    // Build mailto URI
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    const mailto = `mailto:ramadan.work010@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailto;

    showFormFeedback(form, 'Opening your email client…', 'success');

    // Reset form after short delay
    setTimeout(() => form.reset(), 1000);
  });

  /**
   * Show a brief feedback message below the form.
   */
  function showFormFeedback(formEl, message, type) {
    // Remove any existing feedback
    const existing = formEl.querySelector('.form-feedback');
    if (existing) existing.remove();

    const feedback = document.createElement('div');
    feedback.className = `form-feedback form-feedback--${type}`;
    feedback.textContent = message;
    feedback.setAttribute('role', 'status');
    feedback.setAttribute('aria-live', 'polite');
    formEl.appendChild(feedback);

    // Auto-remove after 4 seconds
    setTimeout(() => {
      if (feedback.parentElement) {
        feedback.classList.add('fade-out');
        feedback.addEventListener('animationend', () => feedback.remove(), { once: true });
        // Fallback removal in case animationend doesn't fire
        setTimeout(() => { if (feedback.parentElement) feedback.remove(); }, 500);
      }
    }, 4000);
  }
}

/* ==========================================================
   11.  MOUSE SPOTLIGHT  (subtle cursor glow)
   ========================================================== */

function initMouseSpotlight(prefersReducedMotion) {
  if (prefersReducedMotion) return;

  // Desktop only
  if (!window.matchMedia('(pointer: fine)').matches) return;

  // Create spotlight element
  const spotlight = document.createElement('div');
  spotlight.className = 'mouse-spotlight';
  Object.assign(spotlight.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background:
      'radial-gradient(circle, rgba(100,255,218,0.04) 0%, transparent 70%)',
    pointerEvents: 'none',
    zIndex: '9999',
    transform: 'translate(-50%, -50%)',
    willChange: 'transform',
  });
  document.body.appendChild(spotlight);

  let mouseX = -300;
  let mouseY = -300;
  let spotX = -300;
  let spotY = -300;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function updateSpotlight() {
    // Smooth lerp for buttery movement
    spotX += (mouseX - spotX) * 0.15;
    spotY += (mouseY - spotY) * 0.15;

    spotlight.style.transform = `translate(${spotX - 150}px, ${spotY - 150}px)`;

    requestAnimationFrame(updateSpotlight);
  }

  requestAnimationFrame(updateSpotlight);
}
