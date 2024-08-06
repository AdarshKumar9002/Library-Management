const MENU_BUTTON_ELEMENT = document.getElementById('menu-btn');
const HEADER_NAVIGATION_MENU_ELEMENT = document.getElementById('header-nav');
const BOOK_NAV_BUTTON_ELEMENT =
  HEADER_NAVIGATION_MENU_ELEMENT.querySelector('#book-list-btn');
const BOOK_NAV_LIST_ELEMENT =
  HEADER_NAVIGATION_MENU_ELEMENT.querySelector('#book-list');

/* ========== Header Navigation ========== */

const updateMenuButtonIcon = (removeElementClassName, addElementClass) => {
  MENU_BUTTON_ELEMENT.classList.remove(removeElementClassName);
  MENU_BUTTON_ELEMENT.classList.add(addElementClass);
};

const updateAccessibilityAttributes = (
  firstElement,
  secondElement,
  attributesValue,
) => {
  firstElement.setAttribute('aria-expanded', attributesValue);
  secondElement.setAttribute('data-visible', attributesValue);
};

const toggleNav = () => {
  const isNavVisible =
    HEADER_NAVIGATION_MENU_ELEMENT.getAttribute('data-visible');

  if (isNavVisible === 'false') {
    updateMenuButtonIcon('menu-icon-open', 'menu-icon-close');

    HEADER_NAVIGATION_MENU_ELEMENT.classList.add('visible');

    updateAccessibilityAttributes(
      MENU_BUTTON_ELEMENT,
      HEADER_NAVIGATION_MENU_ELEMENT,
      'true',
    );
  } else {
    updateMenuButtonIcon('menu-icon-close', 'menu-icon-open');

    HEADER_NAVIGATION_MENU_ELEMENT.classList.remove('visible');

    updateAccessibilityAttributes(
      MENU_BUTTON_ELEMENT,
      HEADER_NAVIGATION_MENU_ELEMENT,
      'false',
    );
  }
};

/* ========== Book list ========== */

const toggleBookList = () => {
  const isBookListVisible = BOOK_NAV_LIST_ELEMENT.getAttribute('data-visible');

  if (isBookListVisible === 'false') {
    BOOK_NAV_LIST_ELEMENT.classList.add('visible');

    updateAccessibilityAttributes(
      BOOK_NAV_BUTTON_ELEMENT,
      BOOK_NAV_LIST_ELEMENT,
      'true',
    );
  } else {
    BOOK_NAV_LIST_ELEMENT.classList.remove('visible');

    updateAccessibilityAttributes(
      BOOK_NAV_BUTTON_ELEMENT,
      BOOK_NAV_LIST_ELEMENT,
      'false',
    );
  }
};

export {
  MENU_BUTTON_ELEMENT,
  BOOK_NAV_BUTTON_ELEMENT,
  toggleNav,
  toggleBookList,
};
