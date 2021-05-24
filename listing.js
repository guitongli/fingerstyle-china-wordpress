
// animated listing

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
$(window).on('load',()=>{

var $grid = $('.grid').isotope({
  itemSelector: ".grid-item",
  layoutMode: 'fitRows',
  //         layoutMode: 'masonry',
  //         persentPosition:true,
  // masonry: {
  //   columnWidth: 50
  // }
});


return $grid;

});
$(".button-group").on("click", "button", function () {

  var filterValue = $(this).attr("data-filter");
  console.log('clicked', filterValue);
  $grid.isotope({ filter: filterValue });
});


var lastScrollTop = 0;

window.addEventListener("scroll", function () { // or window.addEventListener("scroll"....
  var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (st > lastScrollTop) {
    console.log(st)
    $('header').removeClass('sticky');
   
  } else if (st< lastScrollTop && st > 6500){
     console.log('added')
    $('header').addClass('sticky');



  }  else if (st< lastScrollTop && st < 6500){
     console.log('added')
    $('header').removeClass('sticky');



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

 