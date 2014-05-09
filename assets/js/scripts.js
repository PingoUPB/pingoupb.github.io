(function(){
  "use strict";

	var onlyInGerman = document.querySelectorAll("[data-in-locale=de]"), notInGerman = document.querySelectorAll("[data-not-in-locale=de]");
	var language = window.navigator.userLanguage || window.navigator.language;
	var userIsGerman = language.toLowerCase().indexOf('de') !== -1;
	var i, j, item;
	for (i = 0; i < onlyInGerman.length; ++i) {
	  item = onlyInGerman[i];
	  if(!userIsGerman){
	    item.style.display = 'none';
	  }
	}
	for (j = 0; j < notInGerman.length; ++j) {
	  item = notInGerman[j];
	  if(userIsGerman){
	    item.style.display = 'none';
	  }
	}
})();