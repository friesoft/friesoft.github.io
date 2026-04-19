document.addEventListener('DOMContentLoaded', function() {
  // 1. Finalize Project Card Surgery
  document.querySelectorAll('#projects .card').forEach(card => {
    const moreBtn = card.querySelector('.btn-sm');
    if (moreBtn) {
      if (moreBtn.textContent.trim() === 'Know more') {
        moreBtn.textContent = 'More';
      }
      // 1.1 Image Surgery
      const img = card.querySelector('.card-img-top');
      if (img && img.parentElement.tagName !== 'A') {
        const link = document.createElement('a');
        link.href = moreBtn.href;
        if (moreBtn.target) link.target = moreBtn.target;
        link.style.display = 'flex';
        link.style.width = '100%';
        link.style.height = '100%';
        link.style.alignItems = 'center';
        link.style.justifyContent = 'center';
        img.parentNode.insertBefore(link, img);
        link.appendChild(img);
      }
      // 1.2 Title Surgery
      const title = card.querySelector('.card-title');
      if (title && title.parentElement.tagName !== 'A') {
        const link = document.createElement('a');
        link.href = moreBtn.href;
        if (moreBtn.target) link.target = moreBtn.target;
        link.classList.add('text-decoration-none');
        link.style.color = 'inherit';
        title.parentNode.insertBefore(link, title);
        link.appendChild(title);
      }
    }
  });
  
  // 2. Project Footer Link Surgery
  document.querySelectorAll('#projects .card-footer a:not(.btn)').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener');
  });

  // 3. Robust Section Highlighting (Manual ScrollSpy)
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  // Normalize HREFs for home page
  if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    navLinks.forEach(link => {
      try {
        const url = new URL(link.href);
        if (url.hash && url.pathname === window.location.pathname) {
          link.setAttribute('data-target-id', url.hash.substring(1));
        }
      } catch(e) {}
    });
  }

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px', // Trigger when section is in top-mid view
    threshold: 0
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        // Find matching link for this section
        const matchingLink = [...navLinks].find(l => 
          l.getAttribute('data-target-id') === id || 
          l.getAttribute('href').endsWith('#' + id)
        );
        
        if (matchingLink) {
          navLinks.forEach(link => link.classList.remove('active'));
          matchingLink.classList.add('active');
        }
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach(section => observer.observe(section));

  // 4. Subpage Context Highlighting
  const isProjectSubpage = window.location.pathname.includes('/projects/');
  if (isProjectSubpage) {
    navLinks.forEach(link => {
      if (link.getAttribute('aria-label') === 'projects') {
        link.classList.add('active');
      }
    });
  }

  // 5. Hero Area Cleanup: Clear highlights when at the very top
  window.addEventListener('scroll', () => {
    if (window.scrollY < 150 && !isProjectSubpage) {
      navLinks.forEach(link => link.classList.remove('active'));
    }
  });
});
