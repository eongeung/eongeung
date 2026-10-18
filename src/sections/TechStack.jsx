const CDN = 'https://cdn.simpleicons.org';

const SKILLS = [
  {
    cat: 'Backend',
    accent: '#4ade80',
    items: [
      { name: 'Java',            icon: 'openjdk' },
      { name: 'Spring Boot',     icon: 'springboot' },
      { name: 'Spring Security', icon: 'springsecurity' },
      { name: 'JPA',             icon: null },
      { name: 'MyBatis',         icon: null },
      { name: 'WebSquare',       icon: null },
    ],
  },
  {
    cat: 'AI / Computer Vision',
    accent: '#fde68a',
    items: [
      { name: 'Python',       icon: 'python' },
      { name: 'MediaPipe',    icon: null },
      { name: 'Groq LLM',     icon: null },
      { name: 'pgvector',     icon: 'postgresql' },
      { name: 'YOLO',         icon: null },
      { name: 'Raspberry Pi', icon: 'raspberrypi' },
    ],
  },
  {
    cat: 'Frontend / Mobile',
    accent: '#38bdf8',
    items: [
      { name: 'React',        icon: 'react' },
      { name: 'TypeScript',   icon: 'typescript' },
      { name: 'HTML · CSS',   icon: 'html5' },
      { name: 'Flutter',      icon: 'flutter' },
      { name: 'Dart',         icon: 'dart' },
    ],
  },
  {
    cat: 'Database',
    accent: '#c4b5fd',
    items: [
      { name: 'MySQL',      icon: 'mysql' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Oracle',     icon: 'oracle' },
      { name: 'Redis',      icon: 'redis' },
    ],
  },
  {
    cat: 'DevOps / Infra',
    accent: '#94a3b8',
    items: [
      { name: 'Docker',         icon: 'docker' },
      { name: 'GitHub Actions', icon: 'githubactions' },
      { name: 'nginx',          icon: 'nginx' },
    ],
  },
  {
    cat: 'Cloud',
    accent: '#f97316',
    items: [
      { name: 'AWS EC2', icon: 'amazonec2' },
      { name: 'AWS S3',  icon: 'amazons3' },
      { name: 'AWS RDS', icon: 'amazonrds' },
    ],
  },
  {
    cat: 'Tools',
    accent: '#8b949e',
    items: [
      { name: 'Git · GitHub', icon: 'github' },
      { name: 'IntelliJ IDEA', icon: 'intellijidea' },
      { name: 'VSCode',       icon: 'visualstudiocode' },
    ],
  },
];

function hideOnError(e) {
  e.target.style.visibility = 'hidden';
}

export default function TechStack() {
  return (
    <section id="techstack" data-reveal>
      <h1>Tech Stack</h1>
      <div className="skill-grid" data-reveal="stagger">
        {SKILLS.map(({ cat, accent, items }) => (
          <div key={cat} className="skill-group" style={{ '--accent': accent }}>
            <div className="skill-cat">{cat}</div>
            <ul className="skill-list">
              {items.map(({ name, icon }) => (
                <li key={name} className="skill-item">
                  {icon
                    ? <img
                        className="skill-icon"
                        src={`${CDN}/${icon}/ffffff`}
                        alt={name}
                        width="14"
                        height="14"
                        onError={hideOnError}
                      />
                    : <span className="skill-icon-dot" />
                  }
                  <span className="skill-name">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
