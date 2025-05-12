function toggle(element) {
  const desc = element.querySelector('.description');
  const isOpen = desc.style.display === 'block';
  document.querySelectorAll('.description').forEach(d => d.style.display = 'none');
  desc.style.display = isOpen ? 'none' : 'block';
}