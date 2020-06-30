/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sectionList = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function isNearTop(section) {
  const sectionSize = section.getBoundingClientRect();
  const html = document.documentElement;
  return (
    sectionSize.top >= 0 &&
	sectionSize.top <= 100 &&
    sectionSize.bottom <= (window.innerHeight || html.clientHeight))
  );
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function navBuild() {
	const navFrag = document.createDocumentFragment();
	for(let i = 0; i < sectionList.length; i++){
		const newA = document.createElement('a');
		const newLi = document.createElement('li');
		const elId = sectionList[i].id;
		newA.setAttribute('class', 'menu__link');
		newA.setAttribute('href','#'+ elId)
		newLi.textContent = elId;
		newA.appendChild(newLi);
		navFrag.appendChild(newA);
	}
	
	document.getElementById('navbar__list').appendChild(navFrag);
}

// Add class 'active' to section when near top of viewport



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
navBuild();

// Scroll to section on link click

// Set sections as active


