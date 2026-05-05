// Theme Toggle (Dark Mode)
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

function updateThemeIcon(theme) {
  const icon = themeToggle?.querySelector('.theme-icon');
  if (icon) {
    icon.innerHTML = theme === 'dark' ? '&#9728;' : '&#9790;';
  }
}

function setTheme(theme) {
  htmlElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  updateThemeIcon(theme);
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (systemPrefersDark) {
    setTheme('dark');
  } else {
    updateThemeIcon('light');
  }
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
}

initTheme();

// Mobile Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// Header Scroll Effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (header) {
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  lastScroll = currentScroll;
});

// Scroll Animations (Fade-in)
const fadeElements = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => fadeObserver.observe(el));

// Contact Form Handling
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      alert('Thank you! Your message has been sent. We\'ll get back to you soon.');
      contactForm.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 1500);
  });
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  if (question) {
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(other => {
        other.classList.remove('active');
      });
      
      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imgObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => imgObserver.observe(img));
}

// Keyboard Navigation Support
document.addEventListener('keydown', (e) => {
  // ESC to close mobile menu
  if (e.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

// Performance: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}