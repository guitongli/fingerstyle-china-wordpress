//https://co-berlin.org/en

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

	function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
    
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) }, 
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});

//sticky menu when scrolling up
var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop && st>1500){
      $('#nav').addClass('sticky');
          //  alert('gotcha')
   } else {
      $('#nav').removeClass('sticky');
   
 
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

    var $grid = $('.grid').isotope({
        itemSelector: ".grid-item",
        layoutMode: 'fitRows',
//         layoutMode: 'masonry',
//         persentPosition:true,
// masonry: {
//   columnWidth: 50
// }
    });


    $(".button-group").on("click", "button", function () {

        var filterValue = $(this).attr("data-filter");
        console.log('clicked', filterValue);
        $grid.isotope({ filter: filterValue });
    });