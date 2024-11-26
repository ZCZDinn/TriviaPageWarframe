"use strict";

const $ = selector => document.querySelector(selector);
let timer = null;
let correctCounter = 0;
let questionCounter = 0;

const factionsQuestions = ["In this game players control the members of:",
	"Tenno is a race of:",
	"Which enemy faction specializes in shields and robotic entities?",
	"Which enemy faction specializes in armor plating and toxic damage?",
	"Which enemy faction has no sheilds or armor, but makes up for it in absurdly high spawn rate?",
	"Which enemy faction is directly involved with the history of the Tenno?",
	"Which enemy faction holds an enemy that can make you drop your equipped weapons?",
	"What is the name of buffed elemental enemies in enemy factions?",
	"Which enemy faction is known for having a collective hive mind?",
	"Which enemy faction can corrupt (assimilate) enemies of any other faction?"];

const resourcesQuestions = ["Which of these resources is only obtainable on Archwing Missions?",
	"Which of these resources have a decay timer (item is lost if not used before timer runs out)?",
	"Which of these resources is obtainable in the Plains of Eidolon?",
	"Which of these resources is obtainable from Deimos?",
	"What is the name of the craftable resource that can double your warframe mod capacity?",
	"What is the name of the craftable resource that can double your weapon mod capacity?",
	"What is the name of the crafttable resource that can modify mod polarity slots?",
	"Which of these resources is used for crafting Corpus weapons?",
	"Which of these resources is used for crafting Grineer weapons?",
	"Which of these resources is obtained in high quantity from Infested Missions?"];

const warframesQuestions = ["In Warframe, which of the following Warframes is NOT primarily known for stealth abilities?",
	"Which of these is NOT a playable Warframe?",
	"Which of these warframes are represented as a female Warframe?",
	"Which of these warframes are known for pirate-like appearance and corrosive abilities?",
	"Which of these warframes is a newly added 'Gambler' class?",
	"Which of these warframes had a close relationship with The Stalker, changing his aura from red to green?",
	"Which of these warframes has abilities focused around the command of a Kavat (Cat like beast in Warframe)?",
	"What is the name of the the rideable hoverboard mount for warframes?",
	"What is the name of the connection used by the Tenno to command warframes?",
	"Which frame is a skeletal amalgamation of void entities and various warframe parts"];

const weaponsQuestions = ["Which of the following prime weapons is for an Archwing/Voidrig?",
	"What is the name of the fleet ship used by the Tenno for planetary scale combat?",
	"What is the name of the hip attached flight device, that allows frames to freely move through space?",
	"What is the name of the ground based Mech introduced in the Deimos update?",
	"Which of these weapons is obtained along with Exalibur Umbra as his weapon of choice?",
	"What is Khora's focused melee weapon type?",
	"What elemental weapon damage does Saryn specialize in?",
	"Which of these frames have a summonable weapon (abilty that summons usable weapon)?",
	"What is Mesa's preferred weapon type?",
	"Which of these weapons is only usable by a Drifter?"];

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
}


document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
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
	}

	if (window.location.href.endsWith("factionsTrivia.html")) {
		$("#body").style.backgroundImage = "url('assets/FactionsBackground.jpg')";
	}

	if (window.location.href.endsWith("resourcesTrivia.html")) {
		$("#body").style.backgroundImage = "url('assets/ResourcesBackground.webp')";
	}

	if (window.location.href.endsWith("warframesTrivia.html")) {
		$("#body").style.backgroundImage = "url('assets/WarframesBackground.webp')";
	}

	if (window.location.href.endsWith("weaponsTrivia.html")) {
		$("#body").style.backgroundImage = "url('assets/WeaponsBackground.jpg')";
	}
});