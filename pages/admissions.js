gsap.registerPlugin(ScrollTrigger);
gsap.from('.msg-box',{    
    duration:5,
    ease:"power2",
    opacity:0
});
gsap.from('.login-text',{
    scrollTrigger:{
        trigger:'.login',
        start: '24% center',
    },
    duration:1,
    // x: '-60px',
    y: '60px',
    ease:"power2",
    opacity:0
});
/*gsap.from('.login',{
    scrollTrigger:{
        trigger:'.login',
        start: 'center bottom'
    },
    duration:1,
    x: '60px',
    ease:"power3",
    opacity:0
});*/
gsap.from('.announce',{
    scrollTrigger:{
        trigger:'.announce',
        start: 'center center'
    },
    duration:1,
    y: '-60px',
    ease:"power3",
    opacity:0
});
gsap.from('.strands',{
    scrollTrigger:{
        trigger:'.announce',
        start: 'center center'
    },
    delay:.5,
    opacity:0,
    y:'-60px',
    duration: 1,
    stagger: .3,
});
gsap.from('.jhs-box',{
    scrollTrigger:{
        trigger:'.jhs-text',
        start: 'center bottom'
    },
    duration:1,
    x: '-60px',
    ease:"power2",
    opacity:0
});
gsap.from('.jhs-text',{
    scrollTrigger:{
        trigger:'.jhs-text',
        start: 'center bottom'
    },
    duration:1,
    x: '60px',
    ease:"power3",
    opacity:0
});
gsap.from('.body4 > h1',{
    scrollTrigger:{
        trigger:'.body4 > h1',
        start: 'center center'
    },
    duration:1,
    y: '-60px',
    ease:"power3",
    opacity:0
});