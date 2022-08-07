const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.scroll-spy');
const hero = document.querySelector('.hero');
const header = document.querySelector('.header');
const headerHeight = header.clientHeight;

function scrollTo(element) {
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

// fixing hero fullscreen with sticky header
hero.style.marginTop = `-${headerHeight}px`;

window.onscroll = () => {
    const currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
    const viewHeight = window.innerHeight;

    sections.forEach((v, i) => {
        const elementOffset = v.offsetTop;
        const elementHeight = v.clientHeight;

        // is scrolled more than element from top or 10% of element height from bottom
        if (
            currentScroll - headerHeight >= elementOffset ||
            currentScroll + viewHeight - elementHeight * 0.1 >= elementOffset
        ) {
            // remove all current active classes
            navLinks.forEach((v) => v.classList.remove('active'));
            document
                .querySelector(`a[href*=${sections[i].id}]`)
                .classList.add('active');
        } else {
            document
                .querySelector(`a[href*=${sections[i].id}]`)
                .classList.remove('active');
        }
    });
};
