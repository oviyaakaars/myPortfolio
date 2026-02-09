// Header navigation highlighting and collapsible sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const headerNavLinks = document.querySelectorAll('.header-nav a');
    
    // Highlight active section on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        headerNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Smooth scroll for header navigation links
    headerNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Collapsible main sections
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    sectionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.expand-icon');
            
            if (content.classList.contains('collapsed')) {
                content.classList.remove('collapsed');
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.classList.add('collapsed');
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
    
    // Collapsible project subsections
    const projectHeaders = document.querySelectorAll('.project-header');
    
    projectHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.expand-icon-small');
            
            if (content.classList.contains('collapsed')) {
                content.classList.remove('collapsed');
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.classList.add('collapsed');
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
});
