function toggle(element) {
  const desc = element.querySelector('.description');
  const isOpen = desc.style.display === 'block';

  document.querySelectorAll('.description').forEach(d => d.style.display = 'none');

  desc.style.display = isOpen ? 'none' : 'block';
}

document.querySelectorAll('.filter-buttons button').forEach(button => {
  button.addEventListener('click', () => {
    const year = button.getAttribute('data-year');
    document.querySelectorAll('.project').forEach(project => {
      if (year === 'all' || project.getAttribute('data-year') === year) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });

    document.querySelectorAll('.description').forEach(d => d.style.display = 'none');
  });
});
