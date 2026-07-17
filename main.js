const profile = window.PORTFOLIO_PROFILE;

const setText = (id, value) => {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
};

const setContactLink = (id, value) => {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  const isEmail = value.includes("@") && !value.includes(" ");
  element.textContent = value.replace("mailto:", "");
  element.href = isEmail ? `mailto:${value.replace("mailto:", "")}` : "#contact";
};

const createNode = (tag, className, content) => {
  const node = document.createElement(tag);
  if (className) {
    node.className = className;
  }
  if (content) {
    node.textContent = content;
  }
  node.setAttribute("data-animate", "");
  return node;
};

setText("brandName", profile.name);
setText("heroEyebrow", profile.roleLabel);
setText("heroTitle", profile.title);
setText("heroSummary", profile.summary);
setText("brandPromise", profile.brandPromise);
setText("leadershipQuote", profile.quote);
setText("contactHeading", profile.contactHeading);
setText("contactCopy", profile.contactCopy);

const orbitTargets = ["orbitA", "orbitB", "orbitC"];
profile.orbitStats.forEach((item, index) => {
  const slot = document.getElementById(orbitTargets[index]);
  if (!slot) {
    return;
  }
  slot.innerHTML = `<strong>${item.value}</strong><span>${item.label}</span>`;
  slot.setAttribute("data-animate", "");
});

const signals = document.getElementById("heroSignals");
profile.signals.forEach((signal) => {
  const pill = createNode("span", "signal-pill", signal);
  signals.appendChild(pill);
});

const metricsGrid = document.getElementById("metricsGrid");
profile.metrics.forEach((metric) => {
  const card = createNode("article");
  card.innerHTML = `
    <strong>${metric.value}</strong>
    <span class="metric-label">${metric.label}</span>
    <span>${metric.detail}</span>
  `;
  metricsGrid.appendChild(card);
});

const expertiseGrid = document.getElementById("expertiseGrid");
profile.expertise.forEach((item) => {
  const card = createNode("article", "expertise-card");
  card.innerHTML = `
    <span class="expertise-tag">${item.tag}</span>
    <h3>${item.title}</h3>
    <p>${item.summary}</p>
  `;
  expertiseGrid.appendChild(card);
});

const offersGrid = document.getElementById("offersGrid");
profile.offers.forEach((item, index) => {
  const card = createNode("article", "offer-card");
  card.innerHTML = `
    <div class="card-topline">
      <span class="card-index">Offer ${String(index + 1).padStart(2, "0")}</span>
      <span class="card-impact">${item.outcome}</span>
    </div>
    <h3>${item.name}</h3>
    <p>${item.summary}</p>
  `;
  offersGrid.appendChild(card);
});

const achievementsGrid = document.getElementById("achievementsGrid");
profile.achievements.forEach((item, index) => {
  const card = createNode("article", "achievement-card");
  card.innerHTML = `
    <div class="card-topline">
      <span class="card-index">Proof ${String(index + 1).padStart(2, "0")}</span>
      <span class="card-impact">${item.impact}</span>
    </div>
    <h3>${item.title}</h3>
    <p>${item.summary}</p>
  `;
  achievementsGrid.appendChild(card);
});

const principlesGrid = document.getElementById("principlesGrid");
profile.principles.forEach((item) => {
  const card = createNode("article", "principle-card");
  card.innerHTML = `
    <span class="principle-kicker">${item.kicker}</span>
    <h3>${item.name}</h3>
    <p>${item.detail}</p>
  `;
  principlesGrid.appendChild(card);
});

const timeline = document.getElementById("timeline");
profile.timeline.forEach((item) => {
  const card = createNode("article", "timeline-card");
  card.innerHTML = `
    <span class="timeline-year">${item.year}</span>
    <h3>${item.title}</h3>
    <p>${item.detail}</p>
  `;
  timeline.appendChild(card);
});

setContactLink("contactEmail", profile.email);

const linkedIn = document.getElementById("contactLinkedIn");
linkedIn.href = profile.linkedIn;

const github = document.getElementById("contactGitHub");
github.href = profile.github;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.18
  }
);

document.querySelectorAll("[data-animate]").forEach((node) => observer.observe(node));
