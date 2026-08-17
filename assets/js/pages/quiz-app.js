/* ──────────────────────────────────────────────────────────
   QUIZ APP — Alpine.js component
   Requires: QUIZ_DATA (quiz-data.js), window.I18n, Alpine.js v3
   ────────────────────────────────────────────────────────── */
document.addEventListener("alpine:init", () => {
  Alpine.data("quizApp", () => ({
    /* ── State machine ───────────────────────────────────── */
    state: "idle", // idle | level-select | playing | feedback | result

    /* ── Player ──────────────────────────────────────────── */
    playerName: "",

    /* ── Language (reactive) ─────────────────────────────── */
    lang: (window.I18n ? window.I18n.getLang() : "id"),

    /* ── Level & Questions ───────────────────────────────── */
    level: null,
    questions: [],
    currentIndex: 0,

    /* ── Current question ────────────────────────────────── */
    selectedOption: null, // index picked by player, -1 = timeout
    correctIndex: null,
    lastPoints: 0,

    /* ── Timer ───────────────────────────────────────────── */
    timeLeft: 30,
    maxTime: 30,
    _timer: null,
    _feedbackTimer: null,

    /* ── Score ───────────────────────────────────────────── */
    score: 0,
    answers: [], // boolean[]

    /* ── Leaderboard ─────────────────────────────────────── */
    leaderboard: [],

    /* ─────────────────────────────────────────────────────
       GETTERS
    ─────────────────────────────────────────────────────── */
    get currentQ() {
      return this.questions[this.currentIndex] || null;
    },
    get progress() {
      if (!this.questions.length) return 0;
      return (this.currentIndex / this.questions.length) * 100;
    },
    get timerPct() {
      return (this.timeLeft / this.maxTime) * 100;
    },
    get timerClass() {
      if (this.timeLeft <= 8) return "danger";
      if (this.timeLeft <= 15) return "warning";
      return "";
    },
    get correctCount() {
      return this.answers.filter(Boolean).length;
    },
    get grade() {
      const pct = this.questions.length
        ? (this.correctCount / this.questions.length) * 100
        : 0;
      if (pct === 100) return "S";
      if (pct >= 80) return "A";
      if (pct >= 60) return "B";
      if (pct >= 40) return "C";
      return "D";
    },
    get gradeClass() {
      return "quiz-grade--" + this.grade.toLowerCase();
    },
    get gradeMessage() {
      const t = window.I18n ? window.I18n.t.bind(window.I18n) : (k) => k;
      /* Access this.lang to make getter reactive to language changes */
      void this.lang;
      const map = { S: "quiz.grade_s", A: "quiz.grade_a", B: "quiz.grade_b", C: "quiz.grade_c", D: "quiz.grade_d" };
      return t(map[this.grade] || "quiz.grade_d");
    },
    get levelLabel() {
      const t = window.I18n ? window.I18n.t.bind(window.I18n) : (k) => k;
      void this.lang;
      const map = { mudah: "quiz.level_easy", menengah: "quiz.level_menengah", sulit: "quiz.level_sulit" };
      return t(map[this.level] || "quiz.level_easy");
    },
    get feedbackText() {
      const t = window.I18n ? window.I18n.t.bind(window.I18n) : (k) => k;
      void this.lang;
      if (this.selectedOption === this.correctIndex) {
        return t("quiz.feedback_correct").replace("{pts}", this.lastPoints);
      }
      const letter = ["A", "B", "C", "D"][this.correctIndex] || "";
      if (this.selectedOption === -1) {
        return t("quiz.feedback_timeout") + " " + letter;
      }
      return t("quiz.feedback_wrong") + " " + letter;
    },

    /* ─────────────────────────────────────────────────────
       LIFECYCLE
    ─────────────────────────────────────────────────────── */
    init() {
      this.loadLeaderboard();
      this.$watch("currentIndex", () => {
        const card = this.$refs.card;
        if (!card) return;
        card.style.animation = "none";
        void card.offsetHeight;
        card.style.animation = "";
      });
      /* Sync lang with I18n so getters re-run on language switch */
      window.addEventListener("langchange", (e) => {
        this.lang = e.detail;
        /* Re-apply static data-i18n within quiz UI */
        window.I18n?.apply(document.querySelector(".quiz-app"));
      });
    },

    /* ─────────────────────────────────────────────────────
       NAVIGATION
    ─────────────────────────────────────────────────────── */
    enterGame() {
      if (!this.playerName.trim()) return;
      this.state = "level-select";
    },

    selectLevel(level) {
      this._stopTimer();
      clearTimeout(this._feedbackTimer);
      this.level = level;
      /* Support { id: [...], en: [...] } structure OR flat array */
      const lang = this.lang;
      const pool = Array.isArray(QUIZ_DATA)
        ? QUIZ_DATA.filter((q) => q.level === level)
        : (QUIZ_DATA[lang] || QUIZ_DATA["id"] || []).filter((q) => q.level === level);
      this.questions = this._shuffle([...pool]).slice(0, 10);
      this.currentIndex = 0;
      this.score = 0;
      this.answers = [];
      this.selectedOption = null;
      this.correctIndex = null;
      this.lastPoints = 0;
      this.state = "playing";
      this._startTimer();
    },

    reset() {
      this._stopTimer();
      clearTimeout(this._feedbackTimer);
      this.state = "idle";
      this.level = null;
      this.currentIndex = 0;
      this.selectedOption = null;
      this.correctIndex = null;
      this.score = 0;
      this.answers = [];
      this.playerName = "";
      this.lastPoints = 0;
    },

    retry() {
      this.selectLevel(this.level);
    },

    /* ─────────────────────────────────────────────────────
       GAMEPLAY
    ─────────────────────────────────────────────────────── */
    pick(index) {
      if (this.state !== "playing") return;
      this._stopTimer();

      this.selectedOption = index;
      this.correctIndex = this.currentQ.answer;
      const correct = index === this.correctIndex;
      this.answers.push(correct);

      if (correct) {
        const base = { mudah: 100, menengah: 150, sulit: 200 }[this.level];
        this.lastPoints = base + Math.floor(this.timeLeft * 5);
        this.score += this.lastPoints;
      } else {
        this.lastPoints = 0;
      }

      this.state = "feedback";
      this._feedbackTimer = setTimeout(() => this._advance(), 1800);
    },

    _advance() {
      if (this.state !== "feedback") return;
      if (this.currentIndex + 1 < this.questions.length) {
        this.currentIndex++;
        this.selectedOption = null;
        this.correctIndex = null;
        this.lastPoints = 0;
        this.state = "playing";
        this._startTimer();
      } else {
        this._finish();
      }
    },

    _finish() {
      this.state = "result";
      this._saveScore();
      this.loadLeaderboard();
    },

    /* ─────────────────────────────────────────────────────
       TIMER
    ─────────────────────────────────────────────────────── */
    _startTimer() {
      this.timeLeft = this.maxTime;
      clearInterval(this._timer);
      this._timer = setInterval(() => {
        this.timeLeft--;
        if (this.timeLeft <= 0) this._onTimeout();
      }, 1000);
    },

    _stopTimer() {
      clearInterval(this._timer);
    },

    _onTimeout() {
      this._stopTimer();
      this.selectedOption = -1;
      this.correctIndex = this.currentQ.answer;
      this.lastPoints = 0;
      this.answers.push(false);
      this.state = "feedback";
      this._feedbackTimer = setTimeout(() => this._advance(), 1800);
    },

    /* ─────────────────────────────────────────────────────
       OPTION CLASSES (per option button)
    ─────────────────────────────────────────────────────── */
    optionClass(i) {
      if (this.state === "playing") return "";
      if (i === this.correctIndex) return "quiz-option--correct";
      if (i === this.selectedOption && i !== this.correctIndex) return "quiz-option--wrong";
      return "quiz-option--dim";
    },

    /* ─────────────────────────────────────────────────────
       LEADERBOARD
    ─────────────────────────────────────────────────────── */
    _saveScore() {
      const entry = {
        name: this.playerName.trim() || "Anonim",
        score: this.score,
        correct: this.correctCount,
        total: this.questions.length,
        level: this.level,
        grade: this.grade,
        date: new Date().toLocaleDateString("id-ID", {
          day: "2-digit", month: "short", year: "numeric",
        }),
      };
      const lb = JSON.parse(localStorage.getItem("omed_quiz_lb") || "[]");
      lb.push(entry);
      lb.sort((a, b) => b.score - a.score);
      localStorage.setItem("omed_quiz_lb", JSON.stringify(lb.slice(0, 15)));
    },

    loadLeaderboard() {
      this.leaderboard = JSON.parse(localStorage.getItem("omed_quiz_lb") || "[]");
    },

    isMyScore(entry) {
      return (
        entry.name === (this.playerName.trim() || "Anonim") &&
        entry.score === this.score &&
        this.state === "result"
      );
    },

    lbLevelClass(level) {
      return "quiz-lb-level--" + level;
    },

    rankLabel(i) {
      if (i === 0) return "🥇";
      if (i === 1) return "🥈";
      if (i === 2) return "🥉";
      return "#" + (i + 1);
    },

    /* ─────────────────────────────────────────────────────
       HELPERS
    ─────────────────────────────────────────────────────── */
    _shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    },
  }));
});
