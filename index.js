//https://co-berlin.org/en

gsap.registerPlugin(ScrollTrigger);

let duration = 10,
		sections = gsap.utils.toArray(".panel"),
		sectionIncrement = duration / (sections.length - 1),
		tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".container",
				pin: true,
				scrub: 1,
        snap: 1 / (sections.length - 1),
				start: "top top",
				end: "+=5000"
			}
		});

tl.to(sections, {
  xPercent: -100 * (sections.length - 1),
  duration: duration,
  ease: "none"
});



// everything below this is just for the fading/scaling up which is NOT scrubbed - it's all dynamic, triggered when each section enters/leaves so that the fading/scaling occurs at a consistent rate no matter how fast you scroll!
sections.forEach((section, index) => {
  let tween = gsap.from(section, {
    opacity: 0, 
    scale: 0.6, 
    duration: 1, 
    force3D: true, 
    paused: true
  });
  addSectionCallbacks(tl, {
    start: sectionIncrement * (index - 0.99),
    end: sectionIncrement * (index + 0.99),
    onEnter: () => tween.play(),
    onLeave: () => tween.reverse(),
    onEnterBack: () => tween.play(),
    onLeaveBack: () => tween.reverse()
  });
  index || tween.progress(1); // the first tween should be at its end (already faded/scaled in)
});





// helper function that lets us define a section in a timeline that spans between two times (start/end) and lets us add onEnter/onLeave/onEnterBack/onLeaveBack callbacks
function addSectionCallbacks(timeline, {start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack}) {
  let trackDirection = animation => { // just adds a "direction" property to the animation that tracks the moment-by-moment playback direction (1 = forward, -1 = backward)
    let onUpdate = animation.eventCallback("onUpdate"), // in case it already has an onUpdate
        prevTime = animation.time();
    animation.direction = animation.reversed() ? -1 : 1;
    animation.eventCallback("onUpdate", () => {
      let time = animation.time();
      if (prevTime !== time) {
        animation.direction = time < prevTime ? -1 : 1;
        prevTime = time;
      }
      onUpdate && onUpdate.call(animation);
    });
  },
      empty = v => v; // in case one of the callbacks isn't defined
  timeline.direction || trackDirection(timeline); // make sure direction tracking is enabled on the timeline
  start >= 0 && timeline.add(() => ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(param), start);
  end <= timeline.duration() && timeline.add(() => ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(param), end);
}


 


// const hamburger = document.getElementsByClassName('.burger')[0];
$('#burger').click(function () {

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
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
    duration: 1.25,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      onEnter: function () { animateFrom(elem) },
      onEnterBack: function () { animateFrom(elem, -1) },
      onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});

//sticky menu when scrolling up
var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function () { // or window.addEventListener("scroll"....
  var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (st > lastScrollTop && st > 1500) {
    $('#nav').addClass('sticky');
    //  alert('gotcha')
  } else {
    $('#nav').removeClass('sticky');


  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

// var $grid = $('.grid').isotope({
//   itemSelector: ".grid-item",
//   layoutMode: 'fitRows',
//   //         layoutMode: 'masonry',
//   //         persentPosition:true,
//   // masonry: {
//   //   columnWidth: 50
//   // }
// });


// $(".button-group").on("click", "button", function () {

//   var filterValue = $(this).attr("data-filter");
//   console.log('clicked', filterValue);
//   $grid.isotope({ filter: filterValue });
// });




// intruduction with animation

// function animateFrom2(elem, direction) {
//   direction = direction || 1;
//   var x = 0,
//       y = direction * 100;
//   if(elem.classList.contains("gs_reveal_fromLeft")) {
//     x = -100;
//     y = 0;
//   } else if (elem.classList.contains("gs_reveal_fromRight")) {
//     x = 100;
//     y = 0;
//   }
//   elem.style.transform = "translate(" + x + "px, " + y + "px)";
//   elem.style.opacity = "0";
//   gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
//     duration: 1.25, 
//     x: 0,
//     y: 0, 
//     autoAlpha: 1, 
//     ease: "expo", 
//     overwrite: "auto"
//   });
// }

// function hide(elem) {
//   gsap.set(elem, {autoAlpha: 0});
// }

// document.addEventListener("DOMContentLoaded", function() {
//   gsap.registerPlugin(ScrollTrigger);
  
//   gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
//     hide(elem); // assure that the element is hidden when scrolled into view
    
//     ScrollTrigger.create({
//       trigger: elem,
//       onEnter: function() { animateFrom2(elem) }, 
//       onEnterBack: function() { animateFrom(elem, -1) },
//       onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
//     });
//   });
// });
