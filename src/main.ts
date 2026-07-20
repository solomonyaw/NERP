import { 
  createIcons, 
  Zap, 
  PlaneTakeoff, 
  Sprout, 
  Factory, 
  Droplet, 
  Shield, 
  CloudRain, 
  GraduationCap, 
  HeartPulse, 
  Wifi, 
  Building,
  ArrowUpRight,
  Download,
  Info,
  Calendar,
  Flag,
  Award,
  Milestone,
  CheckCircle2,
  ChevronRight,
  Quote,
  MessageSquare,
  BookOpen,
  ChevronLeft,
  X,
  Menu,
  Play,
  Pause,
  ArrowUp,
  Search
} from 'lucide';

// --- DATA STRUCTURES ---

const SLIDES = [
  {
    title: "Ghana's Engineering Revolution",
    subtitle: "Moving Beyond Slogans",
    description: "A national renaissance powered by technological mastery, infrastructure design, and advanced systems thinking.",
    image: "/src/assets/images/slider_1_engineering_1784491703050.jpg",
    badge: "National Awakening"
  },
  {
    title: "AI-Powered Smart Cities",
    subtitle: "High-Efficiency Urban Design",
    description: "Designing urban grids with integrated sensor meshes, decentralized energy, and automated mass transit networks.",
    image: "/src/assets/images/slider_2_smart_city_1784491717600.jpg",
    badge: "Infrastructure 5.0"
  },
  {
    title: "Advanced Robotics & Cybernetics",
    subtitle: "Automated Manufacturing Era",
    description: "Boosting manufacturing through robotic assembly, localized lithium batteries, and high-precision machinery design.",
    image: "/src/assets/images/slider_3_robotics_1784491730908.jpg",
    badge: "Industrial Era 4.0"
  },
  {
    title: "Roadmap to Ghana 2046",
    subtitle: "The 20-Year Development Plan",
    description: "A four-phase scientific strategy mapping Ghana's industrial growth, food security, and technical education.",
    image: "/src/assets/images/slider_4_ghana_2046_1784491745118.jpg",
    badge: "Strategic Vision"
  }
];

const ALTERNATIVE_MOTTOS = [
  "EVIDENCE-BASED GOVERNANCE OVER IDEOLOGICAL SLOGANS",
  "NATION BUILDING IS AN ENGINEERING ASSIGNMENT",
  "PRECISION METRIC-DRIVEN SYSTEM ARCHITECTURE",
  "HARNESSING THE POWER OF 4IR & DEEP AUTOMATION",
  "DEVELOPING SOVEREIGN INDUSTRIAL CAPABILITY",
  "DESIGNING FLOOD-RESISTANT CIVIL INFRASTRUCTURE",
  "GHANA 2046: SECURING ENERGY & WATER SOVEREIGNTY"
];

const PHASES = [
  {
    id: "phase1",
    years: "2026 - 2031",
    title: "Foundations & Digital Spine",
    subtitle: "Reforming physical, educational and cellular frameworks.",
    detailedDescription: "Establish fiber & satellite connectivity networks across all 261 districts, initialize state computing clusters, overhaul secondary syllabus with robotics and machine learning fundamentals, and provision 10 regional mechanical prototyping centers with high-capacity CNC tooling.",
    focus: [
      "Deep fiber deployment & high-reliability satellite backbones",
      "Overhauling school syllabus with vocational mechanical tooling",
      "Deploying secure open-access databases for municipal metrics"
    ],
    milestones: [
      "100% of municipal districts unified under single gigabit spine",
      "All 16 regions operational with dedicated fab-lab centers",
      "1,000,000 certified programmers and engineers graduated"
    ]
  },
  {
    id: "phase2",
    years: "2031 - 2036",
    title: "Heavy Industry & Energy",
    subtitle: "Transitioning to local mineral processing and solar power grids.",
    detailedDescription: "Establish native lithium-carbonate refining clusters, construct high-grade structural steel foundries, assemble high-efficiency grid-scale battery arrays, and rollout national mini-grid infrastructures to guarantee continuous uninterrupted operational uptime.",
    focus: [
      "Lithium refining complexes & localized battery cell manufacturing",
      "Decentralized solar microgrid architectures in farming nodes",
      "Domestic precision heavy smelting and steel production mills"
    ],
    milestones: [
      "30% of total national energy baseline sourced from green microgrids",
      "First domestic Ghanaian-assembled battery modules commercially available",
      "5 state foundries supplying 100% of structural domestic steel demand"
    ]
  },
  {
    id: "phase3",
    years: "2036 - 2041",
    title: "Advanced Automation & Biotech",
    subtitle: "Integrating AI machinery and biological synthesizing pipelines.",
    detailedDescription: "Infuse robotic harvesters within active agricultural zones, install high-reliability hydrological flow sensors, instantiate bio-molecular chemical production plants, and deploy AI automated geological analyzers across all national mining fields.",
    focus: [
      "Deploy agricultural harvesters, moisture telemetry and sensory loops",
      "Upgrade municipal pipelines with smart non-revenue loss trackers",
      "Deploy modular bio-reactors for clean active pharmaceutical inputs"
    ],
    milestones: [
      "60% of large-scale national agricultural fields automated",
      "95% of national population provided with immediate water metrics",
      "Local production of active chemical vaccine precursors online"
    ]
  },
  {
    id: "phase4",
    years: "2041 - 2046",
    title: "Full Sovereign Autonomy",
    subtitle: "Acquiring structural nuclear power and aerospace capability.",
    detailedDescription: "Achieve satellite design capacity to build and orbit remote sensory satellites, activate small modular nuclear reactors (SMR) for reliable heavy base loads, and solidify global scientific export channels for high-tech components.",
    focus: [
      "Sovereign design and assembly of high-altitude payload arrays",
      "Integration of modular small-scale fission nuclear systems",
      "Global mechanical, software, and biological product exports"
    ],
    milestones: [
      "Sovereign Ghanaian satellite launched into low-earth orbit",
      "First modular nuclear reactor supplying 500MW to industrial zone",
      "Ghana declared fully carbon-neutral and self-reliant exporter"
    ]
  }
];

const MINISTRIES = [
  {
    id: "energy",
    title: "Cybernetic Energy Grid",
    icon: "zap",
    description: "Designing, monitoring, and maintaining Ghana's high-efficiency smart grid, decentralized solar microgrids, and transition to nuclear modular energy systems.",
    responsibilities: [
      "Transition traditional lines to high-reliability automated grids",
      "Maintain active SCADA monitoring centers with sub-second lag",
      "Implement district net-metering schemes for solar feedback"
    ],
    stats: "SCADA Enabled // 24/7 Monitoring"
  },
  {
    id: "transport",
    title: "Automated Transportation",
    icon: "plane-takeoff",
    description: "Creating a unified national transportation infrastructure incorporating automated magnetic levitation, regional high-speed rail, and drone cargo lanes.",
    responsibilities: [
      "Lay down standard-gauge high-speed continental transit corridors",
      "Deploy traffic flows coordinated by AI sensory loops",
      "Map freight drone networks for accelerated logistical speeds"
    ],
    stats: "99.8% On-Time Target"
  },
  {
    id: "agriculture",
    title: "Agriculture 5.0",
    icon: "sprout",
    description: "Integrating automated soil analysis, drone pesticide spray loops, robot harvesters, and localized water irrigation networks.",
    responsibilities: [
      "Erect state-subsidized vertical greenhouse complexes",
      "Distribute moisture sensor meshes directly to farming zones",
      "Prototyping automated smart-tractors using localized battery cells"
    ],
    stats: "Zero Hunger Infrastructure"
  },
  {
    id: "industry",
    title: "Advanced Manufacturing",
    icon: "factory",
    description: "Driving the mechanical, chemical, and physical tooling of Ghana's industrial base, utilizing local steel, lithium, and microelectronics.",
    responsibilities: [
      "Deploy regional CNC tooling facilities for custom mechanical designs",
      "Establish localized lithium assembly facilities for consumer items",
      "Promote vocational apprenticeship programs in electronics manufacturing"
    ],
    stats: "Local Tooling Capacity"
  },
  {
    id: "water",
    title: "Hydrological Systems",
    icon: "droplet",
    description: "Managing high-purity water filtration, smart storage networks, localized drip-irrigation supply lines, and deep-aquifer exploration.",
    responsibilities: [
      "Modernize urban floodways with high-volume active pumps",
      "Install leak sensor nodes to stop non-revenue water decay",
      "Build coastal reverse-osmosis facilities using green power grids"
    ],
    stats: "100% Purified Access"
  },
  {
    id: "defense",
    title: "Cybernetic Defense",
    icon: "shield",
    description: "Hardening national databases, protecting power and grid infrastructure, and securing Ghanian telecommunication lines with advanced encryption.",
    responsibilities: [
      "Conduct stress audits across physical municipal systems",
      "Set up responsive cybersecurity monitoring centers",
      "Support standard secure cryptographic architectures for citizens"
    ],
    stats: "Military Grade Cryptography"
  },
  {
    id: "environment",
    title: "Climate Engineering",
    icon: "cloud-rain",
    description: "Using advanced research models, atmospheric sensors, and reforestation drone loops to regulate weather patterns and prevent soil erosion.",
    responsibilities: [
      "Automated drone seeding loops inside degraded forest zones",
      "Continuous tracking of air quality via mesh sensor networks",
      "Develop engineered revetments along erosion-prone coastlines"
    ],
    stats: "Carbon Negative Objective"
  },
  {
    id: "education",
    title: "Technical Education",
    icon: "graduation-cap",
    description: "Standardizing technical skills, structural engineering, mathematics, computer sciences, and hardware prototyping inside all state academies.",
    responsibilities: [
      "Overhaul high school systems with mandatory programming skills",
      "Equip state classrooms with open modular prototyping kits",
      "Sponsor national hackathons and physical design contests"
    ],
    stats: "100% Digital Literacy"
  },
  {
    id: "health",
    title: "Biotech Systems",
    icon: "heart-pulse",
    description: "Modernizing healthcare delivery through specialized telemedicine links, diagnostic algorithms, and customized pharmaceutical synthesizers.",
    responsibilities: [
      "Deploy self-sufficient clinic pods equipped with telemetry kits",
      "Implement diagnostic support programs running local models",
      "Route blood and prescription supplies using cargo flight lanes"
    ],
    stats: "Instant Diagnostic Triaging"
  },
  {
    id: "communication",
    title: "Telecommunications",
    icon: "wifi",
    description: "Expanding high-capacity optical fiber, localized wireless networks, and sovereign satellite links for global scientific cooperation.",
    responsibilities: [
      "Extend high-speed glass lines to rural school complexes",
      "Provide sovereign low-orbit communications payloads",
      "Develop hardware production standards for networking items"
    ],
    stats: "Terabit Spine Architecture"
  },
  {
    id: "architecture",
    title: "Civil Engineering",
    icon: "building",
    description: "Standardizing structural durability, modern building codes, and high-efficiency spatial plans for cities, dams, and bridges.",
    responsibilities: [
      "Institute seismic, structural, and heavy weather design standards",
      "Prototyping prefab layouts for efficient housing plans",
      "Develop intelligent drainage layouts to reduce flood impacts"
    ],
    stats: "Seismic Resistant Standards"
  }
];

const GALLERY_ITEMS = [
  {
    title: "Cybernetic Irrigation Hub",
    category: "Agriculture 5.0",
    description: "Real-time sensor networks adjusting localized drip-irrigation volumes based on moisture data.",
    image: "/src/assets/images/gallery_1_build_1784491761071.jpg"
  },
  {
    title: "National Fusion Research Center",
    category: "Energy",
    description: "Advanced mechanical engineering prototyping next-generation clean reactors for national supply.",
    image: "/src/assets/images/gallery_2_lab_1784491773837.jpg"
  },
  {
    title: "Smart Urban Transit Corridor",
    category: "Smart Cities",
    description: "An AI-controlled high-efficiency transport line designed to reduce urban congestion.",
    image: "/src/assets/images/gallery_3_campus_1784491785746.jpg"
  }
];



// --- APP INITIALIZATION ---

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Lucide Icons
  createIcons({
    icons: {
      Zap, PlaneTakeoff, Sprout, Factory, Droplet, Shield, CloudRain,
      GraduationCap, HeartPulse, Wifi, Building, ArrowUpRight, Download,
      Info, Calendar, Flag, Award, Milestone, CheckCircle2, ChevronRight,
      Quote, MessageSquare, BookOpen, ChevronLeft, X, Menu, Play, Pause, ArrowUp,
      Search
    }
  });

  // 2. Navigation Header Scroll Effect
  const headerElement = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      headerElement?.classList.add("scrolled");
    } else {
      headerElement?.classList.remove("scrolled");
    }
  });

  // 3. Ticker Marquee text cycle
  let currentMottoIndex = 0;
  const tickerContainer = document.getElementById("ticker-text");
  if (tickerContainer) {
    setInterval(() => {
      currentMottoIndex = (currentMottoIndex + 1) % ALTERNATIVE_MOTTOS.length;
      tickerContainer.classList.add("fade-out");
      setTimeout(() => {
        tickerContainer.textContent = ALTERNATIVE_MOTTOS[currentMottoIndex];
        tickerContainer.classList.remove("fade-out");
      }, 300);
    }, 4500);
  }

  // 4. Hero Slider Implementation
  let activeSlide = 0;
  let sliderTimer: ReturnType<typeof setInterval> | null = null;
  let isSliderPlaying = true;
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".slider-dots");
  const playButton = document.querySelector(".slider-playback-toggle");

  function initSlider() {
    // Generate slider dots
    if (dotsContainer) {
      dotsContainer.innerHTML = "";
      SLIDES.forEach((_, idx) => {
        const dot = document.createElement("button");
        dot.className = `slider-dot ${idx === 0 ? "active" : ""}`;
        dot.setAttribute("aria-label", `Go to slide ${idx + 1}`);
        dot.addEventListener("click", () => {
          goToSlide(idx);
          if (isSliderPlaying) resetSliderTimer();
        });
        dotsContainer.appendChild(dot);
      });
    }
    updateSliderUI();
    if (isSliderPlaying) startSliderTimer();
  }

  function updateSliderUI() {
    slides.forEach((slide, idx) => {
      if (idx === activeSlide) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });

    const dots = document.querySelectorAll(".slider-dot");
    dots.forEach((dot, idx) => {
      if (idx === activeSlide) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    activeSlide = (activeSlide + 1) % SLIDES.length;
    updateSliderUI();
  }

  function prevSlide() {
    activeSlide = (activeSlide - 1 + SLIDES.length) % SLIDES.length;
    updateSliderUI();
  }

  function goToSlide(idx: number) {
    activeSlide = idx;
    updateSliderUI();
  }

  function startSliderTimer() {
    sliderTimer = setInterval(nextSlide, 6000);
  }

  function stopSliderTimer() {
    if (sliderTimer) {
      clearInterval(sliderTimer);
      sliderTimer = null;
    }
  }

  function resetSliderTimer() {
    stopSliderTimer();
    startSliderTimer();
  }

  document.querySelector(".slider-control-btn.prev")?.addEventListener("click", () => {
    prevSlide();
    if (isSliderPlaying) resetSliderTimer();
  });

  document.querySelector(".slider-control-btn.next")?.addEventListener("click", () => {
    nextSlide();
    if (isSliderPlaying) resetSliderTimer();
  });

  // Play / Pause Slider Controls
  if (playButton) {
    playButton.addEventListener("click", () => {
      isSliderPlaying = !isSliderPlaying;
      const icon = playButton.querySelector("i");
      if (isSliderPlaying) {
        startSliderTimer();
        if (icon) {
          icon.setAttribute("data-lucide", "pause");
        }
      } else {
        stopSliderTimer();
        if (icon) {
          icon.setAttribute("data-lucide", "play");
        }
      }
      createIcons({
        icons: { Play, Pause }
      });
    });
  }

  initSlider();

  // 5. Ministries Tab Selector
  const tabButtons = document.querySelectorAll(".ministry-tab-btn");
  const panelContainer = document.querySelector(".ministry-details-panel");

  function renderMinistryDetails(mId: string) {
    const data = MINISTRIES.find(m => m.id === mId);
    if (!data || !panelContainer) return;

    panelContainer.innerHTML = `
      <div class="panel-radial-bg"></div>
      <div>
        <div class="panel-header">
          <div class="panel-icon-box">
            <i data-lucide="${data.icon}" class="w-6 h-6"></i>
          </div>
          <div class="panel-header-info">
            <span class="panel-meta-tag">
              <i data-lucide="info" class="w-3.5 h-3.5 text-brand-gold"></i>
              <span>${data.stats}</span>
            </span>
            <h4 class="panel-title">${data.title}</h4>
          </div>
        </div>
        <p class="panel-description">${data.description}</p>
        <div class="panel-responsibilities-box">
          <span class="panel-responsibilities-title">Key Systems & Responsibilities</span>
          <ul class="panel-responsibilities-list">
            ${data.responsibilities.map(resp => `
              <li class="panel-responsibility-item">
                <div class="responsibility-bullet"></div>
                <span class="responsibility-text">${resp}</span>
              </li>
            `).join("")}
          </ul>
        </div>
      </div>
      <div class="panel-footer">
        <div class="panel-footer-meta">
          <i data-lucide="award" class="icon-gold"></i>
          <span>NERP National Engineering Mandate // Ghana</span>
        </div>
        <a href="https://chat.whatsapp.com/ELvPkHoh3408ItWaKD9ORf" target="_blank" rel="noopener noreferrer" class="panel-footer-btn">
          <span>Discuss on WhatsApp</span>
          <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
        </a>
      </div>
    `;

    // Re-initialize dynamic icons
    createIcons({
      icons: { Zap, PlaneTakeoff, Sprout, Factory, Droplet, Shield, CloudRain, GraduationCap, HeartPulse, Wifi, Building, Info, Award, ArrowUpRight }
    });
  }

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const mId = btn.getAttribute("data-id") || "energy";
      renderMinistryDetails(mId);
    });
  });

  // Render initial energy details
  renderMinistryDetails("energy");

  // 6. Mobile menu drawer handling
  const drawer = document.getElementById("mobile-menu-drawer");
  const drawerBackdrop = drawer?.querySelector(".drawer-backdrop");
  const drawerClose = drawer?.querySelector(".drawer-close-btn");
  const menuToggle = document.getElementById("menu-toggle-btn");

  function openDrawer() {
    drawer?.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer?.classList.remove("open");
    document.body.style.overflow = "";
  }

  menuToggle?.addEventListener("click", openDrawer);
  drawerClose?.addEventListener("click", closeDrawer);
  drawerBackdrop?.addEventListener("click", closeDrawer);

  // Close drawer when clicking nav buttons inside drawer
  const drawerNavButtons = drawer?.querySelectorAll(".drawer-nav-btn");
  drawerNavButtons?.forEach(btn => {
    btn.addEventListener("click", () => {
      closeDrawer();
      const targetId = btn.getAttribute("data-target");
      if (targetId) {
        scrollToSection(targetId);
      }
    });
  });

  // 7. Modals Core Mechanics

  // Modals Overlay Elements
  const planModal = document.getElementById("plan-modal");
  const whyModal = document.getElementById("why-modal");

  function openModal(modal: HTMLElement | null) {
    if (!modal) return;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal(modal: HTMLElement | null) {
    if (!modal) return;
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  // Bind close events
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.querySelector(".modal-close-btn")?.addEventListener("click", () => {
      closeModal(overlay as HTMLElement);
    });
    overlay.querySelector(".modal-dismiss-bg")?.addEventListener("click", () => {
      closeModal(overlay as HTMLElement);
    });
  });

  // Keyboard dismiss for modals and lightboxes
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal(planModal);
      closeModal(whyModal);
      closeLightbox();
      closeDrawer();
    }
  });

  // --- Why NERP Article Modal ---
  const whyTriggerElements = document.querySelectorAll(".trigger-why-modal");
  whyTriggerElements.forEach(elem => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(whyModal);
    });
  });

  // --- 20-Year Plan Modal & Tab Mechanics ---
  let planActiveTab = 0;
  const planTabContainer = document.getElementById("plan-tabs-container");
  const planBodyContent = document.getElementById("plan-modal-body-content");

  function renderPlanTabContent() {
    const phase = PHASES[planActiveTab];
    if (!phase || !planBodyContent) return;

    planBodyContent.innerHTML = `
      <div class="plan-details-summary">
        <div class="summary-left">
          <span class="summary-meta-label">Active Timeline</span>
          <div class="summary-value">
            <i data-lucide="calendar" class="icon-gold"></i>
            <span>Years ${phase.years}</span>
          </div>
        </div>
        <div class="summary-right">
          <span class="summary-meta-label">Scope Focus</span>
          <div class="summary-value">${phase.subtitle}</div>
        </div>
      </div>

      <div>
        <h4 class="modal-section-title">
          <i data-lucide="info" class="icon-gold"></i>
          <span>Executive Strategy Overview</span>
        </h4>
        <div class="plan-detailed-strategy-text">${phase.detailedDescription}</div>
      </div>

      <div class="plan-columns-grid">
        <div class="plan-column-box initiatives">
          <h5 class="plan-column-title">
            <i data-lucide="award" class="icon"></i>
            <span>Strategic Initiatives</span>
          </h5>
          <ul class="plan-items-list">
            ${phase.focus.map(item => `
              <li class="plan-item-row">
                <i data-lucide="check-circle-2" class="plan-item-bullet-icon w-4 h-4"></i>
                <span class="plan-item-text">${item}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <div class="plan-column-box milestones">
          <h5 class="plan-column-title">
            <i data-lucide="milestone" class="icon"></i>
            <span>Target Milestones</span>
          </h5>
          <ul class="plan-items-list">
            ${phase.milestones.map(item => `
              <li class="plan-item-row">
                <i data-lucide="check-circle-2" class="plan-item-bullet-icon w-4 h-4"></i>
                <span class="plan-item-text">${item}</span>
              </li>
            `).join("")}
          </ul>
        </div>
      </div>
    `;

    // Re-initialize Lucide Icons
    createIcons({
      icons: { Calendar, Info, Award, Milestone, CheckCircle2 }
    });
  }

  function initPlanModalTabs() {
    if (!planTabContainer) return;
    planTabContainer.innerHTML = "";
    PHASES.forEach((phase, idx) => {
      const btn = document.createElement("button");
      btn.className = `plan-tab-btn ${idx === planActiveTab ? "active" : ""}`;
      btn.innerHTML = `Phase ${idx + 1} (${phase.years.split(" ")[0]})`;
      btn.addEventListener("click", () => {
        planActiveTab = idx;
        const currentTabs = planTabContainer.querySelectorAll(".plan-tab-btn");
        currentTabs.forEach((tabBtn, index) => {
          if (index === idx) {
            tabBtn.classList.add("active");
          } else {
            tabBtn.classList.remove("active");
          }
        });
        renderPlanTabContent();
      });
      planTabContainer.appendChild(btn);
    });
  }

  // Open plan modal triggers
  const planTriggerElements = document.querySelectorAll(".trigger-plan-modal");
  planTriggerElements.forEach(elem => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      // Set active tab based on phase id if passed
      const phaseIndex = elem.getAttribute("data-phase-index");
      if (phaseIndex !== null) {
        planActiveTab = parseInt(phaseIndex, 10);
      } else {
        planActiveTab = 0;
      }
      initPlanModalTabs();
      renderPlanTabContent();
      openModal(planModal);
    });
  });

  // 8. Gallery Lightbox Mechanics
  let lightboxIndex = 0;
  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxImage = lightbox?.querySelector(".lightbox-img") as HTMLImageElement;
  const lightboxTitle = lightbox?.querySelector(".lightbox-title");
  const lightboxCategory = lightbox?.querySelector(".lightbox-category-tag");
  const lightboxDescription = lightbox?.querySelector(".lightbox-description");
  const lightboxCounter = lightbox?.querySelector(".lightbox-counter-text");

  function openLightbox(idx: number) {
    lightboxIndex = idx;
    renderLightboxContent();
    if (lightbox) {
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  }

  function closeLightbox() {
    lightbox?.classList.remove("open");
    document.body.style.overflow = "";
  }

  function renderLightboxContent() {
    const item = GALLERY_ITEMS[lightboxIndex];
    if (!item) return;

    if (lightboxImage) lightboxImage.src = item.image;
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxCategory) lightboxCategory.textContent = item.category;
    if (lightboxDescription) lightboxDescription.textContent = item.description;
    if (lightboxCounter) {
      lightboxCounter.textContent = `NERP Innovation Archive // Image ${lightboxIndex + 1} of ${GALLERY_ITEMS.length}`;
    }
  }

  function nextLightbox() {
    lightboxIndex = (lightboxIndex + 1) % GALLERY_ITEMS.length;
    renderLightboxContent();
  }

  function prevLightbox() {
    lightboxIndex = (lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    renderLightboxContent();
  }

  // Add click handlers on gallery cards
  const galleryCards = document.querySelectorAll(".gallery-card");
  galleryCards.forEach((card, idx) => {
    card.addEventListener("click", () => {
      openLightbox(idx);
    });
  });

  lightbox?.querySelector(".lightbox-control-btn.prev")?.addEventListener("click", (e) => {
    e.stopPropagation();
    prevLightbox();
  });

  lightbox?.querySelector(".lightbox-control-btn.next")?.addEventListener("click", (e) => {
    e.stopPropagation();
    nextLightbox();
  });

  lightbox?.querySelector(".lightbox-close-btn")?.addEventListener("click", closeLightbox);
  lightbox?.querySelector(".lightbox-bg-dismiss")?.addEventListener("click", closeLightbox);

  // Keyboard navigation for Lightbox
  window.addEventListener("keydown", (e) => {
    if (!lightbox?.classList.contains("open")) return;
    if (e.key === "ArrowRight") {
      nextLightbox();
    } else if (e.key === "ArrowLeft") {
      prevLightbox();
    }
  });

  // 9. Scroll to top button functionality
  const scrollTopBtn = document.getElementById("scroll-to-top-btn");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      scrollTopBtn?.classList.add("visible");
    } else {
      scrollTopBtn?.classList.remove("visible");
    }
  });

  scrollTopBtn?.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // 10. Nav button click scroll handler (takes into account the offset of the fixed header)
  const headerOffset = 80;
  function scrollToSection(targetId: string) {
    const element = document.getElementById(targetId);
    if (!element) return;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  const scrollTriggerButtons = document.querySelectorAll(".scroll-to-btn");
  scrollTriggerButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute("data-target");
      if (targetId) {
        scrollToSection(targetId);
      }
    });
  });

  // 11. Dynamic Specialized Disciplines Search & Tabs
  let activeDisciplineTab: 'engineering' | 'allied' = 'engineering';
  let disciplineSearchQuery = "";

  const tabEngBtn = document.getElementById("discipline-tab-eng");
  const tabAlliedBtn = document.getElementById("discipline-tab-allied");
  const searchInput = document.getElementById("discipline-search-input") as HTMLInputElement | null;
  const gridContainer = document.getElementById("discipline-grid") || document.getElementById("dynamic-stakeholder-grid");
  const emptyState = document.getElementById("dynamic-stakeholder-empty");
  const queryHighlight = document.getElementById("search-query-highlight");

  function renderDisciplines() {
    const gridItems = document.querySelectorAll(".stakeholder-item[data-discipline-type]");
    if (!gridContainer || gridItems.length === 0) return;

    const query = disciplineSearchQuery.toLowerCase().trim();
    let visibleCount = 0;

    gridItems.forEach(item => {
      const type = item.getAttribute("data-discipline-type");
      const title = item.querySelector(".stakeholder-title")?.textContent || "";
      const subtitle = item.querySelector(".stakeholder-subtitle")?.textContent || "";
      
      const typeMatches = (type === activeDisciplineTab);
      const searchMatches = query === "" || 
                            title.toLowerCase().includes(query) || 
                            subtitle.toLowerCase().includes(query);

      if (typeMatches && searchMatches) {
        (item as HTMLElement).style.display = "";
        visibleCount++;
      } else {
        (item as HTMLElement).style.display = "none";
      }
    });

    if (visibleCount === 0) {
      gridContainer.style.display = 'none';
      if (emptyState) {
        emptyState.style.display = 'block';
        if (queryHighlight) queryHighlight.textContent = disciplineSearchQuery;
      }
    } else {
      gridContainer.style.display = 'grid';
      if (emptyState) emptyState.style.display = 'none';
    }
  }

  if (tabEngBtn && tabAlliedBtn) {
    tabEngBtn.addEventListener("click", () => {
      activeDisciplineTab = 'engineering';
      tabEngBtn.classList.add("active");
      tabAlliedBtn.classList.remove("active");
      renderDisciplines();
    });

    tabAlliedBtn.addEventListener("click", () => {
      activeDisciplineTab = 'allied';
      tabAlliedBtn.classList.add("active");
      tabEngBtn.classList.remove("active");
      renderDisciplines();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      disciplineSearchQuery = (e.target as HTMLInputElement).value;
      renderDisciplines();
    });
  }

  // Initial render
  renderDisciplines();
});
