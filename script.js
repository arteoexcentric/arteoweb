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