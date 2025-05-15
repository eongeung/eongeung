function initProjectFilter() {
  function toggle(element) {
    const desc = element.querySelector('.description');
    const isOpen = desc.style.display === 'block';
    document.querySelectorAll('.description').forEach(d => d.style.display = 'none');
    desc.style.display = isOpen ? 'none' : 'block';
  }

  window.toggle = toggle;

  document.querySelectorAll('.filter-buttons button').forEach(button => {
    button.addEventListener('click', () => {
      const year = button.getAttribute('data-year');
      document.querySelectorAll('.project').forEach(project => {
        const projectYear = project.getAttribute('data-year');
        project.style.display = (year === 'all' || projectYear === year) ? 'block' : 'none';
      });
      document.querySelectorAll('.description').forEach(d => d.style.display = 'none');
    });
  });
}

window.addEventListener("includesLoaded", function () {
  initProjectFilter();
});

