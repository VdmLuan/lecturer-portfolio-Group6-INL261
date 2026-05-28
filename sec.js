/* ─── PARTICLE CANVAS (Code 2) ─── */
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

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
    p.x += p.dx; p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.alpha;
    ctx.fill();
  });
  ctx.globalAlpha = 1;
  for (let i = 0; i < particles.length; i++) {
    for (let j = i+1; j < particles.length; j++) {
      const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = '#6c63ff';
        ctx.globalAlpha = (1 - dist/100) * 0.12;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
  ctx.globalAlpha = 1;
  requestAnimationFrame(animateParticles);
}
animateParticles();

/* ─── TYPING EFFECT (Code 2) ─── */
const phrases = [
  '"We\'ll make it work."',
  'Discussions over lectures.',
  'Build your GitHub portfolio.',
  'Learn by doing. Always.'
];
let pi = 0, ci = 0, deleting = false;
const el = document.getElementById('typed-tagline');

function type() {
  const current = phrases[pi];
  if (!deleting) {
    el.textContent = current.slice(0, ci++);
    if (ci > current.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    el.textContent = current.slice(0, ci--);
    if (ci < 0) { deleting = false; pi = (pi+1) % phrases.length; ci = 0; setTimeout(type, 400); return; }
  }
  setTimeout(type, deleting ? 40 : 70);
}
type();

/* ─── SKILLS DATA (from Code 1) ─── */
const SKILLS_DATA = [
  { label: "JavaScript / TypeScript", pct: 92 },
  { label: "Python & Data Science",   pct: 85 },
  { label: "Web Technologies",        pct: 95 },
  { label: "Databases & SQL",         pct: 80 },
  { label: "Machine Learning",        pct: 72 },
  { label: "Agile & DevOps",          pct: 78 },
];

const skillsGrid = document.querySelector('.skills-grid');
SKILLS_DATA.forEach(s => {
  skillsGrid.innerHTML += `
    <div class="skill-item">
      <label><span>${s.label}</span><span>${s.pct}%</span></label>
      <div class="skill-bar"><div class="skill-fill" data-pct="${s.pct}"></div></div>
    </div>`;
});

/* ─── MODULES DATA (Code 2) ─── */
const modules = [
  { code:'PRL161', name:'Programming Preliminaries', year:'1st Year', back:'Foundation course introducing programming concepts and logical thinking to new students.' },
  { code:'PRG181', name:'Programming 1 (Sem 1)', year:'1st Year', back:'Core programming fundamentals — variables, loops, functions, and problem-solving strategies.' },
  { code:'PRG171', name:'Programming 1 (Sem 2)', year:'1st Year', back:'Continuation of first-year programming with more complex data structures and algorithms.' },
  { code:'WPR281', name:'Web Programming (Sem 1)', year:'2nd Year', back:'Front-end and back-end web development: HTML, CSS, JavaScript, and server-side scripting.' },
  { code:'WPR271', name:'Web Programming (Sem 2)', year:'2nd Year', back:'Advanced web development concepts including frameworks, APIs, and dynamic web applications.' },
  { code:'PRG261', name:'Programming 2 (Stream 1)', year:'2nd Year', back:'Object-oriented programming, design patterns, and intermediate software development practices.' },
  { code:'PRG262', name:'Programming 2 (Stream 2)', year:'2nd Year', back:'Advanced OOP principles, data handling, and real-world application development projects.' },
  { code:'PRG2782', name:'Programming 2 (Advanced)', year:'2nd Year', back:'Higher-level programming challenges and capstone-style projects for advanced students.' },
  { code:'SWA261', name:'Software Analysis', year:'2nd Year', back:'Requirements gathering, system modelling, UML diagrams, and the software development lifecycle.' },
  { code:'SWT261', name:'Software Testing 1', year:'2nd Year', back:'Testing strategies, unit tests, test plans, and quality assurance for software applications.' },
  { code:'INF2781', name:'Information Systems 2', year:'2nd Year', back:'Business information systems, databases, ERDs, and the role of IT in organizational contexts.' },
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
        <div class="module-year">${m.year} · Hover to flip</div>
      </div>
      <div class="module-back">
        <div>
          <div class="module-back-title">${m.code}</div>
          <div class="module-back-desc">${m.back}</div>
        </div>
        <div class="flip-hint">↩ Hover to flip back</div>
      </div>
    </div>
  </div>`;
});

/* ─── CAREER TIMELINE DATA (from Code 1) ─── */
const TIMELINE_DATA = [
  { year:"2024–Present", title:"Junior Lecturer", sub:"Belgium Campus iTversity · Academia", category:"academia", detail:"Teaching programming, web development, software analysis and information systems modules. Bringing practical, hands-on coding experience into every class." },
  { year:"2022–2024",    title:"Application Developer", sub:"Industry Experience · Industry",   category:"industry", detail:"Developed web applications and software solutions, building the real-world experience that now informs classroom teaching." },
  { year:"2020–2022",    title:"Adv. Dip. App. Development", sub:"Rosebank College · Education", category:"education", detail:"Graduated with an Advanced Diploma in Application Development — the foundation of his practical teaching philosophy." },
];

const tlEl = document.getElementById('timeline');

function renderTimeline(filter) {
  tlEl.innerHTML = '';
  TIMELINE_DATA.filter(d => filter === 'all' || d.category === filter).forEach(d => {
    const div = document.createElement('div');
    div.className = 'tl-item reveal';
    div.dataset.category = d.category;
    div.innerHTML = `
      <div class="tl-dot"></div>
      <div class="tl-card">
        <div class="tl-year">${d.year}</div>
        <div class="tl-title">${d.title}</div>
        <div class="tl-sub">${d.sub}</div>
        <div class="tl-detail">${d.detail}</div>
      </div>`;
    div.addEventListener('click', () => div.classList.toggle('open'));
    tlEl.appendChild(div);
  });
  observeReveal();
}

renderTimeline('all');

document.getElementById('filterTabs').addEventListener('click', e => {
  if (!e.target.matches('.filter-btn')) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  renderTimeline(e.target.dataset.filter);
});

/* ─── FUN FACTS DATA (Code 2) ─── */
const facts = [
  { emoji:'🪂', title:'Adrenaline Seeker', body:'Mr. Sadek really wants to go bungee jumping someday. He loves activities that get the adrenaline pumping — even if he barely gets to do them (yet).' },
  { emoji:'🦸', title:'Superpower: Helpfulness', body:'His students know it: he always finds a solution. "We\'ll make it work" isn\'t just a phrase — it\'s a mindset.' },
  { emoji:'💬', title:'Discussion > Lecture', body:'He believes the best learning happens in two-way conversations. Expect real debates about code, logic, and design decisions in class.' },
  { emoji:'🐙', title:'GitHub Evangelist', body:'After every project submission, he tells students to apply their feedback and push their work to GitHub — building a live portfolio of practical skills.' },
  { emoji:'🎯', title:'Adapt & Overcome', body:'His greatest ability is adapting to any given situation. New topic? New challenge? Unexpected error? "We\'ll make it work."' },
  { emoji:'🎓', title:'Always Learning', body:'Holds an Advanced Diploma in Application Development from Rosebank College — and still approaches every class with a learner\'s mindset.' },
];

const fg = document.getElementById('facts-grid');
facts.forEach(f => {
  const card = document.createElement('div');
  card.className = 'fact-card reveal';
  card.innerHTML = `<div class="fact-emoji">${f.emoji}</div><div class="fact-title">${f.title}</div><div class="fact-body">${f.body}</div>`;
  card.addEventListener('click', () => card.classList.toggle('revealed'));
  fg.appendChild(card);
});

/* ─── QUOTES DATA (Code 2) ─── */
const quotes = [
  { text: 'After you get your marks and feedback for a practical project, apply the feedback. Then push it to GitHub. Build a portfolio that shows companies you can actually do things — not just theoretically.', source: '— Ikraam Sadek, on career development' },
  { text: 'The best way to learn is through discussion. Not a one-sided lecture — a real conversation about the problem in front of you.', source: '— Ikraam Sadek, on teaching philosophy' },
  { text: '"We\'ll make it work." That\'s not just something I say. It\'s how I approach every problem, every class, every challenge.', source: '— Ikraam Sadek, on his superpower' },
  { text: 'Engage. Ask questions. Push back. The classroom is supposed to be interactive — that\'s where the real learning happens.', source: '— Ikraam Sadek, to his students' },
];

const qc = document.getElementById('quote-carousel');
const qd = document.getElementById('quote-dots');
let activeQ = 0;

quotes.forEach((q, i) => {
  const slide = document.createElement('div');
  slide.className = 'quote-slide' + (i === 0 ? ' active' : '');
  slide.innerHTML = `<div class="quote-text">${q.text}</div><div class="quote-source">${q.source}</div>`;
  qc.appendChild(slide);

  const dot = document.createElement('button');
  dot.className = 'quote-dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goToQuote(i));
  qd.appendChild(dot);
});

function goToQuote(n) {
  document.querySelectorAll('.quote-slide')[activeQ].classList.remove('active');
  document.querySelectorAll('.quote-dot')[activeQ].classList.remove('active');
  activeQ = n;
  document.querySelectorAll('.quote-slide')[activeQ].classList.add('active');
  document.querySelectorAll('.quote-dot')[activeQ].classList.add('active');
}

setInterval(() => goToQuote((activeQ + 1) % quotes.length), 4500);

/* ─── SCROLL REVEAL (merged: Code 2 observer + Code 1 skill-fill trigger) ─── */
function observeReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        // Trigger skill bar animations when visible (from Code 1)
        e.target.querySelectorAll('.skill-fill').forEach(f => {
          f.style.width = f.dataset.pct + '%';
        });
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  // Trigger already-visible skill bars
  document.querySelectorAll('.reveal.visible .skill-fill').forEach(f => {
    f.style.width = f.dataset.pct + '%';
  });
}

observeReveal();

/* ─── SMOOTH SCROLL & ACTIVE NAV HIGHLIGHT (from Code 1) ─── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('navLinks').classList.remove('open');
  });
});

const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
  });
});

/* ─── HAMBURGER MENU (from Code 1) ─── */
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

/* ─── CHAT WIDGET (from Code 1) ─── */
const LECTURER = {
  name: "Mr. Ikraam Sadek",
  title: "Junior Lecturer",
  institution: "Belgium Campus iTversity",
  bio: "I'm a Junior Lecturer at Belgium Campus iTversity, teaching modules spanning programming, web development, software analysis, and information systems. I hold an Advanced Diploma in Application Development from Rosebank College.",
  qualifications: "Advanced Diploma in Application Development, Rosebank College",
  research: "I focus on practical, discussion-driven teaching. I believe students learn best through real conversations about code — not one-sided lectures.",
  techStack: "JavaScript, HTML, CSS, web development frameworks, databases",
  advice: "After you get your practical marks and feedback, apply the feedback and push your project to GitHub. Build a portfolio that shows companies you can do things practically — not just theoretically. We'll make it work.",
  email: "Via the Belgium Campus student portal or in-person after class"
};

const chatWin   = document.getElementById('chat-window');
const chatMsgs  = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chips     = document.getElementById('quickChips');

document.getElementById('chat-toggle').addEventListener('click', () => chatWin.classList.toggle('open'));
document.getElementById('chatClose').addEventListener('click',  () => chatWin.classList.remove('open'));

function addMsg(text, role) {
  const d = document.createElement('div');
  d.className = 'msg ' + role;
  d.textContent = text;
  chatMsgs.appendChild(d);
  chatMsgs.scrollTop = chatMsgs.scrollHeight;
  return d;
}

function addTyping() {
  const d = document.createElement('div');
  d.className = 'msg bot typing-dots';
  d.innerHTML = '<span></span><span></span><span></span>';
  chatMsgs.appendChild(d);
  chatMsgs.scrollTop = chatMsgs.scrollHeight;
  return d;
}

async function sendChat(userMsg) {
  if (!userMsg.trim()) return;
  chips.style.display = 'none';
  addMsg(userMsg, 'user');
  chatInput.value = '';
  const typing = addTyping();

  const systemPrompt = `You are ${LECTURER.name}, ${LECTURER.title} at ${LECTURER.institution}.
Bio: ${LECTURER.bio}
Qualifications: ${LECTURER.qualifications}
Teaching Philosophy: ${LECTURER.research}
Tech Stack: ${LECTURER.techStack}
Career Advice: ${LECTURER.advice}
Contact: ${LECTURER.email}
Speak in first person, warmly and professionally. Keep answers concise (2-4 sentences).
If asked something you genuinely don't know about yourself, say so kindly.`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: systemPrompt,
        messages: [{ role: 'user', content: userMsg }]
      })
    });
    const data = await res.json();
    typing.remove();
    const reply = data?.content?.[0]?.text || "I'm not sure how to answer that right now!";
    addMsg(reply, 'bot');
  } catch {
    typing.remove();
    addMsg("Sorry, I'm having trouble connecting right now. Please try again!", 'bot');
  }
}

document.getElementById('chat-send').addEventListener('click', () => sendChat(chatInput.value));
chatInput.addEventListener('keydown', e => { if (e.key === 'Enter') sendChat(chatInput.value); });

chips.addEventListener('click', e => {
  if (e.target.matches('.chip')) sendChat(e.target.textContent.replace(/^.{2}/, '').trim());
});

// Welcome message
setTimeout(() => {
  addMsg(`Hi there! 👋 I'm ${LECTURER.name}. Ask me anything about my career, modules, or advice for students!`, 'bot');
}, 600);
