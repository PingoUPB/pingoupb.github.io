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
