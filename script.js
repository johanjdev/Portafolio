// ===== RELOJ EN TIEMPO REAL =====
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const clockEl = document.getElementById('clock');
  if (clockEl) clockEl.textContent = h + ':' + m;
}

updateClock();
setInterval(updateClock, 1000);

// ===== HOVER EN LINKS DE NAVEGACIÓN =====
document.querySelectorAll('.nav-link:not(.nav-active)').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.borderColor = '#ff00ff44';
    link.style.color = '#ff00ff';
  });
  link.addEventListener('mouseleave', () => {
    link.style.borderColor = 'transparent';
    link.style.color = '#00ffff88';
  });
});

// ===== NAVEGACIÓN ACTIVA AL HACER CLICK =====
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('nav-active'));
    link.classList.add('nav-active');
  });
});

// ===== BOTONES DE MÚSICA =====
const musicBtns = document.querySelectorAll('.music-btn');
musicBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Efecto de click visual
    btn.style.background = '#ff00ff44';
    setTimeout(() => { btn.style.background = ''; }, 200);
  });
});