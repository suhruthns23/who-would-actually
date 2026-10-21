
"use strict";

// ==========================================
// WHO WOULD ACTUALLY? - GAME SETTINGS
// ==========================================

const MIN_PLAYERS = 3;
const MAX_PLAYERS = 12;

const questions = {
  Funny: [
    "Who would accidentally become a millionaire?",
    "Who would laugh at the worst possible moment?",
    "Who would survive a zombie apocalypse by pure luck?",
    "Who would become famous for the weirdest reason?",
    "Who would get lost using Google Maps?",
    "Who would accidentally send a screenshot to the person in it?",
    "Who would talk to an animal like it understands everything?",
    "Who would fall asleep during their own party?",
    "Who would become a meme?",
    "Who would spend all their money on something ridiculous?",
    "Who would accidentally go viral?",
    "Who would forget why they entered a room?",
    "Who would accidentally send a voice note to the wrong group?",
    "Who would laugh so hard they couldn't explain the joke?",
    "Who would get caught talking to themselves in public?",
"Who would order food and immediately regret their choice?",
"Who would become a professional excuse-maker?",
"Who would forget their own phone password?",
"Who would trip over absolutely nothing?",
"Who would accidentally like a photo from five years ago?",
"Who would start telling a story and forget the point?",
"Who would bring the wrong thing to an important event?",
"Who would get scared by their own shadow?",
"Who would talk their way out of a ridiculous situation?",
"Who would spend an hour choosing what to watch?",
"Who would fall asleep during a movie they selected?",
"Who would mistake a stranger for someone they know?",
"Who would accidentally reveal a surprise party?",
"Who would turn a simple task into a three-hour project?",
"Who would eat everyone else's snacks without asking?",
"Who would create the weirdest nickname for everyone?",
"Who would become famous for an awkward dance?",
"Who would panic when asked to introduce themselves?",
"Who would forget someone's name immediately after meeting them?",
"Who would take 100 selfies and like none of them?",
"Who would argue with a GPS navigation voice?",
"Who would accidentally wear their clothes inside out?",
"Who would get distracted halfway through a sentence?",
"Who would turn a minor inconvenience into a dramatic story?",
"Who would befriend a shopkeeper in five minutes?",
"Who would make a terrible pun at the worst time?",
"Who would accidentally start a rumour about themselves?",
"Who would spend the longest time getting ready?",
"Who would bring the most unnecessary items on a trip?",
"Who would lose something they were holding a second ago?",
"Who would laugh at their own joke before finishing it?",
"Who would accidentally walk into a glass door?",
"Who would try to fix something and make it worse?",
"Who would get caught dancing alone in their room?",
"Who would confidently explain something completely incorrectly?"
 ],

  Savage: [
    "Who would start drama and then act innocent?",
    "Who would leave everyone on read for three days?",
    "Who would roast someone and immediately regret it?",
    "Who would say 'I'm five minutes away' while still at home?",
    "Who would win an argument even when completely wrong?",
    "Who would expose a secret without realizing it?",
    "Who would pretend to understand something they absolutely don't?",
    "Who would make a terrible decision and blame everyone else?",
    "Who would give advice they never follow?",
    "Who would start a fight over food?",
    "Who would act busy just to avoid helping?",
    "Who would be the most dramatic over a tiny problem?",
    "Who would give the most brutally honest review of everyone's outfit?",
"Who would act like a celebrity after getting one compliment?",
"Who would say 'I told you so' for the next five years?",
"Who would lose an argument and change the topic?",
"Who would take the longest to admit they were wrong?",
"Who would judge a movie by its poster and refuse to watch it?",
"Who would make a sarcastic comment and then say they were joking?",
"Who would turn a tiny achievement into a motivational speech?",
"Who would leave a group chat and return five minutes later?",
"Who would pretend not to care but remember every detail?",
"Who would be the biggest backseat driver?",
"Who would make fun of someone and then do the exact same thing?",
"Who would give themselves the most flattering nickname?",
"Who would overreact to being mildly inconvenienced?",
"Who would take a joke personally and roast everyone back?",
"Who would act mysterious for absolutely no reason?",
"Who would turn a friendly competition into a world championship?",
"Who would blame autocorrect for a message they meant to send?",
"Who would have the most dramatic reaction to losing a game?",
"Who would talk confidently without knowing the full story?",
"Who would roast their own friends the hardest?",
"Who would claim they are always right?",
"Who would judge everyone's music taste?",
"Who would give the most unnecessary advice?",
"Who would pretend to be busy when plans sound boring?",
"Who would make a grand entrance into an ordinary room?",
"Who would turn a small disagreement into a debate competition?",
"Who would exaggerate a story to make it more interesting?",
"Who would take credit for an idea they barely contributed to?",
"Who would be the hardest person to impress?",
"Who would act offended when they are the one who started it?",
"Who would make the most dramatic exit from a conversation?",
"Who would challenge someone and regret it immediately?",
"Who would be the first to say 'I'm built different'?",
"Who would treat a minor inconvenience like a personal betrayal?",
"Who would keep receipts just to win an argument?",
"Who would be secretly competitive about absolutely everything?",
"Who would roast someone and then ask why they're quiet?"
  ],

  Friendship: [
    "Who would travel across the country for a friend?",
    "Who would remember everyone's birthday?",
    "Who would give the best advice at 2 AM?",
    "Who would keep a friend's secret forever?",
    "Who would organize the entire group trip?",
    "Who would notice when someone is feeling left out?",
    "Who would defend a friend even when they're not around?",
    "Who would be the first to apologize after a fight?",
    "Who would bring snacks for everyone?",
    "Who would make the group laugh on a bad day?",
    "Who would keep the friend group together?",
    "Who would show up first when a friend needs help?",
    "Who would plan a surprise birthday party for everyone?",
"Who would know everyone's favourite food?",
"Who would turn a five-minute call into a two-hour conversation?",
"Who would send the funniest memes at midnight?",
"Who would defend a friend in front of a whole crowd?",
"Who would organise a reunion ten years later?",
"Who would notice immediately if a friend was upset?",
"Who would lend money and forget to ask for it back?",
"Who would make a boring day memorable?",
"Who would be the best person to travel with?",
"Who would keep the group photo archive?",
"Who would remember an embarrassing story for decades?",
"Who would volunteer to be the group's photographer?",
"Who would make peace when two friends argue?",
"Who would encourage everyone to chase their dreams?",
"Who would bring emergency snacks on every outing?",
"Who would be the most reliable person during a crisis?",
"Who would plan a trip but forget to check the weather?",
"Who would call just to check whether everyone reached home?",
"Who would create the group's unofficial rules?",
"Who would keep a friendship alive across different countries?",
"Who would be everyone's emergency contact?",
"Who would make friends with a stranger on a group outing?",
"Who would save every birthday message they receive?",
"Who would cheer the loudest for a friend's success?",
"Who would give the most thoughtful gifts?",
"Who would turn an ordinary hangout into a tradition?",
"Who would apologise first even when both were wrong?",
"Who would remember the smallest details about friends?",
"Who would convince everyone to join a spontaneous adventure?",
"Who would be the best secret keeper in the group?",
"Who would stay up late helping a friend study?",
"Who would make sure everyone gets home safely?",
"Who would be the first to suggest a group photo?",
"Who would keep the group laughing during a long journey?",
"Who would offer help before anyone asks?",
"Who would make a new person feel welcome immediately?",
"Who would be friends with the group even after everyone graduates?"
  ],

  College: [
    "Who would become the professor's favourite?",
    "Who would study only the night before an exam?",
    "Who would accidentally walk into the wrong classroom?",
    "Who would submit an assignment one second before the deadline?",
    "Who would sleep through an entire lecture?",
    "Who would become class representative?",
    "Who would survive college entirely on snacks?",
    "Who would give a presentation without preparing?",
    "Who would forget there was an exam today?",
    "Who would start a business from the college canteen?",
    "Who would have the most unbelievable attendance excuses?",
    "Who would become successful before graduation?",
    "Who would reach college just in time for attendance?",
"Who would borrow a pen and never return it?",
"Who would ask 'Is this important for the exam?' every lecture?",
"Who would finish an assignment on the bus to college?",
"Who would have the neatest class notes?",
"Who would ask the best questions during a lecture?",
"Who would forget their ID card on the day it is checked?",
"Who would become famous among students and professors?",
"Who would start a last-minute group study session?",
"Who would explain an entire chapter to everyone the night before an exam?",
"Who would accidentally call a professor by the wrong name?",
"Who would always know the best canteen food?",
"Who would have the most tabs open during an online lecture?",
"Who would volunteer for a presentation and regret it later?",
"Who would make the best project team leader?",
"Who would do the most work in a group assignment?",
"Who would disappear when the group assignment is due?",
"Who would ask for notes after missing class?",
"Who would have the most creative project idea?",
"Who would forget the deadline until a friend reminds them?",
"Who would get caught using their phone during class?",
"Who would turn a lab experiment into an unexpected adventure?",
"Who would be the first to book a seat in the library?",
"Who would make friends with seniors on the first day?",
"Who would join every college club?",
"Who would win a college fest competition?",
"Who would deliver a presentation without looking at the slides?",
"Who would accidentally upload the wrong assignment file?",
"Who would have the funniest excuse for being late?",
"Who would remember the timetable better than the class representative?",
"Who would organise the best class trip?",
"Who would be most likely to start a campus trend?",
"Who would survive an entire day on canteen snacks?",
"Who would turn a class project into a real business?",
"Who would ask for an extension five minutes before the deadline?",
"Who would get the highest marks after claiming they didn't study?",
"Who would be the most enthusiastic person during a college fest?",
"Who would miss a lecture because they were in the wrong classroom?"
  ],

  Chaos: [
    "Who would accidentally become the leader during a zombie apocalypse?",
"Who would befriend an alien before asking its name?",
"Who would survive longest on a deserted island?",
"Who would accidentally discover a secret underground city?",
"Who would become a superhero with a completely useless power?",
"Who would try to negotiate with a robot uprising?",
"Who would get lost while escaping from a maze?",
"Who would accidentally become king or queen of a small country?",
"Who would be the first to investigate a mysterious noise?",
"Who would press a suspicious red button just to see what happens?",
"Who would accidentally travel back in time and change history?",
"Who would win a reality show without understanding the rules?",
"Who would be chosen to represent Earth to aliens?",
"Who would accidentally open a portal to another dimension?",
"Who would survive a week in the wilderness with no instructions?",
"Who would accidentally become the villain in a superhero movie?",
"Who would try to tame a dragon?",
"Who would start a business during the end of the world?",
"Who would get recruited by a secret spy agency?",
"Who would accidentally trigger a worldwide dance craze?",
"Who would make the worst decision during a bank heist movie?",
"Who would solve a mystery by pure coincidence?",
"Who would challenge a ghost to a staring contest?",
"Who would accidentally invent a machine that causes chaos?",
"Who would become famous for predicting the weather incorrectly?",
"Who would survive a horror movie by refusing to investigate?",
"Who would try to communicate with dolphins and claim success?",
"Who would become the first tourist on Mars?",
"Who would accidentally swap lives with a billionaire?",
"Who would win a cooking contest using only three random ingredients?",
"Who would be the first to volunteer for a mysterious experiment?",
"Who would survive a game show where every answer changes reality?",
"Who would accidentally create an army of tiny robots?",
"Who would become a detective after losing their own keys?",
"Who would get hired by a villain because of a résumé typo?",
"Who would be the first to explore an abandoned space station?",
"Who would try to escape a time loop using a spreadsheet?",
"Who would become a world champion at a sport they invented?",
"Who would accidentally become the spokesperson for an unusual animal?",
"Who would win a treasure hunt by taking a completely wrong route?",
"Who would swap bodies with their teacher for a day?",
"Who would accidentally discover that their pet can talk?",
"Who would lead a mission to save the world but forget the plan?",
"Who would get trapped in a video game and treat it like a holiday?",
"Who would negotiate peace between two rival alien species?",
"Who would build a time machine just to redo an embarrassing moment?",
"Who would become the mayor of a town after a misunderstanding?",
"Who would accidentally summon a mythical creature during a school project?",
"Who would survive a challenge where everyone else's memories reset?",
"Who would save the world by doing something completely accidental?"
  ]
};

// ==========================================
// GAME STATE
// ==========================================

let players = [];
let selectedCategory = "Funny";
let customQuestions = [];
let usedQuestions = [];

let currentRound = 0;
let currentQuestion = "";
let currentVoterIndex = 0;
let selectedVote = null;
let votes = {};
let roundWinners = [];

let gameStarted = false;
let toastTimer = null;

// ==========================================
// GET HTML ELEMENTS
// ==========================================

const screens = document.querySelectorAll(".screen");

const playerForm = document.getElementById("playerForm");
const playerNameInput = document.getElementById("playerName");
const playerList = document.getElementById("playerList");
const playerCount = document.getElementById("playerCount");

const categoryGrid = document.getElementById("categoryGrid");
const customQuestionInput = document.getElementById("customQuestion");
const addQuestionButton = document.getElementById("addQuestionButton");
const customQuestionStatus = document.getElementById("customQuestionStatus");
const startButton = document.getElementById("startButton");

const handoffRound = document.getElementById("handoffRound");
const handoffPlayer = document.getElementById("handoffPlayer");
const handoffProgress = document.getElementById("handoffProgress");
const readyButton = document.getElementById("readyButton");

const voteRoundLabel = document.getElementById("voteRoundLabel");
const voteProgressBar = document.getElementById("voteProgressBar");
const voteProgressText = document.getElementById("voteProgressText");
const questionCategory = document.getElementById("questionCategory");
const questionText = document.getElementById("questionText");
const voteOptions = document.getElementById("voteOptions");
const voteFeedback = document.getElementById("voteFeedback");
const submitVoteButton = document.getElementById("submitVoteButton");

const resultsRoundLabel = document.getElementById("resultsRoundLabel");
const revealSymbol = document.getElementById("revealSymbol");
const winnerTitle = document.getElementById("winnerTitle");
const resultsQuestion = document.getElementById("resultsQuestion");
const totalVotes = document.getElementById("totalVotes");
const resultsList = document.getElementById("resultsList");
const tieMessage = document.getElementById("tieMessage");
const leaderboard = document.getElementById("leaderboard");
const nextRoundButton = document.getElementById("nextRoundButton");
const finishButton = document.getElementById("finishButton");

const finalLeaderboard = document.getElementById("finalLeaderboard");
const playAgainButton = document.getElementById("playAgainButton");
const homeButton = document.getElementById("homeButton");

const toast = document.getElementById("toast");

// ==========================================
// SCREEN NAVIGATION
// ==========================================

function showScreen(screenId) {
  screens.forEach(function (screen) {
    screen.classList.remove("active");
  });

  const target = document.getElementById(screenId);

  if (target) {
    target.classList.add("active");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================
// NOTIFICATION MESSAGE
// ==========================================

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(function () {
    toast.classList.remove("show");
  }, 2600);
}

// ==========================================
// PLAYER MANAGEMENT
// ==========================================

function addPlayer(name) {
  const cleanName = name.trim();

  if (!cleanName) {
    showToast("Enter a player's name first!");
    return;
  }

  if (players.length >= MAX_PLAYERS) {
    showToast("Maximum 12 players allowed!");
    return;
  }

  const duplicate = players.some(function (player) {
    return player.name.toLowerCase() === cleanName.toLowerCase();
  });

  if (duplicate) {
    showToast("Each player needs a unique name!");
    return;
  }

  players.push({
    id: players.length > 0
      ? Math.max(...players.map(function (player) {
          return player.id;
        })) + 1
      : 1,
    name: cleanName,
    score: 0,
    nominations: 0
  });

  renderPlayers();
  playerNameInput.value = "";
  playerNameInput.focus();
}

function removePlayer(playerId) {
  players = players.filter(function (player) {
    return player.id !== playerId;
  });

  renderPlayers();
}

function renderPlayers() {
  playerCount.textContent = players.length + " / " + MAX_PLAYERS;
  playerList.innerHTML = "";

  if (players.length === 0) {
    const emptyMessage = document.createElement("div");
    emptyMessage.className = "empty-hint";
    emptyMessage.textContent = "Your squad will appear here 👀";
    playerList.appendChild(emptyMessage);
    return;
  }

  players.forEach(function (player, index) {
    const chip = document.createElement("div");
    chip.className = "player-chip";

    const avatar = document.createElement("span");
    avatar.className = "player-avatar";
    avatar.textContent = player.name.charAt(0).toUpperCase();

    const name = document.createElement("span");
    name.className = "player-chip-name";
    name.textContent = (index + 1) + ". " + player.name;

    const removeButton = document.createElement("button");
    removeButton.className = "remove-player";
    removeButton.type = "button";
    removeButton.textContent = "×";
    removeButton.setAttribute(
      "aria-label",
      "Remove " + player.name
    );

    removeButton.addEventListener("click", function () {
      removePlayer(player.id);
    });

    chip.append(avatar, name, removeButton);
    playerList.appendChild(chip);
  });
}

playerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addPlayer(playerNameInput.value);
});

// ==========================================
// CATEGORY SELECTION
// ==========================================

categoryGrid.addEventListener("click", function (event) {
  const button = event.target.closest(".category-card");

  if (!button) {
    return;
  }

  selectedCategory = button.dataset.category;

  document.querySelectorAll(".category-card").forEach(function (card) {
    card.classList.toggle("selected", card === button);
  });
});

// ==========================================
// CUSTOM QUESTIONS
// ==========================================

function addCustomQuestion() {
  const question = customQuestionInput.value.trim();

  if (!question) {
    showToast("Type your custom question first!");
    return;
  }

  if (question.length < 8) {
    showToast("Make the question a little longer!");
    return;
  }

  const alreadyExists = customQuestions.some(function (item) {
    return item.toLowerCase() === question.toLowerCase();
  });

  if (alreadyExists) {
    showToast("That question is already added!");
    return;
  }

  customQuestions.push(question);

  customQuestionInput.value = "";

  customQuestionStatus.textContent =
    customQuestions.length + " custom question(s) added to Random.";

  showToast("Custom question added! ✨");
}

addQuestionButton.addEventListener("click", addCustomQuestion);

customQuestionInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addCustomQuestion();
  }
});

// ==========================================
// QUESTION SELECTION
// ==========================================

function getQuestionPool() {
  if (selectedCategory === "Random") {
    return [
      ...questions.Funny,
      ...questions.Savage,
      ...questions.Friendship,
      ...questions.College,
      ...questions.Chaos,
      ...customQuestions
    ];
  }

  return [
    ...questions[selectedCategory],
    ...customQuestions
  ];
}

function getNextQuestion() {
  let availableQuestions = getQuestionPool().filter(function (question) {
    return !usedQuestions.includes(question);
  });

  // Start a fresh cycle if every question has been used.
  if (availableQuestions.length === 0) {
    usedQuestions = [];

    availableQuestions = getQuestionPool();
  }

  const randomIndex = Math.floor(
    Math.random() * availableQuestions.length
  );

  const chosenQuestion = availableQuestions[randomIndex];

  usedQuestions.push(chosenQuestion);

  return chosenQuestion;
}

function getCategoryLabel() {
  const emojiByCategory = {
  Funny: "😂",
  Savage: "🔥",
  Friendship: "🫂",
  College: "🎓",
  Chaos: "💀",
};

  return emojiByCategory[selectedCategory] + " " +
    selectedCategory.toUpperCase() + " QUESTION";
}

// ==========================================
// START AND RESET GAME
// ==========================================

function startGame() {
  if (players.length < MIN_PLAYERS) {
    showToast("Add at least 3 players to start!");
    return;
  }

  gameStarted = true;
  currentRound = 1;
  usedQuestions = [];
  roundWinners = [];

  players.forEach(function (player) {
    player.score = 0;
    player.nominations = 0;
  });

  beginRound();
}

function resetRound() {
  currentQuestion = getNextQuestion();
  currentVoterIndex = 0;
  selectedVote = null;
  votes = {};

  players.forEach(function (player) {
    votes[player.id] = 0;
  });

  players.forEach(function (player) {
    votes[player.id] = 0;
  });
}

function beginRound() {
  if (!gameStarted) {
    return;
  }

  resetRound();
  showHandoff();
}

// ==========================================
// PASS THE PHONE SCREEN
// ==========================================

function showHandoff() {
  const currentPlayer = players[currentVoterIndex];

  if (!currentPlayer) {
    showResults();
    return;
  }

  handoffRound.textContent =
    "ROUND " + String(currentRound).padStart(2, "0");

  handoffPlayer.textContent = currentPlayer.name;

  handoffProgress.textContent =
    "Player " + (currentVoterIndex + 1) +
    " of " + players.length;

  readyButton.textContent = "I'M READY 👀";

  showScreen("handoffScreen");
}

// ==========================================
// PRIVATE VOTING
// ==========================================

function startVotingTurn() {
  const currentPlayer = players[currentVoterIndex];

  if (!currentPlayer) {
    showResults();
    return;
  }

  selectedVote = null;

  voteRoundLabel.textContent =
    "ROUND " + String(currentRound).padStart(2, "0");

  voteProgressText.textContent =
    "PLAYER " + (currentVoterIndex + 1) +
    " OF " + players.length;

  voteProgressBar.style.width =
    ((currentVoterIndex + 1) / players.length * 100) + "%";

  questionCategory.textContent = getCategoryLabel();
  questionText.textContent = currentQuestion;

  voteFeedback.textContent =
    currentPlayer.name + ", choose one friend.";

  submitVoteButton.disabled = true;
  submitVoteButton.textContent = "LOCK IN MY VOTE 🔒";

  voteOptions.innerHTML = "";

  // Do not allow players to vote for themselves.
  const eligiblePlayers = players.filter(function (player) {
    return player.id !== currentPlayer.id;
  });

  eligiblePlayers.forEach(function (player) {
    const option = document.createElement("button");
    option.className = "vote-option";
    option.type = "button";

    const avatar = document.createElement("span");
    avatar.className = "player-avatar";
    avatar.textContent = player.name.charAt(0).toUpperCase();

    const name = document.createElement("span");
    name.className = "vote-option-name";
    name.textContent = player.name;

    const check = document.createElement("span");
    check.className = "vote-check";
    check.textContent = "✓";

    option.append(avatar, name, check);

    option.addEventListener("click", function () {
      selectedVote = player.id;

      document.querySelectorAll(".vote-option").forEach(function (item) {
        item.classList.toggle("selected", item === option);
      });

      submitVoteButton.disabled = false;
      voteFeedback.textContent = "Your choice is locked in when you confirm.";
    });

    voteOptions.appendChild(option);
  });

  showScreen("voteScreen");
}

function submitVote() {
  if (selectedVote === null) {
    showToast("Choose a player first!");
    return;
  }

  // Save the vote in the current browser's memory.
  votes[selectedVote] += 1;

  const nominatedPlayer = players.find(function (player) {
    return player.id === selectedVote;
  });

  if (nominatedPlayer) {
    nominatedPlayer.nominations += 1;
  }

  currentVoterIndex += 1;
  selectedVote = null;

  if (currentVoterIndex < players.length) {
    showHandoff();
  } else {
    showResults();
  }
}

// ==========================================
// RESULTS AND WINNERS
// ==========================================

function showResults() {
  resultsRoundLabel.textContent =
    "ROUND " + String(currentRound).padStart(2, "0");

  resultsQuestion.textContent = currentQuestion;

  const highestVoteCount = Math.max(
    ...players.map(function (player) {
      return votes[player.id] || 0;
    })
  );

  const winners = players.filter(function (player) {
    return (votes[player.id] || 0) === highestVoteCount;
  });

  // With at least 3 players, there is always at least one eligible vote.
  roundWinners = winners;

  winners.forEach(function (player) {
    player.score += votes[player.id] || 0;
  });

  const isTie = winners.length > 1;

  if (isTie) {
    revealSymbol.textContent = "🤝";
    winnerTitle.textContent = "It's a tie!";
    tieMessage.textContent =
      "The squad couldn't decide between " +
      winners.map(function (player) {
        return player.name;
      }).join(" and ") + ".";
    tieMessage.classList.remove("hidden");
  } else {
    revealSymbol.textContent = "👑";
    winnerTitle.textContent = winners[0].name + " takes the crown! 👑";
    tieMessage.classList.add("hidden");
  }

  totalVotes.textContent =
    Object.values(votes).reduce(function (sum, count) {
      return sum + count;
    }, 0) + " VOTES";

  renderResults();
  renderLeaderboard(leaderboard);

  nextRoundButton.textContent = "NEXT ROUND →";
  nextRoundButton.disabled = false;

  showScreen("resultsScreen");
}

function renderResults() {
  resultsList.innerHTML = "";

  const sortedPlayers = [...players].sort(function (a, b) {
    return (votes[b.id] || 0) - (votes[a.id] || 0);
  });

  const highestVoteCount = Math.max(
    ...players.map(function (player) {
      return votes[player.id] || 0;
    })
  );

  sortedPlayers.forEach(function (player) {
    const count = votes[player.id] || 0;
    const percentage = players.length > 0
      ? (count / players.length) * 100
      : 0;

    const row = document.createElement("div");
    row.className = "result-row";

    if (count === highestVoteCount) {
      row.classList.add("winner");
    }

    const top = document.createElement("div");
    top.className = "result-row-top";

    const name = document.createElement("span");
    name.className = "result-name";
    name.textContent = player.name;

    if (count === highestVoteCount) {
      const tag = document.createElement("span");
      tag.className = "winner-tag";
      tag.textContent = "TOP VOTE";
      top.append(name, tag);
    } else {
      top.append(name);
    }

    const countLabel = document.createElement("span");
    countLabel.className = "result-count";
    countLabel.textContent =
      count + (count === 1 ? " vote" : " votes");

    top.appendChild(countLabel);

    const track = document.createElement("div");
    track.className = "result-track";

    const bar = document.createElement("div");
    bar.className = "result-bar";

    track.appendChild(bar);
    row.append(top, track);
    resultsList.appendChild(row);

    requestAnimationFrame(function () {
      bar.style.width = percentage + "%";
    });
  });
}

function renderLeaderboard(container) {
  container.innerHTML = "";

  const sortedPlayers = [...players].sort(function (a, b) {
    return b.score - a.score ||
      b.nominations - a.nominations ||
      a.name.localeCompare(b.name);
  });

  sortedPlayers.forEach(function (player, index) {
    const entry = document.createElement("div");
    entry.className = "leaderboard-entry";

    const rank = document.createElement("span");
    rank.className = "leaderboard-rank";

    const medals = ["🥇", "🥈", "🥉"];

    rank.textContent = medals[index] || String(index + 1);

    const nameBox = document.createElement("span");
    nameBox.className = "leaderboard-name";
    nameBox.textContent = player.name;

    const subtitle = document.createElement("span");
    subtitle.className = "leaderboard-subtitle";
    subtitle.textContent =
      player.nominations + " nomination(s) received";

    nameBox.appendChild(subtitle);

    const score = document.createElement("span");
    score.className = "leaderboard-points";
    score.textContent = player.score + " pts";

    entry.append(rank, nameBox, score);
    container.appendChild(entry);
  });
}

// ==========================================
// NEXT ROUND AND FINAL SCORES
// ==========================================

function nextRound() {
  currentRound += 1;
  beginRound();
}

function finishGame() {
  renderLeaderboard(finalLeaderboard);
  showScreen("finalScreen");
}

function playAgain() {
  players.forEach(function (player) {
    player.score = 0;
    player.nominations = 0;
  });

  currentRound = 1;
  usedQuestions = [];
  roundWinners = [];
  gameStarted = false;

  showScreen("homeScreen");
}

function returnHome() {
  gameStarted = false;
  showScreen("homeScreen");
}

// ==========================================
// BUTTON EVENTS
// ==========================================

startButton.addEventListener("click", startGame);

readyButton.addEventListener("click", startVotingTurn);

submitVoteButton.addEventListener("click", submitVote);

nextRoundButton.addEventListener("click", nextRound);

finishButton.addEventListener("click", finishGame);

playAgainButton.addEventListener("click", playAgain);

homeButton.addEventListener("click", returnHome);

document.getElementById("quitGameButton").addEventListener(
  "click",
  function () {
    if (confirm("Leave this game and return to setup? Current scores will be lost.")) {
      returnHome();
    }
  }
);

document.getElementById("voteBackButton").addEventListener(
  "click",
  function () {
    if (confirm("Exit this round? Votes already cast will be lost.")) {
      currentRound = Math.max(1, currentRound - 1);
      beginRound();
    }
  }
);

document.getElementById("homeLink").addEventListener(
  "click",
  function (event) {
    event.preventDefault();

    if (gameStarted) {
      const shouldLeave = confirm(
        "Return to setup? Your current game progress will be lost."
      );

      if (!shouldLeave) {
        return;
      }
    }

    returnHome();
  }
);

// ==========================================
// INITIALIZE THE WEBSITE
// ==========================================

renderPlayers();
showScreen("homeScreen");
