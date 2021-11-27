//the areas we want the intersection to observe
const sections = document.querySelectorAll('.u-fadeIn');

//fade in when enter sections
const options = {
    threshold: 0.50,
    rootMargin: '0px 0px -125px 0px'
};

//callback for the sections
let sectionsFadeIn = (entries, observer) => {
    entries.forEach( entry => {
        if(!entry.isIntersecting){
            return;
        }
        else {
            entry.target.classList.toggle('u-fade-in-appear');
            observer.unobserve(entry.target);
        }
    });
}

//observer for the sections
let observer = new IntersectionObserver(sectionsFadeIn, options);

//collection of sections
sections.forEach( section => {
    observer.observe(section); //elements to be watched
});


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');
    const body = document.querySelector('body');

    //burger event listener
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

//light/dark theme
const body = document.querySelector('body');
const contrast = document.querySelector('#contrast');
const navLinks = document.querySelectorAll('.nav-link');
const socialLinks = document.querySelectorAll('.social-icon');
const headerHeading = document.querySelector('.heading');
const headerIcon = document.querySelector('.header-icon');
const sectionHeading = document.querySelectorAll('.section-heading');
const about1 = document.querySelector('.about-1');
const about2 = document.querySelector('.about-2');
const educationHeading = document.querySelector('.education-content__heading');
const educationSub = document.querySelector('.education-content__sub');
const skillsIcon = document.querySelectorAll('.skills-icon');
const cards = document.querySelectorAll('.card');
const btn = document.querySelectorAll('.btn');
const info = document.querySelector('.info__paragraph');
const footer = document.querySelector('.footer-box__quote');
const footerName = document.querySelector('.footer-box__quote--name');
const footerCopy = document.querySelector('.footer-box__copyright');
const aboutImg = document.querySelector('.about-img');
const cardContent = document.querySelectorAll('.card-content');
const cardLinks = document.querySelectorAll('.card-link');
const cardTitle = document.querySelectorAll('.card-title');
const skillNames = document.querySelectorAll('.skills-name');

contrast.addEventListener('click', () => {
    
    for(let i = 0; i < socialLinks.length; i++) {
        if(!socialLinks[i].classList.contains('u-dark-theme')){
            socialLinks[i].classList.toggle('u-dark-theme');
        }
        else {
            socialLinks[i].classList.remove('u-dark-theme');
        }
    }

    for(let i = 0; i < navLinks.length; i++) {
        if(!navLinks[i].classList.contains('u-dark-theme')){
            navLinks[i].classList.toggle('u-dark-theme');
        }
        else {
            navLinks[i].classList.remove('u-dark-theme');
        }
    }

    for(let i = 0; i < sectionHeading.length; i++) {
        if(!sectionHeading[i].classList.contains('u-dark-theme')){
            sectionHeading[i].classList.toggle('u-dark-theme');
        }
        else {
            sectionHeading[i].classList.remove('u-dark-theme');
        }
    }

    for(let i = 0; i < cards.length; i++) {
        if(!cards[i].classList.contains('u-bg-dark')){
            cards[i].classList.toggle('u-bg-dark');
            cards[i].classList.toggle('u-light-theme');
        }
        else {
            cards[i].classList.remove('u-bg-dark');
            cards[i].classList.remove('u-light-theme');
        }
    }

    for(let i = 0; i < skillsIcon.length; i++) {
        if(!skillsIcon[i].classList.contains('u-dark-theme')){
            skillsIcon[i].classList.toggle('u-dark-theme');
        }
        else {
            skillsIcon[i].classList.remove('u-dark-theme');
        }
    }

    for(let i = 0; i < btn.length; i++) {
        if(!btn[i].classList.contains('u-dark-theme')){
            btn[i].classList.toggle('u-dark-theme');
        }
        else {
            btn[i].classList.remove('u-dark-theme');
        }
    }

    for(let i = 0; i < cardContent.length; i++) {
        if(!cardContent[i].classList.contains('u-light-theme')){
            cardContent[i].classList.toggle('u-light-theme');
        }
        else {
            cardContent[i].classList.remove('u-light-theme');
        }
    }

    for(let i = 0; i < cardTitle.length; i++) {
        if(!cardTitle[i].classList.contains('u-light-theme')){
            cardTitle[i].classList.toggle('u-light-theme');
        }
        else {
            cardTitle[i].classList.remove('u-light-theme');
        }
    }

    for(let i = 0; i < cardLinks.length; i++) {
        if(!cardLinks[i].classList.contains('u-light-theme')){
            cardLinks[i].classList.toggle('u-light-theme');
        }
        else {
            cardLinks[i].classList.remove('u-light-theme');
        }
    }

    for(let i = 0; i < skillNames.length; i++) {
        if(!skillNames[i].classList.contains('u-dark-theme')){
            skillNames[i].classList.toggle('u-dark-theme');
        }
        else {
            skillNames[i].classList.remove('u-dark-theme');
        }
    }

    if(!body.classList.contains('u-bg-light')) {
        body.classList.toggle('u-bg-light');
        headerHeading.classList.toggle('u-dark-theme');
        headerIcon.classList.toggle('u-dark-theme');
        about1.classList.toggle('u-dark-theme');
        about2.classList.toggle('u-dark-theme');
        educationHeading.classList.toggle('u-dark-theme');
        educationSub.classList.toggle('u-dark-theme');
        info.classList.toggle('u-dark-theme');
        footer.classList.toggle('u-dark-theme');
        footerName.classList.toggle('u-dark-theme');
        footerCopy.classList.toggle('u-dark-theme');
        aboutImg.classList.toggle('u-bg-dark');
        renderer.setClearColor(new THREE.Color('#eeeeee'));
    } else {
        body.classList.remove('u-bg-light');
        headerHeading.classList.remove('u-dark-theme');
        headerIcon.classList.remove('u-dark-theme');
        about1.classList.remove('u-dark-theme');
        about2.classList.remove('u-dark-theme');
        educationHeading.classList.remove('u-dark-theme');
        educationSub.classList.remove('u-dark-theme');
        info.classList.remove('u-dark-theme');
        aboutImg.classList.remove('u-bg-dark');
        footer.classList.remove('u-dark-theme');
        footerName.classList.remove('u-dark-theme');
        footerCopy.classList.remove('u-dark-theme');
        renderer.setClearColor(new THREE.Color('#222831'));
    }

});

//change sub heading
let subHeading = document.querySelector('.heading__bottom');
const jobs = ['Front End Engineer', 'Full Stack Engineer', 'Web Development'];
let counter = 0;

function changeSubHeading() {
    counter++;
    subHeading.textContent = jobs[counter];

    if(counter >= jobs.length) {
        counter = 0;
        subHeading.textContent = jobs[counter];
    }
}

setInterval(changeSubHeading, 2000);