//window width and height
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

window.addEventListener('resize', () => {
    //update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    //update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    //update renderer
    renderer.setSize(sizes.width, sizes.height);
});

//canvas
const canvas = document.querySelector('canvas.webgl');

//scene
const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);

//renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize( sizes.width, sizes.height );
renderer.setClearColor(new THREE.Color('#222831'));

//geometry
const particlesGeometry = new THREE.BufferGeometry();

//number of particles
const particlesCount = 500;

const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * (Math.random() * 35);
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

//material to color the particles
const material = new THREE.PointsMaterial({ 
    size: 0.005,
    color: 'white' 
});

//mesh, takes the geometry and applies a material to it
const particlesMesh = new THREE.Points( particlesGeometry, material );
scene.add( particlesMesh );

camera.position.z = 5;


//rotation speed
const rotationSpeed = 0.00005;

//mouse position
let mouseX = 0;
let mouseY = 0;

let targetX = 0;
let targetY = 0;

const windowHalfX = sizes.width / 2;
const windowHalfY = sizes.height / 2;

function moveParticles(event) {
    mouseX = (event.clientX - windowHalfX);
    mouseY = (event.clientY - windowHalfY);
}

document.addEventListener('mousemove', moveParticles);

const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;
    
    particlesMesh.position.x += 0.5 * (targetX - particlesMesh.position.x);
    particlesMesh.position.y += 0.5 * (targetY - particlesMesh.position.y);

    renderer.render(scene, camera);

    //call again on the next frame
    window.requestAnimationFrame(tick);
}

tick();

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