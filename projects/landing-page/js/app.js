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
 * Start Helper consts
 *
*/

const isNearTop = (section) => {
	const sectionSize = section.getBoundingClientRect();
	return (
		sectionSize.top >= -250 &&
		sectionSize.top <= 400
	);
};



/**
 * End Helper consts
 * Begin Main consts
 *
*/

// build the nav
const navBuild = () => {
	const navFrag = document.createDocumentFragment();
	for(let i = 1; i <= sectionList.length; i++){
		const newA = document.createElement('a');
		const newLi = document.createElement('li');
		const elId = sectionList[i-1].id;
		newA.setAttribute('class', 'menu__link');
		newA.setAttribute('href', '#'+ elId);
		newA.setAttribute('id', 'navlink' + i);
		newLi.textContent = elId;
		newA.appendChild(newLi);
		navFrag.appendChild(newA);
	}

	document.getElementById('navbar__list').appendChild(navFrag);
};

// Add class 'active' to section when near top of viewport

const setActive = () => {
	for(let i = 1; i <= sectionList.length; i++){
		const section = document.getElementById('section'+[i]);
		const navEl = document.getElementById('navlink' + i);
		if(isNearTop(section)){
			section.classList.add('active');
			navEl.classList.add('nav__active');
		}
		else if(!isNearTop(section)){
			section.classList.remove('active');
			navEl.classList.remove('nav__active');
		}
	}
};


// Scroll to anchor ID using scrollTO event

const handleClick = (e) => {
	event.preventDefault();
	//make sure click is on a nav element
	if(e.target.tagName === 'LI' || e.target.tagName === 'A'){
		const section = document.getElementById(e.target.textContent);
		const scrollToY = section.getBoundingClientRect().y + window.scrollY;
		window.scrollTo({
			top: scrollToY,
			behavior: 'smooth'
		});
	}
};


/**
 * End Main consts
 * Begin Events
 *
*/

// Build menu
navBuild();

// Scroll to section on link click
document.getElementsByTagName('nav')[0].addEventListener('click', handleClick);

// Set sections as active

window.addEventListener('scroll', setActive);


