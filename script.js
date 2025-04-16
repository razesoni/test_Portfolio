// Fade-in animation for projects on scroll
const projectCards = document.querySelectorAll('.project-card');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    projectCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
            card.classList.add('show');
        }
    });
};

// Animate skill bars on scroll
const skillSection = document.querySelector('.skills');
const skillBars = document.querySelectorAll('.skill-progress');
let skillsAnimated = false;

const animateSkills = () => {
    const triggerBottom = window.innerHeight * 0.85;
    const sectionTop = skillSection.getBoundingClientRect().top;

    if (sectionTop < triggerBottom && !skillsAnimated) {
        skillsAnimated = true;
        skillBars[0].style.width = '100%';  // HTML
        skillBars[1].style.width = '100%';  // CSS
        skillBars[2].style.width = '75%';   // JS
        skillBars[3].style.width = '60%';   // Tailwind (you can adjust)
    }
};

window.addEventListener('scroll', () => {
    revealOnScroll();
    animateSkills();
});