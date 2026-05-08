class App {
  constructor() {
    this.currentView = 'home';
    this.selectedMovieId = null;
    this.selectedSeats = [];
    this.basePrice = 0;
    
    this.init();
  }

  init() {
    this.playIntro();
    this.renderMovies();
    this.initMobileMenu();

    // Handle deep linking from movies.html
    const hash = window.location.hash;
    if (hash && hash.startsWith('#book-')) {
      const movieId = hash.replace('#book-', '');
      setTimeout(() => this.selectMovie(movieId), 1000); // Wait for data/intro
    }
  }

  playIntro() {
    const intro = document.getElementById('intro-animation');
    if (intro) {
      setTimeout(() => {
        intro.classList.add('open');
        setTimeout(() => { intro.style.display = 'none'; }, 2800);
      }, 2000);
    }
  }

  setupParallax() {
    const heroBg = document.getElementById('hero-parallax');
    window.addEventListener('scroll', () => {
      if (this.currentView === 'home') {
        const scrolled = window.scrollY;
        heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    });
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

  navigate(viewId) {
    // Hide current view
    const currentEl = document.getElementById(`${this.currentView}-view`);
    currentEl.style.opacity = 0;
    
    setTimeout(() => {
      currentEl.classList.remove('active');
      
      // Show new view
      const newEl = document.getElementById(`${viewId}-view`);
      newEl.classList.add('active');
      
      // Small delay for CSS transition to trigger after display:block
      setTimeout(() => {
        newEl.style.opacity = 1;
      }, 50);
      
      this.currentView = viewId;
      window.scrollTo(0, 0);

      // Trigger view-specific logic
      if (viewId === 'seats') {
        this.renderSeats();
      } else if (viewId === 'ticket') {
        this.triggerConfetti();
      }

    }, 500); // 500ms matches the CSS transition time
  }

  renderMovies() {
    const movies = DataService.getMovies();
    const nowShowingContainer = document.getElementById('now-showing-list');
    const comingSoonContainer = document.getElementById('coming-soon-list');
    
    nowShowingContainer.innerHTML = '';
    comingSoonContainer.innerHTML = '';

    movies.forEach(movie => {
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
            <button class="btn-gold" style="width:100%">${movie.status === 'now-showing' ? 'Book Now' : 'View Details'}</button>
          </div>
        </div>
      `;

      if (movie.status === 'now-showing') {
        nowShowingContainer.appendChild(card);
      } else {
        comingSoonContainer.appendChild(card);
      }
    });
  }

  selectMovie(id) {
    this.selectedMovieId = id;
    const movie = DataService.getMovieById(id);
    
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

    // Reset selections
    this.selectedSeats = [];
    
    this.navigate('detail');
  }

  renderSeats() {
    const movie = DataService.getMovieById(this.selectedMovieId);
    document.getElementById('summary-movie-title').innerText = movie.title;
    
    const seats = DataService.getSeatsForMovie(this.selectedMovieId);
    const seatGrid = document.getElementById('seat-grid');
    seatGrid.innerHTML = '';

    seats.forEach((seat, index) => {
      const seatEl = document.createElement('div');
      seatEl.className = `seat ${seat.status}`;
      if (this.selectedSeats.find(s => s.id === seat.id)) {
        seatEl.classList.add('selected');
      }
      seatEl.dataset.seat = seat.id;
      
      // Add gaps for aisles
      if (seat.col === 5) seatEl.style.marginLeft = '20px';
      if (seat.col === 9) seatEl.style.marginLeft = '20px';

      seatEl.onclick = () => {
        if (seat.status === 'taken') return;
        this.toggleSeat(seat, seatEl);
      };

      seatGrid.appendChild(seatEl);
    });

    this.updateSummary();
  }

  toggleSeat(seat, element) {
    const idx = this.selectedSeats.findIndex(s => s.id === seat.id);
    if (idx > -1) {
      this.selectedSeats.splice(idx, 1);
      element.classList.remove('selected');
    } else {
      this.selectedSeats.push(seat);
      element.classList.add('selected');
      
      // Pulse animation
      element.animate([
        { transform: 'scale(1.1)', boxShadow: '0 0 15px rgba(201, 146, 42, 0.6)' },
        { transform: 'scale(1.3)', boxShadow: '0 0 25px rgba(201, 146, 42, 1)' },
        { transform: 'scale(1.1)', boxShadow: '0 0 15px rgba(201, 146, 42, 0.6)' }
      ], { duration: 300, easing: 'ease-out' });
    }
    
    this.updateSummary();
  }

  updateSummary() {
    const count = this.selectedSeats.length;
    const ticketsPrice = this.selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
    const serviceFee = count > 0 ? 5 : 0;
    const total = ticketsPrice + serviceFee;

    document.getElementById('summary-count').innerText = count;
    document.getElementById('summary-tickets-price').innerText = ticketsPrice.toFixed(2);
    document.getElementById('summary-total-price').innerText = total.toFixed(2);
    
    // Also update checkout view total
    document.getElementById('checkout-total-price').innerText = total.toFixed(2);

    const proceedBtn = document.getElementById('proceed-checkout-btn');
    proceedBtn.disabled = count === 0;
  }

  processBooking(e) {
    e.preventDefault();
    
    // Save to LocalStorage
    const movie = DataService.getMovieById(this.selectedMovieId);
    const bookingRef = 'LL-' + Math.floor(Math.random() * 10000);
    
    DataService.addBooking({
      ref: bookingRef,
      movieId: movie.id,
      movieTitle: movie.title,
      seats: this.selectedSeats.map(s => s.id),
      total: document.getElementById('checkout-total-price').innerText
    });

    // Update seat statuses
    const allSeats = DataService.getSeatsForMovie(this.selectedMovieId);
    this.selectedSeats.forEach(sel => {
      const target = allSeats.find(s => s.id === sel.id);
      if (target) target.status = 'taken';
    });
    DataService.saveSeatsForMovie(this.selectedMovieId, allSeats);

    // Populate Ticket View
    document.getElementById('ticket-movie-title').innerText = movie.title;
    document.getElementById('ticket-seats').innerText = this.selectedSeats.map(s => s.id).join(', ');
    document.getElementById('ticket-ref').innerText = bookingRef;

    this.navigate('ticket');
  }

  triggerConfetti() {
    const container = document.getElementById('confetti-container');
    container.innerHTML = '';
    
    const colors = ['#c9922a', '#f0b942', '#ffffff'];
    
    for (let i = 0; i < 100; i++) {
      const conf = document.createElement('div');
      conf.style.position = 'absolute';
      conf.style.width = Math.random() * 8 + 4 + 'px';
      conf.style.height = Math.random() * 4 + 2 + 'px';
      conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      conf.style.top = '-10px';
      conf.style.left = Math.random() * 100 + 'vw';
      conf.style.opacity = Math.random();
      conf.style.transform = `rotate(${Math.random() * 360}deg)`;
      
      container.appendChild(conf);

      // Animate
      const duration = Math.random() * 2000 + 3000;
      conf.animate([
        { transform: `translate3d(0, 0, 0) rotate(0deg)`, opacity: 1 },
        { transform: `translate3d(${Math.random()*200 - 100}px, 100vh, 0) rotate(${Math.random()*720}deg)`, opacity: 0 }
      ], {
        duration: duration,
        easing: 'cubic-bezier(.37,0,.63,1)',
        fill: 'forwards'
      });
    }
  }
}

const app = new App();
