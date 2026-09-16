document.addEventListener('DOMContentLoaded', () => {
  const TOPICS = [
    'history', 'geography', 'polity', 'diplomacy', 'philosophy',
    'culture', 'society', 'ethics', 'governance', 'books', 'literature', 'misc'
  ];

  const topicsSection = document.getElementById('topics');
  const searchInput = document.getElementById('search-box');
  const essayCount = document.getElementById('essay-count');
  const globalEmptyState = document.getElementById('global-empty-state');
  const topicNavLinks = document.querySelectorAll('.topic-nav .topic-btn');

  // Cache each topic's group element + grid container up front.
  const topicRefs = {};
  TOPICS.forEach(topic => {
    const groupEl = document.getElementById(`topic-${topic}`);
    if (!groupEl) return;
    topicRefs[topic] = {
      groupEl,
      grid: groupEl.querySelector('.article-grid')
    };
  });

  let searchQuery = '';

  function cardTemplate(item, indexInTopic) {
    return `
      <article class="article-card" style="--delay: ${Math.min(indexInTopic * 60, 420)}ms">
        <div class="article-index">${String(indexInTopic + 1).padStart(2, '0')}</div>
        <div class="article-card-main">
        ${item.image ? `<img class="article-thumb" src="${item.image}" alt="${item.imageAlt || ''}">` : ''}
          <div class="meta-header">
            <span class="meta-topic">${item.topicLabel}</span>
            <span class="meta-dot">•</span>
            <span>${item.date}</span>
            <span class="meta-dot">•</span>
            <span>${item.readingTime}</span>
          </div>
          <h4 class="article-title">
            <a href="article.html?id=${encodeURIComponent(item.id)}">${item.title}</a>
          </h4>
          <p class="article-summary">${item.summary}</p>
          <a class="read-link" href="article.html?id=${encodeURIComponent(item.id)}">
            Read essay <span>↗</span>
          </a>
        </div>
      </article>`;
  }

  function matchesSearch(item) {
    if (!searchQuery) return true;
    const haystack = [
      item.title,
      item.summary,
      item.topicLabel,
      item.content.replace(/<[^>]*>/g, '')
    ].join(' ').toLowerCase();
    return haystack.includes(searchQuery);
  }

  function renderArticles() {
    const filtered = articles.filter(matchesSearch);

    // Group filtered results by topic.
    const byTopic = {};
    TOPICS.forEach(t => { byTopic[t] = []; });
    filtered.forEach(item => {
      if (byTopic[item.topic]) byTopic[item.topic].push(item);
    });

    essayCount.textContent = `${filtered.length} ${filtered.length === 1 ? 'essay' : 'essays'}`;

    let anyVisible = false;

    TOPICS.forEach(topic => {
      const ref = topicRefs[topic];
      if (!ref) return;
      const items = byTopic[topic];

      if (items.length === 0) {
        ref.groupEl.hidden = true;
        ref.grid.innerHTML = '';
        return;
      }

      anyVisible = true;
      ref.groupEl.hidden = false;
      ref.grid.innerHTML = items.map((item, i) => cardTemplate(item, i)).join('');
    });

    if (globalEmptyState) {
      globalEmptyState.hidden = anyVisible;
    }
  }

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderArticles();
  });

  // Press "/" to jump to search; Escape to clear it.
  document.addEventListener('keydown', (e) => {
    const tag = document.activeElement.tagName.toLowerCase();
    if (e.key === '/' && tag !== 'input' && tag !== 'textarea') {
      e.preventDefault();
      searchInput.focus();
    }
    if (e.key === 'Escape' && document.activeElement === searchInput) {
      searchInput.value = '';
      searchQuery = '';
      searchInput.blur();
      renderArticles();
    }
  });

  // Reveal sections/cards as they enter the viewport.
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.about-section, .essays-section').forEach(el => {
    revealObserver.observe(el);
  });

  function observeNewCards() {
    document.querySelectorAll('.article-card:not(.observed)').forEach(card => {
      card.classList.add('observed');
      revealObserver.observe(card);
    });
  }

  // Watch the whole topics section once, instead of one observer per grid.
  const listObserver = new MutationObserver(observeNewCards);
  if (topicsSection) {
    listObserver.observe(topicsSection, { childList: true, subtree: true });
  }

  // Scrollspy: highlight the jump-nav pill for the section in view.
  if (topicNavLinks.length) {
    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const link = document.querySelector(`.topic-nav a[href="#${entry.target.id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
          topicNavLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

    TOPICS.forEach(topic => {
      const ref = topicRefs[topic];
      if (ref) spyObserver.observe(ref.groupEl);
    });
  }

  renderArticles();
});
