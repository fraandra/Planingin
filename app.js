(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const DEMO_TODAY = '2026-10-23';
  const DATE_FORMAT = new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
  const SHORT_DATE = new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'short' });
  const LONG_DATE = new Intl.DateTimeFormat('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const MONTH_FORMAT = new Intl.DateTimeFormat('id-ID', { month: 'long', year: 'numeric' });
  const getLocalDate = (date = new Date()) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  const parseDate = (value) => value ? new Date(`${value}T12:00:00`) : null;
  const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
  const projectColors = ['#729879', '#b99a59', '#768eb8', '#b67b6e', '#8f82ae', '#8da7a0'];

  const projects = [
    { id: 1, name: 'Planingin refresh', description: 'Menyempurnakan pengalaman produk dan design system.', color: '#739678', symbol: 'P', due_date: '2026-10-31', status: 'On track' },
    { id: 2, name: 'Personal growth', description: 'Belajar teratur, mencatat insight, dan menjaga ritme.', color: '#b99a59', symbol: '✳', due_date: '2026-11-14', status: 'In progress' },
    { id: 3, name: 'Website portfolio', description: 'Merapikan karya, narasi, dan pengalaman personal.', color: '#768eb8', symbol: 'W', due_date: '2026-10-29', status: 'In progress' },
    { id: 4, name: 'Operasional', description: 'Pekerjaan rutin dan koordinasi mingguan.', color: '#b67b6e', symbol: 'O', due_date: '2026-11-07', status: 'On track' }
  ];

  let tasks = [
    { id: 1, title: 'Review brief produk', description: 'Pastikan tujuan dan batas scope sudah jelas.', project_id: 1, due_date: DEMO_TODAY, priority: 'high', status: 'done', completed_at: '2026-10-23', created_at: '2026-10-20' },
    { id: 2, title: 'Rapikan alur onboarding', description: 'Periksa urutan langkah dari registrasi sampai first task.', project_id: 1, due_date: DEMO_TODAY, priority: 'high', status: 'todo', created_at: '2026-10-21' },
    { id: 3, title: 'Kirim update mingguan', description: 'Ringkas progres, hambatan, dan rencana selanjutnya.', project_id: 4, due_date: DEMO_TODAY, priority: 'urgent', status: 'todo', created_at: '2026-10-21' },
    { id: 4, title: 'Audit komponen dashboard', description: 'Cek konsistensi spacing, label, dan focus state.', project_id: 1, due_date: DEMO_TODAY, priority: 'medium', status: 'in_progress', created_at: '2026-10-22' },
    { id: 5, title: 'Uji responsive halaman task', description: 'Uji viewport mobile, tablet, dan desktop.', project_id: 3, due_date: DEMO_TODAY, priority: 'medium', status: 'done', completed_at: '2026-10-23', created_at: '2026-10-19' },
    { id: 6, title: 'Siapkan bahan presentasi', description: 'Susun alur cerita dan pilih tiga contoh utama.', project_id: 2, due_date: '2026-10-24', priority: 'high', status: 'todo', created_at: '2026-10-20' },
    { id: 7, title: 'Finalisasi copy landing page', description: 'Review konsistensi tone dan CTA.', project_id: 1, due_date: '2026-10-25', priority: 'medium', status: 'todo', created_at: '2026-10-20' },
    { id: 8, title: 'Kirim draft portfolio', description: 'Minta masukan sebelum dipublikasikan.', project_id: 3, due_date: '2026-10-27', priority: 'high', status: 'todo', created_at: '2026-10-21' },
    { id: 9, title: 'Review invoice vendor', description: 'Cocokkan rincian biaya dan dokumen pendukung.', project_id: 4, due_date: '2026-10-21', priority: 'high', status: 'todo', created_at: '2026-10-15' },
    { id: 10, title: 'Rapikan catatan riset', description: 'Kelompokkan referensi berdasarkan topik.', project_id: 2, due_date: '2026-10-21', priority: 'low', status: 'done', completed_at: '2026-10-21', created_at: '2026-10-17' },
    { id: 11, title: 'Backup dokumen penting', description: 'Pastikan berkas proyek tersimpan di lokasi yang benar.', project_id: 4, due_date: '2026-10-29', priority: 'low', status: 'todo', created_at: '2026-10-22' },
    { id: 12, title: 'Susun outline konten', description: 'Buat struktur artikel untuk bulan depan.', project_id: 2, due_date: '2026-10-30', priority: 'medium', status: 'todo', created_at: '2026-10-18' },
    { id: 13, title: 'Perbarui dokumentasi API', description: 'Sesuaikan contoh request dengan respons terbaru.', project_id: 1, due_date: '2026-10-24', priority: 'medium', status: 'done', completed_at: '2026-10-22', created_at: '2026-10-16' },
    { id: 14, title: 'Persiapan demo internal', description: 'Siapkan skenario utama dan fallback.', project_id: 4, due_date: '2026-10-26', priority: 'medium', status: 'todo', created_at: '2026-10-22' },
    { id: 15, title: 'Audit aksesibilitas', description: 'Cek keyboard, label, dan kontras dasar.', project_id: 3, due_date: '2026-10-28', priority: 'high', status: 'todo', created_at: '2026-10-20' },
    { id: 16, title: 'Tinjau backlog lama', description: 'Arsipkan item yang tidak lagi relevan.', project_id: 1, due_date: '2026-10-20', priority: 'low', status: 'done', completed_at: '2026-10-20', created_at: '2026-10-13' },
    { id: 17, title: 'Kirim invoice project', description: 'Selesaikan administrasi akhir pekerjaan.', project_id: 4, due_date: '2026-10-19', priority: 'medium', status: 'done', completed_at: '2026-10-19', created_at: '2026-10-13' },
    { id: 18, title: 'Pilih referensi visual', description: 'Kumpulkan referensi layout untuk case study.', project_id: 3, due_date: '2026-10-16', priority: 'low', status: 'done', completed_at: '2026-10-16', created_at: '2026-10-10' },
    { id: 19, title: 'Update checklist QA', description: 'Lengkapi regression checklist.', project_id: 1, due_date: '2026-10-17', priority: 'medium', status: 'done', completed_at: '2026-10-17', created_at: '2026-10-12' },
    { id: 20, title: 'Rapikan aset desain lama', description: 'Arsipkan varian yang tidak lagi digunakan.', project_id: 3, due_date: '2026-10-18', priority: 'low', status: 'todo', deleted: true, created_at: '2026-10-12' }
  ];

  let nextTaskId = 21;
  let nextProjectId = 5;
  let currentPage = 'landing';
  let previewProfile = { name: 'Andra Frakuma', email: 'andra@example.com' };
  let activeTaskFilter = 'all';
  let activeTaskView = 'list';
  let currentCalendar = new Date(2026, 9, 1, 12);
  let selectedCalendarDate = DEMO_TODAY;
  let lastFocusedElement = null;
  let editingTaskId = null;
  const readStoredTheme = () => { try { return localStorage.getItem('planingin-preview-theme') || 'system'; } catch { return 'system'; } };
  let themePreference = readStoredTheme();
  const prefersDark = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  const getProject = (id) => projects.find((project) => project.id === Number(id));
  const projectName = (id) => getProject(id)?.name || 'Tanpa proyek';
  const projectColor = (id) => getProject(id)?.color || '#92998b';
  const priorityLabel = (priority) => ({ urgent: 'Urgent', high: 'Tinggi', medium: 'Sedang', low: 'Rendah' })[priority] || 'Sedang';
  const priorityClass = (priority) => ({ urgent: 'red', high: 'red', medium: 'amber', low: 'green' })[priority] || 'green';
  const formatDate = (value, short = false) => {
    if (!value) return 'Tanpa deadline';
    const date = parseDate(value);
    return (short ? SHORT_DATE : DATE_FORMAT).format(date);
  };
  const dateLabel = (value) => {
    if (!value) return 'Tanpa deadline';
    if (value === DEMO_TODAY) return 'Hari ini';
    const diff = Math.round((parseDate(value) - parseDate(DEMO_TODAY)) / 86400000);
    if (diff === 1) return 'Besok';
    if (diff < 0) return `${Math.abs(diff)} hari lalu`;
    return formatDate(value, true);
  };
  const liveTasks = () => tasks.filter((task) => !task.deleted);
  const openTasks = () => liveTasks().filter((task) => task.status !== 'done');
  const todayTasks = () => liveTasks().filter((task) => task.due_date === DEMO_TODAY).sort((a, b) => priorityRank(b.priority) - priorityRank(a.priority));
  const priorityRank = (priority) => ({ low: 1, medium: 2, high: 3, urgent: 4 })[priority] || 0;
  const taskOrder = (a, b) => {
    if (!a.due_date && b.due_date) return 1;
    if (a.due_date && !b.due_date) return -1;
    return String(a.due_date || '').localeCompare(String(b.due_date || '')) || priorityRank(b.priority) - priorityRank(a.priority);
  };

  function applyTheme(preference, persist = true) {
    themePreference = preference;
    const resolved = preference === 'system' ? (prefersDark?.matches ? 'dark' : 'light') : preference;
    document.documentElement.dataset.theme = resolved;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', resolved === 'dark' ? '#141714' : '#f7f6f1');
    $$('.theme-toggle').forEach((button) => {
      const glyph = $('.theme-glyph', button);
      if (glyph) glyph.textContent = resolved === 'dark' ? '☼' : '◐';
      button.setAttribute('aria-label', `Tema ${resolved === 'dark' ? 'gelap' : 'terang'} aktif. Ganti tema`);
    });
    $$('[data-set-theme]').forEach((button) => button.classList.toggle('active', button.dataset.setTheme === preference));
    if (persist) { try { localStorage.setItem('planingin-preview-theme', preference); } catch { /* Browser privacy settings may disable local storage. */ } }
  }

  function showToast(title, message = '', kind = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast${kind === 'error' ? ' toast-error' : ''}`;
    toast.innerHTML = `<span class="toast-icon">${kind === 'error' ? '!' : '✓'}</span><div><b>${escapeHtml(title)}</b>${message ? `<p>${escapeHtml(message)}</p>` : ''}</div>`;
    $('#toast-region').append(toast);
    window.setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(5px)';
      window.setTimeout(() => toast.remove(), 220);
    }, 3200);
  }

  function openApp(page = 'dashboard') {
    $('#landing-page').classList.add('is-hidden');
    $('#app-page').classList.remove('is-hidden');
    goTo(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function setAuthMode(mode = 'login') {
    const isRegister = mode === 'register';
    $$('[data-auth-tab]').forEach((tab) => {
      const active = tab.dataset.authTab === mode;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
    });
    $$('[data-auth-panel]').forEach((panel) => {
      const active = panel.dataset.authPanel === mode;
      panel.classList.toggle('is-hidden', !active);
      panel.hidden = !active;
    });
    $('#auth-heading').textContent = isRegister ? 'Buat ruang untuk rencanamu.' : 'Selamat datang kembali.';
    $('#register-error').classList.add('is-hidden');
    $('#register-error').textContent = '';
  }

  function openAuth(mode = 'login') {
    $('#landing-page').classList.add('is-hidden');
    $('#app-page').classList.add('is-hidden');
    $('#auth-page').classList.remove('is-hidden');
    setAuthMode(mode);
    currentPage = 'auth';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const focusTarget = mode === 'register' ? $('#register-name') : $('#login-email');
    window.setTimeout(() => focusTarget?.focus(), 60);
  }

  function enterPreview(name, email, message) {
    const cleanedName = String(name || '').trim() || 'Pengguna Demo';
    const cleanedEmail = String(email || '').trim();
    previewProfile = { name: cleanedName, email: cleanedEmail };
    const firstName = cleanedName.split(/\s+/)[0];
    $('.workspace-switcher b').textContent = `${firstName}'s workspace`;
    $('.workspace-switcher small').textContent = 'Static preview';
    $('.workspace-avatar').textContent = firstName.slice(0, 1).toUpperCase();
    $('.profile-avatar-large').textContent = firstName.slice(0, 1).toUpperCase();
    $('.profile-edit b').textContent = cleanedName;
    $('#profile-name').value = cleanedName;
    const profileInputs = $$('.settings-panels input[type="email"]');
    if (profileInputs[0]) profileInputs[0].value = cleanedEmail;
    openApp('dashboard');
    showToast('Workspace demo terbuka', message || 'Mode preview statis aktif. Tidak ada akun sungguhan yang dibuat.');
  }

  function backToLanding() {
    closeMobileSidebar();
    $('#app-page').classList.add('is-hidden');
    $('#auth-page').classList.add('is-hidden');
    $('#landing-page').classList.remove('is-hidden');
    currentPage = 'landing';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const pageNames = { dashboard: 'Overview', tasks: 'Semua tugas', today: 'Hari ini', upcoming: 'Upcoming', calendar: 'Kalender', projects: 'Proyek', insights: 'Insight', completed: 'Selesai', trash: 'Trash', settings: 'Pengaturan' };

  function goTo(page) {
    if (!pageNames[page]) page = 'dashboard';
    currentPage = page;
    $('#landing-page').classList.add('is-hidden');
    $('#app-page').classList.remove('is-hidden');
    $$('.app-view').forEach((view) => view.classList.toggle('is-hidden', view.dataset.page !== page));
    $$('.side-link[data-go]').forEach((link) => link.classList.toggle('active', link.dataset.go === page));
    $('#breadcrumb-current').textContent = pageNames[page];
    closeMobileSidebar();
    renderPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function getTaskRow(task, options = {}) {
    const isDone = task.status === 'done';
    const dateText = task.due_date && task.due_date < DEMO_TODAY && !isDone ? 'Terlambat' : dateLabel(task.due_date);
    const completed = options.completed || false;
    const inTrash = options.trash || false;
    const project = getProject(task.project_id);
    const subline = task.description || (project?.name || 'Personal task');
    return `<div class="task-row${isDone ? ' is-complete' : ''}" data-task-row="${task.id}">
      <button class="task-tick${isDone ? ' is-complete' : ''}" data-toggle-task="${task.id}" type="button" aria-label="${isDone ? 'Tandai belum selesai' : 'Tandai selesai'}: ${escapeHtml(task.title)}" aria-pressed="${isDone}">${isDone ? '✓' : ''}</button>
      <div class="task-row-title">${inTrash ? `<b title="${escapeHtml(task.title)}">${escapeHtml(task.title)}</b>` : `<button class="task-title-button" data-edit-task="${task.id}" type="button" title="Edit tugas"><b title="${escapeHtml(task.title)}">${escapeHtml(task.title)}</b></button>`}<small>${escapeHtml(subline)}</small></div>
      <span class="task-project"><i class="project-color-dot" style="background:${escapeHtml(project?.color || '#92998b')}"></i>${escapeHtml(project?.name || 'Personal')}</span>
      <span class="task-deadline${task.due_date && task.due_date < DEMO_TODAY && !isDone ? ' overdue' : ''}">${escapeHtml(completed && task.completed_at ? formatDate(task.completed_at, true) : dateText)}</span>
      <span class="task-priority"><i class="priority-dot p-${priorityClass(task.priority)}"></i>${escapeHtml(priorityLabel(task.priority))}</span>
      <button class="row-more" type="button" data-task-action="${task.id}" data-action-type="${inTrash ? 'restore' : 'delete'}" aria-label="${inTrash ? 'Pulihkan' : 'Hapus'} ${escapeHtml(task.title)}" title="${inTrash ? 'Pulihkan' : 'Pindahkan ke trash'}">${inTrash ? '↶' : '⌑'}</button>
    </div>`;
  }

  function renderFocusTasks() {
    const items = todayTasks();
    const done = items.filter((task) => task.status === 'done').length;
    const total = items.length;
    const percent = total ? Math.round(done / total * 100) : 0;
    $('#today-completed').textContent = done;
    $('#today-total').textContent = total;
    $('#today-percent').textContent = `${percent}%`;
    $('#today-donut').style.setProperty('--progress', `${percent}%`);
    $('#today-progress-bar').style.width = `${percent}%`;
    $('#focus-encouragement').textContent = total === 0 ? 'Hari ini punya ruang baru untuk direncanakan.' : done === total ? 'Semua tugas hari ini selesai. Ambil jeda.' : done === 0 ? 'Pilih satu tugas kecil untuk memulai.' : 'Kamu sudah mulai. Jaga ritmenya.';
    $('#focus-task-list').innerHTML = items.length ? items.map((task) => getTaskRow(task)).join('') : '<div class="empty-state"><div class="empty-illustration">☀</div><h3>Hari ini masih terbuka.</h3><p>Tambahkan tugas saat kamu siap memulainya.</p><button class="button button-primary" data-add-task type="button">＋ Tambah tugas</button></div>';
    $('#sidebar-open-count').textContent = openTasks().length;
    $('#sidebar-today-count').textContent = items.filter((task) => task.status !== 'done').length;
    $('#sidebar-trash-count').textContent = tasks.filter((task) => task.deleted).length;
    $('#filter-count-all').textContent = liveTasks().length;
  }

  function renderProjectMiniCards() {
    $('#dashboard-projects').innerHTML = projects.slice(0, 4).map((project) => {
      const group = liveTasks().filter((task) => task.project_id === project.id);
      const done = group.filter((task) => task.status === 'done').length;
      const percent = group.length ? Math.round(done / group.length * 100) : 0;
      return `<article class="mini-project-card" data-open-project="${project.id}" tabindex="0" role="button" aria-label="Buka proyek ${escapeHtml(project.name)}"><div class="mini-project-top"><span class="mini-project-icon" style="background:${project.color}20;color:${project.color}">${escapeHtml(project.symbol)}</span><span class="more-dots">···</span></div><h3>${escapeHtml(project.name)}</h3><p>${escapeHtml(project.description)}</p><div class="mini-project-progress"><span>Progress</span><b>${percent}%</b></div><div class="progress-track"><span style="width:${percent}%;background:${project.color}"></span></div></article>`;
    }).join('');
  }

  function renderDashboardUpcoming() {
    const upcoming = openTasks().filter((task) => task.due_date && task.due_date > DEMO_TODAY).sort(taskOrder).slice(0, 3);
    $('#dashboard-upcoming').innerHTML = upcoming.length ? upcoming.map((task) => `<div class="upcoming-item"><i class="upcoming-date-marker"></i><div><b>${escapeHtml(task.title)}</b><small>${escapeHtml(dateLabel(task.due_date))} · ${escapeHtml(projectName(task.project_id))}</small></div></div>`).join('') : '<p class="upcoming-group-empty">Belum ada deadline mendatang.</p>';
  }

  function renderActivities() {
    const activityTasks = liveTasks().filter((task) => task.status === 'done').sort((a, b) => String(b.completed_at || '').localeCompare(String(a.completed_at || ''))).slice(0, 4);
    const icons = ['✓', '↗', '◫', '✳'];
    $('#activity-list').innerHTML = activityTasks.map((task, index) => `<div class="activity-item"><span class="activity-icon">${icons[index % icons.length]}</span><div><p><b>${escapeHtml(task.title)}</b> ditandai selesai</p><small>${escapeHtml(task.completed_at ? dateLabel(task.completed_at) : 'Baru saja')} · ${escapeHtml(projectName(task.project_id))}</small></div></div>`).join('');
  }

  function renderDashboard() {
    renderFocusTasks();
    renderProjectMiniCards();
    renderDashboardUpcoming();
    renderActivities();
    $('#week-completed').textContent = liveTasks().filter((task) => task.status === 'done').length;
  }

  function getTaskPageItems() {
    const search = ($('#task-search')?.value || '').trim().toLowerCase();
    const priority = $('#priority-filter')?.value || 'all';
    return liveTasks().filter((task) => {
      const matchesFilter = activeTaskFilter === 'all'
        || (activeTaskFilter === 'today' && task.due_date === DEMO_TODAY)
        || (activeTaskFilter === 'upcoming' && task.status !== 'done' && task.due_date && task.due_date > DEMO_TODAY)
        || (activeTaskFilter === 'completed' && task.status === 'done');
      const matchesSearch = !search || `${task.title} ${task.description || ''} ${projectName(task.project_id)}`.toLowerCase().includes(search);
      const matchesPriority = priority === 'all' || task.priority === priority;
      return matchesFilter && matchesSearch && matchesPriority;
    }).sort((a, b) => activeTaskFilter === 'completed' ? String(b.completed_at || '').localeCompare(String(a.completed_at || '')) : taskOrder(a, b));
  }

  function renderTaskPage() {
    $$('.task-tab').forEach((tab) => {
      const active = tab.dataset.taskFilter === activeTaskFilter;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
    });
    const items = getTaskPageItems();
    $('#task-result-count').textContent = items.length;
    $('#task-list').innerHTML = items.map((task) => getTaskRow(task)).join('');
    $('#task-list').classList.toggle('is-hidden', activeTaskView === 'board');
    $('.task-list-head').classList.toggle('is-hidden', activeTaskView === 'board');
    $('#kanban-board').classList.toggle('is-hidden', activeTaskView !== 'board');
    $('#task-empty').classList.toggle('is-hidden', items.length > 0);
    if (activeTaskView === 'board') renderKanban(items);
  }

  function renderKanban(items = liveTasks()) {
    const columns = [
      { key: 'todo', label: 'Belum dimulai', color: 'var(--muted)' },
      { key: 'in_progress', label: 'Sedang dikerjakan', color: 'var(--amber)' },
      { key: 'done', label: 'Selesai', color: 'var(--primary)' }
    ];
    $('#kanban-board').innerHTML = columns.map((column) => {
      const group = items.filter((task) => task.status === column.key);
      return `<section class="kanban-column" data-drop-status="${column.key}"><div class="kanban-column-header"><span><i class="priority-dot" style="background:${column.color}"></i>${column.label}</span><small>${group.length}</small></div>${group.map((task) => `<article class="kanban-card" draggable="true" data-drag-task="${task.id}"><b>${escapeHtml(task.title)}</b><p>${escapeHtml(task.description || projectName(task.project_id))}</p><div class="kanban-card-foot"><span class="task-priority"><i class="priority-dot p-${priorityClass(task.priority)}"></i>${escapeHtml(priorityLabel(task.priority))}</span><small>${escapeHtml(task.due_date ? formatDate(task.due_date, true) : 'No deadline')}</small></div></article>`).join('') || '<p class="upcoming-group-empty">Belum ada tugas.</p>'}</section>`;
    }).join('');
  }

  function renderTodayPage() {
    const items = todayTasks();
    const done = items.filter((task) => task.status === 'done').length;
    const percent = items.length ? Math.round(done / items.length * 100) : 0;
    $('#today-page-percent').textContent = `${percent}%`;
    $('#today-page-donut').style.setProperty('--progress', `${percent}%`);
    $('#today-page-count').textContent = `${items.length} TUGAS`;
    $('#today-task-list').innerHTML = items.map((task) => getTaskRow(task)).join('');
    $('#today-empty').classList.toggle('is-hidden', items.length > 0);
  }

  function renderUpcomingPage() {
    const dates = [...new Set(openTasks().filter((task) => task.due_date && task.due_date > DEMO_TODAY).map((task) => task.due_date))].sort();
    const grouped = new Map();
    dates.forEach((date) => grouped.set(date, openTasks().filter((task) => task.due_date === date).sort(taskOrder)));
    $('#upcoming-groups').innerHTML = dates.length ? dates.map((date) => {
      const items = grouped.get(date) || [];
      const parsed = parseDate(date);
      const weekday = new Intl.DateTimeFormat('id-ID', { weekday: 'short' }).format(parsed).replace('.', '').toUpperCase();
      let dayTitle = date === DEMO_TODAY ? 'Hari ini' : date === '2026-10-24' ? 'Besok' : new Intl.DateTimeFormat('id-ID', { weekday: 'long' }).format(parsed);
      return `<section class="upcoming-group"><div class="upcoming-group-heading"><div class="upcoming-group-date"><small>${escapeHtml(weekday)}</small><b>${parsed.getDate()}</b></div><div><h3>${escapeHtml(dayTitle)}</h3><p>${escapeHtml(formatDate(date))} · ${items.length} tugas</p></div></div><div class="upcoming-group-list">${items.map((task) => getTaskRow(task)).join('')}</div></section>`;
    }).join('') : '<div class="empty-state"><div class="empty-illustration">▦</div><h3>Belum ada deadline mendatang.</h3><p>Semua punya waktunya. Tambahkan jadwal saat kamu siap.</p><button class="button button-primary" data-add-task type="button">＋ Tambah tugas</button></div>';
  }

  function renderProjectsPage() {
    const live = liveTasks();
    const activeProjects = projects.filter((project) => project.status !== 'Archived');
    const projectTaskCount = live.filter((task) => task.project_id).length;
    const completionByProject = activeProjects.map((project) => {
      const related = live.filter((task) => task.project_id === project.id);
      const completed = related.filter((task) => task.status === 'done').length;
      return { project, related, completed, percent: related.length ? Math.round(completed / related.length * 100) : 0 };
    });
    const average = completionByProject.length ? Math.round(completionByProject.reduce((sum, item) => sum + item.percent, 0) / completionByProject.length) : 0;
    $('#project-active-count').textContent = activeProjects.length;
    $('#project-task-count').textContent = projectTaskCount;
    $('#project-average').innerHTML = `${average}<small>%</small>`;
    $('#projects-grid').innerHTML = completionByProject.map(({ project, related, completed, percent }) => `<article class="project-card"><div class="project-card-top"><span class="project-card-icon" style="--project-color:${project.color};--project-soft:${project.color}20">${escapeHtml(project.symbol)}</span><span class="project-state">${escapeHtml(project.status.toUpperCase())}</span></div><h3>${escapeHtml(project.name)}</h3><p>${escapeHtml(project.description)}</p><div class="project-card-progress"><div><span>Progress</span><b>${percent}%</b></div><div class="progress-track"><span style="width:${percent}%;background:${project.color}"></span></div></div><div class="project-card-bottom"><span class="project-task-count"><b>${completed}</b> / ${related.length} tugas selesai</span><span class="project-target">Target ${escapeHtml(formatDate(project.due_date, true))}</span></div></article>`).join('') + '<button class="project-card project-create-card" data-add-project type="button"><span class="project-card-icon">＋</span><h3>Proyek berikutnya</h3><p>Buat ruang baru untuk tujuan yang sedang kamu kejar.</p><span class="text-link">Buat proyek <span>↗</span></span></button>';
  }

  function renderCalendar() {
    $('#calendar-month-title').textContent = MONTH_FORMAT.format(currentCalendar);
    const first = new Date(currentCalendar.getFullYear(), currentCalendar.getMonth(), 1, 12);
    const last = new Date(currentCalendar.getFullYear(), currentCalendar.getMonth() + 1, 0, 12);
    const mondayOffset = (first.getDay() + 6) % 7;
    const totalCells = Math.ceil((mondayOffset + last.getDate()) / 7) * 7;
    let html = '';
    for (let cell = 0; cell < totalCells; cell += 1) {
      const day = new Date(first);
      day.setDate(1 - mondayOffset + cell);
      const value = getLocalDate(day);
      const inMonth = day.getMonth() === currentCalendar.getMonth();
      const dayTasks = liveTasks().filter((task) => task.due_date === value).sort((a, b) => priorityRank(b.priority) - priorityRank(a.priority));
      html += `<button class="calendar-cell${inMonth ? '' : ' outside'}${value === DEMO_TODAY ? ' today' : ''}${value === selectedCalendarDate ? ' selected' : ''}" type="button" data-calendar-date="${value}" aria-label="${escapeHtml(LONG_DATE.format(day))}, ${dayTasks.length} tugas"><span class="day-number">${day.getDate()}</span>${dayTasks.slice(0, 2).map((task) => `<span class="calendar-event priority-${task.priority}" title="${escapeHtml(task.title)}">${escapeHtml(task.title)}</span>`).join('')}${dayTasks.length > 2 ? `<span class="calendar-more">+${dayTasks.length - 2} lagi</span>` : ''}</button>`;
    }
    $('#calendar-grid').innerHTML = html;
    renderAgenda();
  }

  function renderAgenda() {
    const selectedDate = parseDate(selectedCalendarDate);
    $('#agenda-title').textContent = selectedDate ? `Agenda · ${new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long' }).format(selectedDate)}` : 'Agenda';
    const items = liveTasks().filter((task) => task.due_date === selectedCalendarDate).sort(taskOrder);
    $('#agenda-list').innerHTML = items.length ? items.map((task) => getTaskRow(task)).join('') : '<div class="agenda-empty">Tidak ada tugas yang dijadwalkan pada tanggal ini.</div>';
  }

  function renderInsights() {
    const counts = [2, 4, 3, 5, 4, 6, 4];
    const max = Math.max(...counts);
    $('#completion-chart').innerHTML = counts.map((count, index) => `<div class="chart-bar${index === 6 ? ' current' : ''}" style="--height:${count / max * 86}%"><b>${count}</b><span style="--height:${count / max * 86}%"></span></div>`).join('');
    $('#insight-completed').textContent = liveTasks().filter((task) => task.status === 'done').length;
    $('#insight-overdue').textContent = openTasks().filter((task) => task.due_date && task.due_date < DEMO_TODAY).length;
  }

  function renderCompleted() {
    const items = liveTasks().filter((task) => task.status === 'done').sort((a, b) => String(b.completed_at || '').localeCompare(String(a.completed_at || '')));
    $('#completed-total').textContent = items.length;
    $('#completed-list').innerHTML = items.map((task) => getTaskRow(task, { completed: true })).join('');
    $('#completed-empty').classList.toggle('is-hidden', items.length > 0);
  }

  function renderTrash() {
    const items = tasks.filter((task) => task.deleted);
    $('#trash-list .task-list').innerHTML = items.map((task) => getTaskRow(task, { trash: true })).join('');
    $('#trash-list').classList.toggle('is-hidden', items.length === 0);
    $('#trash-empty').classList.toggle('is-hidden', items.length > 0);
    $('#empty-trash').disabled = items.length === 0;
  }

  function renderPage(page) {
    if (page === 'dashboard') renderDashboard();
    if (page === 'tasks') renderTaskPage();
    if (page === 'today') renderTodayPage();
    if (page === 'upcoming') renderUpcomingPage();
    if (page === 'projects') renderProjectsPage();
    if (page === 'calendar') renderCalendar();
    if (page === 'insights') renderInsights();
    if (page === 'completed') renderCompleted();
    if (page === 'trash') renderTrash();
    if (page === 'settings') applyTheme(themePreference, false);
  }

  function openTaskModal(taskId = null) {
    lastFocusedElement = document.activeElement;
    editingTaskId = taskId === null ? null : Number(taskId);
    $('#task-form').reset();
    $('#task-form-error').classList.add('is-hidden');
    $('#task-modal-title').textContent = editingTaskId ? 'Edit tugas' : 'Buat tugas baru';
    $('#task-submit').innerHTML = editingTaskId ? 'Simpan perubahan <span>↗</span>' : 'Simpan tugas <span>↗</span>' ;
    const taskToEdit = editingTaskId === null ? null : tasks.find((task) => task.id === editingTaskId);
    $('#new-task-date').value = taskToEdit?.due_date || (currentPage === 'today' || currentPage === 'dashboard' ? DEMO_TODAY : '');
    $('#new-task-title').value = taskToEdit?.title || '';
    $('#new-task-description').value = taskToEdit?.description || '';
    $('#new-task-priority').value = taskToEdit?.priority || 'medium';
    $('#new-task-project').value = taskToEdit?.project_id ? String(taskToEdit.project_id) : '';
    $('#task-form-error').classList.add('is-hidden');
    $('#task-modal-backdrop').classList.remove('is-hidden');
    window.setTimeout(() => $('#new-task-title').focus(), 30);
  }

  function closeTaskModal() {
    $('#task-modal-backdrop').classList.add('is-hidden');
    editingTaskId = null;
    lastFocusedElement?.focus?.();
  }

  function openProjectModal() {
    $('#project-form').reset();
    $('#project-modal-backdrop').classList.remove('is-hidden');
    window.setTimeout(() => $('#new-project-title').focus(), 30);
  }

  function closeProjectModal() {
    $('#project-modal-backdrop').classList.add('is-hidden');
  }

  function updateProjectSelect() {
    const select = $('#new-task-project');
    const current = select.value;
    select.innerHTML = '<option value="">Tanpa proyek</option>' + projects.map((project) => `<option value="${project.id}">${escapeHtml(project.name)}</option>`).join('');
    if ([...select.options].some((option) => option.value === current)) select.value = current;
  }

  function saveNewTask(event) {
    event.preventDefault();
    const title = $('#new-task-title').value.trim();
    const error = $('#task-form-error');
    if (!title) {
      error.textContent = 'Judul tugas wajib diisi.';
      error.classList.remove('is-hidden');
      $('#new-task-title').focus();
      return;
    }
    const date = $('#new-task-date').value;
    if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      error.textContent = 'Tanggal deadline tidak valid.';
      error.classList.remove('is-hidden');
      return;
    }
    const fields = {
      title, description: $('#new-task-description').value.trim(),
      project_id: $('#new-task-project').value ? Number($('#new-task-project').value) : null,
      due_date: date || null, priority: $('#new-task-priority').value
    };
    if (editingTaskId !== null) {
      const task = tasks.find((item) => item.id === editingTaskId);
      if (!task || task.deleted) { closeTaskModal(); showToast('Tugas tidak tersedia', 'Tugas ini tidak lagi dapat diedit.', 'error'); return; }
      Object.assign(task, fields);
      closeTaskModal();
      refreshCurrentAndCounts();
      showToast('Perubahan disimpan', `“${title}” berhasil diperbarui di prototype.`);
      return;
    }
    tasks.unshift({ id: nextTaskId++, ...fields, status: 'todo', created_at: DEMO_TODAY });
    closeTaskModal();
    activeTaskFilter = currentPage === 'today' ? 'today' : 'all';
    if (currentPage === 'tasks') $('#task-search').value = '';
    refreshCurrentAndCounts();
    showToast('Tugas ditambahkan', `“${title}” masuk ke daftar tugas demo.`);
  }

  function saveNewProject(event) {
    event.preventDefault();
    const title = $('#new-project-title').value.trim();
    if (!title) return;
    const color = projectColors[(projects.length) % projectColors.length];
    projects.push({ id: nextProjectId++, name: title, description: $('#new-project-description').value.trim() || 'Deskripsi belum ditambahkan.', color, symbol: title.slice(0, 1).toUpperCase(), due_date: $('#new-project-date').value || null, status: 'In progress' });
    updateProjectSelect();
    closeProjectModal();
    renderProjectsPage();
    showToast('Proyek dibuat', `“${title}” ditambahkan ke workspace demo.`);
  }

  function refreshCurrentAndCounts() {
    renderDashboard();
    renderTaskPage();
    renderTodayPage();
    renderCompleted();
    renderTrash();
    renderProjectsPage();
    renderUpcomingPage();
    renderInsights();
    if (currentPage === 'calendar') renderCalendar();
    else if (currentPage === 'projects') renderProjectsPage();
    else renderPage(currentPage);
  }

  function handleTaskToggle(id) {
    const task = tasks.find((item) => item.id === Number(id));
    if (!task || task.deleted) return;
    if (task.status === 'done') {
      task.status = 'todo';
      task.completed_at = null;
      showToast('Tugas dibuka kembali', 'Status tugas demo diubah menjadi belum selesai.');
    } else {
      task.status = 'done';
      task.completed_at = DEMO_TODAY;
      showToast('Satu langkah selesai', `“${task.title}” ditandai selesai.`);
    }
    refreshCurrentAndCounts();
  }

  function handleTaskAction(id, action) {
    const task = tasks.find((item) => item.id === Number(id));
    if (!task) return;
    if (action === 'restore') {
      task.deleted = false;
      showToast('Tugas dipulihkan', `“${task.title}” kembali ke daftar tugas.`);
    } else {
      if (!window.confirm(`Pindahkan tugas "${task.title}" ke Trash pada prototype ini?`)) return;
      task.deleted = true;
      showToast('Tugas dipindahkan ke Trash', 'Kamu bisa memulihkannya kembali dari menu Trash.');
    }
    refreshCurrentAndCounts();
  }

  function openSearch() {
    lastFocusedElement = document.activeElement;
    $('#search-modal-backdrop').classList.remove('is-hidden');
    $('#global-search').value = '';
    renderCommandResults('');
    window.setTimeout(() => $('#global-search').focus(), 20);
  }

  function closeSearch() {
    $('#search-modal-backdrop').classList.add('is-hidden');
    lastFocusedElement?.focus?.();
  }

  const commandPages = [
    { id: 'dashboard', icon: '◫', label: 'Overview', hint: 'Lihat ringkasan hari ini' },
    { id: 'tasks', icon: '☷', label: 'Semua tugas', hint: 'Cari dan kelola tugas' },
    { id: 'today', icon: '◷', label: 'Hari ini', hint: 'Prioritas hari ini' },
    { id: 'upcoming', icon: '▦', label: 'Upcoming', hint: 'Deadline mendatang' },
    { id: 'calendar', icon: '▣', label: 'Kalender', hint: 'Jadwal dalam sebulan' },
    { id: 'projects', icon: '◇', label: 'Proyek', hint: 'Tujuan yang sedang dikerjakan' },
    { id: 'insights', icon: '⌁', label: 'Insight', hint: 'Pola penyelesaian tugas' },
    { id: 'completed', icon: '✓', label: 'Selesai', hint: 'Tugas yang dituntaskan' },
    { id: 'trash', icon: '⌑', label: 'Trash', hint: 'Pulihkan tugas yang dihapus' },
    { id: 'settings', icon: '⚙', label: 'Pengaturan', hint: 'Preferensi workspace' }
  ];

  function renderCommandResults(query) {
    const cleaned = query.trim().toLowerCase();
    const matchingPages = commandPages.filter((item) => `${item.label} ${item.hint}`.toLowerCase().includes(cleaned));
    const matchingTasks = cleaned ? liveTasks().filter((task) => `${task.title} ${task.description || ''} ${projectName(task.project_id)}`.toLowerCase().includes(cleaned)).slice(0, 4) : [];
    $('#command-results').innerHTML = `${matchingPages.map((item) => `<button data-command-go="${item.id}" type="button"><span>${item.icon}</span><span>${escapeHtml(item.label)}<small style="display:block;font-size:8px;color:var(--muted);margin-top:2px">${escapeHtml(item.hint)}</small></span>${item.id === 'dashboard' ? '<kbd>↵</kbd>' : ''}</button>`).join('')}${matchingTasks.map((task) => `<button data-command-task="${task.id}" type="button"><span>☷</span><span>${escapeHtml(task.title)}<small style="display:block;font-size:8px;color:var(--muted);margin-top:2px">${escapeHtml(projectName(task.project_id))}</small></span><kbd>Tugas</kbd></button>`).join('')}${matchingPages.length + matchingTasks.length ? '' : '<p class="upcoming-group-empty">Tidak ada yang cocok. Coba kata kunci lain.</p>'}`;
  }

  function closeMobileSidebar() {
    $('#app-sidebar').classList.remove('mobile-open');
    $('#sidebar-backdrop').classList.remove('visible');
    $('#mobile-menu').setAttribute('aria-expanded', 'false');
  }

  function openMobileSidebar() {
    $('#app-sidebar').classList.add('mobile-open');
    $('#sidebar-backdrop').classList.add('visible');
    $('#mobile-menu').setAttribute('aria-expanded', 'true');
  }

  // Main click delegation makes the prototype easy to extend.
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const openAuthButton = target.closest('[data-open-auth]');
    if (openAuthButton) { openAuth(openAuthButton.dataset.openAuth); return; }
    const authTab = target.closest('[data-auth-tab], [data-auth-switch]');
    if (authTab) { setAuthMode(authTab.dataset.authTab || authTab.dataset.authSwitch); return; }
    const openAppButton = target.closest('[data-open-app]');
    if (openAppButton) { openApp('dashboard'); return; }
    const backHome = target.closest('[data-back-home], [data-home]');
    if (backHome) {
      if (backHome.hasAttribute('data-back-home')) { backToLanding(); return; }
      if (currentPage !== 'landing') { backToLanding(); return; }
    }
    const goButton = target.closest('[data-go]');
    if (goButton) { goTo(goButton.dataset.go); return; }
    const commandGo = target.closest('[data-command-go]');
    if (commandGo) { closeSearch(); goTo(commandGo.dataset.commandGo); return; }
    const commandTask = target.closest('[data-command-task]');
    if (commandTask) {
      closeSearch();
      goTo('tasks');
      $('#task-search').value = tasks.find((task) => task.id === Number(commandTask.dataset.commandTask))?.title || '';
      renderTaskPage();
      return;
    }
    const addTask = target.closest('[data-add-task]');
    if (addTask) { openTaskModal(); return; }
    const addProject = target.closest('[data-add-project]');
    if (addProject) { openProjectModal(); return; }
    const themeToggle = target.closest('.theme-toggle');
    if (themeToggle) { applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'); return; }
    const setTheme = target.closest('[data-set-theme]');
    if (setTheme) { applyTheme(setTheme.dataset.setTheme); return; }
    const filterButton = target.closest('[data-task-filter]');
    if (filterButton) { activeTaskFilter = filterButton.dataset.taskFilter; renderTaskPage(); return; }
    const viewButton = target.closest('[data-task-view]');
    if (viewButton) {
      activeTaskView = viewButton.dataset.taskView;
      $$('[data-task-view]').forEach((button) => button.classList.toggle('active', button === viewButton));
      renderTaskPage(); return;
    }
    const editTask = target.closest('[data-edit-task]');
    if (editTask) { openTaskModal(editTask.dataset.editTask); return; }
    const toggleTask = target.closest('[data-toggle-task]');
    if (toggleTask) { handleTaskToggle(toggleTask.dataset.toggleTask); return; }
    const taskAction = target.closest('[data-task-action]');
    if (taskAction) { handleTaskAction(taskAction.dataset.taskAction, taskAction.dataset.actionType); return; }
    const projectCard = target.closest('[data-open-project]');
    if (projectCard) { goTo('projects'); showToast('Detail proyek', 'Preview ini menampilkan ringkasan proyek. Halaman detail dapat ditambahkan setelah review.'); return; }
    const calendarCell = target.closest('[data-calendar-date]');
    if (calendarCell) { selectedCalendarDate = calendarCell.dataset.calendarDate; renderCalendar(); return; }
    const dataToast = target.closest('[data-toast]');
    if (dataToast) { showToast('Belum tersedia', dataToast.dataset.toast, 'error'); return; }
    const closeTask = target.closest('[data-close-task-modal], .modal-close');
    if (closeTask) { closeTaskModal(); return; }
    const closeProject = target.closest('[data-close-project-modal], .project-modal-close');
    if (closeProject) { closeProjectModal(); return; }
    if (target.id === 'sidebar-backdrop' || target.closest('.sidebar-close')) { closeMobileSidebar(); return; }
  });

  document.addEventListener('change', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.id === 'priority-filter') renderTaskPage();
    if (target.id === 'insights-period') showToast('Periode diperbarui', 'Visual masih memakai data contoh untuk review UI.');
  });

  $('#task-search').addEventListener('input', renderTaskPage);
  $('#global-search').addEventListener('input', (event) => renderCommandResults(event.target.value));
  $('#task-form').addEventListener('submit', saveNewTask);
  $('#project-form').addEventListener('submit', saveNewProject);
  $('#login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = $('#login-email').value.trim();
    const password = $('#login-password').value;
    if (!email || !password) return;
    enterPreview(email.split('@')[0].replace(/[._-]+/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase()), email,
      'Form masuk berhasil divalidasi di browser. Ini simulasi, bukan autentikasi server.');
    $('#login-password').value = '';
  });
  $('#register-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = $('#register-name').value.trim();
    const email = $('#register-email').value.trim();
    const password = $('#register-password').value;
    const confirmation = $('#register-password-confirm').value;
    const error = $('#register-error');
    if (name.length < 2) {
      error.textContent = 'Masukkan nama minimal 2 karakter.';
      error.classList.remove('is-hidden');
      $('#register-name').focus();
      return;
    }
    if (password.length < 8) {
      error.textContent = 'Kata sandi demo harus memiliki minimal 8 karakter.';
      error.classList.remove('is-hidden');
      $('#register-password').focus();
      return;
    }
    if (password !== confirmation) {
      error.textContent = 'Konfirmasi kata sandi belum cocok.';
      error.classList.remove('is-hidden');
      $('#register-password-confirm').focus();
      return;
    }
    if (!$('#register-consent').checked) {
      error.textContent = 'Centang persetujuan bahwa ini hanya preview statis.';
      error.classList.remove('is-hidden');
      $('#register-consent').focus();
      return;
    }
    $('#register-password').value = '';
    $('#register-password-confirm').value = '';
    enterPreview(name, email, 'Form pendaftaran demo berhasil. Akun tidak dibuat dan kata sandi tidak disimpan.');
  });
  $('#auth-forgot').addEventListener('click', () => showToast('Reset kata sandi demo', 'Pemulihan kata sandi memerlukan backend dan pengiriman email. Fitur ini tidak memproses akun di GitHub Pages.', 'error'));
  $('#search-trigger').addEventListener('click', openSearch);
  $('#mobile-menu').addEventListener('click', openMobileSidebar);
  $('#calendar-prev').addEventListener('click', () => { currentCalendar = new Date(currentCalendar.getFullYear(), currentCalendar.getMonth() - 1, 1, 12); renderCalendar(); });
  $('#calendar-next').addEventListener('click', () => { currentCalendar = new Date(currentCalendar.getFullYear(), currentCalendar.getMonth() + 1, 1, 12); renderCalendar(); });
  $('#calendar-today').addEventListener('click', () => { currentCalendar = new Date(2026, 9, 1, 12); selectedCalendarDate = DEMO_TODAY; renderCalendar(); });
  $('#empty-trash').addEventListener('click', () => {
    const deletedCount = tasks.filter((task) => task.deleted).length;
    if (!deletedCount) return;
    if (!window.confirm('Hapus permanen semua tugas di Trash pada prototype ini?')) return;
    tasks = tasks.filter((task) => !task.deleted);
    refreshCurrentAndCounts();
    showToast('Trash dikosongkan', `${deletedCount} tugas demo dihapus permanen.`);
  });
  $('#save-settings').addEventListener('click', () => {
    const name = $('#profile-name').value.trim();
    if (!name) { showToast('Nama belum diisi', 'Tambahkan nama sebelum menyimpan preferensi.', 'error'); $('#profile-name').focus(); return; }
    $$('.profile-row b').forEach((element) => element.textContent = name);
    $('.dashboard-intro h1').innerHTML = `Pagi, ${escapeHtml(name.split(' ')[0])}<span class="period-dot">.</span>`;
    showToast('Preferensi tersimpan', 'Perubahan profil dan tema berlaku di prototype browser ini.');
  });
  $$('.settings-toggle-row .switch').forEach((button) => button.addEventListener('click', () => {
    const active = button.classList.toggle('active');
    button.setAttribute('aria-checked', String(active));
  }));

  // Drag and drop between Kanban states.
  document.addEventListener('dragstart', (event) => {
    const card = event.target instanceof Element ? event.target.closest('[data-drag-task]') : null;
    if (!card || !event.dataTransfer) return;
    event.dataTransfer.setData('text/plain', card.dataset.dragTask);
    event.dataTransfer.effectAllowed = 'move';
  });
  document.addEventListener('dragover', (event) => {
    const column = event.target instanceof Element ? event.target.closest('[data-drop-status]') : null;
    if (!column) return;
    event.preventDefault();
    column.classList.add('drag-over');
  });
  document.addEventListener('dragleave', (event) => {
    const column = event.target instanceof Element ? event.target.closest('[data-drop-status]') : null;
    if (column && !column.contains(event.relatedTarget)) column.classList.remove('drag-over');
  });
  document.addEventListener('drop', (event) => {
    const column = event.target instanceof Element ? event.target.closest('[data-drop-status]') : null;
    if (!column || !event.dataTransfer) return;
    event.preventDefault();
    column.classList.remove('drag-over');
    const task = tasks.find((item) => item.id === Number(event.dataTransfer.getData('text/plain')));
    if (!task || task.deleted) return;
    task.status = column.dataset.dropStatus;
    task.completed_at = task.status === 'done' ? DEMO_TODAY : null;
    renderTaskPage(); renderDashboard(); renderCompleted(); renderTodayPage(); renderProjectsPage(); renderInsights();
    showToast('Status diperbarui', `“${task.title}” dipindahkan ke ${column.dataset.dropStatus === 'done' ? 'Selesai' : column.dataset.dropStatus === 'todo' ? 'Belum dimulai' : 'Sedang dikerjakan'}.`);
  });

  document.addEventListener('keydown', (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      if ($('#app-page').classList.contains('is-hidden')) openApp('dashboard');
      openSearch();
    }
    if (!event.metaKey && !event.ctrlKey && !event.altKey && event.key.toLowerCase() === 'n' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName) && $('#app-page').classList.contains('is-hidden') === false) {
      event.preventDefault(); openTaskModal();
    }
    if (event.key === 'Escape') {
      if (!$('#task-modal-backdrop').classList.contains('is-hidden')) closeTaskModal();
      if (!$('#project-modal-backdrop').classList.contains('is-hidden')) closeProjectModal();
      if (!$('#search-modal-backdrop').classList.contains('is-hidden')) closeSearch();
      closeMobileSidebar();
    }
    if (event.key === 'Enter' && event.target instanceof Element && event.target.matches('[data-open-project]')) goTo('projects');
  });

  if (prefersDark?.addEventListener) prefersDark.addEventListener('change', () => { if (themePreference === 'system') applyTheme('system', false); });
  $('.marketing-nav .menu-toggle').addEventListener('click', (event) => {
    const nav = $('.marketing-nav');
    const open = nav.classList.toggle('menu-open');
    event.currentTarget.setAttribute('aria-expanded', String(open));
  });
  $$('.marketing-links a').forEach((link) => link.addEventListener('click', () => {
    $('.marketing-nav').classList.remove('menu-open');
    $('.marketing-nav .menu-toggle').setAttribute('aria-expanded', 'false');
  }));

  $('#current-year').textContent = String(new Date().getFullYear());
  $('#auth-year').textContent = String(new Date().getFullYear());
  applyTheme(themePreference, false);
  updateProjectSelect();
  renderDashboard();
  renderTaskPage();
  renderTodayPage();
  renderUpcomingPage();
  renderProjectsPage();
  renderCalendar();
  renderInsights();
  renderCompleted();
  renderTrash();
})();
