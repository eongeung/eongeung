function initProjectFilter() {
  const filterButtons = document.querySelectorAll('.filter-buttons button');
  const cards = document.querySelectorAll('.project-card');

  // filter
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const year = button.getAttribute('data-year');

      filterButtons.forEach(b => b.classList.remove('active'));
      button.classList.add('active');

      cards.forEach(card => {
        const cardYear = card.getAttribute('data-year');
        const show = (year === 'all' || cardYear === year);
        card.style.display = show ? 'grid' : 'none';
      });

      // close all details when filtering
      cards.forEach(card => {
        const details = card.querySelector('.details');
        const toggleBtn = card.querySelector('.toggle-btn');
        if (details) details.style.display = 'none';
        if (toggleBtn) toggleBtn.textContent = 'Show details';
      });
    });
  });

  // toggle details (event delegation)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.toggle-btn');
    if (!btn) return;

    const card = btn.closest('.project-card');
    if (!card) return;

    const details = card.querySelector('.details');
    if (!details) return;

    const isOpen = details.style.display === 'block';

    // close others
    cards.forEach(c => {
      const d = c.querySelector('.details');
      const b = c.querySelector('.toggle-btn');
      if (d) d.style.display = 'none';
      if (b) b.textContent = 'Show details';
    });

    // toggle current
    details.style.display = isOpen ? 'none' : 'block';
    btn.textContent = isOpen ? 'Show details' : 'Hide details';
  });
}

// includesLoaded가 있는 환경 + 일반 로드 둘 다 대응
window.addEventListener('includesLoaded', initProjectFilter);
document.addEventListener('DOMContentLoaded', initProjectFilter);
