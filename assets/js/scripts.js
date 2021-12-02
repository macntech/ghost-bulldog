// theme switch button
document.querySelector('.theme-switch').addEventListener('click', () => {

	let domTheme = document.body.getAttribute('data-theme');
	$button = $('#switch'); //identify button with switch ID

	if (domTheme === 'light') {
	  	// if light switch to dark
	  	document.body.setAttribute('data-theme', 'dark');
		localStorage.setItem('marie_data-theme', 'dark'); //set local storage

	} else {
		//if dark switch to light
	  	document.body.setAttribute('data-theme', 'light');
		localStorage.removeItem('marie_data-theme'); //remove item if default
	}
  });

//Reset theme from local Storage13
window.onload = checkTheme();

  function checkTheme() {

	  const localStorageTheme = localStorage.getItem("marie_data-theme"); //get theme from local storage

	  if(localStorageTheme !== null && localStorageTheme === "dark"){
		  document.body.setAttribute("data-theme", "dark"); //set theme to dark if dark -> light is default so do nothing
	  }
  }


  