const initialMovies = [
  {
    id: 'm1',
    title: "Lee Cronin's The Mummy",
    genre: 'Supernatural Horror',
    rating: 'R',
    synopsis: "A journalist's young daughter disappears into the desert without a trace. Eight years later, the broken family is shocked when she is returned to them — but what should be a joyful reunion soon turns into a living nightmare as she begins to transform into something truly horrifying.",
    runtime: '115 min',
    posterUrl: 'imgs/now-movies/Lee Cronin\'s The mummy.jpg',
    coverUrl: 'imgs/now-movies/Lee Cronin\'s The mummy.jpg',
    cast: ['Jack Reynor', 'Laia Costa', 'May Calamawy', 'Natalie Grace', 'Verónica Falcón'],
    director: 'Lee Cronin',
    writer: 'Lee Cronin',
    status: 'now-showing',
    accentColor: '#9b1c1c'
  },
  {
    id: 'm2',
    title: 'Michael Jackson',
    genre: 'Drama, Biography, History, Music',
    rating: 'PG-13',
    synopsis: 'The early life of the famous musician Michael Jackson, known as the King of Pop.',
    runtime: '158 min',
    posterUrl: 'imgs/now-movies/Michael Jackson.webp',
    coverUrl: 'imgs/now-movies/Michael Jackson.webp',
    cast: ['Jaafar Jackson', 'Nia Long', 'Colman Domingo'],
    director: 'Antoine Fuqua',
    writer: 'John Logan',
    status: 'now-showing',
    accentColor: '#1e40af'
  },
  {
    id: 'm3',
    title: 'Project Hail Mary',
    genre: 'Adventure, Comedy, Epic, Sci-Fi',
    rating: 'PG-13',
    synopsis: 'A science teacher wakes up alone on a spaceship. As his memory returns, he uncovers a mission to stop a mysterious substance killing Earth\'s sun and that an unexpected friendship may be the key.',
    runtime: '142 min',
    posterUrl: 'imgs/now-movies/Project Hail Mary.jpg',
    coverUrl: 'imgs/now-movies/Project Hail Mary.jpg',
    cast: ['Ryan Gosling', 'Sandra Hüller', 'James Ortiz'],
    director: 'Phil Lord, Christopher Miller',
    writer: 'Drew Goddard, Andy Weir',
    status: 'now-showing',
    accentColor: '#0369a1'
  },
  {
    id: 'm4',
    title: 'Deep Water',
    genre: 'Horror, Thriller',
    rating: 'R',
    synopsis: 'A group of international passengers on a flight from Los Angeles to Shanghai is forced to make an emergency landing in shark-infested waters. The terrified group must work together and overcome their differences if they hope to escape their sinking plane and the frenzy of sharks drawn to the wreckage.',
    runtime: '115 min',
    posterUrl: 'imgs/now-movies/deep water.jpg',
    coverUrl: 'imgs/now-movies/deep water.jpg',
    cast: ['Aaron Eckhart', 'Ben Kingsley', 'Angus Sampson', 'Lucy Barrett', 'Molly Belle Wright'],
    director: 'Renny Harlin',
    writer: 'Shayne Armstrong, S.P. Krause, Damien Power, Pete Bridges',
    status: 'now-showing',
    accentColor: '#155e75'
  },
  {
    id: 'm5',
    title: 'The Devil Wears Prada 2',
    genre: 'Comedy, Drama',
    rating: 'PG-13',
    synopsis: 'Andy Sachs reunites with Miranda Priestly as they navigate their careers amid the decline of traditional magazine publishing.',
    runtime: '110 min',
    posterUrl: 'imgs/now-movies/the devil wears prada 2.webp',
    coverUrl: 'imgs/now-movies/the devil wears prada 2.webp',
    cast: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt'],
    director: 'David Frankel',
    writer: 'Aline Brosh McKenna, Lauren Weisberger',
    status: 'now-showing',
    accentColor: '#be185d'
  },
  {
    id: 'm6',
    title: 'Dune: Part Three',
    genre: 'Epic, Sci-Fi, Adventure, Action',
    rating: 'PG-13',
    synopsis: 'Set 17 years after the Desert War, Paul Atreides — now the Padishah Emperor of the Known Universe — continues his Holy War. His enemies conspire to assassinate him, including Princess Irulan, the Bene Gesserit, and a Tleilaxu Face Dancer, who deploy a secret weapon: a Ghola of Duncan Idaho designed to destroy Paul from within.',
    runtime: '175 min',
    posterUrl: 'imgs/cs-movies/Dune Part 3.webp',
    coverUrl: 'imgs/cs-movies/Dune Part 3.webp',
    cast: ['Timothée Chalamet', 'Zendaya', 'Florence Pugh', 'Rebecca Ferguson', 'Jason Momoa', 'Robert Pattinson', 'Josh Brolin', 'Javier Bardem', 'Anya Taylor-Joy'],
    director: 'Denis Villeneuve',
    writer: 'Frank Herbert (novel), Jon Spaihts, Denis Villeneuve',
    status: 'coming-soon',
    releaseDate: 'December 18, 2026',
    accentColor: '#a16207'
  },
  {
    id: 'm7',
    title: 'The Backrooms',
    genre: 'Science Fiction, Horror',
    rating: 'R',
    synopsis: 'A therapist becomes entangled in a terrifying case when one of her patients vanishes without explanation — disappearing through a strange doorway in the basement of a furniture showroom into an infinite carpeted maze beyond reality. She must enter the unknown to save him.',
    runtime: '95 min',
    posterUrl: 'imgs/cs-movies/The backrooms.webp',
    coverUrl: 'imgs/cs-movies/The backrooms.webp',
    cast: ['Chiwetel Ejiofor', 'Renate Reinsve', 'Mark Duplass', 'Finn Bennett', 'Lukita Maxwell', 'Avan Jogia'],
    director: 'Kane Parsons',
    writer: 'Will Soodik',
    status: 'coming-soon',
    releaseDate: 'May 29, 2026',
    accentColor: '#3f3f46'
  },
  {
    id: 'm8',
    title: 'Focker-In-Law',
    genre: 'Comedy, Romance',
    rating: 'PG-13',
    synopsis: 'A young man named Henry, son of Greg and Pam Focker, faces family chaos when he decides to marry a strong-willed woman who appears to be his complete mismatch — with the plot revolving around his pending nuptials to Olivia, who definitely rubs Greg the wrong way, putting Jack\'s legendary "Circle of Trust" to the test once again.',
    runtime: '105 min',
    posterUrl: 'imgs/cs-movies/focker in law.webp',
    coverUrl: 'imgs/cs-movies/focker in law.webp',
    cast: ['Robert De Niro', 'Ben Stiller', 'Ariana Grande', 'Owen Wilson', 'Blythe Danner', 'Teri Polo', 'Skyler Gisondo', 'Beanie Feldstein'],
    director: 'John Hamburg',
    writer: 'John Hamburg',
    status: 'coming-soon',
    releaseDate: 'November 25, 2026',
    accentColor: '#15803d'
  },
  {
    id: 'm9',
    title: 'The Batman: Part II',
    genre: 'Action, Adventure, Crime, Drama, Thriller',
    rating: 'R',
    synopsis: "The sequel continues Matt Reeves' grounded take on Gotham, exploring the aftermath of Gotham's collapse and Bruce Wayne's evolving role within the city's epic crime saga.",
    runtime: '160 min',
    posterUrl: 'imgs/cs-movies/the batman part 2.jpg',
    coverUrl: 'imgs/cs-movies/the batman part 2.jpg',
    cast: ['Robert Pattinson', 'Scarlett Johansson', 'Sebastian Stan', 'Jeffrey Wright', 'Andy Serkis', 'Colin Farrell', 'Barry Keoghan'],
    director: 'Matt Reeves',
    writer: 'Matt Reeves, Bill Finger, Bob Kane',
    status: 'coming-soon',
    releaseDate: 'October 1, 2027',
    accentColor: '#111827'
  },
  {
    id: 'm10',
    title: 'Verity',
    genre: 'Suspense, Thriller',
    rating: 'R',
    synopsis: 'A struggling writer is hired as a ghostwriter for renowned author Verity Crawford under mysterious circumstances, but her assignment takes a dark turn after she discovers chilling autobiographical notes. Faced with a series of deadly family secrets, she struggles to separate fiction from reality, while also blurring the lines with Verity\'s husband, Jeremy.',
    runtime: '120 min',
    posterUrl: 'imgs/cs-movies/verity.jpg',
    coverUrl: 'imgs/cs-movies/verity.jpg',
    cast: ['Anne Hathaway', 'Dakota Johnson', 'Josh Hartnett', 'Ismael Cruz Cordova'],
    director: 'Michael Showalter',
    writer: 'Nick Antosca, based on the novel by Colleen Hoover',
    status: 'coming-soon',
    releaseDate: 'October 2, 2026',
    accentColor: '#4c1d95'
  }
];

// Initialize LocalStorage Data
function initializeData() {
  // Always update movies to ensure new images load instead of old broken placeholders
  localStorage.setItem('ll_movies', JSON.stringify(initialMovies));

  
  if (!localStorage.getItem('ll_bookings')) {
    localStorage.setItem('ll_bookings', JSON.stringify([]));
  }

  // Initialize seat maps for movies if not exists
  const seatsData = JSON.parse(localStorage.getItem('ll_seats') || '{}');
  let seatsUpdated = false;
  
  initialMovies.forEach(movie => {
    if (!seatsData[movie.id]) {
      // 8 rows (A-H), 12 cols (1-12)
      seatsData[movie.id] = generateMockSeats();
      seatsUpdated = true;
    }
  });

  if (seatsUpdated) {
    localStorage.setItem('ll_seats', JSON.stringify(seatsData));
  }
}

function generateMockSeats() {
  const layout = [];
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const cols = 12;

  rows.forEach(rowLabel => {
    for (let c = 1; c <= cols; c++) {
      // Create a gap in the middle for an aisle (e.g., between 4 and 5, and 8 and 9, let's just do a simple block for now)
      // Randomly assign some seats as 'taken' (approx 30%)
      const isTaken = Math.random() < 0.3;
      layout.push({
        id: `${rowLabel}${c}`,
        row: rowLabel,
        col: c,
        status: isTaken ? 'taken' : 'available', // 'available', 'taken', 'selected'
        price: rowLabel === 'G' || rowLabel === 'H' ? 45 : 30 // Back rows are premium
      });
    }
  });
  return layout;
}

// Run initialization
initializeData();

// Utility functions for getting data
window.DataService = {
  getMovies: () => JSON.parse(localStorage.getItem('ll_movies')),
  getMovieById: (id) => JSON.parse(localStorage.getItem('ll_movies')).find(m => m.id === id),
  getSeatsForMovie: (movieId) => JSON.parse(localStorage.getItem('ll_seats'))[movieId],
  saveSeatsForMovie: (movieId, seats) => {
    const allSeats = JSON.parse(localStorage.getItem('ll_seats'));
    allSeats[movieId] = seats;
    localStorage.setItem('ll_seats', JSON.stringify(allSeats));
  },
  getBookings: () => JSON.parse(localStorage.getItem('ll_bookings')),
  addBooking: (booking) => {
    const bookings = JSON.parse(localStorage.getItem('ll_bookings'));
    bookings.push({ ...booking, date: new Date().toISOString() });
    localStorage.setItem('ll_bookings', JSON.stringify(bookings));
  }
};
