function initProjectFilter() {
  const filterButtons = document.querySelectorAll('.filter-buttons button');
  const projects = document.querySelectorAll('.project');

  // 필터
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

      // 필터 바꾸면 상세 닫기
      projects.forEach(project => {
        const desc = project.querySelector('.description');
        if (desc) desc.style.display = 'none';
      });
    });
  });

  // 토글
  document.addEventListener('click', (e) => {
    const project = e.target.closest('.project');
    if (!project) return;

    const desc = project.querySelector('.description');
    if (!desc) return;

    const isOpen = window.getComputedStyle(desc).display !== 'none';

    // 다른 거 닫기
    projects.forEach(p => {
      const d = p.querySelector('.description');
      if (d) d.style.display = 'none';
    });

    // 현재만 토글
    desc.style.display = isOpen ? 'none' : 'block';
  });
}

window.addEventListener('includesLoaded', initProjectFilter);
document.addEventListener('DOMContentLoaded', initProjectFilter);
