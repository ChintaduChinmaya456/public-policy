document.addEventListener('DOMContentLoaded', () => {
  const articleList = document.getElementById('article-list');
  const topicButtons = document.querySelectorAll('.topic-btn');
  const searchInput = document.getElementById('search-box');
  const essayCount = document.getElementById('essay-count');

  let activeTopic = 'all';
  let searchQuery = '';

  function renderArticles() {
    const filtered = articles.filter(item => {
      const matchesTopic = activeTopic === 'all' || item.topic === activeTopic;
      const searchableText = [
        item.title,
        item.summary,
        item.topicLabel,
        item.content.replace(/<[^>]*>/g, '')
      ].join(' ').toLowerCase();

      return matchesTopic && searchableText.includes(searchQuery);
    });

    essayCount.textContent = `${filtered.length} ${filtered.length === 1 ? 'essay' : 'essays'}`;

    if (filtered.length === 0) {
      articleList.innerHTML = `
        <div class="empty-state">
          <div class="empty-symbol">∅</div>
          <h3>No essays found</h3>
          <p>Try another keyword or choose a different topic.</p>
        </div>`;
      return;
    }

    articleList.innerHTML = filtered.map((item, index) => `
      <article class="article-card" style="--delay: ${Math.min(index * 60, 420)}ms">
        <div class="article-index">${String(index + 1).padStart(2, '0')}</div>
        <div class="article-card-main">
          <div class="meta-header">
            <span class="meta-topic">${item.topicLabel}</span>
            <span class="meta-dot">•</span>
            <span>${item.date}</span>
            <span class="meta-dot">•</span>
            <span>${item.readingTime}</span>
          </div>
          <h2 class="article-title">
            <a href="article.html?id=${encodeURIComponent(item.id)}">${item.title}</a>
          </h2>
          <p class="article-summary">${item.summary}</p>
          <a class="read-link" href="article.html?id=${encodeURIComponent(item.id)}">
            Read essay <span>↗</span>
          </a>
        </div>
      </article>
    `).join('');
  }

  topicButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      topicButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTopic = btn.getAttribute('data-topic');
      renderArticles();
    });
  });

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderArticles();
  });

  // Press "/" to jump directly to archive search.
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

  // Reveal sections as they enter the viewport.
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.about-section, .essays-section, .article-card').forEach(el => {
    revealObserver.observe(el);
  });

  // Re-observe dynamically rendered cards.
  const listObserver = new MutationObserver(() => {
    document.querySelectorAll('.article-card:not(.observed)').forEach(card => {
      card.classList.add('observed');
      revealObserver.observe(card);
    });
  });
  listObserver.observe(articleList, { childList: true });

  renderArticles();
});
