<script>
const MODS=[
  {code:'WEB201',name:'Web Development',year:'2nd Year',icon:'</>',desc:'HTML, CSS, JavaScript and modern frameworks. Building responsive web apps.'},
  {code:'DBS301',name:'Database Systems',year:'3rd Year',icon:'🗄️',desc:'SQL, ER diagrams, normalisation and query optimisation.'},
  {code:'DST201',name:'Data Structures',year:'2nd Year',icon:'{ }',desc:'Arrays, linked lists, trees, graphs and algorithm complexity.'},
  {code:'INL261',name:'Info Systems',year:'2nd Year',icon:'📊',desc:'Information systems theory, business processes and integration.'},
  {code:'PRG111',name:'Programming 1',year:'1st Year',icon:'⌨️',desc:'Intro to programming logic, variables, control flow and debugging.'},
  {code:'SWE301',name:'Software Engineering',year:'3rd Year',icon:'🔧',desc:'SDLC, Agile, Scrum, design patterns and Git.'},
  {code:'NET201',name:'Networking',year:'2nd Year',icon:'🌐',desc:'TCP/IP, OSI model, subnetting and routing protocols.'},
  {code:'MOB301',name:'Mobile Dev',year:'3rd Year',icon:'📱',desc:'Cross-platform mobile apps, APIs and app store publishing.'},
  {code:'AI401',name:'Intro to AI',year:'4th Year',icon:'🤖',desc:'ML concepts, neural networks, NLP and ethical AI.'},
];
const FACTS=[
  {emoji:'☕',title:'Powered by Coffee',body:"No cup goes to waste. It's practically a programming language."},
  {emoji:'🧩',title:'Loves Solving Puzzles',body:'Complex algorithm or midnight debugging — the harder, the better.'},
  {emoji:'✈️',title:'Travel Enthusiast',body:'New places, new perspectives. Debugging life, one city at a time.'},
  {emoji:'💡',title:'Idea Generator',body:'Always finding new ways to make learning more engaging and fun.'},
];
const QUOTES=[
  {text:'"The best teachers are those who show you where to look, but don\'t tell you what to see."',src:'— Alexandra K. Trenfor'},
  {text:'"Education is not the filling of a pail, but the lighting of a fire."',src:'— William Butler Yeats'},
  {text:'"We\'ll make it work." — The philosophy that solved more problems than any textbook.',src:'— Mr. Ikraam Sadek'},
  {text:'"Tell me and I forget. Teach me and I remember. Involve me and I learn."',src:'— Benjamin Franklin'},
];
 
/* PARTICLES */
(()=>{const cv=document.getElementById('particles-canvas');if(!cv)return;const cx=cv.getContext('2d');let ps=[],W,H;const rs=()=>{W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight;};rs();window.addEventListener('resize',rs);for(let i=0;i<55;i++)ps.push({x:Math.random()*(W||800),y:Math.random()*(H||600),r:Math.random()*1.3+.3,dx:(Math.random()-.5)*.32,dy:(Math.random()-.5)*.32,o:Math.random()*.4+.12});const dr=()=>{cx.clearRect(0,0,W,H);ps.forEach(p=>{cx.beginPath();cx.arc(p.x,p.y,p.r,0,Math.PI*2);cx.fillStyle=`rgba(108,99,255,${p.o})`;cx.fill();p.x+=p.dx;p.y+=p.dy;if(p.x<0||p.x>W)p.dx*=-1;if(p.y<0||p.y>H)p.dy*=-1;});for(let i=0;i<ps.length;i++)for(let j=i+1;j<ps.length;j++){const a=ps[i].x-ps[j].x,b=ps[i].y-ps[j].y,d=Math.sqrt(a*a+b*b);if(d<90){cx.beginPath();cx.strokeStyle=`rgba(108,99,255,${.06*(1-d/90)})`;cx.lineWidth=.5;cx.moveTo(ps[i].x,ps[i].y);cx.lineTo(ps[j].x,ps[j].y);cx.stroke();}}requestAnimationFrame(dr);};dr();})();
 
/* TYPING */
(()=>{const el=document.getElementById('typed-el');if(!el)return;const ph=['"We\'ll make it work." 💜','Educator · Developer · Problem Solver','Passionate About Teaching & Innovation','Inspiring the next generation of developers'];let pi=0,ci=0,dl=false;const t=()=>{const p=ph[pi];if(!dl){el.textContent=p.slice(0,++ci);if(ci===p.length){dl=true;setTimeout(t,2200);return;}}else{el.textContent=p.slice(0,--ci);if(ci===0){dl=false;pi=(pi+1)%ph.length;}}setTimeout(t,dl?38:68);};t();})();
 
/* MODULES */
(()=>{const g=document.getElementById('modules-grid');MODS.forEach(m=>{const c=document.createElement('div');c.className='s-mod';c.innerHTML=`<div class="s-mod-in"><div class="s-mod-f"><div class="s-mod-icon">${m.icon}</div><div><div class="s-mod-code">${m.code}</div><div class="s-mod-name">${m.name}</div></div><div class="s-mod-year">${m.year}</div></div><div class="s-mod-b"><div class="s-mod-bt">${m.name}</div><div class="s-mod-bd">${m.desc}</div><div class="s-mod-hint">// ${m.code}</div></div></div><div class="s-hover-lbl">Hover to flip</div>`;g.appendChild(c);});})();
 
/* FACTS */
(()=>{const g=document.getElementById('facts-grid');FACTS.forEach(f=>{const c=document.createElement('div');c.className='s-fact';c.innerHTML=`<span class="s-fact-emoji">${f.emoji}</span><div class="s-fact-title">${f.title}</div><div class="s-fact-body">${f.body}</div><div class="s-fact-heart">♥</div>`;c.addEventListener('click',()=>c.classList.toggle('revealed'));g.appendChild(c);});})();
 
/* QUOTES */
(()=>{const cr=document.getElementById('quote-carousel'),dt=document.getElementById('q-dots');let cur=0;QUOTES.forEach((q,i)=>{const s=document.createElement('div');s.className='s-q-slide'+(i===0?' active':'');s.innerHTML=`<div class="s-q-text">${q.text}</div><div class="s-q-src">${q.src}</div>`;cr.appendChild(s);const d=document.createElement('button');d.className='s-q-dot'+(i===0?' active':'');d.addEventListener('click',()=>go(i));dt.appendChild(d);});function go(n){cr.querySelectorAll('.s-q-slide')[cur].classList.remove('active');dt.querySelectorAll('.s-q-dot')[cur].classList.remove('active');cur=n;cr.querySelectorAll('.s-q-slide')[cur].classList.add('active');dt.querySelectorAll('.s-q-dot')[cur].classList.add('active');}setInterval(()=>go((cur+1)%QUOTES.length),5000);})();
 
/* REVEAL */
(()=>{const o=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');o.unobserve(e.target);}});},{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>o.observe(el));})();
 
/* FORM */
function sendForm(){const n=document.getElementById('f-name').value.trim(),e=document.getElementById('f-email').value.trim(),m=document.getElementById('f-message').value.trim(),s=document.getElementById('f-success'),b=document.getElementById('btn-send');if(!n||!e||!m){b.style.background='var(--maroon)';b.textContent='⚠️ Fill required fields';setTimeout(()=>{b.style.background='';b.innerHTML='📨 Send Message';},2000);return;}b.innerHTML='⏳ Sending...';b.disabled=true;setTimeout(()=>{s.classList.add('show');b.innerHTML='✅ Sent!';b.style.background='#2a9d5c';['f-name','f-email','f-subject','f-message'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});setTimeout(()=>{s.classList.remove('show');b.innerHTML='📨 Send Message';b.style.background='';b.disabled=false;},4000);},1200);}

</script>
