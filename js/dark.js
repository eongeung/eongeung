const darkbtn = document.getElementById('darkModeToggle');
  const body = document.body;

  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    darkbtn.textContent = 'OFF';
  } else {
    darkbtn.textContent = 'ON';
  }

  darkbtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      darkbtn.textContent = 'OFF';
      localStorage.setItem('theme', 'dark');
    } else {
      darkbtn.textContent = 'ON';
      localStorage.setItem('theme', 'light');
    }
});

