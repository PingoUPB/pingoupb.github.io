---
---

"use strict"

onlyInGerman = document.querySelectorAll("[data-in-locale=de]")
notInGerman = document.querySelectorAll("[data-not-in-locale=de]")
language = window.navigator.userLanguage or window.navigator.language
userIsGerman = language.toLowerCase().indexOf("de") isnt -1

for item in onlyInGerman
  item.style.display = "none"  unless userIsGerman
for item in notInGerman
  item.style.display = "none"  if userIsGerman


swapMenu = () ->
	offset = window.pageYOffset | document.body.scrollTop;
	menu = document.querySelector(".main-nav")
	console.log menu

	if offset > 80
		menu.classList.remove("main-nav--header")
	else 
		menu.classList.add("main-nav--header")

window.onscroll = swapMenu

