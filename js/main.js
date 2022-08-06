function scrollTo(element) {
    const headerHeight = document.querySelector('.header').clientHeight;
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop - headerHeight,
    });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        scrollTo(document.querySelector(this.getAttribute('href')));
    });
});
