// theme switch button
const themeSwitcher = document.getElementById("theme-switch");
themeSwitcher.checked = true;

function clickHandler() {

	if (this.checked) {
	  	
		//if dark switch to light
		document.body.setAttribute('data-theme', 'light');
		localStorage.removeItem('bulldog_data-theme'); //remove item if default
		
	} else {
		// if light switch to dark
		document.body.setAttribute('data-theme', 'dark');
		localStorage.setItem('bulldog_data-theme', 'dark'); //set local storage
	}
  }
  themeSwitcher.addEventListener("click", clickHandler);



//Reset theme from local Storage13
window.onload = checkTheme();

  function checkTheme() {

	  const localStorageTheme = localStorage.getItem("bulldog_data-theme"); //get theme from local storage

	  if(localStorageTheme !== null && localStorageTheme === "dark"){
		  	document.body.setAttribute("data-theme", "dark"); //set theme to dark if dark -> light is default so do nothing
			themeSwitcher.checked = false;
		}
		else if(theme === "dark"){
			document.body.setAttribute("data-theme", "dark"); //set theme to dark if dark -> light is default so do nothing
			themeSwitcher.checked = false;
		}
		else if(theme === "auto" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
			document.body.setAttribute("data-theme", "dark"); //set theme to dark if dark -> light is default so do nothing
			themeSwitcher.checked = false;
		}
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
		themeSwitcher.checked = true;
  })

  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
	themeSwitcher.checked = false;
})

  
function larger_font() { 
	document.getElementsByTagName('html')[0].style.fontSize = "larger";
}

function smaller_font() { 
	document.getElementsByTagName('html')[0].style.fontSize = "smaller";
}

'use strict';


(function ($) {

	$(document).ready(function () {
		
		//FONT SIZE FUNCTION

		var resize = new Array('.resizable');
		resize = resize.join(',');

		//resets the font size when "reset" is clicked
		var resetFont = $(resize).css('font-size');

		$(".reset").click(function() {
			$(resize).css('font-size', resetFont);

		});

		//increases font size when "+" is clicked
		$(".increase").click(function() {
			var originalFontSize = $(resize).css('font-size');
			var originalFontNumber = parseFloat(originalFontSize, 10);
			var newFontSize = originalFontNumber * 1.2;

			$(resize).css('font-size', newFontSize);

			return false;
		});

		//decrease font size when "-" is clicked

		$(".decrease").click(function() {
			var originalFontSize = $(resize).css('font-size');
			var originalFontNumber = parseFloat(originalFontSize, 10);
			var newFontSize = originalFontNumber * 0.8;
						
			$(resize).css('font-size', newFontSize);

			return false;
		});
	});

})(jQuery);