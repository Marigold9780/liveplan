const STORAGE_KEY = "liveplan-personal-state-v1";

const marketCatalog = [
  {
    id: "bangdream-mygo-9th-day1",
    source: "BanG Dream!",
    sourceUrl: "https://bang-dream.com/events/mygo_9th",
    sourceLabel: "官方活动页",
    artist: "MyGO!!!!!",
    title: "MyGO!!!!! 9th LIVE「つなぎ目の向こうに」DAY1",
    titleCn: "MyGO!!!!! 第 9 次 Live「在连接点的彼方」DAY1",
    date: "2026-07-18",
    openTime: "16:30",
    startTime: "18:00",
    city: "Yokohama",
    venue: "ぴあアリーナMM",
    image: "https://bang-dream.com/wordpress/wp-content/uploads/2026/04/mygo_9th_0604thum.jpg",
    priceMin: 8800,
    priceMax: 24200,
    ticket: "S席、A席、グッズ付チケット等。具体席种以官方页面为准。",
    deadline: "",
    summary: "MyGO!!!!! 单独公演，横滨两日场。DAY1 适合作为周末行程的前半段。",
    knownInfo: ["官方已公布举办日期与会场", "官方已公布开场 / 开演时间", "票价区间已公开，具体席种请以官方为准"],
    tags: ["少女乐队", "横滨", "两日场"],
  },
  {
    id: "bangdream-mygo-9th-day2",
    source: "BanG Dream!",
    sourceUrl: "https://bang-dream.com/events/mygo_9th",
    sourceLabel: "官方活动页",
    artist: "MyGO!!!!!",
    title: "MyGO!!!!! 9th LIVE「つなぎ目の向こうに」DAY2",
    titleCn: "MyGO!!!!! 第 9 次 Live「在连接点的彼方」DAY2",
    date: "2026-07-19",
    openTime: "16:30",
    startTime: "18:00",
    city: "Yokohama",
    venue: "ぴあアリーナMM",
    image: "https://bang-dream.com/wordpress/wp-content/uploads/2026/04/mygo_9th_0604thum.jpg",
    priceMin: 8800,
    priceMax: 24200,
    ticket: "S席、A席、グッズ付チケット等。具体席种以官方页面为准。",
    deadline: "",
    summary: "MyGO!!!!! 横滨两日场 DAY2。适合和 DAY1 组合成周末远征安排。",
    knownInfo: ["官方已公布举办日期与会场", "官方已公布开场 / 开演时间", "票价区间已公开，具体席种请以官方为准"],
    tags: ["少女乐队", "横滨", "两日场"],
  },
  {
    id: "bangdream-13th-day1",
    source: "BanG Dream!",
    sourceUrl: "https://bang-dream.com/13th-live/",
    sourceLabel: "官方特设页",
    artist: "Poppin'Party",
    title: "BanG Dream! 13th☆LIVE DAY1 : Poppin'Party",
    titleCn: "BanG Dream! 13th☆LIVE DAY1：Poppin'Party",
    date: "2026-10-10",
    openTime: "16:30",
    startTime: "18:00",
    city: "Tokyo",
    venue: "東京ガーデンシアター",
    image: "",
    priceMin: 11000,
    priceMax: 23100,
    ticket: "SS席、S席、グッズ付チケット等。官方页面显示抽选受付信息。",
    deadline: "2026-07-13",
    summary: "BanG Dream! 大型三日公演 DAY1，出演为 Poppin'Party。",
    knownInfo: ["官方已公布举办日期、会场、出演者", "官方已公布开场 / 开演时间", "官方页面显示抽选受付截止日为 2026-07-13"],
    tags: ["东京", "大型公演", "抽选"],
  },
  {
    id: "bangdream-13th-day2",
    source: "BanG Dream!",
    sourceUrl: "https://bang-dream.com/13th-live/",
    sourceLabel: "官方特设页",
    artist: "夢限大みゅーたいぷ",
    title: "BanG Dream! 13th☆LIVE DAY2 : 夢限大みゅーたいぷ",
    titleCn: "BanG Dream! 13th☆LIVE DAY2：夢限大みゅーたいぷ",
    date: "2026-10-11",
    openTime: "16:30",
    startTime: "18:00",
    city: "Tokyo",
    venue: "東京ガーデンシアター",
    image: "",
    priceMin: 11000,
    priceMax: 23100,
    ticket: "SS席、S席、グッズ付チケット等。官方页面显示抽选受付信息。",
    deadline: "2026-07-13",
    summary: "BanG Dream! 大型三日公演 DAY2，出演为 夢限大みゅーたいぷ。",
    knownInfo: ["官方已公布举办日期、会场、出演者", "官方已公布开场 / 开演时间", "官方页面显示抽选受付截止日为 2026-07-13"],
    tags: ["东京", "大型公演", "抽选"],
  },
  {
    id: "bangdream-13th-day3",
    source: "BanG Dream!",
    sourceUrl: "https://bang-dream.com/13th-live/",
    sourceLabel: "官方特设页",
    artist: "RAISE A SUILEN",
    title: "BanG Dream! 13th☆LIVE DAY3 : RAISE A SUILEN",
    titleCn: "BanG Dream! 13th☆LIVE DAY3：RAISE A SUILEN",
    date: "2026-10-12",
    openTime: "16:30",
    startTime: "18:00",
    city: "Tokyo",
    venue: "東京ガーデンシアター",
    image: "",
    priceMin: 11000,
    priceMax: 23100,
    ticket: "SS席、S席、グッズ付チケット等。官方页面显示抽选受付信息。",
    deadline: "2026-07-13",
    summary: "BanG Dream! 大型三日公演 DAY3，出演为 RAISE A SUILEN。",
    knownInfo: ["官方已公布举办日期、会场、出演者", "官方已公布开场 / 开演时间", "官方页面显示抽选受付截止日为 2026-07-13"],
    tags: ["东京", "大型公演", "抽选"],
  },
  {
    id: "bangdream-roselia-lehre-der-rose-day1",
    source: "BanG Dream!",
    sourceUrl: "https://bang-dream.com/events/lehre-der-rose",
    sourceLabel: "官方活动页",
    artist: "Roselia",
    title: "Roselia「Lehre der Rose」DAY1",
    titleCn: "Roselia「Lehre der Rose」纪念 Live DAY1",
    date: "2026-08-29",
    openTime: "16:30",
    startTime: "18:00",
    city: "Tokyo",
    venue: "有明アリーナ",
    image: "",
    priceMin: 11000,
    priceMax: 23100,
    ticket: "票种与受付信息以官方页面为准。",
    deadline: "",
    summary: "Roselia 10 周年 Best Album「Lehre der Rose」发行纪念 Live，DAY1。",
    knownInfo: ["官方活动页已公开两日场", "DAY1：2026年8月29日(土) 开场16:30 / 开演18:00 予定", "会场原文：有明アリーナ"],
    tags: ["东京", "Roselia", "两日场"],
  },
  {
    id: "bangdream-roselia-lehre-der-rose-day2",
    source: "BanG Dream!",
    sourceUrl: "https://bang-dream.com/events/lehre-der-rose",
    sourceLabel: "官方活动页",
    artist: "Roselia",
    title: "Roselia「Lehre der Rose」DAY2",
    titleCn: "Roselia「Lehre der Rose」纪念 Live DAY2",
    date: "2026-08-30",
    openTime: "16:30",
    startTime: "18:00",
    city: "Tokyo",
    venue: "有明アリーナ",
    image: "",
    priceMin: 11000,
    priceMax: 23100,
    ticket: "票种与受付信息以官方页面为准。",
    deadline: "",
    summary: "Roselia 10 周年 Best Album「Lehre der Rose」发行纪念 Live，DAY2。",
    knownInfo: ["官方活动页已公开两日场", "DAY2：2026年8月30日(日) 开场16:30 / 开演18:00 予定", "会场原文：有明アリーナ"],
    tags: ["东京", "Roselia", "两日场"],
  },
  {
    id: "bangdream-ras-howling-ambition",
    source: "BanG Dream!",
    sourceUrl: "https://bang-dream.com/ras_2026_tokyo",
    sourceLabel: "官方活动页",
    artist: "RAISE A SUILEN",
    title: "RAISE A SUILEN LIVE 2026「Boot IGNITION」東京公演",
    titleCn: "RAISE A SUILEN LIVE 2026「Boot IGNITION」东京公演",
    date: "2026-06-18",
    openTime: "17:30",
    startTime: "19:00",
    city: "Tokyo",
    venue: "SGC HALL ARIAKE",
    image: "",
    priceMin: 9900,
    priceMax: 19800,
    ticket: "アリーナスタンディング / スタンド指定席等。具体席种以官方页面为准。",
    deadline: "",
    summary: "RAISE A SUILEN LIVE 2026「Boot IGNITION」东京公演，日期临近，适合优先确认票务与交通。",
    knownInfo: ["官方页面显示东京公演为 2026年6月18日(木)", "开场17:30 / 开演19:00 予定", "会场原文：SGC HALL ARIAKE"],
    tags: ["东京", "SGC HALL ARIAKE", "近期开演"],
  },
];

const defaultState = {
  cart: [],
  plans: {},
  lastSync: "2026-06-08",
};

let state = loadState();
let currentView = "market";
let filters = { search: "", artist: "all", month: "all" };
let activeDetailId = null;

const els = {
  viewTitle: document.querySelector("#viewTitle"),
  lastSyncText: document.querySelector("#lastSyncText"),
  marketSearchInput: document.querySelector("#marketSearchInput"),
  artistFilter: document.querySelector("#artistFilter"),
  monthFilter: document.querySelector("#monthFilter"),
  marketList: document.querySelector("#marketList"),
  cartList: document.querySelector("#cartList"),
  cartStats: document.querySelector("#cartStats"),
  plannerBoard: document.querySelector("#plannerBoard"),
  reminderList: document.querySelector("#reminderList"),
  detailDialog: document.querySelector("#detailDialog"),
  detailContent: document.querySelector("#detailContent"),
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return clone(defaultState);
    return { ...clone(defaultState), ...JSON.parse(raw) };
  } catch {
    return clone(defaultState);
  }
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getLive(id) {
  return marketCatalog.find((live) => live.id === id);
}

function getCartLives() {
  return state.cart.map(getLive).filter(Boolean);
}

function isFollowed(id) {
  return state.cart.includes(id);
}

function ensurePlan(id) {
  state.plans[id] ||= {
    status: "观望中",
    selectedDates: [],
    budget: { ticket: "", travel: "", hotel: "", goods: "" },
    checklist: {
      ticket: false,
      transport: false,
      hotel: false,
      goods: false,
      passport: false,
    },
    memo: "",
  };
  return state.plans[id];
}

function formatDate(value, options = {}) {
  if (!value) return "未公布";
  return new Intl.DateTimeFormat("zh-CN", {
    year: options.short ? undefined : "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: options.weekday ? "short" : undefined,
  }).format(new Date(`${value}T00:00:00`));
}

function formatMonth(value) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
  }).format(new Date(`${value}T00:00:00`));
}

function daysUntil(value) {
  if (!value) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(`${value}T00:00:00`);
  return Math.ceil((target - today) / 86400000);
}

function yen(value) {
  if (!value) return "未公布";
  return `¥${Number(value).toLocaleString("ja-JP")}`;
}

function priceRange(live) {
  if (live.priceMin && live.priceMax && live.priceMin !== live.priceMax) return `${yen(live.priceMin)} - ${yen(live.priceMax)}`;
  if (live.priceMin || live.priceMax) return yen(live.priceMin || live.priceMax);
  return "未公布";
}

function monthKey(value) {
  return value.slice(0, 7);
}

function render() {
  saveState();
  els.lastSyncText.textContent = state.lastSync;
  renderFilters();
  renderMarket();
  renderCart();
  renderPlanner();
  renderReminders();
}

function renderFilters() {
  const artists = [...new Set(marketCatalog.map((live) => live.artist))].sort();
  const months = [...new Set(marketCatalog.map((live) => monthKey(live.date)))].sort();

  const artistValue = els.artistFilter.value || filters.artist;
  const monthValue = els.monthFilter.value || filters.month;
  els.artistFilter.innerHTML = `<option value="all">全部乐队</option>${artists.map((artist) => `<option value="${artist}">${artist}</option>`).join("")}`;
  els.monthFilter.innerHTML = `<option value="all">全部月份</option>${months.map((month) => `<option value="${month}">${month}</option>`).join("")}`;
  els.artistFilter.value = artists.includes(artistValue) ? artistValue : "all";
  els.monthFilter.value = months.includes(monthValue) ? monthValue : "all";
  filters.artist = els.artistFilter.value;
  filters.month = els.monthFilter.value;
}

function filteredMarket() {
  return marketCatalog
    .filter((live) => {
      const haystack = `${live.artist} ${live.title} ${live.titleCn} ${live.city} ${live.venue} ${live.tags.join(" ")}`.toLowerCase();
      const matchesSearch = haystack.includes(filters.search.toLowerCase());
      const matchesArtist = filters.artist === "all" || live.artist === filters.artist;
      const matchesMonth = filters.month === "all" || monthKey(live.date) === filters.month;
      return matchesSearch && matchesArtist && matchesMonth && daysUntil(live.date) >= 0;
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}

function renderMarket() {
  const items = filteredMarket();
  els.marketList.innerHTML = items.length ? items.map((live) => renderLiveRow(live, "market")).join("") : `<div class="empty">没有匹配的 Live</div>`;
}

function renderCart() {
  const items = getCartLives().sort((a, b) => new Date(a.date) - new Date(b.date));
  const totalBudget = items.reduce((sum, live) => {
    const plan = ensurePlan(live.id);
    return sum + Object.values(plan.budget).reduce((inner, value) => inner + (Number(value) || 0), 0);
  }, 0);
  const nextLive = items[0];
  const urgent = items.filter((live) => {
    const left = daysUntil(live.deadline);
    return left !== null && left >= 0 && left <= 21;
  }).length;

  els.cartStats.innerHTML = [
    ["关注中", `${items.length} 场`],
    ["最近 Live", nextLive ? formatDate(nextLive.date, { short: true }) : "暂无"],
    ["三周内截止", `${urgent} 项`],
    ["个人预算", yen(totalBudget)],
  ]
    .map(([label, value]) => `<div class="stat"><span>${label}</span><strong>${value}</strong></div>`)
    .join("");

  els.cartList.innerHTML = items.length ? items.map((live) => renderLiveRow(live, "cart")).join("") : `<div class="empty">还没有关注的 Live。去 Market 里挑一场加入 cart 吧。</div>`;
}

function renderLiveRow(live, mode) {
  const followed = isFollowed(live.id);
  const plan = ensurePlan(live.id);
  const action = followed
    ? `<button class="secondary-button" data-detail="${live.id}">打开规划</button>`
    : `<button class="primary-button" data-follow="${live.id}">关注</button>`;
  const remove = mode === "cart" ? `<button class="text-button danger-text" data-remove="${live.id}">移出</button>` : "";

  return `
    <article class="live-row">
      <button class="cover-button" data-detail="${live.id}" aria-label="查看详情">
        ${renderImage(live)}
      </button>
      <div class="live-main">
        <div class="live-title-line">
          <div>
            <p class="artist">${live.source} · ${live.artist}</p>
            <h3>${live.title}</h3>
            <p class="cn-title">${live.titleCn}</p>
          </div>
          <span class="badge ${followed ? "ok" : "info"}">${followed ? plan.status : "Market"}</span>
        </div>
        <div class="meta-grid">
          <span>日期：${formatDate(live.date, { weekday: true })}</span>
          <span>时间：${live.openTime || "未公布"} / ${live.startTime || "未公布"}</span>
          <span>城市：${live.city}</span>
          <span>会场：${live.venue}</span>
          <span>票价：${priceRange(live)}</span>
          <span>截止：${formatDate(live.deadline)}</span>
        </div>
        <p class="summary">${live.summary}</p>
        <div class="tag-row">${live.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      </div>
      <div class="row-actions">
        <button class="secondary-button" data-detail="${live.id}">详情</button>
        ${action}
        ${remove}
      </div>
    </article>
  `;
}

function renderImage(live) {
  if (!live.image) {
    return `<div class="image-fallback"><span>${live.artist.slice(0, 2)}</span></div>`;
  }
  return `<img src="${live.image}" alt="${live.title}" loading="lazy" data-fallback="${live.artist.slice(0, 2)}" />`;
}

function followLive(id) {
  if (!isFollowed(id)) {
    state.cart.push(id);
    ensurePlan(id);
  }
  render();
}

function removeLive(id) {
  state.cart = state.cart.filter((item) => item !== id);
  render();
}

function switchView(view) {
  currentView = view;
  document.querySelectorAll(".view").forEach((node) => node.classList.remove("active"));
  document.querySelector(`#${view}View`).classList.add("active");
  document.querySelectorAll(".nav-item").forEach((node) => {
    node.classList.toggle("active", node.dataset.view === view);
  });
  els.viewTitle.textContent = {
    market: "Live Market",
    cart: "我的关注",
    planner: "时间规划",
    reminders: "提醒",
  }[view];
}

function openDetail(id) {
  const live = getLive(id);
  if (!live) return;
  activeDetailId = id;
  const followed = isFollowed(id);
  els.detailContent.innerHTML = `
    <section class="detail-hero">
      ${renderImage(live)}
      <div>
        <p class="artist">${live.source} · ${live.artist}</p>
        <h3>${live.title}</h3>
        <p class="cn-title">${live.titleCn}</p>
        <div class="detail-actions">
          ${followed ? `<button class="secondary-button" data-remove="${live.id}">移出关注</button>` : `<button class="primary-button" data-follow="${live.id}">关注</button>`}
          <a class="secondary-button link-button" href="${live.sourceUrl}" target="_blank" rel="noreferrer">${live.sourceLabel}</a>
        </div>
      </div>
    </section>
    <section class="detail-grid">
      ${infoBlock("公开信息", [
        `日期：${formatDate(live.date, { weekday: true })}`,
        `时间：开场 ${live.openTime || "未公布"} / 开演 ${live.startTime || "未公布"}`,
        `城市：${live.city}`,
        `会场：${live.venue}`,
        `票价：${priceRange(live)}`,
        `受付截止：${formatDate(live.deadline)}`,
      ])}
      ${infoBlock("已知说明", live.knownInfo)}
      ${infoBlock("票务备注", [live.ticket])}
    </section>
    ${followed ? renderPlanEditor(live) : `<div class="source-note detail-note"><strong>加入关注后可用</strong><span>加入 cart 后可以选择行程日期、记录预算、勾选准备事项和写决策备注。</span></div>`}
  `;
  els.detailDialog.showModal();
}

function infoBlock(title, items) {
  return `
    <div class="info-block">
      <h4>${title}</h4>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
  `;
}

function renderPlanEditor(live) {
  const plan = ensurePlan(live.id);
  return `
    <section class="plan-editor">
      <div class="panel-header">
        <h4>我的时间规划</h4>
        <select data-plan-status="${live.id}" aria-label="决策状态">
          ${["观望中", "想冲", "已抽选", "已中选", "已买票", "暂不考虑"].map((status) => `<option ${plan.status === status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
      </div>
      ${renderCalendar(live, plan)}
      <div class="planning-grid">
        <div class="info-block">
          <h4>预算拆分</h4>
          ${[
            ["ticket", "票价"],
            ["travel", "交通"],
            ["hotel", "住宿"],
            ["goods", "物贩"],
          ]
            .map(([key, label]) => `<label>${label}<input type="number" min="0" step="1000" value="${plan.budget[key] || ""}" data-budget="${live.id}:${key}" placeholder="JPY" /></label>`)
            .join("")}
        </div>
        <div class="info-block">
          <h4>准备清单</h4>
          ${[
            ["ticket", "票务 / 抽选"],
            ["transport", "交通路线"],
            ["hotel", "住宿候选"],
            ["goods", "物贩预算"],
            ["passport", "证件 / 入场材料"],
          ]
            .map(([key, label]) => `<label class="checkline"><input type="checkbox" ${plan.checklist[key] ? "checked" : ""} data-check="${live.id}:${key}" />${label}</label>`)
            .join("")}
        </div>
      </div>
      <label class="memo-label">
        决策备注
        <textarea data-memo="${live.id}" rows="4" placeholder="为什么想去、预算上限、和其他 Live 的冲突、交通住宿想法">${plan.memo || ""}</textarea>
      </label>
    </section>
  `;
}

function renderCalendar(live, plan) {
  const date = new Date(`${live.date}T00:00:00`);
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const leading = firstDay.getDay();
  const cells = [];

  for (let i = 0; i < leading; i += 1) cells.push(`<span class="calendar-empty"></span>`);
  for (let day = 1; day <= lastDay.getDate(); day += 1) {
    const value = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const classes = ["calendar-day"];
    if (value === live.date) classes.push("live-day");
    if (plan.selectedDates.includes(value)) classes.push("selected");
    cells.push(`<button class="${classes.join(" ")}" data-calendar-day="${live.id}:${value}" type="button"><span>${day}</span></button>`);
  }

  return `
    <div class="calendar-panel">
      <div class="calendar-head">
        <strong>${formatMonth(live.date)}</strong>
        <span>点击任意日期，标记你的请假 / 旅行 / 住宿安排</span>
      </div>
      <div class="weekday-row">${["日", "一", "二", "三", "四", "五", "六"].map((day) => `<span>${day}</span>`).join("")}</div>
      <div class="calendar-grid">${cells.join("")}</div>
    </div>
  `;
}

function toggleCalendarDay(liveId, value) {
  const plan = ensurePlan(liveId);
  plan.selectedDates = plan.selectedDates.includes(value) ? plan.selectedDates.filter((item) => item !== value) : [...plan.selectedDates, value].sort();
  refreshDetailAndViews(liveId);
}

function refreshDetailAndViews(liveId) {
  render();
  if (els.detailDialog.open && activeDetailId === liveId) openDetail(liveId);
}

function renderPlanner() {
  const items = getCartLives().sort((a, b) => new Date(a.date) - new Date(b.date));
  els.plannerBoard.innerHTML = items.length
    ? items
        .map((live) => {
          const plan = ensurePlan(live.id);
          const days = plan.selectedDates.length ? plan.selectedDates.map((day) => formatDate(day, { short: true })).join("、") : "未选择";
          return `
            <article class="planner-row">
              <div class="timeline-date">${formatDate(live.date, { short: true })}</div>
              <div>
                <strong>${live.artist}</strong>
                <p>${live.titleCn}</p>
                <span class="muted">已选行程：${days}</span>
              </div>
              <button class="secondary-button" data-detail="${live.id}">规划</button>
            </article>
          `;
        })
        .join("")
    : `<div class="empty">关注 Live 后，这里会变成你的时间规划板。</div>`;
}

function renderReminders() {
  const items = getCartLives()
    .flatMap((live) => {
      const result = [];
      if (live.deadline) result.push({ live, date: live.deadline, label: "受付截止" });
      result.push({ live, date: live.date, label: "Live 当日" });
      return result;
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  els.reminderList.innerHTML = items.length
    ? items
        .map(({ live, date, label }) => {
          const left = daysUntil(date);
          return `
            <div class="reminder-item">
              <div class="timeline-date">${formatDate(date, { short: true })}</div>
              <div>
                <strong>${label} · ${live.artist}</strong>
                <div class="muted">${live.titleCn} · ${live.venue}</div>
              </div>
              <span class="badge ${left !== null && left <= 14 ? "hot" : "info"}">${left === null ? "未公布" : `${left} 天`}</span>
            </div>
          `;
        })
        .join("")
    : `<div class="empty">关注 Live 后，这里会显示截止和演出提醒。</div>`;
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

els.marketSearchInput.addEventListener("input", (event) => {
  filters.search = event.target.value;
  renderMarket();
});

els.artistFilter.addEventListener("change", (event) => {
  filters.artist = event.target.value;
  renderMarket();
});

els.monthFilter.addEventListener("change", (event) => {
  filters.month = event.target.value;
  renderMarket();
});

document.querySelector("#closeDetailButton").addEventListener("click", () => els.detailDialog.close());

document.querySelector("#syncButton").addEventListener("click", () => {
  state.lastSync = new Date().toISOString().slice(0, 10);
  render();
});

document.querySelector("#exportButton").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "liveplan-personal-cart.json";
  anchor.click();
  URL.revokeObjectURL(url);
});

document.body.addEventListener("click", (event) => {
  const detailId = event.target.closest("[data-detail]")?.dataset.detail;
  if (detailId) openDetail(detailId);

  const followId = event.target.closest("[data-follow]")?.dataset.follow;
  if (followId) {
    followLive(followId);
    if (els.detailDialog.open) openDetail(followId);
  }

  const removeId = event.target.closest("[data-remove]")?.dataset.remove;
  if (removeId) {
    removeLive(removeId);
    if (els.detailDialog.open) openDetail(removeId);
  }

  const calendar = event.target.closest("[data-calendar-day]")?.dataset.calendarDay;
  if (calendar) {
    const [liveId, value] = calendar.split(":");
    toggleCalendarDay(liveId, value);
  }
});

document.body.addEventListener("change", (event) => {
  const statusId = event.target.closest("[data-plan-status]")?.dataset.planStatus;
  if (statusId) {
    ensurePlan(statusId).status = event.target.value;
    refreshDetailAndViews(statusId);
  }

  const budget = event.target.closest("[data-budget]")?.dataset.budget;
  if (budget) {
    const [liveId, key] = budget.split(":");
    ensurePlan(liveId).budget[key] = event.target.value;
    render();
  }

  const check = event.target.closest("[data-check]")?.dataset.check;
  if (check) {
    const [liveId, key] = check.split(":");
    ensurePlan(liveId).checklist[key] = event.target.checked;
    render();
  }
});

document.body.addEventListener("input", (event) => {
  const memoId = event.target.closest("[data-memo]")?.dataset.memo;
  if (memoId) {
    ensurePlan(memoId).memo = event.target.value;
    saveState();
  }
});

document.body.addEventListener(
  "error",
  (event) => {
    if (event.target.tagName !== "IMG") return;
    const fallback = document.createElement("div");
    fallback.className = "image-fallback";
    fallback.innerHTML = `<span>${event.target.dataset.fallback || "LP"}</span>`;
    event.target.replaceWith(fallback);
  },
  true,
);

render();
