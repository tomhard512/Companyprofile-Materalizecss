// navbar
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

// slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: true,
    height:700,
    transition: 600,
    interval: 3000
});

// client parallax
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// material box portfolio
const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox, {
    inDuration :800,
    outDuration	:900,
    // onOpenStart	:800,
    // onOpenEnd : 700,
    // onCloseStart : 600,
    // onCloseEnd : 500
});

// scrollspy
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
    scrollOffset: 50
});

// video
// const video = document.querySelectorAll('.video');
// M.Video.init(video);