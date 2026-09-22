/*
  Surprise Website V1 — flat-file edition
  No npm, build tools, modules, libraries, or asset folders required.
*/

(function () {
  "use strict";

  const CONFIG = {
    recipient: "caca",
    sender: "ming",
    passcodeHash: "07c4b46160c71a2135063b4c47638ce816fc99968dbce0e52faec985bbbb27fd"
  };

  const copy = {
    en: {
      privateFor: `MADE ESPECIALLY FOR ${CONFIG.recipient.toUpperCase()}`,
      lockTitle: "This surprise belongs to someone special.",
      lockBody: "Enter the four numbers that mean something to both of you.",
      hintLabel: "Hint:", hintText: "The day our story began",
      unlock: "Unlock the surprise", wrong: "Almost. Think of a day that belongs to us.",
      heroKicker: "A LITTLE MOMENT, MADE FROM US", heroTitle: "I made a little surprise for you.",
      heroBody: "Take a breath. Turn up the sound. Let the moment unfold.", enter: "Enter our story",
      selectKicker: "CHOOSE A MOMENT", selectTitle: "Choose the shape of your surprise.",
      forLove: "For Love", forBirthday: "For a Birthday", forDate: "For a Date",
      ready: "Ready", comingNext: "Coming next", chooseHint: "Choose the heart to continue.",
      releaseKicker: "OUR MEMORIES, HELD TOGETHER", releaseTitle: "Every light holds a piece of us.",
      releaseBody: "Move gently. When you are ready, set the memories free.", release: "Release the memories",
      memoryKicker: "SIX LITTLE MOMENTS", memoryTitle: "Every piece of this leads back to you.",
      memoryHint: "Tap a memory to bring it closer.", finaleButton: "Discover the final message →",
      finaleKicker: "THE FINAL REVEAL", finaleTitle: "Same sky. Different days. Always us.",
      finaleBody: "Thank you for making ordinary moments feel unforgettable.", replay: "Replay the moment"
    },
    bm: {
      privateFor: `DIBUAT KHAS UNTUK ${CONFIG.recipient.toUpperCase()}`,
      lockTitle: "Kejutan ini milik seseorang yang istimewa.",
      lockBody: "Masukkan empat nombor yang bermakna untuk kamu berdua.",
      hintLabel: "Petunjuk:", hintText: "Hari kisah kita bermula",
      unlock: "Buka kejutan ini", wrong: "Hampir. Fikirkan hari yang menjadi milik kita.",
      heroKicker: "SATU DETIK KECIL, TERCIPTA DARIPADA KITA", heroTitle: "Saya sediakan satu kejutan kecil untuk awak.",
      heroBody: "Tarik nafas. Naikkan bunyi. Biarkan detik ini bermula.", enter: "Masuk ke kisah kita",
      selectKicker: "PILIH SATU DETIK", selectTitle: "Pilih bentuk kejutan anda.",
      forLove: "Untuk Cinta", forBirthday: "Untuk Hari Jadi", forDate: "Untuk Temu Janji",
      ready: "Sedia", comingNext: "Akan datang", chooseHint: "Pilih hati untuk meneruskan.",
      releaseKicker: "KENANGAN KITA, DISATUKAN", releaseTitle: "Setiap cahaya menyimpan sebahagian daripada kita.",
      releaseBody: "Gerak perlahan. Apabila bersedia, lepaskan kenangan ini.", release: "Lepaskan kenangan",
      memoryKicker: "ENAM DETIK KECIL", memoryTitle: "Setiap cebisan ini membawa saya kembali kepada awak.",
      memoryHint: "Sentuh kenangan untuk melihatnya dengan lebih dekat.", finaleButton: "Temui mesej terakhir →",
      finaleKicker: "PENDEDAHAN TERAKHIR", finaleTitle: "Langit yang sama. Hari yang berbeza. Tetap kita.",
      finaleBody: "Terima kasih kerana menjadikan detik biasa begitu bermakna.", replay: "Main semula"
    },
    zh: {
      privateFor: `为 ${CONFIG.recipient.toUpperCase()} 特别准备`, lockTitle: "这份惊喜，只属于一个特别的人。",
      lockBody: "输入对你们两人有意义的四个数字。", hintLabel: "提示：", hintText: "我们的故事开始的那一天",
      unlock: "打开这份惊喜", wrong: "差一点。想想那个只属于我们的日子。",
      heroKicker: "一个由我们组成的小小瞬间", heroTitle: "我为你准备了一份小惊喜。",
      heroBody: "深呼吸，打开声音，让这一刻慢慢展开。", enter: "进入我们的故事",
      selectKicker: "选择一个瞬间", selectTitle: "选择你的惊喜形状。",
      forLove: "为爱", forBirthday: "生日惊喜", forDate: "约会邀请",
      ready: "已准备", comingNext: "即将推出", chooseHint: "选择爱心继续。",
      releaseKicker: "我们的回忆，紧紧相连", releaseTitle: "每一道光，都藏着我们的片段。",
      releaseBody: "轻轻移动。准备好后，让回忆绽放。", release: "释放回忆",
      memoryKicker: "六个小小瞬间", memoryTitle: "所有碎片，最终都带我回到你身边。",
      memoryHint: "点击一段回忆，让它靠近你。", finaleButton: "揭晓最后的信息 →",
      finaleKicker: "最后的惊喜", finaleTitle: "同一片天空，不同的日子，永远是我们。",
      finaleBody: "谢谢你，让平凡的时刻变得难以忘怀。", replay: "重温这一刻"
    }
  };

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canvas = document.querySelector("#particle-canvas");
  const ctx = canvas.getContext("2d", { alpha: true });
  let width = 0, height = 0, dpr = 1, language = "en";
  let pointerX = 0, pointerY = 0, heartOpacity = 0.24;
  let particleTransition = null;

  const particleCount = innerWidth < 720 ? 1100 : 2300;
  const particles = [];
  const stars = [];

  function createParticle(index) {
    const t = Math.random() * Math.PI * 2;
    const layer = 0.78 + Math.random() * 0.25;
    const hx = 16 * Math.pow(Math.sin(t), 3);
    const hy = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    const heart = {
      x: hx * 0.06 * layer,
      y: -hy * 0.06 * layer,
      z: (Math.random() - 0.5) * 0.9
    };
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const radius = 3.2 + Math.random() * 8.5;
    const burst = {
      x: radius * Math.sin(phi) * Math.cos(theta),
      y: radius * Math.sin(phi) * Math.sin(theta),
      z: radius * Math.cos(phi)
    };
    return {
      heart, burst,
      current: { ...heart },
      start: { ...heart },
      color: index % 5 === 0 ? "198,154,99" : "169,79,85",
      size: 0.55 + Math.random() * 1.35,
      phase: Math.random() * Math.PI * 2
    };
  }

  for (let i = 0; i < particleCount; i++) particles.push(createParticle(i));
  for (let i = 0; i < 180; i++) {
    stars.push({ x: Math.random(), y: Math.random(), r: 0.25 + Math.random(), a: 0.08 + Math.random() * 0.34 });
  }

  function resizeCanvas() {
    width = innerWidth;
    height = innerHeight;
    dpr = Math.min(devicePixelRatio || 1, 1.75);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function easeInOut(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function moveParticles(target, duration) {
    particles.forEach(p => { p.start = { ...p.current }; });
    particleTransition = {
      target,
      startTime: performance.now(),
      duration: reducedMotion ? 1 : duration
    };
  }

  function updateParticleTransition(now) {
    if (!particleTransition) return;
    const raw = Math.min(1, (now - particleTransition.startTime) / particleTransition.duration);
    const amount = easeInOut(raw);
    particles.forEach(p => {
      const destination = p[particleTransition.target];
      p.current.x = p.start.x + (destination.x - p.start.x) * amount;
      p.current.y = p.start.y + (destination.y - p.start.y) * amount;
      p.current.z = p.start.z + (destination.z - p.start.z) * amount;
    });
    if (raw === 1) particleTransition = null;
  }

  function render(now) {
    updateParticleTransition(now);
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.globalCompositeOperation = "lighter";

    stars.forEach((star, i) => {
      const pulse = 0.72 + Math.sin(now * 0.00065 + i) * 0.28;
      ctx.fillStyle = `rgba(198,154,99,${star.a * pulse})`;
      ctx.beginPath();
      ctx.arc(star.x * width, star.y * height, star.r, 0, Math.PI * 2);
      ctx.fill();
    });

    const baseScale = Math.min(width, height) * (width < 720 ? 0.28 : 0.32);
    const rotY = (reducedMotion ? 0 : pointerX * 0.48) + Math.sin(now * 0.00024) * 0.08;
    const rotX = (reducedMotion ? 0 : -pointerY * 0.3) + Math.cos(now * 0.00019) * 0.035;
    const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
    const cosX = Math.cos(rotX), sinX = Math.sin(rotX);

    particles.forEach(p => {
      const x1 = p.current.x * cosY - p.current.z * sinY;
      const z1 = p.current.x * sinY + p.current.z * cosY;
      const y1 = p.current.y * cosX - z1 * sinX;
      const z2 = p.current.y * sinX + z1 * cosX;
      const perspective = Math.max(0.18, 1 / (1 + z2 * 0.11));
      const x = width / 2 + x1 * baseScale * perspective;
      const y = height / 2 + y1 * baseScale * perspective;
      if (x < -20 || x > width + 20 || y < -20 || y > height + 20) return;
      const shimmer = 0.72 + Math.sin(now * 0.0014 + p.phase) * 0.28;
      const radius = Math.max(0.45, p.size * perspective);
      ctx.fillStyle = `rgba(${p.color},${heartOpacity * shimmer})`;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.restore();
    requestAnimationFrame(render);
  }

  function showScreen(id) {
    const next = document.getElementById(id);
    const current = document.querySelector(".screen.active");
    if (!next || current === next) return;
    if (current) current.classList.remove("active");
    next.classList.add("active");
  }

  async function hashValue(value) {
    if (!window.crypto || !crypto.subtle) return value === "0901" ? CONFIG.passcodeHash : "";
    const bytes = new TextEncoder().encode(value);
    const digest = await crypto.subtle.digest("SHA-256", bytes);
    return [...new Uint8Array(digest)].map(byte => byte.toString(16).padStart(2, "0")).join("");
  }

  const inputs = [...document.querySelectorAll("#pin-inputs input")];
  inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, "").slice(-1);
      if (input.value && inputs[index + 1]) inputs[index + 1].focus();
    });
    input.addEventListener("keydown", event => {
      if (event.key === "Backspace" && !input.value && inputs[index - 1]) inputs[index - 1].focus();
    });
    input.addEventListener("paste", event => {
      const digits = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, 4);
      if (digits.length === 4) {
        event.preventDefault();
        digits.split("").forEach((digit, i) => { inputs[i].value = digit; });
        inputs[3].focus();
      }
    });
  });

  document.querySelector("#passcode-form").addEventListener("submit", async event => {
    event.preventDefault();
    const value = inputs.map(input => input.value).join("");
    const message = document.querySelector("#form-message");
    if (value.length !== 4 || await hashValue(value) !== CONFIG.passcodeHash) {
      message.textContent = copy[language].wrong;
      document.querySelector("#pin-inputs").classList.remove("shake");
      void document.querySelector("#pin-inputs").offsetWidth;
      document.querySelector("#pin-inputs").classList.add("shake");
      return;
    }
    document.querySelector("#pin-inputs").classList.add("success");
    message.textContent = "";
    heartOpacity = 0.78;
    document.querySelector(".lock-panel").classList.add("unlocking");
    setTimeout(() => showScreen("hero-screen"), reducedMotion ? 10 : 650);
  });

  document.querySelector("#enter-button").addEventListener("click", () => {
    heartOpacity = 0.46;
    showScreen("select-screen");
  });

  document.querySelector("#heart-choice").addEventListener("click", () => {
    heartOpacity = 0.92;
    showScreen("release-screen");
  });

  document.querySelector("#release-button").addEventListener("click", () => {
    showScreen("memories-screen");
    heartOpacity = 0.32;
    moveParticles("burst", 2300);
    document.querySelectorAll(".memory-card").forEach((card, index) => {
      card.style.setProperty("--card-delay", `${(reducedMotion ? 0 : 950 + index * 120)}ms`);
      card.classList.add("revealed");
    });
  });

  const dialog = document.querySelector("#memory-dialog");
  document.querySelectorAll(".memory-card").forEach(card => {
    card.addEventListener("click", () => {
      const artClass = [...card.querySelector(".memory-art").classList]
        .find(className => /^memory-art-\d+$/.test(className));
      document.querySelector("#dialog-art").className = `dialog-art ${artClass || ""}`;
      document.querySelector("#dialog-title").textContent = card.dataset.title;
      document.querySelector("#dialog-date").textContent = card.dataset.date;
      dialog.showModal();
    });
  });
  document.querySelector("#dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });

  document.querySelector("#finale-button").addEventListener("click", () => {
    showScreen("finale-screen");
    heartOpacity = 0.88;
    moveParticles("heart", 2100);
  });

  document.querySelector("#replay-button").addEventListener("click", () => location.reload());

  document.querySelectorAll(".language").forEach(button => {
    button.addEventListener("click", () => {
      language = button.dataset.lang;
      document.documentElement.lang = language === "zh" ? "zh-CN" : language;
      document.querySelectorAll(".language").forEach(item => item.classList.toggle("active", item === button));
      document.querySelectorAll("[data-copy]").forEach(element => {
        const key = element.dataset.copy;
        if (copy[language][key]) element.textContent = copy[language][key];
      });
    });
  });

  const sound = document.querySelector("#sound-toggle");
  sound.addEventListener("click", () => {
    const active = sound.getAttribute("aria-pressed") !== "true";
    sound.setAttribute("aria-pressed", String(active));
    sound.textContent = active ? "♫" : "♪";
  });

  addEventListener("pointermove", event => {
    pointerX = event.clientX / innerWidth - 0.5;
    pointerY = event.clientY / innerHeight - 0.5;
  }, { passive: true });
  addEventListener("resize", resizeCanvas);

  resizeCanvas();
  requestAnimationFrame(render);
  addEventListener("load", () => {
    setTimeout(() => document.querySelector("#loading-screen").classList.add("hidden"), 420);
    setTimeout(() => inputs[0].focus(), 800);
  });
})();
