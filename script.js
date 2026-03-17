const difficultyLabels = {
  1: "Accessible",
  2: "Warm-up",
  3: "Balanced",
  4: "Tournament",
  5: "Elite",
};

const difficultyNotes = {
  1: "Quick entry points and broad solvability.",
  2: "Still comfortable, with sharper clue framing.",
  3: "Balanced ladders and stronger thematic cohesion.",
  4: "Harder turns, thinner clue margins, better payoff.",
  5: "Sparse clues, prestige feel, serious-room difficulty.",
};

const formatLabels = {
  text: "Text",
  visual: "Visual",
  hybrid: "Hybrid",
};

const quizMasters = {
  joy: {
    name: "Joy Bhattacharya",
    domains: ["General Quiz", "Science", "Technology"],
    style:
      "Wide-angle general quizzing with sharp pivots, familiar hooks, and polished difficulty control.",
    royaltyBase: 0.94,
    focuses: {
      general_quiz: {
        label: "General Quiz",
        archive: [
          {
            title: "Archive echo",
            prompt:
              "Start with a very familiar public image, then pivot to a lesser-known scientific or literary footnote that changes the answer completely.",
            mode: "Approved archive pattern",
          },
          {
            title: "Archive echo",
            prompt:
              "Use a cricket or cinema hook as the opening clue, but resolve the question through a wider cultural or political connection.",
            mode: "Approved archive pattern",
          },
        ],
        generated: [
          "Identify the Indian city from a sequence that moves from a radio jingle to a historic institution and finally to a Nobel-linked anecdote.",
          "A consumer brand mascot, a Latin motto, and a failed expedition all point to one answer. Name it.",
          "Three clues seem unrelated: a museum wing, a scoreboard phrase, and a postage stamp. Find the hidden common link.",
          "A celebrity quote is only the entry point. The real answer is the scientist, book, or invention behind the quote's afterlife.",
        ],
      },
      science: {
        label: "Science",
        archive: [
          {
            title: "Archive echo",
            prompt:
              "Open with a clean lab observation, delay the jargon, and let the answer land through a second-order implication rather than the first clue.",
            mode: "Approved archive pattern",
          },
        ],
        generated: [
          "Infer the scientific principle from a notebook entry that preserves the anomaly and the conclusion, but removes the theory name.",
          "A familiar household effect leads to a paradox and then to the person who resolved it. Name both the person and the idea.",
          "Move from a satellite image to a molecule and identify the phenomenon that links both scales.",
          "A final clue names a mistaken public belief. Give the actual law or mechanism it obscures.",
        ],
      },
      technology: {
        label: "Technology",
        archive: [
          {
            title: "Archive echo",
            prompt:
              "Use a very current device or platform as bait, but make the solution depend on older infrastructure or protocol history.",
            mode: "Approved archive pattern",
          },
        ],
        generated: [
          "A failed handshake, a familiar port number, and one acquisition trail point to the same protocol story. Identify it.",
          "Three interface screenshots from different decades preserve one design habit. Name the habit.",
          "Separate a true computing milestone from a myth that keeps repeating in startup culture.",
          "Begin with a game console clue and end with the invisible network layer that made its most famous feature possible.",
        ],
      },
    },
  },
  shabbir: {
    name: "Shabbir Haider",
    domains: ["Technology", "Sci-Fi"],
    style:
      "Tighter clue engineering, modern references, and sharper answer validation with a digital-first pulse.",
    royaltyBase: 0.87,
    focuses: {
      technology: {
        label: "Technology",
        archive: [
          {
            title: "Archive echo",
            prompt:
              "A compact clue path uses one interface detail, one standards clue, and one product-history marker to close cleanly on the answer.",
            mode: "Approved archive pattern",
          },
        ],
        generated: [
          "A browser error code, a standards body, and an e-commerce founder connect to one technology timeline. Name the key innovation.",
          "Find the protocol hidden in a clue set built from authentication flow, token expiry, and a harmless-looking redirect.",
          "Use a chip fabrication term, a smartphone launch year, and a benchmark myth to identify the real milestone.",
          "The prompt starts with cloud pricing but the answer is an older piece of infrastructure logic. What is it?",
        ],
      },
      sci_fi: {
        label: "Sci-Fi",
        archive: [
          {
            title: "Archive echo",
            prompt:
              "Build from one high-recognition franchise detail, then slide into publishing history or speculative concepts before the reveal.",
            mode: "Approved archive pattern",
          },
        ],
        generated: [
          "A spaceship class, a magazine cover, and a robotics law all trace back to one sci-fi lineage. Name it.",
          "Separate a cyberpunk visual cliche from the novel, writer, or concept that actually introduced the lasting idea.",
          "A moon, a corporate logo, and a philosophical puzzle point toward one franchise or text. Identify it.",
          "A futuristic city image is only the surface clue. The real answer is the term for the anxiety that city encodes.",
        ],
      },
    },
  },
  sarbhajit: {
    name: "Sarbhajit Mitra",
    domains: ["History", "Arts"],
    style:
      "History and arts through cultural texture, elegant context, and well-curated visual or archival framing.",
    royaltyBase: 0.91,
    focuses: {
      history: {
        label: "History",
        archive: [
          {
            title: "Archive echo",
            prompt:
              "Let the question begin with material culture or an image detail, then widen toward the event, ruler, or movement behind it.",
            mode: "Approved archive pattern",
          },
        ],
        generated: [
          "A coin, a court painting, and a reform decree all belong to one historical figure. Identify the figure.",
          "Arrange a short chronology of anti-colonial moments and then name the hidden ideological thread between them.",
          "A city gate, a treaty table, and a textile route all point to the same century-turning shift. What is it?",
          "The image clue suggests architecture, but the answer is the diplomatic event the structure came to symbolize.",
        ],
      },
      arts: {
        label: "Arts",
        archive: [
          {
            title: "Archive echo",
            prompt:
              "Open visually, but reward the player who can connect aesthetic movement, period context, and the creator's lesser-known work.",
            mode: "Approved archive pattern",
          },
        ],
        generated: [
          "A film still, a painting detail, and one line of verse connect through a movement. Name the movement and the hidden artist.",
          "A costume silhouette, a city rhythm, and a theatre program point to one performance tradition. Identify it.",
          "One gallery caption is invented. Spot it through tone, period vocabulary, and curatorial phrasing.",
          "The prompt begins with a color field but ends with a political context. Name the artist whose work bridges both.",
        ],
      },
    },
  },
};

const topicModels = {
  general_quiz: {
    label: "General Quiz",
    blend: ["Joy Bhattacharya", "Sarbhajit Mitra"],
    royaltySplit: "55% Joy, 45% Sarbhajit",
    prompts: [
      "A railway slogan, a film poster, and a science prize all point to one answer. Name it.",
      "A public statue clue hides a literary connection and a later political reference. Join them correctly.",
      "The opening clue sounds like sport, but the real answer is a city institution with cultural reach.",
      "Use three seemingly unrelated Indian references to find the one person who links them all.",
    ],
  },
  science: {
    label: "Science",
    blend: ["Joy Bhattacharya", "Shabbir Haider"],
    royaltySplit: "52% Joy, 48% Shabbir",
    prompts: [
      "A lab anomaly, a public misconception, and one elegant law all resolve to the same concept. Identify it.",
      "Move from a household effect to a space-science implication without changing the underlying principle.",
      "A scientist's discarded note becomes the entry point to a much larger discovery. Name the discovery.",
      "The closing clue is a failed popular analogy. Give the actual mechanism it tries to simplify.",
    ],
  },
  technology: {
    label: "Technology",
    blend: ["Joy Bhattacharya", "Shabbir Haider"],
    royaltySplit: "45% Joy, 55% Shabbir",
    prompts: [
      "A mobile UI habit, a networking standard, and a cloud acronym all hide the same systems story.",
      "The clue opens with a startup buzzword, but the answer is an older architecture decision that still shapes the web.",
      "A software crash report, a chip term, and a game console feature point to one technology milestone.",
      "Name the protocol, product, or invention hiding behind a very ordinary user action.",
    ],
  },
  history: {
    label: "History",
    blend: ["Sarbhajit Mitra", "Joy Bhattacharya"],
    royaltySplit: "70% Sarbhajit, 30% Joy",
    prompts: [
      "A mint mark, a diplomatic phrase, and a traveler's sketch belong to one historical transition. Identify it.",
      "Arrange a short chronology and then extract the underlying imperial logic shared across the sequence.",
      "An urban landmark is only the visible clue. The answer is the event that changed its meaning.",
      "A memorial, a port, and a line from a speech reveal the same era-defining shift.",
    ],
  },
  arts: {
    label: "Arts",
    blend: ["Sarbhajit Mitra", "Joy Bhattacharya"],
    royaltySplit: "68% Sarbhajit, 32% Joy",
    prompts: [
      "A stage costume, a painted hand, and a single lyric all point to one aesthetic movement.",
      "The visual clue suggests cinema, but the answer is the painter or poet whose influence shaped the scene.",
      "One caption is a trap. Read tone and period texture to identify the fake.",
      "A city neighborhood, a performance tradition, and a poster design point to the same cultural network.",
    ],
  },
  sci_fi: {
    label: "Sci-Fi",
    blend: ["Shabbir Haider", "Joy Bhattacharya"],
    royaltySplit: "72% Shabbir, 28% Joy",
    prompts: [
      "A magazine issue, a robot law, and a moon colony all point to one sci-fi inheritance line.",
      "The clue looks like film trivia, but the answer is the speculative idea behind the image.",
      "Separate a franchise surface detail from the deeper philosophical problem it popularized.",
      "A corporate future, a neon skyline, and a cautionary essay all hide the same core anxiety.",
    ],
  },
};

function currency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function getDifficultyCopy(level) {
  return `${difficultyLabels[level]}: ${difficultyNotes[level]}`;
}

function rotateItems(items, generation, count) {
  const offset = generation % items.length;
  const doubled = [...items, ...items];
  return doubled.slice(offset, offset + count);
}

function initQuizmasterRoute() {
  const page = document.querySelector('[data-view="quizmasters"]');

  if (!page) {
    return;
  }

  const masterSelect = document.querySelector("#master-select");
  const focusSelect = document.querySelector("#focus-select");
  const formatSelect = document.querySelector("#master-format-select");
  const difficultyRange = document.querySelector("#master-difficulty-range");
  const difficultyNote = document.querySelector("#master-difficulty-note");
  const sessionTitle = document.querySelector("#master-session-title");
  const sessionSummary = document.querySelector("#master-session-summary");
  const summaryTags = document.querySelector("#master-summary-tags");
  const questionList = document.querySelector("#master-question-list");
  const styleCard = document.querySelector("#master-style-card");
  const royaltyCard = document.querySelector("#master-royalty-card");
  const rewardCard = document.querySelector("#master-reward-card");
  const creditsCard = document.querySelector("#master-credits-card");
  const generateButton = document.querySelector("#generate-master-set");
  const simulateButton = document.querySelector("#simulate-master-win");

  const state = {
    generation: 0,
    credits: 120,
  };

  Object.entries(quizMasters).forEach(([key, master]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = master.name;
    masterSelect.appendChild(option);
  });

  function syncFocusOptions() {
    const master = quizMasters[masterSelect.value];
    focusSelect.innerHTML = "";

    Object.entries(master.focuses).forEach(([focusKey, focus]) => {
      const option = document.createElement("option");
      option.value = focusKey;
      option.textContent = focus.label;
      focusSelect.appendChild(option);
    });
  }

  function render() {
    const master = quizMasters[masterSelect.value];
    const focus = master.focuses[focusSelect.value];
    const difficulty = Number(difficultyRange.value);
    const rewardCredits = 40 + difficulty * 25;
    const royaltyPerPlay = master.royaltyBase + difficulty * 0.11;
    const archiveQuestion =
      rotateItems(focus.archive, state.generation, 1)[0];
    const freshQuestions = rotateItems(focus.generated, state.generation, 3);
    const questions = [
      {
        source: archiveQuestion.title,
        tag: archiveQuestion.mode,
        prompt: archiveQuestion.prompt,
        points: 80 + difficulty * 10,
      },
      ...freshQuestions.map((prompt, index) => ({
        source: `New AI question ${index + 1}`,
        tag: `${formatLabels[formatSelect.value]} format`,
        prompt,
        points: 95 + difficulty * 12 + index * 8,
      })),
    ];

    difficultyNote.textContent = getDifficultyCopy(difficulty);
    sessionTitle.textContent = `${master.name} on ${focus.label}`;
    sessionSummary.textContent = `${master.style} This route keeps the curator's tone, draws from approved archive patterns, and mixes those anchors with fresh AI generation.`;

    summaryTags.innerHTML = `
      <span>${focus.label}</span>
      <span>${formatLabels[formatSelect.value]}</span>
      <span>${difficultyLabels[difficulty]}</span>
      <span>1 archive echo + 3 new AI</span>
    `;

    styleCard.textContent = master.style;
    royaltyCard.textContent = `${currency(royaltyPerPlay)} per full session`;
    rewardCard.textContent = `${rewardCredits} credits if cleared`;
    creditsCard.textContent = `${state.credits} credits in wallet`;

    questionList.innerHTML = questions
      .map(
        (question) => `
          <article class="question-card">
            <div class="question-stack">
              <span class="question-tag">${question.source}</span>
              <span class="pill">${question.tag}</span>
            </div>
            <div class="question-copy">
              <h3>${question.source}</h3>
              <p>${question.prompt}</p>
            </div>
            <div class="question-meta">
              <span>${focus.label}</span>
              <strong>${question.points} pts</strong>
            </div>
          </article>
        `
      )
      .join("");
  }

  masterSelect.addEventListener("change", () => {
    syncFocusOptions();
    render();
  });

  focusSelect.addEventListener("change", render);
  formatSelect.addEventListener("change", render);
  difficultyRange.addEventListener("input", render);

  generateButton.addEventListener("click", () => {
    state.generation += 1;
    render();
  });

  simulateButton.addEventListener("click", () => {
    const difficulty = Number(difficultyRange.value);
    state.credits += 40 + difficulty * 25;
    render();
  });

  masterSelect.value = "joy";
  syncFocusOptions();
  render();
}

function initTopicRoute() {
  const page = document.querySelector('[data-view="topics"]');

  if (!page) {
    return;
  }

  const topicSelect = document.querySelector("#topic-select");
  const formatSelect = document.querySelector("#topic-format-select");
  const difficultyRange = document.querySelector("#topic-difficulty-range");
  const difficultyNote = document.querySelector("#topic-difficulty-note");
  const sessionTitle = document.querySelector("#topic-session-title");
  const sessionSummary = document.querySelector("#topic-session-summary");
  const summaryTags = document.querySelector("#topic-summary-tags");
  const questionList = document.querySelector("#topic-question-list");
  const blendCard = document.querySelector("#topic-blend-card");
  const splitCard = document.querySelector("#topic-split-card");
  const rewardCard = document.querySelector("#topic-reward-card");
  const creditsCard = document.querySelector("#topic-credits-card");
  const splitGrid = document.querySelector("#topic-split-grid");
  const generateButton = document.querySelector("#generate-topic-set");
  const simulateButton = document.querySelector("#simulate-topic-win");

  const state = {
    generation: 0,
    credits: 140,
  };

  Object.entries(topicModels).forEach(([key, topic]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = topic.label;
    topicSelect.appendChild(option);
  });

  function render() {
    const topic = topicModels[topicSelect.value];
    const difficulty = Number(difficultyRange.value);
    const rewardCredits = 50 + difficulty * 22;
    const questions = rotateItems(topic.prompts, state.generation, 4);

    difficultyNote.textContent = getDifficultyCopy(difficulty);
    sessionTitle.textContent = `${topic.label} mixed model`;
    sessionSummary.textContent = `This route starts from a topic and blends trained tastes instead of one curator. The result is cleaner topic coverage with a mixed editorial voice.`;

    summaryTags.innerHTML = `
      <span>${topic.label}</span>
      <span>${formatLabels[formatSelect.value]}</span>
      <span>${difficultyLabels[difficulty]}</span>
      <span>Mixed model</span>
    `;

    blendCard.textContent = topic.blend.join(" + ");
    splitCard.textContent = topic.royaltySplit;
    rewardCard.textContent = `${rewardCredits} credits if cleared`;
    creditsCard.textContent = `${state.credits} credits in wallet`;

    splitGrid.innerHTML = topic.blend
      .map(
        (name, index) => `
          <article class="split-card">
            <strong>${name}</strong>
            <div class="split-line">${
              index === 0
                ? `Primary editorial weight on ${topic.label.toLowerCase()}.`
                : `Secondary balance layer to widen difficulty and range.`
            }</div>
          </article>
        `
      )
      .join("");

    questionList.innerHTML = questions
      .map(
        (prompt, index) => `
          <article class="question-card">
            <div class="question-stack">
              <span class="question-tag">Mixed AI question ${index + 1}</span>
              <span class="pill">${formatLabels[formatSelect.value]} format</span>
            </div>
            <div class="question-copy">
              <h3>Topic-led prompt ${index + 1}</h3>
              <p>${prompt}</p>
            </div>
            <div class="question-meta">
              <span>${topic.label}</span>
              <strong>${92 + difficulty * 12 + index * 8} pts</strong>
            </div>
          </article>
        `
      )
      .join("");
  }

  difficultyRange.addEventListener("input", render);
  topicSelect.addEventListener("change", render);
  formatSelect.addEventListener("change", render);

  generateButton.addEventListener("click", () => {
    state.generation += 1;
    render();
  });

  simulateButton.addEventListener("click", () => {
    const difficulty = Number(difficultyRange.value);
    state.credits += 50 + difficulty * 22;
    render();
  });

  topicSelect.value = "technology";
  render();
}

initQuizmasterRoute();
initTopicRoute();
