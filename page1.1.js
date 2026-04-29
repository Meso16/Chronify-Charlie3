/* js/habits.js */

let habitStates = [true, true, true, false, false];

function toggleHabit(i) {
  habitStates[i] = !habitStates[i];
  const el = document.getElementById('h' + i);
  if (!el) return;
  el.classList.toggle('checked', habitStates[i]);
  updateProgress();
}

function updateProgress() {
  const done  = habitStates.filter(Boolean).length;
  const total = habitStates.length;
  const pct   = Math.round(done / total * 100);

  document.getElementById('stat-done').textContent    = done + '/' + total;
  document.getElementById('habit-bar').style.width    = pct + '%';
  document.getElementById('progress-text').textContent = done + ' of ' + total + ' done';
  document.getElementById('progress-pct').textContent  = pct + '%';
}
