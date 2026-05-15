import { useEffect, useRef } from 'react';

const TECH_CATEGORIES = [
  {
    title: 'Front-End',
    badges: [
      { label: 'HTML5', url: 'https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' },
      { label: 'CSS3', url: 'https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=css3&logoColor=white' },
      { label: 'JavaScript', url: 'https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=20232a' },
      { label: 'React', url: 'https://img.shields.io/badge/React-20232a.svg?style=for-the-badge&logo=react&logoColor=61DAFB' },
    ],
  },
  {
    title: 'Back-End',
    badges: [
      { label: 'Java', url: 'https://img.shields.io/badge/Java-3578E5?style=for-the-badge&logo=java&logoColor=white' },
      { label: 'Spring', url: 'https://img.shields.io/badge/Spring-6DB33F.svg?style=for-the-badge&logo=spring&logoColor=white' },
      { label: 'Django', url: 'https://img.shields.io/badge/Django-092E20.svg?style=for-the-badge&logo=django&logoColor=white' },
    ],
  },
  {
    title: 'Database',
    badges: [
      { label: 'MySQL', url: 'https://img.shields.io/badge/MySQL-00758F.svg?style=for-the-badge&logo=mysql&logoColor=white' },
      { label: 'MariaDB', url: 'https://img.shields.io/badge/MariaDB-003545.svg?style=for-the-badge&logo=mariadb&logoColor=white' },
      { label: 'PostgreSQL', url: 'https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=postgresql&logoColor=white' },
    ],
  },
  {
    title: 'App',
    badges: [
      { label: 'Dart', url: 'https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white' },
      { label: 'Flutter', url: 'https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white' },
    ],
  },
  {
    title: 'Programming & Data',
    badges: [
      { label: 'C', url: 'https://img.shields.io/badge/C-20232a.svg?style=for-the-badge&logo=c&logoColor=61DAFB' },
      { label: 'Python', url: 'https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54' },
    ],
  },
  {
    title: 'H/W & IoT',
    badges: [
      { label: 'Arduino', url: 'https://img.shields.io/badge/Arduino-00878F.svg?style=for-the-badge&logo=arduino&logoColor=white' },
      { label: 'Raspberry Pi', url: 'https://img.shields.io/badge/Raspberry%20Pi-A22846.svg?style=for-the-badge&logo=raspberrypi&logoColor=white' },
    ],
  },
];

const TOOLS = [
  { label: 'Git', url: 'https://img.shields.io/badge/Git-F05033.svg?style=for-the-badge&logo=git&logoColor=white' },
  { label: 'GitHub', url: 'https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=github&logoColor=white' },
  { label: 'Notion', url: 'https://img.shields.io/badge/Notion-F3F3F3.svg?style=for-the-badge&logo=notion&logoColor=black' },
  { label: 'Photoshop', url: 'https://img.shields.io/badge/Adobe%20Photoshop-08253c.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=37abff' },
  { label: 'Colab', url: 'https://img.shields.io/badge/Colab-F9AB00.svg?style=for-the-badge&logo=googlecolab&logoColor=black' },
  { label: 'VSCode', url: 'https://img.shields.io/badge/VSCode-2C2C32.svg?style=for-the-badge&logo=visual-studio-code&logoColor=22ABF3' },
  { label: 'IntelliJ', url: 'https://img.shields.io/badge/IntelliJ-000000.svg?style=for-the-badge&logo=intellij%20idea&logoColor=white' },
  { label: 'Android Studio', url: 'https://img.shields.io/badge/Android%20Studio-3DDC84.svg?style=for-the-badge&logo=android%20studio&logoColor=white' },
  { label: 'Docker', url: 'https://img.shields.io/badge/Docker-2496ED.svg?style=for-the-badge&logo=docker&logoColor=white' },
];

function BadgeGrid({ badges }) {
  const ref = useRef(null);

  useEffect(() => {
    const imgs = ref.current?.querySelectorAll('img') ?? [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    imgs.forEach((img) => observer.observe(img));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="tech-grid" ref={ref}>
      {badges.map((b) => (
        <img key={b.label} src={b.url} alt={b.label} />
      ))}
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="techstack">
      <div className="tech-section">
        <h1>Tech Stack</h1>
        {TECH_CATEGORIES.map((cat) => (
          <div key={cat.title}>
            <h3 className="tech-subtitle">{cat.title}</h3>
            <BadgeGrid badges={cat.badges} />
          </div>
        ))}
      </div>
      <div className="tech-section">
        <h1>Tools &amp; Resources</h1>
        <BadgeGrid badges={TOOLS} />
      </div>
    </section>
  );
}
