// Simple smooth scroll animation
window.addEventListener('scroll', () => {
    const landingContent = document.querySelector('.landing-content');
    const aiAnimation = document.querySelector('.ai-animation img');
  
    let scrollY = window.scrollY;
  
    // Parallax effect on the landing page text and image
    landingContent.style.transform = `translateY(${scrollY * 0.3}px)`;
    aiAnimation.style.transform = `translateY(${scrollY * 0.5}px)`;
  });
  