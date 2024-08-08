$(function(){
    const cat = document.getElementById("cat-animation");
    var animation = lottie.loadAnimation({
        container: cat,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'js/animation/cat.json' 
    });


    gsap.registerPlugin(ScrollTrigger);

    animation.addEventListener('DOMLoaded', function() {
        var totalFrames = animation.totalFrames;

        gsap.to(animation, {
            frame: totalFrames,
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                onUpdate: self => {
                    const frame = self.progress * totalFrames;
                    animation.goToAndStop(frame, true);
                }
            }
        });
    });
})