document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');
  
  hamburgerMenu.addEventListener('click', function() {
      navLinks.classList.toggle('show');
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              const headerHeight = document.querySelector('header').offsetHeight;
              const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
              
              window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
              });
              
              // Close mobile menu if open
              if (navLinks.classList.contains('show')) {
                  navLinks.classList.remove('show');
              }
          }
      });
  });

  // Call to action button click event
  const ctaButtons = document.querySelectorAll('.cta-button');
  ctaButtons.forEach(button => {
      button.addEventListener('click', () => {
          // In a real scenario, this would redirect to a sign-up page
          // For now, just show an alert
          alert('Thank you for your interest in GigFloww! The sign-up page would open here.');
      });
  });

  // Basic animation for feature cards on scroll
  const featureCards = document.querySelectorAll('.feature-card');
  
  function checkScroll() {
      featureCards.forEach(card => {
          const cardTop = card.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (cardTop < windowHeight * 0.85) {
              card.classList.add('visible');
          }
      });
  }
  
  // Add CSS for the animation
  const style = document.createElement('style');
  style.innerHTML = `
      .feature-card {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
      }
      .feature-card.visible {
          opacity: 1;
          transform: translateY(0);
      }
  `;
  document.head.appendChild(style);
  
  // Check on load and scroll
  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Initial check
  
  // Mobile menu additional styling
  const mobileStyle = document.createElement('style');
  mobileStyle.innerHTML = `
      @media screen and (max-width: 768px) {
          .nav-links {
              position: absolute;
              top: 70px;
              left: 0;
              right: 0;
              background-color: white;
              box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
              padding: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
              transform: translateY(-150%);
              transition: transform 0.3s ease;
              z-index: 99;
          }
          
          .nav-links.show {
              transform: translateY(0);
          }
          
          .nav-links a {
              margin: 10px 0;
              display: block;
          }
      }
  `;
  document.head.appendChild(mobileStyle);
});