// Mobile Menu Toggle
document.getElementById('mobile-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    this.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Close mobile menu if open
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            document.getElementById('mobile-menu').classList.remove('active');
        }
    });
});

// Header Scroll Effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const header = document.querySelector('.main-header');

    if (currentScroll <= 0) {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        return;
    }

    if (currentScroll > lastScroll) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    }
    lastScroll = currentScroll;
});

// Skills Data
const skills = {
    programming: ['Python', 'C++', 'SQL'],
    machineLearning: ['TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn'],
    webDevelopment: ['HTML/CSS', 'JavaScript', 'React', 'Node.js']
};

// Projects Data
const projects = [
    {
        title: 'Image Processing Project',
        description: 'Developed an advanced image processing system using deep learning techniques for real-time object detection and classification.'
    },
    {
        title: 'Machine Learning Research',
        description: 'Conducted research on novel machine learning algorithms for improving accuracy in computer vision tasks.'
    },
    {
        title: 'Web Application Development',
        description: 'Created responsive web applications using modern frameworks and technologies.'
    }
];

// Load Skills
function loadSkills() {
    // Load Programming Skills
    const programmingList = document.getElementById('programming-skills');
    if (programmingList) {
        programmingList.innerHTML = '';
        skills.programming.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            programmingList.appendChild(li);
        });
    }

    // Load Machine Learning Skills
    const mlList = document.getElementById('ml-skills');
    if (mlList) {
        mlList.innerHTML = '';
        skills.machineLearning.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            mlList.appendChild(li);
        });
    }

    // Load Web Development Skills
    const webList = document.getElementById('web-skills');
    if (webList) {
        webList.innerHTML = '';
        skills.webDevelopment.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            webList.appendChild(li);
        });
    }
}

// Load Projects
function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        projectsContainer.innerHTML = ''; // Clear existing content
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            const title = document.createElement('h3');
            title.textContent = project.title;
            
            const description = document.createElement('intro');
            description.textContent = project.description;
            
            projectCard.appendChild(title);
            projectCard.appendChild(description);
            projectsContainer.appendChild(projectCard);
        });
    }
}

// Update Year
function updateYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadSkills();
    loadProjects();
    updateYear();
});

// Debug function to check if elements exist
function checkElements() {
    console.log('Programming Skills Container:', document.getElementById('programming-skills'));
    console.log('ML Skills Container:', document.getElementById('ml-skills'));
    console.log('Web Skills Container:', document.getElementById('web-skills'));
    console.log('Projects Container:', document.getElementById('projects-container'));
}

// Run debug check when DOM is loaded
document.addEventListener('DOMContentLoaded', checkElements);