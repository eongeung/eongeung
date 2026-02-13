function initProjectFilter() {
  const filterButtons = document.querySelectorAll('.filter-buttons button');
  const projects = document.querySelectorAll('.project');

  projects.forEach(p => {
    const desc = p.querySelector('.description');
    if (desc) desc.style.display = 'none';
  });

  filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();

      const year = button.getAttribute('data-year');

      filterButtons.forEach(b => b.classList.remove('active'));
      button.classList.add('active');

      projects.forEach(project => {
        const projectYear = project.getAttribute('data-year');
        const show = (year === 'all' || projectYear === year);
        project.style.display = show ? 'block' : 'none';
      });

      projects.forEach(project => {
        const desc = project.querySelector('.description');
        if (desc) desc.style.display = 'none';
      });
    });
  });

  document.addEventListener('click', (e) => {
    const project = e.target.closest('.project');
    if (!project) return;

    const desc = project.querySelector('.description');
    if (!desc) return;

    const isOpen = window.getComputedStyle(desc).display !== 'none';

    projects.forEach(p => {
      const d = p.querySelector('.description');
      if (d) d.style.display = 'none';
    });

    desc.style.display = isOpen ? 'none' : 'block';
  });
}

window.addEventListener('includesLoaded', initProjectFilter);
document.addEventListener('DOMContentLoaded', initProjectFilter);
