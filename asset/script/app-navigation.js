const MENU_BUTTON_ELEMENT = document.getElementById('menu-btn');
const HEADER_NAVIGATION_MENU_ELEMENT = document.getElementById('header-nav');



/* ========== Header Navigation ========== */

const updateMenuButtonIcon = (removeElementClassName, addElementClass) => {
  MENU_BUTTON_ELEMENT.classList.remove(removeElementClassName);
  MENU_BUTTON_ELEMENT.classList.add(addElementClass);
};

const updateAccessibilityAttributes = (attributesValue) => {
  MENU_BUTTON_ELEMENT.setAttribute('aria-expanded', attributesValue);
  HEADER_NAVIGATION_MENU_ELEMENT.setAttribute('data-visible', attributesValue);
};

const toggleNav = () => {
  const isNavVisible = HEADER_NAVIGATION_MENU_ELEMENT.getAttribute('data-visible');

  if (isNavVisible === 'false') {
    updateMenuButtonIcon('menu-icon-open', 'menu-icon-close');

    HEADER_NAVIGATION_MENU_ELEMENT.classList.add('visible');

    updateAccessibilityAttributes('true');
  } else {
    updateMenuButtonIcon('menu-icon-close', 'menu-icon-open');

    HEADER_NAVIGATION_MENU_ELEMENT.classList.remove('visible');

    updateAccessibilityAttributes('false');
  }
};

export { MENU_BUTTON_ELEMENT, toggleNav };
