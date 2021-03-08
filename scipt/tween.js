gsap.registerPlugin(ScrollTrigger):

gsap.from('.title',{
    scrollTrigger:'.title',
    duration:1,
    x: '-50vh',
    y:'20vh',
    ease:"power1"
});