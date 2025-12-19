const openBtn = document.getElementById('openAboutBtn');
const closeBtn = document.getElementById('closeAboutBtn');
const overlay = document.getElementById('aboutOverlay');

const logoBtn = document.getElementById('logo-btn');
const logoOverlay = document.getElementById('logoOverlay');
const closeLogoBtn = document.getElementById('closeLogoBtn');

const memberBtn = document.getElementById('member-btn');
const memberOverlay = document.getElementById('memberOverlay');
const closeMemberBtn = document.getElementById('closeMemberBtn');

const docBtn = document.getElementById('doc-btn');
const aboutBtn = document.getElementById('about-btn');
const homeBtn = document.getElementById('home-btn');


// ABOUT
openBtn?.addEventListener('click', () => {
  overlay.classList.add('active');
});

closeBtn?.addEventListener('click', () => {
  overlay.classList.remove('active');
});


// LOGO
logoBtn?.addEventListener('click', () => {
  logoOverlay.classList.add('active');
});

closeLogoBtn?.addEventListener('click', () => {
  logoOverlay.classList.remove('active');
});


// ABOUT via navbar
aboutBtn?.addEventListener('click', () => {
  overlay.classList.add('active');
});


// MEMBER
memberBtn?.addEventListener('click', () => {
  memberOverlay.classList.add('active');
});

closeMemberBtn?.addEventListener('click', () => {
  memberOverlay.classList.remove('active');
});


// DOCUMENTARY
docBtn?.addEventListener('click', () => {
  alert("Bagian ini nanti menampilkan dokumentasi 🎬");
});


// HOME
homeBtn?.addEventListener('click', () => {
  overlay.classList.remove('active');
  logoOverlay.classList.remove('active');
  memberOverlay.classList.remove('active');
});


// CARD FLIP
document.querySelectorAll('.flip-container').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flip');
  });
});


// Fungsi untuk menutup semua overlay
function closeAllOverlays() {
  document.getElementById('aboutOverlay').classList.remove('active');
  document.getElementById('logoOverlay').classList.remove('active');
  document.getElementById('memberOverlay').classList.remove('active');
}

// Logo button - tutup overlay lain dulu
document.getElementById('logo-btn').addEventListener('click', function(e) {
  e.preventDefault();
  closeAllOverlays(); // Tutup semua dulu
  document.getElementById('logoOverlay').classList.add('active');
});

// Member button - tutup overlay lain dulu
document.getElementById('member-btn').addEventListener('click', function(e) {
  e.preventDefault();
  closeAllOverlays(); // Tutup semua dulu
  document.getElementById('memberOverlay').classList.add('active');
});

// About button - tutup overlay lain dulu
document.getElementById('about-btn').addEventListener('click', function(e) {
  e.preventDefault();
  closeAllOverlays(); // Tutup semua dulu
  document.getElementById('aboutOverlay').classList.add('active');
});

// Home button - tutup semua overlay
document.getElementById('home-btn').addEventListener('click', function(e) {
  e.preventDefault();
  closeAllOverlays();
});

// Close buttons
document.getElementById('closeAboutBtn').addEventListener('click', closeAllOverlays);
document.getElementById('closeLogoBtn').addEventListener('click', closeAllOverlays);
document.getElementById('closeMemberBtn').addEventListener('click', closeAllOverlays);