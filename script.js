const startButton = document.getElementById("startButton");
const homeButton = document.getElementById("homeButton");
const welcomeHeader = document.getElementById("welcomeHeader");
const welcomeMain = document.getElementById("welcomeMain");
const dashboardScreen = document.getElementById("dashboardScreen");
const currentLevel = document.getElementById("currentLevel");
const currentXp = document.getElementById("currentXp");
const levelProgressTrack = document.getElementById("levelProgressTrack");
const levelProgressBar = document.getElementById("levelProgressBar");
const levelProgressText = document.getElementById("levelProgressText");
const currentDestinationName = document.getElementById("currentDestinationName");
const destinationTitle = document.getElementById("destinationTitle");
const destinationIntroduction = document.getElementById("destinationIntroduction");
const destinationFlag = document.getElementById("destinationFlag");
const destinationButtons = [...document.querySelectorAll("[data-country-id]")];
const destinationInfoPanel = document.getElementById("destinationInfoPanel");
const destinationInfoFlag = document.getElementById("destinationInfoFlag");
const destinationInfoName = document.getElementById("destinationInfoName");
const destinationSummary = document.getElementById("destinationSummary");
const destinationCapital = document.getElementById("destinationCapital");
const destinationCurrency = document.getElementById("destinationCurrency");
const destinationFacts = document.getElementById("destinationFacts");
const closeDestinationInfo = document.getElementById("closeDestinationInfo");
const unlockCelebration = document.getElementById("unlockCelebration");
const missionList = document.getElementById("missionList");
const addMissionButton = document.getElementById("addMissionButton");
const missionDialog = document.getElementById("missionDialog");
const missionForm = document.getElementById("missionForm");
const missionTitleInput = document.getElementById("missionTitle");
const missionDescriptionInput = document.getElementById("missionDescription");
const missionCategoryInput = document.getElementById("missionCategory");
const missionDifficultyInput = document.getElementById("missionDifficulty");
const closeMissionDialog = document.getElementById("closeMissionDialog");
const cancelMissionButton = document.getElementById("cancelMissionButton");
const sampleMissionCheckboxes = [...missionList.querySelectorAll("[data-mission-id]")];

const STORAGE_KEY = "taskerra-progress";
const CUSTOM_MISSIONS_STORAGE_KEY = "taskerra-custom-missions";
const COUNTRY_STORAGE_KEY = "taskerra-selected-country";
const UNLOCKED_COUNTRIES_STORAGE_KEY = "taskerra-unlocked-countries";
const XP_PER_LEVEL = 100;
const DEFAULT_COUNTRY = "india";
const DIFFICULTY_XP = { Easy: 10, Medium: 20, Hard: 30 };
const MISSION_CATEGORIES = new Set(["Study", "Personal", "Fitness", "Hobbies", "Other"]);
const DESTINATIONS = {
	india: {
		name: "India",
		flag: "🇮🇳",
		unlockAt: 0,
		imagePath: "images/india-himalayas.png",
		placeholder: "linear-gradient(155deg, transparent 0 42%, #a9b5a1 42.2% 55%, transparent 55.2%), linear-gradient(205deg, transparent 0 44%, #718e81 44.2% 63%, transparent 63.2%), linear-gradient(#f2cfac 0 58%, #b6d2b1 58%)",
		introduction: "Follow Himalayan trails through quiet mountain villages, prayer flags, and breathtaking high-altitude views.",
		capital: "New Delhi",
		currency: "Indian Rupee (INR)",
		facts: [
			"The Himalayas in northern India include some of the world's highest mountain peaks.",
			"India is home to the world's largest film industry by number of films produced.",
			"Chess and the game of snakes and ladders both have roots in India.",
		],
	},
	japan: {
		name: "Japan",
		flag: "🇯🇵",
		unlockAt: 100,
		imagePath: "images/japan.png",
		placeholder: "radial-gradient(circle at 78% 24%, #f4b982 0 5%, transparent 5.3%), linear-gradient(155deg, transparent 0 43%, #8296a5 43.2% 61%, transparent 61.2%), linear-gradient(205deg, transparent 0 43%, #a9bdc2 43.2% 61%, transparent 61.2%), linear-gradient(#f6d2d2 0 61%, #a9cec0 61%)",
		introduction: "Explore a meeting of ancient traditions, lively cities, and quiet paths beneath Mount Fuji.",
		capital: "Tokyo",
		currency: "Japanese Yen (JPY)",
		facts: ["Japan is made up of thousands of islands.", "Mount Fuji is Japan's highest mountain.", "The Shinkansen is Japan's high-speed rail network."],
	},
	switzerland: {
		name: "Switzerland",
		flag: "🇨🇭",
		unlockAt: 200,
		imagePath: "images/switzerland.png",
		placeholder: "radial-gradient(circle at 78% 22%, #fff1bd 0 5%, transparent 5.3%), linear-gradient(145deg, transparent 0 38%, #fff 38.2% 48%, #7897a4 48.2% 66%, transparent 66.2%), linear-gradient(215deg, transparent 0 42%, #668b8a 42.2% 66%, transparent 66.2%), linear-gradient(#b8dce2 0 64%, #9ac0a4 64%)",
		introduction: "Follow alpine trails past clear lakes, green valleys, and snow-capped mountain peaks.",
		capital: "Bern",
		currency: "Swiss Franc (CHF)",
		facts: ["Switzerland has four national languages.", "The Swiss Alps cover much of the country's landscape.", "The Matterhorn is one of Switzerland's best-known peaks."],
	},
	egypt: {
		name: "Egypt",
		flag: "🇪🇬",
		unlockAt: 300,
		imagePath: "images/egypt.png",
		placeholder: "radial-gradient(circle at 76% 24%, #fff0ae 0 6%, transparent 6.3%), radial-gradient(ellipse at 30% 110%, #e7b66e 0 35%, transparent 35.5%), radial-gradient(ellipse at 90% 118%, #c98e51 0 38%, transparent 38.5%), linear-gradient(#f5c99b 0 62%, #d9a865 62%)",
		introduction: "Discover desert horizons, the Nile, and ancient landmarks shaped by thousands of years of history.",
		capital: "Cairo",
		currency: "Egyptian Pound (EGP)",
		facts: ["The Nile flows through Egypt from south to north.", "The Great Pyramid of Giza is the only surviving ancient wonder of the original Seven Wonders.", "Ancient Egyptians developed one of the earliest known writing systems."],
	},
	indonesia: {
		name: "Indonesia",
		flag: "🇮🇩",
		unlockAt: 400,
		imagePath: "images/indonesia.png",
		placeholder: "radial-gradient(circle at 78% 23%, #f9d29c 0 5%, transparent 5.3%), linear-gradient(155deg, transparent 0 43%, #5f665e 43.2% 61%, transparent 61.2%), linear-gradient(205deg, transparent 0 46%, #45666a 46.2% 63%, transparent 63.2%), linear-gradient(#f4b6a0 0 61%, #75b9ad 61%)",
		introduction: "Travel between tropical islands, volcanic peaks, and vibrant coastal communities across the archipelago.",
		capital: "Jakarta",
		currency: "Indonesian Rupiah (IDR)",
		facts: ["Indonesia is the world's largest archipelago country.", "Komodo dragons live naturally on several Indonesian islands.", "Indonesia has hundreds of distinct languages spoken across its islands."],
	},
};

function loadCustomMissions() {
	try {
		const savedMissions = JSON.parse(localStorage.getItem(CUSTOM_MISSIONS_STORAGE_KEY));
		if (!Array.isArray(savedMissions)) {
			return [];
		}

		const seenIds = new Set();
		return savedMissions.flatMap((mission) => {
			if (!mission || typeof mission.id !== "string" || !mission.id.startsWith("custom-") || seenIds.has(mission.id)) {
				return [];
			}

			const title = typeof mission.title === "string" ? mission.title.trim() : "";
			if (!title || !Object.hasOwn(DIFFICULTY_XP, mission.difficulty)) {
				return [];
			}

			seenIds.add(mission.id);
			return [{
				id: mission.id,
				title: title.slice(0, 80),
				description: typeof mission.description === "string" ? mission.description.trim().slice(0, 180) : "",
				category: MISSION_CATEGORIES.has(mission.category) ? mission.category : "Other",
				difficulty: mission.difficulty,
				xp: DIFFICULTY_XP[mission.difficulty],
			}];
		});
	} catch {
		return [];
	}
}

let customMissions = loadCustomMissions();

function loadSelectedCountry(unlockedCountryIds) {
	try {
		const savedCountry = localStorage.getItem(COUNTRY_STORAGE_KEY);
		return unlockedCountryIds.has(savedCountry) ? savedCountry : DEFAULT_COUNTRY;
	} catch {
		return DEFAULT_COUNTRY;
	}
}

function saveSelectedCountry(countryId) {
	try {
		localStorage.setItem(COUNTRY_STORAGE_KEY, countryId);
	} catch {
		// The default destination remains available if browser storage is unavailable.
	}
}

function applyDestination(countryId) {
	const destination = DESTINATIONS[countryId] || DESTINATIONS[DEFAULT_COUNTRY];
	currentDestinationName.textContent = destination.name;
	destinationTitle.textContent = destination.name;
	destinationIntroduction.textContent = destination.introduction;
	destinationFlag.textContent = destination.flag;
	destinationFlag.setAttribute("aria-label", `Flag of ${destination.name}`);
	document.body.style.setProperty("--destination-background", `url("${destination.imagePath}"), ${destination.placeholder}`);
	destinationInfoFlag.textContent = destination.flag;
	destinationInfoName.textContent = destination.name;
	destinationSummary.textContent = destination.introduction;
	destinationCapital.textContent = destination.capital;
	destinationCurrency.textContent = destination.currency;
	destinationFacts.replaceChildren(...destination.facts.map((fact) => {
		const item = document.createElement("li");
		item.textContent = fact;
		return item;
	}));
}

function loadProgress() {
	try {
		const savedProgress = JSON.parse(localStorage.getItem(STORAGE_KEY));
		if (!savedProgress || !Number.isFinite(savedProgress.xp) || !Array.isArray(savedProgress.completedMissions)) {
			return { xp: 0, completedMissions: [] };
		}

		const validMissionIds = new Set([
			...sampleMissionCheckboxes.map((checkbox) => checkbox.dataset.missionId),
			...customMissions.map((mission) => mission.id),
		]);
		const completedMissions = [...new Set(savedProgress.completedMissions)].filter((missionId) => validMissionIds.has(missionId));
		return { xp: Math.max(0, Math.floor(savedProgress.xp)), completedMissions };
	} catch {
		return { xp: 0, completedMissions: [] };
	}
}

let progress = loadProgress();

function calculateUnlockedCountryIds(xp) {
	return new Set(Object.entries(DESTINATIONS)
		.filter(([, destination]) => xp >= destination.unlockAt)
		.map(([countryId]) => countryId));
}

function loadUnlockedCountryIds() {
	const earnedCountryIds = calculateUnlockedCountryIds(progress.xp);
	try {
		const savedCountryIds = JSON.parse(localStorage.getItem(UNLOCKED_COUNTRIES_STORAGE_KEY));
		if (Array.isArray(savedCountryIds)) {
			return new Set([...savedCountryIds.filter((countryId) => earnedCountryIds.has(countryId)), ...earnedCountryIds]);
		}
	} catch {
		return earnedCountryIds;
	}
	return earnedCountryIds;
}

let unlockedCountryIds = loadUnlockedCountryIds();
let selectedCountry = loadSelectedCountry(unlockedCountryIds);

function saveUnlockedCountryIds() {
	try {
		localStorage.setItem(UNLOCKED_COUNTRIES_STORAGE_KEY, JSON.stringify([...unlockedCountryIds]));
	} catch {
		// Country access still follows XP if browser storage is unavailable.
	}
}

function updateDestinationCards() {
	for (const button of destinationButtons) {
		const countryId = button.dataset.countryId;
		const destination = DESTINATIONS[countryId];
		const isUnlocked = unlockedCountryIds.has(countryId);
		const isSelected = countryId === selectedCountry;
		button.disabled = !isUnlocked;
		button.classList.toggle("is-locked", !isUnlocked);
		button.classList.toggle("is-unlocked", isUnlocked);
		button.classList.toggle("is-selected", isSelected);
		button.setAttribute("aria-pressed", String(isSelected));
		button.setAttribute("aria-label", isUnlocked
			? `${destination.name}, unlocked${isSelected ? ", current destination" : ""}`
			: `${destination.name}, locked until ${destination.unlockAt} XP`);
		button.querySelector(".country-status").textContent = isUnlocked
			? (isSelected ? "Current" : "Unlocked")
			: `Locked · ${destination.unlockAt} XP`;
	}
}

function showUnlockCelebration(countryIds) {
	if (countryIds.length === 0) {		return;
	}
	const names = countryIds.map((countryId) => DESTINATIONS[countryId].name);
	unlockCelebration.textContent = `${names.join(" and ")} ${names.length === 1 ? "is" : "are"} now unlocked. Your next adventure awaits!`;
	unlockCelebration.hidden = false;
}

function updateUnlockedCountries(previousXp) {
	const previousUnlockedIds = unlockedCountryIds;
	unlockedCountryIds = calculateUnlockedCountryIds(progress.xp);
	const newlyUnlockedIds = [...unlockedCountryIds].filter((countryId) => !previousUnlockedIds.has(countryId));
	saveUnlockedCountryIds();

	if (!unlockedCountryIds.has(selectedCountry)) {
		selectedCountry = DEFAULT_COUNTRY;
		saveSelectedCountry(selectedCountry);
		applyDestination(selectedCountry);
	}
	updateDestinationCards();
	if (progress.xp > previousXp) {
		showUnlockCelebration(newlyUnlockedIds);
	}
}

function selectDestination(countryId) {
	if (!Object.hasOwn(DESTINATIONS, countryId) || !unlockedCountryIds.has(countryId)) {
		return;
	}
	selectedCountry = countryId;
	saveSelectedCountry(countryId);
	applyDestination(countryId);
	updateDestinationCards();
	setDestinationInfoOpen(true);
}

function setDestinationInfoOpen(isOpen) {
	destinationInfoPanel.hidden = !isOpen;
	for (const button of destinationButtons) {
		button.setAttribute("aria-expanded", String(isOpen && button.dataset.countryId === selectedCountry));
	}
}

function closeDestinationDetails() {
	setDestinationInfoOpen(false);
	destinationButtons.find((button) => button.dataset.countryId === selectedCountry)?.focus();
}

applyDestination(selectedCountry);
saveSelectedCountry(selectedCountry);
saveUnlockedCountryIds();
updateDestinationCards();

function saveProgress() {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
	} catch {
		// The dashboard remains usable if browser storage is unavailable.
	}
}

function saveCustomMissions() {
	try {
		localStorage.setItem(CUSTOM_MISSIONS_STORAGE_KEY, JSON.stringify(customMissions));
	} catch {
		// Custom missions remain available until the page is refreshed if storage is unavailable.
	}
}

function updateProgressDisplay() {
	const level = Math.floor(progress.xp / XP_PER_LEVEL) + 1;
	const xpInLevel = progress.xp % XP_PER_LEVEL;
	const percentToNextLevel = (xpInLevel / XP_PER_LEVEL) * 100;

	currentLevel.textContent = level;
	currentXp.textContent = progress.xp;
	levelProgressBar.style.width = `${percentToNextLevel}%`;
	levelProgressTrack.setAttribute("aria-valuenow", xpInLevel);
	levelProgressText.textContent = `${xpInLevel} / ${XP_PER_LEVEL} XP to next level`;
}

function restoreCompletedMissions() {
	for (const checkbox of missionList.querySelectorAll("[data-mission-id]")) {
		const isCompleted = progress.completedMissions.includes(checkbox.dataset.missionId);
		checkbox.checked = isCompleted;
		checkbox.disabled = isCompleted;
	}
}

function createMissionId() {
	if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
		return `custom-${crypto.randomUUID()}`;
	}
	return `custom-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function createCustomMissionItem(mission) {
	const item = document.createElement("li");
	item.className = "mission-item custom-mission-item";

	const label = document.createElement("label");
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.dataset.missionId = mission.id;
	checkbox.dataset.xp = mission.xp;
	checkbox.setAttribute("aria-label", `Complete mission: ${mission.title}`);
	checkbox.addEventListener("change", () => completeMission(checkbox));
	label.append(checkbox);

	const copy = document.createElement("span");
	copy.className = "mission-copy";
	const title = document.createElement("strong");
	title.textContent = mission.title;
	copy.append(title);
	if (mission.description) {
		const description = document.createElement("span");
		description.textContent = mission.description;
		copy.append(description);
	}
	const meta = document.createElement("span");
	meta.className = "custom-mission-meta";
	meta.textContent = `${mission.category} / ${mission.difficulty}`;
	copy.append(meta);
	label.append(copy);

	const reward = document.createElement("span");
	reward.className = "mission-reward";
	reward.textContent = `+${mission.xp} XP`;
	label.append(reward);
	item.append(label);

	const deleteButton = document.createElement("button");
	deleteButton.className = "delete-mission-button";
	deleteButton.type = "button";
	deleteButton.textContent = "Remove";
	deleteButton.setAttribute("aria-label", `Remove mission: ${mission.title}`);
	deleteButton.addEventListener("click", () => deleteCustomMission(mission.id));
	item.append(deleteButton);
	return item;
}

function renderCustomMissions() {
	missionList.querySelectorAll(".custom-mission-item").forEach((item) => item.remove());
	for (const mission of customMissions) {
		missionList.append(createCustomMissionItem(mission));
	}
	restoreCompletedMissions();
}

function deleteCustomMission(missionId) {
	customMissions = customMissions.filter((mission) => mission.id !== missionId);
	saveCustomMissions();
	renderCustomMissions();
}

function addCustomMission(event) {
	event.preventDefault();
	const title = missionTitleInput.value.trim();
	if (!title) {
		missionTitleInput.setCustomValidity("Please enter a mission title.");
		missionTitleInput.reportValidity();
		return;
	}

	missionTitleInput.setCustomValidity("");
	const difficulty = missionDifficultyInput.value;
	const mission = {
		id: createMissionId(),
		title: title.slice(0, 80),
		description: missionDescriptionInput.value.trim().slice(0, 180),
		category: MISSION_CATEGORIES.has(missionCategoryInput.value) ? missionCategoryInput.value : "Other",
		difficulty: Object.hasOwn(DIFFICULTY_XP, difficulty) ? difficulty : "Medium",
		xp: DIFFICULTY_XP[Object.hasOwn(DIFFICULTY_XP, difficulty) ? difficulty : "Medium"],
	};

	customMissions.push(mission);
	saveCustomMissions();
	renderCustomMissions();
	missionForm.reset();
	missionDialog.close();
	addMissionButton.focus();
}

function completeMission(checkbox) {
	const missionId = checkbox.dataset.missionId;
	if (!checkbox.checked || progress.completedMissions.includes(missionId)) {
		return;
	}

	const previousXp = progress.xp;
	progress.completedMissions.push(missionId);
	progress.xp += Number(checkbox.dataset.xp);
	checkbox.disabled = true;
	saveProgress();
	updateProgressDisplay();
	updateUnlockedCountries(previousXp);
}

function showDashboard() {
	welcomeHeader.hidden = true;
	welcomeMain.hidden = true;
	dashboardScreen.hidden = false;
	document.body.classList.add("dashboard-mode");
	window.scrollTo(0, 0);
}

function showWelcome() {
	dashboardScreen.hidden = true;
	welcomeHeader.hidden = false;
	welcomeMain.hidden = false;
	document.body.classList.remove("dashboard-mode");
	window.scrollTo(0, 0);
}

startButton.addEventListener("click", showDashboard);
homeButton.addEventListener("click", showWelcome);
destinationButtons.forEach((button) => button.addEventListener("click", () => selectDestination(button.dataset.countryId)));
closeDestinationInfo.addEventListener("click", closeDestinationDetails);
addMissionButton.addEventListener("click", () => missionDialog.showModal());
closeMissionDialog.addEventListener("click", () => missionDialog.close());
cancelMissionButton.addEventListener("click", () => missionDialog.close());
missionForm.addEventListener("submit", addCustomMission);
missionTitleInput.addEventListener("input", () => missionTitleInput.setCustomValidity(""));
sampleMissionCheckboxes.forEach((checkbox) => checkbox.addEventListener("change", () => completeMission(checkbox)));

renderCustomMissions();
restoreCompletedMissions();
updateProgressDisplay();
