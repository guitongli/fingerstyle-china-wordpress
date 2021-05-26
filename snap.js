
// banner
let duration = 10,
		sections = gsap.utils.toArray(".panel"),
		sectionIncrement = duration / (sections.length-1),
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
  xPercent: -100 * (sections.length -1),
  duration: duration,
  ease: "none"
});
