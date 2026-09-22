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
      ready: "Ready", comingNext: "Coming next", chooseHint: "Choose a surprise to continue.",
      releaseKicker: "OUR MEMORIES, HELD TOGETHER", releaseTitle: "Every light holds a piece of us.",
      releaseBody: "Move gently. When you are ready, set the memories free.", release: "Release the memories",
      memoryKicker: "SIX LITTLE MOMENTS", memoryTitle: "Every piece of this leads back to you.",
      memoryHint: "Tap a memory to bring it closer.", finaleButton: "Discover the final message →",
      finaleKicker: "THE FINAL REVEAL", finaleTitle: "Same sky. Different days. Always us.",
      finaleBody: "Thank you for making ordinary moments feel unforgettable.", replay: "Replay the moment",
      dateAnswer: "Yes — it’s a date ♥", cinemaKicker: "TONIGHT'S FEATURE",
      cinemaOpening: "The feature presentation is about to begin.",
      cinemaStatus: "A little film made from our moments.", cinemaContinue: "Reveal the invitation",
      musicUnavailable: "Upload a file named music.mp3 to enable the soundtrack."
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
      ready: "Sedia", comingNext: "Akan datang", chooseHint: "Pilih satu kejutan untuk meneruskan.",
      releaseKicker: "KENANGAN KITA, DISATUKAN", releaseTitle: "Setiap cahaya menyimpan sebahagian daripada kita.",
      releaseBody: "Gerak perlahan. Apabila bersedia, lepaskan kenangan ini.", release: "Lepaskan kenangan",
      memoryKicker: "ENAM DETIK KECIL", memoryTitle: "Setiap cebisan ini membawa saya kembali kepada awak.",
      memoryHint: "Sentuh kenangan untuk melihatnya dengan lebih dekat.", finaleButton: "Temui mesej terakhir →",
      finaleKicker: "PENDEDAHAN TERAKHIR", finaleTitle: "Langit yang sama. Hari yang berbeza. Tetap kita.",
      finaleBody: "Terima kasih kerana menjadikan detik biasa begitu bermakna.", replay: "Main semula",
      dateAnswer: "Ya — kita keluar bersama ♥", cinemaKicker: "TAYANGAN MALAM INI",
      cinemaOpening: "Tayangan istimewa akan bermula sebentar lagi.",
      cinemaStatus: "Sebuah filem kecil daripada detik-detik kita.", cinemaContinue: "Lihat jemputan",
      musicUnavailable: "Muat naik fail bernama music.mp3 untuk mengaktifkan muzik."
    },
    zh: {
      privateFor: `为 ${CONFIG.recipient.toUpperCase()} 特别准备`, lockTitle: "这份惊喜，只属于一个特别的人。",
      lockBody: "输入对你们两人有意义的四个数字。", hintLabel: "提示：", hintText: "我们的故事开始的那一天",
      unlock: "打开这份惊喜", wrong: "差一点。想想那个只属于我们的日子。",
      heroKicker: "一个由我们组成的小小瞬间", heroTitle: "我为你准备了一份小惊喜。",
      heroBody: "深呼吸，打开声音，让这一刻慢慢展开。", enter: "进入我们的故事",
      selectKicker: "选择一个瞬间", selectTitle: "选择你的惊喜形状。",
      forLove: "为爱", forBirthday: "生日惊喜", forDate: "约会邀请",
      ready: "已准备", comingNext: "即将推出", chooseHint: "选择一份惊喜继续。",
      releaseKicker: "我们的回忆，紧紧相连", releaseTitle: "每一道光，都藏着我们的片段。",
      releaseBody: "轻轻移动。准备好后，让回忆绽放。", release: "释放回忆",
      memoryKicker: "六个小小瞬间", memoryTitle: "所有碎片，最终都带我回到你身边。",
      memoryHint: "点击一段回忆，让它靠近你。", finaleButton: "揭晓最后的信息 →",
      finaleKicker: "最后的惊喜", finaleTitle: "同一片天空，不同的日子，永远是我们。",
      finaleBody: "谢谢你，让平凡的时刻变得难以忘怀。", replay: "重温这一刻",
      dateAnswer: "好呀 — 我们约会吧 ♥", cinemaKicker: "今晚放映",
      cinemaOpening: "特别放映即将开始。",
      cinemaStatus: "一部由我们的片段组成的小电影。", cinemaContinue: "揭晓邀请",
      musicUnavailable: "上传名为 music.mp3 的文件即可启用背景音乐。"
    }
  };

  const birthdayCopy = {
    en: {
      releaseKicker: "A WISH, MADE JUST FOR YOU", releaseTitle: "Make a wish, caca.",
      releaseBody: "The candles are glowing. When you are ready, let the celebration begin.", release: "Light up the memories",
      memoryKicker: "FOUR BIRTHDAY MOMENTS", memoryTitle: "A few reasons today feels brighter.",
      memoryHint: "Tap a photo to bring the moment closer.", finaleKicker: "HAPPY BIRTHDAY, CACA",
      finaleTitle: "Another year of you is worth celebrating.",
      finaleBody: "May this year bring you soft days, brave dreams, and so many reasons to smile.",
      dialogCopy: "A little moment chosen especially for your birthday."
    },
    bm: {
      releaseKicker: "SATU HARAPAN, KHAS UNTUK AWAK", releaseTitle: "Buat satu harapan, caca.",
      releaseBody: "Lilin sedang menyala. Apabila bersedia, mulakan sambutan ini.", release: "Nyalakan kenangan",
      memoryKicker: "EMPAT DETIK HARI JADI", memoryTitle: "Beberapa sebab hari ini terasa lebih cerah.",
      memoryHint: "Sentuh foto untuk melihatnya dengan lebih dekat.", finaleKicker: "SELAMAT HARI JADI, CACA",
      finaleTitle: "Setahun lagi bersama awak patut diraikan.",
      finaleBody: "Semoga tahun ini membawa hari yang indah, impian yang berani, dan banyak sebab untuk tersenyum.",
      dialogCopy: "Satu detik kecil yang dipilih khas untuk hari jadi awak."
    },
    zh: {
      releaseKicker: "一个专属于你的愿望", releaseTitle: "许个愿吧，caca。",
      releaseBody: "蜡烛已经点亮。准备好后，让庆祝开始吧。", release: "点亮回忆",
      memoryKicker: "四个生日瞬间", memoryTitle: "因为这些瞬间，今天更加明亮。",
      memoryHint: "点击照片，让回忆靠近一点。", finaleKicker: "生日快乐，CACA",
      finaleTitle: "新一岁的你，值得好好庆祝。",
      finaleBody: "愿新的一岁有温柔的日子、勇敢的梦想，还有许多微笑的理由。",
      dialogCopy: "这是为你的生日特别挑选的小小瞬间。"
    }
  };

  const dateCopy = {
    en: {
      releaseKicker: "ONE TICKET, TWO SEATS", releaseTitle: "There’s one place I’d like to be.",
      releaseBody: "A small invitation is waiting inside. Tap the ticket when you are ready.", release: "Open the invitation",
      memoryKicker: "SIX REASONS TO SAY YES", memoryTitle: "Good moments are better when they’re with you.",
      memoryHint: "Tap a photo to revisit the moment.", finaleKicker: "A LITTLE QUESTION FOR CACA",
      finaleTitle: "Will you go on a date with me?",
      finaleBody: "Just you, me, and a little time together. The rest can be a surprise.",
      dialogCopy: "One more reason I would love to spend the day with you.",
      confirmation: "It’s a date. I can’t wait ♥"
    },
    bm: {
      releaseKicker: "SATU TIKET, DUA TEMPAT DUDUK", releaseTitle: "Ada satu tempat yang saya mahu berada.",
      releaseBody: "Satu jemputan kecil sedang menunggu. Sentuh tiket apabila awak bersedia.", release: "Buka jemputan",
      memoryKicker: "ENAM SEBAB UNTUK BERKATA YA", memoryTitle: "Detik indah terasa lebih baik bersama awak.",
      memoryHint: "Sentuh foto untuk mengingati detik itu.", finaleKicker: "SATU SOALAN KECIL UNTUK CACA",
      finaleTitle: "Awak mahu keluar temu janji dengan saya?",
      finaleBody: "Hanya awak, saya, dan sedikit masa bersama. Selebihnya biarlah menjadi kejutan.",
      dialogCopy: "Satu lagi sebab saya mahu meluangkan hari bersama awak.",
      confirmation: "Kita akan keluar bersama. Tak sabar rasanya ♥"
    },
    zh: {
      releaseKicker: "一张票，两个座位", releaseTitle: "有一个地方，我想和你一起去。",
      releaseBody: "一份小邀请藏在里面。准备好后，点击电影票吧。", release: "打开邀请",
      memoryKicker: "六个答应我的理由", memoryTitle: "因为有你，美好时刻变得更加特别。",
      memoryHint: "点击照片，再看一眼那段时光。", finaleKicker: "想问 CACA 的一个小问题",
      finaleTitle: "你愿意和我约会吗？",
      finaleBody: "只有你、我，还有一段属于我们的时间。其他的，就留作惊喜吧。",
      dialogCopy: "这是我想和你一起度过这一天的另一个理由。",
      confirmation: "约定好了，我已经开始期待了 ♥"
    }
  };

  const loveMemories = [
    ["The first hello", "12.06.2022"], ["Our first movie", "28.08.2022"],
    ["That rainy trip", "14.01.2023"], ["A little note", "03.05.2023"],
    ["Same sky", "20.09.2024"], ["Today", "22.09.2026"]
  ];
  const birthdayMemories = [
    ["Your brightest smile", "BIRTHDAY MEMORY 01"], ["A favorite day", "BIRTHDAY MEMORY 02"],
    ["The little things", "BIRTHDAY MEMORY 03"], ["Today is yours", "BIRTHDAY MEMORY 04"]
  ];
  const dateMemories = [
    ["The smile I remember", "WHY I CHOSE YOU 01"], ["Our easiest laugh", "WHY I CHOSE YOU 02"],
    ["A favorite moment", "WHY I CHOSE YOU 03"], ["The view was better with you", "WHY I CHOSE YOU 04"],
    ["More days like this", "WHY I CHOSE YOU 05"], ["One more memory?", "YOUR INVITATION"]
  ];

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canvas = document.querySelector("#particle-canvas");
  const ctx = canvas.getContext("2d", { alpha: true });
  let width = 0, height = 0, dpr = 1, language = "en", selectedJourney = "love";
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

    let cake;
    const part = Math.random();
    if (part < 0.72) {
      const lowerTier = Math.random() < 0.6;
      const cakeRadius = lowerTier ? 0.82 : 0.56;
      const centerY = lowerTier ? 0.36 : -0.17;
      const cakeHeight = lowerTier ? 0.55 : 0.48;
      const angle = Math.random() * Math.PI * 2;
      const onTop = Math.random() < 0.22;
      const radial = onTop ? Math.sqrt(Math.random()) * cakeRadius : cakeRadius * (0.92 + Math.random() * 0.08);
      cake = {
        x: Math.cos(angle) * radial,
        y: onTop ? centerY - cakeHeight / 2 : centerY + (Math.random() - 0.5) * cakeHeight,
        z: Math.sin(angle) * radial * 0.72
      };
    } else if (part < 0.88) {
      cake = { x: (Math.random() - 0.5) * 0.09, y: -0.76 + Math.random() * 0.42, z: (Math.random() - 0.5) * 0.08 };
    } else {
      const flameAngle = Math.random() * Math.PI * 2;
      const flameRadius = Math.sqrt(Math.random());
      cake = {
        x: Math.cos(flameAngle) * 0.14 * flameRadius,
        y: -1.02 + Math.sin(flameAngle) * 0.24 * flameRadius,
        z: (Math.random() - 0.5) * 0.11
      };
    }

    const ticketX = (Math.random() - 0.5) * 1.85;
    const ticketY = (Math.random() - 0.5) * 1.02;
    const onPerforation = Math.random() < 0.13;
    const ticket = {
      x: onPerforation ? (Math.random() < 0.5 ? -0.67 : 0.67) + (Math.random() - 0.5) * 0.025 : ticketX,
      y: ticketY,
      z: (Math.random() - 0.5) * 0.13 + Math.sin(ticketX * 3.1) * 0.035
    };

    return {
      heart, cake, ticket, burst,
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

  function setCopyValue(key, value) {
    const element = document.querySelector(`[data-copy="${key}"]`);
    if (element && value) element.textContent = value;
  }

  function applyJourneyContent() {
    const source = selectedJourney === "birthday" ? birthdayCopy[language]
      : selectedJourney === "date" ? dateCopy[language]
      : copy[language];
    ["releaseKicker", "releaseTitle", "releaseBody", "release", "memoryKicker", "memoryTitle", "memoryHint", "finaleKicker", "finaleTitle", "finaleBody"]
      .forEach(key => setCopyValue(key, source[key]));
    document.querySelector("#dialog-copy").textContent = selectedJourney === "birthday"
      ? birthdayCopy[language].dialogCopy
      : selectedJourney === "date" ? dateCopy[language].dialogCopy
      : "A small moment, but a beautiful part of our story.";

    const memorySet = selectedJourney === "birthday" ? birthdayMemories
      : selectedJourney === "date" ? dateMemories
      : loveMemories;
    document.querySelectorAll(".memory-card").forEach((card, index) => {
      if (!memorySet[index]) return;
      card.dataset.title = memorySet[index][0];
      card.dataset.date = memorySet[index][1];
      card.querySelector(".memory-label").textContent = memorySet[index][0];
    });
  }

  function chooseJourney(journey) {
    selectedJourney = journey;
    document.body.dataset.journey = journey;
    document.querySelectorAll(".choice").forEach(choice => choice.classList.remove("active-choice"));
    const choiceId = journey === "birthday" ? "birthday" : journey === "date" ? "date" : "heart";
    document.querySelector(`#${choiceId}-choice`).classList.add("active-choice");
    applyJourneyContent();
    heartOpacity = 0.92;
    moveParticles(journey === "birthday" ? "cake" : journey === "date" ? "ticket" : "heart", 1100);
    showScreen("release-screen");
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
    chooseJourney("love");
  });

  document.querySelector("#birthday-choice").addEventListener("click", () => {
    chooseJourney("birthday");
  });

  document.querySelector("#date-choice").addEventListener("click", () => {
    chooseJourney("date");
  });

  document.querySelector("#release-button").addEventListener("click", () => {
    if (selectedJourney === "date") {
      showScreen("cinema-screen");
      heartOpacity = 0.12;
      moveParticles("burst", 1700);
      document.body.classList.add("cinema-mode");
      requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.add("cinema-playing")));
      setTimeout(() => document.body.classList.add("cinema-ready"), reducedMotion ? 50 : 7600);
      return;
    }
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
      const sourcePhoto = card.querySelector(".memory-photo");
      const dialogPhoto = document.querySelector("#dialog-photo");
      if (sourcePhoto && !sourcePhoto.hidden) {
        dialogPhoto.hidden = false;
        dialogPhoto.src = sourcePhoto.getAttribute("src");
        dialogPhoto.onerror = () => { dialogPhoto.hidden = true; };
      } else {
        dialogPhoto.hidden = true;
        dialogPhoto.removeAttribute("src");
      }
      dialog.showModal();
    });
  });
  document.querySelector("#dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });

  document.querySelector("#finale-button").addEventListener("click", () => {
    showScreen("finale-screen");
    heartOpacity = 0.88;
    moveParticles(selectedJourney === "birthday" ? "cake" : selectedJourney === "date" ? "ticket" : "heart", 2100);
  });

  document.querySelector("#cinema-continue").addEventListener("click", () => {
    showScreen("finale-screen");
    document.body.classList.remove("cinema-mode", "cinema-playing", "cinema-ready");
    heartOpacity = 0.88;
    moveParticles("ticket", 2100);
  });

  document.querySelector("#date-response").addEventListener("click", () => {
    document.querySelector("#date-confirmation").textContent = dateCopy[language].confirmation;
    document.querySelector("#date-response").classList.add("accepted");
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
      applyJourneyContent();
    });
  });

  const sound = document.querySelector("#sound-toggle");
  const soundtrack = document.querySelector("#background-music");
  const soundStatus = document.querySelector("#sound-status");
  let soundFadeTimer = null;
  let soundStatusTimer = null;

  function showSoundStatus(message) {
    clearTimeout(soundStatusTimer);
    soundStatus.textContent = message;
    soundStatus.classList.add("visible");
    soundStatusTimer = setTimeout(() => soundStatus.classList.remove("visible"), 4200);
  }

  function fadeSound(target, onComplete) {
    clearInterval(soundFadeTimer);
    const start = soundtrack.volume;
    const steps = reducedMotion ? 1 : 24;
    let step = 0;
    soundFadeTimer = setInterval(() => {
      step += 1;
      soundtrack.volume = Math.max(0, Math.min(1, start + (target - start) * (step / steps)));
      if (step >= steps) {
        clearInterval(soundFadeTimer);
        if (onComplete) onComplete();
      }
    }, reducedMotion ? 1 : 32);
  }

  sound.addEventListener("click", async () => {
    const isPlaying = sound.getAttribute("aria-pressed") === "true";
    if (isPlaying) {
      sound.setAttribute("aria-pressed", "false");
      sound.setAttribute("aria-label", "Play music");
      sound.textContent = "♪";
      fadeSound(0, () => soundtrack.pause());
      return;
    }

    try {
      soundtrack.volume = 0;
      await soundtrack.play();
      sound.setAttribute("aria-pressed", "true");
      sound.setAttribute("aria-label", "Pause music");
      sound.textContent = "♫";
      fadeSound(0.42);
    } catch (error) {
      sound.setAttribute("aria-pressed", "false");
      sound.textContent = "♪";
      showSoundStatus(copy[language].musicUnavailable);
    }
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
