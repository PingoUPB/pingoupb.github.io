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

menu = document.querySelector(".main-nav.main-nav--header")

swapMenu = () ->
  offset = window.pageYOffset | document.body.scrollTop;

  if offset > 80
    menu.classList.remove("main-nav--header")
  else
    menu.classList.add("main-nav--header")

if menu
  window.onscroll = swapMenu

