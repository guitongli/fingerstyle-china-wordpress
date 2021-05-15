gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});


 
    // const hamburger = document.getElementsByClassName('.burger')[0];
    // $hamburger= 
	const nav = useRef();
	const menuNav = useRef();
	const navLink = useRef();
	const navItem = useRef([]);
	var showMenu = false;
	const video = useRef();
	const producer = useRef();

	function toggleMenu() {
		if (!showMenu) {
			hamburger.classList.add('open');
			nav.current.className = "nav open";
			menuNav.current.className = "menu-nav open";
			// 			for (var i =0; i<=4; i++){
			// navLink.current[i].className = "menu-nav__link open";
			// 			}
			for (var j = 0; j <= 4; j++) {
				navItem.current[j].className = "menu-nav__item active open";
			}
			// navItem.current.className="menu-nav__item active open"
			showMenu = true;
		} else {
			hamburger.current.className = "menu-btn__burger";
			nav.current.className = "nav";
			menuNav.current.className = "menu-nav";
			navLink.current.className = "menu-nav__link";
			for (var i = 0; i <= 4; i++) {
				navItem.current[i].className = "menu-nav__item active";
			}

			showMenu = false;
		}
	}