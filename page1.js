/* js/calendar.js */

let currentMonth = 3;
let currentYear  = 2026;

const MONTHS = [
  'JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE',
  'JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'
];

const habitDays = { 5:1, 6:1, 8:1, 9:1, 10:1, 12:1, 14:1, 15:1, 16:1, 17:1, 18:1 };
const classDays = { 7:1, 9:1, 14:1, 16:1, 21:1, 23:1, 28:1, 30:1 };

function renderCal() {
  const grid  = document.getElementById('cal-grid');
  const label = document.getElementById('month-label');
  if (!grid || !label) return;

  label.textContent = MONTHS[currentMonth] + ' ' + currentYear;

  const firstDay  = new Date(currentYear, currentMonth, 1).getDay();
  const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

  let html = '';
  for (let i = 0; i < firstDay; i++) html += '<div class="day empty"></div>';
  for (let d = 1; d <= totalDays; d++) {
    let cls = 'day';
    if (d === 27 && currentMonth === 3 && currentYear === 2026) cls += ' today';
    else if (habitDays[d]) cls += ' done';
    else if (classDays[d]) cls += ' has-class';
    html += `<div class="${cls}">${d}</div>`;
  }
  grid.innerHTML = html;
}

function changeMonth(dir) {
  currentMonth += dir;
  if (currentMonth > 11) { currentMonth = 0; currentYear++; }
  if (currentMonth < 0)  { currentMonth = 11; currentYear--; }
  renderCal();
}

document.addEventListener('DOMContentLoaded', renderCal);
