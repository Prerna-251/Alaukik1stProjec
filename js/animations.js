function initAboutAnimation() {

    console.log("animations.js loaded");

    gsap.timeline({
        scrollTrigger: {
            trigger: "#about",
            start: "top 70%",
            toggleActions: "play none none none"
        }
    })

    .from(".book", {
        opacity: 0,
        scale: 0.9,
        y: 60,
        duration: 0.8,
        ease: "power2.out"
    })

    .from(".left-page", {
        opacity: 0,
        xPercent: -30,
        rotateY: -15,
        transformOrigin: "right center",
        duration: 0.8
    }, "-=0.3")

    .from(".right-page", {
        opacity: 0,
        xPercent: 30,
        rotateY: 15,
        transformOrigin: "left center",
        duration: 0.8
    }, "-=0.8")

    .from(".book-page h3", {
        opacity: 0,
        y: 20,
        stagger: 0.2
    })

    .from(".book-page p, .info-box", {
        opacity: 1,
        y: 15,
        stagger: 0.1
    }, "-=0.2");
}