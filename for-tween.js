gsap.registerPlugin(ScrollTrigger);
gsap.from('.message-box',{    
    duration:5,
    ease:"power2",
    opacity:0
});
gsap.from('.border-box',{
    scrollTrigger:{
        trigger:'.slider-box',
        start: 'center bottom'
    },
    duration:1,
    x: '-60px',
    ease:"power2",
    opacity:0
});
gsap.from('.slider-box',{
    scrollTrigger:{
        trigger:'.slider-box',
        start: 'center bottom'
    },
    duration:1,
    x: '60px',
    ease:"power3",
    opacity:0
});
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
gsap.from('.container',{
    scrollTrigger:{
        trigger:'.announce',
        start: 'center center'
    },
    duration:1,
    y: '60px',
    ease:"power3",
    opacity:0,
    stagger:.3,
});
gsap.from('.stecian-info',{
    scrollTrigger:{
        trigger:'.stecian-info',
        start: 'center bottom'
    },
    duration:1,
    x: '-60px',
    ease:"power3",
    opacity:0
});
gsap.from('.stecian',{
    scrollTrigger:{
        trigger:'.stecian-info',
        start: 'center bottom'
    },
    duration:1,
    x: '60px',
    ease:"power3",
    opacity:0
});
gsap.from('.map-info',{
    scrollTrigger:{
        trigger:'.map-info',
        start: 'center bottom'
    },
    duration:1,
    x: '60px',
    ease:"power3",
    opacity:0
});
gsap.from('.map',{
    scrollTrigger:{
        trigger:'.map-info',
        start: 'center bottom'
    },
    duration:1,
    x: '-60px',
    ease:"power3",
    opacity:0
});