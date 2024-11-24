"use strict";

const $ = selector => document.querySelector(selector);

const factionSelect = () => {
    $("#category_select").value = $("#factions").textContent
}

const resourceSelect = () => {
	$("#category_select").value = $("#resources").textContent
}

const warframeSelect = () => {
	$("#category_select").value = $("#warframes").textContent
}

const weaponSelect = () => {
	$("#category_select").value = $("#weapons").textContent
}


document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#factions").addEventListener("click", factionSelect)
	$("#resources").addEventListener("click", resourceSelect)
	$("#warframes").addEventListener("click", warframeSelect)
	$("#weapons").addEventListener("click", weaponSelect)
});