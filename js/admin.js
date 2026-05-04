class AdminApp {
  constructor() {
    this.init();
  }

  init() {
    this.refreshData();
  }

  refreshData() {
    const bookings = DataService.getBookings();
    const movies = DataService.getMovies();
    
    // Calculate Stats
    let totalRevenue = 0;
    bookings.forEach(b => {
      totalRevenue += parseFloat(b.total.replace(/[^0-9.]/g, ''));
    });

    document.getElementById('stat-total-bookings').innerText = bookings.length;
    document.getElementById('stat-total-revenue').innerText = '$' + totalRevenue.toFixed(2);

    // Calculate Occupancy
    let totalSeatsInActiveMovies = 0;
    let takenSeatsInActiveMovies = 0;
    
    const tbody = document.getElementById('admin-movies-tbody');
    tbody.innerHTML = '';

    movies.forEach(movie => {
      const seats = DataService.getSeatsForMovie(movie.id);
      
      let occupancyStr = 'N/A';
      if (seats && movie.status === 'now-showing') {
        const total = seats.length;
        const taken = seats.filter(s => s.status === 'taken').length;
        
        totalSeatsInActiveMovies += total;
        takenSeatsInActiveMovies += taken;
        
        const pct = Math.round((taken / total) * 100);
        occupancyStr = `${pct}% (${taken}/${total})`;
      }

      const statusClass = movie.status === 'now-showing' ? 'status-active' : 'status-soon';
      const statusText = movie.status === 'now-showing' ? 'Now Showing' : 'Coming Soon';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${movie.title}</strong></td>
        <td>${movie.genre}</td>
        <td><span class="status-badge ${statusClass}">${statusText}</span></td>
        <td>${occupancyStr}</td>
        <td>
          <button class="btn-gold" style="padding: 8px 16px; font-size: 12px;">Manage</button>
        </td>
      `;
      tbody.appendChild(tr);
    });

    // Update Average Occupancy Stat
    let avgOccupancy = 0;
    if (totalSeatsInActiveMovies > 0) {
      avgOccupancy = Math.round((takenSeatsInActiveMovies / totalSeatsInActiveMovies) * 100);
    }
    document.getElementById('stat-occupancy').innerText = avgOccupancy + '%';
  }
}

const adminApp = new AdminApp();
