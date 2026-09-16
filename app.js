// Patro's Policy Parley — front-end logic

document.addEventListener("DOMContentLoaded", () => {
  const dateEl = document.getElementById("topbarDate");
  if (dateEl) {
    dateEl.textContent = new Date().toLocaleDateString("en-IN", {
      weekday: "long", year: "numeric", month: "long", day: "numeric"
    });
  }
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (document.getElementById("articlePage")) {
    renderArticlePage();
  } else {
    renderHomePage();
  }
});

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric", month: "long", day: "numeric"
  });
}

function renderHomePage() {
  renderHero();
  renderTopicsGrid();
  renderArticleGrid();
  renderTagCloud();
}

function renderHero() {
  const featured = window.ARTICLES[0];
  document.getElementById("heroTitle").textContent = featured.title;
  document.getElementById("heroExcerpt").textContent = featured.excerpt;
  document.getElementById("heroMeta").innerHTML =
    `<span>${featured.category}</span>
     <span class="dot">·</span>
     <span>${formatDate(featured.date)}</span>
     <span class="dot">·</span>
     <span>${featured.readTime} read</span>`;
  document.getElementById("heroImage").src = featured.image;
  document.getElementById("heroImage").alt = featured.title;
  document.getElementById("heroLink").href =
    `article.html?id=${encodeURIComponent(featured.id)}`;
}

function renderTopicsGrid() {
  const grid = document.getElementById("topicsGrid");
  if (!grid) return;
  grid.innerHTML = window.TOPICS.map(t => `
    <div class="topic-card">
      <div class="topic-icon">${t.icon}</div>
      <h3>${t.title}</h3>
      <p>${t.desc}</p>
    </div>
  `).join("");
}

function renderArticleGrid() {
  const grid = document.getElementById("articleGrid");
  if (!grid) return;
  grid.innerHTML = window.ARTICLES.map(a => `
    <a class="article-card" href="article.html?id=${encodeURIComponent(a.id)}">
      <div class="article-card-img">
        <img src="${a.image}" alt="${a.title}" loading="lazy" />
      </div>
      <div class="article-card-body">
        <span class="article-card-cat">${a.category}</span>
        <h3>${a.title}</h3>
        <p>${a.excerpt}</p>
        <div class="article-card-meta">
          <span>${a.author}</span>
          <span class="dot">·</span>
          <span>${formatDate(a.date)}</span>
          <span class="dot">·</span>
          <span>${a.readTime}</span>
        </div>
      </div>
    </a>
  `).join("");
}

function renderTagCloud() {
  const cloud = document.getElementById("tagCloud");
  if (!cloud) return;
  const cats = [...new Set(window.ARTICLES.map(a => a.category))];
  cloud.innerHTML = cats.map(c => `<a class="tag" href="#articles">${c}</a>`).join("");
}

function renderArticlePage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const article = window.ARTICLES.find(a => a.id === id) || window.ARTICLES[0];

  const page = document.getElementById("articlePage");
  document.title = `${article.title} — Patro's Policy Parley`;

  page.innerHTML = `
    <div class="article-container">
      <div class="article-header">
        <span class="eyebrow">${article.category}</span>
        <h1>${article.title}</h1>
        <div class="article-byline">
          <div class="author">
            <img src="https://images.unsplash.com/photo-1633332757620-1fd1f9ff0f5b?w=200&q=80" alt="${article.author}" />
            <div>
              <div class="author-name">${article.author}</div>
              <div class="author-meta">${formatDate(article.date)} · ${article.readTime} read</div>
            </div>
          </div>
        </div>
      </div>
      <figure class="article-cover">
        <img src="${article.image}" alt="${article.title}" />
      </figure>
      <div class="article-body">
        ${article.body.map(p => `<p>${p}</p>`).join("")}
      </div>
      <div class="article-footer">
        <p class="article-disclaimer">
          The views expressed in this article are those of the author and do not
          reflect the position of any institution with which he is affiliated.
        </p>
        <div class="article-share">
          <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}" target="_blank" rel="noopener">Share on X</a>
          <a href="mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(article.excerpt)}">Email</a>
          <a href="index.html#articles">← Back to all articles</a>
        </div>
      </div>
    </div>
  `;

  const related = window.ARTICLES.filter(
    a => a.id !== article.id && a.category === article.category
  ).slice(0, 3);

  if (related.length) {
    const wrap = document.getElementById("relatedWrap");
    const grid = document.getElementById("relatedGrid");
    wrap.style.display = "block";
    grid.innerHTML = related.map(a => `
      <a class="article-card" href="article.html?id=${encodeURIComponent(a.id)}">
        <div class="article-card-img">
          <img src="${a.image}" alt="${a.title}" loading="lazy" />
        </div>
        <div class="article-card-body">
          <span class="article-card-cat">${a.category}</span>
          <h3>${a.title}</h3>
          <p>${a.excerpt}</p>
          <div class="article-card-meta">
            <span>${a.author}</span>
            <span class="dot">·</span>
            <span>${formatDate(a.date)}</span>
          </div>
        </div>
      </a>
    `).join("");
  }
}