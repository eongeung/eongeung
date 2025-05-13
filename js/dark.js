const btn = document.getElementById('darkModeToggle');
  const body = document.body;

  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    btn.textContent = 'OFF';
  }

  btn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      btn.textContent = 'OFF';
      localStorage.setItem('theme', 'dark');
    } else {
      btn.textContent = 'ON';
      localStorage.setItem('theme', 'light');
    }
});

