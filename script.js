<script>
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

/* PARTICLES */
for (let i = 0; i < 80; i++) {
particles.push({
x: Math.random() * window.innerWidth,
y: Math.random() * window.innerHeight,
r: Math.random() * 2 + 0.5,
dx: (Math.random() - 0.5) * 0.4,
dy: (Math.random() - 0.5) * 0.4,
alpha: Math.random() * 0.5 + 0.1,
color: ['#6c63ff','#9b59b6','#3d5af1','#8b1a4a'][Math.floor(Math.random()*4)]
});
}

function animateParticles() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

particles.forEach(p => {
p.x += p.dx;
p.y += p.dy;

if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

ctx.beginPath();
ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
ctx.fillStyle = p.color;
ctx.globalAlpha = p.alpha;
ctx.fill();
});

ctx.globalAlpha = 1;
requestAnimationFrame(animateParticles);
}
animateParticles();

/* TYPING */
const phrases = [
`"We'll make it work."`,
"Discussions over lectures.",
"Build your GitHub portfolio.",
"Learn by doing."
];

let pi = 0, ci = 0, deleting = false;
const el = document.getElementById('typed-tagline');

function type() {
const current = phrases[pi];

if (!deleting) {
el.textContent = current.slice(0, ci++);
if (ci > current.length) {
deleting = true;
setTimeout(type, 1200);
return;
}
} else {
el.textContent = current.slice(0, ci--);
if (ci < 0) {
deleting = false;
pi = (pi + 1) % phrases.length;
ci = 0;
}
}

setTimeout(type, deleting ? 40 : 70);
}
type();

/* MODULES */
const modules = [
{ code:'PRL161', name:'Programming Preliminaries', year:'1st Year',
back:'Introduction to programming fundamentals and logic.' },

{ code:'PRG171/181', name:'Programming 1st Year', year:'1st Year',
back:'Variables, loops, functions, problem solving.' },

{ code:'WPR271/281', name:'Web Programming', year:'2nd Year',
back:'HTML, CSS, JS, APIs, and web applications.' },

{ code:'PRG261/262/2782', name:'Programming 2nd Year', year:'2nd Year',
back:'OOP, design patterns, advanced development.' },

{ code:'SWA261', name:'Software Analysis', year:'2nd Year',
back:'UML, requirements, system design.' },

{ code:'SWT261', name:'Software Testing', year:'2nd Year',
back:'Testing strategies and QA principles.' },

{ code:'INF2781', name:'Information Systems', year:'2nd Year',
back:'Databases, ERDs, business systems.' }
];

const mg = document.getElementById('modules-grid');

modules.forEach(m => {
mg.innerHTML += `
<div class="module-card reveal">
<div class="module-inner">
<div class="module-front">
<div>
<div class="module-code">${m.code}</div>
<div class="module-name">${m.name}</div>
</div>
<div class="module-year">${m.year}</div>
</div>

<div class="module-back">
<div class="module-back-desc">${m.back}</div>
</div>
</div>
</div>
`;
});

/* FACTS */
const facts = [
"Adaptability is key",
"We’ll make it work mindset",
"GitHub portfolio advocate",
"Interactive teaching style",
"Adrenaline seeker (bungee jumping)",
"Problem solver"
];

const fg = document.getElementById('facts-grid');

facts.forEach(f => {
const card = document.createElement('div');
card.className = 'fact-card reveal';
card.textContent = f;

card.onclick = () => card.classList.toggle('revealed');

fg.appendChild(card);
});

/* QUOTES */
const quotes = [
"We’ll make it work.",
"Learn by doing, not watching.",
"Build real projects, not just assignments."
];

const qc = document.getElementById('quote-carousel');

quotes.forEach((q, i) => {
const div = document.createElement('div');
div.className = 'quote-slide' + (i === 0 ? ' active' : '');
div.textContent = q;
qc.appendChild(div);
});

/* REVEAL */
const observer = new IntersectionObserver(entries => {
entries.forEach(e => {
if (e.isIntersecting) e.target.classList.add('visible');
});
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
</script>
