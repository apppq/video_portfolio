// Portfolio data
const portfolioData = {
  "portfolio_projects": [
    {
      "id": 1,
      "title": "브랜드 홍보 영상",
      "category": "Commercial",
      "thumbnail": "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      "video_url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      "description": "고급스러운 브랜드 이미지를 위한 홍보 영상 제작",
      "tools": ["After Effects", "Premiere Pro", "Photoshop"]
    },
    {
      "id": 2,
      "title": "모션 그래픽 타이틀",
      "category": "Motion Graphics",
      "thumbnail": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      "video_url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      "description": "영화 오프닝 타이틀 시퀀스 디자인 및 애니메이션",
      "tools": ["After Effects", "Cinema 4D", "Illustrator"]
    },
    {
      "id": 3,
      "title": "제품 소개 영상",
      "category": "Product Demo",
      "thumbnail": "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=400&h=300&fit=crop",
      "video_url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      "description": "테크 제품의 기능을 효과적으로 소개하는 데모 영상",
      "tools": ["Premiere Pro", "After Effects", "Audition"]
    },
    {
      "id": 4,
      "title": "뮤직비디오 편집",
      "category": "Music Video",
      "thumbnail": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      "video_url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      "description": "리듬감 있는 편집과 컬러 그레이딩을 통한 뮤직비디오",
      "tools": ["Premiere Pro", "DaVinci Resolve", "After Effects"]
    },
    {
      "id": 5,
      "title": "인포그래픽 애니메이션",
      "category": "Infographic",
      "thumbnail": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      "video_url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      "description": "복잡한 데이터를 직관적으로 표현하는 인포그래픽 영상",
      "tools": ["After Effects", "Illustrator", "Photoshop"]
    },
    {
      "id": 6,
      "title": "소셜미디어 콘텐츠",
      "category": "Social Media",
      "thumbnail": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      "video_url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      "description": "인스타그램, 유튜브용 숏폼 콘텐츠 제작",
      "tools": ["Premiere Pro", "After Effects", "Photoshop"]
    }
  ],
  "skills": [
    {"name": "After Effects", "level": 50, "icon": ""},
    {"name": "Premiere Pro", "level": 50, "icon": ""},
    {"name": "Illustrator", "level": 50, "icon": ""},
    {"name": "Photoshop", "level": 50, "icon": ""},
    {"name": "Blender", "level": 50, "icon": ""},
    {"name": "Cinema 4D", "level": 50, "icon": ""},
    {"name": "DaVinci Resolve", "level": 50, "icon": ""},
    {"name": "Audition", "level": 50, "icon": ""}
  ],
  "social_links": [
    {"platform": "YouTube", "url": "https://youtube.com", "icon": "📺"},
    {"platform": "Instagram", "url": "https://instagram.com", "icon": "📸"},
    {"platform": "LinkedIn", "url": "https://linkedin.com", "icon": "💼"},
    {"platform": "Behance", "url": "https://behance.net", "icon": "🎨"}
  ]
};

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    
    // Initialize all functionality immediately
    initNavigation();
    initPortfolio();
    initSkills();
    initSocialLinks();
    initModal();
    initScrollEffects();
    initPortfolioFilters();
    
    // Hide loading screen after a delay
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }, 1500);
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.getElementById('header');
    
    if (!navToggle || !navMenu) return;
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header ? header.offsetHeight : 80;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');

                // Update active link
                updateActiveNavLink(link);
            }
        });
    });
}

// Update active navigation link
function updateActiveNavLink(activeLink) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

// Portfolio functionality
function initPortfolio() {
    console.log('Initializing portfolio...');
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (!portfolioGrid) {
        console.error('Portfolio grid not found');
        return;
    }
    
    renderPortfolioItems(portfolioData.portfolio_projects);
}

function renderPortfolioItems(projects) {
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (!portfolioGrid) return;
    
    portfolioGrid.innerHTML = '';
    
    projects.forEach((project, index) => {
        const portfolioItem = createPortfolioItem(project, index);
        portfolioGrid.appendChild(portfolioItem);
    });
    
    console.log(`Rendered ${projects.length} portfolio items`);
}

function createPortfolioItem(project, index) {
    const item = document.createElement('div');
    item.className = 'portfolio-item';
    item.dataset.category = project.category;
    item.style.animationDelay = `${index * 0.1}s`;
    
    item.innerHTML = `
        <div class="portfolio-image">
            <img src="${project.thumbnail}" alt="${project.title}" loading="lazy">
            <div class="portfolio-overlay">
                <div class="play-button">▶</div>
            </div>
        </div>
        <div class="portfolio-content">
            <div class="portfolio-category">${project.category}</div>
            <h3 class="portfolio-title">${project.title}</h3>
            <p class="portfolio-description">${project.description}</p>
            <div class="portfolio-tools">
                ${project.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
            </div>
        </div>
    `;

    item.addEventListener('click', () => {
        console.log('Portfolio item clicked:', project.title);
        openVideoModal(project);
    });
    
    return item;
}

// Portfolio filtering
function initPortfolioFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    console.log('Initializing portfolio filters, found buttons:', filterBtns.length);
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            console.log('Filter clicked:', filter);
            
            // Update active filter button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter portfolio items
            filterPortfolioItems(filter);
        });
    });
}

function filterPortfolioItems(filter) {
    const items = document.querySelectorAll('.portfolio-item');
    console.log(`Filtering items with filter: ${filter}, found ${items.length} items`);
    
    items.forEach((item, index) => {
        const category = item.dataset.category;
        
        if (filter === 'all' || category === filter) {
            item.style.display = 'block';
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        } else {
            item.style.display = 'none';
        }
    });
}

// Skills functionality
function initSkills() {
    console.log('Initializing skills...');
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) {
        console.error('Skills grid not found');
        return;
    }
    
    renderSkills(portfolioData.skills);
    observeSkillsSection();
}

function renderSkills(skills) {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;
    
    skillsGrid.innerHTML = '';
    
    skills.forEach(skill => {
        const skillItem = createSkillItem(skill);
        skillsGrid.appendChild(skillItem);
    });
    
    console.log(`Rendered ${skills.length} skill items`);
}

function createSkillItem(skill) {
    const item = document.createElement('div');
    item.className = 'skill-item';
    
    item.innerHTML = `
        <div class="skill-header">
            <div class="skill-icon">${skill.icon}</div>
            <div class="skill-info">
                <h3>${skill.name}</h3>
                <span class="skill-percentage">${skill.level}%</span>
            </div>
        </div>
        <div class="skill-bar">
            <div class="skill-progress" data-level="${skill.level}"></div>
        </div>
    `;
    
    return item;
}

function observeSkillsSection() {
    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Skills section in view, animating bars...');
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(skillsSection);
}

function animateSkillBars() {
    const progressBars = document.querySelectorAll('.skill-progress');
    
    progressBars.forEach((bar, index) => {
        setTimeout(() => {
            const level = bar.dataset.level;
            bar.style.width = `${level}%`;
        }, index * 200);
    });
}

// Social links functionality
function initSocialLinks() {
    console.log('Initializing social links...');
    const socialGrid = document.getElementById('social-grid');
    if (!socialGrid) {
        console.error('Social grid not found');
        return;
    }
    
    renderSocialLinks(portfolioData.social_links);
}

function renderSocialLinks(links) {
    const socialGrid = document.getElementById('social-grid');
    if (!socialGrid) return;
    
    socialGrid.innerHTML = '';
    
    links.forEach(link => {
        const socialItem = createSocialItem(link);
        socialGrid.appendChild(socialItem);
    });
    
    console.log(`Rendered ${links.length} social links`);
}

function createSocialItem(link) {
    const item = document.createElement('a');
    item.className = 'social-item';
    item.href = link.url;
    item.target = '_blank';
    item.rel = 'noopener noreferrer';
    
    item.innerHTML = `
        <div class="social-icon">${link.icon}</div>
        <span>${link.platform}</span>
    `;
    
    return item;
}

// Modal functionality
function initModal() {
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = document.getElementById('modal-overlay');
    const videoModal = document.getElementById('video-modal');
    
    if (!modalClose || !modalOverlay || !videoModal) {
        console.error('Modal elements not found');
        return;
    }
    
    modalClose.addEventListener('click', closeVideoModal);
    modalOverlay.addEventListener('click', closeVideoModal);
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeVideoModal();
        }
    });
    
    console.log('Modal initialized');
}

function openVideoModal(project) {
    console.log('Opening video modal for:', project.title);
    
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalVideo = document.getElementById('modal-video-player');
    const modalDescription = document.getElementById('modal-description');
    const modalTools = document.getElementById('modal-tools');
    const videoModal = document.getElementById('video-modal');
    
    if (!modalTitle || !modalCategory || !modalVideo || !modalDescription || !modalTools || !videoModal) {
        console.error('Modal content elements not found');
        return;
    }
    
    modalTitle.textContent = project.title;
    modalCategory.textContent = project.category;
    modalVideo.src = project.video_url;
    modalDescription.textContent = project.description;
    
    modalTools.innerHTML = project.tools
        .map(tool => `<span class="tool-tag">${tool}</span>`)
        .join('');
    
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Auto play video
    modalVideo.play().catch(e => console.log('Video autoplay failed:', e));
}

function closeVideoModal() {
    const videoModal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video-player');
    
    if (!videoModal || !modalVideo) return;
    
    videoModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    modalVideo.pause();
    modalVideo.src = '';
    
    console.log('Video modal closed');
}

// Scroll effects
function initScrollEffects() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Header background on scroll
        if (header) {
            if (scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        
        // Update active navigation based on scroll position
        updateActiveNavOnScroll();
    });
}

function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY + (header ? header.offsetHeight : 80) + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                navLinks.forEach(link => link.classList.remove('active'));
                activeLink.classList.add('active');
            }
        }
    });
}

// Handle window resize
window.addEventListener('resize', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    // Close mobile menu on resize
    if (window.innerWidth > 768 && navToggle && navMenu) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Error handling for video loading
function handleVideoError(video) {
    if (!video) return;
    
    video.addEventListener('error', () => {
        console.log('Video failed to load:', video.src);
    });
}

// Initialize error handling after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const modalVideo = document.getElementById('modal-video-player');
    if (modalVideo) {
        handleVideoError(modalVideo);
    }
});

// Preload critical images
function preloadImages() {
    const imageUrls = portfolioData.portfolio_projects.map(project => project.thumbnail);
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize image preloading
document.addEventListener('DOMContentLoaded', preloadImages);