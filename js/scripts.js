"use strict";

const $ = selector => document.querySelector(selector);
let timer = null;
let correctCounter = 0;
let questionCounter = 0;
let questionDisplay = 0;

const factionSelect = () => {
    $("#category_select").value = $("#factions").textContent;
}

const resourceSelect = () => {
	$("#category_select").value = $("#resources").textContent;
}

const warframeSelect = () => {
	$("#category_select").value = $("#warframes").textContent;
}

const weaponSelect = () => {
	$("#category_select").value = $("#weapons").textContent;
}

const aSelect = () => {
	$("#category_select").value = $("#multiA").textContent;
}

const bSelect = () => {
	$("#category_select").value = $("#multiB").textContent;
}

const cSelect = () => {
	$("#category_select").value = $("#multiC").textContent;
}

const dSelect = () => {
	$("#category_select").value = $("#multiD").textContent;
}

const updateTimer = () => {
	if ($("#timer").textContent == "0") {
		clearInterval(timer);
		timer = null;
		$("#questionText").textContent = 'Oops! Too Slow';
		$("#displayImage").src = "assets/IncorrectX.png";
	} else {
		$("#timer").textContent = parseInt($("#timer").textContent) - 1;
	}
}

const beginTrivia = () => {
	const triviaOp = $("#category_select").value;

	if (triviaOp == "Factions") {
		window.location.href = "factionsTrivia.html";
	} else if (triviaOp == "Resources") {
		window.location.href = "resourcesTrivia.html";
	} else if (triviaOp == "Warframes") {
		window.location.href = "warframesTrivia.html";
	} else if (triviaOp == "Weapons") {
		window.location.href = "weaponsTrivia.html";
	} else {

	}
	correctCounter = 0
	questionCounter = 0
}

const randomizer = (list) => {
	let randomizeQuestions = [];
	let questionSelect = 0;
	let counter = 0;
	for (let i = list.length; i>=1; i--) {
		questionSelect = Math.floor(Math.random() * i);
		randomizeQuestions[counter] = list[questionSelect];
		counter++;
		list.splice(questionSelect, 1);
	}
	return randomizeQuestions;
}

const reloadQuestions = () => {
	let factionsQuestions = ["In this game players control the members of:",
		"Tenno is a race of:",
		"Which enemy faction specializes in shields and robotic entities?",
		"Which enemy faction specializes in armor plating and toxic damage?",
		"Which enemy faction has no sheilds or armor, but makes up for it in absurdly high spawn rate?",
		"Which enemy faction is directly involved with the history of the Tenno?",
		"Which enemy faction holds an enemy that can make you drop your equipped weapons?",
		"What is the name of buffed elemental enemies in enemy factions?",
		"Which enemy faction is known for having a collective hive mind?",
		"Which enemy faction can corrupt (assimilate) enemies of any other faction?"];

	let resourcesQuestions = ["Which of these resources is only obtainable on Archwing Missions?",
		"Which of these resources have a decay timer (item is lost if not used before timer runs out)?",
		"Which of these resources is only obtainable in the Plains of Eidolon?",
		"Which of these resources is only obtainable from the Cambion Drift?",
		"What is the name of the craftable resource that can double your warframe mod capacity?",
		"What is the name of the craftable resource that can double your weapon mod capacity?",
		"What is the name of the crafttable resource that can modify mod polarity slots?",
		"Which of these resources is specifically used for crafting Corpus weapons?",
		"Which of these resources is specifically used for crafting Grineer weapons?",
		"Which of these resources is obtained in absurdly high quantity from Infested Missions?"];

	let warframesQuestions = ["In Warframe, which of the following Warframes is NOT primarily known for stealth abilities?",
		"Which of these is NOT a playable Warframe?",
		"Which of these warframes are represented as a female Warframe?",
		"Which of these warframes are known for pirate-like appearance and corrosive abilities?",
		"Which of these warframes is a newly added 'Gambler' class?",
		"Which of these warframes had a close relationship with The Stalker, changing his aura from red to green?",
		"Which of these warframes has abilities focused around the command of a Kavat (Cat like beast in Warframe)?",
		"What is the name of the the rideable hoverboard mount for warframes?",
		"What is the name of the connection used by the Tenno to command warframes?",
		"Which frame is a skeletal amalgamation of void entities and various warframe parts?"];

	let weaponsQuestions = ["Which of the following prime weapons is for an Archwing/Voidrig?",
		"What is the name of the fleet ship used by the Tenno for planetary scale combat?",
		"What is the name of the hip attached flight device, that allows frames to freely move through space?",
		"What is the name of the ground based Mech introduced in the Deimos update?",
		"Which of these weapons is obtained along with Exalibur Umbra as his weapon of choice?",
		"What is Khora's focused melee weapon type?",
		"What elemental weapon damage does Saryn specialize in?",
		"Which of these frames have a summonable weapon (abilty that summons usable weapon)?",
		"What is Mesa's preferred weapon type?",
		"Which of these weapons is only usable by a Drifter?"];

	return factionsQuestions, resourcesQuestions, warframesQuestions, weaponsQuestions;
}

const loadAnswers = (factionList, resourceList, warframeList, weaponList) => {
	let correctAnswer = "";

	const factionAnsQ1 = ["The Tenno", "The Voidwalkers", "The Orokin", "The Star Children"];
	const factionAnsQ2 = ["Future Warriors", "Eldritch Mages", "Ancient Warriors", "Orokin Hosts"];
	const factionAnsQ3 = ["The Grineer", "The Corpus", "The Infested", "The Orokin"];
	const factionAnsQ4 = ["The Grineer", "The Corpus", "The Infested", "The Orokin"];
	const factionAnsQ5 = ["The Grineer", "The Corpus", "The Infested", "The Orokin"];
	const factionAnsQ6 = ["The Grineer", "The Corpus", "The Infested", "The Orokin"];
	const factionAnsQ7 = ["The Grineer", "The Corpus", "The Infested", "The Orokin"];
	const factionAnsQ8 = ["Elementals", "Eximus", "Exilus", "Exotics"];
	const factionAnsQ9 = ["The Grineer", "The Corpus", "The Infested", "The Orokin"];
	const factionAnsQ10 = ["The Grineer", "The Corpus", "The Infested", "The Orokin"];

	const resourceAnsQ1 = ["Argon Crystal", "Morphics", "Orokin Cells", "Tellurium"];
	const resourceAnsQ2 = ["Orokin Cells", "Forma", "Argon Crystal", "Iradite"];
	const resourceAnsQ3 = ["Iradite", "Tellurium", "Plastids", "Carbides"];
	const resourceAnsQ4 = ["Tellurium", "Vome", "Neurodes", "Mutagen Sample"];
	const resourceAnsQ5 = ["Orokin Catalyst", "Orokin Reactor", "Orokin Cell", "Forma"];
	const resourceAnsQ6 = ["Orokin Catalyst", "Orokin Reactor", "Orokin Cell", "Forma"];
	const resourceAnsQ7 = ["Orokin Catalyst", "Orokin Reactor", "Orokin Cell", "Forma"];
	const resourceAnsQ8 = ["Carbides", "Detonite Injector", "Fieldron", "Circuits"];
	const resourceAnsQ9 = ["Carbides", "Detonite Injector", "Fieldron", "Circuits"];
	const resourceAnsQ10 = ["Mutagen Sample", "Nano Spores", "Neurodes", "Plastids"];

	const warframeAnsQ1 = ["Rhino", "Ash", "Ivara", "Loki"];
	const warframeAnsQ2 = ["Khora", "Kullervo", "Koumei", "Psyloque"];
	const warframeAnsQ3 = ["Ash", "Ember", "Inaros", "Atlas"];
	const warframeAnsQ4 = ["Grendel", "Gauss", "Hydroid", "Lavos"];
	const warframeAnsQ5 = ["Koumei", "Ivara", "Kullervo", "Ace"];
	const warframeAnsQ6 = ["Khora", "Jade", "Saryn", "Emeralt"];
	const warframeAnsQ7 = ["Koumei", "Valkyr", "Khora", "Voruna"];
	const warframeAnsQ8 = ["Necramech", "Orbiter", "Archwing", "K-Drive"];
	const warframeAnsQ9 = ["Transference", "Holo-cast", "Soma-sync", "Wi-fi"];
	const warframeAnsQ10 = ["Nekros", "Xaku", "Protea", "Kullervo"];

	const weaponAnsQ1 = ["Larkspur Prime", "Tiberon Prime", "Latron Prime", "Fang Prime"];
	const weaponAnsQ2 = ["Orbiter", "Railjack", "Disruptor", "Capital Ship"];
	const weaponAnsQ3 = ["K-Drive", "Star Skimmer", "Archwing", "Omni-Jet"];
	const weaponAnsQ4 = ["Archomech", "Archwing", "Railjack","Necramech"];
	const weaponAnsQ5 = ["Skiajati", "Sun & Moon", "Dex Nikana", "Umbral Cleaver"];
	const weaponAnsQ6 = ["Machete", "Whip", "Dagger", "Staff"];
	const weaponAnsQ7 = ["Shock", "Radiation", "Toxin", "Magnetic"];
	const weaponAnsQ8 = ["Saryn", "Atlas", "Inaros", "Dante"];
	const weaponAnsQ9 = ["Dual Pistols", "Sniper", "Sub-Machine Gun", "Dagger"];
	const weaponAnsQ10 = ["Larkspur", "Sirocco", "Skana", "Nikana"];

	if ($("#questionText").textContent == factionList[0]) {
		$("#multiA").textContent = factionAnsQ1[0]
		$("#multiB").textContent = factionAnsQ1[1]
		$("#multiC").textContent = factionAnsQ1[2]
		$("#multiD").textContent = factionAnsQ1[3]
		correctAnswer = factionAnsQ1[0];	
	} else if ($("#questionText").textContent == factionList[1]) {
		$("#multiA").textContent = factionAnsQ2[0]
		$("#multiB").textContent = factionAnsQ2[1]
		$("#multiC").textContent = factionAnsQ2[2]
		$("#multiD").textContent = factionAnsQ2[3]
		correctAnswer = factionAnsQ2[2];
	} else if ($("#questionText").textContent == factionList[2]) {
		$("#multiA").textContent = factionAnsQ3[0]
		$("#multiB").textContent = factionAnsQ3[1]
		$("#multiC").textContent = factionAnsQ3[2]
		$("#multiD").textContent = factionAnsQ3[3]
		correctAnswer = factionAnsQ3[1];
	} else if ($("#questionText").textContent == factionList[3]) {
		$("#multiA").textContent = factionAnsQ4[0]
		$("#multiB").textContent = factionAnsQ4[1]
		$("#multiC").textContent = factionAnsQ4[2]
		$("#multiD").textContent = factionAnsQ4[3]
		correctAnswer = factionAnsQ4[0];
	} else if ($("#questionText").textContent == factionList[4]) {
		$("#multiA").textContent = factionAnsQ5[0]
		$("#multiB").textContent = factionAnsQ5[1]
		$("#multiC").textContent = factionAnsQ5[2]
		$("#multiD").textContent = factionAnsQ5[3]
		correctAnswer = factionAnsQ5[2];
	} else if ($("#questionText").textContent == factionList[5]) {
		$("#multiA").textContent = factionAnsQ6[0]
		$("#multiB").textContent = factionAnsQ6[1]
		$("#multiC").textContent = factionAnsQ6[2]
		$("#multiD").textContent = factionAnsQ6[3]
		correctAnswer = factionAnsQ6[3];
	} else if ($("#questionText").textContent == factionList[6]) {
		$("#multiA").textContent = factionAnsQ7[0]
		$("#multiB").textContent = factionAnsQ7[1]
		$("#multiC").textContent = factionAnsQ7[2]
		$("#multiD").textContent = factionAnsQ7[3]
		correctAnswer = factionAnsQ7[0];
	} else if ($("#questionText").textContent == factionList[7]) {
		$("#multiA").textContent = factionAnsQ8[0]
		$("#multiB").textContent = factionAnsQ8[1]
		$("#multiC").textContent = factionAnsQ8[2]
		$("#multiD").textContent = factionAnsQ8[3]
		correctAnswer = factionAnsQ8[1];
	} else if ($("#questionText").textContent == factionList[8]) {
		$("#multiA").textContent = factionAnsQ9[0]
		$("#multiB").textContent = factionAnsQ9[1]
		$("#multiC").textContent = factionAnsQ9[2]
		$("#multiD").textContent = factionAnsQ9[3]
		correctAnswer = factionAnsQ9[2];
	} else if ($("#questionText").textContent == factionList[9]) {
		$("#multiA").textContent = factionAnsQ10[0]
		$("#multiB").textContent = factionAnsQ10[1]
		$("#multiC").textContent = factionAnsQ10[2]
		$("#multiD").textContent = factionAnsQ10[3]
		correctAnswer = factionAnsQ10[3];
	} 
	
	//Get and display possible answers for resource questions and store the correct answer
	else if ($("#questionText").textContent == resourceList[0]) {
		$("#multiA").textContent = resourceAnsQ1[0]
		$("#multiB").textContent = resourceAnsQ1[1]
		$("#multiC").textContent = resourceAnsQ1[2]
		$("#multiD").textContent = resourceAnsQ1[3]
		correctAnswer = resourceAnsQ1[3];
	} else if ($("#questionText").textContent == resourceList[1]) {
		$("#multiA").textContent = resourceAnsQ2[0]
		$("#multiB").textContent = resourceAnsQ2[1]
		$("#multiC").textContent = resourceAnsQ2[2]
		$("#multiD").textContent = resourceAnsQ2[3]
		correctAnswer = resourceAnsQ2[2];
	} else if ($("#questionText").textContent == resourceList[2]) {
		$("#multiA").textContent = resourceAnsQ3[0]
		$("#multiB").textContent = resourceAnsQ3[1]
		$("#multiC").textContent = resourceAnsQ3[2]
		$("#multiD").textContent = resourceAnsQ3[3]
		correctAnswer = resourceAnsQ3[0];
	}
	//return the correct answer value for the question being displayed
	return correctAnswer;
}


document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	let factionsQuestions, resourcesQuestions, warframesQuestions, weaponsQuestions = reloadQuestions();

	let randomizeQuestions = [];
	let correctCounter = 0;
	let questionCounter = 0;
	let questionDisplay = 0;
	let correctAnswer = "";

	$("#restart").addEventListener("click", () => {
		window.location.href = "mainMenu.html";
		correctCounter = 0;
		questionCounter = 0;
		questionDisplay = 0;
	})

	if (window.location.href.endsWith("mainMenu.html")) {
		$("#factions").addEventListener("click", factionSelect);
		$("#resources").addEventListener("click", resourceSelect);
		$("#warframes").addEventListener("click", warframeSelect);
		$("#weapons").addEventListener("click", weaponSelect);
		$("#begin").addEventListener("click", beginTrivia);
	} else {
		if (timer == null) {
			timer = setInterval(updateTimer, 1000);
		}
		$("#multiA").addEventListener("click", aSelect);
		$("#multiB").addEventListener("click", bSelect);
		$("#multiC").addEventListener("click", cSelect);
		$("#multiD").addEventListener("click", dSelect);

		if (window.location.href.endsWith("factionsTrivia.html")) {
			$("#body").style.backgroundImage = "url('assets/FactionsBackground.jpg')";
			randomizeQuestions = randomizer(factionsQuestions)
		}
	
		if (window.location.href.endsWith("resourcesTrivia.html")) {
			$("#body").style.backgroundImage = "url('assets/ResourcesBackground.webp')";
			randomizeQuestions = randomizer(resourcesQuestions)
		}
	
		if (window.location.href.endsWith("warframesTrivia.html")) {
			$("#body").style.backgroundImage = "url('assets/WarframesBackground.webp')";
			randomizeQuestions = randomizer(warframesQuestions)
		}
	
		if (window.location.href.endsWith("weaponsTrivia.html")) {
			$("#body").style.backgroundImage = "url('assets/WeaponsBackground.jpg')";
			randomizeQuestions = randomizer(weaponsQuestions)
		}

		$("#questionText").textContent = randomizeQuestions[questionDisplay];
		correctAnswer = loadAnswers();
		console.log(correctAnswer);
		$("#submit").addEventListener("click", () => {
			if ($("#category_select").value == "") {

			} else {
				if ($("#submit").textContent == "Submit") {
					questionDisplay = questionDisplay + 1
					clearInterval(timer)
					timer = null
					questionCounter = questionCounter + 1
					if (questionCounter < 10) {
						$("#submit").textContent = "Next Question"
					} else {
						$("#submit").textContent = "Return To Menu"
					}
				} else if ($("#submit").textContent == "Next Question") {
					timer = setInterval(updateTimer, 1000);
					$("#questionText").textContent = randomizeQuestions[questionDisplay];
					$("#timer").textContent = 30;
					$("#submit").textContent = "Submit";
					$("#category_select").value = "";
					correctAnswer = loadAnswers();
					console.log(correctAnswer);
				} else if ($("#submit").textContent == "Return To Menu") {
					window.location.href = "mainMenu.html";
				}
			}
		})
	
		


	}

	
});