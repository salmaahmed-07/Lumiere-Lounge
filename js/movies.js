class MoviesApp {
  constructor() {
    this.currentCategory = 'All';
    this.selectedMovieId = null;
    this.init();
  }

  init() {
    this.renderMovies();
    this.setupFilters();
    this.initMobileMenu();
  }

  initMobileMenu() {
    const toggle = document.getElementById('mobile-toggle');
    const nav = document.getElementById('nav-links');
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        toggle.classList.toggle('active');
      });
    }
  }

  setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const category = btn.dataset.category;
        this.currentCategory = category;
        this.renderMovies();
        this.updateTheme(category);
      });
    });
  }

  updateTheme(category) {
    const body = document.body;
    // Remove all theme classes
    body.classList.remove('theme-drama', 'theme-comedy', 'theme-romance', 'theme-sci-fi', 'theme-adventure', 'theme-thriller');
    
    if (category !== 'All') {
      body.classList.add(`theme-${category.toLowerCase()}`);
    }
  }

  renderMovies() {
    const movies = DataService.getMovies();
    const container = document.getElementById('explore-movies-list');
    container.innerHTML = '';
    
    const filteredMovies = this.currentCategory === 'All' 
      ? movies 
      : movies.filter(m => m.genre.includes(this.currentCategory));

    filteredMovies.forEach(movie => {
      const card = document.createElement('div');
      card.className = 'movie-card';
      card.onclick = () => this.selectMovie(movie.id);
      
      card.innerHTML = `
        <img src="${movie.posterUrl}" class="movie-poster" alt="${movie.title}">
        <div class="movie-info">
          <span class="movie-genre" style="color: ${movie.accentColor}">${movie.genre}</span>
          <h3 class="movie-card-title">${movie.title}</h3>
          <div class="movie-meta">
            <span>${movie.runtime}</span>
            <span>${movie.rating}</span>
          </div>
          <div class="movie-card-btn">
            <button class="btn-gold" style="width:100%">View Details</button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });

    if (filteredMovies.length === 0) {
      container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 100px;">No movies found in this category.</p>`;
    }
  }

  selectMovie(id) {
    this.selectedMovieId = id;
    const movie = DataService.getMovieById(id);
    const detailView = document.getElementById('detail-view');
    
    // Populate detail view
    document.getElementById('detail-banner-bg').style.backgroundImage = `url("${movie.coverUrl}")`;
    document.getElementById('detail-poster-img').src = movie.posterUrl;
    document.getElementById('detail-title').innerText = movie.title;
    document.getElementById('detail-runtime').innerText = movie.runtime;
    document.getElementById('detail-genre').innerText = movie.genre;
    document.getElementById('detail-rating').innerText = movie.rating;
    document.getElementById('detail-synopsis').innerText = movie.synopsis;
    
    document.getElementById('detail-director').innerHTML = `<strong>Director:</strong> ${movie.director}`;
    document.getElementById('detail-writer').innerHTML = `<strong>Writer:</strong> ${movie.writer}`;
    document.getElementById('detail-cast').innerHTML = `<strong>Stars:</strong> ${movie.cast.join(', ')}`;
    
    const releaseEl = document.getElementById('detail-release');
    if (movie.status === 'coming-soon' && movie.releaseDate) {
      releaseEl.innerHTML = `<strong>Release Date:</strong> ${movie.releaseDate}`;
      releaseEl.style.display = 'block';
      document.querySelector('.sticky-book-bar').style.display = 'none';
    } else {
      releaseEl.style.display = 'none';
      document.querySelector('.sticky-book-bar').style.display = 'flex';
    }

    // Show modal
    detailView.classList.add('active');
    detailView.style.display = 'block';
    setTimeout(() => detailView.style.opacity = 1, 50);
    document.body.style.overflow = 'hidden';

    document.getElementById('book-now-btn').onclick = () => {
      window.location.href = `index.html#book-${id}`;
    };
  }

  closeDetail() {
    const detailView = document.getElementById('detail-view');
    detailView.style.opacity = 0;
    setTimeout(() => {
      detailView.classList.remove('active');
      detailView.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 500);
  }
}

const moviesApp = new MoviesApp();
