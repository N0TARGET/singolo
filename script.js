const COLOR_WHITE = 'white';
const COLOR_ORANGE = '#f06c64';

addEventListener('DOMContentLoaded', function () {
  let coloredLinks = document.querySelectorAll('.link-colored');
  let pageSections = Array.from(document.getElementsByClassName("page-section"));

  addEventListener('scroll', highlightMenu);

  function clearColor(coloredLinks, color) {
    for (let i = 0; i < coloredLinks.length; i++) {
      coloredLinks[i].style.color = color;
    }
  }

  function highlightMenu() {
    pageSections.forEach(section => {
      if (isElementInViewport(section)) {
        let id = section.id;
        let element = document.querySelector(`[href='#${id}']`);
        if (element) {
          clearColor(coloredLinks, COLOR_WHITE);
          element.style.color = COLOR_ORANGE;
        }
      }
    })
  }

  function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});
