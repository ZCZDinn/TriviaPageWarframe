"use strict";

const $ = selector => document.querySelector(selector);
let timer = null;
let correctCounter = 0;
let questionCounter = 0;
let questionDisplay = 0;

//Event handler for selecting the faction category button on the mainMenu
const factionSelect = () => {
    $("#category_select").value = $("#factions").textContent;
	const audio = $('#factionSelect');
	if (!audio.paused) { 
		audio.pause();
		audio.currentTime = 0;
	}
	audio.play()
		.catch(error => {
			console.error('Audio playback failed:', error);
		});
	
}

//Event handler for selecting the resources category button on the mainMenu
const resourceSelect = () => {
	$("#category_select").value = $("#resources").textContent;
	const audio = $('#resourceSelect');
	if (!audio.paused) { 
		audio.pause();
		audio.currentTime = 0;
	}
	audio.play()
		.catch(error => {
			console.error('Audio playback failed:', error);
		});
}

//Event handler for selecting the warframes category button on the mainMenu
const warframeSelect = () => {
	$("#category_select").value = $("#warframes").textContent;
	const audio = $('#warframeSelect');
	if (!audio.paused) { 
		audio.pause();
		audio.currentTime = 0;
	}
	audio.play()
		.catch(error => {
			console.error('Audio playback failed:', error);
		});
}

//Event handler for selecting the weapons category button on the mainMenu
const weaponSelect = () => {
	$("#category_select").value = $("#weapons").textContent;
	const audio = $('#weaponSelect');
	if (!audio.paused) { 
		audio.pause();
		audio.currentTime = 0;
	}
	audio.play()
		.catch(error => {
			console.error('Audio playback failed:', error);
		});
}

//Event handler for selecting the multiple choice option 'A' button on the trivia pages
const aSelect = () => {
	$("#category_select").value = $("#multiA").textContent;
}

//Event handler for selecting the multiple choice option 'B' button on the trivia pages
const bSelect = () => {
	$("#category_select").value = $("#multiB").textContent;
}

//Event handler for selecting the multiple choice option 'C' button on the trivia pages
const cSelect = () => {
	$("#category_select").value = $("#multiC").textContent;
}

//Event handler for selecting the multiple choice option 'D' button on the trivia pages
const dSelect = () => {
	$("#category_select").value = $("#multiD").textContent;
}

//Event handler that updates the timer, if the timer runs out, modifies the page to notify the user
const updateTimer = () => {
	if ($("#timer").textContent == "0") {
		clearInterval(timer);
		timer = null;
		$("#questionText").textContent = 'Oops! Too Slow';
		$("#displayImage").src = "assets/IncorrectX.png";
		$("#displayImage").style.backgroundColor = "rgb(255, 255, 255, 0.7)"
	} else {
		$("#timer").textContent = parseInt($("#timer").textContent) - 1;
	}
}

//Event handler that begins a trivia page based on the category selected, does nothing if no category selected.
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
	
}

//Randomizes the questions for the trivia list that was selected
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

//Reloads the questions (randomizer empties the original instantiation)
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

	return [factionsQuestions, resourcesQuestions, warframesQuestions, weaponsQuestions];
}

//Loads the correct answer value, the multiple choice options and the image for the question being displayed
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
		$("#displayImage").src = 'assets/StyanaxDesktop2.png'	
	} else if ($("#questionText").textContent == factionList[1]) {
		$("#multiA").textContent = factionAnsQ2[0]
		$("#multiB").textContent = factionAnsQ2[1]
		$("#multiC").textContent = factionAnsQ2[2]
		$("#multiD").textContent = factionAnsQ2[3]
		correctAnswer = factionAnsQ2[2];
		$("#displayImage").src = 'assets/XboxWarframe.jfif'
	} else if ($("#questionText").textContent == factionList[2]) {
		$("#multiA").textContent = factionAnsQ3[0]
		$("#multiB").textContent = factionAnsQ3[1]
		$("#multiC").textContent = factionAnsQ3[2]
		$("#multiD").textContent = factionAnsQ3[3]
		correctAnswer = factionAnsQ3[1];
		$("#displayImage").src = 'assets/warframe-octavia-prime-fighting-alongside-rhino.avif'
	} else if ($("#questionText").textContent == factionList[3]) {
		$("#multiA").textContent = factionAnsQ4[0]
		$("#multiB").textContent = factionAnsQ4[1]
		$("#multiC").textContent = factionAnsQ4[2]
		$("#multiD").textContent = factionAnsQ4[3]
		correctAnswer = factionAnsQ4[0];
		$("#displayImage").src = 'assets/Dagath.png'
	} else if ($("#questionText").textContent == factionList[4]) {
		$("#multiA").textContent = factionAnsQ5[0]
		$("#multiB").textContent = factionAnsQ5[1]
		$("#multiC").textContent = factionAnsQ5[2]
		$("#multiD").textContent = factionAnsQ5[3]
		correctAnswer = factionAnsQ5[2];
		$("#displayImage").src = 'assets/Dante.png'
	} else if ($("#questionText").textContent == factionList[5]) {
		$("#multiA").textContent = factionAnsQ6[0]
		$("#multiB").textContent = factionAnsQ6[1]
		$("#multiC").textContent = factionAnsQ6[2]
		$("#multiD").textContent = factionAnsQ6[3]
		correctAnswer = factionAnsQ6[3];
		$("#displayImage").src = 'assets/Koumei.jpg'
	} else if ($("#questionText").textContent == factionList[6]) {
		$("#multiA").textContent = factionAnsQ7[0]
		$("#multiB").textContent = factionAnsQ7[1]
		$("#multiC").textContent = factionAnsQ7[2]
		$("#multiD").textContent = factionAnsQ7[3]
		correctAnswer = factionAnsQ7[0];
		$("#displayImage").src = 'assets/Xaku.png'
	} else if ($("#questionText").textContent == factionList[7]) {
		$("#multiA").textContent = factionAnsQ8[0]
		$("#multiB").textContent = factionAnsQ8[1]
		$("#multiC").textContent = factionAnsQ8[2]
		$("#multiD").textContent = factionAnsQ8[3]
		correctAnswer = factionAnsQ8[1];
		$("#displayImage").src = 'assets/Clash1999.png'
	} else if ($("#questionText").textContent == factionList[8]) {
		$("#multiA").textContent = factionAnsQ9[0]
		$("#multiB").textContent = factionAnsQ9[1]
		$("#multiC").textContent = factionAnsQ9[2]
		$("#multiD").textContent = factionAnsQ9[3]
		correctAnswer = factionAnsQ9[2];
		$("#displayImage").src = 'assets/BeginnerImg.jpg'
	} else if ($("#questionText").textContent == factionList[9]) {
		$("#multiA").textContent = factionAnsQ10[0]
		$("#multiB").textContent = factionAnsQ10[1]
		$("#multiC").textContent = factionAnsQ10[2]
		$("#multiD").textContent = factionAnsQ10[3]
		correctAnswer = factionAnsQ10[3];
		$("#displayImage").src = 'assets/GroupImgWar.jpg'
	} 
	
	//Get and display possible answers for resource questions and store the correct answer
	else if ($("#questionText").textContent == resourceList[0]) {
		$("#multiA").textContent = resourceAnsQ1[0]
		$("#multiB").textContent = resourceAnsQ1[1]
		$("#multiC").textContent = resourceAnsQ1[2]
		$("#multiD").textContent = resourceAnsQ1[3]
		correctAnswer = resourceAnsQ1[3];
		$("#displayImage").src = 'assets/StyanaxDesktop2.png'
	} else if ($("#questionText").textContent == resourceList[1]) {
		$("#multiA").textContent = resourceAnsQ2[0]
		$("#multiB").textContent = resourceAnsQ2[1]
		$("#multiC").textContent = resourceAnsQ2[2]
		$("#multiD").textContent = resourceAnsQ2[3]
		correctAnswer = resourceAnsQ2[2];
		$("#displayImage").src = 'assets/XboxWarframe.jfif'
	} else if ($("#questionText").textContent == resourceList[2]) {
		$("#multiA").textContent = resourceAnsQ3[0]
		$("#multiB").textContent = resourceAnsQ3[1]
		$("#multiC").textContent = resourceAnsQ3[2]
		$("#multiD").textContent = resourceAnsQ3[3]
		correctAnswer = resourceAnsQ3[0];
		$("#displayImage").src = 'assets/warframe-octavia-prime-fighting-alongside-rhino.avif'
	} else if ($("#questionText").textContent == resourceList[3]) {
		$("#multiA").textContent = resourceAnsQ4[0]
		$("#multiB").textContent = resourceAnsQ4[1]
		$("#multiC").textContent = resourceAnsQ4[2]
		$("#multiD").textContent = resourceAnsQ4[3]
		correctAnswer = resourceAnsQ4[1];
		$("#displayImage").src = 'assets/Dagath.png'
	} else if ($("#questionText").textContent == resourceList[4]) {
		$("#multiA").textContent = resourceAnsQ5[0]
		$("#multiB").textContent = resourceAnsQ5[1]
		$("#multiC").textContent = resourceAnsQ5[2]
		$("#multiD").textContent = resourceAnsQ5[3]
		correctAnswer = resourceAnsQ5[1];
		$("#displayImage").src = 'assets/Dante.png'
	}  else if ($("#questionText").textContent == resourceList[5]) {
		$("#multiA").textContent = resourceAnsQ6[0]
		$("#multiB").textContent = resourceAnsQ6[1]
		$("#multiC").textContent = resourceAnsQ6[2]
		$("#multiD").textContent = resourceAnsQ6[3]
		correctAnswer = resourceAnsQ6[0];
		$("#displayImage").src = 'assets/Koumei.jpg'
	} else if ($("#questionText").textContent == resourceList[6]) {
		$("#multiA").textContent = resourceAnsQ7[0]
		$("#multiB").textContent = resourceAnsQ7[1]
		$("#multiC").textContent = resourceAnsQ7[2]
		$("#multiD").textContent = resourceAnsQ7[3]
		correctAnswer = resourceAnsQ7[3];
		$("#displayImage").src = 'assets/Xaku.png'
	} else if ($("#questionText").textContent == resourceList[7]) {
		$("#multiA").textContent = resourceAnsQ8[0]
		$("#multiB").textContent = resourceAnsQ8[1]
		$("#multiC").textContent = resourceAnsQ8[2]
		$("#multiD").textContent = resourceAnsQ8[3]
		correctAnswer = resourceAnsQ8[2];
		$("#displayImage").src = 'assets/Clash1999.png'
	} else if ($("#questionText").textContent == resourceList[8]) {
		$("#multiA").textContent = resourceAnsQ9[0]
		$("#multiB").textContent = resourceAnsQ9[1]
		$("#multiC").textContent = resourceAnsQ9[2]
		$("#multiD").textContent = resourceAnsQ9[3]
		correctAnswer = resourceAnsQ9[1];
		$("#displayImage").src = 'assets/BeginnerImg.jpg'
	} else if ($("#questionText").textContent == resourceList[9]) {
		$("#multiA").textContent = resourceAnsQ10[0]
		$("#multiB").textContent = resourceAnsQ10[1]
		$("#multiC").textContent = resourceAnsQ10[2]
		$("#multiD").textContent = resourceAnsQ10[3]
		correctAnswer = resourceAnsQ10[1];
		$("#displayImage").src = 'assets/GroupImgWar.jpg'
	}


	else if ($("#questionText").textContent == warframeList[0]) {
		$("#multiA").textContent = warframeAnsQ1[0]
		$("#multiB").textContent = warframeAnsQ1[1]
		$("#multiC").textContent = warframeAnsQ1[2]
		$("#multiD").textContent = warframeAnsQ1[3]
		correctAnswer = warframeAnsQ1[0];
		$("#displayImage").src = 'assets/StyanaxDesktop2.png'
	} else if ($("#questionText").textContent == warframeList[1]) {
		$("#multiA").textContent = warframeAnsQ2[0]
		$("#multiB").textContent = warframeAnsQ2[1]
		$("#multiC").textContent = warframeAnsQ2[2]
		$("#multiD").textContent = warframeAnsQ2[3]
		correctAnswer = warframeAnsQ2[3];
		$("#displayImage").src = 'assets/XboxWarframe.jfif'
	} else if ($("#questionText").textContent == warframeList[2]) {
		$("#multiA").textContent = warframeAnsQ3[0]
		$("#multiB").textContent = warframeAnsQ3[1]
		$("#multiC").textContent = warframeAnsQ3[2]
		$("#multiD").textContent = warframeAnsQ3[3]
		correctAnswer = warframeAnsQ3[1];
		$("#displayImage").src = 'assets/warframe-octavia-prime-fighting-alongside-rhino.avif'
	} else if ($("#questionText").textContent == warframeList[3]) {
		$("#multiA").textContent = warframeAnsQ4[0]
		$("#multiB").textContent = warframeAnsQ4[1]
		$("#multiC").textContent = warframeAnsQ4[2]
		$("#multiD").textContent = warframeAnsQ4[3]
		correctAnswer = warframeAnsQ4[2];
		$("#displayImage").src = 'assets/Dagath.png'
	} else if ($("#questionText").textContent == warframeList[4]) {
		$("#multiA").textContent = warframeAnsQ5[0]
		$("#multiB").textContent = warframeAnsQ5[1]
		$("#multiC").textContent = warframeAnsQ5[2]
		$("#multiD").textContent = warframeAnsQ5[3]
		correctAnswer = warframeAnsQ5[0];
		$("#displayImage").src = 'assets/Dante.png'
	} else if ($("#questionText").textContent == warframeList[5]) {
		$("#multiA").textContent = warframeAnsQ6[0]
		$("#multiB").textContent = warframeAnsQ6[1]
		$("#multiC").textContent = warframeAnsQ6[2]
		$("#multiD").textContent = warframeAnsQ6[3]
		correctAnswer = warframeAnsQ6[1];
		$("#displayImage").src = 'assets/Koumei.jpg'
	} else if ($("#questionText").textContent == warframeList[6]) {
		$("#multiA").textContent = warframeAnsQ7[0]
		$("#multiB").textContent = warframeAnsQ7[1]
		$("#multiC").textContent = warframeAnsQ7[2]
		$("#multiD").textContent = warframeAnsQ7[3]
		correctAnswer = warframeAnsQ7[2];
		$("#displayImage").src = 'assets/Xaku.png'
	} else if ($("#questionText").textContent == warframeList[7]) {
		$("#multiA").textContent = warframeAnsQ8[0]
		$("#multiB").textContent = warframeAnsQ8[1]
		$("#multiC").textContent = warframeAnsQ8[2]
		$("#multiD").textContent = warframeAnsQ8[3]
		correctAnswer = warframeAnsQ8[3];
		$("#displayImage").src = 'assets/Clash1999.png'
	} else if ($("#questionText").textContent == warframeList[8]) {
		$("#multiA").textContent = warframeAnsQ9[0]
		$("#multiB").textContent = warframeAnsQ9[1]
		$("#multiC").textContent = warframeAnsQ9[2]
		$("#multiD").textContent = warframeAnsQ9[3]
		correctAnswer = warframeAnsQ9[0];
		$("#displayImage").src = 'assets/BeginnerImg.jpg'
	} else if ($("#questionText").textContent == warframeList[9]) {
		$("#multiA").textContent = warframeAnsQ10[0]
		$("#multiB").textContent = warframeAnsQ10[1]
		$("#multiC").textContent = warframeAnsQ10[2]
		$("#multiD").textContent = warframeAnsQ10[3]
		correctAnswer = warframeAnsQ10[1];
		$("#displayImage").src = 'assets/GroupImgWar.jpg'
	}


	else if ($("#questionText").textContent == weaponList[0]) {
		$("#multiA").textContent = weaponAnsQ1[0]
		$("#multiB").textContent = weaponAnsQ1[1]
		$("#multiC").textContent = weaponAnsQ1[2]
		$("#multiD").textContent = weaponAnsQ1[3]
		correctAnswer = weaponAnsQ1[0];
		$("#displayImage").src = 'assets/StyanaxDesktop2.png'
	} else if ($("#questionText").textContent == weaponList[1]) {
		$("#multiA").textContent = weaponAnsQ2[0]
		$("#multiB").textContent = weaponAnsQ2[1]
		$("#multiC").textContent = weaponAnsQ2[2]
		$("#multiD").textContent = weaponAnsQ2[3]
		correctAnswer = weaponAnsQ2[1];
		$("#displayImage").src = 'assets/XboxWarframe.jfif'
	} else if ($("#questionText").textContent == weaponList[2]) {
		$("#multiA").textContent = weaponAnsQ3[0]
		$("#multiB").textContent = weaponAnsQ3[1]
		$("#multiC").textContent = weaponAnsQ3[2]
		$("#multiD").textContent = weaponAnsQ3[3]
		correctAnswer = weaponAnsQ3[2];
		$("#displayImage").src = 'assets/warframe-octavia-prime-fighting-alongside-rhino.avif'
	} else if ($("#questionText").textContent == weaponList[3]) {
		$("#multiA").textContent = weaponAnsQ4[0]
		$("#multiB").textContent = weaponAnsQ4[1]
		$("#multiC").textContent = weaponAnsQ4[2]
		$("#multiD").textContent = weaponAnsQ4[3]
		correctAnswer = weaponAnsQ4[3];
		$("#displayImage").src = 'assets/Dagath.png'
	} else if ($("#questionText").textContent == weaponList[4]) {
		$("#multiA").textContent = weaponAnsQ5[0]
		$("#multiB").textContent = weaponAnsQ5[1]
		$("#multiC").textContent = weaponAnsQ5[2]
		$("#multiD").textContent = weaponAnsQ5[3]
		correctAnswer = weaponAnsQ5[0];
		$("#displayImage").src = 'assets/Dante.png'
	} else if ($("#questionText").textContent == weaponList[5]) {
		$("#multiA").textContent = weaponAnsQ6[0]
		$("#multiB").textContent = weaponAnsQ6[1]
		$("#multiC").textContent = weaponAnsQ6[2]
		$("#multiD").textContent = weaponAnsQ6[3]
		correctAnswer = weaponAnsQ6[1];
		$("#displayImage").src = 'assets/Koumei.jpg'
	} else if ($("#questionText").textContent == weaponList[6]) {
		$("#multiA").textContent = weaponAnsQ7[0]
		$("#multiB").textContent = weaponAnsQ7[1]
		$("#multiC").textContent = weaponAnsQ7[2]
		$("#multiD").textContent = weaponAnsQ7[3]
		correctAnswer = weaponAnsQ7[2];
		$("#displayImage").src = 'assets/Xaku.png'
	} else if ($("#questionText").textContent == weaponList[7]) {
		$("#multiA").textContent = weaponAnsQ8[0]
		$("#multiB").textContent = weaponAnsQ8[1]
		$("#multiC").textContent = weaponAnsQ8[2]
		$("#multiD").textContent = weaponAnsQ8[3]
		correctAnswer = weaponAnsQ8[3];
		$("#displayImage").src = 'assets/Clash1999.png'
	} else if ($("#questionText").textContent == weaponList[8]) {
		$("#multiA").textContent = weaponAnsQ9[0]
		$("#multiB").textContent = weaponAnsQ9[1]
		$("#multiC").textContent = weaponAnsQ9[2]
		$("#multiD").textContent = weaponAnsQ9[3]
		correctAnswer = weaponAnsQ9[0];
		$("#displayImage").src = 'assets/BeginnerImg.jpg'
	} else if ($("#questionText").textContent == weaponList[9]) {
		$("#multiA").textContent = weaponAnsQ10[0]
		$("#multiB").textContent = weaponAnsQ10[1]
		$("#multiC").textContent = weaponAnsQ10[2]
		$("#multiD").textContent = weaponAnsQ10[3]
		correctAnswer = weaponAnsQ10[1];
		$("#displayImage").src = 'assets/GroupImgWar.jpg'
	}
	$("#displayImage").style.backgroundColor = "rgba(0, 0, 0, 0.7)"
	//return the correct answer value for the question being displayed
	return correctAnswer;
}

//DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
	
	//Images to be preloaded
	let assetImages = ["assets/IncorrectX.png", "assets/green-tick.png", "assets/StyanaxDesktop2.png", "assets/XboxWarframe.jfif",
		'assets/warframe-octavia-prime-fighting-alongside-rhino.avif', 'assets/Dagath.png', 'assets/Dante.png', 'assets/Koumei.jpg',
		'assets/Xaku.png', 'assets/Clash1999.png', 'assets/BeginnerImg.jpg', 'assets/GroupImgWar.jpg']

	//Preload images
	for (let imgSource of assetImages) {
		let picture = new Image();
		picture.src = imgSource;
	}

	//Instantiate variables to be used
	let randomizeQuestions = [];
	let correctCounter = 0;
	let questionCounter = 0;
	let questionDisplay = 0;
	let correctAnswer = "";

	//Event handler for the click of the restart application button
	$("#restart").addEventListener("click", () => {
		window.location.href = "mainMenu.html";
		correctCounter = 0;
		questionCounter = 0;
		questionDisplay = 0;
	})

	//Event listeners for only the mainMenu page
	if (window.location.href.endsWith("mainMenu.html")) {
		$("#factions").addEventListener("click", factionSelect);
		$("#resources").addEventListener("click", resourceSelect);
		$("#warframes").addEventListener("click", warframeSelect);
		$("#weapons").addEventListener("click", weaponSelect);
		$("#begin").addEventListener("click", beginTrivia);
        
	} 
	//Handlers and operations for the trivia pages
	else {
		if (timer == null) {
			timer = setInterval(updateTimer, 1000);
		}
		$("#multiA").addEventListener("click", aSelect);
		$("#multiB").addEventListener("click", bSelect);
		$("#multiC").addEventListener("click", cSelect);
		$("#multiD").addEventListener("click", dSelect);

		//load the questions
		let allQuestions = reloadQuestions();
		let factionsQuestions = allQuestions[0];
		let resourcesQuestions = allQuestions[1];
		let warframesQuestions = allQuestions[2];
		let weaponsQuestions = allQuestions[3];

		//Randomize the correct list based on the page selected and change the background image
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
		//Reload questions after at least 1 digital list was cycled through
		allQuestions = reloadQuestions();
		factionsQuestions = allQuestions[0];
		resourcesQuestions = allQuestions[1];
		warframesQuestions = allQuestions[2];
		weaponsQuestions = allQuestions[3];

		//Display first question and multiple choice options
		$("#questionText").textContent = randomizeQuestions[questionDisplay];
		correctAnswer = loadAnswers(factionsQuestions, resourcesQuestions, warframesQuestions, weaponsQuestions);
		console.log(correctAnswer);

		//Event for the click of the Submit button
		$("#submit").addEventListener("click", () => {
			//If user has not selected anything yet, does nothing
			if ($("#category_select").value == "") {

			} 
			//If user has made a selection
			else {
				//If the button is still a "Submit" button
				if ($("#submit").textContent == "Submit") {
					questionDisplay = questionDisplay + 1
					//reset timer
					clearInterval(timer)
					timer = null
					//up the amount of questions answered
					questionCounter = questionCounter + 1
					//If the user ran out of time
					if($("#questionText").textContent == "Oops! Too Slow") {
						$("#timer").textContent = 'Be Faster!'
						$("#displayImage").style.backgroundColor = "rgb(255, 255, 255, 0.7)"
						$("#questionText").textContent = 'The answer was ' + correctAnswer + "..."
						$("#displayImage").src = 'assets/IncorrectX.png'
					} else {
						//If the user answered correctly
						if ($("#category_select").value == correctAnswer) {
							$("#timer").textContent = 'Correct!'
							correctCounter = correctCounter + 1
							$("#displayImage").style.backgroundColor = "rgb(255, 255, 255, 0.7)"
							$("#questionText").textContent = 'The answer was ' + correctAnswer + "!"
							$("#displayImage").src = 'assets/green-tick.png'
						} 
						//If the user answered incorrectly
						else {
							$("#timer").textContent = 'Incorrect...'
							$("#displayImage").style.backgroundColor = "rgb(255, 255, 255, 0.7)"
							$("#questionText").textContent = 'The answer was ' + correctAnswer + "..."
							$("#displayImage").src = 'assets/IncorrectX.png'
						}

						//If the user has answered all questions changes the button to a View Results button
						if (questionCounter < 10) {
							$("#submit").textContent = "Next Question"
						} else {
							$("#submit").textContent = "View Results"
						}
					}
				} 
				//If the button displays "Next Question", loads the next question for the user, and changes elements back to their proper question
				//display values
				else if ($("#submit").textContent == "Next Question") {
					timer = setInterval(updateTimer, 1000);
					$("#questionText").textContent = randomizeQuestions[questionDisplay];
					$("#timer").textContent = 30;
					$("#submit").textContent = "Submit";
					$("#category_select").value = "";
					//Grab the new correct answer and update MC options
					correctAnswer = loadAnswers(factionsQuestions, resourcesQuestions, warframesQuestions, resourcesQuestions);
					console.log(correctAnswer);
				} 
				//When button dislays "Return To Menu" returns the user to the mainMenu page
				else if ($("#submit").textContent == "Return To Menu") {
					window.location.href = "mainMenu.html";
				}
				//When button displays View Results, displays the final result for the user
				//and sets the button to display "Return To Menu"
				 else if ($("#submit").textContent == "View Results") {
					if (correctCounter > 5) {
						$("#timer").textContent = "Good Job!"
						$("#questionText").textContent = "Congratulations you got " + correctCounter + " out of 10 questions correct!"
						$("#displayImage").src = 'assets/green-tick.png'
						$("#displayImage").style.backgroundColor = "rgb(255, 255, 255, 0.7)"
					} else {
						$("#timer").textContent = "Better Luck Next Time."
						$("#questionText").textContent = "Try better next time, you only got " + correctCounter + " out of 10 questions correct."
						$("#displayImage").src = 'assets/IncorrectX.png'
						$("#displayImage").style.backgroundColor = "rgb(255, 255, 255, 0.7)"
					}
					$("#submit").textContent = "Return To Menu";
				}
			}
		})
	
		


	}

	
});