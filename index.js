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
$('#burger').click(function(){
	
		toggleMenu();
	});
	 
	var showMenu = false; 

	function toggleMenu() {
		if (!showMenu) {
			console.log('clicked');
			$('#burger').addClass('open');
			$('#nav').addClass('open');
			// menuNav.current.className = "menu-nav open";
			// 			for (var i =0; i<=4; i++){
			// navLink.current[i].className = "menu-nav__link open";
			// 			}
			// for (var j = 0; j <= 4; j++) {
				$('.nav__items__item').addClass("open");
			// }
			// navItem.current.className="menu-nav__item active open"
			showMenu = true;
		} else {
			$('#burger').removeClass('open');
			$('#nav').removeClass('open');
			for (var i = 0; i <= 4; i++) {
			$('.nav__items__item').removeClass("open");
			}

			showMenu = false;
		}
	}