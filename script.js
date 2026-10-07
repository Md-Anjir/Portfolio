/* ==========================================================================
   Md. Angir Hossain | OS to IDE portfolio
   Vanilla JavaScript. No frameworks, no libraries.
   ========================================================================== */

console.log("Hey fellow developer! Looking at my code? Let's connect on LinkedIn!");

(() => {
  'use strict';

  const CONFIG = {
    photo: 'assets/Anjir Picture.jpg',          
    workspace: 'md-anjir-portfolio'
  };

  const CV = {
    name: 'Md. Angir Hossain',
    title: 'B.Sc. Engineering (CSE) | System Engineer',
    address: 'Shiromoni-9204, Khulna, Bangladesh',
    phone: '+8801871352780',
    email: 'mdanjir3734@gmail.com',
    github: { handle: 'Md-Anjir', url: 'https://github.com/Md-Anjir' },
    linkedin: { label: 'Anjir Hossain', url: 'https://www.linkedin.com/in/anjir-hossain-9332b6361/' },
    summary:
      'A Computer Science and Engineering graduate with strong foundations in data structure and algorithm, ' +
      'Networking and software engineering. Experienced in full-stack web development using Django, Express, ' +
      'React, Oracle Apex and MySQL, with proven analytical and problem-solving skills demonstrated through ' +
      'competitive programming. Interested in research-oriented development and the application of theoretical ' +
      'concepts to practical systems.',

    // What I offer. Every line is drawn from the projects below; edit freely.
    services: [
      { title: 'Full-stack web applications', icon: 'fa-solid fa-layer-group', tone: '#3794ff',
        summary: 'Complete web apps, from the database and server to the pages people click on.',
        stack: ['Django', 'Express', 'React', 'MySQL'], example: 'Kacha Bazar' },
      { title: 'Business dashboards and reports', icon: 'fa-solid fa-chart-line', tone: '#e06c75',
        summary: 'Internal systems for companies, with live sales dashboards, target tracking, user roles, and PDF or Excel reports.',
        stack: ['Oracle APEX', 'PL/SQL', 'Oracle DB'], example: 'Enterprise Sales Portal' },
      { title: 'Database design and automation', icon: 'fa-solid fa-database', tone: '#d19a66',
        summary: 'Well-structured databases, plus triggers and alerts that keep data accurate and safe.',
        stack: ['MySQL', 'Oracle', 'PL/SQL'], example: 'Online Voting System' },
      { title: 'Company and portfolio websites', icon: 'fa-solid fa-globe', tone: '#e5c07b',
        summary: 'Clean, responsive websites that show your work and services, with a contact form.',
        stack: ['HTML', 'CSS', 'JavaScript'], example: 'Avant Technologies Portfolio Website' },
      { title: 'Online platforms and marketplaces', icon: 'fa-solid fa-store', tone: '#4ec9b0',
        summary: 'Websites that bring two sides together, like families and tutors, or blood donors and the people who need them.',
        stack: ['React', 'Tailwind CSS', 'PHP', 'MySQL'], example: 'TuitionMediaBD' },
      { title: 'Desktop applications', icon: 'fa-solid fa-desktop', tone: '#c586c0',
        summary: 'Windows desktop apps built in Java, like interactive learning tools.',
        stack: ['Java'], example: 'Kids Learner' }
    ],

    skills: [
      ['Programming', ['Python', 'Java', 'C', 'C++']],
      ['Web Dev', ['PHP', 'JavaScript', 'React', 'Node.js', 'Django', 'Oracle-Apex', 'EBS']],
      ['Database', ['MySQL', 'Oracle']],
      ['Tools/Tech', ['Git', 'GitHub']],
      ['Fundamentals', ['Data Structures & Algorithms', 'OOP', 'OS', 'Networking']]
    ],

    experience: [
      { role: 'System Engineer', company: 'Avant Technologies', location: 'Dhaka',
        start: '2026-03-01', end: null, period: 'Mar 01, 2026 - Present',
        commit: 'joined Avant Technologies as System Engineer' },
      { role: 'Industrial Trainee', company: 'Appstick', location: 'Khulna',
        start: '2025-01-16', end: '2025-02-07', period: 'Jan 16, 2025 - Feb 07, 2025',
        commit: 'completed industrial training at Appstick',
        note: 'Industrial training is a short internship at a company, done during university.' }
    ],

    projects: [
      { name: 'Avant Technologies Portfolio Website', slug: 'avant-portfolio', plain: 'A website for Avant Technologies that shows the company\'s projects and services, with a contact form.', stack: ['HTML', 'CSS', 'JavaScript'], tone: '#e5c07b',
        description: 'Developed a responsive portfolio website for Avant Technologies, showcasing all of the company\'s projects and services alongside a contact form.',
        kind: 'live', url: 'https://www.avanttechbd.com/' },
      { name: 'Enterprise Sales Portal', slug: 'enterprise-sales-portal', plain: 'A business reporting system that shows sales numbers and targets on live dashboards.', stack: ['Oracle APEX', 'PL/SQL', 'Oracle DB'], tone: '#e06c75',
        description: 'Developed an enterprise-grade MIS reporting system featuring real-time KPI dashboards, dynamic target achievement analysis, automated stock management triggers, PL/SQL-based Role-Based Access Control (RBAC), and PDF/Excel export capabilities.',
        kind: 'repo', url: 'https://github.com/Md-Anjir' },
      { name: 'Online Voting System', slug: 'online-voting-system', plain: 'A secure online voting website that raises an alert if someone tampers with the database.', stack: ['Django', 'MySQL'], tone: '#44b78b',
        description: 'Developed a secure online voting platform featuring automated alerts for database-level tampering to ensure election integrity. It can be used in any low to medium scale election with very high security.',
        kind: 'live', url: 'https://anjirhossain.pythonanywhere.com/' },
      { name: 'TuitionMediaBD', slug: 'tuitionmediabd', plain: 'A website that helps parents find verified tutors, filtered by location.', stack: ['React', 'Tailwind CSS', 'Vite'], tone: '#61dafb',
        description: 'Developed an interactive platform connecting guardians with verified tutors, featuring an advanced filtering system by location and a dynamic tutor profile modal for streamlined hiring.',
        kind: 'repo', url: 'https://github.com/Md-Anjir/tuition-app' },
      { name: 'Kacha Bazar', slug: 'kacha-bazar', plain: 'An online market where farmers sell their produce directly to shops.', stack: ['React', 'Express', 'MySQL'], tone: '#56b6c2',
        description: 'Built an e-commerce marketplace connecting farmers directly with shops to sell agricultural products efficiently.',
        kind: 'repo', url: 'https://github.com/Md-Anjir/Kaca_Bazar.git' },
      { name: 'Red Drop', slug: 'red-drop', plain: 'A blood donation website that makes it easier to find donors.', stack: ['HTML', 'JavaScript', 'MySQL', 'PHP'], tone: '#8892bf',
        description: 'Designed and implemented an online Blood Donation management system to streamline donor searches.',
        kind: 'repo', url: 'https://github.com/Md-Anjir/Red_Drop.git' },
      { name: 'Kids Learner', slug: 'kids-learner', plain: 'A Windows app that teaches children the alphabet and basic math.', stack: ['Java'], tone: '#d19a66',
        description: 'Created a Windows-based educational desktop application providing interactive alphabet and math training.',
        kind: 'repo', url: 'https://github.com/Md-Anjir/Kids_Learner.git' },
      { name: 'Portfolio', slug: 'portfolio', plain: 'My earlier one-page personal website.', stack: ['HTML', 'JavaScript'], tone: '#e5c07b',
        description: 'Created a single-page portfolio to present my own information.',
        kind: 'live', url: 'https://md-anjir.github.io/Portfolio/' }
    ],

    achievements: [
      { title: 'Competitive Programming', solved: '250+', unit: 'problems', platforms: ['Codeforces', 'Beecrowd', 'LeetCode'] },
      { title: 'EDGE Project (BCC)', credential: 'Python with Data Science Basics', status: 'certified' }
    ]
  };

  const $ = (s, r = document) => r.querySelector(s);   const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const isMac = /Mac|iPhone|iPad/.test(navigator.userAgent);
  const MOD = isMac ? '\u2318' : 'Ctrl';

  class H { constructor(s) { this.s = s; } }
  const raw = parts => parts.map(p => (p instanceof H ? p.s : esc(p))).join('');
  const tok = cls => (text, more = '') => new H(`<span class="${cls}${more}">${esc(text)}</span>`);
  const kw = tok('tk-kw'), ctl = tok('tk-ctl'), str = tok('tk-str'), num = tok('tk-num'),
        prop = tok('tk-prop'), vr = tok('tk-var'), fn = tok('tk-fn'), typ = tok('tk-type'), com = tok('tk-com');
  const mh = tok('md-h'), mm = tok('md-m'), mb = tok('md-b'), mq = tok('md-q');
  const q = (s, more = '') => str(`"${s}"`, more);

  const L = (...p) => {
    let o = {};
    if (p.length && p[0] && p[0].constructor === Object) o = p.shift();
    const cls = o.cls ? ' ' + o.cls : '';
    const cat = o.cat ? ` data-cat="${esc(o.cat)}"` : '';
    return new H(`<span class="l${cls}"${cat}>${raw(p)}</span>`);
  };
  const code = (lines, start = 1, cls = '') =>
    `<div class="code ${cls}" style="counter-reset:ln ${start - 1}">${lines.map(l => l.s).join('')}</div>`;
  const join = (items, sep) => items.flatMap((it, i) => (i ? [sep, it] : [it]));

  const ext = (url, label, cls = 'tk-str tk-link') =>
    new H(`<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label ?? url)}</a>`);
  const strLink = url => new H(`<span class="tk-str">"</span>${ext(url).s}<span class="tk-str">"</span>`);
  const mdLink = (text, url, open) => {
    const a = open
      ? `<a class="md-lt" href="#${esc(open)}" data-open="${esc(open)}">${esc(text)}</a>`
      : `<a class="md-lt" href="${esc(url)}"${/^https?:/.test(url) ? ' target="_blank" rel="noopener noreferrer"' : ''}>${esc(text)}</a>`;
    return new H(`<span class="md-m">[</span>${a}<span class="md-m">](</span><span class="md-u">${esc(url)}</span><span class="md-m">)</span>`);
  };

  const parseYMD = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  const plural = (n, w) => `${n} ${w}${n === 1 ? '' : 's'}`;
  function since(from, to = new Date()) {
    let months = (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth());
    if (to.getDate() < from.getDate()) months--;
    const anchor = new Date(from.getFullYear(), from.getMonth() + months, from.getDate());
    const days = Math.max(0, Math.floor((to - anchor) / 86400000));
    return [months > 0 ? plural(months, 'month') : '', plural(days, 'day')].filter(Boolean).join(', ');
  }
  const daysBetween = (a, b) => Math.round((parseYMD(b) - parseYMD(a)) / 86400000);

  const photoFrame = () =>
    `<div class="photo-frame" data-photo>
       <img class="photo-img" src="${esc(CONFIG.photo)}" alt="Portrait of ${esc(CV.name)}" decoding="async">
       <div class="photo-ph">
         <svg viewBox="0 0 120 150" aria-hidden="true"><circle cx="60" cy="50" r="27"/><path d="M8 150c0-36 23-58 52-58s52 22 52 58z"/></svg>
         <p>Your photo goes here</p><code>${esc(CONFIG.photo)}</code>
       </div>
     </div>`;

  function initPhotos(root) {
    $$('[data-photo]', root).forEach(frame => {
      const img = $('.photo-img', frame);
      const ok = () => frame.classList.add('loaded');
      if (img.complete && img.naturalWidth > 0) ok();
      else { img.addEventListener('load', ok, { once: true }); img.addEventListener('error', () => frame.classList.remove('loaded'), { once: true }); }
    });
  }

  function renderAbout() {
    const field = (label, ...rest) => L(mm('- **'), mb(label), mm('**'), ' ', ...rest);

    const A = [
      L(com('<!-- about.md -->')),
      L(),
      L({ cls: 'h1' }, mm('# '), mh(CV.name)),
      L(),
      L(mm('> '), mq(CV.title)),
      L(),
      L(mm('## '), mh('Profile')),
      L(),
      L(CV.summary)
    ];
    const B = [
      L(mm('## '), mh('Contact')),
      L(),
      field('Location:', CV.address),
      field('Phone:', mdLink(CV.phone, 'tel:' + CV.phone)),
      field('Email:', mdLink(CV.email, 'mailto:' + CV.email)),
      field('GitHub:', mdLink(CV.github.handle, CV.github.url)),
      field('LinkedIn:', mdLink(CV.linkedin.label, CV.linkedin.url))
    ];
    const ex = (file, note) => L(mm('- '), mdLink(file, './' + file, file), mm(': '), note);
    const C = [
      L(mm('## '), mh('Explore this workspace')),
      L(),
      ex('services.json', 'what I can build for you'),
      ex('projects.js', 'things I have built'),
      ex('skills.sql', 'what I build them with'),
      ex('experience.log', 'where I have worked'),
      ex('achievements.yml', 'contests and certificates')
    ];

    return `
      <div class="v-about">
        <div class="about-a">${code(A, 1)}</div>
        <figure class="peek">
          <div class="peek-head"><i class="fa-regular fa-image"></i> photo.jpg <span>Peek</span></div>
          ${photoFrame()}
          <figcaption class="peek-md"><span class="md-m">![</span><span class="md-lt">${esc(CV.name)}</span><span class="md-m">](</span><span class="md-u">./${esc(CONFIG.photo)}</span><span class="md-m">)</span></figcaption>
        </figure>
        <div class="about-b">${code(B, A.length + 1)}</div>
        <div class="about-c">${code(C, A.length + B.length + 1)}</div>
      </div>`;
  }

  function renderServices() {
    const kv = (k, v, last) => L('      ', prop(`"${k}"`), ': ', q(v), last ? '' : ',');
    const card = (s, isLast) => [
      L('    {'),
      kv('title', s.title),
      kv('summary', s.summary),
      L('      ', prop('"stack"'), ': [', ...join(s.stack.map(t => q(t)), ', '), '],'),
      kv('example', s.example, true),
      L(isLast ? '    }' : '    },')
    ];

    let n = 3;
    const cards = CV.services.map((s, i) => {
      const lines = card(s, i === CV.services.length - 1);
      const start = n; n += lines.length;
      return `<article class="card" style="--tone:${s.tone}">${code(lines, start)}</article>`;
    }).join('');

    return `
      <div class="v-svc">
        <div class="svc-head">${code([L('{'), L('  ', prop('"services"'), ': [')], 1)}</div>
        <div class="svc-grid">${cards}</div>
        <div class="svc-foot">${code([L('  ]'), L('}')], n)}</div>
      </div>`;
  }

  function renderExperience() {
    const lines = [];
    const push = (...a) => lines.push(L(...a));
    const field = (k, v) => push(ctl('|'), '   ', prop(k.padEnd(10)), str(v));

    push(vr('$ '), fn('git'), ' log --graph --date=short --format=', q('%ad  %s'));
    push();
    CV.experience.forEach(x => {
      push(ctl('*'), ' ', num(x.end || x.start), '  ', x.commit, x.end ? '' : '  ', x.end ? '' : typ('(HEAD -> main)'));
      push(ctl('|'));
      field('role', x.role);
      field('company', x.company);
      field('location', x.location);
      field('period', x.period);
      if (x.end) field('duration', plural(daysBetween(x.start, x.end), 'day'));
      else field('status', 'active for ' + since(parseYMD(x.start)));
      push(ctl('|'));
    });
    push();
    push(vr('$ '), new H('<span class="caret"></span>'));
    return `<div class="v-exp">${code(lines, 1, 'code-log')}</div>`;
  }

  function renderProjects() {
    const card = (p, i) => [
      L('{'),
      L('  ', prop('id'), ': ', num(String(i + 1)), ','),
      L('  ', prop('name'), ': ', q(p.name, ' strong'), ','),
      L('  ', prop('stack'), ': [', ...join(p.stack.map(s => q(s)), ', '), '],'),
      L('  ', prop('description'), ': ', q(p.description), ','),
      L('  ', prop(p.kind), ': ', strLink(p.url), ','),
      L('},')
    ];

    const head = [
      L(com('// projects.js')),
      L(com('// Every link opens the live site or the source repository.')),
      L(),
      L(kw('const'), ' ', vr('projects'), ' = [')
    ];
    let n = head.length + 1;
    const cards = CV.projects.map((p, i) => {
      const lines = card(p, i);
      const start = n; n += lines.length;
      return `<article class="card p${i + 1}" style="--tone:${p.tone}">${code(lines, start)}</article>`;
    }).join('');
    const foot = [L('];'), L(), L(ctl('export'), ' ', ctl('default'), ' ', vr('projects'), ';')];

    return `
      <div class="v-projects">
        ${code(head, 1)}
        <div class="projects">${cards}</div>
        ${code(foot, n)}
      </div>`;
  }

  function renderSkills() {
    const flat = CV.skills.flatMap(([cat, items]) => items.map(s => [cat, s]));
    const S = [
      L(com('-- skills.sql')),
      L(com('-- Hover a row in the result grid to find its INSERT lines.')),
      L(),
      L(kw('CREATE TABLE'), ' ', typ('skills'), ' ('),
      L('  ', vr('category'), '  ', typ('VARCHAR'), '(', num('24'), ') ', kw('NOT NULL'), ','),
      L('  ', vr('skill'), '     ', typ('VARCHAR'), '(', num('40'), ') ', kw('NOT NULL')),
      L(');'),
      L(),
      L(kw('INSERT INTO'), ' ', typ('skills'), ' (', vr('category'), ', ', vr('skill'), ') ', kw('VALUES')),
      ...flat.map(([cat, s], i) =>
        L({ cat }, '  (', str(`'${cat}'`), ', ', str(`'${s}'`), ')', i === flat.length - 1 ? ';' : ',')),
      L(),
      L(kw('SELECT'), ' ', vr('category'), ', ', fn('GROUP_CONCAT'), '(', vr('skill'), ' ', kw('SEPARATOR'), ' ', str("', '"), ') ', kw('AS'), ' ', vr('skills')),
      L(kw('FROM'), '   ', typ('skills')),
      L(kw('GROUP BY'), ' ', vr('category'), ';')
    ];

    const rows = CV.skills.map(([cat, items]) =>
      `<tr data-cat="${esc(cat)}" tabindex="0"><td>${esc(cat)}</td><td>${esc(items.join(', '))}</td></tr>`).join('');

    return `
      <div class="v-skills">
        <div class="sql-src">${code(S, 1)}</div>
        <aside class="res" aria-label="Query result">
          <div class="res-head"><b>Result Grid</b><span>${CV.skills.length} rows in set</span></div>
          <table>
            <thead><tr><th>category</th><th>skills</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </aside>
      </div>`;
  }

  function renderAchievements() {
    const [cp, edge] = CV.achievements;
    const key = (k, ...v) => L('    ', prop(k + ':'), ' ', ...v);

    const head = [L(prop('achievements:'))];
    const A = [
      L('  ', kw('-'), ' ', prop('title:'), ' ', str(cp.title)),
      key('solved', num(cp.solved)),
      key('unit', str(cp.unit)),
      key('platforms', '[', ...join(cp.platforms.map(p => str(p)), ', '), ']')
    ];
    const B = [
      L('  ', kw('-'), ' ', prop('title:'), ' ', str(edge.title)),
      key('credential', str(edge.credential)),
      key('status', str(edge.status))
    ];

    return `
      <div class="v-ach">
        <div class="ach-head">${code(head, 1)}</div>
        <div class="ach-a"><div class="lens">${esc(cp.solved)} problems solved on ${cp.platforms.map(esc).join(', ')}</div>${code(A, 2)}</div>
        <div class="ach-b"><div class="lens">Certified in ${esc(edge.credential)}</div>${code(B, 2 + A.length)}</div>
      </div>`;
  }

  function renderWelcome() {
    return `
      <div class="v-welcome">
        <svg class="welcome-logo" aria-hidden="true"><use href="#i-vscode"/></svg>
        <h1>${esc(CV.name)}</h1>
        <p>No file is open. Pick one to keep reading.</p>
        <ul>
          <li><button type="button" data-open="about.md">Open about.md</button></li>
          <li><button type="button" data-open="projects.js">Open projects.js</button></li>
          <li><button type="button" data-act="quick">Go to file <kbd>${MOD}+P</kbd></button></li>
        </ul>
      </div>`;
  }


  /* ---- Preview renderers: the same content, written for people who don't read code ---- */
  const isHttp = u => /^https?:/.test(u);
  const linkA = (href, inner, cls = '') =>
    `<a${cls ? ` class="${cls}"` : ''} href="${esc(href)}"${isHttp(href) ? ' target="_blank" rel="noopener noreferrer"' : ''}>${inner}</a>`;
  const hostOf = url => {
    try { const u = new URL(url); return u.host + (u.pathname === '/' ? '' : u.pathname.replace(/\.git$/, '').replace(/\/$/, '')); }
    catch (_) { return url; }
  };
  const initials = name => {
    const words = name.replace(/[^A-Za-z0-9 ]/g, '').split(/\s+/).filter(Boolean);
    if (words.length > 1) return (words[0][0] + words[1][0]).toUpperCase();
    const caps = name.match(/[A-Z]/g) || [];
    return (caps.length > 1 ? caps[0] + caps[1] : name.slice(0, 2)).toUpperCase();
  };

  const pvHead = id => {
    const f = fileById(id);
    return `<header class="pv-head rv">
      <div>
        <span class="pv-chip"><span class="ficon" style="--tone:${f.tone}">${f.icon}</span>${f.id}</span>
        <h1>${esc(f.label)}</h1>
        <p>${esc(f.sub)}</p>
      </div>
      <button type="button" class="pv-code" data-mode="code"><i class="fa-solid fa-code"></i> View source</button>
    </header>`;
  };

  const andList = a => (a.length < 2 ? a.join('') : a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1]);

  function pvAbout() {
    const now = CV.experience.find(x => !x.end);
    const parts = CV.title.split('|').map(s => s.trim());
    const role = parts[1] || parts[0];
    const first = CV.name.replace(/^Md\.?\s+/i, '').split(/\s+/)[0];
    const cp = CV.achievements[0];
    const contact = [
      ['fa-solid fa-location-dot', 'Location', esc(CV.address), null],
      ['fa-solid fa-phone', 'Phone', esc(CV.phone), 'tel:' + CV.phone],
      ['fa-regular fa-envelope', 'Email', esc(CV.email), 'mailto:' + CV.email],
      ['fa-brands fa-github', 'GitHub', esc(CV.github.handle), CV.github.url],
      ['fa-brands fa-linkedin', 'LinkedIn', esc(CV.linkedin.label), CV.linkedin.url]
    ].map(([ic, k, v, href]) => `<li><i class="${ic}"></i><span class="k">${k}</span><span class="v">${href ? linkA(href, v) : v}</span></li>`).join('');

    const explore = FILES.filter(f => f.id !== 'about.md').map(f =>
      `<button type="button" class="pv-go" data-open="${f.id}" style="--tone:${f.tone}">
         <span class="ficon">${f.icon}</span><span><b>${esc(f.label)}</b><small>${esc(f.blurb)}</small></span><i class="fa-solid fa-arrow-right"></i>
       </button>`).join('');

    // The opening words of the page. Written in a casual voice; edit freely.
    const intro = `
      <h1 class="pv-name">Hey, I'm ${esc(first)}.</h1>
      <p class="lead">I'm a ${esc(role)}${now ? ` at ${esc(now.company)} in ${esc(now.location)}` : ''} and a Computer Science and Engineering graduate. I build full-stack web apps with Django, Express, React, Oracle APEX and MySQL, taking an idea from the database all the way to the screen people actually use.</p>
      <p>So far I have built ${CV.projects.length} projects, from a voting site that alerts you to database tampering to a marketplace that connects farmers with shops. I have also solved ${esc(cp.solved)} coding problems on ${andList(cp.platforms.map(esc))}, because I like a good puzzle. I am curious about research too, and about turning theory into systems people can really use.</p>
      <p>Want to work together? Have a look at <a href="#services.json" data-open="services.json">what I can build for you</a>, or <a href="mailto:${esc(CV.email)}">send me an email</a>.</p>`;

    return `
      <div class="pv">
        <div class="pv-about">
          <div class="pv-main">
            <section class="pv-intro rv">${intro}</section>

            <div class="pv-stats">
              <div class="pv-stat rv" style="--c:#3794ff"><b>${CV.projects.length}</b><span>projects built</span></div>
              <div class="pv-stat rv" style="--c:#4ec9b0"><b>${esc(cp.solved)}</b><span>coding problems solved</span></div>
              <div class="pv-stat rv" style="--c:#c586c0"><b>${CV.services.length}</b><span>services I offer</span></div>
            </div>

            <section class="pv-card pv-contact rv">
              <h2>Contact</h2>
              <ul>${contact}</ul>
            </section>
          </div>

          <div class="pv-side">
            <figure class="pv-photo rv">
              ${photoFrame()}
              <figcaption><b>${esc(CV.name)}</b><span>${esc(role)}</span></figcaption>
            </figure>
            <section class="pv-card pv-explore rv">
              <h2>Keep exploring</h2>
              ${explore}
            </section>
          </div>
        </div>
      </div>`;
  }

  function pvServices() {
    const slugOf = name => (CV.projects.find(p => p.name === name) || {}).slug;
    const cards = CV.services.map(s => {
      const slug = slugOf(s.example);
      return `<article class="pv-card svc rv" style="--tone:${s.tone}">
        <span class="ic"><i class="${s.icon}"></i></span>
        <h3>${esc(s.title)}</h3>
        <p class="lead">${esc(s.summary)}</p>
        <div class="built"><span class="k">Built with</span>${s.stack.map(t => `<span class="chip">${esc(t)}</span>`).join('')}</div>
        ${slug ? `<button type="button" class="pv-eg" data-open="projects.js" data-goto="proj-${esc(slug)}"><span>See an example: <b>${esc(s.example)}</b></span><i class="fa-solid fa-arrow-right"></i></button>` : ''}
      </article>`;
    }).join('');

    return `<div class="pv">${pvHead('services.json')}
      <div class="pv-services">${cards}</div>
      <section class="pv-card pv-cta rv">
        <div>
          <h2>Have something in mind?</h2>
          <p>Tell me what you need and we can work out how I can help.</p>
        </div>
        <div class="acts">
          ${linkA('mailto:' + CV.email, '<i class="fa-regular fa-envelope"></i> Email me', 'pv-btn')}
          ${linkA(CV.linkedin.url, '<i class="fa-brands fa-linkedin"></i> LinkedIn', 'pv-btn ghost')}
        </div>
      </section>
    </div>`;
  }

  function pvExperience() {
    const items = CV.experience.map(x => {
      const current = !x.end;
      const dur = current ? `${since(parseYMD(x.start))} and counting` : `${plural(daysBetween(x.start, x.end), 'day')} in this role`;
      return `<div class="tl-item rv" style="--tone:${current ? '#89d185' : '#6e7681'}">
        <article class="pv-card">
          <p class="meta"><span class="badge${current ? ' on' : ''}">${current ? 'Current job' : 'Completed'}</span><span>${esc(x.period)}</span></p>
          <h3>${esc(x.role)}</h3>
          <p class="sub">${esc(x.company)}, ${esc(x.location)}</p>
          <p class="dur">${esc(dur)}</p>
          ${x.note ? `<p class="note">${esc(x.note)}</p>` : ''}
        </article>
      </div>`;
    }).join('');
    return `<div class="pv">${pvHead('experience.log')}<div class="tl">${items}</div></div>`;
  }

  const SHOT_EXT = ['jpg', 'png', 'webp', 'jpeg'];
  function pvProjects() {
    const items = CV.projects.map((p, i) => {
      const srcs = SHOT_EXT.map(x => `assets/projects/${p.slug}.${x}`).join('|');
      const action = p.kind === 'live'
        ? linkA(p.url, '<i class="fa-solid fa-arrow-up-right-from-square"></i> Visit live website', 'pv-btn')
        : linkA(p.url, '<i class="fa-brands fa-github"></i> View source code', 'pv-btn ghost');
      return `<article class="pv-proj rv" id="proj-${esc(p.slug)}" style="--tone:${p.tone}">
        <a class="shot" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${esc(p.name)}">
          <span class="shot-bar"><i></i><i></i><i></i><span>${esc(hostOf(p.url))}</span></span>
          <span class="shot-view">
            <span class="shot-fb" aria-hidden="true"><b>${esc(initials(p.name))}</b></span>
            <img class="shot-img" alt="Screenshot of ${esc(p.name)}" data-srcs="${esc(srcs)}" decoding="async">
          </span>
        </a>
        <div class="body">
          <p class="num">Project ${i + 1} of ${CV.projects.length}</p>
          <h3>${esc(p.name)}</h3>
          <p class="lead">${esc(p.plain)}</p>
          <div class="built"><span class="k">Built with</span>${p.stack.map(s => `<span class="chip">${esc(s)}</span>`).join('')}</div>
          <p class="detail">${esc(p.description)}</p>
          ${action}
        </div>
      </article>`;
    }).join('');
    return `<div class="pv">${pvHead('projects.js')}<div class="pv-projects">${items}</div></div>`;
  }

  const SKILL_META = {
    'Programming': ['Programming languages', 'fa-solid fa-laptop-code', '#3794ff'],
    'Web Dev': ['Web development', 'fa-solid fa-globe', '#4ec9b0'],
    'Database': ['Databases', 'fa-solid fa-database', '#d19a66'],
    'Tools/Tech': ['Tools I use', 'fa-solid fa-screwdriver-wrench', '#c586c0'],
    'Fundamentals': ['Computer science basics', 'fa-solid fa-book-open', '#89d185']
  };
  const SKILL_LONG = { OOP: 'Object-Oriented Programming (OOP)', OS: 'Operating Systems (OS)' };
  function pvSkills() {
    const cards = CV.skills.map(([cat, items], i) => {
      const [label, icon, tone] = SKILL_META[cat] || [cat, 'fa-solid fa-code', '#3794ff'];
      return `<section class="pv-card sk sk${i + 1} rv" style="--tone:${tone}">
        <h3><span class="ic"><i class="${icon}"></i></span>${esc(label)}</h3>
        <div class="chips">${items.map(s => `<span class="chip">${esc(SKILL_LONG[s] || s)}</span>`).join('')}</div>
      </section>`;
    }).join('');
    return `<div class="pv">${pvHead('skills.sql')}<div class="pv-skills">${cards}</div></div>`;
  }

  function pvAchievements() {
    const [cp, edge] = CV.achievements;
    return `<div class="pv">${pvHead('achievements.yml')}
      <div class="pv-ach">
        <article class="pv-card ach-1 rv" style="--tone:#4ec9b0">
          <p class="k">${esc(cp.title)}</p>
          <p class="big">${esc(cp.solved)}</p>
          <p class="lab">coding problems solved</p>
          <div class="chips">${cp.platforms.map(s => `<span class="chip">${esc(s)}</span>`).join('')}</div>
          <p class="note">Competitive programming means solving timed coding puzzles. It trains fast, careful problem solving.</p>
        </article>
        <article class="pv-card ach-2 rv" style="--tone:#c586c0">
          <span class="badge on"><i class="fa-solid fa-award"></i> ${esc(edge.status[0].toUpperCase() + edge.status.slice(1))}</span>
          <p class="cert">${esc(edge.credential)}</p>
          <p class="lab">${esc(edge.title)}</p>
        </article>
      </div>
    </div>`;
  }

  const FILES = [
    { id: 'about.md', lang: 'Markdown', icon: '<i class="fa-brands fa-markdown"></i>', tone: '#519aba', render: renderAbout, preview: pvAbout, label: 'About me', blurb: 'Who I am and how to reach me', sub: 'A short introduction, and how to reach me.' },
    { id: 'services.json', lang: 'JSON', icon: '<span class="fi-txt">{}</span>', tone: '#cbcb41', render: renderServices, preview: pvServices, label: 'Services', blurb: 'What I can build for you', sub: 'What I can build for you, and the tools I use to do it.' },
    { id: 'projects.js', lang: 'JavaScript', icon: '<i class="fa-brands fa-js"></i>', tone: '#e5c07b', render: renderProjects, preview: pvProjects, label: 'Projects', blurb: 'Things I have built', sub: 'Things I have built. Each one has a button that opens it.' },
    { id: 'skills.sql', lang: 'SQL', icon: '<i class="fa-solid fa-database"></i>', tone: '#d19a66', render: renderSkills, preview: pvSkills, label: 'Skills', blurb: 'Languages and tools I use', sub: 'The languages and tools I work with.' },
    { id: 'experience.log', lang: 'Log', icon: '<i class="fa-solid fa-scroll"></i>', tone: '#9da5b0', render: renderExperience, preview: pvExperience, label: 'Work experience', blurb: 'Where I have worked', sub: 'Where I have worked, newest first.' },
    { id: 'achievements.yml', lang: 'YAML', icon: '<i class="fa-solid fa-trophy"></i>', tone: '#c586c0', render: renderAchievements, preview: pvAchievements, label: 'Achievements', blurb: 'Problem solving and certificates', sub: 'Coding practice and certificates.' }
  ];
  const fileById = id => FILES.find(f => f.id === id);

  const body = document.body;
  const desktop = $('#desktop'), ide = $('#ide');
  const view = $('#view'), tabsEl = $('#tabs'), crumbs = $('#crumbs'), editor = $('#editor');
  const panel = $('#panel');
  const mqMobile = window.matchMedia('(max-width: 820px)');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mqTouch = window.matchMedia('(hover: none) and (pointer: coarse)');
  const tapIntro = () => mqMobile.matches || mqTouch.matches;

  const state = { tabs: [], active: null, scroll: {}, mode: 'preview' };   // 'preview' = plain-language view, 'code' = source
  const phase = () => body.dataset.phase;

  function setPhase(p) {
    body.dataset.phase = p;
    desktop.inert = p === 'ide';
    ide.inert = p === 'desktop';
    ide.setAttribute('aria-hidden', p === 'desktop' ? 'true' : 'false');
  }

  function buildTree() {
    $('#tree').innerHTML = FILES.map((f, i) =>
      `<button type="button" class="tree-item" data-open="${f.id}" style="--i:${i};--tone:${f.tone}">
         <span class="ficon">${f.icon}</span><span class="fname">${f.id}</span><span class="flabel">${esc(f.label)}</span>
       </button>`).join('');
  }

  function buildConnect() {
    const items = [
      ['fa-brands fa-github', CV.github.handle, CV.github.url],
      ['fa-brands fa-linkedin', CV.linkedin.label, CV.linkedin.url],
      ['fa-regular fa-envelope', CV.email, 'mailto:' + CV.email],
      ['fa-solid fa-phone', CV.phone, 'tel:' + CV.phone]
    ];
    $('#connect').innerHTML =
      items.map(([ic, label, href]) =>
        `<li><a href="${esc(href)}"${/^https?:/.test(href) ? ' target="_blank" rel="noopener noreferrer"' : ''}><i class="${ic}"></i><span>${esc(label)}</span></a></li>`).join('') +
      `<li><i class="fa-solid fa-location-dot"></i><span>${esc(CV.address)}</span></li>`;
  }

  function setLinks() {
    const map = { github: CV.github.url, linkedin: CV.linkedin.url, email: 'mailto:' + CV.email };
    $$('[data-link]').forEach(a => { a.href = map[a.dataset.link]; });
  }

  function openFile(id, { fromUser = true } = {}) {
    if (!fileById(id)) return;
    const isNew = !state.tabs.includes(id);
    if (isNew) {
      const at = state.tabs.indexOf(state.active);
      state.tabs.splice(at + 1, 0, id);
    }
    activate(id, isNew);
    if (fromUser && mqMobile.matches) toggleSidebar(false);
  }

  function activate(id, isNew = false) {
    if (state.active) state.scroll[state.active] = editor.scrollTop;
    state.active = id;
    renderTabs(isNew ? id : null);
    renderView();
    updateChrome();
    editor.scrollTop = state.scroll[id] || 0;
  }

  function closeTab(id) {
    const i = state.tabs.indexOf(id);
    if (i < 0) return;
    state.tabs.splice(i, 1);
    delete state.scroll[id];
    if (state.active === id) {
      state.active = null;
      const next = state.tabs[i] || state.tabs[i - 1];
      if (next) { activate(next); return; }
      renderTabs(); renderView(); updateChrome();
    } else renderTabs();
  }

  function closeAllTabs() {
    state.tabs = []; state.active = null; state.scroll = {};
    renderTabs(); renderView(); updateChrome();
  }

  function renderTabs(newId) {
    tabsEl.innerHTML = state.tabs.map(id => {
      const f = fileById(id), on = id === state.active;
      return `<div class="tab${on ? ' active' : ''}${id === newId ? ' new' : ''}" role="presentation" style="--tone:${f.tone}">
        <button type="button" class="tab-main" role="tab" aria-selected="${on}" data-tab="${id}" title="${esc(f.label)}"><span class="ficon">${f.icon}</span>${id}</button>
        <button type="button" class="tab-close" data-close="${id}" aria-label="Close ${id}" tabindex="-1"><i class="fa-solid fa-xmark"></i></button>
      </div>`;
    }).join('');
    const on = $('.tab.active', tabsEl);
    if (on) on.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }

  function renderView() {
    const f = fileById(state.active);
    const preview = !!f && state.mode === 'preview';
    view.innerHTML = f ? (preview ? f.preview() : f.render()) : renderWelcome();
    $$('.l', view).forEach((el, i) => el.style.setProperty('--n', Math.min(i, 36)));
    $$('.rv', view).forEach((el, i) => el.style.setProperty('--n', Math.min(i, 12)));
    initPhotos(view); initShots(view);
    if (f && !preview && f.id === 'skills.sql') bindSkills();
  }

  // Project screenshots: try assets/projects/<slug>.jpg, .png, .webp, .jpeg; otherwise the styled placeholder stays.
  function initShots(root) {
    $$('.shot-img', root).forEach(img => {
      const box = img.closest('.shot');
      const list = (img.dataset.srcs || '').split('|').filter(Boolean);
      let i = 0;
      const next = () => { if (i < list.length) img.src = list[i++]; };
      img.addEventListener('load', () => box.classList.add('has-img'));
      img.addEventListener('error', next);
      next();
    });
  }

  function bindSkills() {
    const set = cat => $$('.sql-src .l[data-cat]', view).forEach(l => l.classList.toggle('hl', l.dataset.cat === cat));
    $$('.res tbody tr', view).forEach(tr => {
      const on = () => set(tr.dataset.cat), off = () => set(null);
      tr.addEventListener('pointerenter', on); tr.addEventListener('pointerleave', off);
      tr.addEventListener('focus', on); tr.addEventListener('blur', off);
    });
  }

  function setMode(m) {
    if (m === state.mode) return;
    state.mode = m;
    renderView(); updateChrome();
    editor.scrollTop = 0;
  }

  function updateChrome() {
    const f = fileById(state.active);
    $$('.tree-item').forEach(b => b.classList.toggle('active', b.dataset.open === state.active));
    $$('#viewSeg [data-mode]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.mode === state.mode)));
    $('#viewSeg').hidden = !f;
    $('#tbTitle').textContent = f ? `${f.id} - ${CONFIG.workspace}` : CONFIG.workspace;
    crumbs.innerHTML = f ? `<span>${CONFIG.workspace}</span><i class="fa-solid fa-chevron-right"></i><b>${f.id}</b>` : `<span>${CONFIG.workspace}</span>`;
    const showingPreview = !!f && state.mode === 'preview';
    $('#stLang').textContent = f ? (showingPreview ? f.lang + ' Preview' : f.lang) : 'Plain Text';
    $('#stLines').textContent = f && !showingPreview ? `${$$('.l', view).length} lines` : '';
    document.title = f ? `${f.id} | ${CV.name}` : `${CV.name} | System Engineer`;
    try { history.replaceState(null, '', f ? '#' + f.id : location.pathname + location.search); } catch (_) { /* file:// or sandbox */ }
  }

  function resetWorkspace() {
    state.tabs = []; state.active = null; state.scroll = {};
    renderTabs(); renderView(); updateChrome();
  }

  function startFile() {
    let h = '';
    try { h = decodeURIComponent(location.hash.slice(1)); } catch (_) { /* malformed hash */ }
    return fileById(h) ? h : 'about.md';
  }

  function syncExplorerButton() {
    const visible = mqMobile.matches ? body.classList.contains('sidebar-open') : !body.classList.contains('side-hidden');
    $('#abExplorer').classList.toggle('active', visible);
  }
  function toggleSidebar(force) {
    if (mqMobile.matches) body.classList.toggle('sidebar-open', force);
    else body.classList.toggle('side-hidden', force === undefined ? undefined : !force);
    syncExplorerButton();
  }
  let panelIsOpen = false, panelTimer = 0;
  function togglePanel(force) {
    const open = force === undefined ? !panelIsOpen : force;
    if (open === panelIsOpen) return;
    panelIsOpen = open;
    clearTimeout(panelTimer);
    $('#abTerminal').classList.toggle('active', open);
    const input = $('#termIn');

    if (open) {
      panel.hidden = false;
      void panel.offsetHeight;                 
      panel.classList.add('open');             
      term.boot();
      input.focus({ preventScroll: true });
    } else {
      panel.classList.remove('open');
      if (document.activeElement === input) input.blur();   
      const hide = () => { if (!panelIsOpen) panel.hidden = true; };
      if (mqMobile.matches && !reduceMotion) panelTimer = setTimeout(hide, 270); else hide();
    }
  }

  const drop = $('#menuDrop');
  const MENUS = {
    File: [
      ['Go to File...', MOD + '+P', () => openQuick()],
      ['Close Tab', '', () => state.active && closeTab(state.active)],
      ['Close All Tabs', '', closeAllTabs],
      '-',
      ['Exit to Desktop', '', () => closeIDE()]
    ],
    View: [
      ['Toggle Explorer', MOD + '+B', () => toggleSidebar()],
      ['Toggle Terminal', MOD + '+`', () => togglePanel()],
      ['Toggle Full Screen', '', () => toggleFullscreen()]
    ],
    Go: FILES.map(f => ['Go to ' + f.id, '', () => openFile(f.id)]),
    Help: [
      ['Connect on LinkedIn', '', () => window.open(CV.linkedin.url, '_blank', 'noopener')],
      ['GitHub Profile', '', () => window.open(CV.github.url, '_blank', 'noopener')],
      ['Send an Email', '', () => { location.href = 'mailto:' + CV.email; }],
      '-',
      ['Replay Intro', '', () => closeIDE()]
    ]
  };
  let openMenu = null;

  function buildMenubar() {
    $('#menubar').innerHTML = Object.keys(MENUS).map(k =>
      `<button type="button" class="menu-btn" data-menu="${k}" aria-haspopup="true" aria-expanded="false">${k}</button>`).join('');
  }
  function closeMenus() {
    drop.hidden = true; openMenu = null;
    $$('.menu-btn').forEach(b => { b.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); });
  }
  function showMenu(btn) {
    closeMenus();
    const items = MENUS[btn.dataset.menu];
    drop.innerHTML = items.map((it, i) => it === '-'
      ? '<div class="menu-sep"></div>'
      : `<button type="button" class="menu-item" role="menuitem" data-mi="${i}"><span>${esc(it[0])}</span><kbd>${esc(it[1])}</kbd></button>`).join('');
    drop.style.left = btn.offsetLeft + $('.tb-left').offsetLeft + 'px';
    drop.hidden = false;
    btn.classList.add('open'); btn.setAttribute('aria-expanded', 'true');
    openMenu = btn.dataset.menu;
  }

  const qo = $('#qo'), qoInput = $('#qoInput'), qoList = $('#qoList');
  let qoIdx = 0, qoPrev = null, qoItems = [];
  const fuzzy = (text, query) => { let i = 0; for (const c of text) if (c === query[i]) i++; return i === query.length; };

  function renderQuick() {
    const v = qoInput.value.trim().toLowerCase();
    qoItems = FILES.filter(f => fuzzy((f.id + ' ' + f.label).toLowerCase(), v));
    qoIdx = Math.min(qoIdx, Math.max(0, qoItems.length - 1));
    qoList.innerHTML = qoItems.length
      ? qoItems.map((f, i) => `<li><button type="button" class="qo-item${i === qoIdx ? ' sel' : ''}" data-qo="${f.id}" style="--tone:${f.tone}"><span class="ficon">${f.icon}</span><span>${f.id}</span><span class="flabel">${esc(f.label)}</span></button></li>`).join('')
      : '<li class="qo-empty">No matching files</li>';
  }
  function openQuick() {
    if (phase() !== 'ide') return;
    closeMenus();
    qoPrev = document.activeElement;
    qo.hidden = false; qoInput.value = ''; qoIdx = 0; renderQuick(); qoInput.focus();
  }
  function closeQuick() {
    if (qo.hidden) return;
    qo.hidden = true;
    if (qoPrev && qoPrev.focus) qoPrev.focus();
  }

  const term = (() => {
    const out = $('#termOut'), input = $('#termIn'), scroller = $('#term');
    const hist = []; let hi = 0, booted = false;

    const print = (html, cls = '') => {
      const d = document.createElement('div');
      d.className = 'term-row ' + cls; d.innerHTML = html;
      out.appendChild(d); scroller.scrollTop = scroller.scrollHeight;
    };
    const link = (href, label) => `<a href="${esc(href)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`;

    const cmds = {
      help: () => ['Available commands:', '  ls              list the files in this workspace', '  open <file>     open a file in the editor (also: cat, code)',
        '  whoami          who is this?', '  contact         ways to reach me', '  github          open my GitHub', '  linkedin        open my LinkedIn',
        '  clear           clear the terminal', '  exit            close the terminal'].map(esc),
      ls: () => [FILES.map(f => esc(f.id)).join('  ')],
      whoami: () => [esc(CV.name + ' | ' + CV.title)],
      contact: () => [
        `email     ${link('mailto:' + CV.email, CV.email)}`, `phone     ${link('tel:' + CV.phone, CV.phone)}`,
        `github    ${link(CV.github.url, CV.github.url)}`, `linkedin  ${link(CV.linkedin.url, CV.linkedin.url)}`],
      github: () => { window.open(CV.github.url, '_blank', 'noopener'); return ['Opening GitHub...']; },
      linkedin: () => { window.open(CV.linkedin.url, '_blank', 'noopener'); return ['Opening LinkedIn...']; },
      clear: () => { out.innerHTML = ''; return []; },
      exit: () => { togglePanel(false); return []; }
    };
    const openCmd = args => {
      const name = (args[0] || '').toLowerCase();
      if (!name) return ['usage: open <file>'];
      const f = FILES.find(x => x.id === name) || FILES.find(x => x.id.startsWith(name));
      if (!f) return [`open: ${esc(name)}: no such file. Try ls.`];
      openFile(f.id, { fromUser: false });
      return [`Opened ${esc(f.id)}`];
    };
    cmds.open = cmds.cat = cmds.code = openCmd;

    function run(rawLine) {
      print(`<span class="t-user">anjir@portfolio</span> <span class="t-path">~</span><span class="t-dollar">$</span>${esc(rawLine)}`);
      const [cmd, ...args] = rawLine.trim().split(/\s+/);
      if (!cmd) return;
      const c = cmd.toLowerCase();
      if (c === 'sudo' && args.join(' ') === 'hire-me') return print('Permission granted. Best way to start: ' + link('mailto:' + CV.email, CV.email));
      const handler = cmds[c];
      if (!handler) return print(`command not found: ${esc(cmd)}. Type help to see what works.`, 'dim');
      handler(args).forEach(line => print(line));
    }

    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        const v = input.value; input.value = '';
        if (v.trim()) { hist.push(v); hi = hist.length; }
        run(v);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault(); if (hi > 0) input.value = hist[--hi] || '';
      } else if (e.key === 'ArrowDown') {
        e.preventDefault(); input.value = hi < hist.length - 1 ? hist[++hi] : ((hi = hist.length), '');
      } else if (e.key === 'Tab') {
        e.preventDefault();
        const parts = input.value.split(/\s+/);
        if (parts.length > 1 && parts[1]) {
          const m = FILES.find(f => f.id.startsWith(parts[1].toLowerCase()));
          if (m) input.value = parts[0] + ' ' + m.id;
        }
      } else if (e.key === 'Escape') togglePanel(false);
    });
    scroller.addEventListener('click', () => { if (!getSelection().toString()) input.focus(); });
    const stick = () => { scroller.scrollTop = scroller.scrollHeight; };
    input.addEventListener('focus', () => setTimeout(stick, 60));

    return {
      boot() {
        if (booted) return; booted = true;
        print('Type help to see what this terminal can do.', 'dim');
      },
      stick
    };
  })();

  function initCursor() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const root = document.documentElement;
    const cur = $('#cursor'), trail = $('#cursorTrail');
    root.classList.add('has-custom-cursor');
    cur.classList.add('hidden'); trail.classList.add('hidden');

    const HOVER = 'a, button, [role="tab"], [data-open], [data-act], [data-close], .d-icon, .menu-item, .qo-item, tr[data-cat]';
    let mx = -100, my = -100, tx = -100, ty = -100, idle;

    const place = () => {
      cur.style.transform = `translate3d(${mx}px,${my}px, 0)`;
      trail.style.transform = `translate3d(${tx}px,${ty}px, 0)`;
    };
    document.addEventListener('pointermove', e => {
      if (e.pointerType && e.pointerType !== 'mouse') return;
      mx = e.clientX; my = e.clientY;
      cur.classList.remove('hidden', 'idle'); trail.classList.remove('hidden');
      clearTimeout(idle); idle = setTimeout(() => cur.classList.add('idle'), 900);
      place();
    }, { passive: true });

    (function loop() {
      tx += (mx - tx) * 0.16; ty += (my - ty) * 0.16;
      trail.style.transform = `translate3d(${tx}px,${ty}px, 0)`;
      requestAnimationFrame(loop);
    })();

    document.addEventListener('pointerover', e => {
      const t = e.target;
      const link = !!(t.closest && t.closest(HOVER));
      const text = !!(t.closest && t.closest('input, textarea'));
      cur.classList.toggle('is-link', link && !text); trail.classList.toggle('is-link', link && !text);
      cur.classList.toggle('is-text', text);
    });
    document.addEventListener('pointerdown', () => cur.classList.add('is-down'));
    document.addEventListener('pointerup', () => cur.classList.remove('is-down'));
    document.documentElement.addEventListener('mouseleave', () => { cur.classList.add('hidden'); trail.classList.add('hidden'); });
    document.documentElement.addEventListener('mouseenter', () => { cur.classList.remove('hidden'); trail.classList.remove('hidden'); });
  }

  const vc = $('#vcursor'), ring = $('#clickRing'), vsIcon = $('#vscodeIcon');
  const vsGlyph = $('.d-icon-img', vsIcon);
  const CANCEL = Symbol('cancel');
  let runId = 0, vcPos = { x: 0, y: 0 }, activeAnim = null;

  const sleep = (ms, id) => new Promise((res, rej) => setTimeout(() => (id === runId ? res() : rej(CANCEL)), ms));
  const ease = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const setVC = (x, y) => { vcPos = { x, y }; vc.style.transform = `translate3d(${x - 1}px,${y - 1}px, 0)`; };

  function moveTo(id, to, dur, bend = 0.16) {
    const from = { ...vcPos };
    const dx = to.x - from.x, dy = to.y - from.y;
    const cx = from.x + dx / 2 - dy * bend, cy = from.y + dy / 2 + dx * bend;
    return new Promise((res, rej) => {
      const t0 = performance.now();
      (function frame(now) {
        if (id !== runId) return rej(CANCEL);
        const p = Math.min(1, (now - t0) / dur), e = ease(p), u = 1 - e;
        setVC(u * u * from.x + 2 * u * e * cx + e * e * to.x, u * u * from.y + 2 * u * e * cy + e * e * to.y);
        if (p < 1) requestAnimationFrame(frame); else res();
      })(t0);
    });
  }

  async function click(id) {
    vc.classList.add('pressed');
    ring.style.left = vcPos.x + 'px'; ring.style.top = vcPos.y + 'px';
    ring.classList.remove('go'); void ring.offsetWidth; ring.classList.add('go');
    await sleep(95, id);
    vc.classList.remove('pressed');
  }

  function iconTarget() {
    const r = vsGlyph.getBoundingClientRect();
    return { x: r.left + r.width * 0.5, y: r.top + r.height * 0.48 };
  }

  function resetDesktop() {
    vsIcon.classList.remove('hover', 'selected', 'launching');
    vc.classList.remove('show', 'busy', 'pressed');
    desktop.classList.remove('receding');
    ide.classList.remove('closing', 'boot-run');
    ide.classList.add('booting');
    ide.style.clipPath = '';
    
    const mCursor = $('#mCursor');
    if(mCursor) {
      mCursor.style.opacity = '0';
      mCursor.classList.remove('pressed');
    }

    if (activeAnim) { activeAnim.cancel(); activeAnim = null; }
    setPhase('desktop');
  }

  async function playIntro({ fast = false } = {}) {
    const id = ++runId;
    resetDesktop();

    if (tapIntro()) {
      desktop.dataset.intro = 'auto-mobile';
      vsIcon.title = 'VS Code';
      
      try {
        if (reduceMotion) { enterIDE({ instant: true }); return; }

        const mCursor = $('#mCursor');
        const W = window.innerWidth, H = window.innerHeight;
        
        // 1. Initial State (Hidden at top center)
        mCursor.style.transition = 'none';
        mCursor.style.transform = `translate(${W / 2}px, -50px)`;
        mCursor.style.opacity = '1';
        mCursor.classList.remove('pressed');

        await sleep(200, id);
        
        // 2. Cursor drops into the screen
        mCursor.style.transition = 'transform 1s cubic-bezier(0.2, 0.8, 0.2, 1)';
        mCursor.style.transform = `translate(${W / 2}px,${H * 0.4}px)`;
        
        await sleep(1200, id);

        // 3. Cursor seeks the target (VS Code icon)
        const targetRect = vsGlyph.getBoundingClientRect();
        // Mouse point kore top-left corner diye, tai center point e neyar jonno slight offset
        const tx = targetRect.left + (targetRect.width / 2) - 2;
        const ty = targetRect.top + (targetRect.height / 2) + 2;
        
        mCursor.style.transition = 'transform 0.8s ease-in-out';
        mCursor.style.transform = `translate(${tx}px,${ty}px)`;

        await sleep(900, id);

        // 4. Double Click Animation!
        vsIcon.classList.add('hover');
        await sleep(150, id);

        // First click
        mCursor.classList.add('pressed');
        await sleep(95, id);
        mCursor.classList.remove('pressed');
        vsIcon.classList.remove('hover');
        vsIcon.classList.add('selected');
        
        await sleep(150, id);
        
        // Second click
        mCursor.classList.add('pressed');
        await sleep(95, id);
        mCursor.classList.remove('pressed');

        // 5. Impact & Open
        mCursor.style.opacity = '0';
        vsIcon.classList.add('launching');
        
        await sleep(420, id);
        await openWindow(id);

      } catch (e) { if (e !== CANCEL) throw e; }
      return;
    }

    desktop.dataset.intro = 'auto';
    vsIcon.title = 'Double-click to open';

    try {
      if (reduceMotion) { await sleep(400, id); enterIDE({ instant: true }); return; }

      const W = innerWidth, H = innerHeight;
      setVC(W * 0.62, H * 0.72);
      await sleep(fast ? 250 : 1000, id);
      vc.classList.add('show');
      await sleep(fast ? 100 : 350, id);

      await moveTo(id, { x: W * 0.34, y: H * 0.34 }, fast ? 600 : 950);
      await sleep(fast ? 60 : 180, id);

      const t = iconTarget();
      await moveTo(id, { x: t.x + 10, y: t.y + 8 }, fast ? 600 : 850, -0.12);
      await moveTo(id, t, 180, 0.04);
      vsIcon.classList.add('hover');
      await sleep(320, id);

      await click(id);
      vsIcon.classList.remove('hover'); vsIcon.classList.add('selected');
      await sleep(150, id);
      await click(id);                                   
      vsIcon.classList.add('launching'); vc.classList.add('busy');
      await sleep(420, id);

      await openWindow(id);
    } catch (e) { if (e !== CANCEL) throw e; }
  }

  async function openWindow(id) {
    const r = vsGlyph.getBoundingClientRect();
    const W = innerWidth, H = innerHeight;
    const from = `inset(${r.top}px${W - r.right}px ${H - r.bottom}px${r.left}px round 14px)`;
    const to = 'inset(0px 0px 0px 0px round 0px)';

    ide.style.clipPath = from;
    setPhase('opening');
    desktop.classList.add('receding');
    vc.classList.remove('show');

    activeAnim = ide.animate({ clipPath: [from, to] }, { duration: 780, easing: 'cubic-bezier(0.22, 0.9, 0.2, 1)', fill: 'forwards' });
    try { await activeAnim.finished; } catch (_) { throw CANCEL; }
    if (id !== runId) throw CANCEL;

    activeAnim.cancel(); activeAnim = null;
    ide.style.clipPath = '';
    enterIDE();
  }

  function enterIDE({ instant = false } = {}) {
    setPhase('ide');
    desktop.classList.remove('receding');
    ide.classList.remove('booting');
    resetWorkspace();
    if (instant) { openFile(startFile(), { fromUser: false }); return; }

    ide.classList.add('boot-run');
    setTimeout(() => { if (phase() === 'ide' && !state.active) openFile(startFile(), { fromUser: false }); }, 650);
    setTimeout(() => ide.classList.remove('boot-run'), 3400);
  }

  function skipIntro() {
    if (phase() === 'ide') return;
    runId++;
    if (activeAnim) { activeAnim.cancel(); activeAnim = null; }
    ide.style.clipPath = '';
    enterIDE({ instant: true });
  }

  function closeIDE() {
    if (phase() !== 'ide') return;
    closeMenus(); closeQuick(); togglePanel(false); toggleSidebar(mqMobile.matches ? false : true);
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    ide.classList.add('closing');
    setTimeout(() => { resetWorkspace(); playIntro({ fast: true }); }, 240);
  }

  function toggleFullscreen() {
    try {
      if (document.fullscreenElement) document.exitFullscreen();
      else document.documentElement.requestFullscreen();
    } catch (_) { /* unsupported */ }
  }

  /* ======================================================================
     10. EVENTS
     ====================================================================== */
  function startClock() {
    const t = $('#clockTime'), d = $('#clockDate'), m = $('#mClock');
    const tick = () => {
      const now = new Date();
      t.textContent = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
      d.textContent = now.toLocaleDateString();
      m.textContent = t.textContent.replace(/\s?[AP]M$/i, '');   
    };
    tick(); setInterval(tick, 20000);
  }

  function bindEvents() {
    document.addEventListener('click', e => {
      const t = e.target;

      if (!t.closest('.menu-btn') && !t.closest('#menuDrop')) closeMenus();
      if (!t.closest('.qo-box') && !qo.hidden) closeQuick();

      const mb = t.closest('.menu-btn');
      if (mb) { openMenu === mb.dataset.menu ? closeMenus() : showMenu(mb); return; }

      const mi = t.closest('.menu-item');
      if (mi) { const item = MENUS[openMenu][+mi.dataset.mi]; closeMenus(); item[2](); return; }

      const md = t.closest('[data-mode]');
      if (md) { setMode(md.dataset.mode); return; }

      const qi = t.closest('[data-qo]');
      if (qi) { closeQuick(); openFile(qi.dataset.qo); return; }

      const cl = t.closest('[data-close]');
      if (cl) { closeTab(cl.dataset.close); return; }

      const tab = t.closest('[data-tab]');
      if (tab) { activate(tab.dataset.tab); return; }

      const op = t.closest('[data-open]');
      if (op) {
        e.preventDefault(); openFile(op.dataset.open);
        const goto = op.dataset.goto && view.querySelector('#' + op.dataset.goto);
        if (goto) goto.scrollIntoView({ block: 'start', behavior: 'smooth' });
        return;
      }

      const tg = t.closest('[data-toggle]');
      if (tg) { tg.setAttribute('aria-expanded', String(tg.getAttribute('aria-expanded') !== 'true')); return; }

      const act = t.closest('[data-act]');
      if (act) {
        switch (act.dataset.act) {
          case 'exit': closeIDE(); break;
          case 'fullscreen': toggleFullscreen(); break;
          case 'explorer': toggleSidebar(); break;
          case 'quick': openQuick(); break;
          case 'terminal': togglePanel(); break;
          case 'panel-close': togglePanel(false); break;
          case 'scrim': toggleSidebar(false); break;
        }
      }
    });

    tabsEl.addEventListener('auxclick', e => {
      if (e.button !== 1) return;
      const tab = e.target.closest('.tab');
      const btn = tab && $('[data-close]', tab);
      if (btn) { e.preventDefault(); closeTab(btn.dataset.close); }
    });

    $('#menubar').addEventListener('pointerover', e => {
      const b = e.target.closest('.menu-btn');
      if (b && openMenu && openMenu !== b.dataset.menu) showMenu(b);
    });

    qoInput.addEventListener('input', () => { qoIdx = 0; renderQuick(); });
    qoInput.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') { e.preventDefault(); qoIdx = (qoIdx + 1) % Math.max(1, qoItems.length); renderQuick(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); qoIdx = (qoIdx - 1 + qoItems.length) % Math.max(1, qoItems.length); renderQuick(); }
      else if (e.key === 'Enter') { const f = qoItems[qoIdx]; if (f) { closeQuick(); openFile(f.id); } }
      else if (e.key === 'Escape') closeQuick();
    });

    $('#skipIntro').addEventListener('click', skipIntro);
    
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        if (phase() === 'desktop') { skipIntro(); return; }
        if (!qo.hidden) closeQuick();
        else if (openMenu) closeMenus();
        else if (!panel.hidden && panel.contains(document.activeElement)) togglePanel(false);
        return;
      }
      if (phase() !== 'ide') return;
      const mod = e.ctrlKey || e.metaKey;
      if (mod && e.key.toLowerCase() === 'p') { e.preventDefault(); openQuick(); }
      else if (mod && e.key.toLowerCase() === 'b') { e.preventDefault(); toggleSidebar(); }
      else if (mod && e.key === '`') { e.preventDefault(); togglePanel(); }
    });

    mqMobile.addEventListener('change', () => { body.classList.remove('sidebar-open'); syncExplorerButton(); });
    mqMobile.addEventListener('change', () => { if (phase() === 'desktop') playIntro({ fast: true }); });
  }

  function init() {
    setLinks(); buildTree(); buildConnect(); buildMenubar();
    initPhotos(document);
    initCursor(); startClock(); bindEvents();
    playIntro();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();