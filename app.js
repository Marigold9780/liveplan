const STORAGE_KEY = "liveplan-state-v1";

const defaultState = {
  friends: ["我", "朋友A", "朋友B"],
  lives: [
    {
      id: crypto.randomUUID(),
      artist: "ヨルシカ",
      title: "LIVE TOUR 2026",
      date: "2026-08-22",
      city: "Tokyo",
      venue: "Ariake Arena",
      status: "关注中",
      priority: 5,
      budget: 78000,
      deadline: "2026-06-21",
      link: "https://yorushika.com/",
      notes: "优先关注抽选截止，东京交通住宿需要提前锁。",
      interest: { 我: "想去", 朋友A: "想去", 朋友B: "观望" },
    },
    {
      id: crypto.randomUUID(),
      artist: "ずっと真夜中でいいのに。",
      title: "Premium Live",
      date: "2026-09-05",
      city: "Osaka",
      venue: "Osaka-jo Hall",
      status: "已抽选",
      priority: 4,
      budget: 65000,
      deadline: "2026-06-14",
      link: "https://zutomayo.net/",
      notes: "和关西行程可以合并，结果公布后再定住宿。",
      interest: { 我: "想去", 朋友A: "观望", 朋友B: "想去" },
    },
    {
      id: crypto.randomUUID(),
      artist: "Ado",
      title: "Arena Tour",
      date: "2026-10-11",
      city: "Nagoya",
      venue: "Nippon Gaishi Hall",
      status: "关注中",
      priority: 3,
      budget: 59000,
      deadline: "2026-07-02",
      link: "https://ado-dokidokihimitsukichi-daigakuimo.com/",
      notes: "预算友好，但要确认是否和别的场次冲突。",
      interest: { 我: "观望", 朋友A: "不去", 朋友B: "想去" },
    },
  ],
};

let state = loadState();
let currentView = "dashboard";
let filters = { search: "", status: "all", city: "all" };

const els = {
  viewTitle: document.querySelector("#viewTitle"),
  statsGrid: document.querySelector("#statsGrid"),
  upcomingList: document.querySelector("#upcomingList"),
  priorityList: document.querySelector("#priorityList"),
  liveGrid: document.querySelector("#liveGrid"),
  reminderList: document.querySelector("#reminderList"),
  friendList: document.querySelector("#friendList"),
  interestList: document.querySelector("#interestList"),
  cityFilter: document.querySelector("#cityFilter"),
  statusFilter: document.querySelector("#statusFilter"),
  searchInput: document.querySelector("#searchInput"),
  liveDialog: document.querySelector("#liveDialog"),
  liveForm: document.querySelector("#liveForm"),
  dialogTitle: document.querySelector("#dialogTitle"),
  deleteLiveButton: document.querySelector("#deleteLiveButton"),
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : defaultState;
  } catch {
    return defaultState;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function formatDate(value) {
  if (!value) return "未设置";
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(`${value}T00:00:00`));
}

function formatFullDate(value) {
  if (!value) return "未设置";
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(`${value}T00:00:00`));
}

function daysUntil(value) {
  if (!value) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(`${value}T00:00:00`);
  return Math.ceil((target - today) / 86400000);
}

function yuan(value) {
  if (!value) return "未估算";
  return `¥${Number(value).toLocaleString("ja-JP")}`;
}

function priorityDots(value) {
  return `
    <div class="priority" title="优先级 ${value}">
      ${Array.from({ length: 5 }, (_, index) => `<span class="${index < value ? "active" : ""}"></span>`).join("")}
    </div>
  `;
}

function interestedCount(live) {
  return Object.values(live.interest || {}).filter((value) => value === "想去").length;
}

function reminderBadge(days) {
  if (days === null) return `<span class="badge">未设置</span>`;
  if (days < 0) return `<span class="badge">已过期</span>`;
  if (days <= 7) return `<span class="badge hot">${days} 天</span>`;
  if (days <= 21) return `<span class="badge info">${days} 天</span>`;
  return `<span class="badge">${days} 天</span>`;
}

function switchView(view) {
  currentView = view;
  document.querySelectorAll(".view").forEach((node) => node.classList.remove("active"));
  document.querySelector(`#${view}View`).classList.add("active");
  document.querySelectorAll(".nav-item").forEach((node) => {
    node.classList.toggle("active", node.dataset.view === view);
  });
  els.viewTitle.textContent = {
    dashboard: "总览",
    lives: "Live",
    reminders: "提醒",
    friends: "朋友",
  }[view];
}

function render() {
  saveState();
  renderStats();
  renderCities();
  renderLives();
  renderDashboard();
  renderReminders();
  renderFriends();
}

function renderStats() {
  const openLives = state.lives.filter((live) => live.status !== "放弃").length;
  const ticketed = state.lives.filter((live) => live.status === "中选" || live.status === "已买票").length;
  const urgent = state.lives.filter((live) => {
    const days = daysUntil(live.deadline);
    return days !== null && days >= 0 && days <= 14;
  }).length;
  const budget = state.lives.reduce((sum, live) => sum + (Number(live.budget) || 0), 0);

  els.statsGrid.innerHTML = [
    ["跟进 Live", openLives],
    ["已确定", ticketed],
    ["两周内截止", urgent],
    ["总预算 JPY", `¥${budget.toLocaleString("ja-JP")}`],
  ]
    .map(([label, value]) => `<div class="stat"><span>${label}</span><strong>${value}</strong></div>`)
    .join("");
}

function renderCities() {
  const cities = [...new Set(state.lives.map((live) => live.city).filter(Boolean))].sort();
  const selected = els.cityFilter.value || filters.city;
  els.cityFilter.innerHTML = `<option value="all">全部城市</option>${cities
    .map((city) => `<option value="${city}">${city}</option>`)
    .join("")}`;
  els.cityFilter.value = cities.includes(selected) ? selected : "all";
  filters.city = els.cityFilter.value;
}

function filteredLives() {
  return state.lives
    .filter((live) => {
      const text = `${live.artist} ${live.title} ${live.city} ${live.venue}`.toLowerCase();
      const matchesSearch = text.includes(filters.search.toLowerCase());
      const matchesStatus = filters.status === "all" || live.status === filters.status;
      const matchesCity = filters.city === "all" || live.city === filters.city;
      return matchesSearch && matchesStatus && matchesCity;
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}

function renderLives() {
  const lives = filteredLives();
  els.liveGrid.innerHTML = lives.length
    ? lives.map(renderLiveCard).join("")
    : `<div class="empty">没有匹配的 Live</div>`;
}

function renderLiveCard(live) {
  const deadlineDays = daysUntil(live.deadline);
  return `
    <article class="live-card">
      <div class="live-card-header">
        <div>
          <div class="artist">${live.artist}</div>
          <h3>${live.title}</h3>
        </div>
        <span class="badge ${live.status === "已买票" || live.status === "中选" ? "ok" : ""}">${live.status}</span>
      </div>
      <div class="meta-grid">
        <span>日期：${formatFullDate(live.date)}</span>
        <span>城市：${live.city}</span>
        <span>场馆：${live.venue}</span>
        <span>预算：${yuan(live.budget)}</span>
      </div>
      <div>${priorityDots(Number(live.priority))}</div>
      <div class="interest-row">
        ${state.friends
          .map((name) => {
            const value = live.interest?.[name] || "观望";
            return `<button class="interest-pill ${value === "想去" ? "active" : ""}" data-interest="${live.id}" data-friend="${name}">${name} · ${value}</button>`;
          })
          .join("")}
      </div>
      <div class="muted">截止：${formatFullDate(live.deadline)} ${reminderBadge(deadlineDays)}</div>
      <div class="card-actions">
        ${live.link ? `<a class="small-link" href="${live.link}" target="_blank" rel="noreferrer">官方链接</a>` : "<span></span>"}
        <button class="secondary-button" data-edit="${live.id}">编辑</button>
      </div>
    </article>
  `;
}

function renderDashboard() {
  const upcoming = [...state.lives]
    .filter((live) => live.deadline)
    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
    .slice(0, 5);

  els.upcomingList.innerHTML = upcoming.length
    ? upcoming
        .map(
          (live) => `
          <div class="timeline-item">
            <div class="timeline-date">${formatDate(live.deadline)}</div>
            <div>
              <strong>${live.artist}</strong>
              <div class="muted">${live.title} · ${live.city}</div>
            </div>
            ${reminderBadge(daysUntil(live.deadline))}
          </div>
        `,
        )
        .join("")
    : `<div class="empty">暂无提醒</div>`;

  const priority = [...state.lives]
    .sort((a, b) => b.priority - a.priority || interestedCount(b) - interestedCount(a))
    .slice(0, 5);

  els.priorityList.innerHTML = priority.length
    ? priority
        .map(
          (live) => `
          <div class="rank-item">
            <span class="badge hot">P${live.priority}</span>
            <div>
              <strong>${live.artist}</strong>
              <div class="muted">${live.date} · ${live.city} · ${interestedCount(live)} 人想去</div>
            </div>
            <button class="secondary-button" data-edit="${live.id}">编辑</button>
          </div>
        `,
        )
        .join("")
    : `<div class="empty">暂无 Live</div>`;
}

function renderReminders() {
  const items = [...state.lives]
    .filter((live) => live.deadline)
    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

  els.reminderList.innerHTML = items.length
    ? items
        .map(
          (live) => `
          <div class="reminder-item">
            <div class="timeline-date">${formatDate(live.deadline)}</div>
            <div>
              <strong>${live.artist} · ${live.title}</strong>
              <div class="muted">${live.status} · ${live.city} · ${live.venue}</div>
            </div>
            ${reminderBadge(daysUntil(live.deadline))}
          </div>
        `,
        )
        .join("")
    : `<div class="empty">暂无提醒</div>`;
}

function renderFriends() {
  els.friendList.innerHTML = state.friends
    .map(
      (friend) => `
      <div class="friend-chip">
        <strong>${friend}</strong>
        <button class="icon-button" data-remove-friend="${friend}" title="移除" aria-label="移除">×</button>
      </div>
    `,
    )
    .join("");

  const ranked = [...state.lives].sort((a, b) => interestedCount(b) - interestedCount(a));
  els.interestList.innerHTML = ranked.length
    ? ranked
        .map(
          (live) => `
          <div class="rank-item">
            <span class="badge info">${interestedCount(live)} 人</span>
            <div>
              <strong>${live.artist}</strong>
              <div class="muted">${live.title} · ${live.city}</div>
            </div>
            <button class="secondary-button" data-edit="${live.id}">编辑</button>
          </div>
        `,
        )
        .join("")
    : `<div class="empty">暂无 Live</div>`;
}

function openDialog(live) {
  const isEdit = Boolean(live);
  els.dialogTitle.textContent = isEdit ? "编辑 Live" : "新增 Live";
  els.deleteLiveButton.hidden = !isEdit;
  document.querySelector("#liveIdInput").value = live?.id || "";
  document.querySelector("#artistInput").value = live?.artist || "";
  document.querySelector("#titleInput").value = live?.title || "";
  document.querySelector("#dateInput").value = live?.date || "";
  document.querySelector("#cityInput").value = live?.city || "";
  document.querySelector("#venueInput").value = live?.venue || "";
  document.querySelector("#statusInput").value = live?.status || "关注中";
  document.querySelector("#priorityInput").value = live?.priority || 3;
  document.querySelector("#budgetInput").value = live?.budget || "";
  document.querySelector("#deadlineInput").value = live?.deadline || "";
  document.querySelector("#linkInput").value = live?.link || "";
  document.querySelector("#notesInput").value = live?.notes || "";
  els.liveDialog.showModal();
}

function closeDialog() {
  els.liveDialog.close();
  els.liveForm.reset();
}

function cycleInterest(liveId, friend) {
  const order = ["观望", "想去", "不去"];
  const live = state.lives.find((item) => item.id === liveId);
  if (!live) return;
  live.interest ||= {};
  const current = live.interest[friend] || "观望";
  live.interest[friend] = order[(order.indexOf(current) + 1) % order.length];
  render();
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

document.querySelectorAll("[data-view-jump]").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.viewJump));
});

document.querySelector("#addLiveButton").addEventListener("click", () => openDialog());
document.querySelector("#closeDialogButton").addEventListener("click", closeDialog);
document.querySelector("#cancelDialogButton").addEventListener("click", closeDialog);

els.liveForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = document.querySelector("#liveIdInput").value || crypto.randomUUID();
  const existing = state.lives.find((live) => live.id === id);
  const live = {
    id,
    artist: document.querySelector("#artistInput").value.trim(),
    title: document.querySelector("#titleInput").value.trim(),
    date: document.querySelector("#dateInput").value,
    city: document.querySelector("#cityInput").value.trim(),
    venue: document.querySelector("#venueInput").value.trim(),
    status: document.querySelector("#statusInput").value,
    priority: Number(document.querySelector("#priorityInput").value),
    budget: Number(document.querySelector("#budgetInput").value) || 0,
    deadline: document.querySelector("#deadlineInput").value,
    link: document.querySelector("#linkInput").value.trim(),
    notes: document.querySelector("#notesInput").value.trim(),
    interest: existing?.interest || Object.fromEntries(state.friends.map((friend) => [friend, "观望"])),
  };

  if (existing) {
    Object.assign(existing, live);
  } else {
    state.lives.push(live);
  }

  closeDialog();
  render();
});

els.deleteLiveButton.addEventListener("click", () => {
  const id = document.querySelector("#liveIdInput").value;
  state.lives = state.lives.filter((live) => live.id !== id);
  closeDialog();
  render();
});

document.body.addEventListener("click", (event) => {
  const editId = event.target.closest("[data-edit]")?.dataset.edit;
  if (editId) openDialog(state.lives.find((live) => live.id === editId));

  const interestButton = event.target.closest("[data-interest]");
  if (interestButton) cycleInterest(interestButton.dataset.interest, interestButton.dataset.friend);

  const friend = event.target.closest("[data-remove-friend]")?.dataset.removeFriend;
  if (friend) {
    state.friends = state.friends.filter((name) => name !== friend);
    state.lives.forEach((live) => {
      if (live.interest) delete live.interest[friend];
    });
    render();
  }
});

document.querySelector("#friendForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#friendNameInput");
  const name = input.value.trim();
  if (name && !state.friends.includes(name)) {
    state.friends.push(name);
    state.lives.forEach((live) => {
      live.interest ||= {};
      live.interest[name] = "观望";
    });
    input.value = "";
    render();
  }
});

els.searchInput.addEventListener("input", (event) => {
  filters.search = event.target.value;
  renderLives();
});

els.statusFilter.addEventListener("change", (event) => {
  filters.status = event.target.value;
  renderLives();
});

els.cityFilter.addEventListener("change", (event) => {
  filters.city = event.target.value;
  renderLives();
});

document.querySelector("#exportButton").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "liveplan-data.json";
  anchor.click();
  URL.revokeObjectURL(url);
});

render();
