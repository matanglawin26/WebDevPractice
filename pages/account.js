gsap.registerPlugin(ScrollTrigger);
gsap.from('.intro h1',{
    y:'-30px',
    duration:1,
    opacity:0,
    ease:"power2"
});
gsap.from('.intro p',{
    y:'30px',
    duration:1,
    opacity:0,
    ease:"power2"
});
gsap.from('.login-text',{
    x:'-60px',
    duration:1,
    opacity:0,
    ease:"power3"
});
gsap.from('.login',{
    x:'60px',
    duration:1,
    opacity:0,
    ease:"power3"
});