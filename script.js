const startButton = document.getElementById("startButton");
const homeButton = document.getElementById("homeButton");
const homeLink = document.querySelector(".dashboard-brand");
const welcomeHeader = document.getElementById("welcomeHeader");
const welcomeMain = document.getElementById("welcomeMain");
const dashboardScreen = document.getElementById("dashboardScreen");
const currentLevel = document.getElementById("currentLevel");
const currentXp = document.getElementById("currentXp");
const levelProgressTrack = document.getElementById("levelProgressTrack");
const levelProgressBar = document.getElementById("levelProgressBar");
const levelProgressText = document.getElementById("levelProgressText");
const levelUpMessage = document.getElementById("levelUpMessage");
const exportAdventureButton = document.getElementById("exportAdventureButton");
const chooseBackupButton = document.getElementById("chooseBackupButton");
const backupFileInput = document.getElementById("backupFileInput");
const backupStatus = document.getElementById("backupStatus");
const currentDestinationName = document.getElementById("currentDestinationName");
const destinationTitle = document.getElementById("destinationTitle");
const destinationIntroduction = document.getElementById("destinationIntroduction");
const destinationFlag = document.getElementById("destinationFlag");
const destinationGrid = document.querySelector(".destination-grid");
const destinationInfoPanel = document.getElementById("destinationInfoPanel");
const destinationInfoFlag = document.getElementById("destinationInfoFlag");
const destinationInfoName = document.getElementById("destinationInfoName");
const destinationSummary = document.getElementById("destinationSummary");
const destinationCapital = document.getElementById("destinationCapital");
const destinationCurrency = document.getElementById("destinationCurrency");
const destinationCurrencyCode = document.getElementById("destinationCurrencyCode");
const destinationLandmark = document.getElementById("destinationLandmark");
const destinationGreeting = document.getElementById("destinationGreeting");
const destinationGreetingMeaning = document.getElementById("destinationGreetingMeaning");
const destinationFacts = document.getElementById("destinationFacts");
const closeDestinationInfo = document.getElementById("closeDestinationInfo");
const startExploringButton = document.getElementById("startExploringButton");
const unlockCelebration = document.getElementById("unlockCelebration");
const missionList = document.getElementById("missionList");
const missionSearch = document.getElementById("missionSearch");
const missionCategoryFilter = document.getElementById("missionCategoryFilter");
const missionStatusFilter = document.getElementById("missionStatusFilter");
const clearMissionFilters = document.getElementById("clearMissionFilters");
const missionFilterCount = document.getElementById("missionFilterCount");
const addMissionButton = document.getElementById("addMissionButton");
const upcomingMissionList = document.getElementById("upcomingMissionList");
const overdueMissionList = document.getElementById("overdueMissionList");
const completedMissionList = document.getElementById("completedMissionList");
const upcomingMissionEmptyState = document.getElementById("upcomingMissionEmptyState");
const overdueMissionsSection = document.getElementById("overdueMissionsSection");
const completedMissionsSection = document.getElementById("completedMissionsSection");
const statMissionsCreated = document.getElementById("statMissionsCreated");
const statMissionsCompleted = document.getElementById("statMissionsCompleted");
const statXpEarned = document.getElementById("statXpEarned");
const statExplorerLevel = document.getElementById("statExplorerLevel");
const statCompletionRate = document.getElementById("statCompletionRate");
const statActiveDays = document.getElementById("statActiveDays");
const mostUsedCategoryInsight = document.getElementById("mostUsedCategoryInsight");
const mostProductiveWeekdayInsight = document.getElementById("mostProductiveWeekdayInsight");
const overallCompletionRateInsight = document.getElementById("overallCompletionRateInsight");
const weeklyActivityChart = document.getElementById("weeklyActivityChart");
const weeklyActivityEmptyState = document.getElementById("weeklyActivityEmptyState");
const categoryBreakdownList = document.getElementById("categoryBreakdownList");
const achievementHighlightsList = document.getElementById("achievementHighlightsList");
const achievementEmptyState = document.getElementById("achievementEmptyState");
const missionDialog = document.getElementById("missionDialog");
const missionForm = document.getElementById("missionForm");
const missionTitleInput = document.getElementById("missionTitle");
const missionDescriptionInput = document.getElementById("missionDescription");
const missionCategoryInput = document.getElementById("missionCategory");
const missionDifficultyInput = document.getElementById("missionDifficulty");
const missionDueDateInput = document.getElementById("missionDueDate");
const closeMissionDialog = document.getElementById("closeMissionDialog");
const cancelMissionButton = document.getElementById("cancelMissionButton");
const missionEmptyState = document.getElementById("missionEmptyState");
const calendarGrid = document.getElementById("missionCalendarGrid");
const calendarMonthHeading = document.getElementById("calendarMonthHeading");
const previousCalendarMonth = document.getElementById("previousCalendarMonth");
const nextCalendarMonth = document.getElementById("nextCalendarMonth");
const calendarSelectedDate = document.getElementById("calendarSelectedDate");
const calendarMissionCount = document.getElementById("calendarMissionCount");
const calendarItineraryList = document.getElementById("calendarItineraryList");
const calendarItineraryEmptyState = document.getElementById("calendarItineraryEmptyState");
const calendarPlanMissionButton = document.getElementById("calendarPlanMissionButton");

const STORAGE_KEY = "taskerra-progress";
const CUSTOM_MISSIONS_STORAGE_KEY = "taskerra-custom-missions";
const DELETED_SAMPLE_MISSIONS_STORAGE_KEY = "taskerra-deleted-sample-missions";
const SAMPLE_MISSION_DATES_STORAGE_KEY = "taskerra-sample-mission-dates";
const COUNTRY_STORAGE_KEY = "taskerra-selected-country";
const UNLOCKED_COUNTRIES_STORAGE_KEY = "taskerra-unlocked-countries";
const BACKUP_FORMAT = "taskerra-adventure-backup";
const BACKUP_FORMAT_VERSION = 1;
const TASKERRA_VERSION = "1.0.0";
const BASE_XP_PER_LEVEL = 100;
const DEFAULT_COUNTRY = "india";
const COUNTRY_INFO_POPUP_ENABLED = false;
const DIFFICULTY_XP = { Easy: 10, Medium: 20, Hard: 30 };
const MISSION_CATEGORIES = new Set(["Study", "Personal", "Fitness", "Hobbies", "Other"]);
const DEFAULT_MISSIONS = [
	{
		id: "plan-route",
		title: "Plan your route",
		description: "Choose your first priority for today.",
		category: "Personal",
		difficulty: "Medium",
		xp: DIFFICULTY_XP.Medium,
	},
	{
		id: "take-a-break",
		title: "Take a mindful break",
		description: "Step away and recharge for a moment.",
		category: "Fitness",
		difficulty: "Easy",
		xp: DIFFICULTY_XP.Easy,
	},
	{
		id: "finish-a-task",
		title: "Complete one important task",
		description: "Make progress on something that matters.",
		category: "Study",
		difficulty: "Hard",
		xp: DIFFICULTY_XP.Hard,
	},
];
const DESTINATIONS = {
	india: {
		name: "India",
		flag: "🇮🇳",
		unlockAt: 0,
		imagePath: "images/india-himalayas.png",
		placeholder: "linear-gradient(155deg, transparent 0 42%, #a9b5a1 42.2% 55%, transparent 55.2%), linear-gradient(205deg, transparent 0 44%, #718e81 44.2% 63%, transparent 63.2%), linear-gradient(#f2cfac 0 58%, #b6d2b1 58%)",
		introduction: "Follow Himalayan trails through quiet mountain villages, prayer flags, and breathtaking high-altitude views.",
		capital: "New Delhi",
		currency: "Indian Rupee",
		currencyCode: "INR",
		landmark: "Taj Mahal",
		greeting: "Namaste",
		greetingMeaning: "Hello / greetings",
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
		currency: "Japanese Yen",
		currencyCode: "JPY",
		landmark: "Mount Fuji",
		greeting: "Konnichiwa",
		greetingMeaning: "Hello / good afternoon",
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
		currency: "Swiss Franc",
		currencyCode: "CHF",
		landmark: "The Matterhorn",
		greeting: "Grüezi",
		greetingMeaning: "Hello (Swiss German)",
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
		currency: "Egyptian Pound",
		currencyCode: "EGP",
		landmark: "Great Pyramid of Giza",
		greeting: "As-salamu alaykum",
		greetingMeaning: "Peace be upon you",
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
		currency: "Indonesian Rupiah",
		currencyCode: "IDR",
		landmark: "Borobudur Temple",
		greeting: "Halo",
		greetingMeaning: "Hello",
		facts: ["Indonesia is the world's largest archipelago country.", "Komodo dragons live naturally on several Indonesian islands.", "Indonesia has hundreds of distinct languages spoken across its islands."],
	},
};

const BACKUP_STORAGE_KEYS = [
	STORAGE_KEY,
	CUSTOM_MISSIONS_STORAGE_KEY,
	DELETED_SAMPLE_MISSIONS_STORAGE_KEY,
	SAMPLE_MISSION_DATES_STORAGE_KEY,
	COUNTRY_STORAGE_KEY,
	UNLOCKED_COUNTRIES_STORAGE_KEY,
];

function getLocalDateString(date = new Date()) {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
}

const initialCalendarToday = getLocalDateString();
let selectedCalendarDate = initialCalendarToday;
let calendarMonthCursor = new Date(
	Number(initialCalendarToday.slice(0, 4)),
	Number(initialCalendarToday.slice(5, 7)) - 1,
	1,
);

function isValidMissionDate(value) {
	if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
		return false;
	}
	const parsedDate = new Date(`${value}T00:00:00`);
	return !Number.isNaN(parsedDate.getTime()) && getLocalDateString(parsedDate) === value;
}

function formatMissionDate(value) {
	const [year, month, day] = value.split("-").map(Number);
	return new Date(year, month - 1, day).toLocaleDateString(undefined, {
		weekday: "short",
		month: "short",
		day: "numeric",
	});
}

function formatLongCalendarDate(value) {
	const [year, month, day] = value.split("-").map(Number);
	return new Date(year, month - 1, day).toLocaleDateString(undefined, {
		weekday: "long",
		month: "long",
		day: "numeric",
		year: "numeric",
	});
}

function changeCalendarMonth(offset) {
	const selectedDay = Number(selectedCalendarDate.slice(8, 10));
	calendarMonthCursor = new Date(calendarMonthCursor.getFullYear(), calendarMonthCursor.getMonth() + offset, 1);
	const lastDay = new Date(calendarMonthCursor.getFullYear(), calendarMonthCursor.getMonth() + 1, 0).getDate();
	selectedCalendarDate = getLocalDateString(new Date(
		calendarMonthCursor.getFullYear(),
		calendarMonthCursor.getMonth(),
		Math.min(selectedDay, lastDay),
	));
	renderCalendar();
}

function renderCalendar() {
	const year = calendarMonthCursor.getFullYear();
	const month = calendarMonthCursor.getMonth();
	calendarMonthHeading.textContent = new Date(year, month, 1).toLocaleDateString(undefined, { month: "long", year: "numeric" });
	const missionsByDate = new Map();
	for (const mission of getMissions()) {
		if (!missionsByDate.has(mission.dueDate)) {
			missionsByDate.set(mission.dueDate, []);
		}
		missionsByDate.get(mission.dueDate).push(mission);
	}

	const cells = [];
	const leadingBlankDays = (new Date(year, month, 1).getDay() + 6) % 7;
	for (let blankIndex = 0; blankIndex < leadingBlankDays; blankIndex += 1) {
		const spacer = document.createElement("span");
		spacer.className = "calendar-day-spacer";
		spacer.setAttribute("aria-hidden", "true");
		cells.push(spacer);
	}

	const daysInMonth = new Date(year, month + 1, 0).getDate();
	for (let day = 1; day <= daysInMonth; day += 1) {
		const date = getLocalDateString(new Date(year, month, day));
		const dateMissions = missionsByDate.get(date) || [];
		const allCompleted = dateMissions.length > 0 && dateMissions.every((mission) => progress.completedMissions.includes(mission.id));
		const isToday = date === getLocalDateString();
		const dayButton = document.createElement("button");
		dayButton.className = `calendar-day${date === selectedCalendarDate ? " is-selected" : ""}${isToday ? " is-today" : ""}${dateMissions.length ? " has-missions" : ""}${allCompleted ? " has-completed-missions" : ""}`;
		dayButton.type = "button";
		dayButton.setAttribute("aria-pressed", String(date === selectedCalendarDate));
		dayButton.setAttribute("aria-label", `${formatLongCalendarDate(date)}${dateMissions.length ? `, ${dateMissions.length} mission${dateMissions.length === 1 ? "" : "s"}` : ", no missions"}`);

		const dayNumber = document.createElement("span");
		dayNumber.className = "calendar-day-number";
		dayNumber.textContent = day;
		dayButton.append(dayNumber);
		if (isToday) {
			const todayMarker = document.createElement("span");
			todayMarker.className = "calendar-today-marker";
			todayMarker.textContent = "⌖";
			todayMarker.setAttribute("aria-hidden", "true");
			dayButton.append(todayMarker);
		}
		if (dateMissions.length > 0) {
			const symbol = document.createElement("span");
			symbol.className = "calendar-day-symbol";
			symbol.textContent = allCompleted ? "⚑" : "✈";
			symbol.setAttribute("aria-hidden", "true");
			dayButton.append(symbol);
			if (dateMissions.length > 1) {
				const count = document.createElement("span");
				count.className = "calendar-day-count";
				count.textContent = dateMissions.length;
				count.setAttribute("aria-hidden", "true");
				dayButton.append(count);
			}
		}
		dayButton.addEventListener("click", () => {
			selectedCalendarDate = date;
			renderCalendar();
		});
		cells.push(dayButton);
	}
	calendarGrid.replaceChildren(...cells);

	const itineraryMissions = missionsByDate.get(selectedCalendarDate) || [];
	calendarSelectedDate.textContent = formatLongCalendarDate(selectedCalendarDate);
	calendarMissionCount.textContent = `${itineraryMissions.length} mission${itineraryMissions.length === 1 ? "" : "s"} on this date`;
	calendarItineraryList.replaceChildren(...itineraryMissions.map(createMissionCard));
	calendarItineraryEmptyState.hidden = itineraryMissions.length > 0;
}

function getCurrentWeekDateStrings() {
	const today = getLocalDateString();
	const [year, month, day] = today.split("-").map(Number);
	const currentDate = new Date(year, month - 1, day);
	const daysSinceMonday = (currentDate.getDay() + 6) % 7;
	const monday = new Date(year, month - 1, day - daysSinceMonday);
	return Array.from({ length: 7 }, (_, index) => getLocalDateString(new Date(
		monday.getFullYear(),
		monday.getMonth(),
		monday.getDate() + index,
	)));
}

function renderAdventureStatistics() {
	const missions = getMissions();
	const missionsById = new Map(missions.map((mission) => [mission.id, mission]));
	const completedMissionIds = new Set(progress.completedMissions.filter((missionId) => missionsById.has(missionId)));
	const completedCount = completedMissionIds.size;
	const missionCount = missions.length;
	const completionRate = missionCount === 0 ? 0 : Math.round((completedCount / missionCount) * 100);
	const today = getLocalDateString();
	const datedCompletions = [...completedMissionIds].flatMap((missionId) => {
		const mission = missionsById.get(missionId);
		const date = progress.completionDates?.[missionId];
		return mission && isValidMissionDate(date) && date <= today
			? [{ missionId, date, xp: mission.xp }]
			: [];
	});
	const activeDays = new Set(datedCompletions.map((completion) => completion.date)).size;

	statMissionsCreated.textContent = missionCount;
	statMissionsCompleted.textContent = completedCount;
	statXpEarned.textContent = `${progress.xp} XP`;
	statExplorerLevel.textContent = `Level ${getLevelForXp(progress.xp)}`;
	statCompletionRate.textContent = `${completionRate}%`;
	statActiveDays.textContent = activeDays;
	overallCompletionRateInsight.textContent = `${completionRate}%`;

	const categoryCounts = new Map([...MISSION_CATEGORIES].map((category) => [category, { total: 0, completed: 0 }]));
	for (const mission of missions) {
		const category = MISSION_CATEGORIES.has(mission.category) ? mission.category : "Other";
		const counts = categoryCounts.get(category);
		counts.total += 1;
		if (completedMissionIds.has(mission.id)) {
			counts.completed += 1;
		}
	}
	const maxCategoryCount = Math.max(1, ...[...categoryCounts.values()].map(({ total }) => total));
	categoryBreakdownList.replaceChildren(...[...categoryCounts].map(([category, counts]) => {
		const row = document.createElement("li");
		row.className = "category-breakdown-row";
		const label = document.createElement("span");
		label.textContent = category;
		const countLabel = document.createElement("strong");
		countLabel.textContent = `${counts.completed} done · ${counts.total - counts.completed} pending`;
		const track = document.createElement("span");
		track.className = "category-breakdown-track";
		const fill = document.createElement("span");
		fill.style.width = `${(counts.total / maxCategoryCount) * 100}%`;
		track.append(fill);
		row.append(label, countLabel, track);
		return row;
	}));

	const mostUsedCount = Math.max(0, ...[...categoryCounts.values()].map(({ total }) => total));
	if (mostUsedCount === 0) {
		mostUsedCategoryInsight.textContent = "Add missions to see your favorite route.";
	} else {
		const mostUsedCategories = [...categoryCounts].filter(([, counts]) => counts.total === mostUsedCount).map(([category]) => category);
		mostUsedCategoryInsight.textContent = mostUsedCategories.length === 1
			? `${mostUsedCategories[0]} (${mostUsedCount})`
			: `Tie: ${mostUsedCategories.join(" / ")} (${mostUsedCount} each)`;
	}

	const weekDates = getCurrentWeekDateStrings();
	const missionsByDay = new Map(weekDates.map((date) => [date, 0]));
	for (const completion of datedCompletions) {
		if (missionsByDay.has(completion.date)) {
			missionsByDay.set(completion.date, missionsByDay.get(completion.date) + completion.xp);
		}
	}
	const maxDailyCompletions = Math.max(1, ...missionsByDay.values());
	let weeklyCompletionTotal = 0;
	weeklyActivityChart.replaceChildren(...weekDates.map((date) => {
		const xpEarned = missionsByDay.get(date);
		weeklyCompletionTotal += xpEarned;
		const [year, month, day] = date.split("-").map(Number);
		const localDate = new Date(year, month - 1, day);
		const dayColumn = document.createElement("div");
		dayColumn.className = `weekly-day${date === today ? " is-today" : ""}`;
		dayColumn.setAttribute("aria-label", `${localDate.toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" })}: ${xpEarned} XP earned`);

		const countLabel = document.createElement("span");
		countLabel.className = "weekly-day-count";
		countLabel.textContent = `${xpEarned} XP`;
		const barTrack = document.createElement("span");
		barTrack.className = "weekly-bar-track";
		const barFill = document.createElement("span");
		barFill.className = "weekly-bar-fill";
		barFill.style.height = xpEarned === 0 ? "0%" : `${Math.max(10, (xpEarned / maxDailyCompletions) * 100)}%`;
		barTrack.append(barFill);
		const dayLabel = document.createElement("span");
		dayLabel.textContent = localDate.toLocaleDateString(undefined, { weekday: "short" });
		dayColumn.append(countLabel, barTrack, dayLabel);
		return dayColumn;
	}));
	weeklyActivityEmptyState.hidden = weeklyCompletionTotal > 0;

	const weekdayCounts = new Map(Array.from({ length: 7 }, (_, index) => [index, 0]));
	for (const completion of datedCompletions) {
		const [year, month, day] = completion.date.split("-").map(Number);
		const weekday = new Date(year, month - 1, day).getDay();
		weekdayCounts.set(weekday, weekdayCounts.get(weekday) + 1);
	}
	const maxWeekdayCompletions = Math.max(0, ...weekdayCounts.values());
	if (maxWeekdayCompletions === 0) {
		mostProductiveWeekdayInsight.textContent = "Not enough dated history yet.";
	} else {
		const mostProductiveWeekdays = [...weekdayCounts]
			.filter(([, count]) => count === maxWeekdayCompletions)
			.map(([weekday]) => new Date(2024, 0, 7 + weekday).toLocaleDateString(undefined, { weekday: "long" }));
		mostProductiveWeekdayInsight.textContent = `${mostProductiveWeekdays.join(" / ")} (${maxWeekdayCompletions})`;
	}

	const earnedAchievements = [
		{ icon: "✧", title: "First mission completed", earned: completedCount >= 1 },
		{ icon: "⚑", title: "10 missions completed", earned: completedCount >= 10 },
		{ icon: "⚑", title: "25 missions completed", earned: completedCount >= 25 },
		{ icon: "✦", title: "100 XP earned", earned: progress.xp >= 100 },
		{ icon: "✦", title: "500 XP earned", earned: progress.xp >= 500 },
		{ icon: "✦", title: "1000 XP earned", earned: progress.xp >= 1000 },
		{ icon: "⌖", title: "First level-up", earned: getLevelForXp(progress.xp) >= 2 },
		{ icon: "⌖", title: "First destination unlocked", earned: unlockedCountryIds.size > 1 },
	].filter((achievement) => achievement.earned);
	achievementHighlightsList.replaceChildren(...earnedAchievements.map((achievement) => {
		const item = document.createElement("li");
		item.className = "achievement-highlight";
		const icon = document.createElement("span");
		icon.setAttribute("aria-hidden", "true");
		icon.textContent = achievement.icon;
		item.append(icon, document.createTextNode(achievement.title));
		return item;
	}));
	achievementEmptyState.hidden = earnedAchievements.length > 0;
}

function loadSampleMissionDates() {
	try {
		const savedDates = JSON.parse(localStorage.getItem(SAMPLE_MISSION_DATES_STORAGE_KEY));
		if (!savedDates || typeof savedDates !== "object" || Array.isArray(savedDates)) {
			return {};
		}

		const sampleMissionIds = new Set(DEFAULT_MISSIONS.map((mission) => mission.id));
		return Object.fromEntries(Object.entries(savedDates).filter(([missionId, dueDate]) => sampleMissionIds.has(missionId) && isValidMissionDate(dueDate)));
	} catch {
		return {};
	}
}

let sampleMissionDates = loadSampleMissionDates();

let customMissionsNeedDateMigration = false;
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

			const dueDate = isValidMissionDate(mission.dueDate) ? mission.dueDate : getLocalDateString();
			if (dueDate !== mission.dueDate) {
				customMissionsNeedDateMigration = true;
			}
			seenIds.add(mission.id);
			return [{
				id: mission.id,
				title: title.slice(0, 80),
				description: typeof mission.description === "string" ? mission.description.trim().slice(0, 180) : "",
				category: MISSION_CATEGORIES.has(mission.category) ? mission.category : "Other",
				difficulty: mission.difficulty,
				xp: DIFFICULTY_XP[mission.difficulty],
				dueDate,
			}];
		});
	} catch {
		return [];
	}
}

let customMissions = loadCustomMissions();

function loadDeletedSampleMissionIds() {
	try {
		const savedIds = JSON.parse(localStorage.getItem(DELETED_SAMPLE_MISSIONS_STORAGE_KEY));
		const sampleMissionIds = new Set(DEFAULT_MISSIONS.map((mission) => mission.id));
		return new Set(Array.isArray(savedIds) ? savedIds.filter((missionId) => sampleMissionIds.has(missionId)) : []);
	} catch {
		return new Set();
	}
}

let deletedSampleMissionIds = loadDeletedSampleMissionIds();
let sampleMissionDatesNeedMigration = false;
for (const mission of DEFAULT_MISSIONS) {
	if (!deletedSampleMissionIds.has(mission.id) && !sampleMissionDates[mission.id]) {
		sampleMissionDates[mission.id] = getLocalDateString();
		sampleMissionDatesNeedMigration = true;
	}
}

function getMissions() {
	return [
		...DEFAULT_MISSIONS
			.filter((mission) => !deletedSampleMissionIds.has(mission.id))
			.map((mission) => ({ ...mission, dueDate: sampleMissionDates[mission.id] || getLocalDateString() })),
		...customMissions,
	];
}

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
	destinationCurrencyCode.textContent = `(${destination.currencyCode})`;
	destinationLandmark.textContent = destination.landmark;
	destinationGreeting.textContent = destination.greeting;
	destinationGreetingMeaning.textContent = destination.greetingMeaning;
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
			return { xp: 0, completedMissions: [], completionDates: {} };
		}

		const validMissionIds = new Set(getMissions().map((mission) => mission.id));
		const completedMissions = [...new Set(savedProgress.completedMissions)].filter((missionId) => validMissionIds.has(missionId));
		const savedCompletionDates = savedProgress.completionDates && typeof savedProgress.completionDates === "object" && !Array.isArray(savedProgress.completionDates)
			? savedProgress.completionDates
			: {};
		const completedMissionIds = new Set(completedMissions);
		const completionDates = Object.fromEntries(Object.entries(savedCompletionDates).filter(([missionId, date]) =>
			completedMissionIds.has(missionId) && isValidMissionDate(date) && date <= getLocalDateString(),
		));
		return { xp: Math.max(0, Math.floor(savedProgress.xp)), completedMissions, completionDates };
	} catch {
		return { xp: 0, completedMissions: [], completionDates: {} };
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
	for (const button of destinationGrid.querySelectorAll("[data-country-id]")) {
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
	if (countryIds.length === 0) {
		return;
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
	if (!COUNTRY_INFO_POPUP_ENABLED) {
		return;
	}
	if (isOpen && !destinationInfoPanel.open) {
		destinationInfoPanel.showModal();
	} else if (!isOpen && destinationInfoPanel.open) {
		destinationInfoPanel.close();
	}
	for (const button of destinationGrid.querySelectorAll("[data-country-id]")) {
		button.setAttribute("aria-expanded", String(isOpen && button.dataset.countryId === selectedCountry));
	}
}

function closeDestinationDetails() {
	setDestinationInfoOpen(false);
	destinationGrid.querySelector(`[data-country-id="${selectedCountry}"]`)?.focus();
}

function closeDestinationOnBackdrop(event) {
	if (event.target !== destinationInfoPanel) {
		return;
	}
	const bounds = destinationInfoPanel.getBoundingClientRect();
	if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
		closeDestinationDetails();
	}
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

function showBackupStatus(message, isError = false) {
	backupStatus.textContent = message;
	backupStatus.classList.toggle("is-error", isError);
	backupStatus.hidden = false;
}

function createAdventureBackup() {
	const storage = Object.fromEntries(BACKUP_STORAGE_KEYS.map((key) => [key, localStorage.getItem(key)]));
	return {
		format: BACKUP_FORMAT,
		formatVersion: BACKUP_FORMAT_VERSION,
		taskerraVersion: TASKERRA_VERSION,
		createdAt: new Date().toISOString(),
		explorerLevel: getLevelForXp(progress.xp),
		storage,
	};
}

function parseBackupStorageValue(storage, key, fallbackValue) {
	const rawValue = storage[key];
	if (rawValue === null) {
		return fallbackValue;
	}
	if (typeof rawValue !== "string") {
		throw new Error(`Backup entry for ${key} must be JSON text or null.`);
	}
	try {
		return JSON.parse(rawValue);
	} catch {
		throw new Error(`Backup entry for ${key} contains invalid JSON.`);
	}
}

function validateAdventureBackup(backup) {
	const expectedProperties = ["format", "formatVersion", "taskerraVersion", "createdAt", "explorerLevel", "storage"];
	if (!backup || typeof backup !== "object" || Array.isArray(backup) || Object.keys(backup).length !== expectedProperties.length || expectedProperties.some((property) => !Object.hasOwn(backup, property))) {
		throw new Error("This file is not a supported TASKERRA adventure backup.");
	}
	if (backup.format !== BACKUP_FORMAT || backup.formatVersion !== BACKUP_FORMAT_VERSION || typeof backup.taskerraVersion !== "string") {
		throw new Error("This TASKERRA backup version is not supported.");
	}
	if (typeof backup.createdAt !== "string" || !Number.isFinite(Date.parse(backup.createdAt))) {
		throw new Error("The backup creation date is invalid.");
	}
	if (!backup.storage || typeof backup.storage !== "object" || Array.isArray(backup.storage) || Object.keys(backup.storage).length !== BACKUP_STORAGE_KEYS.length || BACKUP_STORAGE_KEYS.some((key) => !Object.hasOwn(backup.storage, key))) {
		throw new Error("The backup is missing required TASKERRA data.");
	}
	for (const value of Object.values(backup.storage)) {
		if (value !== null && typeof value !== "string") {
			throw new Error("Backup storage values must be JSON text or null.");
		}
	}

	const restoredProgress = parseBackupStorageValue(backup.storage, STORAGE_KEY, { xp: 0, completedMissions: [], completionDates: {} });
	if (!restoredProgress || typeof restoredProgress !== "object" || Array.isArray(restoredProgress) || !Number.isSafeInteger(restoredProgress.xp) || restoredProgress.xp < 0 || !Array.isArray(restoredProgress.completedMissions)) {
		throw new Error("The backup's XP or completion data is invalid.");
	}
	if (new Set(restoredProgress.completedMissions).size !== restoredProgress.completedMissions.length || restoredProgress.completedMissions.some((missionId) => typeof missionId !== "string")) {
		throw new Error("The backup contains invalid or duplicate completed mission IDs.");
	}

	const restoredCustomMissions = parseBackupStorageValue(backup.storage, CUSTOM_MISSIONS_STORAGE_KEY, []);
	if (!Array.isArray(restoredCustomMissions)) {
		throw new Error("The custom mission list is invalid.");
	}
	const customMissionIds = new Set();
	for (const mission of restoredCustomMissions) {
		if (!mission || typeof mission !== "object" || Array.isArray(mission) || typeof mission.id !== "string" || !mission.id.startsWith("custom-") || customMissionIds.has(mission.id) || typeof mission.title !== "string" || !mission.title.trim() || !Object.hasOwn(DIFFICULTY_XP, mission.difficulty) || (mission.category !== undefined && !MISSION_CATEGORIES.has(mission.category)) || (mission.dueDate !== undefined && !isValidMissionDate(mission.dueDate)) || (mission.xp !== undefined && mission.xp !== DIFFICULTY_XP[mission.difficulty])) {
			throw new Error("The backup contains an invalid custom mission.");
		}
		customMissionIds.add(mission.id);
	}

	const deletedSampleIds = parseBackupStorageValue(backup.storage, DELETED_SAMPLE_MISSIONS_STORAGE_KEY, []);
	const sampleMissionIds = new Set(DEFAULT_MISSIONS.map((mission) => mission.id));
	if (!Array.isArray(deletedSampleIds) || new Set(deletedSampleIds).size !== deletedSampleIds.length || deletedSampleIds.some((missionId) => !sampleMissionIds.has(missionId))) {
		throw new Error("The deleted sample mission list is invalid.");
	}

	const sampleDates = parseBackupStorageValue(backup.storage, SAMPLE_MISSION_DATES_STORAGE_KEY, {});
	if (!sampleDates || typeof sampleDates !== "object" || Array.isArray(sampleDates) || Object.entries(sampleDates).some(([missionId, dueDate]) => !sampleMissionIds.has(missionId) || !isValidMissionDate(dueDate))) {
		throw new Error("The sample mission calendar data is invalid.");
	}

	const availableMissionIds = new Set([
		...DEFAULT_MISSIONS.filter((mission) => !deletedSampleIds.includes(mission.id)).map((mission) => mission.id),
		...customMissionIds,
	]);
	if (restoredProgress.completedMissions.some((missionId) => !availableMissionIds.has(missionId))) {
		throw new Error("The backup refers to a completed mission that is not present.");
	}
	const completionDates = restoredProgress.completionDates ?? {};
	if (!completionDates || typeof completionDates !== "object" || Array.isArray(completionDates) || Object.entries(completionDates).some(([missionId, date]) => !restoredProgress.completedMissions.includes(missionId) || !isValidMissionDate(date))) {
		throw new Error("The mission completion history is invalid.");
	}

	const selectedCountry = backup.storage[COUNTRY_STORAGE_KEY];
	if (selectedCountry !== null && (typeof selectedCountry !== "string" || !Object.hasOwn(DESTINATIONS, selectedCountry))) {
		throw new Error("The selected destination is invalid.");
	}
	const restoredUnlocked = parseBackupStorageValue(backup.storage, UNLOCKED_COUNTRIES_STORAGE_KEY, null);
	if (restoredUnlocked !== null && (!Array.isArray(restoredUnlocked) || new Set(restoredUnlocked).size !== restoredUnlocked.length || restoredUnlocked.some((countryId) => !Object.hasOwn(DESTINATIONS, countryId)))) {
		throw new Error("The unlocked destination list is invalid.");
	}
	const earnedCountryIds = calculateUnlockedCountryIds(restoredProgress.xp);
	if (restoredUnlocked && [...restoredUnlocked].some((countryId) => !earnedCountryIds.has(countryId))) {
		throw new Error("The backup unlocks a destination beyond its XP requirement.");
	}
	if (selectedCountry && !earnedCountryIds.has(selectedCountry)) {
		throw new Error("The selected destination is not unlocked by the saved XP.");
	}
	if (!Number.isSafeInteger(backup.explorerLevel) || backup.explorerLevel !== getLevelForXp(restoredProgress.xp)) {
		throw new Error("The saved Explorer level does not match the saved XP.");
	}

	return backup.storage;
}

function restoreAdventureBackup(restoredStorage) {
	const previousStorage = new Map(BACKUP_STORAGE_KEYS.map((key) => [key, localStorage.getItem(key)]));
	try {
		for (const key of BACKUP_STORAGE_KEYS) {
			const value = restoredStorage[key];
			if (value === null) {
				localStorage.removeItem(key);
			} else {
				localStorage.setItem(key, value);
			}
		}
	} catch (error) {
		for (const [key, value] of previousStorage) {
			try {
				if (value === null) {
					localStorage.removeItem(key);
				} else {
					localStorage.setItem(key, value);
				}
			} catch {
				// Continue restoring other keys if a storage rollback operation fails.
			}
		}
		throw new Error(`Could not restore the backup. Existing progress was preserved where storage allowed: ${error.message}`);
	}
}

function exportAdventure() {
	try {
		const backup = createAdventureBackup();
		const file = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
		const fileUrl = URL.createObjectURL(file);
		const downloadLink = document.createElement("a");
		downloadLink.href = fileUrl;
		downloadLink.download = `TASKERRA-adventure-${getLocalDateString()}.json`;
		document.body.append(downloadLink);
		downloadLink.click();
		downloadLink.remove();
		window.setTimeout(() => URL.revokeObjectURL(fileUrl), 1000);
		showBackupStatus("Adventure backup exported successfully.");
	} catch (error) {
		showBackupStatus(`Backup export failed: ${error.message}`, true);
	}
}

async function importAdventureFile(file) {
	if (!file) {
		return;
	}
	try {
		if (file.size > 5 * 1024 * 1024) {
			throw new Error("Backup files must be 5 MB or smaller.");
		}
		let backup;
		try {
			backup = JSON.parse(await file.text());
		} catch {
			throw new Error("The selected file is not valid JSON.");
		}

		const restoredStorage = validateAdventureBackup(backup);
		const confirmed = window.confirm("Importing this backup will replace your current missions, XP, dates, and destination progress. This cannot be undone. Continue?");
		if (!confirmed) {
			showBackupStatus("Backup import cancelled.");
			return;
		}

		restoreAdventureBackup(restoredStorage);
		showBackupStatus("Adventure restored successfully. Refreshing your dashboard...");
		window.location.reload();
	} catch (error) {
		showBackupStatus(`Backup import failed: ${error.message}`, true);
	}
}

function saveCustomMissions() {
	try {
		localStorage.setItem(CUSTOM_MISSIONS_STORAGE_KEY, JSON.stringify(customMissions));
	} catch {
		// Custom missions remain available until the page is refreshed if storage is unavailable.
	}
}

if (customMissionsNeedDateMigration) {
	saveCustomMissions();
	customMissionsNeedDateMigration = false;
}

function saveSampleMissionDates() {
	try {
		localStorage.setItem(SAMPLE_MISSION_DATES_STORAGE_KEY, JSON.stringify(sampleMissionDates));
	} catch {
		// Sample mission dates remain updated until the page is refreshed if storage is unavailable.
	}
}

if (sampleMissionDatesNeedMigration) {
	saveSampleMissionDates();
	sampleMissionDatesNeedMigration = false;
}

function updateProgressDisplay() {
	const level = getLevelForXp(progress.xp);
	const xpAtLevelStart = getTotalXpForLevel(level);
	const xpAtNextLevel = getTotalXpForLevel(level + 1);
	const xpRequiredThisLevel = xpAtNextLevel - xpAtLevelStart;
	const xpInLevel = Math.min(xpRequiredThisLevel, Math.max(0, progress.xp - xpAtLevelStart));
	const xpRemaining = Math.max(0, xpAtNextLevel - progress.xp);
	const percentToNextLevel = Math.min(100, (xpInLevel / xpRequiredThisLevel) * 100);

	currentLevel.textContent = level;
	currentXp.textContent = progress.xp;
	levelProgressBar.style.width = `${percentToNextLevel}%`;
	levelProgressTrack.setAttribute("aria-valuemax", xpRequiredThisLevel);
	levelProgressTrack.setAttribute("aria-valuenow", xpInLevel);
	levelProgressText.textContent = `${xpInLevel} / ${xpRequiredThisLevel} XP this level | ${xpRemaining} XP to Level ${level + 1}`;
	levelUpMessage.hidden = true;
}

function getLevelForXp(totalXp) {
	return Math.floor((1 + Math.sqrt(1 + (8 * totalXp) / BASE_XP_PER_LEVEL)) / 2);
}

function getTotalXpForLevel(level) {
	return (BASE_XP_PER_LEVEL * level * (level - 1)) / 2;
}

function createMissionId() {
	const existingIds = new Set(getMissions().map((mission) => mission.id));
	let missionId;
	do {
		missionId = typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
			? `custom-${crypto.randomUUID()}`
			: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
	} while (existingIds.has(missionId));
	return missionId;
}

function createMissionCard(mission) {
	const isCompleted = progress.completedMissions.includes(mission.id);
	const today = getLocalDateString();
	const isOverdue = !isCompleted && mission.dueDate < today;
	const item = document.createElement("li");
	item.className = `mission-item${isCompleted ? " is-completed" : ""}`;

	const main = document.createElement("div");
	main.className = "mission-card-main";
	const title = document.createElement("strong");
	title.className = "mission-card-title";
	title.textContent = mission.title;
	main.append(title);
	if (mission.description) {
		const description = document.createElement("p");
		description.className = "mission-card-description";
		description.textContent = mission.description;
		main.append(description);
	}
	const dueDate = document.createElement("p");
	dueDate.className = `mission-due-date${isOverdue ? " is-overdue" : ""}`;
	const dueTime = document.createElement("time");
	dueTime.setAttribute("datetime", mission.dueDate);
	dueTime.textContent = isOverdue
		? `Overdue · ${formatMissionDate(mission.dueDate)}`
		: mission.dueDate === today ? "Due today" : `Due ${formatMissionDate(mission.dueDate)}`;
	dueDate.append(dueTime);
	main.append(dueDate);
	const meta = document.createElement("div");
	meta.className = "mission-card-meta";
	for (const detail of [mission.category, mission.difficulty]) {
		const tag = document.createElement("span");
		tag.className = "mission-detail-tag";
		tag.textContent = detail;
		meta.append(tag);
	}
	main.append(meta);
	item.append(main);

	const actions = document.createElement("div");
	actions.className = "mission-card-actions";
	const reward = document.createElement("span");
	reward.className = "mission-reward";
	reward.textContent = `+${mission.xp} XP`;
	actions.append(reward);

	const actionGroup = document.createElement("div");
	actionGroup.className = "mission-action-group";
	const completeButton = document.createElement("button");
	completeButton.className = "mission-action-button complete-mission-button";
	completeButton.type = "button";
	completeButton.textContent = isCompleted ? "Completed" : "Complete";
	completeButton.disabled = isCompleted;
	completeButton.setAttribute("aria-label", isCompleted ? `${mission.title} completed` : `Complete ${mission.title} for ${mission.xp} XP`);
	completeButton.addEventListener("click", () => completeMission(mission.id));
	actionGroup.append(completeButton);
	if (!isCompleted) {
		const rescheduleButton = document.createElement("button");
		rescheduleButton.className = "mission-action-button reschedule-mission-button";
		rescheduleButton.type = "button";
		rescheduleButton.textContent = "Reschedule";
		rescheduleButton.setAttribute("aria-label", `Reschedule ${mission.title}`);
		actionGroup.append(rescheduleButton);

		const reschedulePanel = document.createElement("div");
		reschedulePanel.className = "mission-reschedule-panel";
		reschedulePanel.hidden = true;
		const dateLabel = document.createElement("label");
		dateLabel.className = "mission-field";
		const dateLabelText = document.createElement("span");
		dateLabelText.textContent = "New due date";
		const dateInput = document.createElement("input");
		dateInput.type = "date";
		dateInput.min = today;
		dateInput.value = mission.dueDate;
		dateLabel.append(dateLabelText, dateInput);
		reschedulePanel.append(dateLabel);

		const saveDateButton = document.createElement("button");
		saveDateButton.className = "mission-action-button save-reschedule-button";
		saveDateButton.type = "button";
		saveDateButton.textContent = "Save date";
		saveDateButton.addEventListener("click", () => {
			const selectedDate = dateInput.value;
			if (!isValidMissionDate(selectedDate) || selectedDate < getLocalDateString()) {
				dateInput.setCustomValidity("Choose today or a future date.");
				dateInput.reportValidity();
				return;
			}
			dateInput.setCustomValidity("");
			rescheduleMission(mission.id, selectedDate);
		});
		reschedulePanel.append(saveDateButton);

		const cancelDateButton = document.createElement("button");
		cancelDateButton.className = "mission-action-button cancel-reschedule-button";
		cancelDateButton.type = "button";
		cancelDateButton.textContent = "Cancel";
		cancelDateButton.addEventListener("click", () => {
			reschedulePanel.hidden = true;
		});
		reschedulePanel.append(cancelDateButton);

		rescheduleButton.addEventListener("click", () => {
			reschedulePanel.hidden = !reschedulePanel.hidden;
			if (!reschedulePanel.hidden) {
				dateInput.focus();
			}
		});
		item.append(reschedulePanel);
	}

	const deleteButton = document.createElement("button");
	deleteButton.className = "mission-action-button delete-mission-button";
	deleteButton.type = "button";
	deleteButton.textContent = "Delete";
	deleteButton.setAttribute("aria-label", `Delete mission: ${mission.title}`);
	deleteButton.addEventListener("click", () => deleteMission(mission.id));
	actionGroup.append(deleteButton);
	actions.append(actionGroup);
	item.append(actions);
	return item;
}

	
   function renderMissions() {
    const today = getLocalDateString();

    const searchText = missionSearch.value.trim().toLowerCase();
    const selectedCategory = missionCategoryFilter.value;
    const selectedStatus = missionStatusFilter.value;

    const allMissions = getMissions();

    const filteredMissions = allMissions.filter((mission) => {
        const isCompleted = progress.completedMissions.includes(mission.id);
        const isOverdue = !isCompleted && mission.dueDate < today;

        const matchesSearch =
            mission.title.toLowerCase().includes(searchText) ||
            (mission.description || "").toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            mission.category === selectedCategory;

        let matchesStatus = true;

        if (selectedStatus === "completed") {
            matchesStatus = isCompleted;
        } else if (selectedStatus === "overdue") {
            matchesStatus = isOverdue;
        } else if (selectedStatus === "pending") {
            matchesStatus = !isCompleted && !isOverdue;
        }

        return matchesSearch && matchesCategory && matchesStatus;
    });

    const groups = {
        today: [],
        upcoming: [],
        overdue: [],
        completed: []
    };

    for (const mission of filteredMissions) {
        if (progress.completedMissions.includes(mission.id)) {
            groups.completed.push(mission);
        } else if (mission.dueDate < today) {
            groups.overdue.push(mission);
        } else if (mission.dueDate === today) {
            groups.today.push(mission);
        } else {
            groups.upcoming.push(mission);
        }
    }

    missionList.replaceChildren(
        ...groups.today.map(createMissionCard)
    );

    upcomingMissionList.replaceChildren(
        ...groups.upcoming.map(createMissionCard)
    );

    overdueMissionList.replaceChildren(
        ...groups.overdue.map(createMissionCard)
    );

    completedMissionList.replaceChildren(
        ...groups.completed.map(createMissionCard)
    );

    missionEmptyState.hidden = groups.today.length > 0;
    upcomingMissionEmptyState.hidden = groups.upcoming.length > 0;
    overdueMissionsSection.hidden = groups.overdue.length === 0;
    completedMissionsSection.hidden = groups.completed.length === 0;

    missionFilterCount.textContent =
        `Showing ${filteredMissions.length} of ${allMissions.length} missions`;

    renderCalendar();
    renderAdventureStatistics();
}
	


	


function saveDeletedSampleMissionIds() {
	try {
		localStorage.setItem(DELETED_SAMPLE_MISSIONS_STORAGE_KEY, JSON.stringify([...deletedSampleMissionIds]));
	} catch {
		// Deleted sample missions remain hidden until the page is refreshed if storage is unavailable.
	}
}

function deleteMission(missionId) {
	if (customMissions.some((mission) => mission.id === missionId)) {
		customMissions = customMissions.filter((mission) => mission.id !== missionId);
		saveCustomMissions();
	} else if (DEFAULT_MISSIONS.some((mission) => mission.id === missionId)) {
		deletedSampleMissionIds.add(missionId);
		delete sampleMissionDates[missionId];
		saveDeletedSampleMissionIds();
		saveSampleMissionDates();
	} else {
		return;
	}

	progress.completedMissions = progress.completedMissions.filter((completedId) => completedId !== missionId);
	delete progress.completionDates[missionId];
	saveProgress();
	renderMissions();
}

function rescheduleMission(missionId, dueDate) {
	if (!isValidMissionDate(dueDate) || dueDate < getLocalDateString() || progress.completedMissions.includes(missionId)) {
		return false;
	}

	const customMission = customMissions.find((mission) => mission.id === missionId);
	if (customMission) {
		customMission.dueDate = dueDate;
		saveCustomMissions();
	} else if (DEFAULT_MISSIONS.some((mission) => mission.id === missionId) && !deletedSampleMissionIds.has(missionId)) {
		sampleMissionDates[missionId] = dueDate;
		saveSampleMissionDates();
	} else {
		return false;
	}

	renderMissions();
	return true;
}

function completeMission(missionId) {
	const mission = getMissions().find((item) => item.id === missionId);
	if (!mission || progress.completedMissions.includes(missionId)) {
		return;
	}

	const previousXp = progress.xp;
	const previousLevel = getLevelForXp(previousXp);
	progress.completedMissions.push(missionId);
	progress.completionDates[missionId] = getLocalDateString();
	progress.xp += mission.xp;
	saveProgress();
	updateProgressDisplay();
	const currentLevelNumber = getLevelForXp(progress.xp);
	if (currentLevelNumber > previousLevel) {
		levelUpMessage.textContent = `Level Up! New adventures await! You reached Level ${currentLevelNumber}.`;
		levelUpMessage.hidden = false;
	}
	updateUnlockedCountries(previousXp);
	renderMissions();
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
	const today = getLocalDateString();
	const dueDate = missionDueDateInput.value || today;
	missionDueDateInput.min = today;
	if (!isValidMissionDate(dueDate) || dueDate < today) {
		missionDueDateInput.setCustomValidity("Choose today or a future date.");
		missionDueDateInput.reportValidity();
		return;
	}
	missionDueDateInput.setCustomValidity("");
	const difficulty = missionDifficultyInput.value;
	const mission = {
		id: createMissionId(),
		title: title.slice(0, 80),
		description: missionDescriptionInput.value.trim().slice(0, 180),
		category: MISSION_CATEGORIES.has(missionCategoryInput.value) ? missionCategoryInput.value : "Other",
		difficulty: Object.hasOwn(DIFFICULTY_XP, difficulty) ? difficulty : "Medium",
		xp: DIFFICULTY_XP[Object.hasOwn(DIFFICULTY_XP, difficulty) ? difficulty : "Medium"],
		dueDate,
	};

	customMissions.push(mission);
	saveCustomMissions();
	renderMissions();
	missionForm.reset();
	missionDueDateInput.min = getLocalDateString();
	missionDueDateInput.value = missionDueDateInput.min;
	missionDialog.close();
	addMissionButton.focus();
}

function openMissionDialogForDate(date) {
	const today = getLocalDateString();
	missionDueDateInput.min = today;
	missionDueDateInput.value = isValidMissionDate(date) && date >= today ? date : today;
	missionDueDateInput.setCustomValidity("");
	missionDialog.showModal();
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
homeLink.addEventListener("click", (event) => {
	event.preventDefault();
	showWelcome();
});
destinationGrid.querySelectorAll(".country-tile[data-country-id]").forEach((button) => {
	button.addEventListener("click", () => {
		selectDestination(button.dataset.countryId);
	});
});
addMissionButton.addEventListener("click", () => {
	openMissionDialogForDate(selectedCalendarDate);
});
calendarPlanMissionButton.addEventListener("click", () => openMissionDialogForDate(selectedCalendarDate));
previousCalendarMonth.addEventListener("click", () => changeCalendarMonth(-1));
nextCalendarMonth.addEventListener("click", () => changeCalendarMonth(1));
closeMissionDialog.addEventListener("click", () => missionDialog.close());
cancelMissionButton.addEventListener("click", () => missionDialog.close());
missionForm.addEventListener("submit", addCustomMission);
missionTitleInput.addEventListener("input", () => missionTitleInput.setCustomValidity(""));
exportAdventureButton.addEventListener("click", exportAdventure);
chooseBackupButton.addEventListener("click", () => backupFileInput.click());
backupFileInput.addEventListener("change", async () => {
	const [file] = backupFileInput.files || [];
	backupFileInput.value = "";
	await importAdventureFile(file);
});

renderMissions();
updateProgressDisplay();
missionSearch.addEventListener("input", renderMissions);
missionCategoryFilter.addEventListener("change", renderMissions);
missionStatusFilter.addEventListener("change", renderMissions);

clearMissionFilters.addEventListener("click", () => {
    missionSearch.value = "";
    missionCategoryFilter.value = "all";
    missionStatusFilter.value = "all";
    renderMissions();
});
// TASKERRA Mission Search and Filters

missionSearch.addEventListener("input", renderMissions);

missionCategoryFilter.addEventListener("change", renderMissions);

missionStatusFilter.addEventListener("change", renderMissions);

clearMissionFilters.addEventListener("click", () => {
    missionSearch.value = "";
    missionCategoryFilter.value = "all";
    missionStatusFilter.value = "all";

    renderMissions();
});