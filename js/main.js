gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.from(".navbar", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
})
  .from(
    ".hero-subtitle",
    {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.5"
  )
  .from(
    ".hero-title",
    {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    },
    "-=0.6"
  )
  .from(
    ".hero-description",
    {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.7"
  )
  .from(
    ".hero-cta",
    {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    },
    "-=0.5"
  )
  .from(".scroll-indicator", {
    opacity: 0,
    duration: 1,
  });

const nav = document.querySelector(".navbar");
ScrollTrigger.create({
  start: "top -80",
  onEnter: () => nav.classList.add("scrolled"),
  onLeaveBack: () => nav.classList.remove("scrolled"),
});

gsap.from(".about-image", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
  x: -100,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
});

gsap.from(".about-text > *", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 70%",
    toggleActions: "play reverse play reverse",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
});

const sections = gsap.utils.toArray(".project-slide");
if (sections.length > 0) {
  const scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".project-horizontal-wrapper",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      end: () =>
        "+=" +
        (document.querySelector(".horizontal-container").offsetWidth -
          window.innerWidth),
      invalidateOnRefresh: true,
    },
  });

  sections.forEach((section) => {
    gsap.from(section.querySelectorAll(".project-text"), {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: section,
        containerAnimation: scrollTween,
        start: "left center",
        toggleActions: "play reverse play reverse",
      },
    });
  });
}

const musicItems = document.querySelectorAll(".music-item");
musicItems.forEach((item) => {
  const audio = item.querySelector(".my-audio");

  item.addEventListener("click", () => {
    if (item.classList.contains("is-playing")) {
      item.classList.remove("is-playing");
      if (audio) audio.pause();
    } else {
      musicItems.forEach((other) => {
        other.classList.remove("is-playing");
        const otherAudio = other.querySelector(".my-audio");
        if (otherAudio) {
          otherAudio.pause();
          otherAudio.currentTime = 0;
        }
      });

      item.classList.add("is-playing");
      if (audio) audio.play();

      gsap.fromTo(
        item.querySelector(".music-card"),
        { scale: 0.95 },
        { scale: 1, duration: 0.4, ease: "back.out(2)" }
      );
    }
  });
});

gsap.from(".music-item", {
  y: 60,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".music-container",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
});

const photoST = {
  trigger: ".media-grid",
  start: "top 75%",
  toggleActions: "play none none reverse",
};

gsap.to(".p-bottom", {
  y: 0,
  opacity: 1,
  duration: 1.2,
  scrollTrigger: photoST,
});
gsap.to(".p-left", {
  x: 0,
  opacity: 1,
  duration: 1.2,
  delay: 0.2,
  scrollTrigger: photoST,
});
gsap.to(".p-right", {
  x: 0,
  opacity: 1,
  duration: 1.2,
  delay: 0.4,
  scrollTrigger: photoST,
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const body = document.body;

if (hamburger) {
  hamburger.addEventListener("click", () => {
    const isActive = navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");

    if (isActive) {
      body.style.overflow = "hidden";
      gsap.to(".nav-links a", {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.3,
      });
    } else {
      body.style.overflow = "auto";
      gsap.set(".nav-links a", { opacity: 0, y: 20 });
    }
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      body.style.overflow = "auto";
    });
  });
}

window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});

gsap.from(".contact-info > *", {
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 70%",
  },
  y: 30,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
});

gsap.from(".contact-form-container", {
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 60%",
  },
  x: 50,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
});

