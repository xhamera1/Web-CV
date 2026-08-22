(function () {
    'use strict';

    const TAG_LABELS = Object.fromEntries(
        PROJECT_CATEGORIES.filter((c) => c.id !== 'all').map((c) => [c.id, c.label])
    );

    function getCategoryCount(categoryId) {
        if (categoryId === 'all') return PROJECTS.length;
        return PROJECTS.filter((p) => p.tags.includes(categoryId)).length;
    }

    function getTagLabel(tagId) {
        return TAG_LABELS[tagId] || tagId;
    }

    function projectMatchesFilter(project, filter) {
        if (filter === 'all') return true;
        return project.tags.includes(filter);
    }

    function createProjectCard(project, options = {}) {
        const featured = options.featured || false;
        const card = document.createElement('article');
        card.className = 'project-card' + (featured ? ' project-card--featured' : '');
        card.dataset.projectId = project.id;
        card.dataset.tags = project.tags.join(' ');

        const tagsHtml = project.tags
            .map((tag) => `<span class="project-tag">${getTagLabel(tag)}</span>`)
            .join('');

        card.innerHTML = `
            <div class="project-card-header">
                <h3>${project.title}</h3>
            </div>
            <p>${project.description}</p>
            <div class="project-tag-list">${tagsHtml}</div>
            <p class="project-card-tech"><strong>Technologies:</strong> ${project.techSummary}</p>
            <div class="project-card-footer">
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
                    View on GitHub
                </a>
            </div>
        `;

        return card;
    }

    function renderFeatured(container) {
        if (!container) return;
        container.innerHTML = '';
        const featured = PROJECTS.filter((p) => p.featured);
        featured.forEach((project) => {
            container.appendChild(createProjectCard(project, { featured: true }));
        });
    }

    function renderAllProjects(container, filter) {
        if (!container) return;
        container.innerHTML = '';
        let visibleCount = 0;

        PROJECTS.forEach((project) => {
            const card = createProjectCard(project);
            if (!projectMatchesFilter(project, filter)) {
                card.classList.add('is-hidden');
            } else {
                visibleCount += 1;
            }
            container.appendChild(card);
        });

        const noResults = document.getElementById('projects-no-results');
        if (noResults) {
            noResults.classList.toggle('is-visible', visibleCount === 0);
        }

        const countEl = document.getElementById('projects-visible-count');
        if (countEl) {
            countEl.textContent = String(visibleCount);
        }
    }

    function applyFilter(filter, options = {}) {
        const { updateButtons = true, updateUrl = false } = options;

        document.querySelectorAll('.filter-btn[data-filter]').forEach((btn) => {
            btn.classList.toggle('is-active', btn.dataset.filter === filter);
        });

        document.querySelectorAll('.category-nav-card[data-filter]').forEach((link) => {
            link.classList.toggle('is-active', link.dataset.filter === filter);
        });

        const grid = document.getElementById('projects-all-grid');
        if (grid) {
            grid.querySelectorAll('.project-card').forEach((card) => {
                const tags = (card.dataset.tags || '').split(' ');
                const visible = filter === 'all' || tags.includes(filter);
                card.classList.toggle('is-hidden', !visible);
            });

            const visibleCount = grid.querySelectorAll('.project-card:not(.is-hidden)').length;
            const noResults = document.getElementById('projects-no-results');
            if (noResults) {
                noResults.classList.toggle('is-visible', visibleCount === 0);
            }

            const countEl = document.getElementById('projects-visible-count');
            if (countEl) {
                countEl.textContent = String(visibleCount);
            }
        } else {
            renderAllProjects(document.getElementById('projects-all-grid'), filter);
        }

        if (updateUrl && window.history && window.history.replaceState) {
            const url = new URL(window.location.href);
            if (filter === 'all') {
                url.searchParams.delete('category');
            } else {
                url.searchParams.set('category', filter);
            }
            window.history.replaceState({}, '', url);
        }
    }

    function renderCategoryNav(container, navConfig) {
        if (!container) return;
        const { hubPath = 'projects.html', categoryPrefix = 'projects/' } = navConfig || {};
        container.innerHTML = '';

        PROJECT_CATEGORIES.forEach((category) => {
            if (category.id === 'all') return;

            const count = getCategoryCount(category.id);
            const pageFile = CATEGORY_PAGE_FILES[category.id];
            const link = document.createElement('a');
            link.className = 'category-nav-card';
            link.dataset.filter = category.id;
            link.href = pageFile
                ? `${categoryPrefix}${pageFile}`
                : `${hubPath}?category=${category.id}`;
            link.innerHTML = `
                <span class="cat-icon">${category.icon}</span>
                <span>${category.label}</span>
                <span class="cat-count">${count} projects</span>
            `;
            container.appendChild(link);
        });
    }

    function renderFilterBar(container) {
        if (!container) return;
        container.innerHTML = '';

        PROJECT_CATEGORIES.forEach((category) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'filter-btn';
            btn.dataset.filter = category.id;
            btn.textContent = category.label;
            btn.addEventListener('click', () => applyFilter(category.id, { updateUrl: true }));
            container.appendChild(btn);
        });
    }

    function initProjectsPage(config) {
        const {
            showFeatured = true,
            defaultFilter = 'all',
            hubPath = 'projects.html',
            categoryPrefix = 'projects/',
            pageTitle = null,
            pageSubtitle = null,
            scrollOnFilter = true
        } = config;

        if (pageTitle) {
            document.title = `${pageTitle} - Patryk Chamera`;
            const titleEl = document.getElementById('projects-page-title');
            if (titleEl) titleEl.textContent = pageTitle;
        }

        if (pageSubtitle) {
            const subtitleEl = document.getElementById('projects-page-subtitle');
            if (subtitleEl) subtitleEl.textContent = pageSubtitle;
        }

        const categoryNav = document.getElementById('category-nav');
        renderCategoryNav(categoryNav, { hubPath, categoryPrefix });

        const filterBar = document.getElementById('filter-bar');
        renderFilterBar(filterBar);

        if (showFeatured) {
            renderFeatured(document.getElementById('projects-featured-grid'));
        } else {
            const featuredSection = document.getElementById('featured-section');
            if (featuredSection) featuredSection.hidden = true;
        }

        const allGrid = document.getElementById('projects-all-grid');
        renderAllProjects(allGrid, defaultFilter);

        const urlFilter = new URLSearchParams(window.location.search).get('category');
        const initialFilter = urlFilter && PROJECT_CATEGORIES.some((c) => c.id === urlFilter)
            ? urlFilter
            : defaultFilter;

        applyFilter(initialFilter);

        if (scrollOnFilter && initialFilter !== 'all') {
            const allSection = document.getElementById('all-projects-section');
            if (allSection) {
                allSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        const badge = document.getElementById('category-page-badge');
        if (badge && defaultFilter !== 'all') {
            const category = PROJECT_CATEGORIES.find((c) => c.id === defaultFilter);
            if (category) {
                badge.textContent = category.label;
                badge.hidden = false;
            }
        }
    }

    const CATEGORY_PAGE_FILES = {
        'ai-ml': 'ai-ml.html',
        python: 'python.html',
        java: 'java.html',
        csharp: 'csharp.html',
        web: 'web.html',
        'computer-vision': 'computer-vision.html',
        'reinforcement-learning': 'reinforcement-learning.html',
        collaborative: 'collaborative.html'
    };

    window.initProjectsPage = initProjectsPage;
})();
