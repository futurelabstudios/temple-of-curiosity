const hostThemes = {
  food_history: {
    label: "Food history",
    drafts: [
      {
        title: "AI draft: spice after empire",
        prompt:
          "A souring technique born in one coast reached another court by accident, carried first by sailors and then by traders who had no intention of changing Indian food. Local cooks stripped away its original identity, attached it to a meat better loved at home, and turned a maritime preservation trick into a festive dish. Name the imported technique, and name the Indian dish it quietly became.",
        status: "Needs human edit",
      },
      {
        title: "AI draft: sweet made by absence",
        prompt:
          "A dessert now treated as native began as a workaround for something missing rather than something present. The cook had no oven, no mould, and no patience for European technique, so he changed temperature, texture, and shape until the original idea vanished. Today the final product sounds more ancient than the thing it was born from. Identify both the borrowed starting point and the Indian sweet that survived.",
        status: "Needs human edit",
      },
      {
        title: "AI draft: virtue at the table",
        prompt:
          "This preparation was once named after labour, not taste. The Indian version that replaced it came to be known not by ingredient, geography, or dynasty, but by a moral quality - a word that signalled restraint, comfort, and suitability for a fasting body. Name the older dish and the quality that renamed it in the subcontinent.",
        status: "Ready for host polish",
      },
    ],
  },
  india_brands: {
    label: "India brands",
    drafts: [
      {
        title: "AI draft: a foreign name that turned native",
        prompt:
          "A company arrived with manufacturing ambition but stayed because it understood aspiration faster than policy understood modern retail. Its early Indian footprint was not sold as glamour or luxury at all; it was sold as hygiene, reliability, and entry into the respectable middle class. So native did the name become that people forgot the passport attached to it. Which company is this, and what category did it naturalize in India?",
        status: "Needs human edit",
      },
      {
        title: "AI draft: the rebrand that government forced",
        prompt:
          "The original launch plan was global, sleek, and slightly tone-deaf to local politics. Then a late intervention from the state rewrote the front label overnight. The forced Indianized name did not weaken the product - it made the brand legible to millions who would have ignored the foreign original. Identify the brand and explain why the new label was actually stronger in India.",
        status: "Ready for host polish",
      },
      {
        title: "AI draft: township before product",
        prompt:
          "The company did not merely set up a factory. It imported technicians, designed worker housing, planned a hospital, and built a sports ground before the Indian market even knew how long the brand would last. The strategy was not just industrial - it was civic. Name the company and the township logic behind the move.",
        status: "Needs answer check",
      },
    ],
  },
  technology: {
    label: "Technology",
    drafts: [
      {
        title: "AI draft: product on the surface, protocol underneath",
        prompt:
          "What looks like a question about a very current device is actually a question about an older invisible agreement that lets machines trust each other at scale. The consumer-facing clue is there only to bait recognition. The real answer sits several layers lower, in the protocol stack where legitimacy is negotiated. Identify the protocol or standard.",
        status: "Ready for host polish",
      },
      {
        title: "AI draft: the error that hides an empire",
        prompt:
          "A user sees only a small failure message. But behind it lies a history of browser wars, security theatre, and one infrastructure choice that became so normal people forgot it was ever invented. Start from the error and name the deeper technology milestone it points to.",
        status: "Needs human edit",
      },
      {
        title: "AI draft: benchmark, myth, hardware",
        prompt:
          "Three clues seem to describe speed, but only one actually does. The second is a marketing story. The third is a fabrication detail hidden from everyday users but decisive to the answer. Sort myth from mechanism and identify the real technical breakthrough.",
        status: "Needs human edit",
      },
    ],
  },
  sci_fi: {
    label: "Sci-Fi",
    drafts: [
      {
        title: "AI draft: franchise skin, philosophical core",
        prompt:
          "A mass-market franchise made the image famous, but the idea underneath it was already older, stranger, and intellectually harder. The clue begins with visual iconography - chrome, dust, or neon - and only later reveals that the real answer is an anxiety about memory, labour, or personhood. Name the idea.",
        status: "Ready for host polish",
      },
      {
        title: "AI draft: magazine to mythology",
        prompt:
          "A short story enters popular culture through a pulp channel, gets cleaned up by film and fandom, and eventually becomes a piece of common speculative vocabulary. By then, most people know the trope but not the publication ecosystem that made it travel. Identify the concept and its early publishing home.",
        status: "Needs answer check",
      },
      {
        title: "AI draft: the city is not the answer",
        prompt:
          "The skyline looks like the clue, but it is only camouflage. The actual answer is the fear that skyline encodes: one born from corporate scale, artificial life, and the loss of stable human identity. Name that fear, term, or conceptual framework.",
        status: "Needs human edit",
      },
    ],
  },
  culture: {
    label: "Culture",
    drafts: [
      {
        title: "AI draft: object before movement",
        prompt:
          "The question begins with a single everyday object - cheap, ordinary, and seemingly beneath notice. The answer, however, is an entire cultural shift that object made visible once enough people carried it, wore it, or displayed it in public. Identify the movement or historical change.",
        status: "Ready for host polish",
      },
      {
        title: "AI draft: city, sound, slogan",
        prompt:
          "A city name, a rhythm pattern, and one slogan from a long-forgotten campaign appear unrelated until you realize they all belong to the same moment when culture stopped being elite and became mass repeatable experience. Name that moment or medium shift.",
        status: "Needs human edit",
      },
      {
        title: "AI draft: poster as evidence",
        prompt:
          "The visual clue is not there to identify an artist. It is there to date an ambition: what a region wanted to say about itself through typography, color, and public instruction. Read the poster as political evidence and identify the era or campaign.",
        status: "Needs answer check",
      },
    ],
  },
};

const shabbirSeeds = [
  {
    label: "Seed 01",
    title: "From brute force to virtue",
    excerpt:
      "An Arab dish travels east, gets buried under dal, spice, and ghee, and is reborn under the name of a sacred virtue rather than a ruler, ingredient, or technique.",
  },
  {
    label: "Seed 02",
    title: "Foreign company, native memory",
    excerpt:
      "An industrialist flies to Calcutta for sourcing, sees a market nobody is serving, builds a township, and leaves behind a four-letter brand most Indians assume was always local.",
  },
  {
    label: "Seed 03",
    title: "Rebrand by the state",
    excerpt:
      "A global company enters India through a long-negotiated joint venture and is forced into a last-minute Indianized rebrand that ends up making the brand stronger, not weaker.",
  },
];

const hostTraits = [
  "long-form build-up",
  "India-facing business history",
  "delayed reveal",
  "cultural migration",
  "brand twist",
  "high answer payoff",
];

const themeDecks = {
  india_brands: {
    label: "India brands",
    questions: [
      {
        title: "Township before trust",
        prompt:
          "He did not first sell aspiration. He first sold safety, infrastructure, and disciplined daily utility. By the time the product became ordinary Indian speech, the foreignness of the brand had almost disappeared. Which company is being described?",
        answer: "Bata. The township model and the everyday school-shoe presence made a foreign industrial brand feel local.",
      },
      {
        title: "A name made Indian overnight",
        prompt:
          "A late government intervention erased the global launch name and pushed a more local-facing identity into the market. Instead of damaging the rollout, it made the brand easier to absorb culturally. Which company or brand does this describe?",
        answer: "The card points to a foreign consumer brand whose Indian launch had to be relabeled to sound more local. The twist is that localization became the growth hack.",
      },
      {
        title: "Factory as public statement",
        prompt:
          "The plant mattered, but the housing, hospital, and sports ground mattered just as much. This was industry presented as a social world. Name the company or explain the strategy.",
        answer: "An imported manufacturing brand using township-building as an adoption strategy, making industrial trust visible before product loyalty set in.",
      },
    ],
  },
  food_history: {
    label: "Food history",
    questions: [
      {
        title: "Imported technique, Indian identity",
        prompt:
          "A dish arrives through travel, but India keeps only the skeleton and rewrites the rest. What survives is not authenticity but adaptation so complete the new version sounds older than the original.",
        answer: "The card is about culinary migration: a foreign form enters India, gets re-spiced and re-contextualized, then becomes culturally native.",
      },
      {
        title: "Name chosen for a virtue",
        prompt:
          "The final Indian name is neither geographic nor imperial. It is ethical. Why would a cuisine rename a dish after a virtue rather than a person or ingredient?",
        answer: "Because the renamed form signals not only taste but suitability, comfort, restraint, and a value system around eating.",
      },
      {
        title: "Missing equipment, new dessert",
        prompt:
          "The cook lacks the original equipment and technique, so the borrowed recipe mutates until the adaptation becomes the real thing. Name the pattern rather than the dish.",
        answer: "Constraint-led innovation: local conditions rewrite a borrowed recipe until the adaptation becomes its own tradition.",
      },
    ],
  },
  technology: {
    label: "Technology",
    questions: [
      {
        title: "The protocol under the product",
        prompt:
          "The device is only the bait. The actual answer sits lower in the stack, where trust or communication is standardized. What kind of question is this asking you to solve?",
        answer: "A layered technology clue: ignore the consumer surface and identify the protocol, standard, or infrastructure logic underneath.",
      },
      {
        title: "An error message with a lineage",
        prompt:
          "A tiny failure notice on screen hides years of browser conflict, security negotiation, and infrastructure design. Start with the symptom and name the larger technical history.",
        answer: "The answer is the older web or network system that made the visible error possible in the first place.",
      },
      {
        title: "Benchmark versus breakthrough",
        prompt:
          "One clue promises speed, one clue sells a myth, and one clue quietly names the real engineering milestone. Separate them and identify the breakthrough.",
        answer: "The question rewards recognizing which technical clue is substantive and which is only marketing noise.",
      },
    ],
  },
  sci_fi: {
    label: "Sci-Fi",
    questions: [
      {
        title: "Image is camouflage",
        prompt:
          "The skyline or spaceship gets remembered, but the actual answer is an intellectual anxiety hiding beneath the aesthetic. What fear, concept, or philosophical problem is the question really about?",
        answer: "Questions in this lane point past franchise recognition toward ideas like memory, personhood, corporate futurity, or identity instability.",
      },
      {
        title: "Magazine before myth",
        prompt:
          "By the time the public learns the trope, the publishing ecosystem that carried it has already been forgotten. Name the concept and trace it backward.",
        answer: "The correct move is to reverse-popularity: from famous trope back to pulp origin or speculative lineage.",
      },
      {
        title: "The city is not the clue",
        prompt:
          "A futuristic urban image looks like the answer, but it is only the wrapper for a deeper concept. Solve the concept, not the scenery.",
        answer: "The real answer is the framework or anxiety encoded by the visual world, not the visual world itself.",
      },
    ],
  },
  culture: {
    label: "Culture",
    questions: [
      {
        title: "Object to movement",
        prompt:
          "A mundane object becomes evidence of a bigger shift once enough people repeat it in public. What social transition does the object really reveal?",
        answer: "The object is a clue to mass behavior, not an end in itself. The answer is the broader shift in identity, aspiration, or public culture.",
      },
      {
        title: "City, slogan, sound",
        prompt:
          "Three mass-cultural clues converge on a moment when elite expression became repeatable everyday media. Name the shift.",
        answer: "The answer is a medium change or public cultural turn that made repetition, memory, and identity travel faster.",
      },
      {
        title: "Poster as evidence",
        prompt:
          "Treat the poster not as design but as political evidence. What was the city, state, or era trying to say about itself through visual instruction?",
        answer: "The question asks you to read design as cultural intention and decode the historical campaign behind it.",
      },
    ],
  },
};

function initProtection() {
  document.addEventListener("copy", (event) => event.preventDefault());
  document.addEventListener("cut", (event) => event.preventDefault());
  document.addEventListener("contextmenu", (event) => event.preventDefault());
  document.addEventListener("selectstart", (event) => {
    if (event.target.closest(".protected")) {
      event.preventDefault();
    }
  });
  document.addEventListener("visibilitychange", () => {
    document.body.classList.toggle("privacy-mask", document.hidden);
  });
}

function initHostRoute() {
  const page = document.querySelector('[data-view="host"]');

  if (!page) {
    return;
  }

  const traitRow = document.querySelector("#host-traits");
  const seedList = document.querySelector("#seed-list");
  const themeSelect = document.querySelector("#host-theme-select");
  const draftFeed = document.querySelector("#host-draft-feed");
  const priceCard = document.querySelector("#host-price-card");
  const payoutCard = document.querySelector("#host-payout-card");
  const shieldCard = document.querySelector("#host-shield-card");
  const summaryLabel = document.querySelector("#host-summary-label");
  const generateButton = document.querySelector("#generate-host-drafts");
  const creditsButton = document.querySelector("#simulate-host-payout");
  let generation = 0;
  let projectedPayout = 3200;

  traitRow.innerHTML = hostTraits.map((trait) => `<span class="pill">${trait}</span>`).join("");
  seedList.innerHTML = shabbirSeeds
    .map(
      (seed) => `
        <article class="seed-card protected" data-watermark="Temple of Curiosity / seed">
          <div class="seed-head">
            <span class="seed-tag">${seed.label}</span>
            <span class="status-chip">source input</span>
          </div>
          <div class="seed-copy">
            <h3>${seed.title}</h3>
            <p>${seed.excerpt}</p>
          </div>
        </article>
      `
    )
    .join("");

  Object.entries(hostThemes).forEach(([key, theme]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = theme.label;
    themeSelect.appendChild(option);
  });

  function renderDrafts() {
    const theme = hostThemes[themeSelect.value];
    const drafts = theme.drafts.map((draft, index) => theme.drafts[(index + generation) % theme.drafts.length]);

    summaryLabel.textContent = `${theme.label} drafts for Shabbir's taste map`;
    priceCard.textContent = "INR 199/month player membership";
    payoutCard.textContent = `Projected creator payout: INR ${projectedPayout.toLocaleString("en-IN")} / 1k completions`;
    shieldCard.textContent = "Best-effort copy shield: watermark, no select, app-switch blur";

    draftFeed.innerHTML = drafts
      .map(
        (draft, index) => `
          <article class="draft-card protected" data-watermark="Temple of Curiosity / member-199">
            <div class="draft-head">
              <span class="question-label">AI draft ${index + 1}</span>
              <span class="status-chip">${draft.status}</span>
            </div>
            <div class="draft-copy">
              <h3>${draft.title}</h3>
              <p>${draft.prompt}</p>
            </div>
            <div class="summary-note">
              <span>${theme.label}</span>
              <span>Shabbir style engine</span>
              <span>Human review before publish</span>
            </div>
          </article>
        `
      )
      .join("");
  }

  themeSelect.addEventListener("change", renderDrafts);
  generateButton.addEventListener("click", () => {
    generation += 1;
    renderDrafts();
  });
  creditsButton.addEventListener("click", () => {
    projectedPayout += 450;
    renderDrafts();
  });

  themeSelect.value = "india_brands";
  renderDrafts();
}

function initThemeRoute() {
  const page = document.querySelector('[data-view="themes"]');

  if (!page) {
    return;
  }

  const chipRow = document.querySelector("#theme-chip-row");
  const deckSelect = document.querySelector("#theme-deck-select");
  const difficultyRange = document.querySelector("#theme-difficulty-range");
  const difficultyNote = document.querySelector("#theme-difficulty-note");
  const questionTitle = document.querySelector("#stage-question-title");
  const questionPrompt = document.querySelector("#stage-question-prompt");
  const questionLabel = document.querySelector("#stage-question-label");
  const stageTheme = document.querySelector("#stage-theme");
  const streakValue = document.querySelector("#stage-streak");
  const creditsValue = document.querySelector("#stage-credits");
  const answerPanel = document.querySelector("#answer-panel");
  const answerText = document.querySelector("#answer-text");
  const answerWhy = document.querySelector("#answer-why");
  const revealButton = document.querySelector("#reveal-answer");
  const nextButton = document.querySelector("#next-question");
  const immersiveButton = document.querySelector("#toggle-immersive");
  const shuffleButton = document.querySelector("#shuffle-theme-deck");
  const noteCard = document.querySelector("#theme-note-card");
  const walletCard = document.querySelector("#theme-wallet-card");
  const shieldCard = document.querySelector("#theme-shield-card");
  let deckKey = "india_brands";
  let index = 0;
  let streak = 3;
  let credits = 180;

  function renderThemeChips() {
    chipRow.innerHTML = "";
    Object.entries(themeDecks).forEach(([key, deck]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `theme-chip${key === deckKey ? " is-active" : ""}`;
      button.textContent = deck.label;
      button.addEventListener("click", () => {
        deckKey = key;
        deckSelect.value = key;
        index = 0;
        render();
      });
      chipRow.appendChild(button);
    });
  }

  Object.entries(themeDecks).forEach(([key, deck]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = deck.label;
    deckSelect.appendChild(option);
  });

  function render() {
    const deck = themeDecks[deckKey];
    const card = deck.questions[index % deck.questions.length];
    const level = Number(difficultyRange.value);

    renderThemeChips();
    difficultyNote.textContent = `Difficulty ${level}/5 - fast mobile rounds with longer reveals as difficulty rises.`;
    questionLabel.textContent = `Card ${index + 1} / ${deck.questions.length}`;
    stageTheme.textContent = deck.label;
    questionTitle.textContent = card.title;
    questionPrompt.textContent = card.prompt;
    streakValue.textContent = `${streak} streak`;
    creditsValue.textContent = `${credits} credits`;
    answerText.textContent = card.answer;
    answerWhy.textContent = "AI builds the card, but human editorial taste controls pacing, fairness, and final publication.";
    answerPanel.hidden = true;

    walletCard.textContent = `INR 199/month unlocks premium rooms, creator rooms, and deeper ladders.`;
    noteCard.textContent = "Immersive mode turns the page into a full-screen single-card flow for thumb-driven play.";
    shieldCard.textContent = "Copy shield active: no select, watermark, and blur on app switch. This is deterrence, not absolute DRM.";
  }

  deckSelect.addEventListener("change", () => {
    deckKey = deckSelect.value;
    index = 0;
    render();
  });

  difficultyRange.addEventListener("input", render);
  revealButton.addEventListener("click", () => {
    answerPanel.hidden = !answerPanel.hidden;
  });
  nextButton.addEventListener("click", () => {
    index = (index + 1) % themeDecks[deckKey].questions.length;
    streak += 1;
    credits += 20 + Number(difficultyRange.value) * 4;
    render();
  });
  shuffleButton.addEventListener("click", () => {
    index = (index + 1) % themeDecks[deckKey].questions.length;
    render();
  });
  immersiveButton.addEventListener("click", async () => {
    document.body.classList.toggle("is-immersive");

    if (document.body.classList.contains("is-immersive") && document.documentElement.requestFullscreen) {
      try {
        await document.documentElement.requestFullscreen();
      } catch (error) {
        // Fullscreen is best-effort only.
      }
    } else if (!document.body.classList.contains("is-immersive") && document.fullscreenElement) {
      try {
        await document.exitFullscreen();
      } catch (error) {
        // Ignore exit failure.
      }
    }
  });

  deckSelect.value = deckKey;
  render();
}

initProtection();
initHostRoute();
initThemeRoute();
