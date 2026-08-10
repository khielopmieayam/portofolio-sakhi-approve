// =========================================================
// YEAR
// =========================================================
document.getElementById("year").textContent = new Date().getFullYear();

// =========================================================
// BUILD STORY MARQUEE (15 photos, tilted like polaroids)
// duplicated once for a seamless infinite loop
// =========================================================
const track = document.getElementById("marqueeTrack");
const TOTAL_STORY = 15;
const rotations = [-6, 4, -3, 7, -8, 3, -5, 6, -4, 8, -7, 2, -6, 5, -3];

function buildStorySet() {
  let html = "";
  for (let i = 1; i <= TOTAL_STORY; i++) {
    const rot = rotations[(i - 1) % rotations.length];
    html += `
      <div class="story-photo" style="--rot:${rot}deg">
        <img src="assets/story/story-${i}.png" alt="Story ${i}" loading="lazy">
        <span class="story-num">0${i < 10 ? "0" + i : i}</span>
      </div>`;
  }
  return html;
}

// duplicate content twice so the -50% translateX loop is seamless
track.innerHTML = buildStorySet() + buildStorySet();

// =========================================================
// SCROLL REVEAL (IntersectionObserver)
// =========================================================
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

revealEls.forEach((el) => revealObserver.observe(el));

// =========================================================
// SKILL BARS — animate width when visible
// =========================================================
const skillBars = document.querySelectorAll(".skill-bar span");
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const level = bar.getAttribute("data-level");
        requestAnimationFrame(() => {
          bar.style.width = level + "%";
        });
        skillObserver.unobserve(bar);
      }
    });
  },
  { threshold: 0.4 },
);

skillBars.forEach((bar) => skillObserver.observe(bar));

// =========================================================
// BOTTOM DOCK — active link highlight + sliding indicator
// =========================================================
const dockItems = Array.from(document.querySelectorAll(".dock-item"));
const dockIndicator = document.querySelector(".dock-indicator");
const sections = dockItems.map((item) =>
  document.getElementById(item.dataset.section),
);

function moveIndicatorTo(item) {
  if (!item) return;
  dockIndicator.style.width = item.offsetWidth + "px";
  dockIndicator.style.transform = `translateX(${item.offsetLeft}px)`;
}

function setActive(id) {
  dockItems.forEach((item) =>
    item.classList.toggle("active", item.dataset.section === id),
  );
  const activeItem = dockItems.find((item) => item.dataset.section === id);
  moveIndicatorTo(activeItem);
}

// init indicator position after layout is ready
window.addEventListener("load", () => setActive("profil"));
window.addEventListener("resize", () => {
  const current = dockItems.find((item) => item.classList.contains("active"));
  moveIndicatorTo(current);
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  },
  { threshold: 0.5, rootMargin: "-10% 0px -10% 0px" },
);

sections.forEach((sec) => sec && sectionObserver.observe(sec));

// smooth-scroll handled natively via CSS `scroll-behavior: smooth`
// but we still want the dock to update immediately on click for snappy feel
dockItems.forEach((item) => {
  item.addEventListener("click", () => setActive(item.dataset.section));
});

// =========================================================
// CERTIFICATE LIGHTBOX
// =========================================================
const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.innerHTML = `
  <button class="lightbox-close" aria-label="Tutup">✕</button>
  <img src="" alt="">
`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector("img");
const lightboxClose = lightbox.querySelector(".lightbox-close");

document.querySelectorAll(".cert-card img").forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add("open");
  });
});

function closeLightbox() {
  lightbox.classList.remove("open");
}
lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
